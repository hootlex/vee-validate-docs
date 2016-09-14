webpackJsonp([0],{

/***/ 134:
/***/ function(module, exports, __webpack_require__) {

var __vue_exports__, __vue_options__

/* script */
__vue_exports__ = __webpack_require__(146)

/* template */
var __vue_template__ = __webpack_require__(172)
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
if (__vue_options__.functional) {console.error("[vue-loader] Examples.vue: functional components are not supported and should be defined in plain js files using render functions.")}

module.exports = __vue_exports__


/***/ },

/***/ 139:
/***/ function(module, exports) {

"use strict";
'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
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
            coupon: '',
            price: 100,
            discounted: false
        };
    },

    computed: {
        discountedPrice: function discountedPrice() {
            return this.discounted ? this.price - 0.2 * this.price : this.price;
        }
    },
    methods: {
        applyCoupon: function applyCoupon() {
            var _this = this;

            // Notice that it returns a promise instead of a boolean because
            // there is at least one rule that returns a promise.
            // all the result of all validations ran will be ANDed in the result param.
            // true => All Pass
            // false => At least one failed
            this.$validator.validate('coupon', this.coupon).then(function (result) {
                _this.discounted = result;
            });
        }
    },
    created: function created() {
        // Make sure you extend before any validation occurs
        // to avoid validating using non-existant rules.
        this.$validator.extend('verify_coupon', {
            getMessage: function getMessage(field) {
                return 'The ' + field + ' is not a valid coupon.';
            },
            // If you want to return a promise you will have to make sure it always resolves
            // to an object containing a 'valid' property which is a boolean state of the validation.
            validate: function validate(value) {
                return new Promise(function (resolve) {
                    var validCoupons = ['SUMMER2016', 'WINTER2016', 'FALL2016'
                    // I don't like spring :(
                    ];

                    // Simulate getting data from slow backend api.
                    setTimeout(function () {
                        resolve({
                            valid: !!~validCoupons.indexOf(value.toUpperCase())
                        });
                    }, 500);
                });
            }
        });

        this.$validator.attach('coupon', 'verify_coupon');
    }
};

/***/ },

/***/ 140:
/***/ function(module, exports) {

"use strict";
'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
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
            email: '',
            name: ''
        };
    }
};

/***/ },

/***/ 141:
/***/ function(module, exports) {

"use strict";
'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
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
            email: '',
            name: '',
            phone: '',
            url: ''
        };
    },

    methods: {
        validateBeforeSubmit: function validateBeforeSubmit(e) {
            this.$validator.validateAll();

            if (this.errors.any()) {
                e.preventDefault();
            }
        }
    }
};

/***/ },

/***/ 142:
/***/ function(module, exports, __webpack_require__) {

"use strict";
'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _ar = __webpack_require__(149);

var _ar2 = _interopRequireDefault(_ar);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = {
    data: function data() {
        return {
            email: '',
            phone: ''
        };
    },
    created: function created() {
        this.$validator.updateDictionary({
            ar: {
                messages: _ar2.default.default
            }
        });
        this.$validator.setLocale('ar');
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

/***/ },

/***/ 143:
/***/ function(module, exports) {

"use strict";
'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
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
            name: '',
            email: ''
        };
    },

    methods: {
        validateForm1: function validateForm1(e) {
            this.$validator.validateAll('form-1');
            if (this.errors.any('form-1')) {
                e.preventDefault();
                return;
            }

            e.preventDefault();
            alert('Form Submitted!');
        },
        validateForm2: function validateForm2(e) {
            this.$validator.validateAll('form-2');
            if (this.errors.any('form-2')) {
                e.preventDefault();
                return;
            }

            e.preventDefault();
            alert('Form Submitted!');
        }
    }
};

/***/ },

