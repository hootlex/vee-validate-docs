<template>
    <code-example>
        <form @submit.prevent="validateForm" slot="example">
            <div class="columns is-multiline">
                <div class="column is-6">
                    <legend :class="{ 'error': errors.has('radio_group_1') }">Radio Group 1</legend>
                    <p class="control">
                        <label class="radio">
                            <input name="radio_group_1" v-validate data-rules="required|in:1,2" value="1" type="radio">
                            Option 1
                        </label>
                        <label class="radio">
                            <input name="radio_group_1" value="2" type="radio">
                            Option 2
                        </label>
                        <label class="radio">
                            <input name="radio_group_1" value="3" type="radio">
                            Option 3
                        </label>
                    </p>
                    <span class="help is-danger" v-show="errors.has('radio_group_1')">{{ errors.first('radio_group_1') }}</span>
                </div>

                <div class="column is-6">
                    <legend :class="{ 'error': errors.has('radio_group_2') }">Radio Group 2 (Bound)</legend>
                    <p class="control">
                        <label class="radio">
                            <input v-model="radio_group_2" v-validate="radio_group_2" data-rules="required|in:1,2" name="radio_group_2" value="1" type="radio">
                            Option 1
                        </label>
                        <label class="radio">
                            <input v-model="radio_group_2" name="radio_group_2" value="2" type="radio">
                            Option 2
                        </label>
                        <label class="radio">
                            <input v-model="radio_group_2" name="radio_group_2" value="3" type="radio">
                            Option 3
                        </label>
                    </p>
                    <span class="help is-danger" v-show="errors.has('radio_group_2')">{{ errors.first('radio_group_2') }}</span>
                </div>
            </div>

            <p class="control">
                <button type="submit" class="button is-primary" name="button">Apply</button>
            </p>
        </form>

        <div slot="code-html">
            &lt;form @submit.prevent=&quot;validateForm&quot; &gt;
                &lt;div class=&quot;columns is-multiline&quot;&gt;
                    &lt;div class=&quot;column is-6&quot;&gt;
                        &lt;legend :class=&quot;{ 'error': errors.has('radio_group_1') }&quot;&gt;Radio Group 1&lt;/legend&gt;
                        &lt;p class=&quot;control&quot;&gt;
                            &lt;label class=&quot;radio&quot;&gt;
                                &lt;input name=&quot;radio_group_1&quot; v-validate data-rules=&quot;required|in:1,2&quot; value=&quot;1&quot; type=&quot;radio&quot;&gt;
                                Option 1
                            &lt;/label&gt;
                            &lt;label class=&quot;radio&quot;&gt;
                                &lt;input name=&quot;radio_group_1&quot; value=&quot;2&quot; type=&quot;radio&quot;&gt;
                                Option 2
                            &lt;/label&gt;
                            &lt;label class=&quot;radio&quot;&gt;
                                &lt;input name=&quot;radio_group_1&quot; value=&quot;3&quot; type=&quot;radio&quot;&gt;
                                Option 3
                            &lt;/label&gt;
                        &lt;/p&gt;
                        &lt;span class=&quot;help is-danger&quot; v-show=&quot;errors.has('radio_group_1')&quot;&gt;{{ "{" + "{ errors.first('radio_group_1') }" + "}" }}&lt;/span&gt;
                    &lt;/div&gt;

                    &lt;div class=&quot;column is-6&quot;&gt;
                        &lt;legend :class=&quot;{ 'error': errors.has('radio_group_2') }&quot;&gt;Radio Group 2 (Bound)&lt;/legend&gt;
                        &lt;p class=&quot;control&quot;&gt;
                            &lt;label class=&quot;radio&quot;&gt;
                                &lt;input v-model=&quot;radio_group_2&quot; v-validate=&quot;radio_group_2&quot; data-rules=&quot;required|in:1,2&quot; name=&quot;radio_group_2&quot; value=&quot;1&quot; type=&quot;radio&quot;&gt;
                                Option 1
                            &lt;/label&gt;
                            &lt;label class=&quot;radio&quot;&gt;
                                &lt;input v-model=&quot;radio_group_2&quot; name=&quot;radio_group_2&quot; value=&quot;2&quot; type=&quot;radio&quot;&gt;
                                Option 2
                            &lt;/label&gt;
                            &lt;label class=&quot;radio&quot;&gt;
                                &lt;input v-model=&quot;radio_group_2&quot; name=&quot;radio_group_2&quot; value=&quot;3&quot; type=&quot;radio&quot;&gt;
                                Option 3
                            &lt;/label&gt;
                        &lt;/p&gt;
                        &lt;span class=&quot;help is-danger&quot; v-show=&quot;errors.has('radio_group_2')&quot;&gt;{{ "{" + "{ errors.first('radio_group_2') }" + "}" }}&lt;/span&gt;
                    &lt;/div&gt;
                &lt;/div&gt;

                &lt;p class=&quot;control&quot;&gt;
                    &lt;button type=&quot;submit&quot; class=&quot;button is-primary&quot; name=&quot;button&quot;&gt;Apply&lt;/button&gt;
                &lt;/p&gt;
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
