webpackJsonp([0],{

/***/ 134:
/***/ function(module, exports, __webpack_require__) {

var __vue_exports__, __vue_options__

/* script */
__vue_exports__ = __webpack_require__(147)

/* template */
var __vue_template__ = __webpack_require__(173)
__vue_options__ = __vue_exports__ = __vue_exports__ || {}
if (typeof __vue_exports__.default === "object") {
if (Object.keys(__vue_exports__).some(function (key) { return key !== "default" && key !== "__esModule" })) {console.error("named exports are not supported in *.vue files.")}
__vue_options__ = __vue_exports__ = __vue_exports__.default
}
if (typeof __vue_options__ === "function") {
  __vue_options__ = __vue_options__.options
}
__vue_options__.render = __vue_template__.render
__vue_options__.staticRenderFns = __vue_template__.staticRenderFns

/* hot reload */
if (false) {(function () {
  var hotAPI = require("vue-hot-reload-api")
  hotAPI.install(require("vue"), false)
  if (!hotAPI.compatible) return
  module.hot.accept()
  if (!module.hot.data) {
    hotAPI.createRecord("data-v-4", __vue_options__)
  } else {
    hotAPI.reload("data-v-4", __vue_options__)
  }
})()}
if (__vue_options__.functional) {console.error("[vue-loader] Api.vue: functional components are not supported and should be defined in plain js files using render functions.")}

module.exports = __vue_exports__


/***/ },

/***/ 136:
/***/ function(module, exports, __webpack_require__) {

var __vue_exports__, __vue_options__

/* script */
__vue_exports__ = __webpack_require__(149)

/* template */
var __vue_template__ = __webpack_require__(175)
__vue_options__ = __vue_exports__ = __vue_exports__ || {}
if (typeof __vue_exports__.default === "object") {
if (Object.keys(__vue_exports__).some(function (key) { return key !== "default" && key !== "__esModule" })) {console.error("named exports are not supported in *.vue files.")}
__vue_options__ = __vue_exports__ = __vue_exports__.default
}
if (typeof __vue_options__ === "function") {
  __vue_options__ = __vue_options__.options
}
__vue_options__.render = __vue_template__.render
__vue_options__.staticRenderFns = __vue_template__.staticRenderFns

/* hot reload */
if (false) {(function () {
  var hotAPI = require("vue-hot-reload-api")
  hotAPI.install(require("vue"), false)
  if (!hotAPI.compatible) return
  module.hot.accept()
  if (!module.hot.data) {
    hotAPI.createRecord("data-v-6", __vue_options__)
  } else {
    hotAPI.reload("data-v-6", __vue_options__)
  }
})()}
if (__vue_options__.functional) {console.error("[vue-loader] Home.vue: functional components are not supported and should be defined in plain js files using render functions.")}

module.exports = __vue_exports__


/***/ },

/***/ 137:
/***/ function(module, exports, __webpack_require__) {

var __vue_exports__, __vue_options__

/* template */
var __vue_template__ = __webpack_require__(174)
__vue_options__ = __vue_exports__ = __vue_exports__ || {}
if (typeof __vue_exports__.default === "object") {
if (Object.keys(__vue_exports__).some(function (key) { return key !== "default" && key !== "__esModule" })) {console.error("named exports are not supported in *.vue files.")}
__vue_options__ = __vue_exports__ = __vue_exports__.default
}
if (typeof __vue_options__ === "function") {
  __vue_options__ = __vue_options__.options
}
__vue_options__.render = __vue_template__.render
__vue_options__.staticRenderFns = __vue_template__.staticRenderFns

/* hot reload */
if (false) {(function () {
  var hotAPI = require("vue-hot-reload-api")
  hotAPI.install(require("vue"), false)
  if (!hotAPI.compatible) return
  module.hot.accept()
  if (!module.hot.data) {
    hotAPI.createRecord("data-v-5", __vue_options__)
  } else {
    hotAPI.reload("data-v-5", __vue_options__)
  }
})()}
if (__vue_options__.functional) {console.error("[vue-loader] Localization.vue: functional components are not supported and should be defined in plain js files using render functions.")}

module.exports = __vue_exports__


/***/ },

/***/ 138:
/***/ function(module, exports, __webpack_require__) {

var __vue_exports__, __vue_options__

/* script */
__vue_exports__ = __webpack_require__(150)

/* template */
var __vue_template__ = __webpack_require__(176)
__vue_options__ = __vue_exports__ = __vue_exports__ || {}
if (typeof __vue_exports__.default === "object") {
if (Object.keys(__vue_exports__).some(function (key) { return key !== "default" && key !== "__esModule" })) {console.error("named exports are not supported in *.vue files.")}
__vue_options__ = __vue_exports__ = __vue_exports__.default
}
if (typeof __vue_options__ === "function") {
  __vue_options__ = __vue_options__.options
}
__vue_options__.render = __vue_template__.render
__vue_options__.staticRenderFns = __vue_template__.staticRenderFns

/* hot reload */
if (false) {(function () {
  var hotAPI = require("vue-hot-reload-api")
  hotAPI.install(require("vue"), false)
  if (!hotAPI.compatible) return
  module.hot.accept()
  if (!module.hot.data) {
    hotAPI.createRecord("data-v-7", __vue_options__)
  } else {
    hotAPI.reload("data-v-7", __vue_options__)
  }
})()}
if (__vue_options__.functional) {console.error("[vue-loader] Rules.vue: functional components are not supported and should be defined in plain js files using render functions.")}

module.exports = __vue_exports__


/***/ },

/***/ 139:
/***/ function(module, exports) {

module.exports = {
	"rules": [
		"after",
		"alpha_dash",
		"alpha_num",
		"alpha",
		"before",
		"between",
		"confirmed",
		"date_between",
		"date_format",
		"decimal",
		"digits",
		"dimensions",
		"email",
		"ext",
		"image",
		"in",
		"ip",
		"max",
		"mimes",
		"min",
		"not_in",
		"numeric",
		"regex",
		"required",
		"size",
		"url"
	]
};

/***/ },

/***/ 146:
/***/ function(module, exports, __webpack_require__) {

"use strict";
'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _veeValidate = __webpack_require__(105);

exports.default = {
    validator: null,
    data: function data() {
        return {
            email: '',
            name: '',
            errors: []
        };
    },

    watch: {
        email: function email(value) {
            this.validator.validate('email', value);
        },
        name: function name(value) {
            this.validator.validate('name', value);
        }
    },
    methods: {
        validateForm: function validateForm() {
            this.validator.validateAll({
                email: this.email,
                name: this.name
            });
        },
        clearErrors: function clearErrors() {
            this.errors.clear();
        }
    },
    created: function created() {
        this.validator = new _veeValidate.Validator({
            email: 'required|email',
            name: 'required|alpha|min:3'
        });
        this.$set(this, 'errors', this.validator.errorBag);
    }
}; //
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//

/***/ },

/***/ 147:
/***/ function(module, exports, __webpack_require__) {

"use strict";
'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _ValidatorExample = __webpack_require__(163);

var _ValidatorExample2 = _interopRequireDefault(_ValidatorExample);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = {
    components: {
        ValidatorExample: _ValidatorExample2.default
    }
}; //
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//

/***/ },

/***/ 149:
/***/ function(module, exports, __webpack_require__) {

"use strict";
'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _data2 = __webpack_require__(139);

var _data3 = _interopRequireDefault(_data2);

var _collectionsjs = __webpack_require__(3);

var _collectionsjs2 = _interopRequireDefault(_collectionsjs);

var _BasicExample = __webpack_require__(154);

var _BasicExample2 = _interopRequireDefault(_BasicExample);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = {
    data: function data() {
        return {
            rules: new _collectionsjs2.default(_data3.default.rules).chunk(10).all()
        };
    },

    components: {
        BasicExample: _BasicExample2.default
    }
}; //
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//

/***/ },

/***/ 150:
/***/ function(module, exports, __webpack_require__) {

"use strict";
'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _data2 = __webpack_require__(139);

var _data3 = _interopRequireDefault(_data2);

var _collectionsjs = __webpack_require__(3);

var _collectionsjs2 = _interopRequireDefault(_collectionsjs);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//

exports.default = {
    data: function data() {
        return {
            rules: new _collectionsjs2.default(_data3.default.rules).chunk(10).all()
        };
    }
};

/***/ },

/***/ 154:
/***/ function(module, exports, __webpack_require__) {

var __vue_exports__, __vue_options__

/* template */
var __vue_template__ = __webpack_require__(164)
__vue_options__ = __vue_exports__ = __vue_exports__ || {}
if (typeof __vue_exports__.default === "object") {
if (Object.keys(__vue_exports__).some(function (key) { return key !== "default" && key !== "__esModule" })) {console.error("named exports are not supported in *.vue files.")}
__vue_options__ = __vue_exports__ = __vue_exports__.default
}
if (typeof __vue_options__ === "function") {
  __vue_options__ = __vue_options__.options
}
__vue_options__.render = __vue_template__.render
__vue_options__.staticRenderFns = __vue_template__.staticRenderFns

/* hot reload */
if (false) {(function () {
  var hotAPI = require("vue-hot-reload-api")
  hotAPI.install(require("vue"), false)
  if (!hotAPI.compatible) return
  module.hot.accept()
  if (!module.hot.data) {
    hotAPI.createRecord("data-v-10", __vue_options__)
  } else {
    hotAPI.reload("data-v-10", __vue_options__)
  }
})()}
if (__vue_options__.functional) {console.error("[vue-loader] BasicExample.vue: functional components are not supported and should be defined in plain js files using render functions.")}

module.exports = __vue_exports__


/***/ },

/***/ 163:
/***/ function(module, exports, __webpack_require__) {

var __vue_exports__, __vue_options__

/* script */
__vue_exports__ = __webpack_require__(146)

/* template */
var __vue_template__ = __webpack_require__(178)
__vue_options__ = __vue_exports__ = __vue_exports__ || {}
if (typeof __vue_exports__.default === "object") {
if (Object.keys(__vue_exports__).some(function (key) { return key !== "default" && key !== "__esModule" })) {console.error("named exports are not supported in *.vue files.")}
__vue_options__ = __vue_exports__ = __vue_exports__.default
}
if (typeof __vue_options__ === "function") {
  __vue_options__ = __vue_options__.options
}
__vue_options__.render = __vue_template__.render
__vue_options__.staticRenderFns = __vue_template__.staticRenderFns

/* hot reload */
if (false) {(function () {
  var hotAPI = require("vue-hot-reload-api")
  hotAPI.install(require("vue"), false)
  if (!hotAPI.compatible) return
  module.hot.accept()
  if (!module.hot.data) {
    hotAPI.createRecord("data-v-9", __vue_options__)
  } else {
    hotAPI.reload("data-v-9", __vue_options__)
  }
})()}
if (__vue_options__.functional) {console.error("[vue-loader] ValidatorExample.vue: functional components are not supported and should be defined in plain js files using render functions.")}

module.exports = __vue_exports__


/***/ },

/***/ 164:
/***/ function(module, exports, __webpack_require__) {

module.exports={render:function (){with(this) {
  return _h('code-example', [_h('form', {
    slot: "example",
    staticClass: "pure-form pure-form-stacked"
  }, [_h('div', {
    staticClass: "pure-u-1"
  }, [_h('label', {
    class: {
      'error': errors.has('email')
    },
    attrs: {
      "for": "email"
    }
  }, ["Email"]), " ", _h('input', {
    directives: [{
      name: "validate"
    }],
    class: {
      'pure-input-1': true, 'has-error': errors.has('email')
    },
    attrs: {
      "data-rules": "required|email",
      "name": "email",
      "type": "text",
      "placeholder": "Email"
    }
  }), " ", _h('span', {
    directives: [{
      name: "show",
      value: (errors.has('email')),
      expression: "errors.has('email')"
    }],
    staticClass: "error"
  }, [_s(errors.first('email'))])])]), " ", _h('div', {
    slot: "code-html"
  }, ["\n        <div id=\"app\">\n            <form class=\"pure-form pure-form-stacked\">\n                <div class=\"pure-u-1\">\n                    <label :class=\"{'error': errors.has('email') }\" for=\"email\">Email</label>\n                    <input v-validate data-rules=\"required|email\" :class=\"{'pure-input-1': true, 'has-error': errors.has('email') }\" name=\"email\" type=\"text\" placeholder=\"Email\">\n                    <span class=\"error\" v-show=\"errors.has('email')\">" + _s("{" + "{ errors.first('email') }" + "}") + "</span>\n                </div>\n            </form>\n        </div>\n    "]), " ", _h('div', {
    slot: "code-js"
  }, ["\n        import Vue from 'vue';\n        import VeeValidate from 'vee-validate';\n\n        Vue.use(VeeValidate);\n\n        new Vue({\n            el: '#app'\n        });\n    "])])
}},staticRenderFns: []}
if (false) {
  module.hot.accept()
  if (module.hot.data) {
     require("vue-hot-reload-api").rerender("data-v-10", module.exports)
  }
}

/***/ },

/***/ 173:
/***/ function(module, exports, __webpack_require__) {

module.exports={render:function (){with(this) {
  return _h('div', [_m(0), " ", _h('p', ["\n        The ErrorBag class is a wrapper around an array, and is standalone and has no dependencies, you can use it in your code for any reason:\n        ", _h('code-block', {
    staticClass: "language-javascript"
  }, ["\n            import { ErrorBag } from 'vee-validate'; // ES6 Import.\n            const bag = new ErrorBag();\n        "]), "\n        The internal array contains the error objects, the structure is:\n        ", _h('code-block', {
    staticClass: "language-javascript"
  }, ["\n            {\n                errors: [\n                    { field: 'Field name', msg: 'Error message' },\n                    { field: 'Field name', msg: 'Error message' },\n                    { field: 'Field name', msg: 'Error message' }\n                ]\n            }\n        "])]), " ", _m(1), " ", _m(2), " ", _h('p', ["\n        The validator is injected to the Vue instance as ", _m(3), " automatically.\n        However it is also a stand alone class and can be used separately for programmatically validating values.\n        The constructor can optionally take an object to map each field name to a set of validations.\n        ", _h('code-block', {
    staticClass: "language-javascript"
  }, ["\n            import { Validator } from 'vee-validate';\n            const validator = new Validator({\n                email: 'required|email',\n                name: 'required|alpha|min:3',\n            }); // or Validator.create({ ... });\n        "]), "\n        But you can construct the object without passing anything and add the validation rules later.\n        ", _h('code-block', {
    staticClass: "language-javascript"
  }, ["\n            import { Validator } from 'vee-validate';\n            const validator = new Validator();\n\n            validator.attach('email', 'required|email'); // attach field.\n            validator.attach('name', 'required|alpha', 'Full Name'); // attach field with display name for error generation.\n\n            validator.detach('email'); // you can also detach fields.\n        "]), "\n        After that you can validate values with ", _m(4), " which should return a boolean if all validations pass. Like this:\n        ", _h('code-block', {
    staticClass: "language-javascript"
  }, ["\n            validator.validate('email', 'foo@bar.com'); // true\n            validator.validate('email', 'foo@bar'); // false\n        "])]), _m(5), " ", _m(6), "\n        You can validate multiple values at the same time using ", _m(7), ":\n        ", _h('code-block', {
    staticClass: "language-javascript"
  }, ["\n            validator.validateAll({\n                email: 'foo@bar.com',\n                name: 'John Snow'\n            });\n        "]), "\n        Returns true if all values passed validation, false if at least one value failed validation. will return a ", _m(8), " if at least one field validation rule returned a ", _m(9), " which is also resolved to a boolean. The ErrorBag will be populated with any errors encountered.\n        You can access the ", _m(10), " property directly or using ", _m(11), ".\n        ", _h('code-block', {
    staticClass: "language-javascript"
  }, ["\n            var errorBag = validator.errorBag;\n            // or\n            var errorBag = validator.getErrors();\n        "]), "\n\n        The validator instance can only generate messages for one locale at a time. But you need to use ", _m(12), " method to switch the validator locale.\n        ", _h('code-block', {
    staticClass: "language-javascript"
  }, ["\n            validator.setLocale('ar');\n        "]), " ", _h('div', {
    staticClass: "note"
  }, [_m(13), " Each validator keeps track of its own locale. so be sure to update any instances whenever the language changes.\n            For more information about how to overwrite messages and add new ones, please refer to the ", _h('router-link', {
    staticClass: "link",
    attrs: {
      "to": {
        name: 'rules',
        hash: 'custom-messages'
      }
    }
  }, ["custom messages"]), " section.\n        "]), "\n        The Validator class has a static method called ", _m(14), " which sets the default language for all newly instantiated validators to that language.\n        ", _h('code-block', {
    staticClass: "language-javascript"
  }, ["\n            import { Validator } from 'vee-validate';\n\n            Validator.setDefaultLocale('ar'); // from now on, all validators that are created will have this locale.\n            Validator.create().locale // 'ar';\n\n            Validator.setDefaultLocale(); // resets to english, again for all newly created validators, previously created ones won't be touched.\n        "]), " ", _m(15), " ", _m(16), " ", _m(17), " ", _h('validator-example')])
}},staticRenderFns: [function (){with(this) {
  return _h('h2', {
    staticClass: "content-subhead",
    attrs: {
      "id": "error-bag"
    }
  }, [_h('a', {
    attrs: {
      "href": "#error-bag"
    }
  }, ["ErrorBag"])])
}},function (){with(this) {
  return _h('p', [_h('b', {
    staticClass: "important"
  }, ["Available Methods:"]), " ", _h('ul', [_h('li', [_h('code', {
    staticClass: "inline"
  }, ["add(object error)"]), " adds an error object to the internal array."]), " ", _h('li', [_h('code', {
    staticClass: "inline"
  }, ["all()"]), " Gets all messages from the internal array."]), " ", _h('li', [_h('code', {
    staticClass: "inline"
  }, ["any()"]), " Checks if there are any errors."]), " ", _h('li', [_h('code', {
    staticClass: "inline"
  }, ["clear()"]), " Removes all items from the internal array."]), " ", _h('li', [_h('code', {
    staticClass: "inline"
  }, ["collect(String field)"]), " Collects errors associated with a specific field. not passing the field name will group all errors by field name instead."]), " ", _h('li', [_h('code', {
    staticClass: "inline"
  }, ["count()"]), " Gets the length of the internal array. or the number of messages."]), " ", _h('li', [_h('code', {
    staticClass: "inline"
  }, ["first(String field)"]), " Gets the first error message associated with the specified field."]), " ", _h('li', [_h('code', {
    staticClass: "inline"
  }, ["has(String field)"]), " Checks if there is at least one error associated with the specified field."]), " ", _h('li', [_h('code', {
    staticClass: "inline"
  }, ["remove(String field)"]), " Removes all errors for a specified field from the internal array."])])])
}},function (){with(this) {
  return _h('h2', {
    staticClass: "content-subhead",
    attrs: {
      "id": "validator"
    }
  }, [_h('a', {
    attrs: {
      "href": "#validator"
    }
  }, ["Validator"])])
}},function (){with(this) {
  return _h('code', {
    staticClass: "inline"
  }, ["$validator"])
}},function (){with(this) {
  return _h('code', {
    staticClass: "inline"
  }, ["validate(field, value)"])
}},function (){with(this) {
  return _h('div', {
    staticClass: "note"
  }, [_h('b', ["Note:"]), " Most validators return a Boolean, however some validators (very few) return a ", _h('code', ["Promise"]), " The validator is aware of this and will only return a Promise if at least one validation yields a promise. the promise is resolved to boolean which you can later chain to check your fields.\n        "])
}},function (){with(this) {
  return _h('br')
}},function (){with(this) {
  return _h('code', {
    staticClass: "inline"
  }, ["validateAll(obj)"])
}},function (){with(this) {
  return _h('code', ["Promise"])
}},function (){with(this) {
  return _h('code', ["Promise"])
}},function (){with(this) {
  return _h('code', {
    staticClass: "inline"
  }, ["errorBag"])
}},function (){with(this) {
  return _h('code', {
    staticClass: "inline"
  }, ["getErrors()"])
}},function (){with(this) {
  return _h('code', {
    staticClass: "inline"
  }, ["setLocale"])
}},function (){with(this) {
  return _h('b', ["Note:"])
}},function (){with(this) {
  return _h('code', {
    staticClass: "inline"
  }, ["setDefaultLocale(string)"])
}},function (){with(this) {
  return _h('p')
}},function (){with(this) {
  return _h('h2', {
    staticClass: "content-subhead",
    attrs: {
      "id": "validator-example"
    }
  }, [_h('a', {
    attrs: {
      "href": "#validator-example"
    }
  }, ["Validator Example"])])
}},function (){with(this) {
  return _h('p', ["\n        Here is an example of using the validator without the directive, which means you will be responsible for monitoring input changes on your own, and calling the API methods as you see fit.\n        This example uses a Vue instance to simplify things, but it can be used in plain JavaScript as well.\n    "])
}}]}
if (false) {
  module.hot.accept()
  if (module.hot.data) {
     require("vue-hot-reload-api").rerender("data-v-4", module.exports)
  }
}

/***/ },

/***/ 174:
/***/ function(module, exports, __webpack_require__) {

module.exports={render:function (){with(this) {
  return _h('div', [_m(0), " ", _h('p', ["\n        This plugin only comes with English messages to keep things small, but it was built with flexible message generation in mind.\n        ", _m(1), "\n        The ", _m(2), " is an example on how you would structure those messages.\n        Then you may want to update the validator dictionary, which should happen once in your app startup. still you may update them whenever you want in any point of your app, review the ", _h('router-link', {
    staticClass: "link",
    attrs: {
      "to": {
        name: 'rules',
        hash: '#custom-messages'
      }
    }
  }, ["custom messages"]), " here.\n    "]), " ", _m(3), " ", _h('p', ["\n        Seeing 'first_name' in your error messages can't be very good for your user experience, this plugin offer a couple of solutions:\n\n        You can use the ", _m(4), " attribute on your field and give it a better name for your users, it would look like this:\n        ", _h('code-block', {
    staticClass: "language-html"
  }, ["\n            <input v-validate data-rules=\"alpha|min:3\" data-as=\"First Name\" name=\"first_name\" type=\"text\">\n        "]), "\n\n        Now when any error message is generated for this input will use the ", _m(5), " value instead of the actual field name. this is also the same for binding expressions.\n        While this is very useful for simple setups and displaying localized names, you might want to check the approach below.\n    "]), " ", _m(6), " ", _m(7), " ", _m(8), " ", _h('code-block', {
    staticClass: "language-javascript"
  }, ["\n        import Vue from 'vue';\n        import VeeValidate from 'vee-validate';\n        import messagesAr from './strings/validator/messages/ar.js';\n        import attributesAr from './strings/validator/attributes/ar.js';\n        import attributesEn from './strings/validator/attributes/en.js';\n\n        // Pass options to make all validators use the arabic language, also merge the english and arabic attributes with the internal dictionary.\n        // You can still modify each validator locale indvidually via the 'setLocale' on the validator instance.\n        Vue.use(VeeValidate, {\n            locale: 'ar',\n            dictionary: { // dictionary object\n                en: {  // locale key\n                    attributes: attributesEn // English attributes\n                }\n                ar: {   // locale key\n                    messages: messagesAr,   // Arabic messages\n                    attributes: attributesAr  // Arabic attributes\n                }\n            }\n        });\n\n\n        new Vue({\n            el: '#app',\n            data: {\n                // Some Data ...\n            },\n            methods {\n                // Cool methods ...\n            }\n        });\n    "]), " ", _m(9), _m(10), " ", _m(11), " ", _h('div', ["\n        A working example can be found ", _h('router-link', {
    staticClass: "link",
    attrs: {
      "to": {
        name: 'examples',
        hash: '#locale-example'
      }
    }
  }, ["here"]), ".\n    "]), " ", _m(12), " ", _m(13), " ", _m(14), " ", _m(15)])
}},staticRenderFns: [function (){with(this) {
  return _h('h2', {
    staticClass: "content-subhead",
    attrs: {
      "id": "translation"
    }
  }, [_h('a', {
    attrs: {
      "href": "#translation"
    }
  }, ["Translation"])])
}},function (){with(this) {
  return _h('br')
}},function (){with(this) {
  return _h('a', {
    staticClass: "link",
    attrs: {
      "href": "https://github.com/logaretm/vee-validate/blob/master/dist/locale/en.js",
      "target": "github"
    }
  }, ["English messages file"])
}},function (){with(this) {
  return _h('h2', {
    staticClass: "content-subhead",
    attrs: {
      "id": "attributes-data-as"
    }
  }, [_h('a', {
    attrs: {
      "href": "#attributes-data-as"
    }
  }, ["Attributes (data-as)"])])
}},function (){with(this) {
  return _h('code', ["data-as"])
}},function (){with(this) {
  return _h('code', ["data-as"])
}},function (){with(this) {
  return _h('h2', {
    staticClass: "content-subhead",
    attrs: {
      "id": "attributes-dictionary"
    }
  }, [_h('a', {
    attrs: {
      "href": "#attributes-dictionary"
    }
  }, ["Attributes (Dictionary)"])])
}},function (){with(this) {
  return _h('p', ["\n        All validators have access to a simple dictionary that is shared between all of them, this dictionary contains localized error messages and attributes, if the validator finds a localized attribute name for that field it will be used instead of the field name.\n        Pretty much like ", _h('code', ["data-as"]), " but ", _h('code', ["data-as"]), " takes priorty if both are found.\n    "])
}},function (){with(this) {
  return _h('p', ["\n        Here is a little code example on how would you add support for your localized messages and attributes. Note that this is the entry point of your application.\n    "])
}},function (){with(this) {
  return _h('p')
}},function (){with(this) {
  return _h('div', {
    staticClass: "note"
  }, [_h('b', ["Note: "]), " You can still modify the default language for each validator individually via the ", _h('code', ["setLocale"]), " method on the validator instance.\n            And you can also switch the language for all future validators (not created yet) via the ", _h('code', ["setDefaultLocale"]), " static method on the Validator class.\n        "])
}},function (){with(this) {
  return _h('p')
}},function (){with(this) {
  return _h('h2', {
    staticClass: "content-subhead",
    attrs: {
      "id": "localized-files"
    }
  }, [_h('a', {
    attrs: {
      "href": "#localized-files"
    }
  }, ["Localized Files"])])
}},function (){with(this) {
  return _h('p', ["\n        In the ", _h('a', {
    staticClass: "link",
    attrs: {
      "href": "https://github.com/logaretm/vee-validate/tree/master/dist/locale",
      "target": "github"
    }
  }, [_h('code', {
    staticClass: "inline"
  }, ["dist/locale"])]), " directory of this plugin, is a collection of localized files.\n        If you can't find your locale, you could help this plugin by contributing a localized version to the ", _h('a', {
    staticClass: "link",
    attrs: {
      "href": "https://github.com/logaretm/vee-validate",
      "target": "github"
    }
  }, ["repo"]), ". I will happily accept it.\n    "])
}},function (){with(this) {
  return _h('b', {
    staticClass: "important"
  }, ["Available Locales:"])
}},function (){with(this) {
  return _h('ul', [_h('li', [_h('a', {
    staticClass: "link",
    attrs: {
      "href": "https://github.com/logaretm/vee-validate/blob/master/dist/locale/en.js",
      "target": "github"
    }
  }, ["English"])]), " ", _h('li', [_h('a', {
    staticClass: "link",
    attrs: {
      "href": "https://github.com/logaretm/vee-validate/blob/master/dist/locale/ar.js",
      "target": "github"
    }
  }, ["Arabic"])]), " ", _h('li', [_h('a', {
    staticClass: "link",
    attrs: {
      "href": "https://github.com/logaretm/vee-validate/blob/master/dist/locale/es.js",
      "target": "github"
    }
  }, ["Spanish"]), " by ", _h('a', {
    staticClass: "link",
    attrs: {
      "href": "https://github.com/ClaudioEyzaguirre",
      "target": "github"
    }
  }, ["@ClaudioEyzaguirre"])]), " ", _h('li', [_h('a', {
    staticClass: "link",
    attrs: {
      "href": "https://github.com/logaretm/vee-validate/blob/master/dist/locale/pt_BR.js",
      "target": "github"
    }
  }, ["Brazilian Portuguese"]), " by ", _h('a', {
    staticClass: "link",
    attrs: {
      "href": "https://github.com/edbizarro",
      "target": "github"
    }
  }, ["@edbizarro"])]), " ", _h('li', [_h('a', {
    staticClass: "link",
    attrs: {
      "href": "https://github.com/logaretm/vee-validate/blob/master/dist/locale/fi.js",
      "target": "github"
    }
  }, ["Finnish"]), " by ", _h('a', {
    staticClass: "link",
    attrs: {
      "href": "https://github.com/anttisand",
      "target": "github"
    }
  }, ["@anttisand"])]), " ", _h('li', [_h('a', {
    staticClass: "link",
    attrs: {
      "href": "https://github.com/logaretm/vee-validate/blob/master/dist/locale/de.js",
      "target": "github"
    }
  }, ["German"]), " by ", _h('a', {
    staticClass: "link",
    attrs: {
      "href": "https://github.com/kayschima",
      "target": "github"
    }
  }, ["@kayschima"])]), " ", _h('li', [_h('a', {
    staticClass: "link",
    attrs: {
      "href": "https://github.com/logaretm/vee-validate/blob/master/dist/locale/fr.js",
      "target": "github"
    }
  }, ["French"]), " by ", _h('a', {
    staticClass: "link",
    attrs: {
      "href": "https://github.com/thierrymichel",
      "target": "github"
    }
  }, ["@thierrymichel"])]), " ", _h('li', [_h('a', {
    staticClass: "link",
    attrs: {
      "href": "https://github.com/logaretm/vee-validate/blob/master/dist/locale/vi.js",
      "target": "github"
    }
  }, ["Vietnamese"]), " by ", _h('a', {
    staticClass: "link",
    attrs: {
      "href": "https://github.com/imcvampire",
      "target": "github"
    }
  }, ["@imcvampire"])])])
}}]}
if (false) {
  module.hot.accept()
  if (module.hot.data) {
     require("vue-hot-reload-api").rerender("data-v-5", module.exports)
  }
}

/***/ },

/***/ 175:
/***/ function(module, exports, __webpack_require__) {

module.exports={render:function (){with(this) {
  return _h('div', [_m(0), " ", _m(1), " ", _m(2), " ", _m(3), _m(4), " ", _m(5), " ", _h('code-block', {
    staticClass: "language-bash"
  }, ["npm install vee-validate --save"]), " ", _m(6), " ", _h('code-block', {
    staticClass: "language-bash"
  }, ["npm install vee-validate@next --save"]), " ", _m(7), " ", _m(8), " ", _m(9), " ", _h('code-block', {
    staticClass: "language-bash"
  }, ["bower install vee-validate#1.0.0-beta.5 --save"]), " ", _m(10), " ", _h('code-block', {
    staticClass: "language-bash"
  }, ["bower install vee-validate#2.0.0-beta.10 --save"]), " ", _m(11), " ", _m(12), "\n        Head over to ", _m(13), " and grab the latest version.\n\n        Then you may use it like this:\n        ", _h('code-block', {
    staticClass: "language-html"
  }, ["\n            <script src=\"path/to/vue.js\"></script>\n            <script src=\"path/to/vee-validate.js\"></script>\n            <script>\n                Vue.use(VeeValidate); // good to go.\n            </script>\n        "]), "\n\n        or you may import it using ES6:\n        ", _h('code-block', {
    staticClass: "language-javascript"
  }, ["\n            import Vue from 'vue';\n            import VeeValidate from 'vee-validate';\n\n            Vue.use(VeeValidate);\n        "]), " ", _m(14), " ", _m(15), " ", _m(16), " ", _h('basic-example'), " ", _h('div', {
    staticClass: "flex-center"
  }, [_h('router-link', {
    staticClass: "link",
    attrs: {
      "to": {
        name: 'examples'
      }
    }
  }, ["More Examples"])]), " ", _m(17), " ", _h('div', {
    staticClass: "note"
  }, [_m(18), " The field name that appears in the error messages is usually the input's ", _m(19), " attribute, unless you passed a value from the vue instance ", _m(20), " object,\n        The name will be then the expression name, check the ", _h('router-link', {
    attrs: {
      "to": {
        name: 'examples',
        hash: '#validate-data-example'
      }
    }
  }, ["data validation example"]), ".\n    "]), " ", _m(21), " ", _h('p', ["\n        Naturally, you would want to display the errors to your users. The plugin augments your Vue instance with a private validator object and a public errors data object.\n        You are responsible for how the errors should be rendered.\n        ", _m(22), _m(23), "The errors object exposes a simple methods to help you render errors:\n        ", _m(24), "\n        There are a few more ", _h('router-link', {
    staticClass: "link",
    attrs: {
      "to": {
        name: 'api',
        hash: '#error-bag'
      }
    }
  }, ["methods"]), " that you can use to manipulate the errors object.\n    "]), " ", _m(25), " ", _m(26), " ", _h('div', {
    staticClass: "pure-g"
  }, [(rules) && _l((rules), function(group) {
    return _h('div', {
      class: 'pure-u-1-' + rules.length
    }, [_h('ul', [(group) && _l((group), function(rule) {
      return _h('li', [_h('router-link', {
        staticClass: "link",
        attrs: {
          "to": {
            name: 'rules',
            hash: '#rule-' + rule
          }
        }
      }, [_s(rule)])])
    })])])
  })]), " ", _h('p', ["Visit the ", _h('router-link', {
    staticClass: "link",
    attrs: {
      "to": {
        name: 'rules',
        hash: '#available-rules'
      }
    }
  }, ["rules documentation"]), " to learn more about how to use each rule, and how to ", _h('router-link', {
    staticClass: "link",
    attrs: {
      "to": {
        name: 'rules',
        hash: '#custom-rules'
      }
    }
  }, ["create your own"]), "."]), " ", _m(27), " ", _m(28), " ", _h('code-block', {
    staticClass: "language-javascript"
  }, ["\n        import Vue from 'vue';\n        import VeeValidate from 'vee-validate';\n\n        const config = {\n            errorBagName: 'errors', // change if property conflicts.\n            delay: 0,\n            locale: 'en',\n            messages: null,\n            strict: true\n        };\n\n        Vue.use(VeeValidate, config);\n    "]), " ", _h('ul', [_m(29), " ", _m(30), " ", _m(31), " ", _h('li', [_m(32), " The messages to be generated for the validation errors, check ", _h('router-link', {
    staticClass: "link",
    attrs: {
      "to": {
        name: 'rules',
        hash: '#custom-messages'
      }
    }
  }, ["custom messages"]), " section."]), " ", _m(33)])])
}},staticRenderFns: [function (){with(this) {
  return _h('h2', {
    staticClass: "content-subhead",
    attrs: {
      "id": "about"
    }
  }, [_h('a', {
    attrs: {
      "href": "#about"
    }
  }, ["What is vee-validate?"])])
}},function (){with(this) {
  return _h('p', ["\n        This is a lightweight plugin for ", _h('a', {
    staticClass: "link",
    attrs: {
      "href": "https://vuejs.org/"
    }
  }, ["Vue.js"]), " that allows you to validate input fields, and display errors.\n        ", _h('br'), _h('br'), "\n        You don't have to do anything fancy in your app, most of the work goes into the html.\n        You only need to specify for each input what kind of validators should be used when the value changes. You will then get informed of the errors for each field.\n        ", _h('br'), _h('br'), "\n        Although most of the validations occur automatically, you can use the validator however you see fit. The validator object has no dependencies and is a standalone object.\n        ", _h('br'), _h('br'), "\n        Currently there are over 20 validation rules available in the plugin.\n        This plugin is inspired by ", _h('a', {
    staticClass: "link",
    attrs: {
      "href": "https://laravel.com/"
    }
  }, ["PHP Framework Laravel's validation syntax"]), ".\n        ", _h('br'), _h('br'), "It also supports Vue 2.0. All examples here are built using Vue 2.0 with the plugin.\n    "])
}},function (){with(this) {
  return _h('h2', {
    staticClass: "content-subhead",
    attrs: {
      "id": "installation"
    }
  }, [_h('a', {
    attrs: {
      "href": "#installation"
    }
  }, ["Installation"])])
}},function (){with(this) {
  return _h('p', ["\n        You can install this plugin via ", _h('a', {
    staticClass: "link",
    attrs: {
      "href": "#npm"
    }
  }, ["npm"]), " or ", _h('a', {
    staticClass: "link",
    attrs: {
      "href": "#bower"
    }
  }, ["bower"]), " or via a ", _h('a', {
    staticClass: "link",
    attrs: {
      "href": "#cdn"
    }
  }, ["CDN"]), ".\n        "])
}},function (){with(this) {
  return _h('h3', {
    staticClass: "content-subhead",
    attrs: {
      "id": "npm"
    }
  }, [_h('a', {
    attrs: {
      "href": "#npm"
    }
  }, ["npm"])])
}},function (){with(this) {
  return _h('b', ["Vue 1.x"])
}},function (){with(this) {
  return _h('b', ["Vue 2.x"])
}},function (){with(this) {
  return _h('div', {
    staticClass: "note"
  }, [_h('b', ["Note:"]), " The latest version of this plugin will keep pointing to the Vue 1.x version, until Vue 2.0 is released which is soon, then the latest will point to Vue 2.0 while another tag will be used for the Vue 1.x versions.\n        "])
}},function (){with(this) {
  return _h('h3', {
    staticClass: "content-subhead",
    attrs: {
      "id": "bower"
    }
  }, [_h('a', {
    attrs: {
      "href": "#bower"
    }
  }, ["bower"])])
}},function (){with(this) {
  return _h('b', ["Vue 1.x"])
}},function (){with(this) {
  return _h('b', ["Vue 2.x"])
}},function (){with(this) {
  return _h('br')
}},function (){with(this) {
  return _h('h3', {
    staticClass: "content-subhead",
    attrs: {
      "id": "cdn"
    }
  }, [_h('a', {
    attrs: {
      "href": "#cdn"
    }
  }, ["CDN"])])
}},function (){with(this) {
  return _h('a', {
    attrs: {
      "href": "https://www.jsdelivr.com/projects/vee-validate",
      "target": "jsdelivr"
    }
  }, ["jsdelivr"])
}},function (){with(this) {
  return _h('p')
}},function (){with(this) {
  return _h('h2', {
    staticClass: "content-subhead",
    attrs: {
      "id": "basic-example"
    }
  }, [_h('a', {
    attrs: {
      "href": "#basic-example"
    }
  }, ["Basic Example"])])
}},function (){with(this) {
  return _h('p', ["\n        All you need is to add the ", _h('code', {
    staticClass: "inline"
  }, ["v-validate"]), " directive to the input you wish to validate.\n        ", _h('br'), _h('br'), "\n        Then add a ", _h('code', {
    staticClass: "inline"
  }, ["data-rules"]), " attribute which contains a list of validation rules separated by a pipe '", _h('code', {
    staticClass: "inline"
  }, ["|"]), "'.\n        For the following example the validation rules are straight forward, use ", _h('code', {
    staticClass: "inline"
  }, ["required"]), " to indicate that the field is required.\n        And ", _h('code', {
    staticClass: "inline"
  }, ["email"]), " to indicate that the field must be an email.\n        To combine both rules we assign the value ", _h('code', {
    staticClass: "inline"
  }, ["required|email"]), " to the ", _h('code', {
    staticClass: "inline"
  }, ["data-rules"]), " data-set attribute.\n    "])
}},function (){with(this) {
  return _h('br')
}},function (){with(this) {
  return _h('b', ["Note:"])
}},function (){with(this) {
  return _h('code', ["name"])
}},function (){with(this) {
  return _h('code', ["$data"])
}},function (){with(this) {
  return _h('h2', {
    staticClass: "content-subhead",
    attrs: {
      "id": "render-errors"
    }
  }, [_h('a', {
    attrs: {
      "href": "#render-errors"
    }
  }, ["Rendering Errors"])])
}},function (){with(this) {
  return _h('br')
}},function (){with(this) {
  return _h('br')
}},function (){with(this) {
  return _h('ul', [_h('li', [_h('code', {
    staticClass: "inline"
  }, ["first('field')"]), " Fetches the first error message associated with that field."]), " ", _h('li', [_h('code', {
    staticClass: "inline"
  }, ["collect('field')"]), " Fetches all error messages associated with that field. alternativly you can pass nothing and it will return errors grouped by fields"]), " ", _h('li', [_h('code', {
    staticClass: "inline"
  }, ["has('field')"]), " Checks if there are any errors associated with that field."]), " ", _h('li', [_h('code', {
    staticClass: "inline"
  }, ["all()"]), " Gets all error messages."]), " ", _h('li', [_h('code', {
    staticClass: "inline"
  }, ["any()"]), " Checks if there are any errors."])])
}},function (){with(this) {
  return _h('h2', {
    staticClass: "content-subhead",
    attrs: {
      "id": "available-rules"
    }
  }, [_h('a', {
    attrs: {
      "href": "#available-rules"
    }
  }, ["Available Rules"])])
}},function (){with(this) {
  return _h('p', ["There are more than 20 rules available to validate your inputs:"])
}},function (){with(this) {
  return _h('h2', {
    staticClass: "content-subhead",
    attrs: {
      "id": "configuration"
    }
  }, [_h('a', {
    attrs: {
      "href": "#configuration"
    }
  }, ["Configuration"])])
}},function (){with(this) {
  return _h('p', ["\n        You may need to configure some options to tweak some of the plugin internals, this is not required, but could cause conflicts. For example: if you are using a property called ", _h('code', {
    staticClass: "inline"
  }, ["errors"]), " on your vue instance this may cause conflicts.\n         Here is how you would set up the options along with the default values:\n    "])
}},function (){with(this) {
  return _h('li', [_h('code', {
    staticClass: "inline"
  }, ["errorBagName:"]), " The name of the ErrorBag object that will be injected in each of Vue's instances' data."])
}},function (){with(this) {
  return _h('li', [_h('code', {
    staticClass: "inline"
  }, ["delay:"]), " The default debounce time for all inputs (only affects validations)."])
}},function (){with(this) {
  return _h('li', [_h('code', {
    staticClass: "inline"
  }, ["locale:"]), " The default language for the validation messages."])
}},function (){with(this) {
  return _h('code', {
    staticClass: "inline"
  }, ["messages:"])
}},function (){with(this) {
  return _h('li', [_h('code', {
    staticClass: "inline"
  }, ["strict:"]), " Fields that have no rules will fail validation unless ", _h('code', {
    staticClass: "inline"
  }, ["strict"]), " is set to false."])
}}]}
if (false) {
  module.hot.accept()
  if (module.hot.data) {
     require("vue-hot-reload-api").rerender("data-v-6", module.exports)
  }
}

/***/ },

/***/ 176:
/***/ function(module, exports, __webpack_require__) {

module.exports={render:function (){with(this) {
  return _h('div', [_m(0), " ", _h('p', ["\n        The validation rules have a very simple syntax similar to ", _m(1), ".\n        A validation expression is a string of a series of validators separated by a pipe ", _m(2), ":\n        ", _h('code-block', {
    staticClass: "language-javascript"
  }, ["\n            var single = 'required'; // single rule.\n            var multiple = 'required|numeric' // multiple rules.\n        "]), "\n        Some rules can have parameters, which are passed in a comma separated list without spaces.\n        ", _h('code-block', {
    staticClass: "language-javascript"
  }, ["\n            var someRule = 'in:1,2,3,4';\n        "])]), _m(3), " ", _m(4), " ", _m(5), " ", _m(6), " ", _h('div', {
    staticClass: "pure-g"
  }, [(rules) && _l((rules), function(group) {
    return _h('div', {
      class: 'pure-u-1-' + rules.length
    }, [_h('ul', [(group) && _l((group), function(rule) {
      return _h('li', [_h('router-link', {
        staticClass: "link",
        attrs: {
          "to": {
            name: 'rules',
            hash: '#rule-' + rule
          }
        }
      }, [_s(rule)])])
    })])])
  })]), " ", _h('div', {
    staticClass: "rules"
  }, [_m(7), " ", _m(8), " ", _m(9), " ", _h('div', {
    staticClass: "rule",
    attrs: {
      "id": "rule-after"
    }
  }, [_m(10), " ", _m(11), " ", _m(12), " ", _h('div', [_h('form', {
    staticClass: "pure-form pure-form-stacked"
  }, [_h('input', {
    directives: [{
      name: "validate"
    }],
    class: {
      'pure-input-1': true, 'has-error': errors.has('after_field')
    },
    attrs: {
      "data-rules": "date_format:DD/MM/YYYY|after:after_field_target",
      "name": "after_field",
      "data-as": "field",
      "type": "text",
      "placeholder": "DD/MM/YYYY"
    }
  }), " ", _h('span', {
    directives: [{
      name: "show",
      value: (errors.has('after_field')),
      expression: "errors.has('after_field')"
    }],
    staticClass: "error"
  }, [_s(errors.first('after_field'))]), " ", _h('input', {
    class: {
      'pure-input-1': true, 'has-error': errors.has('after_field')
    },
    attrs: {
      "name": "after_field_target",
      "data-as": "field",
      "type": "text",
      "placeholder": "DD/MM/YYYY"
    }
  })])])]), " ", _h('div', {
    staticClass: "rule",
    attrs: {
      "id": "rule-alpha"
    }
  }, [_m(13), " ", _m(14), " ", _h('div', [_h('form', {
    staticClass: "pure-form pure-form-stacked"
  }, [_h('input', {
    directives: [{
      name: "validate"
    }],
    class: {
      'pure-input-1': true, 'has-error': errors.has('alpha_field')
    },
    attrs: {
      "data-rules": "alpha",
      "name": "alpha_field",
      "data-as": "field",
      "type": "text",
      "placeholder": "Enter some characters"
    }
  }), " ", _h('span', {
    directives: [{
      name: "show",
      value: (errors.has('alpha_field')),
      expression: "errors.has('alpha_field')"
    }],
    staticClass: "error"
  }, [_s(errors.first('alpha_field'))])])])]), " ", _h('div', {
    staticClass: "rule",
    attrs: {
      "id": "rule-alpha_dash"
    }
  }, [_m(15), " ", _m(16), " ", _h('div', [_h('form', {
    staticClass: "pure-form pure-form-stacked"
  }, [_h('input', {
    directives: [{
      name: "validate"
    }],
    class: {
      'pure-input-1': true, 'has-error': errors.has('alpha_dash_field')
    },
    attrs: {
      "data-rules": "alpha_dash",
      "name": "alpha_dash_field",
      "data-as": "field",
      "type": "text",
      "placeholder": "Enter a string with dashes"
    }
  }), " ", _h('span', {
    directives: [{
      name: "show",
      value: (errors.has('alpha_dash_field')),
      expression: "errors.has('alpha_dash_field')"
    }],
    staticClass: "error"
  }, [_s(errors.first('alpha_dash_field'))])])])]), " ", _h('div', {
    staticClass: "rule",
    attrs: {
      "id": "rule-alpha_num"
    }
  }, [_m(17), " ", _m(18), " ", _h('div', [_h('form', {
    staticClass: "pure-form pure-form-stacked"
  }, [_h('input', {
    directives: [{
      name: "validate"
    }],
    class: {
      'pure-input-1': true, 'has-error': errors.has('alpha_num_field')
    },
    attrs: {
      "data-rules": "alpha_num",
      "name": "alpha_num_field",
      "data-as": "field",
      "type": "text",
      "placeholder": "Enter a string with numbers"
    }
  }), " ", _h('span', {
    directives: [{
      name: "show",
      value: (errors.has('alpha_num_field')),
      expression: "errors.has('alpha_num_field')"
    }],
    staticClass: "error"
  }, [_s(errors.first('alpha_num_field'))])])])]), " ", _h('div', {
    staticClass: "rule",
    attrs: {
      "id": "rule-before"
    }
  }, [_m(19), " ", _m(20), " ", _h('div', [_h('form', {
    staticClass: "pure-form pure-form-stacked"
  }, [_h('input', {
    directives: [{
      name: "validate"
    }],
    class: {
      'pure-input-1': true, 'has-error': errors.has('before_field')
    },
    attrs: {
      "data-rules": "date_format:DD/MM/YYYY|before:before_field_target",
      "name": "before_field",
      "data-as": "field",
      "type": "text",
      "placeholder": "DD/MM/YYYY"
    }
  }), " ", _h('span', {
    directives: [{
      name: "show",
      value: (errors.has('before_field')),
      expression: "errors.has('before_field')"
    }],
    staticClass: "error"
  }, [_s(errors.first('before_field'))]), " ", _h('input', {
    class: {
      'pure-input-1': true, 'has-error': errors.has('alpha_field')
    },
    attrs: {
      "name": "before_field_target",
      "type": "text",
      "placeholder": "DD/MM/YYYY"
    }
  })])])]), " ", _h('div', {
    staticClass: "rule",
    attrs: {
      "id": "rule-between"
    }
  }, [_m(21), " ", _m(22), " ", _m(23), " ", _h('div', [_h('form', {
    staticClass: "pure-form pure-form-stacked"
  }, [_h('input', {
    directives: [{
      name: "validate"
    }],
    class: {
      'pure-input-1': true, 'has-error': errors.has('between_field')
    },
    attrs: {
      "data-rules": "between:1,11",
      "name": "between_field",
      "data-as": "field",
      "type": "text",
      "placeholder": "Enter a number between 1 and 11"
    }
  }), " ", _h('span', {
    directives: [{
      name: "show",
      value: (errors.has('between_field')),
      expression: "errors.has('between_field')"
    }],
    staticClass: "error"
  }, [_s(errors.first('between_field'))])])])]), " ", _h('div', {
    staticClass: "rule",
    attrs: {
      "id": "rule-confirmed"
    }
  }, [_m(24), " ", _m(25), " ", _m(26), " ", _h('div', [_h('form', {
    staticClass: "pure-form pure-form-stacked"
  }, [_h('input', {
    directives: [{
      name: "validate"
    }],
    class: {
      'pure-input-1': true, 'has-error': errors.has('confirm_field')
    },
    attrs: {
      "data-rules": "confirmed:pw_confirm",
      "name": "confirm_field",
      "data-as": "password",
      "type": "password",
      "placeholder": "Enter The Password"
    }
  }), " ", _h('span', {
    directives: [{
      name: "show",
      value: (errors.has('confirm_field')),
      expression: "errors.has('confirm_field')"
    }],
    staticClass: "error"
  }, [_s(errors.first('confirm_field'))]), " ", _h('input', {
    class: {
      'pure-input-1': true, 'has-error': errors.has('confirm_field')
    },
    attrs: {
      "name": "pw_confirm",
      "type": "password",
      "placeholder": "Confirm the password"
    }
  })])])]), " ", _h('div', {
    staticClass: "rule",
    attrs: {
      "id": "rule-date_between"
    }
  }, [_m(27), " ", _m(28), " ", _m(29), " ", _h('div', [_h('form', {
    staticClass: "pure-form pure-form-stacked"
  }, [_h('input', {
    directives: [{
      name: "validate"
    }],
    class: {
      'pure-input-1': true, 'has-error': errors.has('date_between_field')
    },
    attrs: {
      "data-rules": "date_format:DD/MM/YYYY|date_between:10/09/2016,20/09/2016",
      "name": "date_between_field",
      "data-as": "field",
      "type": "text",
      "placeholder": "DD/MM/YYYY betweem 10/09/2016 and 20/09/2016"
    }
  }), " ", _h('span', {
    directives: [{
      name: "show",
      value: (errors.has('date_between_field')),
      expression: "errors.has('date_between_field')"
    }],
    staticClass: "error"
  }, [_s(errors.first('date_between_field'))])])])]), " ", _h('div', {
    staticClass: "rule",
    attrs: {
      "id": "rule-date_format"
    }
  }, [_m(30), " ", _m(31), " ", _m(32), " ", _h('div', [_h('form', {
    staticClass: "pure-form pure-form-stacked"
  }, [_h('input', {
    directives: [{
      name: "validate"
    }],
    class: {
      'pure-input-1': true, 'has-error': errors.has('date_format_field')
    },
    attrs: {
      "data-rules": "date_format:DD/MM/YYYY",
      "name": "date_format_field",
      "data-as": "field",
      "type": "text",
      "placeholder": "DD/MM/YYYY"
    }
  }), " ", _h('span', {
    directives: [{
      name: "show",
      value: (errors.has('date_format_field')),
      expression: "errors.has('date_format_field')"
    }],
    staticClass: "error"
  }, [_s(errors.first('date_format_field'))])])])]), " ", _h('div', {
    staticClass: "rule",
    attrs: {
      "id": "rule-decimal"
    }
  }, [_m(33), " ", _m(34), " ", _m(35), " ", _h('div', [_h('form', {
    staticClass: "pure-form pure-form-stacked"
  }, [_h('input', {
    directives: [{
      name: "validate"
    }],
    class: {
      'pure-input-1': true, 'has-error': errors.has('decimal_field')
    },
    attrs: {
      "data-rules": "decimal:3",
      "name": "decimal_field",
      "data-as": "field",
      "type": "text",
      "placeholder": "Enter a numeric value with decmials"
    }
  }), " ", _h('span', {
    directives: [{
      name: "show",
      value: (errors.has('decimal_field')),
      expression: "errors.has('decimal_field')"
    }],
    staticClass: "error"
  }, [_s(errors.first('decimal_field'))])])])]), " ", _h('div', {
    staticClass: "rule",
    attrs: {
      "id": "rule-digits"
    }
  }, [_m(36), " ", _m(37), " ", _m(38), " ", _h('div', [_h('form', {
    staticClass: "pure-form pure-form-stacked"
  }, [_h('input', {
    directives: [{
      name: "validate"
    }],
    class: {
      'pure-input-1': true, 'has-error': errors.has('digits_field')
    },
    attrs: {
      "data-rules": "digits:3",
      "name": "digits_field",
      "data-as": "field",
      "type": "text",
      "placeholder": "Enter a three digit number"
    }
  }), " ", _h('span', {
    directives: [{
      name: "show",
      value: (errors.has('digits_field')),
      expression: "errors.has('digits_field')"
    }],
    staticClass: "error"
  }, [_s(errors.first('digits_field'))])])])]), " ", _h('div', {
    staticClass: "rule",
    attrs: {
      "id": "rule-dimensions"
    }
  }, [_m(39), " ", _m(40), " ", _m(41), " ", _h('div', [_h('form', {
    staticClass: "pure-form pure-form-stacked"
  }, [_h('input', {
    directives: [{
      name: "validate"
    }],
    class: {
      'pure-input-1': true, 'has-error': errors.has('dimensions_field')
    },
    attrs: {
      "data-rules": "dimensions:30,30",
      "name": "dimensions_field",
      "data-as": "field",
      "type": "file"
    }
  }), " ", _h('span', {
    directives: [{
      name: "show",
      value: (errors.has('dimensions_field')),
      expression: "errors.has('dimensions_field')"
    }],
    staticClass: "error"
  }, [_s(errors.first('dimensions_field'))])])])]), " ", _h('div', {
    staticClass: "rule",
    attrs: {
      "id": "rule-email"
    }
  }, [_m(42), " ", _m(43), " ", _h('div', [_h('form', {
    staticClass: "pure-form pure-form-stacked"
  }, [_h('input', {
    directives: [{
      name: "validate"
    }],
    class: {
      'pure-input-1': true, 'has-error': errors.has('email_field')
    },
    attrs: {
      "data-rules": "email",
      "name": "email_field",
      "data-as": "field",
      "type": "text",
      "placeholder": "Enter a valid email"
    }
  }), " ", _h('span', {
    directives: [{
      name: "show",
      value: (errors.has('email_field')),
      expression: "errors.has('email_field')"
    }],
    staticClass: "error"
  }, [_s(errors.first('email_field'))])])])]), " ", _h('div', {
    staticClass: "rule",
    attrs: {
      "id": "rule-ext"
    }
  }, [_m(44), " ", _m(45), " ", _m(46), " ", _h('div', [_h('form', {
    staticClass: "pure-form pure-form-stacked"
  }, [_h('input', {
    directives: [{
      name: "validate"
    }],
    class: {
      'pure-input-1': true, 'has-error': errors.has('ext_field')
    },
    attrs: {
      "data-rules": "ext:jpeg,jpg",
      "name": "ext_field",
      "data-as": "field",
      "type": "file"
    }
  }), " ", _h('span', {
    directives: [{
      name: "show",
      value: (errors.has('ext_field')),
      expression: "errors.has('ext_field')"
    }],
    staticClass: "error"
  }, [_s(errors.first('ext_field'))])])])]), " ", _h('div', {
    staticClass: "rule",
    attrs: {
      "id": "rule-image"
    }
  }, [_m(47), " ", _m(48), " ", _h('div', [_h('form', {
    staticClass: "pure-form pure-form-stacked"
  }, [_h('input', {
    directives: [{
      name: "validate"
    }],
    class: {
      'pure-input-1': true, 'has-error': errors.has('image_field')
    },
    attrs: {
      "data-rules": "image",
      "name": "image_field",
      "data-as": "field",
      "type": "file"
    }
  }), " ", _h('span', {
    directives: [{
      name: "show",
      value: (errors.has('image_field')),
      expression: "errors.has('image_field')"
    }],
    staticClass: "error"
  }, [_s(errors.first('image_field'))])])])]), " ", _h('div', {
    staticClass: "rule",
    attrs: {
      "id": "rule-in"
    }
  }, [_m(49), " ", _m(50), " ", _m(51), " ", _h('div', [_h('form', {
    staticClass: "pure-form pure-form-stacked"
  }, [_h('input', {
    directives: [{
      name: "validate"
    }],
    class: {
      'pure-input-1': true, 'has-error': errors.has('in_field')
    },
    attrs: {
      "data-rules": "in:mystic,valor",
      "name": "in_field",
      "data-as": "field",
      "type": "text",
      "placeholder": "Your Pokemon Go Team"
    }
  }), " ", _h('span', {
    directives: [{
      name: "show",
      value: (errors.has('in_field')),
      expression: "errors.has('in_field')"
    }],
    staticClass: "error"
  }, [_s(errors.first('in_field'))])])])]), " ", _h('div', {
    staticClass: "rule",
    attrs: {
      "id": "rule-ip"
    }
  }, [_m(52), " ", _m(53), " ", _h('div', [_h('form', {
    staticClass: "pure-form pure-form-stacked"
  }, [_h('input', {
    directives: [{
      name: "validate"
    }],
    class: {
      'pure-input-1': true, 'has-error': errors.has('ip_field')
    },
    attrs: {
      "data-rules": "ip",
      "name": "ip_field",
      "data-as": "field",
      "type": "text",
      "placeholder": "Ipv4"
    }
  }), " ", _h('span', {
    directives: [{
      name: "show",
      value: (errors.has('ip_field')),
      expression: "errors.has('ip_field')"
    }],
    staticClass: "error"
  }, [_s(errors.first('ip_field'))])])])]), " ", _h('div', {
    staticClass: "rule",
    attrs: {
      "id": "rule-max"
    }
  }, [_m(54), " ", _m(55), " ", _m(56), " ", _h('div', [_h('form', {
    staticClass: "pure-form pure-form-stacked"
  }, [_h('input', {
    directives: [{
      name: "validate"
    }],
    class: {
      'pure-input-1': true, 'has-error': errors.has('max_field')
    },
    attrs: {
      "data-rules": "max:11",
      "name": "max_field",
      "data-as": "field",
      "type": "text",
      "placeholder": "Max Value: 11"
    }
  }), " ", _h('span', {
    directives: [{
      name: "show",
      value: (errors.has('max_field')),
      expression: "errors.has('max_field')"
    }],
    staticClass: "error"
  }, [_s(errors.first('max_field'))])])])]), " ", _h('div', {
    staticClass: "rule",
    attrs: {
      "id": "rule-mimes"
    }
  }, [_m(57), " ", _m(58), " ", _m(59), " ", _h('div', [_h('form', {
    staticClass: "pure-form pure-form-stacked"
  }, [_h('input', {
    directives: [{
      name: "validate"
    }],
    class: {
      'pure-input-1': true, 'has-error': errors.has('mimes_field')
    },
    attrs: {
      "data-rules": "mimes:image/*",
      "name": "mimes_field",
      "data-as": "image",
      "type": "file"
    }
  }), " ", _h('span', {
    directives: [{
      name: "show",
      value: (errors.has('mimes_field')),
      expression: "errors.has('mimes_field')"
    }],
    staticClass: "error"
  }, [_s(errors.first('mimes_field'))])])]), " ", _m(60)]), " ", _h('div', {
    staticClass: "rule",
    attrs: {
      "id": "rule-min"
    }
  }, [_m(61), " ", _m(62), " ", _m(63), " ", _h('div', [_h('form', {
    staticClass: "pure-form pure-form-stacked"
  }, [_h('input', {
    directives: [{
      name: "validate"
    }],
    class: {
      'pure-input-1': true, 'has-error': errors.has('min_field')
    },
    attrs: {
      "data-rules": "min:3",
      "name": "min_field",
      "data-as": "field",
      "type": "text",
      "placeholder": "Min Length: 3"
    }
  }), " ", _h('span', {
    directives: [{
      name: "show",
      value: (errors.has('min_field')),
      expression: "errors.has('min_field')"
    }],
    staticClass: "error"
  }, [_s(errors.first('min_field'))])])])]), " ", _h('div', {
    staticClass: "rule",
    attrs: {
      "id": "rule-not_in"
    }
  }, [_m(64), " ", _m(65), " ", _m(66), " ", _h('div', [_h('form', {
    staticClass: "pure-form pure-form-stacked"
  }, [_h('input', {
    directives: [{
      name: "validate"
    }],
    class: {
      'pure-input-1': true, 'has-error': errors.has('not_in_field')
    },
    attrs: {
      "data-rules": "not_in:valor,instinct",
      "name": "not_in_field",
      "data-as": "field",
      "type": "text",
      "placeholder": "Your Pokemon Go Team"
    }
  }), " ", _h('span', {
    directives: [{
      name: "show",
      value: (errors.has('not_in_field')),
      expression: "errors.has('not_in_field')"
    }],
    staticClass: "error"
  }, [_s(errors.first('not_in_field'))])])])]), " ", _h('div', {
    staticClass: "rule",
    attrs: {
      "id": "rule-numeric"
    }
  }, [_m(67), " ", _m(68), " ", _h('div', [_h('form', {
    staticClass: "pure-form pure-form-stacked"
  }, [_h('input', {
    directives: [{
      name: "validate"
    }],
    class: {
      'pure-input-1': true, 'has-error': errors.has('numeric_field')
    },
    attrs: {
      "data-rules": "numeric",
      "name": "numeric_field",
      "data-as": "field",
      "type": "text",
      "placeholder": "Numeric Value"
    }
  }), " ", _h('span', {
    directives: [{
      name: "show",
      value: (errors.has('numeric_field')),
      expression: "errors.has('numeric_field')"
    }],
    staticClass: "error"
  }, [_s(errors.first('numeric_field'))])])])]), " ", _h('div', {
    staticClass: "rule",
    attrs: {
      "id": "rule-regex"
    }
  }, [_m(69), " ", _m(70), " ", _m(71), " ", _h('div', [_h('form', {
    staticClass: "pure-form pure-form-stacked"
  }, [_h('input', {
    directives: [{
      name: "validate"
    }],
    class: {
      'pure-input-1': true, 'has-error': errors.has('regex_field')
    },
    attrs: {
      "data-rules": "regex:^([0-9]+)$",
      "name": "regex_field",
      "data-as": "field",
      "type": "text",
      "placeholder": "Enter Numeric Value"
    }
  }), " ", _h('span', {
    directives: [{
      name: "show",
      value: (errors.has('regex_field')),
      expression: "errors.has('regex_field')"
    }],
    staticClass: "error"
  }, [_s(errors.first('regex_field'))])])]), " ", _m(72)]), " ", _h('div', {
    staticClass: "rule",
    attrs: {
      "id": "rule-required"
    }
  }, [_m(73), " ", _m(74), " ", _h('div', [_h('form', {
    staticClass: "pure-form pure-form-stacked"
  }, [_h('input', {
    directives: [{
      name: "validate"
    }],
    class: {
      'pure-input-1': true, 'has-error': errors.has('required_field')
    },
    attrs: {
      "data-rules": "required",
      "name": "required_field",
      "data-as": "field",
      "type": "text",
      "placeholder": "Anything"
    }
  }), " ", _h('span', {
    directives: [{
      name: "show",
      value: (errors.has('required_field')),
      expression: "errors.has('required_field')"
    }],
    staticClass: "error"
  }, [_s(errors.first('required_field'))])])])]), " ", _h('div', {
    staticClass: "rule",
    attrs: {
      "id": "rule-size"
    }
  }, [_m(75), " ", _m(76), " ", _m(77), " ", _h('div', [_h('form', {
    staticClass: "pure-form pure-form-stacked"
  }, [_h('input', {
    directives: [{
      name: "validate"
    }],
    class: {
      'pure-input-1': true, 'has-error': errors.has('size_field')
    },
    attrs: {
      "data-rules": "size:10",
      "name": "size_field",
      "data-as": "file",
      "type": "file"
    }
  }), " ", _h('span', {
    directives: [{
      name: "show",
      value: (errors.has('size_field')),
      expression: "errors.has('size_field')"
    }],
    staticClass: "error"
  }, [_s(errors.first('size_field'))])])])]), " ", _h('div', {
    staticClass: "rule",
    attrs: {
      "id": "rule-url"
    }
  }, [_m(78), " ", _m(79), " ", _m(80), " ", _h('div', [_h('form', {
    staticClass: "pure-form pure-form-stacked"
  }, [_h('input', {
    directives: [{
      name: "validate"
    }],
    class: {
      'pure-input-1': true, 'has-error': errors.has('url_field')
    },
    attrs: {
      "data-rules": "url:google.com",
      "name": "url_field",
      "data-as": "file",
      "type": "text",
      "placeholder": "Enter a google url"
    }
  }), " ", _h('span', {
    directives: [{
      name: "show",
      value: (errors.has('url_field')),
      expression: "errors.has('url_field')"
    }],
    staticClass: "error"
  }, [_s(errors.first('url_field'))])])])])]), " ", _m(81), " ", _h('p', ["\n        You can easily add custom rules to the validators, but your custom validation rules must adhere to a contract, or certain structure:\n        ", _m(82), _m(83), " ", _m(84), "\n        This is the most basic custom validator form, it consists of only a function that returns either a Boolean or a promise. However it will have a default error message.\n        ", _h('code-block', {
    staticClass: "language-javascript"
  }, ["\n            const validator = (value, args) => {\n                // Return a Boolean or a Promise.\n            }\n        "]), " ", _m(85), " ", _h('code-block', {
    staticClass: "language-javascript"
  }, ["\n            const validator = {\n                getMessage(field, args) { // will be added to default English messages.\n                    // Returns a message.\n                },\n                validate(value, args) {\n                    // Returns a Boolean or a Promise.\n                }\n            };\n        "]), " ", _m(86), " ", _h('code-block', {
    staticClass: "language-javascript"
  }, ["\n            const validator = {\n                messages: {\n                    en: (field, args) => {\n                        // Returns a message.\n                    },\n                    cn: (field, args) => {\n                        // Returns a Chinese message.\n                    }\n                },\n                validate(value, args) {\n                    // Returns a Boolean or a Promise.\n                }\n            };\n        "]), "\n        This validator form must have a ", _m(87), " method, and either a ", _m(88), " method, or a ", _m(89), " object.\n        The only difference that the latter will allow you to add localized messages, the former only adds it to the English dictionary.\n\n        "]), _m(90), " ", _m(91), " ", _m(92), " ", _m(93), " ", _h('p', ["\n        After creating your validator, You can add it to the list of rules using ", _m(94), " method in the validator instance.\n        ", _h('code-block', {
    staticClass: "language-javascript"
  }, ["\n            import { Validator } from 'vee-validate';\n            // These are 'ES6' arrow functions.\n            Validator.extend('truthy', {\n                getMessage: field => 'The ' + field + ' value is not truthy.',\n                validate: value => !! value\n            });\n\n            let instance = new Validator({\n                trueField: 'truthy'\n            });\n\n            // Also there is an instance 'extend' method for convience.\n            instance.extend('falsy', (value) => ! value);\n            instance.attach('falseField', 'falsy');\n        "])]), _m(95), " ", _m(96), " ", _m(97), " ", _m(98), _m(99), " ", _h('code-block', {
    staticClass: "language-javascript"
  }, ["\n            import { Validator } from 'vee-validate';\n\n            const dictionary = {\n                en: {\n                    messages: {\n                        alpha: () => 'Some English Message'\n                    }\n                },\n                ar: {\n                    messages: {\n                        alpha: () => 'Some Arabic Message'\n                    }\n                }\n            };\n\n            Validator.updateDictionary(dictionary);\n\n            const validator = new Validator({ first_name: 'alpha' });\n            validator.setLocale('ar'); // now this validator will generate messages in arabic.\n        "]), " ", _h('p', ["\n            Usually you would stucture your language files for your app rather than adding hardcoded strings like the example above, check the ", _h('router-link', {
    staticClass: "link",
    attrs: {
      "to": {
        name: 'localization'
      }
    }
  }, ["localization guide"]), " for a better approach.\n        "]), " ", _m(100), " ", _m(101), " ", _m(102), " ", _h('p', ["\n        Like the custom messages, the validators share a dictionary containing the attribute names, for example if you want to use \"Email Address\" instead of \"email\" in your error messages, this can be easily acheived by including an ", _m(103), " object in the dictionary.\n        ", _m(104), _m(105), "Unlike messages, no attributes are included in the default dictionary.\n        ", _h('code-block', {
    staticClass: "language-javascript"
  }, ["\n            import { Validator } from 'vee-validate';\n\n            const dictionary = {\n                en: {\n                    attributes: {\n                        email: 'Email Address'\n                    }\n                },\n                ar: {\n                    attributes: {\n                        email: 'البريد الاليكتروني'\n                    }\n                }\n            };\n\n            Validator.updateDictionary(dictionary);\n        "])]), _h('div', {
    staticClass: "note"
  }, [_m(106), " If the attribute is not found for the current locale, it will fallback to the binding expression or the field name. If you use the ", _h('router-link', {
    attrs: {
      "to": {
        name: 'localization',
        hash: '#attributes-data-as'
      }
    }
  }, ["data-as"]), " attribute it will take precedence over the internal dictionary.\n        "]), " ", _m(107)])
}},staticRenderFns: [function (){with(this) {
  return _h('h2', {
    staticClass: "content-subhead",
    attrs: {
      "id": "syntax"
    }
  }, [_h('a', {
    attrs: {
      "href": "#syntax"
    }
  }, ["Syntax"])])
}},function (){with(this) {
  return _h('a', {
    staticClass: "link",
    attrs: {
      "href": "https://laravel.com/docs/5.2/validation"
    }
  }, ["Laravel validation syntax"])
}},function (){with(this) {
  return _h('code', {
    staticClass: "inline"
  }, ["|"])
}},function (){with(this) {
  return _h('div', {
    staticClass: "note"
  }, [_h('b', ["Note:"]), " The validators (rules) and their parameters are statically saved, in order to update some validation rule, you have to attach it again with the new parameters and it will be overwritten.\n        "])
}},function (){with(this) {
  return _h('p')
}},function (){with(this) {
  return _h('h2', {
    staticClass: "content-subhead",
    attrs: {
      "id": "available-rules"
    }
  }, [_h('a', {
    attrs: {
      "href": "#available-rules"
    }
  }, ["Available Rules"])])
}},function (){with(this) {
  return _h('p', [_h('code', {
    staticClass: "inline"
  }, ["vee-validate"]), " Comes out of the box with many validation rules, which are:\n    "])
}},function (){with(this) {
  return _h('div', {
    staticClass: "note"
  }, [_h('b', ["Note: "]), "Date validators always require the ", _h('code', ["date_format"]), " rule to be always present and must preceed them in the rules order. The date validators are not enabled by default, they require ", _h('a', {
    attrs: {
      "href": "http://momentjs.com"
    }
  }, ["momentjs"]), " in order to work.\n            If your setup contains momentjs globally, it will be installed automatically for all validator instances. otherwise you may want to pass the moment reference to ", _h('code', ["installDateTimeValidators(moment)"]), " which is available both statically and on instances.\n\n            Also note that the date validators always use the ", _h('a', {
    staticClass: "link",
    attrs: {
      "href": "http://momentjs.com/guides/#/parsing/strict-mode/"
    }
  }, ["'strict' moment parsing mode"]), ".\n        "])
}},function (){with(this) {
  return _h('br')
}},function (){with(this) {
  return _h('div', {
    staticClass: "note"
  }, [_h('b', ["Note: "]), "In the rule signature required parameters are enclosed within ", _h('code', ["{}"]), " like this: ", _h('code', ["{param}"]), ".\n            ", _h('br'), "\n            Optional parameters have a ", _h('code', ["?"]), " at the end: ", _h('code', ["{optional?}"]), ".\n            ", _h('br'), "\n            Lists are enclosed withn brackets ", _h('code', ["[]"]), ". ex: ", _h('code', ["[list]"]), ".\n        "])
}},function (){with(this) {
  return _h('b', {
    staticClass: "important"
  }, ["after:{target}"])
}},function (){with(this) {
  return _h('div', {
    staticClass: "description"
  }, ["\n                The field under validation must have a valid date and is after the date value in the target field.\n            "])
}},function (){with(this) {
  return _h('div', {
    staticClass: "args"
  }, [_h('code', {
    staticClass: "inline"
  }, ["args:"]), " ", _h('ul', [_h('li', [_h('code', {
    staticClass: "inline"
  }, ["target:"]), "The input name to be validated against. must have the same format as the date_format rule."])])])
}},function (){with(this) {
  return _h('b', {
    staticClass: "important"
  }, ["alpha"])
}},function (){with(this) {
  return _h('div', {
    staticClass: "description"
  }, ["\n                The field under validation may only contain alphabetic characters.\n            "])
}},function (){with(this) {
  return _h('b', {
    staticClass: "important"
  }, ["alpha_dash"])
}},function (){with(this) {
  return _h('div', {
    staticClass: "description"
  }, ["\n                The field under validation may contain alphabetic characters, numbers, dashes or underscores.\n            "])
}},function (){with(this) {
  return _h('b', {
    staticClass: "important"
  }, ["alpha_num"])
}},function (){with(this) {
  return _h('div', {
    staticClass: "description"
  }, ["\n                The field under validation may contain alphabetic characters or numbers.\n            "])
}},function (){with(this) {
  return _h('b', {
    staticClass: "important"
  }, ["before:{target}"])
}},function (){with(this) {
  return _h('div', {
    staticClass: "description"
  }, ["\n                The field under validation must have a valid date and is before the date value in the target field.\n            "])
}},function (){with(this) {
  return _h('b', {
    staticClass: "important"
  }, ["between:{min},{max}"])
}},function (){with(this) {
  return _h('div', {
    staticClass: "description"
  }, ["\n                The field under validation must have a numeric value bounded by a minimum value and a maximum value.\n            "])
}},function (){with(this) {
  return _h('div', {
    staticClass: "args"
  }, [_h('code', {
    staticClass: "inline"
  }, ["args:"]), " ", _h('ul', [_h('li', [_h('code', {
    staticClass: "inline"
  }, ["min:"]), " The minimum value."]), " ", _h('li', [_h('code', {
    staticClass: "inline"
  }, ["max:"]), " The maximum value."])])])
}},function (){with(this) {
  return _h('b', {
    staticClass: "important"
  }, ["confirmed:{target}"])
}},function (){with(this) {
  return _h('div', {
    staticClass: "description"
  }, ["\n                The field under validation must have the exact same value as the confirmation field.\n            "])
}},function (){with(this) {
  return _h('div', {
    staticClass: "args"
  }, [_h('code', {
    staticClass: "inline"
  }, ["args:"]), " ", _h('ul', [_h('li', [_h('code', {
    staticClass: "inline"
  }, ["target:"]), " The name of the confirmation field."])])])
}},function (){with(this) {
  return _h('b', {
    staticClass: "important"
  }, ["date_between:{min,max}"])
}},function (){with(this) {
  return _h('div', {
    staticClass: "description"
  }, ["\n                The field under validation must be a valid date between the two dates specified.\n            "])
}},function (){with(this) {
  return _h('div', {
    staticClass: "args"
  }, [_h('code', {
    staticClass: "inline"
  }, ["args:"]), " ", _h('ul', [_h('li', [_h('code', {
    staticClass: "inline"
  }, ["min:"]), "The minimum allowed value for date. must be in the same format as the date_format rule."]), " ", _h('li', [_h('code', {
    staticClass: "inline"
  }, ["max:"]), "The maximum allowed value for date. must be in the same format as the date_format rule."])])])
}},function (){with(this) {
  return _h('b', {
    staticClass: "important"
  }, ["date_format:{format}"])
}},function (){with(this) {
  return _h('div', {
    staticClass: "description"
  }, ["\n                The field under validation must be a valid date in the specified format. This rule must be present when using any date rules.\n            "])
}},function (){with(this) {
  return _h('div', {
    staticClass: "args"
  }, [_h('code', {
    staticClass: "inline"
  }, ["args:"]), " ", _h('ul', [_h('li', [_h('code', {
    staticClass: "inline"
  }, ["format:"]), " The date format. See ", _h('a', {
    attrs: {
      "href": "http://momentjs.com/docs/#/parsing/string-format/"
    }
  }, ["momentjs parsing."])])])])
}},function (){with(this) {
  return _h('b', {
    staticClass: "important"
  }, ["decimal:{decimals?}"])
}},function (){with(this) {
  return _h('div', {
    staticClass: "description"
  }, ["\n                The field under validation must be numeric and may contain the specified amount of decmial points.\n            "])
}},function (){with(this) {
  return _h('div', {
    staticClass: "args"
  }, [_h('code', {
    staticClass: "inline"
  }, ["args:"]), " ", _h('ul', [_h('li', [_h('code', {
    staticClass: "inline"
  }, ["decmials:"]), " The maximum allowed number of decimal point numbers. Not passing the decmials will accept numeric data which may or may not contain decimal point numbers."])])])
}},function (){with(this) {
  return _h('b', {
    staticClass: "important"
  }, ["digits:{length}"])
}},function (){with(this) {
  return _h('div', {
    staticClass: "description"
  }, ["\n                The field under validation must be numeric and have the specified number of digits.\n            "])
}},function (){with(this) {
  return _h('div', {
    staticClass: "args"
  }, [_h('code', {
    staticClass: "inline"
  }, ["args:"]), " ", _h('ul', [_h('li', [_h('code', {
    staticClass: "inline"
  }, ["length:"]), " The number of digits."])])])
}},function (){with(this) {
  return _h('b', {
    staticClass: "important"
  }, ["dimensions:{width},{height}"])
}},function (){with(this) {
  return _h('div', {
    staticClass: "description"
  }, ["\n                The file added to the field under validation must be an image (jpg,svg,jpeg,png,bmp,gif) have the exact specified dimensions.\n            "])
}},function (){with(this) {
  return _h('div', {
    staticClass: "args"
  }, [_h('code', {
    staticClass: "inline"
  }, ["args:"]), " ", _h('ul', [_h('li', [_h('code', {
    staticClass: "inline"
  }, ["width:"]), " The width of the image."]), " ", _h('li', [_h('code', {
    staticClass: "inline"
  }, ["height:"]), " The height of the image."])])])
}},function (){with(this) {
  return _h('b', {
    staticClass: "important"
  }, ["email"])
}},function (){with(this) {
  return _h('div', {
    staticClass: "description"
  }, ["\n                The field under validation must be a valid email.\n            "])
}},function (){with(this) {
  return _h('b', {
    staticClass: "important"
  }, ["ext:[extensions]"])
}},function (){with(this) {
  return _h('div', {
    staticClass: "description"
  }, ["\n                The file added the field under validation must have one of the extensions specified.\n            "])
}},function (){with(this) {
  return _h('div', {
    staticClass: "args"
  }, [_h('code', {
    staticClass: "inline"
  }, ["args:"]), " Comma separated list of extensions. ex: ", _h('code', {
    staticClass: "inline"
  }, ["ext:jpg,png,bmp,svg"]), ".\n            "])
}},function (){with(this) {
  return _h('b', {
    staticClass: "important"
  }, ["image"])
}},function (){with(this) {
  return _h('div', {
    staticClass: "description"
  }, ["\n                The file added the field under validation must have an image mime type (image/*).\n            "])
}},function (){with(this) {
  return _h('b', {
    staticClass: "important"
  }, ["in:[list]"])
}},function (){with(this) {
  return _h('div', {
    staticClass: "description"
  }, ["\n                The field under validation must have a value that is in the specified list.\n            "])
}},function (){with(this) {
  return _h('div', {
    staticClass: "args"
  }, [_h('code', {
    staticClass: "inline"
  }, ["args:"]), " Comma separated list of values. ex ", _h('code', {
    staticClass: "inline"
  }, ["in:1,2,3,4"])])
}},function (){with(this) {
  return _h('b', {
    staticClass: "important"
  }, ["ip"])
}},function (){with(this) {
  return _h('div', {
    staticClass: "description"
  }, ["\n                The field under validation must have a string that is a valid ipv4 value.\n            "])
}},function (){with(this) {
  return _h('b', {
    staticClass: "important"
  }, ["max:{length}"])
}},function (){with(this) {
  return _h('div', {
    staticClass: "description"
  }, ["\n                The field under validation length may not exceed the specified length.\n            "])
}},function (){with(this) {
  return _h('div', {
    staticClass: "args"
  }, [_h('code', {
    staticClass: "inline"
  }, ["args:"]), " ", _h('ul', [_h('li', [_h('code', {
    staticClass: "inline"
  }, ["length:"]), " A numeric value representing the maximum number of characters."])])])
}},function (){with(this) {
  return _h('b', {
    staticClass: "important"
  }, ["mimes:[list]"])
}},function (){with(this) {
  return _h('div', {
    staticClass: "description"
  }, ["\n                The file type added to the field under validation should have one of the specified mime types.\n            "])
}},function (){with(this) {
  return _h('div', {
    staticClass: "args"
  }, [_h('code', {
    staticClass: "inline"
  }, ["args:"]), " List of comma separated mime types. ", _h('code', {
    staticClass: "inline"
  }, ["mimes:image/jpeg|image/png"])])
}},function (){with(this) {
  return _h('div', {
    staticClass: "note"
  }, [_h('b', ["Note:"]), " You can use '*' to specify a wild card, something like ", _h('code', ["mimes:image/*"]), " will accept all image types.\n            "])
}},function (){with(this) {
  return _h('b', {
    staticClass: "important"
  }, ["min:{length}"])
}},function (){with(this) {
  return _h('div', {
    staticClass: "description"
  }, ["\n                The field under validation length should not be less than the specified length.\n            "])
}},function (){with(this) {
  return _h('div', {
    staticClass: "args"
  }, [_h('code', {
    staticClass: "inline"
  }, ["args:"]), " ", _h('ul', [_h('li', [_h('code', {
    staticClass: "inline"
  }, ["length:"]), " A numeric value representing the minimum number of characters."])])])
}},function (){with(this) {
  return _h('b', {
    staticClass: "important"
  }, ["not_in:[list]"])
}},function (){with(this) {
  return _h('div', {
    staticClass: "description"
  }, ["\n                The field under validation length should not have any value within the specified values.\n            "])
}},function (){with(this) {
  return _h('div', {
    staticClass: "args"
  }, [_h('code', {
    staticClass: "inline"
  }, ["args:"]), " Comma separated list of invalid values. ex: ", _h('code', {
    staticClass: "inline"
  }, ["not_in:1,2,3,4"])])
}},function (){with(this) {
  return _h('b', {
    staticClass: "important"
  }, ["numeric"])
}},function (){with(this) {
  return _h('div', {
    staticClass: "description"
  }, ["\n                The field under validation must only consist of numbers.\n            "])
}},function (){with(this) {
  return _h('b', {
    staticClass: "important"
  }, ["regex:{pattern}"])
}},function (){with(this) {
  return _h('div', {
    staticClass: "description"
  }, ["\n                The field under validation must match the specified regular expression.\n            "])
}},function (){with(this) {
  return _h('div', {
    staticClass: "args"
  }, [_h('code', {
    staticClass: "inline"
  }, ["args:"]), " ", _h('ul', [_h('li', [_h('code', {
    staticClass: "inline"
  }, ["pattern:"]), " A regular expression"]), " ", _h('li', [_h('code', {
    staticClass: "inline"
  }, ["flags:"]), " list of regular expression flags (optional)"])])])
}},function (){with(this) {
  return _h('div', {
    staticClass: "note"
  }, [_h('b', ["Note:"]), " Currently you should not use the pipe | within your regular expression as it will cause a conflict with how parsing validators work. A workaround is in progress.\n            "])
}},function (){with(this) {
  return _h('b', {
    staticClass: "important"
  }, ["required"])
}},function (){with(this) {
  return _h('div', {
    staticClass: "description"
  }, ["\n                The field under validation must have a non-empty value. by default all validators pass the validation if they have \"empty values\" unless they are required. those empty values are: empty string, undefined, null.\n            "])
}},function (){with(this) {
  return _h('b', {
    staticClass: "important"
  }, ["size:{kb}"])
}},function (){with(this) {
  return _h('div', {
    staticClass: "description"
  }, ["\n                The file size added to the field under validation must not exceed the specified size in kilobytes.\n            "])
}},function (){with(this) {
  return _h('div', {
    staticClass: "args"
  }, [_h('code', {
    staticClass: "inline"
  }, ["args:"]), " ", _h('ul', [_h('li', [_h('code', {
    staticClass: "inline"
  }, ["size:"]), " The maximum file size in kilobytes."])])])
}},function (){with(this) {
  return _h('b', {
    staticClass: "important"
  }, ["url:{domain?}"])
}},function (){with(this) {
  return _h('div', {
    staticClass: "description"
  }, ["\n                The field under validation must be a valid url. A domain may be optionally passed. supports subdomains.\n            "])
}},function (){with(this) {
  return _h('div', {
    staticClass: "args"
  }, [_h('code', {
    staticClass: "inline"
  }, ["args:"]), " ", _h('ul', [_h('li', [_h('code', {
    staticClass: "inline"
  }, ["domain:"]), " Adds another check if the url belongs to a specific domain. tlds should improve the accuracy."])])])
}},function (){with(this) {
  return _h('h2', {
    staticClass: "content-subhead",
    attrs: {
      "id": "custom-rules"
    }
  }, [_h('a', {
    attrs: {
      "href": "#custom-rules"
    }
  }, ["Custom Rules"])])
}},function (){with(this) {
  return _h('br')
}},function (){with(this) {
  return _h('br')
}},function (){with(this) {
  return _h('b', {
    staticClass: "important"
  }, ["Function Form:"])
}},function (){with(this) {
  return _h('b', {
    staticClass: "important"
  }, ["Object Form:"])
}},function (){with(this) {
  return _h('b', {
    staticClass: "important"
  }, ["Localized Object Form:"])
}},function (){with(this) {
  return _h('code', {
    staticClass: "inline"
  }, ["validate"])
}},function (){with(this) {
  return _h('code', {
    staticClass: "inline"
  }, ["getMessage"])
}},function (){with(this) {
  return _h('code', {
    staticClass: "inline"
  }, ["messages"])
}},function (){with(this) {
  return _h('div', {
    staticClass: "note"
  }, [_h('b', ["Note:"]), " Notice how the ", _h('code', ["messages"]), " methods gets passed the ", _h('code', ["field"]), " which is the name of the field under validation as a first parameter.\n            And how the ", _h('code', ["validate"]), " method gets passed the value as a first parameter.\n            And both receive the ", _h('code', ["args"]), " which are the parameters (arguments) that were configured with the validation rule.\n            for example look at the ", _h('a', {
    attrs: {
      "href": "https://github.com/logaretm/vee-validate/blob/master/src/rules/min.js"
    }
  }, ["actual implementation of the min rule"]), ".\n        "])
}},function (){with(this) {
  return _h('br')
}},function (){with(this) {
  return _h('div', {
    staticClass: "note"
  }, [_h('b', ["Note:"]), " As you can see a validation rule must implement one of the three forms discussed above.\n             Not doing so will throw a ", _h('code', ["ValidatorException"]), " with a suitable error message detailing what were you missing.\n        "])
}},function (){with(this) {
  return _h('p')
}},function (){with(this) {
  return _h('code', {
    staticClass: "inline"
  }, ["extend(name, validator)"])
}},function (){with(this) {
  return _h('div', {
    staticClass: "note"
  }, [_h('b', ["Note:"]), " Using any of the ", _h('code', ["extend"]), " either statically or on an instance will extend all validators with the new validation rule.\n             extending a new rule that have the same name as an existing rule will throw a ", _h('code', ["ValidatorException"]), " with an error message.\n        "])
}},function (){with(this) {
  return _h('p')
}},function (){with(this) {
  return _h('h2', {
    staticClass: "content-subhead",
    attrs: {
      "id": "custom-messages"
    }
  }, [_h('a', {
    attrs: {
      "href": "#custom-messages"
    }
  }, ["Custom Messages"])])
}},function (){with(this) {
  return _h('p', ["\n        Of course you might need to overwrite the error messages, or add new ones. The Validator class and its instances provide an ", _h('code', {
    staticClass: "inline"
  }, ["updateDictionary"]), " method.\n        which will merge the messages with the internal dictionary, overwriting any duplicates.\n        "])
}},function (){with(this) {
  return _h('div', {
    staticClass: "note"
  }, [_h('b', ["Note:"]), " Any merges will have an effect on all validator instances as the messages dictionary is shared.\n        "])
}},function (){with(this) {
  return _h('div', {
    staticClass: "note"
  }, [_h('b', ["Note:"]), " You must provide the messages in an object path like: ", _h('code', ["dictionary.locale.message"]), ".\n        "])
}},function (){with(this) {
  return _h('p')
}},function (){with(this) {
  return _h('h2', {
    staticClass: "content-subhead",
    attrs: {
      "id": "custom-attributes"
    }
  }, [_h('a', {
    attrs: {
      "href": "#custom-attributes"
    }
  }, ["Custom Attributes"])])
}},function (){with(this) {
  return _h('code', ["attributes"])
}},function (){with(this) {
  return _h('br')
}},function (){with(this) {
  return _h('br')
}},function (){with(this) {
  return _h('b', ["Note: "])
}},function (){with(this) {
  return _h('p')
}}]}
if (false) {
  module.hot.accept()
  if (module.hot.data) {
     require("vue-hot-reload-api").rerender("data-v-7", module.exports)
  }
}

/***/ },

/***/ 178:
/***/ function(module, exports, __webpack_require__) {

module.exports={render:function (){with(this) {
  return _h('code-example', [_h('form', {
    slot: "example",
    staticClass: "pure-form pure-form-stacked"
  }, [_h('div', {
    staticClass: "pure-u-1"
  }, [_h('label', {
    class: {
      'error': errors.has('email')
    },
    attrs: {
      "for": "email"
    }
  }, ["Email"]), " ", _h('input', {
    directives: [{
      name: "model",
      value: (email),
      expression: "email"
    }],
    class: {
      'pure-input-1': true, 'has-error': errors.has('email')
    },
    attrs: {
      "name": "email",
      "type": "text",
      "placeholder": "Email"
    },
    domProps: {
      "value": _s(email)
    },
    on: {
      "input": function($event) {
        if ($event.target.composing) return;
        email = $event.target.value
      }
    }
  }), " ", _h('span', {
    directives: [{
      name: "show",
      value: (errors.has('email')),
      expression: "errors.has('email')"
    }],
    staticClass: "error"
  }, ["Errors: " + _s(JSON.stringify(errors.collect('email')))])]), " ", _h('div', {
    staticClass: "pure-u-1"
  }, [_h('label', {
    class: {
      'error': errors.has('name')
    },
    attrs: {
      "for": "name"
    }
  }, ["Full Name"]), " ", _h('input', {
    directives: [{
      name: "model",
      value: (name),
      expression: "name"
    }],
    class: {
      'pure-input-1': true, 'has-error': errors.has('name')
    },
    attrs: {
      "name": "name",
      "type": "text",
      "placeholder": "Full Name"
    },
    domProps: {
      "value": _s(name)
    },
    on: {
      "input": function($event) {
        if ($event.target.composing) return;
        name = $event.target.value
      }
    }
  }), " ", _h('span', {
    directives: [{
      name: "show",
      value: (errors.has('name')),
      expression: "errors.has('name')"
    }],
    staticClass: "error"
  }, ["Errors: " + _s(JSON.stringify(errors.collect('name')))])]), " ", _h('button', {
    staticClass: "pure-button pure-button-primary",
    attrs: {
      "type": "button",
      "name": "button"
    },
    on: {
      "click": validateForm
    }
  }, ["Validate All"]), " ", _h('button', {
    staticClass: "pure-button button-error",
    attrs: {
      "type": "button",
      "name": "button"
    },
    on: {
      "click": clearErrors
    }
  }, ["Clear"])]), " ", _h('div', {
    slot: "code-html"
  }, ["\n        <div id=\"app\">\n            <form class=\"pure-form pure-form-stacked\">\n                <div class=\"pure-u-1\">\n                    <label :class=\"{'error': errors.has('email') }\" for=\"email\">Email</label>\n                    <input v-model=\"email\" :class=\"{'pure-input-1': true, 'has-error': errors.has('email') }\" name=\"email\" type=\"text\" placeholder=\"Email\">\n                    <span class=\"error\" v-show=\"errors.has('email')\">" + _s(JSON.stringify(errors.collect('email'))) + "</span>\n                </div>\n                <div class=\"pure-u-1\">\n                    <label :class=\"{'error': errors.has('name') }\" for=\"name\">Full Name</label>\n                    <input v-model=\"name\" :class=\"{'pure-input-1': true, 'has-error': errors.has('name') }\" name=\"name\" type=\"text\" placeholder=\"Full Name\">\n                    <span class=\"error\" v-show=\"errors.has('name')\">" + _s(JSON.stringify(errors.collect('name'))) + "</span>\n                </div>\n                <button class=\"pure-button pure-button-primary\" @click=\"validateForm\" type=\"button\" name=\"button\">Validate All</button>\n                <button class=\"pure-button button-error\" @click=\"clearErrors\" type=\"button\" name=\"button\">Clear</button>\n            </form>\n        </div>\n    "]), " ", _h('div', {
    slot: "code-js"
  }, ["\n        import Vue from 'vue';\n        import { Validator } from 'vee-validate';\n\n        new Vue({\n            el: '#app',\n            validator: null, // private reference\n            data() {\n                return {\n                    email: '',\n                    name: '',\n                    errors: []\n                }\n            },\n            watch: {\n                email(value) {\n                    this.validator.validate('email', value);\n                },\n                name(value) {\n                    this.validator.validate('name', value);\n                }\n            },\n            methods: {\n                validateForm() {\n                    this.validator.validateAll({\n                        email: this.email,\n                        name: this.name\n                    });\n                },\n                clearErrors() {\n                    this.errors.clear();\n                }\n            },\n            created() {\n                this.validator = new Validator({\n                    email: 'required|email',\n                    name: 'required|alpha|min:3'\n                });\n                this.$set('errors', this.validator.errorBag); // update the data.\n            }\n        });\n    "])])
}},staticRenderFns: []}
if (false) {
  module.hot.accept()
  if (module.hot.data) {
     require("vue-hot-reload-api").rerender("data-v-9", module.exports)
  }
}

/***/ }

});