/***/ 146:
/***/ function(module, exports, __webpack_require__) {

"use strict";
'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _DelayExample = __webpack_require__(155);

var _DelayExample2 = _interopRequireDefault(_DelayExample);

var _LocaleExample = __webpack_require__(157);

var _LocaleExample2 = _interopRequireDefault(_LocaleExample);

var _RejectExample = __webpack_require__(158);

var _RejectExample2 = _interopRequireDefault(_RejectExample);

var _ScopeExample = __webpack_require__(159);

var _ScopeExample2 = _interopRequireDefault(_ScopeExample);

var _DataExample = __webpack_require__(154);

var _DataExample2 = _interopRequireDefault(_DataExample);

var _EventExample = __webpack_require__(156);

var _EventExample2 = _interopRequireDefault(_EventExample);

var _CouponExample = __webpack_require__(153);

var _CouponExample2 = _interopRequireDefault(_CouponExample);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = {
    components: {
        DelayExample: _DelayExample2.default,
        LocaleExample: _LocaleExample2.default,
        RejectExample: _RejectExample2.default,
        ScopeExample: _ScopeExample2.default,
        DataExample: _DataExample2.default,
        EventExample: _EventExample2.default,
        CouponExample: _CouponExample2.default
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

/***/ },

/***/ 149:
/***/ function(module, exports, __webpack_require__) {

"use strict";
var _slicedToArray = function () { function sliceIterator(arr, i) { var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"]) _i["return"](); } finally { if (_d) throw _e; } } return _arr; } return function (arr, i) { if (Array.isArray(arr)) { return arr; } else if (Symbol.iterator in Object(arr)) { return sliceIterator(arr, i); } else { throw new TypeError("Invalid attempt to destructure non-iterable instance"); } }; }();

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

/* harmony default export */ exports["default"] = _defineProperty({
    alpha_dash: function alpha_dash(field) {
        return field + ' قد يحتوي على حروف او الرموز - و _.';
    },
    alpha_num: function alpha_num(field) {
        return field + ' قد يحتوي فقط على حروف وارقام.';
    },
    alpha: function alpha(field) {
        return field + ' يجب ان يحتوي على حروف فقط.';
    },
    between: function between(field, _ref) {
        var _ref2 = _slicedToArray(_ref, 2);

        var min = _ref2[0];
        var max = _ref2[1];
        return 'قيمة ' + field + ' يجب ان تكون ما بين ' + min + ' و ' + max + '.';
    },
    confirmed: function confirmed(field, _ref3) {
        var _ref4 = _slicedToArray(_ref3, 1);

        var confirmedField = _ref4[0];
        return field + ' لا يماثل التأكيد.';
    },
    decimal: function decimal(field) {
        var _ref5 = arguments.length <= 1 || arguments[1] === undefined ? ['*'] : arguments[1];

        var _ref6 = _slicedToArray(_ref5, 1);

        var decimals = _ref6[0];
        return field + ' يجب ان يكون قيمة رقمية وقد يحتوي على ' + (decimals === '*' ? '' : decimals) + ' ارقام عشرية.';
    },
    digits: function digits(field, _ref7) {
        var _ref8 = _slicedToArray(_ref7, 1);

        var length = _ref8[0];
        return field + ' يجب ان تحتوي فقط على ارقام والا يزيد عددها عن ' + length + ' رقم.';
    },
    dimensions: function dimensions(field, _ref9) {
        var _ref10 = _slicedToArray(_ref9, 2);

        var width = _ref10[0];
        var height = _ref10[1];
        return field + ' يجب ان تكون بمقاس ' + width + ' بكسل في ' + height + ' بكسل.';
    },
    email: function email(field) {
        return field + ' يجب ان يكون بريدا اليكتروني صحيح.';
    },
    ext: function ext(field) {
        return 'نوع ملف ' + field + ' غير صحيح.';
    },
    image: function image(field) {
        return field + ' يجب ان تكون صورة.';
    },
    in: function _in(field) {
        return 'الحقل ' + field + ' يجب ان يكون قيمة صحيحة.';
    },
    ip: function ip(field) {
        return field + ' يجب ان يكون ip صحيح.';
    },
    max: function max(field, _ref11) {
        var _ref12 = _slicedToArray(_ref11, 1);

        var length = _ref12[0];
        return 'الحقل ' + field + ' يجب ان يحتوي على ' + length + ' حروف على الأكثر.';
    },
    mimes: function mimes(field) {
        return 'نوع ملف ' + field + ' غير صحيح.';
    },
    min: function min(field, _ref13) {
        var _ref14 = _slicedToArray(_ref13, 1);

        var length = _ref14[0];
        return 'الحقل ' + field + ' يجب ان يحتوي على ' + length + ' حروف على الأقل.';
    },
    not_in: function not_in(field) {
        return 'الحقل ' + field + ' غير صحيح.';
    },
    numeric: function numeric(field) {
        return field + ' يمكن ان يحتوي فقط على ارقام.';
    },
    regex: function regex(field) {
        return 'الحقل ' + field + ' غير صحيح.';
    },
    required: function required(field) {
        return field + ' مطلوب.';
    },
    size: function size(field, _ref15) {
        var _ref16 = _slicedToArray(_ref15, 1);

        var _size = _ref16[0];
        return field + ' يجب ان يكون اقل من ' + _size + ' كيلوبايت.';
    },
    url: function url(field) {
        return 'الحقل ' + field + ' يجب ان يكون رابطاً صحيحاً.';
    },
    date_format: function date_format(field, _ref17) {
        var _ref18 = _slicedToArray(_ref17, 1);

        var format = _ref18[0];
        return field + ' يجب ان يكون على هيئة ' + format + '.';
    },
    before: function before(field, _ref19) {
        var _ref20 = _slicedToArray(_ref19, 1);

        var target = _ref20[0];
        return field + ' يجب ان يكون قبل ' + target + '.';
    },
    after: function after(field, _ref21) {
        var _ref22 = _slicedToArray(_ref21, 1);

        var target = _ref22[0];
        return field + ' يجب ان يكون بعد ' + target + '.';
    }
}, 'between', function between(field, _ref23) {
    var _ref24 = _slicedToArray(_ref23, 2);

    var min = _ref24[0];
    var max = _ref24[1];
    return field + ' يجب ان يكون ما بين ' + min + ' و ' + max + '.';
});

/***/ },

/***/ 150:
/***/ function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(131)();
// imports


// module
exports.push([module.i, "\n.discounted {\n  text-decoration: line-through;\n}\n.SeemsGood {\n  color: #41b883;\n}\n", ""]);

// exports


/***/ },

/***/ 151:
/***/ function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(150);
if(typeof content === 'string') content = [[module.i, content, '']];
// add the styles to the DOM
var update = __webpack_require__(132)(content, {});
if(content.locals) module.exports = content.locals;
// Hot Module Replacement
if(false) {
	// When the styles change, update the <style> tags
	if(!content.locals) {
		module.hot.accept("!!./../../../node_modules/css-loader/index.js!./../../../node_modules/vue-loader/lib/style-rewriter.js?id=data-v-17!./../../../node_modules/sass-loader/index.js!./../../../node_modules/vue-loader/lib/selector.js?type=styles&index=0!./CouponExample.vue", function() {
			var newContent = require("!!./../../../node_modules/css-loader/index.js!./../../../node_modules/vue-loader/lib/style-rewriter.js?id=data-v-17!./../../../node_modules/sass-loader/index.js!./../../../node_modules/vue-loader/lib/selector.js?type=styles&index=0!./CouponExample.vue");
			if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];
			update(newContent);
		});
	}
	// When the module is disposed, remove the <style> tags
	module.hot.dispose(function() { update(); });
}

/***/ },

/***/ 153:
/***/ function(module, exports, __webpack_require__) {

var __vue_exports__, __vue_options__

/* styles */
__webpack_require__(151)

/* script */
__vue_exports__ = __webpack_require__(139)

/* template */
var __vue_template__ = __webpack_require__(168)
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
    hotAPI.createRecord("data-v-17", __vue_options__)
  } else {
    hotAPI.reload("data-v-17", __vue_options__)
  }
})()}
if (__vue_options__.functional) {console.error("[vue-loader] CouponExample.vue: functional components are not supported and should be defined in plain js files using render functions.")}

module.exports = __vue_exports__


/***/ },

/***/ 154:
/***/ function(module, exports, __webpack_require__) {

var __vue_exports__, __vue_options__

/* script */
__vue_exports__ = __webpack_require__(140)

/* template */
var __vue_template__ = __webpack_require__(166)
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
    hotAPI.createRecord("data-v-15", __vue_options__)
  } else {
    hotAPI.reload("data-v-15", __vue_options__)
  }
})()}
if (__vue_options__.functional) {console.error("[vue-loader] DataExample.vue: functional components are not supported and should be defined in plain js files using render functions.")}

module.exports = __vue_exports__


/***/ },

/***/ 155:
/***/ function(module, exports, __webpack_require__) {

var __vue_exports__, __vue_options__

/* template */
var __vue_template__ = __webpack_require__(162)
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
    hotAPI.createRecord("data-v-11", __vue_options__)
  } else {
    hotAPI.reload("data-v-11", __vue_options__)
  }
})()}
if (__vue_options__.functional) {console.error("[vue-loader] DelayExample.vue: functional components are not supported and should be defined in plain js files using render functions.")}

module.exports = __vue_exports__


/***/ },

/***/ 156:
/***/ function(module, exports, __webpack_require__) {

var __vue_exports__, __vue_options__

/* script */
__vue_exports__ = __webpack_require__(141)

/* template */
var __vue_template__ = __webpack_require__(167)
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
    hotAPI.createRecord("data-v-16", __vue_options__)
  } else {
    hotAPI.reload("data-v-16", __vue_options__)
  }
})()}
if (__vue_options__.functional) {console.error("[vue-loader] EventExample.vue: functional components are not supported and should be defined in plain js files using render functions.")}

module.exports = __vue_exports__


/***/ },

/***/ 157:
/***/ function(module, exports, __webpack_require__) {

var __vue_exports__, __vue_options__

/* script */
__vue_exports__ = __webpack_require__(142)

/* template */
var __vue_template__ = __webpack_require__(163)
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
    hotAPI.createRecord("data-v-12", __vue_options__)
  } else {
    hotAPI.reload("data-v-12", __vue_options__)
  }
})()}
if (__vue_options__.functional) {console.error("[vue-loader] LocaleExample.vue: functional components are not supported and should be defined in plain js files using render functions.")}

