webpackJsonp([4],{

/***/ 136:
/***/ function(module, exports, __webpack_require__) {

var __vue_exports__, __vue_options__

/* template */
var __vue_template__ = __webpack_require__(171)
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
if (__vue_options__.functional) {console.error("[vue-loader] Localization.vue: functional components are not supported and should be defined in plain js files using render functions.")}

module.exports = __vue_exports__


/***/ },

/***/ 171:
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
  }, ["@kayschima"])])])
}}]}
if (false) {
  module.hot.accept()
  if (module.hot.data) {
     require("vue-hot-reload-api").rerender("data-v-6", module.exports)
  }
}

/***/ }

});