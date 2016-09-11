webpackJsonp([2],{130:function(e,a,t){var r,n;r=t(141);var i=t(163);n=r=r||{},"object"==typeof r["default"]&&(n=r=r["default"]),"function"==typeof n&&(n=n.options),n.render=i.render,n.staticRenderFns=i.staticRenderFns,e.exports=r},140:function(e,a,t){"use strict";Object.defineProperty(a,"__esModule",{value:!0});var r=t(1);a["default"]={validator:null,data:function(){return{email:"",name:"",errors:[]}},watch:{email:function(e){this.validator.validate("email",e)},name:function(e){this.validator.validate("name",e)}},methods:{validateForm:function(){this.validator.validateAll({email:this.email,name:this.name})},clearErrors:function(){this.errors.clear()}},created:function(){this.validator=new r.Validator({email:"required|email",name:"required|alpha|min:3"}),this.$set(this,"errors",this.validator.errorBag)}}},141:function(e,a,t){"use strict";function r(e){return e&&e.__esModule?e:{"default":e}}Object.defineProperty(a,"__esModule",{value:!0});var n=t(153),i=r(n);a["default"]={components:{ValidatorExample:i["default"]}}},153:function(e,a,t){var r,n;r=t(140);var i=t(160);n=r=r||{},"object"==typeof r["default"]&&(n=r=r["default"]),"function"==typeof n&&(n=n.options),n.render=i.render,n.staticRenderFns=i.staticRenderFns,e.exports=r},160:function(module,exports){module.exports={render:function(){with(this)return _h("code-example",[_h("form",{slot:"example",staticClass:"pure-form pure-form-stacked"},[_h("div",{staticClass:"pure-u-1"},[_h("label",{"class":{error:errors.has("email")},attrs:{"for":"email"}},["Email"])," ",_h("input",{directives:[{name:"model",value:email,expression:"email"}],"class":{"pure-input-1":!0,"has-error":errors.has("email")},attrs:{name:"email",type:"text",placeholder:"Email"},domProps:{value:_s(email)},on:{input:function(e){e.target.composing||(email=e.target.value)}}})," ",_h("span",{directives:[{name:"show",value:errors.has("email"),expression:"errors.has('email')"}],staticClass:"error"},["Errors: "+_s(JSON.stringify(errors.collect("email")))])])," ",_h("div",{staticClass:"pure-u-1"},[_h("label",{"class":{error:errors.has("name")},attrs:{"for":"name"}},["Full Name"])," ",_h("input",{directives:[{name:"model",value:name,expression:"name"}],"class":{"pure-input-1":!0,"has-error":errors.has("name")},attrs:{name:"name",type:"text",placeholder:"Full Name"},domProps:{value:_s(name)},on:{input:function(e){e.target.composing||(name=e.target.value)}}})," ",_h("span",{directives:[{name:"show",value:errors.has("name"),expression:"errors.has('name')"}],staticClass:"error"},["Errors: "+_s(JSON.stringify(errors.collect("name")))])])," ",_h("button",{staticClass:"pure-button pure-button-primary",attrs:{type:"button",name:"button"},on:{click:validateForm}},["Validate All"])," ",_h("button",{staticClass:"pure-button button-error",attrs:{type:"button",name:"button"},on:{click:clearErrors}},["Clear"])])," ",_h("div",{slot:"code-html"},['\n        <div id="app">\n            <form class="pure-form pure-form-stacked">\n                <div class="pure-u-1">\n                    <label :class="{\'error\': errors.has(\'email\') }" for="email">Email</label>\n                    <input v-model="email" :class="{\'pure-input-1\': true, \'has-error\': errors.has(\'email\') }" name="email" type="text" placeholder="Email">\n                    <span class="error" v-show="errors.has(\'email\')">'+_s(JSON.stringify(errors.collect("email")))+'</span>\n                </div>\n                <div class="pure-u-1">\n                    <label :class="{\'error\': errors.has(\'name\') }" for="name">Full Name</label>\n                    <input v-model="name" :class="{\'pure-input-1\': true, \'has-error\': errors.has(\'name\') }" name="name" type="text" placeholder="Full Name">\n                    <span class="error" v-show="errors.has(\'name\')">'+_s(JSON.stringify(errors.collect("name")))+'</span>\n                </div>\n                <button class="pure-button pure-button-primary" @click="validateForm" type="button" name="button">Validate All</button>\n                <button class="pure-button button-error" @click="clearErrors" type="button" name="button">Clear</button>\n            </form>\n        </div>\n    '])," ",_h("div",{slot:"code-js"},["\n        import Vue from 'vue';\n        import { Validator } from 'vee-validate';\n\n        new Vue({\n            el: '#app',\n            validator: null, // private reference\n            data() {\n                return {\n                    email: '',\n                    name: '',\n                    errors: []\n                }\n            },\n            watch: {\n                email(value) {\n                    this.validator.validate('email', value);\n                },\n                name(value) {\n                    this.validator.validate('name', value);\n                }\n            },\n            methods: {\n                validateForm() {\n                    this.validator.validateAll({\n                        email: this.email,\n                        name: this.name\n                    });\n                },\n                clearErrors() {\n                    this.errors.clear();\n                }\n            },\n            created() {\n                this.validator = new Validator({\n                    email: 'required|email',\n                    name: 'required|alpha|min:3'\n                });\n                this.$set('errors', this.validator.errorBag); // update the data.\n            }\n        });\n    "])])},staticRenderFns:[]}},163:function(module,exports){module.exports={render:function(){with(this)return _h("div",[_m(0)," ",_h("p",["\n        The ErrorBag class is a wrapper around an array, and is standalone and has no dependencies, you can use it in your code for any reason:\n        ",_h("code-block",{staticClass:"language-javascript"},["\n            import { ErrorBag } from 'vee-validate'; // ES6 Import.\n            const bag = new ErrorBag();\n        "]),"\n        The internal array contains the error objects, the structure is:\n        ",_h("code-block",{staticClass:"language-javascript"},["\n            {\n                errors: [\n                    { field: 'Field name', msg: 'Error message' },\n                    { field: 'Field name', msg: 'Error message' },\n                    { field: 'Field name', msg: 'Error message' }\n                ]\n            }\n        "])])," ",_m(1)," ",_m(2)," ",_h("p",["\n        The validator is injected to the Vue instance as ",_m(3)," automatically.\n        However it is also a stand alone class and can be used separately for programmatically validating values.\n        The constructor can optionally take an object to map each field name to a set of validations.\n        ",_h("code-block",{staticClass:"language-javascript"},["\n            import { Validator } from 'vee-validate';\n            const validator = new Validator({\n                email: 'required|email',\n                name: 'required|alpha|min:3',\n            }); // or Validator.create({ ... });\n        "]),"\n        But you can construct the object without passing anything and add the validation rules later.\n        ",_h("code-block",{staticClass:"language-javascript"},["\n            import { Validator } from 'vee-validate';\n            const validator = new Validator();\n\n            validator.attach('email', 'required|email'); // attach field.\n            validator.attach('name', 'required|alpha', 'Full Name'); // attach field with display name for error generation.\n\n            validator.detach('email'); // you can also detach fields.\n        "]),"\n        After that you can validate values with ",_m(4)," which should return a boolean if all validations pass. Like this:\n        ",_h("code-block",{staticClass:"language-javascript"},["\n            validator.validate('email', 'foo@bar.com'); // true\n            validator.validate('email', 'foo@bar'); // false\n        "])]),_m(5)," ",_m(6),"\n        You can validate multiple values at the same time using ",_m(7),":\n        ",_h("code-block",{staticClass:"language-javascript"},["\n            validator.validateAll({\n                email: 'foo@bar.com',\n                name: 'John Snow'\n            });\n        "]),"\n        Returns true if all values passed validation, false if at least one value failed validation. will return a ",_m(8)," if at least one field validation rule returned a ",_m(9)," which is also resolved to a boolean. The ErrorBag will be populated with any errors encountered.\n        You can access the ",_m(10)," property directly or using ",_m(11),".\n        ",_h("code-block",{staticClass:"language-javascript"},["\n            var errorBag = validator.errorBag;\n            // or\n            var errorBag = validator.getErrors();\n        "]),"\n\n        The validator instance can only generate messages for one locale at a time. But you need to use ",_m(12)," method to switch the validator locale.\n        ",_h("code-block",{staticClass:"language-javascript"},["\n            validator.setLocale('ar');\n        "])," ",_h("div",{staticClass:"note"},[_m(13)," Each validator keeps track of its own locale. so be sure to update any instances whenever the language changes.\n            For more information about how to overwrite messages and add new ones, please refer to the ",_h("router-link",{staticClass:"link",attrs:{to:{name:"rules",hash:"custom-messages"}}},["custom messages"])," section.\n        "]),"\n        The Validator class has a static method called ",_m(14)," which sets the default language for all newly instantiated validators to that language.\n        ",_h("code-block",{staticClass:"language-javascript"},["\n            import { Validator } from 'vee-validate';\n\n            Validator.setDefaultLocale('ar'); // from now on, all validators that are created will have this locale.\n            Validator.create().locale // 'ar';\n\n            Validator.setDefaultLocale(); // resets to english, again for all newly created validators, previously created ones won't be touched.\n        "])," ",_m(15)," ",_m(16)," ",_m(17)," ",_h("validator-example")])},staticRenderFns:[function(){with(this)return _h("h2",{staticClass:"content-subhead",attrs:{id:"error-bag"}},[_h("a",{attrs:{href:"#error-bag"}},["ErrorBag"])])},function(){with(this)return _h("p",[_h("b",{staticClass:"important"},["Available Methods:"])," ",_h("ul",[_h("li",[_h("code",{staticClass:"inline"},["add(object error)"])," adds an error object to the internal array."])," ",_h("li",[_h("code",{staticClass:"inline"},["all()"])," Gets all messages from the internal array."])," ",_h("li",[_h("code",{staticClass:"inline"},["any()"])," Checks if there are any errors."])," ",_h("li",[_h("code",{staticClass:"inline"},["clear()"])," Removes all items from the internal array."])," ",_h("li",[_h("code",{staticClass:"inline"},["collect(String field)"])," Collects errors associated with a specific field. not passing the field name will group all errors by field name instead."])," ",_h("li",[_h("code",{staticClass:"inline"},["count()"])," Gets the length of the internal array. or the number of messages."])," ",_h("li",[_h("code",{staticClass:"inline"},["first(String field)"])," Gets the first error message associated with the specified field."])," ",_h("li",[_h("code",{staticClass:"inline"},["has(String field)"])," Checks if there is at least one error associated with the specified field."])," ",_h("li",[_h("code",{staticClass:"inline"},["remove(String field)"])," Removes all errors for a specified field from the internal array."])])])},function(){with(this)return _h("h2",{staticClass:"content-subhead",attrs:{id:"validator"}},[_h("a",{attrs:{href:"#validator"}},["Validator"])])},function(){with(this)return _h("code",{staticClass:"inline"},["$validator"])},function(){with(this)return _h("code",{staticClass:"inline"},["validate(field, value)"])},function(){with(this)return _h("div",{staticClass:"note"},[_h("b",["Note:"])," Most validators return a Boolean, however some validators (very few) return a ",_h("code",["Promise"])," The validator is aware of this and will only return a Promise if at least one validation yields a promise. the promise is resolved to boolean which you can later chain to check your fields.\n        "])},function(){with(this)return _h("br")},function(){with(this)return _h("code",{staticClass:"inline"},["validateAll(obj)"])},function(){with(this)return _h("code",["Promise"])},function(){with(this)return _h("code",["Promise"])},function(){with(this)return _h("code",{staticClass:"inline"},["errorBag"])},function(){with(this)return _h("code",{staticClass:"inline"},["getErrors()"])},function(){with(this)return _h("code",{staticClass:"inline"},["setLocale"])},function(){with(this)return _h("b",["Note:"])},function(){with(this)return _h("code",{staticClass:"inline"},["setDefaultLocale(string)"])},function(){with(this)return _h("p")},function(){with(this)return _h("h2",{staticClass:"content-subhead",attrs:{id:"validator-example"}},[_h("a",{attrs:{href:"#validator-example"}},["Validator Example"])])},function(){with(this)return _h("p",["\n        Here is an example of using the validator without the directive, which means you will be responsible for monitoring input changes on your own, and calling the API methods as you see fit.\n        This example uses a Vue instance to simplify things, but it can be used in plain JavaScript as well.\n    "])}]}}});