module.exports = __vue_exports__


/***/ },

/***/ 158:
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
    hotAPI.createRecord("data-v-13", __vue_options__)
  } else {
    hotAPI.reload("data-v-13", __vue_options__)
  }
})()}
if (__vue_options__.functional) {console.error("[vue-loader] RejectExample.vue: functional components are not supported and should be defined in plain js files using render functions.")}

module.exports = __vue_exports__


/***/ },

/***/ 159:
/***/ function(module, exports, __webpack_require__) {

var __vue_exports__, __vue_options__

/* script */
__vue_exports__ = __webpack_require__(143)

/* template */
var __vue_template__ = __webpack_require__(165)
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
    hotAPI.createRecord("data-v-14", __vue_options__)
  } else {
    hotAPI.reload("data-v-14", __vue_options__)
  }
})()}
if (__vue_options__.functional) {console.error("[vue-loader] ScopeExample.vue: functional components are not supported and should be defined in plain js files using render functions.")}

module.exports = __vue_exports__


/***/ },

/***/ 162:
/***/ function(module, exports, __webpack_require__) {

module.exports={render:function (){with(this) {
  return _h('code-example', [_h('form', {
    slot: "example",
    staticClass: "pure-form pure-form-stacked"
  }, [_m(0), " ", _h('div', {
    staticClass: "pure-u-1"
  }, [_h('label', {
    class: {
      'error': errors.has('email')
    },
    attrs: {
      "for": "email"
    }
  }, ["Email - Delay: 500ms"]), " ", _h('input', {
    directives: [{
      name: "validate"
    }],
    class: {
      'pure-input-1': true, 'has-error': errors.has('email')
    },
    attrs: {
      "data-rules": "required|email",
      "data-delay": "500",
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
  }, [_s(errors.first('email'))])]), " ", _h('div', {
    staticClass: "pure-u-1"
  }, [_h('label', {
    class: {
      'error': errors.has('name')
    },
    attrs: {
      "for": "name"
    }
  }, ["Name - Delay: 1s"]), " ", _h('input', {
    directives: [{
      name: "validate"
    }],
    class: {
      'pure-input-1': true, 'has-error': errors.has('name')
    },
    attrs: {
      "data-rules": "required|alpha|min:3",
      "data-delay": "1000",
      "name": "name",
      "type": "text",
      "placeholder": "Full Name"
    }
  }), " ", _h('span', {
    directives: [{
      name: "show",
      value: (errors.has('name')),
      expression: "errors.has('name')"
    }],
    staticClass: "error"
  }, [_s(errors.first('name'))])])]), " ", _h('div', {
    slot: "code-html"
  }, ["\n        <div id=\"app\">\n            <form class=\"pure-form pure-form-stacked\">\n                <legend>Basic Form</legend>\n                <div class=\"pure-u-1\">\n                    <label :class=\"{'error': errors.has('email') }\" for=\"email\">Email - Delay: 500ms</label>\n                    <input v-validate data-rules=\"required|email\" data-delay=\"500\" :class=\"{'pure-input-1': true, 'has-error': errors.has('email') }\" name=\"email\" type=\"email\" placeholder=\"Email\">\n                    <span class=\"error\" v-show=\"errors.has('email')\">" + _s("{" + "{ errors.first('email') }" + "}") + "</span>\n                </div>\n                <div class=\"pure-u-1\">\n                    <label :class=\"{'error': errors.has('name') }\" for=\"name\">Name - Delay: 1s</label>\n                    <input v-validate data-rules=\"required|alpha|min:3\" data-delay=\"1000\" :class=\"{'pure-input-1': true, 'has-error': errors.has('name') }\" name=\"name\" type=\"text\" placeholder=\"Full Name\">\n                    <span class=\"error\" v-show=\"errors.has('name')\">" + _s("{" + "{ errors.first('name') }" + "}") + "</span>\n                </div>\n            </form>\n        </div>\n    "]), " ", _h('div', {
    slot: "code-js"
  }, ["\n        import Vue from 'vue';\n        import VeeValidate from 'vee-validate';\n\n        Vue.use(VeeValidate);\n\n        new Vue({\n            el: '#app'\n        });\n    "])])
}},staticRenderFns: [function (){with(this) {
  return _h('legend', ["Debounced Form"])
}}]}
if (false) {
  module.hot.accept()
  if (module.hot.data) {
     require("vue-hot-reload-api").rerender("data-v-11", module.exports)
  }
}

/***/ },

/***/ 163:
/***/ function(module, exports, __webpack_require__) {

module.exports={render:function (){with(this) {
  return _h('code-example', [_h('form', {
    slot: "example",
    staticClass: "pure-form pure-form-stacked rtl"
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
      "data-as": "البريد",
      "name": "email",
      "type": "text"
    }
  }), " ", _h('span', {
    directives: [{
      name: "show",
      value: (errors.has('email')),
      expression: "errors.has('email')"
    }],
    staticClass: "error"
  }, [_s(errors.first('email'))])]), " ", _h('div', {
    staticClass: "pure-u-1"
  }, [_h('label', {
    class: {
      'error': errors.has('phone')
    },
    attrs: {
      "for": "phone"
    }
  }, ["Phone"]), " ", _h('input', {
    directives: [{
      name: "validate"
    }],
    class: {
      'pure-input-1': true, 'has-error': errors.has('phone')
    },
    attrs: {
      "data-rules": "required|numeric",
      "data-as": "رقم الهاتف",
      "name": "phone",
      "type": "text"
    }
  }), " ", _h('span', {
    directives: [{
      name: "show",
      value: (errors.has('phone')),
      expression: "errors.has('phone')"
    }],
    staticClass: "error"
  }, [_s(errors.first('phone'))])])]), " ", _h('div', {
    slot: "code-html"
  }, ["\n        <div id=\"app\">\n            <form class=\"pure-form pure-form-stacked rtl\">\n                <div class=\"pure-u-1\">\n                    <label :class=\"{'error': errors.has('email') }\" for=\"email\">Email</label>\n                    <input v-validate data-rules=\"required|email\" data-as=\"البريد\" :class=\"{'pure-input-1': true, 'has-error': errors.has('email') }\" name=\"email\" type=\"text\">\n                    <span class=\"error\" v-show=\"errors.has('email')\">" + _s("{" + "{ errors.first('email') }" + "}") + "</span>\n                </div>\n                <div class=\"pure-u-1\">\n                    <label :class=\"{'error': errors.has('phone') }\" for=\"phone\">Phone</label>\n                    <input v-validate data-rules=\"required|numeric\" data-as=\"رقم الهاتف\" :class=\"{'pure-input-1': true, 'has-error': errors.has('phone') }\" name=\"phone\" type=\"text\">\n                    <span class=\"error\" v-show=\"errors.has('phone')\">" + _s("{" + "{ errors.first('phone') }" + "}") + "</span>\n                </div>\n            </form>\n        </div>\n    "]), " ", _h('div', {
    slot: "code-js"
  }, ["\n        import messages from './locale/ar';\n        import Vue from 'vue';\n        import VeeValidate, { Validator } from 'vee-validate';\n        Vue.use(VeeValidate);\n\n        // Merge dictionary messages.\n        Validator.updateDictionary({\n            ar: {\n                messages\n            }\n        });\n\n        new Vue({\n            el: 'body',\n            data: {\n                phone: '',\n                email: ''\n            },\n            created() {\n                this.$validator.setLocale('ar'); // Switch locale for this instance.\n            }\n        });\n    "])])
}},staticRenderFns: []}
if (false) {
  module.hot.accept()
  if (module.hot.data) {
     require("vue-hot-reload-api").rerender("data-v-12", module.exports)
  }
}

