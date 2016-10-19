<template>
    <code-example>
        <div slot="example" class="column is-12">
            <label class="label" for="email">Email</label>
            <p :class="{ 'control': true }">
                <input v-validate data-rules="required|email" :class="{'input': true, 'is-danger': errors.has('email') }" name="email" type="text" placeholder="Email">
                <span v-show="errors.has('email')" class="help is-danger">{{ errors.first('email') }}</span>
            </p>
        </div>

        <div slot="code-html">
            &lt;div class=&quot;column is-12&quot;&gt;
                &lt;label class=&quot;label&quot; for=&quot;email&quot;&gt;Email&lt;/label&gt;
                &lt;p :class=&quot;{ 'control': true }&quot;&gt;
                    &lt;input v-validate data-rules=&quot;required|email&quot; :class=&quot;{'input': true, 'is-danger': errors.has('email') }&quot; name=&quot;email&quot; type=&quot;text&quot; placeholder=&quot;Email&quot;&gt;
                    &lt;span v-show=&quot;errors.has('email')&quot; class=&quot;help is-danger&quot;&gt;{{ "{" + "{ errors.first('email') }" + "}" }}&lt;/span&gt;
                &lt;/p&gt;
            &lt;/div&gt;
        </div>


        <div slot="code-js">
            import Vue from 'vue';
            import VeeValidate from 'vee-validate';

            Vue.use(VeeValidate);

            new Vue({
                el: '#app'
            });
        </div>
    </code-example>
</template>
