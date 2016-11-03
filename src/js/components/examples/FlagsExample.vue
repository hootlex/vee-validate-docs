<template>
    <code-example>
        <div slot="example" class="columns is-multiline">
            <div class="column is-12">
                <label class="label">Name</label>
                <p class="control has-icon has-icon-right">
                    <input name="name" v-validate data-rules="required|alpha" :class="{'input': true, 'is-danger': fields.failed('name'), 'is-success': fields.passed('name') }" type="text" placeholder="Name">
                    <i v-show="fields.failed('name') || fields.passed('name')" :class="{ 'fa': true, 'fa-warning': fields.failed('name'), 'fa-check': fields.passed('name') }"></i>
                    <span v-show="fields.failed('name')" class="help is-danger">{{ errors.first('name') }}</span>
                </p>
                <label class="label">Email</label>
                <p class="control has-icon has-icon-right">
                    <input v-model="email" name="email" v-validate="email" data-rules="required|email" :class="{'input': true, 'is-danger': fields.failed('email'), 'is-success': fields.passed('email') }" type="text" placeholder="Email">
                    <i v-show="fields.failed('email') || fields.passed('email')" :class="{ 'fa': true, 'fa-warning': fields.failed('email'), 'fa-check': fields.passed('email') }"></i>
                    <span v-show="fields.failed('email')" class="help is-danger">{{ errors.first('email') }}</span>
                </p>
                <p class="control">
                    <button type="button" class="button is-primary" :disabled="fields.clean()">Save</button>
                </p>
            </div>
        </div>

        <div slot="code-html">
            &lt;div slot=&quot;example&quot; class=&quot;columns is-multiline&quot;&gt;
                &lt;div class=&quot;column is-12&quot;&gt;
                    &lt;label class=&quot;label&quot;&gt;Name&lt;/label&gt;
                    &lt;p class=&quot;control has-icon has-icon-right&quot;&gt;
                        &lt;input name=&quot;name&quot; v-validate data-rules=&quot;required|alpha&quot; :class=&quot;{'input': true, 'is-danger': fields.failed('name'), 'is-success': fields.passed('name') }&quot; type=&quot;text&quot; placeholder=&quot;Name&quot;&gt;
                        &lt;i v-show=&quot;fields.failed('name') || fields.passed('name')&quot; :class=&quot;{ 'fa': true, 'fa-warning': fields.failed('name'), 'fa-check': fields.passed('name') }&quot;&gt;&lt;/i&gt;
                        &lt;span v-show=&quot;fields.failed('name')&quot; class=&quot;help is-danger&quot;&gt;{{ "{" + "{ errors.first('name') }" + "}" }}&lt;/span&gt;
                    &lt;/p&gt;
                    &lt;label class=&quot;label&quot;&gt;Email&lt;/label&gt;
                    &lt;p class=&quot;control has-icon has-icon-right&quot;&gt;
                        &lt;input v-model=&quot;email&quot; name=&quot;email&quot; v-validate=&quot;email&quot; data-rules=&quot;required|email&quot; :class=&quot;{'input': true, 'is-danger': fields.failed('email'), 'is-success': fields.passed('email') }&quot; type=&quot;text&quot; placeholder=&quot;Email&quot;&gt;
                        &lt;i v-show=&quot;fields.failed('email') || fields.passed('email')&quot; :class=&quot;{ 'fa': true, 'fa-warning': fields.failed('email'), 'fa-check': fields.passed('email') }&quot;&gt;&lt;/i&gt;
                        &lt;span v-show=&quot;fields.failed('email')&quot; class=&quot;help is-danger&quot;&gt;{{ "{" + "{ errors.first('email') }" + "}" }}&lt;/span&gt;
                    &lt;/p&gt;
                    &lt;p class=&quot;control&quot;&gt;
                        &lt;button type=&quot;button&quot; class=&quot;button is-primary&quot; :disabled=&quot;fields.clean()&quot;&gt;Save&lt;/button&gt;
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