/***/ },

/***/ 164:
/***/ function(module, exports, __webpack_require__) {

module.exports={render:function (){with(this) {
  return _h('code-example', [_h('form', {
    slot: "example",
    staticClass: "pure-form pure-form-stacked"
  }, [_m(0), " ", _h('div', {
    staticClass: "pure-u-1"
  }, [_h('label', {
    class: {
      'error': errors.has('image')
    },
    attrs: {
      "for": "image"
    }
  }, ["Unrejected Image"]), " ", _h('input', {
    directives: [{
      name: "validate"
    }],
    class: {
      'pure-input-1': true, 'has-error': errors.has('image')
    },
    attrs: {
      "data-rules": "mimes:image/*",
      "name": "image",
      "type": "file"
    }
  }), " ", _h('span', {
    directives: [{
      name: "show",
      value: (errors.has('image')),
      expression: "errors.has('image')"
    }],
    staticClass: "error"
  }, [_s(errors.first('image'))])]), " ", _h('div', {
    staticClass: "pure-u-1"
  }, [_h('label', {
    class: {
      'error': errors.has('file')
    },
    attrs: {
      "for": "file"
    }
  }, ["Rejected Image"]), " ", _h('input', {
    directives: [{
      name: "validate",
      modifiers: {
        "reject": true
      }
    }],
    class: {
      'pure-input-1': true, 'has-error': errors.has('file')
    },
    attrs: {
      "data-rules": "mimes:image/*",
      "name": "file",
      "type": "file"
    }
  }), " ", _h('span', {
    directives: [{
      name: "show",
      value: (errors.has('file')),
      expression: "errors.has('file')"
    }],
    staticClass: "error"
  }, [_s(errors.first('file'))])])]), " ", _h('div', {
    slot: "code-html"
  }, ["\n        <div id=\"app\">\n            <form class=\"pure-form pure-form-stacked\">\n                <legend>File Upload</legend>\n                <div class=\"pure-u-1\">\n                    <label :class=\"{'error': errors.has('image') }\" for=\"image\">Unrejected Image</label>\n                    <input v-validate data-rules=\"mimes:image/*\" :class=\"{'pure-input-1': true, 'has-error': errors.has('image') }\" name=\"image\" type=\"file\">\n                    <span class=\"error\" v-show=\"errors.has('image')\">" + _s(errors.first('image')) + "</span>\n                </div>\n                <div class=\"pure-u-1\">\n                    <label :class=\"{'error': errors.has('file') }\" for=\"file\">Rejected Image</label>\n                    <input  v-validate.reject data-rules=\"mimes:image/*\" :class=\"{'pure-input-1': true, 'has-error': errors.has('file') }\" name=\"file\" type=\"file\">\n                    <span class=\"error\" v-show=\"errors.has('file')\">" + _s(errors.first('file')) + "</span>\n                </div>\n            </form>\n        </div>\n    "]), " ", _h('div', {
    slot: "code-js"
  }, ["\n        import Vue from 'vue';\n        import VeeValidate from 'vee-validate';\n\n        Vue.use(VeeValidate);\n\n        new Vue({\n            el: '#app'\n        });\n    "])])
}},staticRenderFns: [function (){with(this) {
  return _h('legend', ["File Upload"])
}}]}
if (false) {
  module.hot.accept()
  if (module.hot.data) {
     require("vue-hot-reload-api").rerender("data-v-13", module.exports)
  }
}

/***/ },

