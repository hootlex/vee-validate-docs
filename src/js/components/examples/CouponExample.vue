<template>
    <code-example>
        <div slot="example" class="columns is-multiline">
            <div class="column is-12">
                <span :class="{ 'discounted': discounted }">Price: {{ price }}$</span>
                <span v-show="discounted" class="SeemsGood">{{ discountedPrice }}$</span>
            </div>
            <form @submit.prevent="applyCoupon" class="column is-12">
                <label class="label">Coupon</label>
                <p class="control has-icon has-icon-right">
                    <input v-model="coupon" name="coupon" :class="{'input': true, 'is-danger': errors.has('coupon') }" type="text" placeholder="Enter Your Coupon">
                    <i v-show="errors.has('coupon')" class="fa fa-warning"></i>
                    <span v-show="errors.has('coupon')" class="help is-danger">{{ errors.first('coupon') }}</span>
                </p>

                <p class="control">
                    <button type="submit" class="button is-primary" name="button">Apply</button>
                </p>
            </form>
        </div>

        <div slot="code-html">
            &lt;div class=&quot;columns is-multiline&quot;&gt;
                &lt;div class=&quot;column is-12&quot;&gt;
                    &lt;span :class=&quot;{ 'discounted': discounted }&quot;&gt;Price: {{ "{" + "{ price }" + "}" }}$&lt;/span&gt;
                    &lt;span v-show=&quot;discounted&quot; class=&quot;SeemsGood&quot;&gt;{{ "{" + "{ discountedPrice }" + "}" }}$&lt;/span&gt;
                &lt;/div&gt;
                &lt;form @submit.prevent=&quot;applyCoupon&quot; class=&quot;column is-12&quot;&gt;
                    &lt;label class=&quot;label&quot;&gt;Coupon&lt;/label&gt;
                    &lt;p class=&quot;control has-icon has-icon-right&quot;&gt;
                        &lt;input name=&quot;coupon&quot; :class=&quot;{'input': true, 'is-danger': errors.has('coupon') }&quot; type=&quot;text&quot; placeholder=&quot;Enter Your Coupon&quot;&gt;
                        &lt;i v-show=&quot;errors.has('coupon')&quot; class=&quot;fa fa-warning&quot;&gt;&lt;/i&gt;
                        &lt;span v-show=&quot;errors.has('coupon')&quot; class=&quot;help is-danger&quot;&gt;{{ "{" + "{ errors.first('coupon') }" + "}" }}&lt;/span&gt;
                    &lt;/p&gt;

                    &lt;p class=&quot;control&quot;&gt;
                        &lt;button type=&quot;submit&quot; class=&quot;button is-primary&quot; name=&quot;button&quot;&gt;Apply&lt;/button&gt;
                    &lt;/p&gt;
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
                    // to avoid validating using non-existant rules
                    // you might want to extract any extending to your entry or bootstrapping phase
                    // to avoid re-adding an already attached rule which will throw an exception.
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
                                    valid: value && !! ~validCoupons.indexOf(value.toUpperCase())
                                });
                            }, 500);
                        })
                    });

                    this.$validator.attach('coupon', 'required|verify_coupon');
                }
            }
        </div>
    </code-example>
</template>

<script>
export default {
    data: () => ({
        coupon: '',
        price: 100,
        discounted: false
    }),
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
        }
    },
    created() {
        this.$validator.attach('coupon', 'required|verify_coupon');
    }
};
</script>


<style lang="stylus">
.discounted
    text-decoration: line-through
.SeemsGood
    color: #41b883
</style>
