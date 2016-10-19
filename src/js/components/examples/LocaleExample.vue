<template>
    <code-example>
        <div slot="example" class="columns is-rtl is-multiline">
            <div class="column is-12">
                <label class="label">البريد الاليكتروني (Email)</label>
                <p class="control has-icon has-icon-left">
                    <input name="email" v-validate data-rules="required|email" data-as="البريد الاليكتروني" :class="{'input': true, 'is-danger': errors.has('email') }" type="text" placeholder="Email">
                    <i v-show="errors.has('email')" class="fa fa-warning"></i>
                    <span v-show="errors.has('email')" class="help is-danger has-text-right">{{ errors.first('email') }}</span>
                </p>
            </div>
            <div class="column is-12">
                <label class="label">رقم الهاتف (Phone)</label>
                <p class="control has-icon has-icon-left">
                    <input name="phone" v-validate data-rules="required|numeric" data-as="رقم الهاتف" :class="{'input': true, 'is-danger': errors.has('phone') }" type="text" placeholder="Phone">
                    <i v-show="errors.has('phone')" class="fa fa-warning"></i>
                    <span v-show="errors.has('phone')" class="help is-danger has-text-right">{{ errors.first('phone') }}</span>
                </p>
            </div>
        </div>

        <div slot="code-html">
            &lt;div class=&quot;columns is-rtl&quot;&gt;
                &lt;div class=&quot;column is-12&quot;&gt;
                    &lt;label class=&quot;label&quot;&gt;Email&lt;/label&gt;
                    &lt;p class=&quot;control has-icon has-icon-right&quot;&gt;
                        &lt;input name=&quot;email&quot; v-validate data-rules=&quot;required|email&quot; data-as=&quot;&#1575;&#1604;&#1576;&#1585;&#1610;&#1583; &#1575;&#1604;&#1575;&#1604;&#1610;&#1603;&#1578;&#1585;&#1608;&#1606;&#1610;&quot; :class=&quot;{'input': true, 'is-danger': errors.has('email') }&quot; type=&quot;text&quot; placeholder=&quot;Email&quot;&gt;
                        &lt;i v-show=&quot;errors.has('email')&quot; class=&quot;fa fa-warning&quot;&gt;&lt;/i&gt;
                        &lt;span v-show=&quot;errors.has('email')&quot; class=&quot;help is-danger&quot;&gt;{{ "{" + "{ errors.first('email') }" + "}" }}&lt;/span&gt;
                    &lt;/p&gt;
                &lt;/div&gt;
                &lt;div class=&quot;column is-12&quot;&gt;
                    &lt;label class=&quot;label&quot;&gt;Phone&lt;/label&gt;
                    &lt;p class=&quot;control has-icon has-icon-right&quot;&gt;
                        &lt;input name=&quot;email&quot; v-validate data-rules=&quot;required|numeric&quot; data-as=&quot;&#1585;&#1602;&#1605; &#1575;&#1604;&#1607;&#1575;&#1578;&#1601;&quot; :class=&quot;{'input': true, 'is-danger': errors.has('phone') }&quot; type=&quot;text&quot; placeholder=&quot;Phone&quot;&gt;
                        &lt;i v-show=&quot;errors.has('phone')&quot; class=&quot;fa fa-warning&quot;&gt;&lt;/i&gt;
                        &lt;span v-show=&quot;errors.has('phone')&quot; class=&quot;help is-danger&quot;&gt;{{ "{" + "{ errors.first('phone') }" + "}" }}&lt;/span&gt;
                    &lt;/p&gt;
                &lt;/div&gt;
            &lt;/div&gt;
        </div>
        <div slot="code-js">
            import messages from './locale/ar';
            import Vue from 'vue';
            import VeeValidate, { Validator } from 'vee-validate';
            Vue.use(VeeValidate);

            // Merge dictionary messages.
            Validator.updateDictionary({
                ar: {
                    messages
                }
            });

            new Vue({
                el: 'body',
                data: {
                    phone: '',
                    email: ''
                },
                created() {
                    this.$validator.setLocale('ar'); // Switch locale for this instance.
                }
            });
        </div>

    </code-example>
</template>

<script>
import messages from './../../strings/ar';

export default {
    data: () => ({
        email: '',
        phone: '',
    }),
    created() {
        this.$validator.updateDictionary({
            ar: {
                messages: messages.default
            }
        });
        this.$validator.setLocale('ar');
    }
};
</script>