/***/ 165:
/***/ function(module, exports, __webpack_require__) {

module.exports={render:function (){with(this) {
  return _h('code-example', [_h('div', {
    slot: "example"
  }, [_h('form', {
    staticClass: "pure-form pure-form-stacked",
    on: {
      "submit": validateForm1
    }
  }, [_m(0), " ", _h('div', {
    staticClass: "pure-u-1"
  }, [_h('label', {
    class: {
      'error': errors.has('name', 'form-1')
    },
    attrs: {
      "for": "name"
    }
  }, ["Name"]), " ", _h('input', {
    directives: [{
      name: "validate",
      value: (name),
      expression: "name"
    }, {
      name: "model",
      value: (name),
      expression: "name"
    }],
    class: {
      'pure-input-1': true, 'has-error': errors.has('name', 'form-1')
    },
    attrs: {
      "data-rules": "required|alpha",
      "data-scope": "form-1",
      "name": "name",
      "type": "text"
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
      value: (errors.has('name', 'form-1')),
      expression: "errors.has('name', 'form-1')"
    }],
    staticClass: "error"
  }, [_s(errors.first('name', 'form-1'))])]), " ", _h('div', {
    staticClass: "pure-u-1"
  }, [_h('label', {
    class: {
      'error': errors.has('email', 'form-1')
    },
    attrs: {
      "for": "email"
    }
  }, ["Email"]), " ", _h('input', {
    directives: [{
      name: "validate",
      value: (email),
      expression: "email"
    }, {
      name: "model",
      value: (email),
      expression: "email"
    }],
    class: {
      'pure-input-1': true, 'has-error': errors.has('email', 'form-1')
    },
    attrs: {
      "data-rules": "required|email",
      "data-scope": "form-1",
      "name": "email",
      "type": "text"
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
      value: (errors.has('email', 'form-1')),
      expression: "errors.has('email', 'form-1')"
    }],
    staticClass: "error"
  }, [_s(errors.first('email', 'form-1'))])]), " ", _m(1)]), " ", _h('form', {
    staticClass: "pure-form pure-form-stacked",
    attrs: {
      "data-scope": "form-2"
    },
    on: {
      "submit": validateForm2
    }
  }, [_m(2), " ", _h('div', {
    staticClass: "pure-u-1"
  }, [_h('label', {
    class: {
      'error': errors.has('email', 'form-2')
    },
    attrs: {
      "for": "email"
    }
  }, ["Email"]), " ", _h('input', {
    directives: [{
      name: "validate"
    }],
    class: {
      'pure-input-1': true, 'has-error': errors.has('email', 'form-2')
    },
    attrs: {
      "data-rules": "required|email",
      "name": "email",
      "type": "text"
    }
  }), " ", _h('span', {
    directives: [{
      name: "show",
      value: (errors.has('email', 'form-2')),
      expression: "errors.has('email', 'form-2')"
    }],
    staticClass: "error"
  }, [_s(errors.first('email', 'form-2'))])]), " ", _h('div', {
    staticClass: "pure-u-1"
  }, [_h('label', {
    class: {
      'error': errors.has('email', 'form-2')
    },
    attrs: {
      "for": "email"
    }
  }, ["Password"]), " ", _h('input', {
    directives: [{
      name: "validate"
    }],
    class: {
      'pure-input-1': true, 'has-error': errors.has('email', 'form-2')
    },
    attrs: {
      "data-rules": "required",
      "name": "password",
      "type": "password"
    }
  })]), " ", _m(3)])]), " ", _h('div', {
    slot: "code-html"
  }, ["\n        <form @submit=\"validateForm1\" class=\"pure-form pure-form-stacked\">\n            <legend>Form 1</legend>\n            <div class=\"pure-u-1\">\n                <label :class=\"{'error': errors.has('name', 'form-1') }\" for=\"name\">Name</label>\n                <input v-validate=\"name\" v-model=\"name\" data-rules=\"required|alpha\" data-scope=\"form-1\" :class=\"{'pure-input-1': true, 'has-error': errors.has('name', 'form-1') }\" name=\"name\" type=\"text\">\n                <span class=\"error\" v-show=\"errors.has('name', 'form-1')\">" + _s(errors.first('name', 'form-1')) + "</span>\n            </div>\n            <div class=\"pure-u-1\">\n                <label :class=\"{'error': errors.has('email', 'form-1') }\" for=\"email\">Email</label>\n                <input v-validate=\"email\" v-model=\"email\" data-rules=\"required|email\" data-scope=\"form-1\" :class=\"{'pure-input-1': true, 'has-error': errors.has('email', 'form-1') }\" name=\"email\" type=\"text\">\n                <span class=\"error\" v-show=\"errors.has('email', 'form-1')\">" + _s(errors.first('email', 'form-1')) + "</span>\n            </div>\n\n            <button class=\"pure-button pure-button-primary\" type=\"submit\" name=\"button\">Sign up</button>\n        </form>\n\n        <form @submit=\"validateForm2\" class=\"pure-form pure-form-stacked\" data-scope=\"form-2\">\n            <legend>Form 2</legend>\n            <div class=\"pure-u-1\">\n                <label :class=\"{'error': errors.has('email', 'form-2') }\" for=\"email\">Email</label>\n                <input v-validate data-rules=\"required|email\" :class=\"{'pure-input-1': true, 'has-error': errors.has('email', 'form-2') }\" name=\"email\" type=\"text\">\n                <span class=\"error\" v-show=\"errors.has('email', 'form-2')\">" + _s(errors.first('email', 'form-2')) + "</span>\n            </div>\n\n            <div class=\"pure-u-1\">\n                <label :class=\"{'error': errors.has('email', 'form-2') }\" for=\"email\">Password</label>\n                <input v-validate data-rules=\"required\" :class=\"{'pure-input-1': true, 'has-error': errors.has('email', 'form-2') }\" name=\"password\" type=\"password\">\n            </div>\n\n            <button class=\"pure-button pure-button-primary\" type=\"submit\" name=\"button\">Log in</button>\n        </form>\n    "]), " ", _h('div', {
    slot: "code-js"
  }, ["\n        new Vue({\n           el: '#app',\n           data: {\n               name: '',\n               email: ''\n           },\n           methods: {\n               validateForm1(e) {\n                   this.$validator.validateAll('form-1');\n                   if (this.errors.any('form-1')) {\n                       e.preventDefault();\n                       return;\n                   }\n\n                   e.preventDefault();\n                   alert('Form Submitted!');\n               },\n               validateForm2(e) {\n                   this.$validator.validateAll('form-2');\n                   if (this.errors.any('form-2')) {\n                       e.preventDefault();\n                       return;\n                   }\n\n                   e.preventDefault();\n                   alert('Form Submitted!');\n               }\n           }\n       });\n    "])])
}},staticRenderFns: [function (){with(this) {
  return _h('legend', ["Form 1"])
}},function (){with(this) {
  return _h('button', {
    staticClass: "pure-button pure-button-primary",
    attrs: {
      "type": "submit",
      "name": "button"
    }
  }, ["Sign up"])
}},function (){with(this) {
  return _h('legend', ["Form 2"])
}},function (){with(this) {
  return _h('button', {
    staticClass: "pure-button pure-button-primary",
    attrs: {
      "type": "submit",
      "name": "button"
    }
  }, ["Log in"])
}}]}
if (false) {
  module.hot.accept()
  if (module.hot.data) {
     require("vue-hot-reload-api").rerender("data-v-14", module.exports)
  }
}

/***/ },

/***/ 166:
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
    }, {
      name: "validate",
      value: (email),
      expression: "email"
    }],
    class: {
      'pure-input-1': true, 'has-error': errors.has('email')
    },
    attrs: {
      "data-rules": "required|email",
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
  }, [_s(errors.first('email'))])]), " ", _h('div', {
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
    }, {
      name: "validate",
      value: (name),
      expression: "name",
      modifiers: {
        "initial": true
      }
    }],
    class: {
      'pure-input-1': true, 'has-error': errors.has('name')
    },
    attrs: {
      "data-rules": "required|alpha",
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
  }, [_s(errors.first('name'))])])]), " ", _h('div', {
    slot: "code-html"
  }, ["\n        <div id=\"app\">\n            <form class=\"pure-form pure-form-stacked\">\n                <div class=\"pure-u-1\">\n                    <label :class=\"{'error': errors.has('email') }\" for=\"email\">Email</label>\n                    <input v-model=\"email\" v-validate=\"email\" data-rules=\"required|email\" :class=\"{'pure-input-1': true, 'has-error': errors.has('email') }\" type=\"text\" placeholder=\"Email\">\n                    <span class=\"error\" v-show=\"errors.has('email')\">" + _s("{" + "{ errors.first('email') }" + "}") + "</span>\n                </div>\n                <div class=\"pure-u-1\">\n                    <label :class=\"{'error': errors.has('name') }\" for=\"name\">Full Name</label>\n                    <input v-model=\"name\" v-validate.initial=\"name\" data-rules=\"required|alpha\" :class=\"{'pure-input-1': true, 'has-error': errors.has('name') }\" type=\"text\" placeholder=\"Full Name\">\n                    <span class=\"error\" v-show=\"errors.has('name')\">" + _s("{" + "{ errors.first('name') }" + "}") + "</span>\n                </div>\n            </form>\n        </div>\n    "]), " ", _h('div', {
    slot: "code-js"
  }, ["\n        import Vue from 'vue';\n        import VeeValidate from 'vee-validate';\n\n        Vue.use(VeeValidate);\n\n        new Vue({\n            el: '#app',\n            data: {\n                email: '',\n                name: ''\n            }\n        });\n    "])])
}},staticRenderFns: []}
if (false) {
  module.hot.accept()
  if (module.hot.data) {
     require("vue-hot-reload-api").rerender("data-v-15", module.exports)
  }
}

