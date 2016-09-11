webpackJsonp([3],{134:function(e,t,a){var i,s;i=a(144);var r=a(165);s=i=i||{},"object"==typeof i["default"]&&(s=i=i["default"]),"function"==typeof s&&(s=s.options),s.render=r.render,s.staticRenderFns=r.staticRenderFns,e.exports=i},135:function(e,t){e.exports={rules:["after","alpha_dash","alpha_num","alpha","before","between","confirmed","date_between","date_format","decimal","digits","dimensions","email","ext","image","in","ip","max","mimes","min","not_in","numeric","regex","required","size","url"]}},144:function(e,t,a){"use strict";function i(e){return e&&e.__esModule?e:{"default":e}}Object.defineProperty(t,"__esModule",{value:!0});var s=a(135),r=i(s),n=a(4),l=i(n);t["default"]={data:function(){return{rules:new l["default"](r["default"].rules).chunk(10).all()}}}},165:function(module,exports){module.exports={render:function(){with(this)return _h("div",[_m(0)," ",_h("p",["\n        The validation rules have a very simple syntax similar to ",_m(1),".\n        A validation expression is a string of a series of validators separated by a pipe ",_m(2),":\n        ",_h("code-block",{staticClass:"language-javascript"},["\n            var single = 'required'; // single rule.\n            var multiple = 'required|numeric' // multiple rules.\n        "]),"\n        Some rules can have parameters, which are passed in a comma separated list without spaces.\n        ",_h("code-block",{staticClass:"language-javascript"},["\n            var someRule = 'in:1,2,3,4';\n        "])]),_m(3)," ",_m(4)," ",_m(5)," ",_m(6)," ",_h("div",{staticClass:"pure-g"},[rules&&_l(rules,function(e){return _h("div",{"class":"pure-u-1-"+rules.length},[_h("ul",[e&&_l(e,function(e){return _h("li",[_h("router-link",{staticClass:"link",attrs:{to:"/rules#rule-"+e}},[_s(e)])])})])])})])," ",_h("div",{staticClass:"rules"},[_m(7)," ",_m(8)," ",_m(9)," ",_h("div",{staticClass:"rule",attrs:{id:"rule-after"}},[_m(10)," ",_m(11)," ",_m(12)," ",_h("div",[_h("form",{staticClass:"pure-form pure-form-stacked"},[_h("input",{directives:[{name:"validate"}],"class":{"pure-input-1":!0,"has-error":errors.has("after_field")},attrs:{"data-rules":"date_format:DD/MM/YYYY|after:after_field_target",name:"after_field","data-as":"field",type:"text",placeholder:"DD/MM/YYYY"}})," ",_h("span",{directives:[{name:"show",value:errors.has("after_field"),expression:"errors.has('after_field')"}],staticClass:"error"},[_s(errors.first("after_field"))])," ",_h("input",{"class":{"pure-input-1":!0,"has-error":errors.has("after_field")},attrs:{name:"after_field_target","data-as":"field",type:"text",placeholder:"DD/MM/YYYY"}})])])])," ",_h("div",{staticClass:"rule",attrs:{id:"rule-alpha"}},[_m(13)," ",_m(14)," ",_h("div",[_h("form",{staticClass:"pure-form pure-form-stacked"},[_h("input",{directives:[{name:"validate"}],"class":{"pure-input-1":!0,"has-error":errors.has("alpha_field")},attrs:{"data-rules":"alpha",name:"alpha_field","data-as":"field",type:"text",placeholder:"Enter some characters"}})," ",_h("span",{directives:[{name:"show",value:errors.has("alpha_field"),expression:"errors.has('alpha_field')"}],staticClass:"error"},[_s(errors.first("alpha_field"))])])])])," ",_h("div",{staticClass:"rule",attrs:{id:"rule-alpha_dash"}},[_m(15)," ",_m(16)," ",_h("div",[_h("form",{staticClass:"pure-form pure-form-stacked"},[_h("input",{directives:[{name:"validate"}],"class":{"pure-input-1":!0,"has-error":errors.has("alpha_dash_field")},attrs:{"data-rules":"alpha_dash",name:"alpha_dash_field","data-as":"field",type:"text",placeholder:"Enter a string with dashes"}})," ",_h("span",{directives:[{name:"show",value:errors.has("alpha_dash_field"),expression:"errors.has('alpha_dash_field')"}],staticClass:"error"},[_s(errors.first("alpha_dash_field"))])])])])," ",_h("div",{staticClass:"rule",attrs:{id:"rule-alpha_num"}},[_m(17)," ",_m(18)," ",_h("div",[_h("form",{staticClass:"pure-form pure-form-stacked"},[_h("input",{directives:[{name:"validate"}],"class":{"pure-input-1":!0,"has-error":errors.has("alpha_num_field")},attrs:{"data-rules":"alpha_num",name:"alpha_num_field","data-as":"field",type:"text",placeholder:"Enter a string with numbers"}})," ",_h("span",{directives:[{name:"show",value:errors.has("alpha_num_field"),expression:"errors.has('alpha_num_field')"}],staticClass:"error"},[_s(errors.first("alpha_num_field"))])])])])," ",_h("div",{staticClass:"rule",attrs:{id:"rule-before"}},[_m(19)," ",_m(20)," ",_h("div",[_h("form",{staticClass:"pure-form pure-form-stacked"},[_h("input",{directives:[{name:"validate"}],"class":{"pure-input-1":!0,"has-error":errors.has("before_field")},attrs:{"data-rules":"date_format:DD/MM/YYYY|before:before_field_target",name:"before_field","data-as":"field",type:"text",placeholder:"DD/MM/YYYY"}})," ",_h("span",{directives:[{name:"show",value:errors.has("before_field"),expression:"errors.has('before_field')"}],staticClass:"error"},[_s(errors.first("before_field"))])," ",_h("input",{"class":{"pure-input-1":!0,"has-error":errors.has("alpha_field")},attrs:{name:"before_field_target",type:"text",placeholder:"DD/MM/YYYY"}})])])])," ",_h("div",{staticClass:"rule",attrs:{id:"rule-between"}},[_m(21)," ",_m(22)," ",_m(23)," ",_h("div",[_h("form",{staticClass:"pure-form pure-form-stacked"},[_h("input",{directives:[{name:"validate"}],"class":{"pure-input-1":!0,"has-error":errors.has("between_field")},attrs:{"data-rules":"between:1,11",name:"between_field","data-as":"field",type:"text",placeholder:"Enter a number between 1 and 11"}})," ",_h("span",{directives:[{name:"show",value:errors.has("between_field"),expression:"errors.has('between_field')"}],staticClass:"error"},[_s(errors.first("between_field"))])])])])," ",_h("div",{staticClass:"rule",attrs:{id:"rule-confirmed"}},[_m(24)," ",_m(25)," ",_m(26)," ",_h("div",[_h("form",{staticClass:"pure-form pure-form-stacked"},[_h("input",{directives:[{name:"validate"}],"class":{"pure-input-1":!0,"has-error":errors.has("confirm_field")},attrs:{"data-rules":"confirmed:pw_confirm",name:"confirm_field","data-as":"password",type:"password",placeholder:"Enter The Password"}})," ",_h("span",{directives:[{name:"show",value:errors.has("confirm_field"),expression:"errors.has('confirm_field')"}],staticClass:"error"},[_s(errors.first("confirm_field"))])," ",_h("input",{"class":{"pure-input-1":!0,"has-error":errors.has("confirm_field")},attrs:{name:"pw_confirm",type:"password",placeholder:"Confirm the password"}})])])])," ",_h("div",{staticClass:"rule",attrs:{id:"rule-date_between"}},[_m(27)," ",_m(28)," ",_m(29)," ",_h("div",[_h("form",{staticClass:"pure-form pure-form-stacked"},[_h("input",{directives:[{name:"validate"}],"class":{"pure-input-1":!0,"has-error":errors.has("date_between_field")},attrs:{"data-rules":"date_format:DD/MM/YYYY|between:10/09/2016,20/09/2016",name:"date_between_field","data-as":"field",type:"text",placeholder:"DD/MM/YYYY betweem 10/09/2016 and 20/09/2016"}})," ",_h("span",{directives:[{name:"show",value:errors.has("date_between_field"),expression:"errors.has('date_between_field')"}],staticClass:"error"},[_s(errors.first("date_between_field"))])])])])," ",_h("div",{staticClass:"rule",attrs:{id:"rule-date_format"}},[_m(30)," ",_m(31)," ",_m(32)," ",_h("div",[_h("form",{staticClass:"pure-form pure-form-stacked"},[_h("input",{directives:[{name:"validate"}],"class":{"pure-input-1":!0,"has-error":errors.has("date_format_field")},attrs:{"data-rules":"date_format:DD/MM/YYYY",name:"date_format_field","data-as":"field",type:"text",placeholder:"DD/MM/YYYY"}})," ",_h("span",{directives:[{name:"show",value:errors.has("date_format_field"),expression:"errors.has('date_format_field')"}],staticClass:"error"},[_s(errors.first("date_format_field"))])])])])," ",_h("div",{staticClass:"rule",attrs:{id:"rule-decimal"}},[_m(33)," ",_m(34)," ",_m(35)," ",_h("div",[_h("form",{staticClass:"pure-form pure-form-stacked"},[_h("input",{directives:[{name:"validate"}],"class":{"pure-input-1":!0,"has-error":errors.has("decimal_field")},attrs:{"data-rules":"decimal:3",name:"decimal_field","data-as":"field",type:"text",placeholder:"Enter a numeric value with decmials"}})," ",_h("span",{directives:[{name:"show",value:errors.has("decimal_field"),expression:"errors.has('decimal_field')"}],staticClass:"error"},[_s(errors.first("decimal_field"))])])])])," ",_h("div",{staticClass:"rule",attrs:{id:"rule-digits"}},[_m(36)," ",_m(37)," ",_m(38)," ",_h("div",[_h("form",{staticClass:"pure-form pure-form-stacked"},[_h("input",{directives:[{name:"validate"}],"class":{"pure-input-1":!0,"has-error":errors.has("digits_field")},attrs:{"data-rules":"digits:3",name:"digits_field","data-as":"field",type:"text",placeholder:"Enter a three digit number"}})," ",_h("span",{directives:[{name:"show",value:errors.has("digits_field"),expression:"errors.has('digits_field')"}],staticClass:"error"},[_s(errors.first("digits_field"))])])])])," ",_h("div",{staticClass:"rule",attrs:{id:"rule-dimensions"}},[_m(39)," ",_m(40)," ",_m(41)," ",_h("div",[_h("form",{staticClass:"pure-form pure-form-stacked"},[_h("input",{directives:[{name:"validate"}],"class":{"pure-input-1":!0,"has-error":errors.has("dimensions_field")},attrs:{"data-rules":"dimensions:30,30",name:"dimensions_field","data-as":"field",type:"file"}})," ",_h("span",{directives:[{name:"show",value:errors.has("dimensions_field"),expression:"errors.has('dimensions_field')"}],staticClass:"error"},[_s(errors.first("dimensions_field"))])])])])," ",_h("div",{staticClass:"rule",attrs:{id:"rule-email"}},[_m(42)," ",_m(43)," ",_h("div",[_h("form",{staticClass:"pure-form pure-form-stacked"},[_h("input",{directives:[{name:"validate"}],"class":{"pure-input-1":!0,"has-error":errors.has("email_field")},attrs:{"data-rules":"email",name:"email_field","data-as":"field",type:"text",placeholder:"Enter a valid email"}})," ",_h("span",{directives:[{name:"show",value:errors.has("email_field"),expression:"errors.has('email_field')"}],staticClass:"error"},[_s(errors.first("email_field"))])])])])," ",_h("div",{staticClass:"rule",attrs:{id:"rule-ext"}},[_m(44)," ",_m(45)," ",_m(46)," ",_h("div",[_h("form",{staticClass:"pure-form pure-form-stacked"},[_h("input",{directives:[{name:"validate"}],"class":{"pure-input-1":!0,"has-error":errors.has("ext_field")},attrs:{"data-rules":"ext:jpeg,jpg",name:"ext_field","data-as":"field",type:"file"}})," ",_h("span",{directives:[{name:"show",value:errors.has("ext_field"),expression:"errors.has('ext_field')"}],staticClass:"error"},[_s(errors.first("ext_field"))])])])])," ",_h("div",{staticClass:"rule",attrs:{id:"rule-image"}},[_m(47)," ",_m(48)," ",_h("div",[_h("form",{staticClass:"pure-form pure-form-stacked"},[_h("input",{directives:[{name:"validate"}],"class":{"pure-input-1":!0,"has-error":errors.has("image_field")},attrs:{"data-rules":"image",name:"image_field","data-as":"field",type:"file"}})," ",_h("span",{directives:[{name:"show",value:errors.has("image_field"),expression:"errors.has('image_field')"}],staticClass:"error"},[_s(errors.first("image_field"))])])])])," ",_h("div",{staticClass:"rule",attrs:{id:"rule-in"}},[_m(49)," ",_m(50)," ",_m(51)," ",_h("div",[_h("form",{staticClass:"pure-form pure-form-stacked"},[_h("input",{directives:[{name:"validate"}],"class":{"pure-input-1":!0,"has-error":errors.has("in_field")},attrs:{"data-rules":"in:mystic,valor",name:"in_field","data-as":"field",type:"text",placeholder:"Your Pokemon Go Team"}})," ",_h("span",{directives:[{name:"show",value:errors.has("in_field"),expression:"errors.has('in_field')"}],staticClass:"error"},[_s(errors.first("in_field"))])])])])," ",_h("div",{staticClass:"rule",attrs:{id:"rule-ip"}},[_m(52)," ",_m(53)," ",_h("div",[_h("form",{staticClass:"pure-form pure-form-stacked"},[_h("input",{directives:[{name:"validate"}],"class":{"pure-input-1":!0,"has-error":errors.has("ip_field")},attrs:{"data-rules":"ip",name:"ip_field","data-as":"field",type:"text",placeholder:"Ipv4"}})," ",_h("span",{directives:[{name:"show",value:errors.has("ip_field"),expression:"errors.has('ip_field')"}],staticClass:"error"},[_s(errors.first("ip_field"))])])])])," ",_h("div",{staticClass:"rule",attrs:{id:"rule-max"}},[_m(54)," ",_m(55)," ",_m(56)," ",_h("div",[_h("form",{staticClass:"pure-form pure-form-stacked"},[_h("input",{directives:[{name:"validate"}],"class":{"pure-input-1":!0,"has-error":errors.has("max_field")},attrs:{"data-rules":"max:11",name:"max_field","data-as":"field",type:"text",placeholder:"Max Value: 11"}})," ",_h("span",{directives:[{name:"show",value:errors.has("max_field"),expression:"errors.has('max_field')"}],staticClass:"error"},[_s(errors.first("max_field"))])])])])," ",_h("div",{staticClass:"rule",attrs:{id:"rule-mimes"}},[_m(57)," ",_m(58)," ",_m(59)," ",_h("div",[_h("form",{staticClass:"pure-form pure-form-stacked"},[_h("input",{directives:[{name:"validate"}],"class":{"pure-input-1":!0,"has-error":errors.has("mimes_field")},attrs:{"data-rules":"mimes:image/*",name:"mimes_field","data-as":"image",type:"file"}})," ",_h("span",{directives:[{name:"show",value:errors.has("mimes_field"),expression:"errors.has('mimes_field')"}],staticClass:"error"},[_s(errors.first("mimes_field"))])])])," ",_m(60)])," ",_h("div",{staticClass:"rule",attrs:{id:"rule-min"}},[_m(61)," ",_m(62)," ",_m(63)," ",_h("div",[_h("form",{staticClass:"pure-form pure-form-stacked"},[_h("input",{directives:[{name:"validate"}],"class":{"pure-input-1":!0,"has-error":errors.has("min_field")},attrs:{"data-rules":"min:3",name:"min_field","data-as":"field",type:"text",placeholder:"Min Length: 3"}})," ",_h("span",{directives:[{name:"show",value:errors.has("min_field"),expression:"errors.has('min_field')"}],staticClass:"error"},[_s(errors.first("min_field"))])])])])," ",_h("div",{staticClass:"rule",attrs:{id:"rule-not_in"}},[_m(64)," ",_m(65)," ",_m(66)," ",_h("div",[_h("form",{staticClass:"pure-form pure-form-stacked"},[_h("input",{directives:[{name:"validate"}],"class":{"pure-input-1":!0,"has-error":errors.has("not_in_field")},attrs:{"data-rules":"not_in:valor,instinct",name:"not_in_field","data-as":"field",type:"text",placeholder:"Your Pokemon Go Team"}})," ",_h("span",{directives:[{name:"show",value:errors.has("not_in_field"),expression:"errors.has('not_in_field')"}],staticClass:"error"},[_s(errors.first("not_in_field"))])])])])," ",_h("div",{staticClass:"rule",attrs:{id:"rule-numeric"}},[_m(67)," ",_m(68)," ",_h("div",[_h("form",{staticClass:"pure-form pure-form-stacked"},[_h("input",{directives:[{name:"validate"}],"class":{"pure-input-1":!0,"has-error":errors.has("numeric_field")},attrs:{"data-rules":"numeric",name:"numeric_field","data-as":"field",type:"text",placeholder:"Numeric Value"}})," ",_h("span",{directives:[{name:"show",value:errors.has("numeric_field"),expression:"errors.has('numeric_field')"}],staticClass:"error"},[_s(errors.first("numeric_field"))])])])])," ",_h("div",{staticClass:"rule",attrs:{id:"rule-regex"}},[_m(69)," ",_m(70)," ",_m(71)," ",_h("div",[_h("form",{staticClass:"pure-form pure-form-stacked"},[_h("input",{directives:[{name:"validate"}],"class":{"pure-input-1":!0,"has-error":errors.has("regex_field")},attrs:{"data-rules":"regex:^([0-9]+)$",name:"regex_field","data-as":"field",type:"text",placeholder:"Enter Numeric Value"}})," ",_h("span",{directives:[{name:"show",value:errors.has("regex_field"),expression:"errors.has('regex_field')"}],staticClass:"error"},[_s(errors.first("regex_field"))])])])," ",_m(72)])," ",_h("div",{staticClass:"rule",attrs:{id:"rule-required"}},[_m(73)," ",_m(74)," ",_h("div",[_h("form",{staticClass:"pure-form pure-form-stacked"},[_h("input",{directives:[{name:"validate"}],"class":{"pure-input-1":!0,"has-error":errors.has("required_field")},attrs:{"data-rules":"required",name:"required_field","data-as":"field",type:"text",placeholder:"Anything"}})," ",_h("span",{directives:[{name:"show",value:errors.has("required_field"),expression:"errors.has('required_field')"}],staticClass:"error"},[_s(errors.first("required_field"))])])])])," ",_h("div",{staticClass:"rule",attrs:{id:"rule-size"}},[_m(75)," ",_m(76)," ",_m(77)," ",_h("div",[_h("form",{staticClass:"pure-form pure-form-stacked"},[_h("input",{directives:[{name:"validate"}],"class":{"pure-input-1":!0,"has-error":errors.has("size_field")},attrs:{"data-rules":"size:10",name:"size_field","data-as":"file",type:"file"}})," ",_h("span",{directives:[{name:"show",value:errors.has("size_field"),expression:"errors.has('size_field')"}],staticClass:"error"},[_s(errors.first("size_field"))])])])])," ",_h("div",{staticClass:"rule",attrs:{id:"rule-url"}},[_m(78)," ",_m(79)," ",_m(80)," ",_h("div",[_h("form",{staticClass:"pure-form pure-form-stacked"},[_h("input",{directives:[{name:"validate"}],"class":{"pure-input-1":!0,"has-error":errors.has("url_field")},attrs:{"data-rules":"url:google.com",name:"url_field","data-as":"file",type:"text",placeholder:"Enter a google url"}})," ",_h("span",{directives:[{name:"show",value:errors.has("url_field"),expression:"errors.has('url_field')"}],staticClass:"error"},[_s(errors.first("url_field"))])])])])])," ",_m(81)," ",_h("p",["\n        You can easily add custom rules to the validators, but your custom validation rules must adhere to a contract, or certain structure:\n        ",_m(82),_m(83)," ",_m(84),"\n        This is the most basic custom validator form, it consists of only a function that returns either a Boolean or a promise. However it will have a default error message.\n        ",_h("code-block",{staticClass:"language-javascript"},["\n            const validator = (value, args) => {\n                // Return a Boolean or a Promise.\n            }\n        "])," ",_m(85)," ",_h("code-block",{staticClass:"language-javascript"},["\n            const validator = {\n                getMessage(field, args) { // will be added to default English messages.\n                    // Returns a message.\n                },\n                validate(value, args) {\n                    // Returns a Boolean or a Promise.\n                }\n            };\n        "])," ",_m(86)," ",_h("code-block",{staticClass:"language-javascript"},["\n            const validator = {\n                messages: {\n                    en: (field, args) => {\n                        // Returns a message.\n                    },\n                    cn: (field, args) => {\n                        // Returns a Chinese message.\n                    }\n                },\n                validate(value, args) {\n                    // Returns a Boolean or a Promise.\n                }\n            };\n        "]),"\n        This validator form must have a ",_m(87)," method, and either a ",_m(88)," method, or a ",_m(89)," object.\n        The only difference that the latter will allow you to add localized messages, the former only adds it to the English dictionary.\n\n        "]),_m(90)," ",_m(91)," ",_m(92)," ",_m(93)," ",_h("p",["\n        After creating your validator, You can add it to the list of rules using ",_m(94)," method in the validator instance.\n        ",_h("code-block",{staticClass:"language-javascript"},["\n            import { Validator } from 'vee-validate';\n            // These are 'ES6' arrow functions.\n            Validator.extend('truthy', {\n                getMessage: field => 'The ' + field + ' value is not truthy.',\n                validate: value => !! value\n            });\n\n            let instance = new Validator({\n                trueField: 'truthy'\n            });\n\n            // Also there is an instance 'extend' method for convience.\n            instance.extend('falsy', (value) => ! value);\n            instance.attach('falseField', 'falsy');\n        "])]),_m(95)," ",_m(96)," ",_m(97)," ",_m(98),_m(99)," ",_h("code-block",{staticClass:"language-javascript"},["\n            import { Validator } from 'vee-validate';\n\n            const dictionary = {\n                en: {\n                    messages: {\n                        alpha: () => 'Some English Message'\n                    }\n                },\n                ar: {\n                    messages: {\n                        alpha: () => 'Some Arabic Message'\n                    }\n                }\n            };\n\n            Validator.updateDictionary(dictionary);\n\n            const validator = new Validator({ first_name: 'alpha' });\n            validator.setLocale('ar'); // now this validator will generate messages in arabic.\n        "])," ",_h("p",["\n            Usually you would stucture your language files for your app rather than adding hardcoded strings like the example above, check the ",_h("router-link",{staticClass:"link",attrs:{to:"/localization"}},["localization guide"])," for a better approach.\n        "])," ",_m(100)," ",_m(101)," ",_m(102)," ",_h("p",['\n        Like the custom messages, the validators share a dictionary containing the attribute names, for example if you want to use "Email Address" instead of "email" in your error messages, this can be easily acheived by including an ',_m(103)," object in the dictionary.\n        ",_m(104),_m(105),"Unlike messages, no attributes are included in the default dictionary.\n        ",_h("code-block",{staticClass:"language-javascript"},["\n            import { Validator } from 'vee-validate';\n\n            const dictionary = {\n                en: {\n                    attributes: {\n                        email: 'Email Address'\n                    }\n                },\n                ar: {\n                    attributes: {\n                        email: 'البريد الاليكتروني'\n                    }\n                }\n            };\n\n            Validator.updateDictionary(dictionary);\n        "])]),_h("div",{staticClass:"note"},[_m(106)," If the attribute is not found for the current locale, it will fallback to the binding expression or the field name. If you use the ",_h("router-link",{attrs:{to:"/localization#attributes-data-as"}},["data-as"])," attribute it will take precedence over the internal dictionary.\n        "])," ",_m(107)])},staticRenderFns:[function(){with(this)return _h("h2",{staticClass:"content-subhead",attrs:{id:"syntax"}},[_h("a",{attrs:{href:"#syntax"}},["Syntax"])])},function(){with(this)return _h("a",{staticClass:"link",attrs:{href:"https://laravel.com/docs/5.2/validation"}},["Laravel validation syntax"])},function(){with(this)return _h("code",{staticClass:"inline"},["|"])},function(){with(this)return _h("div",{staticClass:"note"},[_h("b",["Note:"])," The validators (rules) and their parameters are statically saved, in order to update some validation rule, you have to attach it again with the new parameters and it will be overwritten.\n        "])},function(){with(this)return _h("p")},function(){with(this)return _h("h2",{staticClass:"content-subhead",attrs:{id:"available-rules"}},[_h("a",{attrs:{href:"#available-rules"}},["Available Rules"])])},function(){with(this)return _h("p",[_h("code",{staticClass:"inline"},["vee-validate"])," Comes out of the box with many validation rules, which are:\n    "])},function(){with(this)return _h("div",{staticClass:"note"},[_h("b",["Note: "]),"Date validators always require the ",_h("code",["date_format"])," rule to be always present and must preceed them in the rules order. The date validators are not enabled by default, they require ",_h("a",{attrs:{href:"http://momentjs.com"}},["momentjs"])," in order to work.\n            If your setup contains momentjs globally, it will be installed automatically for all validator instances. otherwise you may want to pass the moment reference to ",_h("code",["installDateTimeValidators(moment)"])," which is available both statically and on instances.\n\n            Also note that the date validators always use the ",_h("a",{staticClass:"link",attrs:{href:"http://momentjs.com/guides/#/parsing/strict-mode/"}},["'strict' moment parsing mode"]),".\n        "])},function(){with(this)return _h("br")},function(){with(this)return _h("div",{staticClass:"note"},[_h("b",["Note: "]),"In the rule signature required parameters are enclosed within ",_h("code",["{}"])," like this: ",_h("code",["{param}"]),".\n            ",_h("br"),"\n            Optional parameters have a ",_h("code",["?"])," at the end: ",_h("code",["{optional?}"]),".\n            ",_h("br"),"\n            Lists are enclosed withn brackets ",_h("code",["[]"]),". ex: ",_h("code",["[list]"]),".\n        "])},function(){with(this)return _h("b",{staticClass:"important"},["after:{target}"])},function(){with(this)return _h("div",{staticClass:"description"},["\n                The field under validation must have a valid date and is after the date value in the target field.\n            "])},function(){with(this)return _h("div",{staticClass:"args"},[_h("code",{staticClass:"inline"},["args:"])," ",_h("ul",[_h("li",[_h("code",{staticClass:"inline"},["target:"]),"The input name to be validated against. must have the same format as the date_format rule."])])])},function(){with(this)return _h("b",{staticClass:"important"},["alpha"])},function(){with(this)return _h("div",{staticClass:"description"},["\n                The field under validation may only contain alphabetic characters.\n            "])},function(){with(this)return _h("b",{staticClass:"important"},["alpha_dash"])},function(){with(this)return _h("div",{staticClass:"description"},["\n                The field under validation may contain alphabetic characters, numbers, dashes or underscores.\n            "])},function(){with(this)return _h("b",{staticClass:"important"},["alpha_num"])},function(){with(this)return _h("div",{staticClass:"description"},["\n                The field under validation may contain alphabetic characters or numbers.\n            "])},function(){with(this)return _h("b",{staticClass:"important"},["before:{target}"])},function(){with(this)return _h("div",{staticClass:"description"},["\n                The field under validation must have a valid date and is before the date value in the target field.\n            "])},function(){with(this)return _h("b",{staticClass:"important"},["between:{min},{max}"])},function(){with(this)return _h("div",{staticClass:"description"},["\n                The field under validation must have a numeric value bounded by a minimum value and a maximum value.\n            "])},function(){with(this)return _h("div",{staticClass:"args"},[_h("code",{staticClass:"inline"},["args:"])," ",_h("ul",[_h("li",[_h("code",{staticClass:"inline"},["min:"])," The minimum value."])," ",_h("li",[_h("code",{staticClass:"inline"},["max:"])," The maximum value."])])])},function(){with(this)return _h("b",{staticClass:"important"},["confirmed:{target}"])},function(){with(this)return _h("div",{staticClass:"description"},["\n                The field under validation must have the exact same value as the confirmation field.\n            "])},function(){with(this)return _h("div",{staticClass:"args"},[_h("code",{staticClass:"inline"},["args:"])," ",_h("ul",[_h("li",[_h("code",{staticClass:"inline"},["target:"])," The name of the confirmation field."])])])},function(){with(this)return _h("b",{staticClass:"important"},["date_between:{min,max}"])},function(){with(this)return _h("div",{staticClass:"description"},["\n                The field under validation must be a valid date between the two dates specified.\n            "])},function(){with(this)return _h("div",{staticClass:"args"},[_h("code",{staticClass:"inline"},["args:"])," ",_h("ul",[_h("li",[_h("code",{staticClass:"inline"},["min:"]),"The minimum allowed value for date. must be in the same format as the date_format rule."])," ",_h("li",[_h("code",{staticClass:"inline"},["max:"]),"The maximum allowed value for date. must be in the same format as the date_format rule."])])])},function(){with(this)return _h("b",{staticClass:"important"},["date_format:{format}"])},function(){with(this)return _h("div",{staticClass:"description"},["\n                The field under validation must be a valid date in the specified format. This rule must be present when using any date rules.\n            "])},function(){with(this)return _h("div",{staticClass:"args"},[_h("code",{staticClass:"inline"},["args:"])," ",_h("ul",[_h("li",[_h("code",{staticClass:"inline"},["format:"])," The date format. See ",_h("a",{attrs:{href:"http://momentjs.com/docs/#/parsing/string-format/"}},["momentjs parsing."])])])])},function(){with(this)return _h("b",{staticClass:"important"},["decimal:{decimals?}"])},function(){with(this)return _h("div",{staticClass:"description"},["\n                The field under validation must be numeric and may contain the specified amount of decmial points.\n            "])},function(){with(this)return _h("div",{staticClass:"args"},[_h("code",{staticClass:"inline"},["args:"])," ",_h("ul",[_h("li",[_h("code",{staticClass:"inline"},["decmials:"])," The maximum allowed number of decimal point numbers. Not passing the decmials will accept numeric data which may or may not contain decimal point numbers."])])])},function(){with(this)return _h("b",{staticClass:"important"},["digits:{length}"])},function(){with(this)return _h("div",{staticClass:"description"},["\n                The field under validation must be numeric and have the specified number of digits.\n            "])},function(){with(this)return _h("div",{staticClass:"args"},[_h("code",{staticClass:"inline"},["args:"])," ",_h("ul",[_h("li",[_h("code",{staticClass:"inline"},["length:"])," The number of digits."])])])},function(){with(this)return _h("b",{staticClass:"important"},["dimensions:{width},{height}"])},function(){with(this)return _h("div",{staticClass:"description"},["\n                The file added to the field under validation must be an image (jpg,svg,jpeg,png,bmp,gif) have the exact specified dimensions.\n            "])},function(){with(this)return _h("div",{staticClass:"args"},[_h("code",{staticClass:"inline"},["args:"])," ",_h("ul",[_h("li",[_h("code",{staticClass:"inline"},["width:"])," The width of the image."])," ",_h("li",[_h("code",{staticClass:"inline"},["height:"])," The height of the image."])])])},function(){with(this)return _h("b",{staticClass:"important"},["email"])},function(){with(this)return _h("div",{staticClass:"description"},["\n                The field under validation must be a valid email.\n            "])},function(){with(this)return _h("b",{staticClass:"important"},["ext:[extensions]"])},function(){with(this)return _h("div",{staticClass:"description"},["\n                The file added the field under validation must have one of the extensions specified.\n            "])},function(){with(this)return _h("div",{staticClass:"args"},[_h("code",{staticClass:"inline"},["args:"])," Comma separated list of extensions. ex: ",_h("code",{staticClass:"inline"},["ext:jpg,png,bmp,svg"]),".\n            "])},function(){with(this)return _h("b",{staticClass:"important"},["image"])},function(){with(this)return _h("div",{staticClass:"description"},["\n                The file added the field under validation must have an image mime type (image/*).\n            "])},function(){with(this)return _h("b",{staticClass:"important"},["in:[list]"])},function(){with(this)return _h("div",{staticClass:"description"},["\n                The field under validation must have a value that is in the specified list.\n            "])},function(){with(this)return _h("div",{staticClass:"args"},[_h("code",{staticClass:"inline"},["args:"])," Comma separated list of values. ex ",_h("code",{staticClass:"inline"},["in:1,2,3,4"])])},function(){with(this)return _h("b",{staticClass:"important"},["ip"])},function(){with(this)return _h("div",{staticClass:"description"},["\n                The field under validation must have a string that is a valid ipv4 value.\n            "])},function(){with(this)return _h("b",{staticClass:"important"},["max:{length}"])},function(){with(this)return _h("div",{staticClass:"description"},["\n                The field under validation length may not exceed the specified length.\n            "])},function(){with(this)return _h("div",{staticClass:"args"},[_h("code",{staticClass:"inline"
},["args:"])," ",_h("ul",[_h("li",[_h("code",{staticClass:"inline"},["length:"])," A numeric value representing the maximum number of characters."])])])},function(){with(this)return _h("b",{staticClass:"important"},["mimes:[list]"])},function(){with(this)return _h("div",{staticClass:"description"},["\n                The file type added to the field under validation should have one of the specified mime types.\n            "])},function(){with(this)return _h("div",{staticClass:"args"},[_h("code",{staticClass:"inline"},["args:"])," List of comma separated mime types. ",_h("code",{staticClass:"inline"},["mimes:image/jpeg|image/png"])])},function(){with(this)return _h("div",{staticClass:"note"},[_h("b",["Note:"])," You can use '*' to specify a wild card, something like ",_h("code",["mimes:image/*"])," will accept all image types.\n            "])},function(){with(this)return _h("b",{staticClass:"important"},["min:{length}"])},function(){with(this)return _h("div",{staticClass:"description"},["\n                The field under validation length should not be less than the specified length.\n            "])},function(){with(this)return _h("div",{staticClass:"args"},[_h("code",{staticClass:"inline"},["args:"])," ",_h("ul",[_h("li",[_h("code",{staticClass:"inline"},["length:"])," A numeric value representing the minimum number of characters."])])])},function(){with(this)return _h("b",{staticClass:"important"},["not_in:[list]"])},function(){with(this)return _h("div",{staticClass:"description"},["\n                The field under validation length should not have any value within the specified values.\n            "])},function(){with(this)return _h("div",{staticClass:"args"},[_h("code",{staticClass:"inline"},["args:"])," Comma separated list of invalid values. ex: ",_h("code",{staticClass:"inline"},["not_in:1,2,3,4"])])},function(){with(this)return _h("b",{staticClass:"important"},["numeric"])},function(){with(this)return _h("div",{staticClass:"description"},["\n                The field under validation must only consist of numbers.\n            "])},function(){with(this)return _h("b",{staticClass:"important"},["regex:{pattern}"])},function(){with(this)return _h("div",{staticClass:"description"},["\n                The field under validation must match the specified regular expression.\n            "])},function(){with(this)return _h("div",{staticClass:"args"},[_h("code",{staticClass:"inline"},["args:"])," ",_h("ul",[_h("li",[_h("code",{staticClass:"inline"},["pattern:"])," A regular expression"])," ",_h("li",[_h("code",{staticClass:"inline"},["flags:"])," list of regular expression flags (optional)"])])])},function(){with(this)return _h("div",{staticClass:"note"},[_h("b",["Note:"])," Currently you should not use the pipe | within your regular expression as it will cause a conflict with how parsing validators work. A workaround is in progress.\n            "])},function(){with(this)return _h("b",{staticClass:"important"},["required"])},function(){with(this)return _h("div",{staticClass:"description"},['\n                The field under validation must have a non-empty value. by default all validators pass the validation if they have "empty values" unless they are required. those empty values are: empty string, undefined, null.\n            '])},function(){with(this)return _h("b",{staticClass:"important"},["size:{kb}"])},function(){with(this)return _h("div",{staticClass:"description"},["\n                The file size added to the field under validation must not exceed the specified size in kilobytes.\n            "])},function(){with(this)return _h("div",{staticClass:"args"},[_h("code",{staticClass:"inline"},["args:"])," ",_h("ul",[_h("li",[_h("code",{staticClass:"inline"},["size:"])," The maximum file size in kilobytes."])])])},function(){with(this)return _h("b",{staticClass:"important"},["url:{domain?}"])},function(){with(this)return _h("div",{staticClass:"description"},["\n                The field under validation must be a valid url. A domain may be optionally passed. supports subdomains.\n            "])},function(){with(this)return _h("div",{staticClass:"args"},[_h("code",{staticClass:"inline"},["args:"])," ",_h("ul",[_h("li",[_h("code",{staticClass:"inline"},["domain:"])," Adds another check if the url belongs to a specific domain. tlds should improve the accuracy."])])])},function(){with(this)return _h("h2",{staticClass:"content-subhead",attrs:{id:"custom-rules"}},[_h("a",{attrs:{href:"#custom-rules"}},["Custom Rules"])])},function(){with(this)return _h("br")},function(){with(this)return _h("br")},function(){with(this)return _h("b",{staticClass:"important"},["Function Form:"])},function(){with(this)return _h("b",{staticClass:"important"},["Object Form:"])},function(){with(this)return _h("b",{staticClass:"important"},["Localized Object Form:"])},function(){with(this)return _h("code",{staticClass:"inline"},["validate"])},function(){with(this)return _h("code",{staticClass:"inline"},["getMessage"])},function(){with(this)return _h("code",{staticClass:"inline"},["messages"])},function(){with(this)return _h("div",{staticClass:"note"},[_h("b",["Note:"])," Notice how the ",_h("code",["messages"])," methods gets passed the ",_h("code",["field"])," which is the name of the field under validation as a first parameter.\n            And how the ",_h("code",["validate"])," method gets passed the value as a first parameter.\n            And both receive the ",_h("code",["args"])," which are the parameters (arguments) that were configured with the validation rule.\n            for example look at the ",_h("a",{attrs:{href:"https://github.com/logaretm/vee-validate/blob/master/src/rules/min.js"}},["actual implementation of the min rule"]),".\n        "])},function(){with(this)return _h("br")},function(){with(this)return _h("div",{staticClass:"note"},[_h("b",["Note:"])," As you can see a validation rule must implement one of the three forms discussed above.\n             Not doing so will throw a ",_h("code",["ValidatorException"])," with a suitable error message detailing what were you missing.\n        "])},function(){with(this)return _h("p")},function(){with(this)return _h("code",{staticClass:"inline"},["extend(name, validator)"])},function(){with(this)return _h("div",{staticClass:"note"},[_h("b",["Note:"])," Using any of the ",_h("code",["extend"])," either statically or on an instance will extend all validators with the new validation rule.\n             extending a new rule that have the same name as an existing rule will throw a ",_h("code",["ValidatorException"])," with an error message.\n        "])},function(){with(this)return _h("p")},function(){with(this)return _h("h2",{staticClass:"content-subhead",attrs:{id:"custom-messages"}},[_h("a",{attrs:{href:"#custom-messages"}},["Custom Messages"])])},function(){with(this)return _h("p",["\n        Of course you might need to overwrite the error messages, or add new ones. The Validator class and its instances provide an ",_h("code",{staticClass:"inline"},["updateDictionary"])," method.\n        which will merge the messages with the internal dictionary, overwriting any duplicates.\n        "])},function(){with(this)return _h("div",{staticClass:"note"},[_h("b",["Note:"])," Any merges will have an effect on all validator instances as the messages dictionary is shared.\n        "])},function(){with(this)return _h("div",{staticClass:"note"},[_h("b",["Note:"])," You must provide the messages in an object path like: ",_h("code",["dictionary.locale.message"]),".\n        "])},function(){with(this)return _h("p")},function(){with(this)return _h("h2",{staticClass:"content-subhead",attrs:{id:"custom-attributes"}},[_h("a",{attrs:{href:"#custom-attributes"}},["Custom Attributes"])])},function(){with(this)return _h("code",["attributes"])},function(){with(this)return _h("br")},function(){with(this)return _h("br")},function(){with(this)return _h("b",["Note: "])},function(){with(this)return _h("p")}]}}});