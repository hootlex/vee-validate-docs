<template>
    <code-example>
        <div slot="example" class="columns is-multiline">
            <div class="column is-12">
                <label class="label">Image (Doesn't Reject)</label>
                <p class="control has-icon has-icon-right">
                    <input name="image" v-validate data-rules="mimes:image/" :class="{ 'is-danger': errors.has('image') }" type="file">
                    <i v-show="errors.has('image')" class="fa fa-warning"></i>
                    <span v-show="errors.has('image')" class="help is-danger">{{ errors.first('image') }}</span>
                </p>
            </div>
            <div class="column is-12">
                <label class="label">Image (Rejects)</label>
                <p class="control has-icon has-icon-right">
                    <input name="file" v-validate.reject data-rules="mimes:image/" :class="{ 'is-danger': errors.has('file') }" type="file">
                    <i v-show="errors.has('file')" class="fa fa-warning"></i>
                    <span v-show="errors.has('file')" class="help is-danger">{{ errors.first('file') }}</span>
                </p>
            </div>
        </div>

        <div slot="code-html">
            &lt;div class=&quot;columns&quot;&gt;
                &lt;div class=&quot;column is-12&quot;&gt;
                    &lt;label class=&quot;label&quot;&gt;Image (Doesn't Reject)&lt;/label&gt;
                    &lt;p class=&quot;control has-icon has-icon-right&quot;&gt;
                        &lt;input name=&quot;image&quot; v-validate data-rules=&quot;mimes:image/&quot; :class=&quot;{'input': true, 'is-danger': errors.has('image') }&quot; type=&quot;file&quot;&gt;
                        &lt;i v-show=&quot;errors.has('image')&quot; class=&quot;fa fa-warning&quot;&gt;&lt;/i&gt;
                        &lt;span v-show=&quot;errors.has('image')&quot; class=&quot;help is-danger&quot;&gt;{{ "{" + "{ errors.first('image') }" + "}" }}&lt;/span&gt;
                    &lt;/p&gt;
                &lt;/div&gt;
                &lt;div class=&quot;column is-12&quot;&gt;
                    &lt;label class=&quot;label&quot;&gt;Image (Rejects)&lt;/label&gt;
                    &lt;p class=&quot;control has-icon has-icon-right&quot;&gt;
                        &lt;input name=&quot;file&quot; v-validate.reject data-rules=&quot;mimes:image/&quot; :class=&quot;{'input': true, 'is-danger': errors.has('file') }&quot; type=&quot;file&quot;&gt;
                        &lt;i v-show=&quot;errors.has('file')&quot; class=&quot;fa fa-warning&quot;&gt;&lt;/i&gt;
                        &lt;span v-show=&quot;errors.has('file')&quot; class=&quot;help is-danger&quot;&gt;{{ "{" + "{ errors.first('file') }" + "}" }}&lt;/span&gt;
                    &lt;/p&gt;
                &lt;/div&gt;
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