/***/ },

/***/ 167:
/***/ function(module, exports, __webpack_require__) {

module.exports={render:function (){with(this) {
  return _h('code-example', [_h('form', {
    slot: "example",
    staticClass: "pure-form pure-form-stacked",
    on: {
      "submit": validateBeforeSubmit
    }
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
    }, {
      name: "validate",
      value: (email),
      expression: "email",
      modifiers: {
        "initial": true
      }
    }],
    class: {
      'pure-input-1': true, 'has-error': errors.has('email')
    },
    attrs: {
      "data-rules": "required|email",
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
  }, [_s(errors.first('email'))])]), " ", _h('div', {
    staticClass: "pure-u-1"
  }, [_h('label', {
    class: {
      'error': errors.has('name')
    },
    attrs: {
      "for": "name"
    }
  }, ["Name"]), " ", _h('input', {
    directives: [{
      name: "model",
      value: (name),
      expression: "name"
    }, {
      name: "validate",
      value: (name),
      expression: "name",
      modifiers: {
        "initial": true
      }
    }],
    class: {
      'pure-input-1': true, 'has-error': errors.has('name')
    },
    attrs: {
      "data-rules": "required|alpha|min:3",
      "type": "text",
      "placeholder": "Name"
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
  }, [_s(errors.first('name'))])]), " ", _h('div', {
    staticClass: "pure-u-1"
  }, [_h('label', {
    class: {
      'error': errors.has('phone')
    },
    attrs: {
      "for": "phone"
    }
  }, ["Phone Number"]), " ", _h('input', {
    directives: [{
      name: "model",
      value: (phone),
      expression: "phone"
    }, {
      name: "validate",
      value: (phone),
      expression: "phone",
      modifiers: {
        "initial": true
      }
    }],
    class: {
      'pure-input-1': true, 'has-error': errors.has('phone')
    },
    attrs: {
      "data-rules": "required|numeric",
      "type": "text",
      "placeholder": "Phone"
    },
    domProps: {
      "value": _s(phone)
    },
    on: {
      "input": function($event) {
        if ($event.target.composing) return;
        phone = $event.target.value
      }
    }
  }), " ", _h('span', {
    directives: [{
      name: "show",
      value: (errors.has('phone')),
      expression: "errors.has('phone')"
    }],
    staticClass: "error"
  }, [_s(errors.first('phone'))])]), " ", _h('div', {
    staticClass: "pure-u-1"
  }, [_h('label', {
    class: {
      'error': errors.has('url')
    },
    attrs: {
      "for": "url"
    }
  }, ["Website"]), " ", _h('input', {
    directives: [{
      name: "model",
      value: (url),
      expression: "url"
    }, {
      name: "validate",
      value: (url),
      expression: "url",
      modifiers: {
        "initial": true
      }
    }],
    class: {
      'pure-input-1': true, 'has-error': errors.has('url')
    },
    attrs: {
      "data-rules": "required|url",
      "type": "text",
      "placeholder": "Website"
    },
    domProps: {
      "value": _s(url)
    },
    on: {
      "input": function($event) {
        if ($event.target.composing) return;
        url = $event.target.value
      }
    }
  }), " ", _h('span', {
    directives: [{
      name: "show",
      value: (errors.has('url')),
      expression: "errors.has('url')"
    }],
    staticClass: "error"
  }, [_s(errors.first('url'))])]), " ", _m(0)]), " ", _h('div', {
    slot: "code-html"
  }, ["\n        <div id=\"app\">\n            <form @submit=\"validateBeforeSubmit\" class=\"pure-form pure-form-stacked\">\n                <div class=\"pure-u-1\">\n                    <label :class=\"{'error': errors.has('email') }\" for=\"email\">Email</label>\n                    <input v-model=\"email\" v-validate.initial=\"email\" data-rules=\"required|email\" :class=\"{'pure-input-1': true, 'has-error': errors.has('email') }\" type=\"text\" placeholder=\"Email\">\n                    <span class=\"error\" v-show=\"errors.has('email')\">" + _s("{" + "{ errors.first('email') }" + "}") + "</span>\n                </div>\n                <div class=\"pure-u-1\">\n                    <label :class=\"{'error': errors.has('name') }\" for=\"name\">Name</label>\n                    <input v-model=\"name\" v-validate.initial=\"name\" data-rules=\"required|alpha|min:3\" :class=\"{'pure-input-1': true, 'has-error': errors.has('name') }\" type=\"text\" placeholder=\"Full Name\">\n                    <span class=\"error\" v-show=\"errors.has('name')\">" + _s("{" + "{ errors.first('name') }" + "}") + "</span>\n                </div>\n                <div class=\"pure-u-1\">\n                    <label :class=\"{'error': errors.has('phone') }\" for=\"phone\">Phone Number</label>\n                    <input v-model=\"phone\" v-validate.initial=\"phone\" data-rules=\"required|numeric\" :class=\"{'pure-input-1': true, 'has-error': errors.has('phone') }\" type=\"text\" placeholder=\"Phone\">\n                    <span class=\"error\" v-show=\"errors.has('phone')\">" + _s("{" + "{ errors.first('phone') }" + "}") + "</span>\n                </div>\n                <div class=\"pure-u-1\">\n                    <label :class=\"{'error': errors.has('url') }\" for=\"url\">Website</label>\n                    <input v-model=\"url\" v-validate.initial=\"url\" data-rules=\"required|url\" :class=\"{'pure-input-1': true, 'has-error': errors.has('url') }\" type=\"text\" placeholder=\"Website\">\n                    <span class=\"error\" v-show=\"errors.has('url')\">" + _s("{" + "{ errors.first('url') }" + "}") + "</span>\n                </div>\n\n                <input class=\"pure-button pure-button-primary\" type=\"submit\">\n            </form>\n        </div>\n    "]), " ", _h('div', {
    slot: "code-js"
  }, ["\n        import Vue from 'vue';\n        import Vee from 'vee-validate';\n\n        new Vue({\n            el: '#app',\n            data() {\n                return {\n                    email: '',\n                    name: '',\n                    phone: '',\n                    url: '',\n                };\n            },\n            methods: {\n                validateBeforeSubmit(e) {\n                    // Note that validateAll here is missing the values parameter, which tells the validator\n                    // to trigger validation for attached inputs.\n                    this.$validator.validateAll();\n\n                    if (this.errors.any()) {\n                        e.preventDefault();\n                    }\n                }\n            }\n        });\n    "])])
}},staticRenderFns: [function (){with(this) {
  return _h('input', {
    staticClass: "pure-button pure-button-primary",
    attrs: {
      "type": "submit"
    }
  })
}}]}
if (false) {
  module.hot.accept()
  if (module.hot.data) {
     require("vue-hot-reload-api").rerender("data-v-16", module.exports)
  }
}

/***/ },

