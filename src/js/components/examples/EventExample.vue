<template>
    <code-example>
        <form slot="example" @submit="validateBeforeSubmit">
            <div class="column is-12">
                <label class="label">Email</label>
                <p class="control has-icon has-icon-right">
                    <input v-model="email" v-validate.initial="email" data-rules="required|email" :class="{'input': true, 'is-danger': errors.has('email') }" type="text" placeholder="Email">
                    <i v-show="errors.has('email')" class="fa fa-warning"></i>
                    <span v-show="errors.has('email')" class="help is-danger">{{ errors.first('email') }}</span>
                </p>
            </div>
            <div class="column is-12">
                <label class="label">Name</label>
                <p class="control has-icon has-icon-right">
                    <input v-model="name" v-validate.initial="name" data-rules="required|alpha" :class="{'input': true, 'is-danger': errors.has('name') }" type="text" placeholder="Email">
                    <i v-show="errors.has('name')" class="fa fa-warning"></i>
                    <span v-show="errors.has('name')" class="help is-danger">{{ errors.first('name') }}</span>
                </p>
            </div>
            <div class="column is-12">
                <label class="label">Phone</label>
                <p class="control has-icon has-icon-right">
                    <input v-model="phone" v-validate.initial="phone" data-rules="required|numeric" :class="{'input': true, 'is-danger': errors.has('phone') }" type="text" placeholder="Phone">
                    <i v-show="errors.has('phone')" class="fa fa-warning"></i>
                    <span v-show="errors.has('phone')" class="help is-danger">{{ errors.first('phone') }}</span>
                </p>
            </div>
            <div class="column is-12">
                <label class="label">Website</label>
                <p class="control has-icon has-icon-right">
                    <input v-model="url" v-validate.initial="url" data-rules="required|url" :class="{'input': true, 'is-danger': errors.has('url') }" type="text" placeholder="Website">
                    <i v-show="errors.has('url')" class="fa fa-warning"></i>
                    <span v-show="errors.has('url')" class="help is-danger">{{ errors.first('url') }}</span>
                </p>
            </div>

            <div class="column is-12">
                <p class="control">
                    <button class="button is-primary" type="submit">Submit</button>
                </p>
            </div>
        </form>

        <div slot="code-html">
            &lt;form  @submit=&quot;validateBeforeSubmit&quot;&gt;
                &lt;div class=&quot;column is-12&quot;&gt;
                    &lt;label class=&quot;label&quot;&gt;Email&lt;/label&gt;
                    &lt;p class=&quot;control has-icon has-icon-right&quot;&gt;
                        &lt;input v-model=&quot;email&quot; v-validate.initial=&quot;email&quot; data-rules=&quot;required|email&quot; :class=&quot;{'input': true, 'is-danger': errors.has('email') }&quot; type=&quot;text&quot; placeholder=&quot;Email&quot;&gt;
                        &lt;i v-show=&quot;errors.has('email')&quot; class=&quot;fa fa-warning&quot;&gt;&lt;/i&gt;
                        &lt;span v-show=&quot;errors.has('email')&quot; class=&quot;help is-danger&quot;&gt;{{ "{" + "{ errors.first('email') }" + "}" }}&lt;/span&gt;
                    &lt;/p&gt;
                &lt;/div&gt;
                &lt;div class=&quot;column is-12&quot;&gt;
                    &lt;label class=&quot;label&quot;&gt;Name&lt;/label&gt;
                    &lt;p class=&quot;control has-icon has-icon-right&quot;&gt;
                        &lt;input v-model=&quot;name&quot; v-validate.initial=&quot;name&quot; data-rules=&quot;required|alpha&quot; :class=&quot;{'input': true, 'is-danger': errors.has('name') }&quot; type=&quot;text&quot; placeholder=&quot;Email&quot;&gt;
                        &lt;i v-show=&quot;errors.has('name')&quot; class=&quot;fa fa-warning&quot;&gt;&lt;/i&gt;
                        &lt;span v-show=&quot;errors.has('name')&quot; class=&quot;help is-danger&quot;&gt;{{ "{" + "{ errors.first('name') }" + "}" }}&lt;/span&gt;
                    &lt;/p&gt;
                &lt;/div&gt;
                &lt;div class=&quot;column is-12&quot;&gt;
                    &lt;label class=&quot;label&quot;&gt;Phone&lt;/label&gt;
                    &lt;p class=&quot;control has-icon has-icon-right&quot;&gt;
                        &lt;input v-model=&quot;phone&quot; v-validate.initial=&quot;phone&quot; data-rules=&quot;required|numeric&quot; :class=&quot;{'input': true, 'is-danger': errors.has('phone') }&quot; type=&quot;text&quot; placeholder=&quot;Phone&quot;&gt;
                        &lt;i v-show=&quot;errors.has('phone')&quot; class=&quot;fa fa-warning&quot;&gt;&lt;/i&gt;
                        &lt;span v-show=&quot;errors.has('phone')&quot; class=&quot;help is-danger&quot;&gt;{{ "{" + "{ errors.first('phone') }" + "}" }}&lt;/span&gt;
                    &lt;/p&gt;
                &lt;/div&gt;
                &lt;div class=&quot;column is-12&quot;&gt;
                    &lt;label class=&quot;label&quot;&gt;Website&lt;/label&gt;
                    &lt;p class=&quot;control has-icon has-icon-right&quot;&gt;
                        &lt;input v-model=&quot;url&quot; v-validate.initial=&quot;url&quot; data-rules=&quot;required|url&quot; :class=&quot;{'input': true, 'is-danger': errors.has('url') }&quot; type=&quot;text&quot; placeholder=&quot;Website&quot;&gt;
                        &lt;i v-show=&quot;errors.has('url')&quot; class=&quot;fa fa-warning&quot;&gt;&lt;/i&gt;
                        &lt;span v-show=&quot;errors.has('url')&quot; class=&quot;help is-danger&quot;&gt;{{ "{" + "{ errors.first('url') }" + "}" }}&lt;/span&gt;
                    &lt;/p&gt;
                &lt;/div&gt;

                &lt;p class=&quot;control&quot;&gt;
                    &lt;button class=&quot;button is-primary&quot; type=&quot;submit&quot;&gt;Submit&lt;/button&gt;
                &lt;/p&gt;
            &lt;/form&gt;
        </div>

        <div slot="code-js">
            import Vue from 'vue';
            import Vee from 'vee-validate';

            new Vue({
                el: '#app',
                data() {
                    return {
                        email: '',
                        name: '',
                        phone: '',
                        url: '',
                    };
                },
                methods: {
                    validateBeforeSubmit(e) {
                        // Note that validateAll here is missing the values parameter, which tells the validator
                        // to trigger validation for attached inputs.
                        this.$validator.validateAll();

                        if (this.errors.any()) {
                            e.preventDefault();
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
        email: '',
        name: '',
        phone: '',
        url: ''
    }),
    methods: {
        validateBeforeSubmit(e) {
            this.$validator.validateAll();

            if (this.errors.any()) {
                e.preventDefault();
            }
        }
    }
};
</script>
