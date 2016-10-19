<template>
    <code-example>
        <div slot="example" class="columns is-multiline">
            <div class="column is-12">
                <label class="label">Email</label>
                <p class="control has-icon has-icon-right">
                    <input v-model="email" name="email" :class="{'input': true, 'is-danger': errors.has('email') }" type="text" placeholder="Email">
                    <i v-show="errors.has('email')" class="fa fa-warning"></i>
                    <span v-show="errors.has('email')" class="help is-danger">{{ errors.first('email') }}</span>
                </p>
            </div>
            <div class="column is-12">
                <label class="label">Name</label>
                <p class="control has-icon has-icon-right">
                    <input v-model="name" name="name" :class="{'input': true, 'is-danger': errors.has('name') }" type="text" placeholder="Name">
                    <i v-show="errors.has('name')" class="fa fa-warning"></i>
                    <span v-show="errors.has('name')" class="help is-danger">{{ errors.first('name') }}</span>
                </p>
            </div>
            <p class="control">
                <button class="button is-primary" @click="validateForm" type="button" name="button">Validate All</button>
                <button class="button is-danger" @click="clearErrors" type="button" name="button">Clear</button>
            </p>
        </div>

        <div slot="code-html">
            &lt;div class=&quot;columns is-multiline&quot;&gt;
                &lt;div class=&quot;column is-12&quot;&gt;
                    &lt;label class=&quot;label&quot;&gt;Email&lt;/label&gt;
                    &lt;p class=&quot;control has-icon has-icon-right&quot;&gt;
                        &lt;input v-model=&quot;email&quot; name=&quot;email&quot; :class=&quot;{'input': true, 'is-danger': errors.has('email') }&quot; type=&quot;text&quot; placeholder=&quot;Email&quot;&gt;
                        &lt;i v-show=&quot;errors.has('email')&quot; class=&quot;fa fa-warning&quot;&gt;&lt;/i&gt;
                        &lt;span v-show=&quot;errors.has('email')&quot; class=&quot;help is-danger&quot;&gt;{{ "{" + "{ errors.first('email') }" + "}" }}&lt;/span&gt;
                    &lt;/p&gt;
                &lt;/div&gt;
                &lt;div class=&quot;column is-12&quot;&gt;
                    &lt;label class=&quot;label&quot;&gt;Name&lt;/label&gt;
                    &lt;p class=&quot;control has-icon has-icon-right&quot;&gt;
                        &lt;input v-model=&quot;name&quot; name=&quot;name&quot; :class=&quot;{'input': true, 'is-danger': errors.has('name') }&quot; type=&quot;text&quot; placeholder=&quot;Name&quot;&gt;
                        &lt;i v-show=&quot;errors.has('name')&quot; class=&quot;fa fa-warning&quot;&gt;&lt;/i&gt;
                        &lt;span v-show=&quot;errors.has('name')&quot; class=&quot;help is-danger&quot;&gt;{{ "{" + "{ errors.first('name') }" + "}" }}&lt;/span&gt;
                    &lt;/p&gt;
                &lt;/div&gt;
                &lt;p class=&quot;control&quot;&gt;
                    &lt;button class=&quot;button is-primary&quot; @click=&quot;validateForm&quot; type=&quot;button&quot; name=&quot;button&quot;&gt;Validate All&lt;/button&gt;
                    &lt;button class=&quot;button is-danger&quot; @click=&quot;clearErrors&quot; type=&quot;button&quot; name=&quot;button&quot;&gt;Clear&lt;/button&gt;
                &lt;/p&gt;
            &lt;/div&gt;
        </div>

        <div slot="code-js">
            import Vue from 'vue';
            import { Validator } from 'vee-validate';

            new Vue({
                el: '#app',
                validator: null, // private reference
                data() {
                    return {
                        email: '',
                        name: '',
                        errors: []
                    }
                },
                watch: {
                    email(value) {
                        this.validator.validate('email', value);
                    },
                    name(value) {
                        this.validator.validate('name', value);
                    }
                },
                methods: {
                    validateForm() {
                        this.validator.validateAll({
                            email: this.email,
                            name: this.name
                        });
                    },
                    clearErrors() {
                        this.errors.clear();
                    }
                },
                created() {
                    this.validator = new Validator({
                        email: 'required|email',
                        name: 'required|alpha|min:3'
                    });
                    this.$set('errors', this.validator.errorBag); // update the data.
                }
            });
        </div>
    </code-example>
</template>

<script>
import { Validator } from 'vee-validate';

export default {
    validator: null,
    data: () => ({
        email: '',
        name: '',
        errors: []
    }),
    watch: {
        email(value) {
            this.validator.validate('email', value);
        },
        name(value) {
            this.validator.validate('name', value);
        }
    },
    methods: {
        validateForm() {
            this.validator.validateAll({
                email: this.email,
                name: this.name
            });
        },
        clearErrors() {
            this.errors.clear();
        }
    },
    created() {
        this.validator = new Validator({
            email: 'required|email',
            name: 'required|alpha|min:3'
        });
        this.$set(this, 'errors', this.validator.errorBag);
    }
};
</script>