/***/ 168:
/***/ function(module, exports, __webpack_require__) {

module.exports={render:function (){with(this) {
  return _h('code-example', [_h('div', {
    slot: "example"
  }, [_h('div', [_h('span', {
    class: {
      'discounted': discounted
    }
  }, ["Price: " + _s(price) + "$"]), " ", _h('span', {
    directives: [{
      name: "show",
      value: (discounted),
      expression: "discounted"
    }],
    staticClass: "SeemsGood"
  }, [_s(discountedPrice) + "$"])]), " ", _h('form', {
    staticClass: "pure-form pure-form-stacked",
    on: {
      "submit": function($event) {
        $event.preventDefault();
        applyCoupon($event)
      }
    }
  }, [_h('div', {
    staticClass: "pure-u-1"
  }, [_h('label', {
    class: {
      'error': errors.has('coupon')
    },
    attrs: {
      "for": "email"
    }
  }, ["Coupon"]), " ", _h('input', {
    directives: [{
      name: "model",
      value: (coupon),
      expression: "coupon"
    }],
    class: {
      'pure-input-1': true, 'has-error': errors.has('coupon')
    },
    attrs: {
      "type": "text",
      "placeholder": "Enter Your Coupon"
    },
    domProps: {
      "value": _s(coupon)
    },
    on: {
      "input": function($event) {
        if ($event.target.composing) return;
        coupon = $event.target.value
      }
    }
  }), " ", _h('span', {
    directives: [{
      name: "show",
      value: (errors.has('coupon')),
      expression: "errors.has('coupon')"
    }],
    staticClass: "error"
  }, [_s(errors.first('coupon'))])]), " ", _m(0)])]), " ", _h('div', {
    slot: "code-html"
  }, ["\n        <div>\n            <div>\n                <span :class=\"{ 'discounted': discounted }\">Price: " + _s(price) + "$</span>\n                <span v-show=\"discounted\" class=\"SeemsGood\">" + _s(discountedPrice) + "$</span>\n            </div>\n            <form @submit.prevent=\"applyCoupon\" class=\"pure-form pure-form-stacked\">\n                <div class=\"pure-u-1\">\n                    <label :class=\"{'error': errors.has('coupon') }\" for=\"email\">Coupon</label>\n                    <input v-model=\"coupon\" :class=\"{'pure-input-1': true, 'has-error': errors.has('coupon') }\" type=\"text\" placeholder=\"Enter Your Coupon\">\n                    <span class=\"error\" v-show=\"errors.has('coupon')\">" + _s(errors.first('coupon')) + "</span>\n                </div>\n\n                <button type=\"submit\" class=\"pure-button pure-button-primary\" name=\"button\">Apply</button>\n            </form>\n        </div>\n    "]), " ", _h('div', {
    slot: "code-js"
  }, ["\n        import Vue from 'vue';\n        import VeeValidate from 'vee-validate';\n\n        Vue.use(VeeValidate);\n        \n        new Vue ({\n            el: '#app',\n            data() {\n                return {\n                    coupon: '',\n                    price: 100,\n                    discounted: false\n                }\n            },\n            computed: {\n                discountedPrice() {\n                    return this.discounted ? this.price - (0.2 * this.price) : this.price;\n                }\n            },\n            methods: {\n                applyCoupon() {\n                    // Notice that it returns a promise instead of a boolean because\n                    // there is at least one rule that returns a promise.\n                    // all the result of all validations ran will be ANDed in the result param.\n                    // true => All Pass\n                    // false => At least one failed\n                    this.$validator.validate('coupon', this.coupon).then(result => {\n                        this.discounted = result;\n                    });\n                }\n            },\n            created() {\n                // Make sure you extend before any validation occurs\n                // to avoid validating using non-existant rules.\n                this.$validator.extend('verify_coupon', {\n                    getMessage: (field) => `The ${field} is not a valid coupon.`,\n                    // If you want to return a promise you will have to make sure it always resolves\n                    // to an object containing a 'valid' property which is a boolean state of the validation.\n                    validate: (value) => new Promise(resolve => {\n                        const validCoupons = [\n                            'SUMMER2016',\n                            'WINTER2016',\n                            'FALL2016'\n                            // I don't like spring :(\n                        ];\n\n                        // Simulate getting data from slow backend api.\n                        setTimeout(() => {\n                            resolve({\n                                valid: !! ~validCoupons.indexOf(value.toUpperCase())\n                            });\n                        }, 500);\n                    })\n                });\n\n                this.$validator.attach('coupon', 'verify_coupon');\n            }\n        }\n    "])])
}},staticRenderFns: [function (){with(this) {
  return _h('button', {
    staticClass: "pure-button pure-button-primary",
    attrs: {
      "type": "submit",
      "name": "button"
    }
  }, ["Apply"])
}}]}
if (false) {
  module.hot.accept()
  if (module.hot.data) {
     require("vue-hot-reload-api").rerender("data-v-17", module.exports)
  }
}

/***/ },

