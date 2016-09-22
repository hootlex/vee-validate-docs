<template>
    <code-example>
        <div slot="example">
            <div>
                <span :class="{ 'discounted': discounted }">Price: {{ price }}$</span>
                <span v-show="discounted" class="SeemsGood">{{ discountedPrice }}$</span>
            </div>
            <form @submit.prevent="applyCoupon" class="pure-form pure-form-stacked">
                <div class="pure-u-1">
                    <label :class="{'error': errors.has('coupon') }" for="email">Coupon</label>
                    <input v-model="coupon" :class="{'pure-input-1': true, 'has-error': errors.has('coupon') }" type="text" placeholder="Enter Your Coupon">
                    <span class="error" v-show="errors.has('coupon')">{{ errors.first('coupon') }}</span>
                </div>

                <button type="submit" class="pure-button pure-button-primary" name="button">Apply</button>
            </form>
        </div>

        <div slot="code-html">
            &lt;div&gt;
                &lt;div&gt;
                    &lt;span :class=&quot;{ 'discounted': discounted }&quot;&gt;Price: {{ price }}$&lt;/span&gt;
                    &lt;span v-show=&quot;discounted&quot; class=&quot;SeemsGood&quot;&gt;{{ discountedPrice }}$&lt;/span&gt;
                &lt;/div&gt;
                &lt;form @submit.prevent=&quot;applyCoupon&quot; class=&quot;pure-form pure-form-stacked&quot;&gt;
                    &lt;div class=&quot;pure-u-1&quot;&gt;
                        &lt;label :class=&quot;{'error': errors.has('coupon') }&quot; for=&quot;email&quot;&gt;Coupon&lt;/label&gt;
                        &lt;input v-model=&quot;coupon&quot; :class=&quot;{'pure-input-1': true, 'has-error': errors.has('coupon') }&quot; type=&quot;text&quot; placeholder=&quot;Enter Your Coupon&quot;&gt;
                        &lt;span class=&quot;error&quot; v-show=&quot;errors.has('coupon')&quot;&gt;{{ errors.first('coupon') }}&lt;/span&gt;
                    &lt;/div&gt;

                    &lt;button type=&quot;submit&quot; class=&quot;pure-button pure-button-primary&quot; name=&quot;button&quot;&gt;Apply&lt;/button&gt;
                &lt;/form&gt;
            &lt;/div&gt;
        </div>

        <div slot="code-js">
            import Vue from 'vue';
            import VeeValidate from 'vee-validate';

            Vue.use(VeeValidate);

            new Vue ({
                el: '#app',
                data() {
                    return {
                        coupon: '',
                        price: 100,
                        discounted: false
                    }
                },
                computed: {
                    discountedPrice() {
                        return this.discounted ? this.price - (0.2 * this.price) : this.price;
                    }
                },
                methods: {
                    applyCoupon() {
                        // Notice that it returns a promise instead of a boolean because
                        // there is at least one rule that returns a promise.
                        // all the result of all validations ran will be ANDed in the result param.
                        // true => All Pass
                        // false => At least one failed
                        this.$validator.validate('coupon', this.coupon).then(result => {
                            this.discounted = result;
                        });
                    }
                },
                created() {
                    // Make sure you extend before any validation occurs
                    // to avoid validating using non-existant rules.
                    this.$validator.extend('verify_coupon', {
                        getMessage: (field) => `The ${field} is not a valid coupon.`,
                        // If you want to return a promise you will have to make sure it always resolves
                        // to an object containing a 'valid' property which is a boolean state of the validation.
                        validate: (value) => new Promise(resolve => {
                            const validCoupons = [
                                'SUMMER2016',
                                'WINTER2016',
                                'FALL2016'
                                // I don't like spring :(
                            ];

                            // Simulate getting data from slow backend api.
                            setTimeout(() => {
                                resolve({
                                    valid: !! ~validCoupons.indexOf(value.toUpperCase())
                                });
                            }, 500);
                        })
                    });

                    this.$validator.attach('coupon', 'verify_coupon');
                }
            }
        </div>
    </code-example>
</template>

<script>
export default {
    data() {
        return {
            coupon: '',
            price: 100,
            discounted: false
        }
    },
    computed: {
        discountedPrice() {
            return this.discounted ? this.price - (0.2 * this.price) : this.price;
        }
    },
    methods: {
        applyCoupon() {
            this.$validator.validate('coupon', this.coupon).then(result => {
                this.discounted = result;
            });
        },
        created() {
            this.$validator.attach('coupon', 'verify_coupon');
        }
    }
}
</script>


<style lang="sass">
.discounted {
    text-decoration: line-through
}

.SeemsGood {
    color: #41b883
}
</style>
