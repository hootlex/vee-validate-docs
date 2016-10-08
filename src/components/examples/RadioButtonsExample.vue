<template>
    <code-example>
        <form @submit.prevent="validateForm" slot="example" class="pure-form pure-form-stacked">
            <div class="pure-g">
                <div class="pure-u-1-2">
                    <legend :class="{ 'error': errors.has('radio_group_1') }">Radio Group 1</legend>
                    <label for="radio_group_1_1" class="pure-radio">
                        <input id="radio_group_1_1" name="radio_group_1" v-validate data-rules="required|in:1,2" value="1" type="radio">
                        Option 1
                    </label>
                    <label for="radio_group_1_2" class="pure-radio">
                        <input id="radio_group_1_2" name="radio_group_1" value="2" type="radio">
                        Option 2
                    </label>
                    <label for="radio_group_1_3" class="pure-radio">
                        <input id="radio_group_1_3" name="radio_group_1" value="3" type="radio">
                        Option 3
                    </label>
                    <span class="error" v-show="errors.has('radio_group_1')">{{ errors.first('radio_group_1') }}</span>
                </div>

                <div class="pure-u-1-2">
                    <legend :class="{ 'error': errors.has('radio_group_2') }">Radio Group 2 (Bound)</legend>
                    <label for="radio_group_2_1" class="pure-radio">
                        <input id="radio_group_2_1" v-model="radio_group_2" v-validate="radio_group_2" data-rules="required|in:1,2" name="radio_group_2" value="1" type="radio">
                        Option 1
                    </label>
                    <label for="radio_group_2_2" class="pure-radio">
                        <input id="radio_group_2_2" v-model="radio_group_2" name="radio_group_2" value="2" type="radio">
                        Option 2
                    </label>
                    <label for="radio_group_2_3" class="pure-radio">
                        <input id="radio_group_2_3" v-model="radio_group_2" name="radio_group_2" value="3" type="radio">
                        Option 3
                    </label>
                    <span class="error" v-show="errors.has('radio_group_2')">{{ errors.first('radio_group_2') }}</span>
                </div>
            </div>

            <button type="submit" class="pure-button pure-button-primary" name="button">Apply</button>
        </form>

        <div slot="code-html">
            &lt;form @submit.prevent=&quot;validateForm&quot; class=&quot;pure-form pure-form-stacked&quot;&gt;
                &lt;div class=&quot;pure-g&quot;&gt;
                    &lt;div class=&quot;pure-u-1-2&quot;&gt;
                        &lt;legend :class=&quot;{ 'error': errors.has('radio_group_1') }&quot;&gt;Radio Group 1&lt;/legend&gt;
                        &lt;label for=&quot;radio_group_1_1&quot; class=&quot;pure-radio&quot;&gt;
                            &lt;input id=&quot;radio_group_1_1&quot; name=&quot;radio_group_1&quot; v-validate data-rules=&quot;required|in:1,2&quot; value=&quot;1&quot; type=&quot;radio&quot;&gt;
                            Option 1
                        &lt;/label&gt;
                        &lt;label for=&quot;radio_group_1_2&quot; class=&quot;pure-radio&quot;&gt;
                            &lt;input id=&quot;radio_group_1_2&quot; name=&quot;radio_group_1&quot; value=&quot;2&quot; type=&quot;radio&quot;&gt;
                            Option 2
                        &lt;/label&gt;
                        &lt;label for=&quot;radio_group_1_3&quot; class=&quot;pure-radio&quot;&gt;
                            &lt;input id=&quot;radio_group_1_3&quot; name=&quot;radio_group_1&quot; value=&quot;3&quot; type=&quot;radio&quot;&gt;
                            Option 3
                        &lt;/label&gt;
                        &lt;span class=&quot;error&quot; v-show=&quot;errors.has('radio_group_1')&quot;&gt;{{ errors.first('radio_group_1') }}&lt;/span&gt;
                    &lt;/div&gt;

                    &lt;div class=&quot;pure-u-1-2&quot;&gt;
                        &lt;legend :class=&quot;{ 'error': errors.has('radio_group_2') }&quot;&gt;Radio Group 2 (Bound)&lt;/legend&gt;
                        &lt;label for=&quot;radio_group_2_1&quot; class=&quot;pure-radio&quot;&gt;
                            &lt;input id=&quot;radio_group_2_1&quot; v-model=&quot;radio_group_2&quot; v-validate=&quot;radio_group_2&quot; data-rules=&quot;required|in:1,2&quot; name=&quot;radio_group_2&quot; value=&quot;1&quot; type=&quot;radio&quot;&gt;
                            Option 1
                        &lt;/label&gt;
                        &lt;label for=&quot;radio_group_2_2&quot; class=&quot;pure-radio&quot;&gt;
                            &lt;input id=&quot;radio_group_2_2&quot; v-model=&quot;radio_group_2&quot; name=&quot;radio_group_2&quot; value=&quot;2&quot; type=&quot;radio&quot;&gt;
                            Option 2
                        &lt;/label&gt;
                        &lt;label for=&quot;radio_group_2_3&quot; class=&quot;pure-radio&quot;&gt;
                            &lt;input id=&quot;radio_group_2_3&quot; v-model=&quot;radio_group_2&quot; name=&quot;radio_group_2&quot; value=&quot;3&quot; type=&quot;radio&quot;&gt;
                            Option 3
                        &lt;/label&gt;
                        &lt;span class=&quot;error&quot; v-show=&quot;errors.has('radio_group_2')&quot;&gt;{{ errors.first('radio_group_2') }}&lt;/span&gt;
                    &lt;/div&gt;
                &lt;/div&gt;

                &lt;button type=&quot;submit&quot; class=&quot;pure-button pure-button-primary&quot; name=&quot;button&quot;&gt;Apply&lt;/button&gt;
            &lt;/form&gt;
        </div>
        <div slot="code-js">
            import Vue from 'vue';
            import VeeValidate from 'vee-validate';

            Vue.use(VeeValidate);

            new Vue({
                data() {
                    return {
                        radio_group_2: '',
                    }
                },
                methods: {
                    validateForm() {
                        this.$validator.validateAll();

                        if (! this.errors.any()) {
                            alert('All Passes!');
                        }
                    }
                }
            });
        </div>
    </code-example>
</template>

<script>
export default {
    data: () => ({
        radio_group_2: '',
    }),
    methods: {
        validateForm() {
            this.$validator.validateAll();

            if (! this.errors.any()) {
                // eslint-disable-next-line
                alert('All Passes!');
            }
        }
    }
};
</script>