/***/ 172:
/***/ function(module, exports, __webpack_require__) {

module.exports={render:function (){with(this) {
  return _h('div', [_m(0), " ", _m(1), " ", _h('delay-example'), " ", _m(2), " ", _m(3), _m(4), " ", _m(5), " ", _h('reject-example'), " ", _m(6), " ", _h('p', ["\n        The basic approach relies on listening to the ", _m(7), " or the ", _m(8), " events depending on the file type.\n        However most of the time, your values are bound to your Vue instance and some code may change their inputs programatically, the basic approach won't detect this change.\n        ", _m(9), _m(10), " ", _m(11), " The ", _m(12), " directive can take a binding expression, the expression is the data name you wish to validate. for example:\n        ", _h('code-block', {
    staticClass: "language-html"
  }, ["\n            <input v-validate=\"email\" data-rules=\"required|email\" type=\"text\" name=\"email\">\n        "]), "\n        Whenever the binding value is updated, the validator will validate the new value automatically.\n        "]), _m(13), " ", _m(14), " ", _h('data-example'), " ", _m(15), _m(16), " ", _m(17), " ", _m(18), " ", _m(19), " ", _m(20), " ", _m(21), " ", _h('event-example'), " ", _m(22), " ", _m(23), " ", _h('locale-example'), " ", _m(24), _m(25), " ", _m(26), " ", _m(27), " ", _m(28), " ", _h('scope-example'), " ", _m(29), " ", _m(30), " ", _h('coupon-example')])
}},staticRenderFns: [function (){with(this) {
  return _h('h2', {
    staticClass: "content-subhead",
    attrs: {
      "id": "debounce-example"
    }
  }, [_h('a', {
    attrs: {
      "href": "#debounce-example"
    }
  }, ["Delayed Validation (Debounced)"])])
}},function (){with(this) {
  return _h('p', ["\n        You can specify a delay to debounce the input event, a case scenario that you may want to wait for the user to stop typing then validate the field.\n        This can be achieved by adding a ", _h('code', {
    staticClass: "inline"
  }, ["data-delay"]), " attribute on the field being validated, and assign it the number of milliseconds you want to wait for.\n    "])
}},function (){with(this) {
  return _h('h2', {
    staticClass: "content-subhead",
    attrs: {
      "id": "reject-example"
    }
  }, [_h('a', {
    attrs: {
      "href": "#reject-example"
    }
  }, ["Reject Invalid Files"])])
}},function (){with(this) {
  return _h('p', ["\n        After validating a file, you may want to reject the uploaded file if it fails the validation, this can be done by adding\n        the ", _h('code', {
    staticClass: "inline"
  }, ["reject"]), " modifier to directive. so you would use it like this: ", _h('code', {
    staticClass: "inline"
  }, ["v-validate.reject"]), ".\n        "])
}},function (){with(this) {
  return _h('div', {
    staticClass: "note"
  }, [_h('b', ["Note: "]), " The ", _h('code', ["reject"]), " modifier is only relevant on file inputs, adding it to other input types will not have an effect.\n        "])
}},function (){with(this) {
  return _h('p')
}},function (){with(this) {
  return _h('h2', {
    staticClass: "content-subhead",
    attrs: {
      "id": "validate-data-example"
    }
  }, [_h('a', {
    attrs: {
      "href": "#validate-data-example"
    }
  }, ["Validate $data"])])
}},function (){with(this) {
  return _h('code', {
    staticClass: "inline"
  }, ["input"])
}},function (){with(this) {
  return _h('code', {
    staticClass: "inline"
  }, ["change"])
}},function (){with(this) {
  return _h('br')
}},function (){with(this) {
  return _h('br')
}},function (){with(this) {
  return _h('b', {
    staticClass: "important"
  }, ["The Solution:"])
}},function (){with(this) {
  return _h('code', {
    staticClass: "inline"
  }, ["v-validate"])
}},function (){with(this) {
  return _h('div', {
    staticClass: "note"
  }, [_h('b', ["Note:"]), " The plugin will use the data in your vue instance as the source of the input value, meaning it won't be watching the input anymore.\n            And as you noticed, you don't need to provide a ", _h('code', ["name"]), " attribute, as the expression name will be used instead.\n        "])
}},function (){with(this) {
  return _h('p')
}},function (){with(this) {
  return _h('p')
}},function (){with(this) {
  return _h('div', {
    staticClass: "note"
  }, [_h('b', ["Note:"]), " Notice that the ", _h('code', ["email"]), " field was immediatly validated when you open the page, you may not want this behavior, use the ", _h('code', ["initial"]), " modifier to tell the validator to ignore the first evaluation like this: ", _h('code', ["v-validate.initial"]), ".\n            ", _h('br'), "For example the name field above didn't display any errors when you opened this page.\n            This attribute is only relevant when validating using binding expressions, it has no effect otherwise.\n        "])
}},function (){with(this) {
  return _h('br')
}},function (){with(this) {
  return _h('div', {
    staticClass: "note"
  }, [_h('b', ["Note:"]), " When you provide a binding expression to the directive, ", _h('code', ["delay"]), " attribute and ", _h('code', ["reject"]), " modifier won't have an effect anymore. so you might want to handle debouncing the inputs yourself.\n        "])
}},function (){with(this) {
  return _h('p')
}},function (){with(this) {
  return _h('h2', {
    staticClass: "content-subhead",
    attrs: {
      "id": "validate-form"
    }
  }, [_h('a', {
    attrs: {
      "href": "#validate-form"
    }
  }, ["Validate Form Before Submit"])])
}},function (){with(this) {
  return _h('p', ["\n        You may want to trigger all inputs validation before submitting a form, maybe display an alert or prevent form submission if any errors are detected.\n     "])
}},function (){with(this) {
  return _h('h2', {
    staticClass: "content-subhead",
    attrs: {
      "id": "locale-example"
    }
  }, [_h('a', {
    attrs: {
      "href": "#locale-example"
    }
  }, ["Localized Messages"])])
}},function (){with(this) {
  return _h('p', ["\n        You may want to display error messages in different languages, here is an example on how you may do that. The language below is Arabic (RTL):\n     "])
}},function (){with(this) {
  return _h('p')
}},function (){with(this) {
  return _h('div', {
    staticClass: "note"
  }, [_h('b', ["Note: "]), " Here we are also seeing ", _h('code', ["data-as"]), " attribute which tells the validator to use that value as the field name when generating error messages, this is a good way to display 'pretty names' for your inputs in error messages, which would make sense when displaying messages in other languages.\n            ", _h('br'), _h('br'), "Keep in mind that those pretty names are only used when generating error messages.\n        "])
}},function (){with(this) {
  return _h('p')
}},function (){with(this) {
  return _h('h2', {
    staticClass: "content-subhead",
    attrs: {
      "id": "scope-example"
    }
  }, [_h('a', {
    attrs: {
      "href": "#scope-example"
    }
  }, ["Scopes"])])
}},function (){with(this) {
  return _h('p', ["\n        By default the scope of the validator is the same as the Vue instance that owns it, sometimes you may have multiple fields with the same name, they are in different forms and serve different purposes.\n        The validator will then treat those two fields as the same field which will cause problems detecting the input and displaying the errors.\n        ", _h('br'), _h('br'), "\n        You can tell the validator to scope the fields by adding a ", _h('code', {
    staticClass: "inline"
  }, ["data-scope"]), " attribute which tells the validator the name of the scope. Those fields will be then identified using their name and their scope. allowing duplicate fields to exist within the same component.\n        ", _h('br'), _h('br'), "\n        For convienece you may add the ", _h('code', {
    staticClass: "inline"
  }, ["data-scope"]), " on the form that owns the inputs, you don't have to add the attribute on each and every input.\n     "])
}},function (){with(this) {
  return _h('h2', {
    staticClass: "content-subhead",
    attrs: {
      "id": "coupon-example"
    }
  }, [_h('a', {
    attrs: {
      "href": "#coupon-example"
    }
  }, ["Custom Rule: Coupon"])])
}},function (){with(this) {
  return _h('p', ["\n        Let's say you want to validate something specific to your app domain that isn't provided by the default validators,\n        for example lets validate a user coupon on checkout. If it is a valid coupon then you discount it for him, if not he pays the full price :(\n        ", _h('br'), "\n\n        Here is a list of our valid coupons: ", _h('code', {
    staticClass: "inline"
  }, ["SUMMER2016"]), ", ", _h('code', {
    staticClass: "inline"
  }, ["WINTER2016"]), " and ", _h('code', {
    staticClass: "inline"
  }, ["FALL2016"]), ". each of which gives 20% off.\n\n        The process of validation is as follows: we take the input and send it to backend, the response should determine if the coupon is valid which is up to you. here I'm simulating async behavior using ", _h('code', {
    staticClass: "inline"
  }, ["setTimeout"]), ".\n\n        ", _h('code', {
    staticClass: "inline"
  }, ["Vee-Validate"]), " allows the usage of async validators, but it requires them to return a promise that resolves with an object containing the property ", _h('code', {
    staticClass: "inline"
  }, ["valid"]), " which should equal a boolean state of the validation status.\n     "])
}}]}
if (false) {
  module.hot.accept()
  if (module.hot.data) {
     require("vue-hot-reload-api").rerender("data-v-7", module.exports)
  }
}

/***/ }

});