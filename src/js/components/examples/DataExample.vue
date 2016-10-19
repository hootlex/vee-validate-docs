<template>
    <code-example>
        <div slot="example" class="columns is-multiline">
            <div class="column is-12">
                <label class="label">Email</label>
                <p class="control has-icon has-icon-right">
                    <input v-model="email" v-validate="email" data-rules="required|email" :class="{'input': true, 'is-danger': errors.has('email') }" type="text" placeholder="Email">
                    <i v-show="errors.has('email')" class="fa fa-warning"></i>
                    <span v-show="errors.has('email')" class="help is-danger">{{ errors.first('email') }}</span>
                </p>
            </div>
            <div class="column is-12">
                <label class="label">Name</label>
                <p class="control has-icon has-icon-right">
                    <input v-model="name" v-validate.initial="name" data-rules="required|alpha" :class="{'input': true, 'is-danger': errors.has('name') }" type="text" placeholder="Name">
                    <i v-show="errors.has('name')" class="fa fa-warning"></i>
                    <span v-show="errors.has('name')" class="help is-danger">{{ errors.first('name') }}</span>
                </p>
            </div>
        </div>

        <div slot="code-html">
            &lt;div class=&quot;columns&quot;&gt;
                &lt;div class=&quot;column is-12&quot;&gt;
                    &lt;label class=&quot;label&quot;&gt;Email&lt;/label&gt;
                    &lt;p class=&quot;control has-icon has-icon-right&quot;&gt;
                        &lt;input v-model=&quot;email&quot; v-validate=&quot;email&quot; data-rules=&quot;required|email&quot; :class=&quot;{'input': true, 'is-danger': errors.has('email') }&quot; type=&quot;text&quot; placeholder=&quot;Email&quot;&gt;
                        &lt;i v-show=&quot;errors.has('email')&quot; class=&quot;fa fa-warning&quot;&gt;&lt;/i&gt;
                        &lt;span v-show=&quot;errors.has('email')&quot; class=&quot;help is-danger&quot;&gt;{{ errors.first('email') }}&lt;/span&gt;
                    &lt;/p&gt;
                &lt;/div&gt;
                &lt;div class=&quot;column is-12&quot;&gt;
                    &lt;label class=&quot;label&quot;&gt;Name&lt;/label&gt;
                    &lt;p class=&quot;control has-icon has-icon-right&quot;&gt;
                        &lt;input v-model=&quot;name&quot; v-validate=&quot;name&quot; data-rules=&quot;required|alpha&quot; :class=&quot;{'input': true, 'is-danger': errors.has('name') }&quot; type=&quot;text&quot; placeholder=&quot;Name&quot;&gt;
                        &lt;i v-show=&quot;errors.has('name')&quot; class=&quot;fa fa-warning&quot;&gt;&lt;/i&gt;
                        &lt;span v-show=&quot;errors.has('name')&quot; class=&quot;help is-danger&quot;&gt;{{ "{" + "{ errors.first('name') }" + "}" }}&lt;/span&gt;
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
                data: {
                    email: '',
                    name: ''
                }
            });
        </div>
    </code-example>
</template>

<script>
export default {
    data: () => ({
        email: '',
        name: ''
    })
};
</script>
