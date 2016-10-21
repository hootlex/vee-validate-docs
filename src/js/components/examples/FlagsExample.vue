<template>
    <code-example>
        <div slot="example" class="columns is-multiline">
            <div class="column is-12">
                <label class="label">Name</label>
                <p class="control has-icon has-icon-right">
                    <input name="name" v-validate data-rules="required|alpha" :class="{'input': true, 'is-danger': fields.name.failed, 'is-success': fields.name.passed }" type="text" placeholder="Name">
                    <i v-show="fields.name.failed || fields.name.passed" :class="{ 'fa': true, 'fa-warning': fields.name.failed, 'fa-check': fields.name.passed }"></i>
                    <span v-show="fields.name.failed" class="help is-danger">{{ errors.first('name') }}</span>
                </p>
                <label class="label">Email</label>
                <p class="control has-icon has-icon-right">
                    <input v-model="email" name="email" v-validate="email" data-rules="required|email" :class="{'input': true, 'is-danger': fields.email.failed, 'is-success': fields.email.passed }" type="text" placeholder="Name">
                    <i v-show="fields.email.failed || fields.email.passed" :class="{ 'fa': true, 'fa-warning': fields.email.failed, 'fa-check': fields.email.passed }"></i>
                    <span v-show="fields.email.failed" class="help is-danger">{{ errors.first('email') }}</span>
                </p>
                <p class="control">
                    <button type="button" class="button is-primary" :disabled="! (fields.name.dirty || fields.email.dirty)">Save</button>
                </p>
            </div>
        </div>

        <div slot="code-html">
            &lt;div class=&quot;columns is-multiline&quot;&gt;
                &lt;div class=&quot;column is-12&quot;&gt;
                    &lt;label class=&quot;label&quot;&gt;Name&lt;/label&gt;
                    &lt;p class=&quot;control has-icon has-icon-right&quot;&gt;
                        &lt;input name=&quot;email&quot; v-validate data-rules=&quot;required|alpha&quot; :class=&quot;{'input': true, 'is-danger': fields.name.failed, 'is-success': fields.name.passed }&quot; type=&quot;text&quot; placeholder=&quot;Name&quot;&gt;
                        &lt;i v-show=&quot;fields.name.failed || fields.name.passed&quot; :class=&quot;{ 'fa': true, 'fa-warning': fields.name.failed, 'fa-check': fields.name.passed }&quot;&gt;&lt;/i&gt;
                        &lt;span v-show=&quot;fields.name.failed&quot; class=&quot;help is-danger&quot;&gt;{{ "{" + "{ errors.first('name') }" + "}" }}&lt;/span&gt;
                    &lt;/p&gt;
                    &lt;label class=&quot;label&quot;&gt;Email&lt;/label&gt;
                    &lt;p class=&quot;control has-icon has-icon-right&quot;&gt;
                        &lt;input name=&quot;email&quot; v-validate data-rules=&quot;required|email&quot; :class=&quot;{'input': true, 'is-danger': fields.email.failed, 'is-success': fields.email.passed }&quot; type=&quot;text&quot; placeholder=&quot;Name&quot;&gt;
                        &lt;i v-show=&quot;fields.email.failed || fields.email.passed&quot; :class=&quot;{ 'fa': true, 'fa-warning': fields.email.failed, 'fa-check': fields.email.passed }&quot;&gt;&lt;/i&gt;
                        &lt;span v-show=&quot;fields.email.failed&quot; class=&quot;help is-danger&quot;&gt;{{ "{" + "{ errors.first('email') }" + "}" }}&lt;/span&gt;
                    &lt;/p&gt;
                    &lt;p class=&quot;control&quot;&gt;
                        &lt;button type=&quot;button&quot; class=&quot;button is-primary&quot; :disabled=&quot;! (fields.name.dirty || fields.email.dirty)&quot;&gt;Save&lt;/button&gt;
                    &lt;/p&gt;
                &lt;/div&gt;
            &lt;/div&gt;
        </div>

        <div slot="code-js">
            import Vue from 'vue';
            import VeeValidate from 'vee-validate';

            Vue.use(VeeValidate);

            new Vue({
                el: '#app',
                data: () => ({
                    email: ''
                })
            });
        </div>
    </code-example>
</template>

<script>
export default {
    data: () => ({
        email: ''
    })
};
</script>
