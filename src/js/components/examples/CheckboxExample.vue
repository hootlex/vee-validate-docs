<template>
    <code-example>
        <div slot="example">
            <div class="terms">
                <p>
                    {{ terms }}
                </p>
            </div>
            <div>
                <p class="control">
                    <label class="checkbox">
                        <input name="terms" v-validate data-rules="required" type="checkbox">
                        I agree to the terms and conditions.
                    </label>
                    <span class="help is-danger" v-show="errors.has('terms')">{{ errors.first('terms') }}</span>
                </p>
            </div>
            <p class="control">
                <button type="button" class="button is-primary" @click="nextStep">Next</button>
            </p>
        </div>
        <div slot="code-html">
            &lt;div &gt;
                &lt;div class=&quot;terms&quot;&gt;
                    &lt;p&gt;
                        {{ terms }}
                    &lt;/p&gt;
                &lt;/div&gt;
                &lt;div&gt;
                    &lt;p class=&quot;control&quot;&gt;
                        &lt;label class=&quot;checkbox&quot;&gt;
                            &lt;input name=&quot;terms&quot; v-validate data-rules=&quot;required&quot; type=&quot;checkbox&quot;&gt;
                            I agree to the terms and conditions.
                        &lt;/label&gt;
                        &lt;span class=&quot;help is-danger&quot; v-show=&quot;errors.has('terms')&quot;&gt;{{ "{" + "{ errors.first('terms') }" + "}" }}&lt;/span&gt;
                    &lt;/p&gt;
                &lt;/div&gt;
                &lt;p class=&quot;control&quot;&gt;
                    &lt;button type=&quot;button is-primary&quot; class=&quot;button&quot; @click=&quot;nextStep&quot;&gt;Next&lt;/button&gt;
                &lt;/p&gt;
            &lt;/div&gt;
        </div>
        <div slot="code-js">
            import Vue from 'vue';
            import VeeValidate from 'vee-validate';

            Vue.use(VeeValidate);

            new Vue({
                el: '#app',
                methods: {
                    nextStep() {
                        this.$validator.validateAll();
                        if (this.errors.any()) {
                            return;
                        }

                        alert('You just agreed to conditions without reading it.');
                    }
                }
            });
        </div>
    </code-example>
</template>

<script>
const terms = 'Lorem ipsum dolor sit amet, consectetur adipisicing elit ';

export default {
    data: () => ({
        terms: terms.repeat(20)
    }),
    methods: {
        nextStep() {
            this.$validator.validateAll();
            if (this.errors.any()) {
                return;
            }
            // eslint-disable-next-line
            alert('You just agreed to conditions without reading it.');
        }
    }
};
</script>

<style lang="stylus">
.terms
    background-color: #e6e6e6
    overflow: auto
    height: 200px
    width: 100%
    margin-bottom: 20px
</style>
