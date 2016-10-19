<template>
    <code-example>
        <div class="columns is-multiline" slot="example">
            <form @submit.prevent="validateForm('form-1')" class="columns column is-multiline is-12">
                <legend>Form 1</legend>
                <div class="column is-12">
                    <label class="label">Name</label>
                    <p class="control has-icon has-icon-right">
                        <input name="name" v-validate data-rules="required|alpha" :class="{'input': true, 'is-danger': errors.has('name', 'form-1') }" type="text" placeholder="Name">
                        <i v-show="errors.has('name', 'form-1')" class="fa fa-warning"></i>
                        <span v-show="errors.has('name', 'form-1')" class="help is-danger">{{ errors.first('name', 'form-1') }}</span>
                    </p>
                </div>
                <div class="column is-12">
                    <label class="label">Email</label>
                    <p class="control has-icon has-icon-right">
                        <input name="email" v-validate data-rules="required|email" :class="{'input': true, 'is-danger': errors.has('email', 'form-1') }" type="text" placeholder="Email">
                        <i v-show="errors.has('email', 'form-1')" class="fa fa-warning"></i>
                        <span v-show="errors.has('email', 'form-1')" class="help is-danger">{{ errors.first('email', 'form-1') }}</span>
                    </p>
                </div>

                <div class="column is-12">
                    <p class="control">
                        <button class="button is-primary" type="submit" name="button">Sign up</button>
                        <button class="button is-danger" type="button" name="button" @click="errors.clear('form-1')">Clear</button>
                    </p>
                </div>
            </form>

            <form @submit.prevent="validateForm('form-2')" class="columns column is-multiline is-12" data-scope="form-2">
                <legend>Form 2</legend>
                <div class="column is-12">
                    <label class="label">Email</label>
                    <p class="control has-icon has-icon-right">
                        <input name="email" v-validate data-rules="required|email" :class="{'input': true, 'is-danger': errors.has('email', 'form-2') }" type="text" placeholder="Email">
                        <i v-show="errors.has('email', 'form-2')" class="fa fa-warning"></i>
                        <span v-show="errors.has('email', 'form-2')" class="help is-danger">{{ errors.first('email', 'form-2') }}</span>
                    </p>
                </div>
                <div class="column is-12">
                    <label class="label">Email</label>
                    <p class="control has-icon has-icon-right">
                        <input name="password" v-validate data-rules="required|min:6" :class="{'input': true, 'is-danger': errors.has('password', 'form-1') }" type="password" placeholder="Password">
                        <i v-show="errors.has('password', 'form-2')" class="fa fa-warning"></i>
                        <span v-show="errors.has('password', 'form-2')" class="help is-danger">{{ errors.first('password', 'form-2') }}</span>
                    </p>
                </div>
                <div class="column is-12">
                    <p class="control">
                        <button class="button is-primary" type="submit" name="button">Log in</button>
                        <button class="button is-danger" type="button" name="button" @click="errors.clear('form-2')">Clear</button>
                    </p>
                </div>
            </form>
        </div>

        <div slot="code-html">
            &lt;div class=&quot;columns is-multiline&quot; &gt;
                &lt;form @submit.prevent=&quot;validateForm('form-1')&quot; class=&quot;columns column is-multiline is-12&quot;&gt;
                    &lt;legend&gt;Form 1&lt;/legend&gt;
                    &lt;div class=&quot;column is-12&quot;&gt;
                        &lt;label class=&quot;label&quot;&gt;Name&lt;/label&gt;
                        &lt;p class=&quot;control has-icon has-icon-right&quot;&gt;
                            &lt;input name=&quot;name&quot; v-validate data-rules=&quot;required|alpha&quot; :class=&quot;{'input': true, 'is-danger': errors.has('name', 'form-1') }&quot; type=&quot;text&quot; placeholder=&quot;Name&quot;&gt;
                            &lt;i v-show=&quot;errors.has('name', 'form-1')&quot; class=&quot;fa fa-warning&quot;&gt;&lt;/i&gt;
                            &lt;span v-show=&quot;errors.has('name', 'form-1')&quot; class=&quot;help is-danger&quot;&gt;{{ "{" + "{ errors.first('name', 'form-1') }" + "}" }}&lt;/span&gt;
                        &lt;/p&gt;
                    &lt;/div&gt;
                    &lt;div class=&quot;column is-12&quot;&gt;
                        &lt;label class=&quot;label&quot;&gt;Email&lt;/label&gt;
                        &lt;p class=&quot;control has-icon has-icon-right&quot;&gt;
                            &lt;input name=&quot;email&quot; v-validate data-rules=&quot;required|email&quot; :class=&quot;{'input': true, 'is-danger': errors.has('email', 'form-1') }&quot; type=&quot;text&quot; placeholder=&quot;Email&quot;&gt;
                            &lt;i v-show=&quot;errors.has('email', 'form-1')&quot; class=&quot;fa fa-warning&quot;&gt;&lt;/i&gt;
                            &lt;span v-show=&quot;errors.has('email', 'form-1')&quot; class=&quot;help is-danger&quot;&gt;{{ "{" + "{ errors.first('email', 'form-1') }" + "}" }}&lt;/span&gt;
                        &lt;/p&gt;
                    &lt;/div&gt;

                    &lt;p class=&quot;control&quot;&gt;
                        &lt;button class=&quot;button is-primary&quot; type=&quot;submit&quot; name=&quot;button&quot;&gt;Sign up&lt;/button&gt;
                        &lt;button class=&quot;button is-danger&quot; type=&quot;button&quot; name=&quot;button&quot; @click=&quot;errors.clear('form-1')&quot;&gt;Clear&lt;/button&gt;
                    &lt;/p&gt;
                &lt;/form&gt;

                &lt;form @submit.prevent=&quot;validateForm('form-2')&quot; class=&quot;columns column is-multiline is-12&quot; data-scope=&quot;form-2&quot;&gt;
                    &lt;legend&gt;Form 2&lt;/legend&gt;
                    &lt;div class=&quot;column is-12&quot;&gt;
                        &lt;label class=&quot;label&quot;&gt;Email&lt;/label&gt;
                        &lt;p class=&quot;control has-icon has-icon-right&quot;&gt;
                            &lt;input name=&quot;email&quot; v-validate data-rules=&quot;required|email&quot; :class=&quot;{'input': true, 'is-danger': errors.has('email', 'form-2') }&quot; type=&quot;text&quot; placeholder=&quot;Email&quot;&gt;
                            &lt;i v-show=&quot;errors.has('email', 'form-2')&quot; class=&quot;fa fa-warning&quot;&gt;&lt;/i&gt;
                            &lt;span v-show=&quot;errors.has('email', 'form-2')&quot; class=&quot;help is-danger&quot;&gt;{{ "{" + "{ errors.first('email', 'form-2') }" + "}" }}&lt;/span&gt;
                        &lt;/p&gt;
                    &lt;/div&gt;
                    &lt;div class=&quot;column is-12&quot;&gt;
                        &lt;label class=&quot;label&quot;&gt;Email&lt;/label&gt;
                        &lt;p class=&quot;control has-icon has-icon-right&quot;&gt;
                            &lt;input name=&quot;password&quot; v-validate data-rules=&quot;required|min:6&quot; :class=&quot;{'input': true, 'is-danger': errors.has('password', 'form-1') }&quot; type=&quot;password&quot; placeholder=&quot;Password&quot;&gt;
                            &lt;i v-show=&quot;errors.has('password', 'form-2')&quot; class=&quot;fa fa-warning&quot;&gt;&lt;/i&gt;
                            &lt;span v-show=&quot;errors.has('password', 'form-2')&quot; class=&quot;help is-danger&quot;&gt;{{ "{" + "{ errors.first('password', 'form-2') }" + "}" }}&lt;/span&gt;
                        &lt;/p&gt;
                    &lt;/div&gt;
                    &lt;p class=&quot;control&quot;&gt;
                        &lt;button class=&quot;button is-primary&quot; type=&quot;submit&quot; name=&quot;button&quot;&gt;Log in&lt;/button&gt;
                        &lt;button class=&quot;button is-danger&quot; type=&quot;button&quot; name=&quot;button&quot; @click=&quot;errors.clear('form-2')&quot;&gt;Clear&lt;/button&gt;
                    &lt;/p&gt;
                &lt;/form&gt;
            &lt;/div&gt;
        </div>

        <div slot="code-js">
            new Vue({
               el: '#app',
               data: {
                   name: '',
                   email: ''
               },
               methods: {
                   validateForm1(e) {
                       this.$validator.validateAll('form-1');
                       if (this.errors.any('form-1')) {
                           e.preventDefault();
                           return;
                       }

                       e.preventDefault();
                       alert('Form Submitted!');
                   },
                   validateForm2(e) {
                       this.$validator.validateAll('form-2');
                       if (this.errors.any('form-2')) {
                           e.preventDefault();
                           return;
                       }

                       e.preventDefault();
                       alert('Form Submitted!');
                   }
               }
           });
        </div>
    </code-example>
</template>

<script>
export default {
    methods: {
        validateForm(scope) {
            this.$validator.validateAll(scope);
            if (this.errors.any(scope)) {
                return;
            }

            // eslint-disable-next-line
            alert('Form Submitted!');
        }
    }
};
</script>
