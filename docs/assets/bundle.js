webpackJsonp([2],{

/***/ 107:
/***/ function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(__dirname) {/* eslint-disable max-len */
var Api = function Api() {
    return __webpack_require__.e/* System.import */(0).then(__webpack_require__.bind(null, 134));
};
var Examples = function Examples() {
    return __webpack_require__.e/* System.import */(1).then(__webpack_require__.bind(null, 135));
};
var Home = function Home() {
    return __webpack_require__.e/* System.import */(0/* min-size */).then(__webpack_require__.bind(null, 136));
};
var Rules = function Rules() {
    return __webpack_require__.e/* System.import */(0/* min-size */).then(__webpack_require__.bind(null, 138));
};
var Localization = function Localization() {
    return __webpack_require__.e/* System.import */(0/* min-size */).then(__webpack_require__.bind(null, 137));
};

var scrollBehavior = function scrollBehavior(to, from, savedPosition) {
    var position = {};
    if (to.hash) {
        position.selector = to.hash;
    } else if (to.matched.some(function (m) {
        return m.meta.scrollToTop;
    })) {
        position.x = 0;
        position.y = 0;
    } else if (savedPosition) {
        return savedPosition;
    }

    return position;
};

/* harmony default export */ exports["a"] = {
    mode: 'history',
    base: __dirname,
    scrollBehavior: scrollBehavior,
    routes: [{ path: '/', name: 'home', component: Home, meta: { subtitle: 'Simple Vue.js Form Validation', scrollToTop: true } }, { path: '/api', name: 'api', component: Api, meta: { subtitle: 'Classes API', scrollToTop: true } }, { path: '/examples', name: 'examples', component: Examples, meta: { subtitle: 'Usage and Examples', scrollToTop: true } }, { path: '/rules', name: 'rules', component: Rules, meta: { subtitle: 'Validation Rules', scrollToTop: true } }, { path: '/localization', name: 'localization', component: Localization, meta: { subtitle: 'Language Support', scrollToTop: true } }, { path: '/:page.html', redirect: '/:page' }, // handles .html references.
    { path: '*', redirect: '/' }]
};
/* WEBPACK VAR INJECTION */}.call(exports, "/"))

/***/ },

/***/ 108:
/***/ function(module, exports, __webpack_require__) {

var __WEBPACK_AMD_DEFINE_FACTORY__, __WEBPACK_AMD_DEFINE_RESULT__;var _typeof2 = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol ? "symbol" : typeof obj; };

(function (global, factory) {
    ( false ? 'undefined' : _typeof2(exports)) === 'object' && typeof module !== 'undefined' ? module.exports = factory() :  true ? !(__WEBPACK_AMD_DEFINE_FACTORY__ = (factory), __WEBPACK_AMD_DEFINE_RESULT__ = (typeof __WEBPACK_AMD_DEFINE_FACTORY__ === 'function' ? (__WEBPACK_AMD_DEFINE_FACTORY__.call(exports, __webpack_require__, exports, module)) : __WEBPACK_AMD_DEFINE_FACTORY__), __WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__)) : global.VeeValidate = factory();
})(this, function () {
    'use strict';

    var email$1 = function email$1(value) {
        return (/^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,6}$/.test(value)
        );
    };

    var In = function In(value, options) {
        return !!options.filter(function (option) {
            return option == value;
        }).length;
    }; // eslint-disable-line

    var required$1 = function required$1(value) {
        if (Array.isArray(value)) {
            return !!value.length;
        }

        if (value === undefined || value === null) {
            return false;
        }

        return !!String(value).length;
    };

    var _typeof = typeof Symbol === "function" && _typeof2(Symbol.iterator) === "symbol" ? function (obj) {
        return typeof obj === 'undefined' ? 'undefined' : _typeof2(obj);
    } : function (obj) {
        return obj && typeof Symbol === "function" && obj.constructor === Symbol ? "symbol" : typeof obj === 'undefined' ? 'undefined' : _typeof2(obj);
    };

    var classCallCheck = function classCallCheck(instance, Constructor) {
        if (!(instance instanceof Constructor)) {
            throw new TypeError("Cannot call a class as a function");
        }
    };

    var createClass = function () {
        function defineProperties(target, props) {
            for (var i = 0; i < props.length; i++) {
                var descriptor = props[i];
                descriptor.enumerable = descriptor.enumerable || false;
                descriptor.configurable = true;
                if ("value" in descriptor) descriptor.writable = true;
                Object.defineProperty(target, descriptor.key, descriptor);
            }
        }

        return function (Constructor, protoProps, staticProps) {
            if (protoProps) defineProperties(Constructor.prototype, protoProps);
            if (staticProps) defineProperties(Constructor, staticProps);
            return Constructor;
        };
    }();

    var defineProperty = function defineProperty(obj, key, value) {
        if (key in obj) {
            Object.defineProperty(obj, key, {
                value: value,
                enumerable: true,
                configurable: true,
                writable: true
            });
        } else {
            obj[key] = value;
        }

        return obj;
    };

    var get$1 = function get$1(object, property, receiver) {
        if (object === null) object = Function.prototype;
        var desc = Object.getOwnPropertyDescriptor(object, property);

        if (desc === undefined) {
            var parent = Object.getPrototypeOf(object);

            if (parent === null) {
                return undefined;
            } else {
                return get$1(parent, property, receiver);
            }
        } else if ("value" in desc) {
            return desc.value;
        } else {
            var getter = desc.get;

            if (getter === undefined) {
                return undefined;
            }

            return getter.call(receiver);
        }
    };

    var set = function set(object, property, value, receiver) {
        var desc = Object.getOwnPropertyDescriptor(object, property);

        if (desc === undefined) {
            var parent = Object.getPrototypeOf(object);

            if (parent !== null) {
                set(parent, property, value, receiver);
            }
        } else if ("value" in desc && desc.writable) {
            desc.value = value;
        } else {
            var setter = desc.set;

            if (setter !== undefined) {
                setter.call(receiver, value);
            }
        }

        return value;
    };

    var slicedToArray = function () {
        function sliceIterator(arr, i) {
            var _arr = [];
            var _n = true;
            var _d = false;
            var _e = undefined;

            try {
                for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) {
                    _arr.push(_s.value);

                    if (i && _arr.length === i) break;
                }
            } catch (err) {
                _d = true;
                _e = err;
            } finally {
                try {
                    if (!_n && _i["return"]) _i["return"]();
                } finally {
                    if (_d) throw _e;
                }
            }

            return _arr;
        }

        return function (arr, i) {
            if (Array.isArray(arr)) {
                return arr;
            } else if (Symbol.iterator in Object(arr)) {
                return sliceIterator(arr, i);
            } else {
                throw new TypeError("Invalid attempt to destructure non-iterable instance");
            }
        };
    }();

    var toArray = function toArray(arr) {
        return Array.isArray(arr) ? arr : Array.from(arr);
    };

    var toConsumableArray = function toConsumableArray(arr) {
        if (Array.isArray(arr)) {
            for (var i = 0, arr2 = Array(arr.length); i < arr.length; i++) {
                arr2[i] = arr[i];
            }return arr2;
        } else {
            return Array.from(arr);
        }
    };

    var min$1 = function min$1(value, _ref) {
        var _ref2 = slicedToArray(_ref, 1);

        var length = _ref2[0];

        if (value === undefined || value === null) {
            return false;
        }
        return String(value).length >= length;
    };

    var max$1 = function max$1(value, _ref) {
        var _ref2 = slicedToArray(_ref, 1);

        var length = _ref2[0];

        if (value === undefined || value === null) {
            return length >= 0;
        }

        return String(value).length <= length;
    };

    var not_in$1 = function not_in$1(value, options) {
        return !options.filter(function (option) {
            return option == value;
        }).length;
    }; // eslint-disable-line

    var alpha$1 = function alpha$1(value) {
        return !Array.isArray(value) && /^[a-zA-Z]*$/.test(value);
    };

    var alpha_num$1 = function alpha_num$1(value) {
        return !Array.isArray(value) && /^[a-zA-Z0-9]*$/.test(value);
    };

    var alpha_dash$1 = function alpha_dash$1(value) {
        return !Array.isArray(value) && /^[a-zA-Z0-9_-]*$/.test(value);
    };

    var numeric$1 = function numeric$1(value) {
        return !Array.isArray(value) && /^[0-9]*$/.test(value);
    };

    var regex$1 = function regex$1(value, _ref) {
        var _ref2 = toArray(_ref);

        var regex = _ref2[0];

        var flags = _ref2.slice(1);

        return new RegExp(regex, flags).test(String(value));
    };

    // TODO: Maybe add ipv6 flag?
    var ip$1 = function ip$1(value) {
        return (/^(?:(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\.){3}(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)$/.test(value)
        );
    };

    var ext$1 = function ext$1(files, extensions) {
        var regex = new RegExp('.(' + extensions.join('|') + ')$', 'i');
        for (var i = 0; i < files.length; i++) {
            if (!regex.test(files[i].name)) {
                return false;
            }
        }

        return true;
    };

    var mimes$1 = function mimes$1(files, mimes) {
        var regex = new RegExp(mimes.join('|').replace('*', '.+') + '$', 'i');
        for (var i = 0; i < files.length; i++) {
            if (!regex.test(files[i].type)) {
                return false;
            }
        }

        return true;
    };

    var size$1 = function size$1(files, _ref) {
        var _ref2 = slicedToArray(_ref, 1);

        var size = _ref2[0];

        if (isNaN(size)) {
            return false;
        }

        var nSize = Number(size) * 1024;
        for (var i = 0; i < files.length; i++) {
            if (files[i].size > nSize) {
                return false;
            }
        }

        return true;
    };

    var digits$1 = function digits$1(value, _ref) {
        var _ref2 = slicedToArray(_ref, 1);

        var length = _ref2[0];

        var strVal = String(value);

        return (/^[0-9]*$/.test(strVal) && strVal.length === Number(length)
        );
    };

    var image$1 = function image$1(files) {
        for (var i = 0; i < files.length; i++) {
            if (!/\.(jpg|svg|jpeg|png|bmp|gif)$/i.test(files[i].name)) {
                return false;
            }
        }

        return true;
    };

    var validateImage = function validateImage(file, width, height) {
        var URL = window.URL || window.webkitURL;
        return new Promise(function (resolve) {
            var image = new Image();
            image.onerror = function () {
                return resolve({ valid: false });
            };
            image.onload = function () {
                return resolve({
                    valid: image.width === Number(width) && image.height === Number(height)
                });
            };

            image.src = URL.createObjectURL(file);
        });
    };

    var dimensions$1 = function dimensions$1(files, _ref) {
        var _ref2 = slicedToArray(_ref, 2);

        var width = _ref2[0];
        var height = _ref2[1];

        var list = [];
        for (var i = 0; i < files.length; i++) {
            // if file is not an image, reject.
            if (!/\.(jpg|svg|jpeg|png|bmp|gif)$/i.test(files[i].name)) {
                return false;
            }

            list.push(files[i]);
        }

        return Promise.all(list.map(function (file) {
            return validateImage(file, width, height);
        }));
    };

    var between$1 = function between$1(value, _ref) {
        var _ref2 = slicedToArray(_ref, 2);

        var min = _ref2[0];
        var max = _ref2[1];
        return Number(min) <= value && Number(max) >= value;
    };

    var confirmed$1 = function confirmed$1(value, _ref) {
        var _ref2 = slicedToArray(_ref, 1);

        var confirmedField = _ref2[0];

        var field = document.querySelector("input[name='" + confirmedField + "']");

        return !!(field && String(value) === field.value);
    };

    var url$1 = function url$1(value, params) {
        var isUrl = /^https?:\/\/([\da-z\.-]+)\.([a-z\.]{2,6})([\/\w\.\(\)%-]*)*\/?$/.test(value);

        var domain = params && params[0];

        if (domain && isUrl) {
            return new RegExp('^https?://(([da-z.-]+).)*(' + params[0].replace('.', '\\$&') + ')').test(value);
        }

        return isUrl;
    };

    var decimal$1 = function decimal$1(value) {
        var _ref = arguments.length <= 1 || arguments[1] === undefined ? ['*'] : arguments[1];

        var _ref2 = slicedToArray(_ref, 1);

        var decimals = _ref2[0];

        if (Array.isArray(value)) {
            return false;
        }

        if (value === null || value === undefined || value === '') {
            return true;
        }

        var regexPart = decimals === '*' ? '*' : '{0,' + decimals + '}';
        var regex = new RegExp('^[0-9]*.?[0-9]' + regexPart + '$');

        if (!regex.test(value)) {
            return false;
        }

        return !Number.isNaN(parseFloat(value));
    };

    var Rules = {
        email: email$1,
        min: min$1,
        max: max$1,
        required: required$1,
        in: In,
        not_in: not_in$1,
        alpha: alpha$1,
        alpha_num: alpha_num$1,
        alpha_dash: alpha_dash$1,
        numeric: numeric$1,
        regex: regex$1,
        ip: ip$1,
        ext: ext$1,
        mimes: mimes$1,
        size: size$1,
        digits: digits$1,
        image: image$1,
        dimensions: dimensions$1,
        between: between$1,
        confirmed: confirmed$1,
        url: url$1,
        decimal: decimal$1
    };

    var ErrorBag = function () {
        function ErrorBag() {
            classCallCheck(this, ErrorBag);

            this.errors = [];
        }

        /**
         * Adds an error to the internal array.
         *
         * @param {string} field The field name.
         * @param {string} msg The error message.
         * @param {String} scope The Scope name, optional.
         */

        createClass(ErrorBag, [{
            key: "add",
            value: function add(field, msg, scope) {
                var error = {
                    field: field,
                    msg: msg
                };

                if (scope) {
                    error.scope = scope;
                }

                this.errors.push(error);
            }

            /**
             * Gets all error messages from the internal array.
             *
             * @param {String} scope The Scope name, optional.
             * @return {Array} errors Array of all error messages.
             */

        }, {
            key: "all",
            value: function all(scope) {
                if (scope) {
                    return this.errors.filter(function (e) {
                        return e.scope === scope;
                    }).map(function (e) {
                        return e.msg;
                    });
                }

                return this.errors.map(function (e) {
                    return e.msg;
                });
            }

            /**
             * Checks if there is any errrors in the internal array.
             * @param {String} scope The Scope name, optional.
             * @return {boolean} result True if there was at least one error, false otherwise.
             */

        }, {
            key: "any",
            value: function any(scope) {
                if (scope) {
                    return !!this.errors.filter(function (e) {
                        return e.scope === scope;
                    }).length;
                }

                return !!this.errors.length;
            }

            /**
             * Removes all items from the internal array.
             * @param {String} scope The Scope name, optional.
             */

        }, {
            key: "clear",
            value: function clear(scope) {
                if (scope) {
                    this.errors = this.errors.filter(function (e) {
                        return e.scope !== scope;
                    });

                    return;
                }

                this.errors = [];
            }

            /**
             * Collects errors into groups or for a specific field.
             *
             * @param  {string} field The field name.
             * @param  {string} scope The scope name.
             * @return {Array} errors The errors for the specified field.
             */

        }, {
            key: "collect",
            value: function collect(field, scope) {
                var _this = this;

                if (!field) {
                    var _ret = function () {
                        var collection = {};
                        _this.errors.forEach(function (e) {
                            if (!collection[e.field]) {
                                collection[e.field] = [];
                            }

                            collection[e.field].push(e.msg);
                        });

                        return {
                            v: collection
                        };
                    }();

                    if ((typeof _ret === "undefined" ? "undefined" : _typeof(_ret)) === "object") return _ret.v;
                }

                if (scope) {
                    return this.errors.filter(function (e) {
                        return e.field === field && e.scope === scope;
                    }).map(function (e) {
                        return e.msg;
                    });
                }

                return this.errors.filter(function (e) {
                    return e.field === field;
                }).map(function (e) {
                    return e.msg;
                });
            }
            /**
             * Gets the internal array length.
             *
             * @return {Number} length The internal array length.
             */

        }, {
            key: "count",
            value: function count() {
                return this.errors.length;
            }

            /**
             * Gets the first error message for a specific field.
             *
             * @param  {string} field The field name.
             * @return {string|null} message The error message.
             */

        }, {
            key: "first",
            value: function first(field, scope) {
                for (var i = 0; i < this.errors.length; i++) {
                    if (this.errors[i].field === field) {
                        if (scope) {
                            if (this.errors[i].scope === scope) {
                                return this.errors[i].msg;
                            }
                        } else {
                            return this.errors[i].msg;
                        }
                    }
                }

                return null;
            }

            /**
             * Checks if the internal array has at least one error for the specified field.
             *
             * @param  {string} field The specified field.
             * @return {Boolean} result True if at least one error is found, false otherwise.
             */

        }, {
            key: "has",
            value: function has(field, scope) {
                for (var i = 0; i < this.errors.length; i++) {
                    if (this.errors[i].field === field) {
                        if (scope) {
                            if (this.errors[i].scope === scope) {
                                return true;
                            }
                        } else {
                            return true;
                        }
                    }
                }

                return false;
            }

            /**
             * Removes all error messages assoicated with a specific field.
             *
             * @param  {string} field The field which messages are to be removed.
             * @param {String} scope The Scope name, optional.
             */

        }, {
            key: "remove",
            value: function remove(field, scope) {
                if (scope) {
                    this.errors = this.errors.filter(function (e) {
                        return e.field !== field || e.scope !== scope;
                    });

                    return;
                }

                this.errors = this.errors.filter(function (e) {
                    return e.field !== field;
                });
            }
        }]);
        return ErrorBag;
    }();

    var _class = function () {
        function _class(msg) {
            classCallCheck(this, _class);

            this.msg = msg;
        }

        createClass(_class, [{
            key: "toString",
            value: function toString() {
                return this.msg;
            }
        }]);
        return _class;
    }();

    /* eslint-disable prefer-rest-params */
    var Dictionary = function () {
        function Dictionary() {
            var dictionary = arguments.length <= 0 || arguments[0] === undefined ? {} : arguments[0];
            classCallCheck(this, Dictionary);

            this.dictionary = {};
            this.merge(dictionary);
        }

        createClass(Dictionary, [{
            key: 'hasLocale',
            value: function hasLocale(locale) {
                return !!this.dictionary[locale];
            }
        }, {
            key: 'getMessage',
            value: function getMessage(locale, key) {
                var fallback = arguments.length <= 2 || arguments[2] === undefined ? '' : arguments[2];

                if (!this.hasMessage(locale, key)) {
                    return fallback;
                }

                return this.dictionary[locale].messages[key];
            }
        }, {
            key: 'getAttribute',
            value: function getAttribute(locale, key) {
                var fallback = arguments.length <= 2 || arguments[2] === undefined ? '' : arguments[2];

                if (!this.hasAttribute(locale, key)) {
                    return fallback;
                }

                return this.dictionary[locale].attributes[key];
            }
        }, {
            key: 'hasMessage',
            value: function hasMessage(locale, key) {
                return !!(this.hasLocale(locale) && this.dictionary[locale].messages && this.dictionary[locale].messages[key]);
            }
        }, {
            key: 'hasAttribute',
            value: function hasAttribute(locale, key) {
                return !!(this.hasLocale(locale) && this.dictionary[locale].attributes && this.dictionary[locale].attributes[key]);
            }
        }, {
            key: 'merge',
            value: function merge(dictionary) {
                this._merge(this.dictionary, dictionary);
            }
        }, {
            key: 'setMessage',
            value: function setMessage(locale, key, message) {
                if (!this.hasLocale(locale)) {
                    this.dictionary[locale] = {
                        messages: {},
                        attributes: {}
                    };
                }

                this.dictionary[locale].messages[key] = message;
            }
        }, {
            key: 'setAttribute',
            value: function setAttribute(locale, key, attribute) {
                if (!this.hasLocale(locale)) {
                    this.dictionary[locale] = {
                        messages: {},
                        attributes: {}
                    };
                }

                this.dictionary[locale].attributes[key] = attribute;
            }
        }, {
            key: '_isObject',
            value: function _isObject(object) {
                return object && (typeof object === 'undefined' ? 'undefined' : _typeof(object)) === 'object' && !Array.isArray(object) && object !== null;
            }
        }, {
            key: '_merge',
            value: function _merge(target, source) {
                var _this = this;

                if (!(this._isObject(target) && this._isObject(source))) {
                    return target;
                }

                var assign = Object.assign || this._assign;

                Object.keys(source).forEach(function (key) {
                    if (_this._isObject(source[key])) {
                        if (!target[key]) {
                            assign(target, defineProperty({}, key, {}));
                        }

                        _this._merge(target[key], source[key]);
                        return;
                    }

                    assign(target, defineProperty({}, key, source[key]));
                });

                return target;
            }
        }, {
            key: '_assign',
            value: function _assign(target) {
                var _arguments = arguments;

                if (target === undefined || target === null) {
                    throw new TypeError('Cannot convert undefined or null to object');
                }

                var output = Object(target);

                var _loop = function _loop(index) {
                    var source = _arguments[index];
                    if (source !== undefined && source !== null) {
                        Object.keys(source).forEach(function (key) {
                            if ({}.hasOwnProperty.call(source, key)) {
                                output[key] = source[key];
                            }
                        });
                    }
                };

                for (var index = 1; index < arguments.length; index++) {
                    _loop(index);
                }

                return output;
            }
        }]);
        return Dictionary;
    }();

    /* istanbul ignore next */
    /* eslint-disable max-len */
    var messages = {
        alpha_dash: function alpha_dash(field) {
            return 'The ' + field + ' may contain alpha-numeric characters as well as dashes and underscores.';
        },
        alpha_num: function alpha_num(field) {
            return 'The ' + field + ' may only contain alpha-numeric characters.';
        },
        alpha: function alpha(field) {
            return 'The ' + field + ' may only contain alphabetic characters.';
        },
        between: function between(field, _ref) {
            var _ref2 = slicedToArray(_ref, 2);

            var min = _ref2[0];
            var max = _ref2[1];
            return 'The ' + field + ' must be between ' + min + ' and ' + max + '.';
        },
        confirmed: function confirmed(field, _ref3) {
            var _ref4 = slicedToArray(_ref3, 1);

            var confirmedField = _ref4[0];
            return 'The ' + field + ' does not match the ' + confirmedField + '.';
        },
        decimal: function decimal(field) {
            var _ref5 = arguments.length <= 1 || arguments[1] === undefined ? ['*'] : arguments[1];

            var _ref6 = slicedToArray(_ref5, 1);

            var decimals = _ref6[0];
            return 'The ' + field + ' must be numeric and may contain ' + (decimals === '*' ? '' : decimals) + ' decimal points.';
        },
        digits: function digits(field, _ref7) {
            var _ref8 = slicedToArray(_ref7, 1);

            var length = _ref8[0];
            return 'The ' + field + ' must be numeric and exactly contain ' + length + ' digits.';
        },
        dimensions: function dimensions(field, _ref9) {
            var _ref10 = slicedToArray(_ref9, 2);

            var width = _ref10[0];
            var height = _ref10[1];
            return 'The ' + field + ' must be ' + width + ' pixels by ' + height + ' pixels.';
        },
        email: function email(field) {
            return 'The ' + field + ' must be a valid email.';
        },
        ext: function ext(field) {
            return 'The ' + field + ' must be a valid file.';
        },
        image: function image(field) {
            return 'The ' + field + ' must be an image.';
        },
        in: function _in(field) {
            return 'The ' + field + ' must be a valid value.';
        },
        ip: function ip(field) {
            return 'The ' + field + ' must be a valid ip address.';
        },
        max: function max(field, _ref11) {
            var _ref12 = slicedToArray(_ref11, 1);

            var length = _ref12[0];
            return 'The ' + field + ' may not be greater than ' + length + ' characters.';
        },
        mimes: function mimes(field) {
            return 'The ' + field + ' must have a valid file type.';
        },
        min: function min(field, _ref13) {
            var _ref14 = slicedToArray(_ref13, 1);

            var length = _ref14[0];
            return 'The ' + field + ' must be at least ' + length + ' characters.';
        },
        not_in: function not_in(field) {
            return 'The ' + field + ' must be a valid value.';
        },
        numeric: function numeric(field) {
            return 'The ' + field + ' may only contain numeric characters.';
        },
        regex: function regex(field) {
            return 'The ' + field + ' format is invalid.';
        },
        required: function required(field) {
            return 'The ' + field + ' is required.';
        },
        size: function size(field, _ref15) {
            var _ref16 = slicedToArray(_ref15, 1);

            var _size = _ref16[0];
            return 'The ' + field + ' must be less than ' + _size + ' KB.';
        },
        url: function url(field) {
            return 'The ' + field + ' is not a valid URL.';
        }
    };

    /**
     * Determines the input field scope.
     */
    var getScope = function getScope(el) {
        return el.dataset.scope || el.form && el.form.dataset.scope;
    };

    /**
     * Debounces a function.
     */
    var debounce = function debounce(func) {
        var threshold = arguments.length <= 1 || arguments[1] === undefined ? 100 : arguments[1];
        var execAsap = arguments.length <= 2 || arguments[2] === undefined ? false : arguments[2];

        if (!threshold) {
            return func;
        }

        var timeout = void 0;

        return function debounced(_ref) {
            var _ref2 = toArray(_ref);

            var args = _ref2;

            var obj = this;

            function delayed() {
                if (!execAsap) {
                    func.apply(obj, args);
                }
                timeout = null;
            }

            if (timeout) {
                clearTimeout(timeout);
            } else if (execAsap) {
                func.apply.apply(func, [obj].concat(toConsumableArray(args)));
            }

            timeout = setTimeout(delayed, threshold || 100);
        };
    };

    /**
     * Emits a warning to the console.
     */
    var warn = function warn(message) {
        if (!console) {
            return;
        }

        console.warn("vee-validate: " + message); // eslint-disable-line
    };

    var after$1 = function after$1(moment) {
        return function (value, _ref) {
            var _ref2 = slicedToArray(_ref, 2);

            var targetField = _ref2[0];
            var format = _ref2[1];

            var dateValue = moment(value, format, true);
            var field = document.querySelector("input[name='" + targetField + "']");

            if (!(dateValue.isValid() && field)) {
                return false;
            }

            var other = moment(field.value, format, true);

            if (!other.isValid()) {
                return false;
            }

            return dateValue.isAfter(other);
        };
    };

    var before$1 = function before$1(moment) {
        return function (value, _ref) {
            var _ref2 = slicedToArray(_ref, 2);

            var targetField = _ref2[0];
            var format = _ref2[1];

            var dateValue = moment(value, format, true);
            var field = document.querySelector("input[name='" + targetField + "']");

            if (!dateValue.isValid() || !field) {
                return false;
            }

            var other = moment(field.value, format, true);

            if (!other.isValid()) {
                return false;
            }

            return dateValue.isBefore(other);
        };
    };

    var date_format$1 = function date_format$1(moment) {
        return function (value, _ref) {
            var _ref2 = slicedToArray(_ref, 1);

            var format = _ref2[0];
            return moment(value, format, true).isValid();
        };
    };

    var date_between$1 = function date_between$1(moment) {
        return function (value, _ref) {
            var _ref2 = slicedToArray(_ref, 3);

            var min = _ref2[0];
            var max = _ref2[1];
            var format = _ref2[2];

            var minDate = moment(min, format, true);
            var maxDate = moment(max, format, true);
            var dateVal = moment(value, format, true);

            if (!(minDate.isValid() && maxDate.isValid() && dateVal.isValid())) {
                return false;
            }

            return dateVal.isBetween(minDate, maxDate);
        };
    };

    /* istanbul ignore next */
    /* eslint-disable max-len */
    var messages$1 = {
        after: function after(field, _ref) {
            var _ref2 = slicedToArray(_ref, 1);

            var target = _ref2[0];
            return "The " + field + " must be after " + target + ".";
        },
        before: function before(field, _ref3) {
            var _ref4 = slicedToArray(_ref3, 1);

            var target = _ref4[0];
            return "The " + field + " must be before " + target + ".";
        },
        date_between: function date_between(field, _ref5) {
            var _ref6 = slicedToArray(_ref5, 2);

            var min = _ref6[0];
            var max = _ref6[1];
            return "The " + field + " must be between " + min + " and " + max + ".";
        },
        date_format: function date_format(field, _ref7) {
            var _ref8 = slicedToArray(_ref7, 1);

            var format = _ref8[0];
            return "The " + field + " must be in the format " + format + ".";
        }
    };

    var date = {
        make: function make(moment) {
            return {
                date_format: date_format$1(moment),
                after: after$1(moment),
                before: before$1(moment),
                date_between: date_between$1(moment)
            };
        },
        messages: messages$1,
        installed: false
    };

    var EVENT_NAME = 'veeValidate';
    var DEFAULT_LOCALE = 'en';
    var STRICT_MODE = true;

    var dictionary = new Dictionary({
        en: {
            messages: messages,
            attributes: {}
        }
    });

    var Validator = function () {
        function Validator(validations, $vm) {
            classCallCheck(this, Validator);

            this.locale = DEFAULT_LOCALE;
            this.strictMode = STRICT_MODE;
            this.$fields = {};
            this._createFields(validations);
            this.errorBag = new ErrorBag();
            this.$vm = $vm;

            // if momentjs is present, install the validators.
            if (typeof moment === 'function') {
                // eslint-disable-next-line
                this.installDateTimeValidators(moment);
            }
        }

        /**
         * Sets the default locale for all validators.
         *
         * @param {String} language The locale id.
         */

        createClass(Validator, [{
            key: 'installDateTimeValidators',

            /**
             * Just an alias to the static method for convienece.
             */
            value: function installDateTimeValidators(moment) {
                Validator.installDateTimeValidators(moment);
            }

            /**
             * Sets the operating mode for this validator.
             * strictMode = true: Values without a rule are invalid and cause failure.
             * strictMode = false: Values without a rule are valid and are skipped.
             * @param {Boolean} strictMode.
             */

        }, {
            key: 'setStrictMode',
            value: function setStrictMode() {
                var strictMode = arguments.length <= 0 || arguments[0] === undefined ? true : arguments[0];

                this.strictMode = strictMode;
            }

            /**
             * Updates the dicitionary, overwriting existing values and adding new ones.
             *
             * @param  {object} data The dictionary object.
            =     */

        }, {
            key: 'setLocale',

            /**
             * Sets the validator current langauge.
             *
             * @param {string} language locale or language id.
             */
            value: function setLocale(language) {
                /* istanbul ignore if */
                if (!dictionary.hasLocale(language)) {
                    // eslint-disable-next-line
                    warn('You are setting the validator locale to a locale that is not defined in the dicitionary. English messages may still be generated.');
                }

                this.locale = language;
            }

            /**
             * Registers a field to be validated.
             *
             * @param  {string} name The field name.
             * @param  {string} checks validations expression.
             * @param {string} prettyName Custom name to be used as field name in error messages.
             */

        }, {
            key: 'attach',
            value: function attach(name, checks) {
                var prettyName = arguments.length <= 2 || arguments[2] === undefined ? null : arguments[2];

                this.errorBag.remove(name);
                this._createField(name, checks);

                if (prettyName) {
                    this.$fields[name].name = prettyName;
                }
            }

            /**
             * Updates the messages dicitionary, overwriting existing values and adding new ones.
             *
             * @param  {object} data The messages object.
             */

        }, {
            key: 'updateDictionary',
            value: function updateDictionary(data) {
                Validator.updateDictionary(data);
            }

            /**
             * Removes a field from the validator.
             *
             * @param  {string} name The name of the field.
             */

        }, {
            key: 'detach',
            value: function detach(name) {
                delete this.$fields[name];
            }

            /**
             * Adds a custom validator to the list of validation rules.
             *
             * @param  {string} name The name of the validator.
             * @param  {object|function} validator The validator object/function.
             */

        }, {
            key: 'extend',
            value: function extend(name, validator) {
                Validator.extend(name, validator);
            }

            /**
             * Validates each value against the corresponding field validations.
             * @param  {object} values The values to be validated.
             * @return {boolean|Promise|void} result Returns a boolean or a promise that will
             * resolve to a boolean.
             */

        }, {
            key: 'validateAll',
            value: function validateAll(values) {
                var _this = this;

                /* istanbul ignore if */
                if (this.$vm && (!values || typeof values === 'string')) {
                    this.errorBag.clear(values);
                    this.$vm.$emit(EVENT_NAME, values);

                    return;
                }

                var test = true;
                var promises = [];
                this.errorBag.clear();
                Object.keys(values).forEach(function (property) {
                    var result = _this.validate(property, values[property]);
                    if (typeof result.then === 'function') {
                        promises.push(result);
                        return;
                    }

                    test = test && result;
                });

                if (promises.length) {
                    // eslint-disable-next-line
                    return Promise.all(promises).then(function (values) {
                        return values.every(function (t) {
                            return t;
                        }) && test;
                    });
                }

                return test; // eslint-disable-line
            }

            /**
             * Validates a value against a registered field validations.
             *
             * @param  {string} name the field name.
             * @param  {*} value The value to be validated.
             * @return {boolean|Promise} result returns a boolean or a promise that will resolve to
             *  a boolean.
             */

        }, {
            key: 'validate',
            value: function validate(name, value, scope) {
                var _this2 = this;

                if (!this.$fields[name]) {
                    if (!this.strictMode) {
                        return true;
                    }
                    warn('Trying to validate a non-existant field: "' + name + '". Use "attach()" first.');

                    return false;
                }

                this.errorBag.remove(name, scope);
                // if its not required and is empty or null or undefined then it passes.
                if (!this.$fields[name].required && ~[null, undefined, ''].indexOf(value)) {
                    return true;
                }

                var test = true;
                var promises = [];
                this.$fields[name].validations.forEach(function (rule) {
                    var result = _this2._test(name, value, rule, scope);
                    if (typeof result.then === 'function') {
                        promises.push(result);
                        return;
                    }

                    test = test && result;
                });

                if (promises.length) {
                    return Promise.all(promises).then(function (values) {
                        return values.every(function (t) {
                            return t;
                        }) && test;
                    });
                }

                return test;
            }

            /**
             * Creates the fields to be validated.
             *
             * @param  {object} validations
             * @return {object} Normalized object.
             */

        }, {
            key: '_createFields',
            value: function _createFields(validations) {
                var _this3 = this;

                if (!validations) {
                    return;
                }

                Object.keys(validations).forEach(function (property) {
                    _this3._createField(property, validations[property]);
                });
            }

            /**
             * Creates a field entry in the fields object.
             * @param {String} name.
             * @param {String} Checks.
             */

        }, {
            key: '_createField',
            value: function _createField(name, checks) {
                var _this4 = this;

                if (!this.$fields[name]) {
                    this.$fields[name] = {};
                }

                this.$fields[name].validations = [];

                checks.split('|').forEach(function (rule) {
                    var normalizedRule = _this4._normalizeRule(rule, _this4.$fields[name].validations);
                    if (normalizedRule.name === 'required') {
                        _this4.$fields[name].required = true;
                    }

                    _this4.$fields[name].validations.push(normalizedRule);
                });
            }

            /**
             * Normalizes a single validation object.
             *
             * @param  {string} rule The rule to be normalized.
             * @return {object} rule The normalized rule.
             */

        }, {
            key: '_normalizeRule',
            value: function _normalizeRule(rule, validations) {
                var params = [];
                var name = rule.split(':')[0];
                if (~rule.indexOf(':')) {
                    params = rule.split(':')[1].split(',');
                }

                // Those rules need the date format to parse and compare correctly.
                if (date.installed && ~['after', 'before', 'date_between'].indexOf(name)) {
                    var dateFormat = validations.filter(function (v) {
                        return v.name === 'date_format';
                    })[0];
                    if (dateFormat) {
                        // pass it as the last param.
                        params.push(dateFormat.params[0]);
                    }
                }

                return { name: name, params: params };
            }

            /**
             * Formats an error message for field and a rule.
             *
             * @param  {string} field The field name.
             * @param  {object} rule Normalized rule object.
             * @return {string} msg Formatted error message.
             */

        }, {
            key: '_formatErrorMessage',
            value: function _formatErrorMessage(field, rule) {
                if (!dictionary.hasLocale(this.locale) || typeof dictionary.getMessage(this.locale, rule.name) !== 'function') {
                    // Default to english message.
                    return dictionary.getMessage('en', rule.name)(field, rule.params);
                }

                return dictionary.getMessage(this.locale, rule.name)(field, rule.params);
            }

            /**
             * Resolves an appropiate display name, first checking 'data-as' or the registered 'prettyName'
             * Then the dictionary, then fallsback to field name.
             * @return {String} displayName The name to be used in the errors.
             */

        }, {
            key: '_getFieldDisplayName',
            value: function _getFieldDisplayName(field) {
                return this.$fields[field].name || dictionary.getAttribute(this.locale, field, field);
            }

            /**
             * Tests a single input value against a rule.
             *
             * @param  {*} name The name of the field.
             * @param  {*} value  [description]
             * @param  {object} rule the rule object.
             * @return {boolean} Wether if it passes the check.
             */

        }, {
            key: '_test',
            value: function _test(name, value, rule, scope) {
                var _this5 = this;

                var validator = Rules[rule.name];
                var valid = validator(value, rule.params);
                var displayName = this._getFieldDisplayName(name);

                if (typeof valid.then === 'function') {
                    return valid.then(function (values) {
                        var allValid = Array.isArray(values) ? values.every(function (t) {
                            return t.valid;
                        }) : values.valid;

                        if (!allValid) {
                            _this5.errorBag.add(name, _this5._formatErrorMessage(displayName, rule), scope);
                        }

                        return allValid;
                    });
                }

                if (!valid) {
                    this.errorBag.add(name, this._formatErrorMessage(displayName, rule), scope);
                }

                return valid;
            }

            /**
             * Gets the internal errorBag instance.
             *
             * @return {ErrorBag} errorBag The internal error bag object.
             */

        }, {
            key: 'getErrors',
            value: function getErrors() {
                return this.errorBag;
            }
        }], [{
            key: 'setDefaultLocale',
            value: function setDefaultLocale() {
                var language = arguments.length <= 0 || arguments[0] === undefined ? 'en' : arguments[0];

                /* istanbul ignore if */
                if (!dictionary.hasLocale(language)) {
                    // eslint-disable-next-line
                    warn('You are setting the validator locale to a locale that is not defined in the dicitionary. English messages may still be generated.');
                }

                DEFAULT_LOCALE = language;
            }

            /**
             * Sets the operating mode for all newly created validators.
             * strictMode = true: Values without a rule are invalid and cause failure.
             * strictMode = false: Values without a rule are valid and are skipped.
             * @param {Boolean} strictMode.
             */

        }, {
            key: 'setStrictMode',
            value: function setStrictMode() {
                var strictMode = arguments.length <= 0 || arguments[0] === undefined ? true : arguments[0];

                STRICT_MODE = strictMode;
            }

            /**
             * Installs the datetime validators and the messages.
             */

        }, {
            key: 'installDateTimeValidators',
            value: function installDateTimeValidators(moment) {
                if (typeof moment !== 'function') {
                    warn('To use the date-time validators you must provide moment reference.');

                    return false;
                }

                if (date.installed) {
                    return true;
                }

                var validators = date.make(moment);
                Object.keys(validators).forEach(function (name) {
                    Validator.extend(name, validators[name]);
                });

                Validator.updateDictionary({
                    en: {
                        messages: date.messages
                    }
                });
                date.installed = true;

                return true;
            }
        }, {
            key: 'updateDictionary',
            value: function updateDictionary(data) {
                dictionary.merge(data);
            }

            /**
             * Static constructor.
             *
             * @param  {object} validations The validations object.
             * @return {Validator} validator A validator object.
             */

        }, {
            key: 'create',
            value: function create(validations, $vm) {
                return new Validator(validations, $vm);
            }

            /**
             * Adds a custom validator to the list of validation rules.
             *
             * @param  {string} name The name of the validator.
             * @param  {object|function} validator The validator object/function.
             */

        }, {
            key: 'extend',
            value: function extend(name, validator) {
                Validator._guardExtend(name, validator);
                Validator._merge(name, validator);
            }

            /**
             * Merges a validator object into the Rules and Messages.
             *
             * @param  {string} name The name of the validator.
             * @param  {function|object} validator The validator object.
             */

        }, {
            key: '_merge',
            value: function _merge(name, validator) {
                if (typeof validator === 'function') {
                    Rules[name] = validator;
                    dictionary.setMessage('en', name, function (field) {
                        return 'The ' + field + ' value is not valid.';
                    });
                    return;
                }

                Rules[name] = validator.validate;

                if (validator.getMessage && typeof validator.getMessage === 'function') {
                    dictionary.setMessage('en', name, validator.getMessage);
                }

                if (validator.messages) {
                    dictionary.merge(Object.keys(validator.messages).reduce(function (prev, curr) {
                        var dict = prev;
                        dict[curr] = {
                            messages: defineProperty({}, name, validator.messages[curr])
                        };

                        return dict;
                    }, {}));
                }
            }

            /**
             * Guards from extnsion violations.
             *
             * @param  {string} name name of the validation rule.
             * @param  {object} validator a validation rule object.
             */

        }, {
            key: '_guardExtend',
            value: function _guardExtend(name, validator) {
                if (Rules[name]) {
                    throw new _class('Extension Error: There is an existing validator with the same name \'' + name + '\'.');
                }

                if (typeof validator === 'function') {
                    return;
                }

                if (typeof validator.validate !== 'function') {
                    throw new _class(
                    // eslint-disable-next-line
                    'Extension Error: The validator \'' + name + '\' must be a function or have a \'validate\' method.');
                }

                if (typeof validator.getMessage !== 'function' && _typeof(validator.messages) !== 'object') {
                    throw new _class(
                    // eslint-disable-next-line
                    'Extension Error: The validator \'' + name + '\' must have a \'getMessage\' method or have a \'messages\' object.');
                }
            }
        }]);
        return Validator;
    }();

    /**
     * Keeps track of $vm, $validator instances.
     * @type {Array}
     */
    var instances = [];

    /**
     * Finds a validator instance from the instances array.
     * @param  {[type]} $vm The Vue instance.
     * @return {object} pair the $vm,$validator pair.
     */
    var find = function find($vm) {
        for (var i = 0; i < instances.length; i++) {
            if (instances[i].$vm === $vm) {
                return instances[i].$validator;
            }
        }

        return undefined;
    };

    /**
     * Registers a validator for a $vm instance.
     * @param  {*} $vm The Vue instance.
     * @return {Validator} $validator The validator instance.
     */
    var register = function register($vm) {
        var instance = find($vm);
        if (!instance) {
            instance = Validator.create(undefined, $vm);

            instances.push({
                $vm: $vm,
                $validator: instance
            });
        }

        return instance;
    };

    var unregister = function unregister($vm) {
        for (var i = 0; i < instances.length; i++) {
            if (instances[i].$vm === $vm) {
                instances.splice(i, 1);

                return true;
            }
        }

        return false;
    };

    var mixin = function mixin(options) {
        return {
            data: function data() {
                return defineProperty({}, options.errorBagName, this.$validator.errorBag);
            },
            mounted: function mounted() {
                this.$emit('validatorReady');
            },
            destroyed: function destroyed() {
                unregister(this);
            }
        };
    };

    var DEFAULT_EVENT_NAME = 'veeValidate';

    var ListenerGenerator = function () {
        function ListenerGenerator(el, binding, context, options) {
            classCallCheck(this, ListenerGenerator);

            this.callbacks = [];
            this.el = el;
            this.binding = binding;
            this.vm = context;
            this.options = options;
            this.fieldName = binding.expression || el.name;
        }

        /**
         * Determines if the validation rule requires additional listeners on target fields.
         */

        createClass(ListenerGenerator, [{
            key: '_hasFieldDependency',
            value: function _hasFieldDependency(rules) {
                var results = rules.split('|').filter(function (r) {
                    return !!r.match(/confirmed|after|before/);
                });
                if (!results.length) {
                    return false;
                }

                return results[0].split(':')[1];
            }

            /**
             * Validates input value, triggered by 'input' event.
             */

        }, {
            key: '_inputListener',
            value: function _inputListener() {
                this.vm.$validator.validate(this.fieldName, this.el.value, getScope(this.el));
            }

            /**
             * Validates files, triggered by 'change' event.
             */

        }, {
            key: '_fileListener',
            value: function _fileListener() {
                var isValid = this.vm.$validator.validate(this.fieldName, this.el.files, getScope(this.el));
                if (!isValid && this.binding.modifiers.reject) {
                    // eslint-disable-next-line
                    el.value = '';
                }
            }

            /**
             * Validates radio buttons, triggered by 'change' event.
             */

        }, {
            key: '_radioListener',
            value: function _radioListener() {
                var checked = document.querySelector('input[name="' + this.el.name + '"]:checked');
                if (!checked) {
                    this.vm.$validator.validate(this.fieldName, null, getScope(this.el));
                    return;
                }

                this.vm.$validator.validate(this.fieldName, checked.value, getScope(this.el));
            }

            /**
             * Returns a scoped callback, only runs if the el scope is the same as the recieved scope
             * From the event.
             */

        }, {
            key: '_getScopedListener',
            value: function _getScopedListener(callback) {
                var _this = this;

                return function (scope) {
                    if (!scope || scope === getScope(_this.el) || scope instanceof Event) {
                        callback();
                    }
                };
            }

            /**
             * Attaches validator event-triggered validation.
             */

        }, {
            key: '_attachValidatorEvent',
            value: function _attachValidatorEvent() {
                var _this2 = this;

                var listener = this._getScopedListener(this.el.type === 'radio' ? this._radioListener.bind(this) : this._inputListener.bind(this));

                this.vm.$on(DEFAULT_EVENT_NAME, listener);
                this.callbacks.push({ event: DEFAULT_EVENT_NAME, listener: listener });

                var fieldName = this._hasFieldDependency(this.el.dataset.rules);
                if (fieldName) {
                    // Wait for the validator ready triggered when vm is mounted because maybe
                    // the element isn't mounted yet.
                    this.vm.$once('validatorReady', function () {
                        var target = document.querySelector('input[name=\'' + fieldName + '\']');
                        if (!target) {
                            warn('Cannot find target field, no additional listeners were attached.');
                            return;
                        }

                        target.addEventListener('input', listener);
                        _this2.callbacks.push({ event: 'input', listener: listener, el: target });
                    });
                }
            }

            /**
             * Determines a suitable listener for the element.
             */

        }, {
            key: '_getSuitableListener',
            value: function _getSuitableListener() {
                if (this.el.type === 'file') {
                    return {
                        name: 'change',
                        listener: this._fileListener
                    };
                }

                if (this.el.type === 'radio') {
                    return {
                        name: 'change',
                        listener: this._radioListener
                    };
                }

                return {
                    name: 'input',
                    listener: this._inputListener
                };
            }

            /**
             * Attachs a suitable listener for the input.
             */

        }, {
            key: '_attachFieldListeners',
            value: function _attachFieldListeners() {
                var _this3 = this;

                var handler = this._getSuitableListener();
                var listener = debounce(handler.listener.bind(this), this.el.dataset.delay || this.options.delay);

                if (this.el.type === 'radio') {
                    this.vm.$once('validatorReady', function () {
                        [].concat(toConsumableArray(document.querySelectorAll('input[name="' + _this3.el.name + '"]'))).forEach(function (input) {
                            input.addEventListener(handler.name, listener);
                            _this3.callbacks.push({ event: handler.name, callback: listener, el: input });
                        });
                    });

                    return;
                }

                this.el.addEventListener(handler.name, listener);
                this.callbacks.push({ event: handler.name, callback: listener, el: this.el });
            }

            /**
             * Attaches the Event Listeners.
             */

        }, {
            key: 'attach',
            value: function attach() {
                this.vm.$validator.attach(this.fieldName, this.el.dataset.rules, this.el.dataset.as);
                this._attachValidatorEvent();

                if (this.binding.expression) {
                    // if its bound, validate it. (since update doesn't trigger after bind).
                    if (!this.binding.modifiers.initial) {
                        this.vm.$validator.validate(this.binding.expression, this.binding.value, getScope(this.el));
                    }

                    return;
                }

                this._attachFieldListeners();
            }

            /**
             * Removes all attached event listeners.
             */

        }, {
            key: 'detach',
            value: function detach() {
                this.vm.$off(DEFAULT_EVENT_NAME, this.callbacks.filter(function (_ref) {
                    var event = _ref.event;
                    return event === DEFAULT_EVENT_NAME;
                })[0]);

                this.callbacks.filter(function (_ref2) {
                    var event = _ref2.event;
                    return event !== DEFAULT_EVENT_NAME;
                }).forEach(function (h) {
                    h.el.removeEventListener(h.event, h.listener);
                });
            }
        }]);
        return ListenerGenerator;
    }();

    var listenersInstances = [];

    var directive = function directive(options) {
        return {
            bind: function bind(el, binding, _ref) {
                var context = _ref.context;

                var listener = new ListenerGenerator(el, binding, context, options);
                listener.attach();
                listenersInstances.push({ vm: context, el: el, instance: listener });
            },
            update: function update(el, _ref2, _ref3) {
                var expression = _ref2.expression;
                var value = _ref2.value;
                var modifiers = _ref2.modifiers;
                var oldValue = _ref2.oldValue;
                var context = _ref3.context;

                if (!expression || value === oldValue) {
                    return;
                }

                context.$validator.validate(expression || el.name, value, getScope(el));
            },
            unbind: function unbind(el, binding, _ref4) {
                var context = _ref4.context;

                var holder = listenersInstances.filter(function (l) {
                    return l.vm === context && l.el === el;
                })[0];
                holder.instance.detach();
                listenersInstances.splice(listenersInstances.indexOf(holder), 1);
            }
        };
    };

    // eslint-disable-next-line
    var install = function install(Vue) {
        var _ref = arguments.length <= 1 || arguments[1] === undefined ? {} : arguments[1];

        var _ref$locale = _ref.locale;
        var locale = _ref$locale === undefined ? 'en' : _ref$locale;
        var _ref$delay = _ref.delay;
        var delay = _ref$delay === undefined ? 0 : _ref$delay;
        var _ref$errorBagName = _ref.errorBagName;
        var errorBagName = _ref$errorBagName === undefined ? 'errors' : _ref$errorBagName;
        var _ref$dictionary = _ref.dictionary;
        var dictionary = _ref$dictionary === undefined ? null : _ref$dictionary;
        var _ref$strict = _ref.strict;
        var strict = _ref$strict === undefined ? true : _ref$strict;

        if (dictionary) {
            Validator.updateDictionary(dictionary);
        }

        Validator.setDefaultLocale(locale);
        Validator.setStrictMode(strict);

        var options = {
            locale: locale,
            delay: delay,
            dictionary: dictionary,
            errorBagName: errorBagName
        };

        Object.defineProperties(Vue.prototype, {
            $validator: {
                get: function get() {
                    return register(this);
                }
            }
        });

        Vue.mixin(mixin(options)); // Install Mixin.
        Vue.directive('validate', directive(options)); // Install directive.
    };

    var index = { install: install, Validator: Validator, ErrorBag: ErrorBag };

    return index;
});

/***/ },

/***/ 109:
/***/ function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ },

/***/ 110:
/***/ function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ },

/***/ 111:
/***/ function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ },

/***/ 112:
/***/ function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ },

/***/ 113:
/***/ function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ },

/***/ 114:
/***/ function(module, exports, __webpack_require__) {

var __vue_exports__, __vue_options__

/* script */
__vue_exports__ = __webpack_require__(117)

/* template */
var __vue_template__ = __webpack_require__(127)
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
if (__vue_options__.functional) {console.error("[vue-loader] App.vue: functional components are not supported and should be defined in plain js files using render functions.")}

module.exports = __vue_exports__


/***/ },

/***/ 115:
/***/ function(module, exports, __webpack_require__) {

var __vue_exports__, __vue_options__

/* styles */
__webpack_require__(121)

/* script */
__vue_exports__ = __webpack_require__(118)

/* template */
var __vue_template__ = __webpack_require__(128)
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
if (__vue_options__.functional) {console.error("[vue-loader] CodeBlock.vue: functional components are not supported and should be defined in plain js files using render functions.")}

module.exports = __vue_exports__


/***/ },

/***/ 116:
/***/ function(module, exports, __webpack_require__) {

var __vue_exports__, __vue_options__

/* styles */
__webpack_require__(120)

/* script */
__vue_exports__ = __webpack_require__(119)

/* template */
var __vue_template__ = __webpack_require__(126)
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
    hotAPI.createRecord("data-v-1", __vue_options__)
  } else {
    hotAPI.reload("data-v-1", __vue_options__)
  }
})()}
if (__vue_options__.functional) {console.error("[vue-loader] CodeExample.vue: functional components are not supported and should be defined in plain js files using render functions.")}

module.exports = __vue_exports__


/***/ },

/***/ 117:
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

exports.default = {
    mounted: function mounted() {
        var layout = this.$refs.layout;
        var menu = this.$refs.menu;
        var menuLink = this.$refs.menuLink;

        var toggleClass = function toggleClass(element, className) {
            var classes = element.className.split(/\s+/);
            var length = classes.length;

            for (var i = 0; i < length; i++) {
                if (classes[i] === className) {
                    classes.splice(i, 1);
                    break;
                }
            }
            // The className is not found
            if (length === classes.length) {
                classes.push(className);
            }

            element.className = classes.join(' ');
        };

        menuLink.onclick = function (e) {
            var active = 'active';

            e.preventDefault();
            toggleClass(layout, active);
            toggleClass(menu, active);
            toggleClass(menuLink, active);
        };
    }
};

/***/ },

/***/ 118:
/***/ function(module, exports, __webpack_require__) {

"use strict";
'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _prismjs = __webpack_require__(124);

var _prismjs2 = _interopRequireDefault(_prismjs);

__webpack_require__(123);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

//
//
//
//

exports.default = {
    methods: {
        removeWhitespace: function removeWhitespace() {
            var el = this.$refs.code;
            var txt = el.textContent.replace(/^[\r\n]+/, "").replace(/\s+$/g, "");

            if (/^\S/gm.test(txt)) {
                el.textContent = txt;
                return;
            }

            var mat = void 0;
            var str = void 0;
            var re = /^[\t ]+/gm;
            var len = void 0;
            var min = 1e3;

            while (mat = re.exec(txt)) {
                len = mat[0].length;

                if (len < min) {
                    min = len;
                    str = mat[0];
                }
            }

            if (min == 1e3) {
                return;
            }

            el.textContent = txt.replace(new RegExp("^" + str, 'gm'), "");
        }
    },
    mounted: function mounted() {
        this.removeWhitespace();
        _prismjs2.default.highlightElement(this.$refs.code);
    }
};

/***/ },

/***/ 119:
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

exports.default = {
    data: function data() {
        return {
            content: 'demo'
        };
    }
};

/***/ },

/***/ 120:
/***/ function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ },

/***/ 121:
/***/ function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ },

/***/ 123:
/***/ function(module, exports) {

(function(){

if (typeof self === 'undefined' || !self.Prism || !self.document) {
	return;
}

// The languages map is built automatically with gulp
var Languages = /*languages_placeholder[*/{"html":"HTML","xml":"XML","svg":"SVG","mathml":"MathML","css":"CSS","clike":"C-like","javascript":"JavaScript","abap":"ABAP","actionscript":"ActionScript","apacheconf":"Apache Configuration","apl":"APL","applescript":"AppleScript","asciidoc":"AsciiDoc","aspnet":"ASP.NET (C#)","autoit":"AutoIt","autohotkey":"AutoHotkey","basic":"BASIC","csharp":"C#","cpp":"C++","coffeescript":"CoffeeScript","css-extras":"CSS Extras","fsharp":"F#","glsl":"GLSL","http":"HTTP","inform7":"Inform 7","json":"JSON","latex":"LaTeX","lolcode":"LOLCODE","matlab":"MATLAB","mel":"MEL","nasm":"NASM","nginx":"nginx","nsis":"NSIS","objectivec":"Objective-C","ocaml":"OCaml","parigp":"PARI/GP","php":"PHP","php-extras":"PHP Extras","powershell":"PowerShell","protobuf":"Protocol Buffers","jsx":"React JSX","rest":"reST (reStructuredText)","sas":"SAS","sass":"Sass (Sass)","scss":"Sass (Scss)","sql":"SQL","typescript":"TypeScript","vhdl":"VHDL","vim":"vim","wiki":"Wiki markup","yaml":"YAML"}/*]*/;
Prism.hooks.add('before-highlight', function(env) {
	var pre = env.element.parentNode;
	if (!pre || !/pre/i.test(pre.nodeName)) {
		return;
	}
	var language = pre.getAttribute('data-language') || Languages[env.language] || (env.language.substring(0, 1).toUpperCase() + env.language.substring(1));

	/* check if the divs already exist */
	var sib = pre.previousSibling;
	var div, div2;
	if (sib && /\s*\bprism-show-language\b\s*/.test(sib.className) &&
		sib.firstChild &&
		/\s*\bprism-show-language-label\b\s*/.test(sib.firstChild.className)) {
		div2 = sib.firstChild;
	} else {
		div = document.createElement('div');
		div2 = document.createElement('div');

		div2.className = 'prism-show-language-label';

		div.className = 'prism-show-language';
		div.appendChild(div2);

		pre.parentNode.insertBefore(div, pre);
	}
	
	div2.innerHTML = language;
});

})();


/***/ },

/***/ 124:
/***/ function(module, exports, __webpack_require__) {

/* WEBPACK VAR INJECTION */(function(global) {
/* **********************************************
     Begin prism-core.js
********************************************** */

var _self = (typeof window !== 'undefined')
	? window   // if in browser
	: (
		(typeof WorkerGlobalScope !== 'undefined' && self instanceof WorkerGlobalScope)
		? self // if in worker
		: {}   // if in node js
	);

/**
 * Prism: Lightweight, robust, elegant syntax highlighting
 * MIT license http://www.opensource.org/licenses/mit-license.php/
 * @author Lea Verou http://lea.verou.me
 */

var Prism = (function(){

// Private helper vars
var lang = /\blang(?:uage)?-(\w+)\b/i;
var uniqueId = 0;

var _ = _self.Prism = {
	util: {
		encode: function (tokens) {
			if (tokens instanceof Token) {
				return new Token(tokens.type, _.util.encode(tokens.content), tokens.alias);
			} else if (_.util.type(tokens) === 'Array') {
				return tokens.map(_.util.encode);
			} else {
				return tokens.replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/\u00a0/g, ' ');
			}
		},

		type: function (o) {
			return Object.prototype.toString.call(o).match(/\[object (\w+)\]/)[1];
		},

		objId: function (obj) {
			if (!obj['__id']) {
				Object.defineProperty(obj, '__id', { value: ++uniqueId });
			}
			return obj['__id'];
		},

		// Deep clone a language definition (e.g. to extend it)
		clone: function (o) {
			var type = _.util.type(o);

			switch (type) {
				case 'Object':
					var clone = {};

					for (var key in o) {
						if (o.hasOwnProperty(key)) {
							clone[key] = _.util.clone(o[key]);
						}
					}

					return clone;

				case 'Array':
					// Check for existence for IE8
					return o.map && o.map(function(v) { return _.util.clone(v); });
			}

			return o;
		}
	},

	languages: {
		extend: function (id, redef) {
			var lang = _.util.clone(_.languages[id]);

			for (var key in redef) {
				lang[key] = redef[key];
			}

			return lang;
		},

		/**
		 * Insert a token before another token in a language literal
		 * As this needs to recreate the object (we cannot actually insert before keys in object literals),
		 * we cannot just provide an object, we need anobject and a key.
		 * @param inside The key (or language id) of the parent
		 * @param before The key to insert before. If not provided, the function appends instead.
		 * @param insert Object with the key/value pairs to insert
		 * @param root The object that contains `inside`. If equal to Prism.languages, it can be omitted.
		 */
		insertBefore: function (inside, before, insert, root) {
			root = root || _.languages;
			var grammar = root[inside];

			if (arguments.length == 2) {
				insert = arguments[1];

				for (var newToken in insert) {
					if (insert.hasOwnProperty(newToken)) {
						grammar[newToken] = insert[newToken];
					}
				}

				return grammar;
			}

			var ret = {};

			for (var token in grammar) {

				if (grammar.hasOwnProperty(token)) {

					if (token == before) {

						for (var newToken in insert) {

							if (insert.hasOwnProperty(newToken)) {
								ret[newToken] = insert[newToken];
							}
						}
					}

					ret[token] = grammar[token];
				}
			}

			// Update references in other language definitions
			_.languages.DFS(_.languages, function(key, value) {
				if (value === root[inside] && key != inside) {
					this[key] = ret;
				}
			});

			return root[inside] = ret;
		},

		// Traverse a language definition with Depth First Search
		DFS: function(o, callback, type, visited) {
			visited = visited || {};
			for (var i in o) {
				if (o.hasOwnProperty(i)) {
					callback.call(o, i, o[i], type || i);

					if (_.util.type(o[i]) === 'Object' && !visited[_.util.objId(o[i])]) {
						visited[_.util.objId(o[i])] = true;
						_.languages.DFS(o[i], callback, null, visited);
					}
					else if (_.util.type(o[i]) === 'Array' && !visited[_.util.objId(o[i])]) {
						visited[_.util.objId(o[i])] = true;
						_.languages.DFS(o[i], callback, i, visited);
					}
				}
			}
		}
	},
	plugins: {},

	highlightAll: function(async, callback) {
		var env = {
			callback: callback,
			selector: 'code[class*="language-"], [class*="language-"] code, code[class*="lang-"], [class*="lang-"] code'
		};

		_.hooks.run("before-highlightall", env);

		var elements = env.elements || document.querySelectorAll(env.selector);

		for (var i=0, element; element = elements[i++];) {
			_.highlightElement(element, async === true, env.callback);
		}
	},

	highlightElement: function(element, async, callback) {
		// Find language
		var language, grammar, parent = element;

		while (parent && !lang.test(parent.className)) {
			parent = parent.parentNode;
		}

		if (parent) {
			language = (parent.className.match(lang) || [,''])[1].toLowerCase();
			grammar = _.languages[language];
		}

		// Set language on the element, if not present
		element.className = element.className.replace(lang, '').replace(/\s+/g, ' ') + ' language-' + language;

		// Set language on the parent, for styling
		parent = element.parentNode;

		if (/pre/i.test(parent.nodeName)) {
			parent.className = parent.className.replace(lang, '').replace(/\s+/g, ' ') + ' language-' + language;
		}

		var code = element.textContent;

		var env = {
			element: element,
			language: language,
			grammar: grammar,
			code: code
		};

		_.hooks.run('before-sanity-check', env);

		if (!env.code || !env.grammar) {
			_.hooks.run('complete', env);
			return;
		}

		_.hooks.run('before-highlight', env);

		if (async && _self.Worker) {
			var worker = new Worker(_.filename);

			worker.onmessage = function(evt) {
				env.highlightedCode = evt.data;

				_.hooks.run('before-insert', env);

				env.element.innerHTML = env.highlightedCode;

				callback && callback.call(env.element);
				_.hooks.run('after-highlight', env);
				_.hooks.run('complete', env);
			};

			worker.postMessage(JSON.stringify({
				language: env.language,
				code: env.code,
				immediateClose: true
			}));
		}
		else {
			env.highlightedCode = _.highlight(env.code, env.grammar, env.language);

			_.hooks.run('before-insert', env);

			env.element.innerHTML = env.highlightedCode;

			callback && callback.call(element);

			_.hooks.run('after-highlight', env);
			_.hooks.run('complete', env);
		}
	},

	highlight: function (text, grammar, language) {
		var tokens = _.tokenize(text, grammar);
		return Token.stringify(_.util.encode(tokens), language);
	},

	tokenize: function(text, grammar, language) {
		var Token = _.Token;

		var strarr = [text];

		var rest = grammar.rest;

		if (rest) {
			for (var token in rest) {
				grammar[token] = rest[token];
			}

			delete grammar.rest;
		}

		tokenloop: for (var token in grammar) {
			if(!grammar.hasOwnProperty(token) || !grammar[token]) {
				continue;
			}

			var patterns = grammar[token];
			patterns = (_.util.type(patterns) === "Array") ? patterns : [patterns];

			for (var j = 0; j < patterns.length; ++j) {
				var pattern = patterns[j],
					inside = pattern.inside,
					lookbehind = !!pattern.lookbehind,
					greedy = !!pattern.greedy,
					lookbehindLength = 0,
					alias = pattern.alias;

				pattern = pattern.pattern || pattern;

				for (var i=0; i<strarr.length; i++) { // Don’t cache length as it changes during the loop

					var str = strarr[i];

					if (strarr.length > text.length) {
						// Something went terribly wrong, ABORT, ABORT!
						break tokenloop;
					}

					if (str instanceof Token) {
						continue;
					}

					pattern.lastIndex = 0;

					var match = pattern.exec(str),
					    delNum = 1;

					// Greedy patterns can override/remove up to two previously matched tokens
					if (!match && greedy && i != strarr.length - 1) {
						// Reconstruct the original text using the next two tokens
						var nextToken = strarr[i + 1].matchedStr || strarr[i + 1],
						    combStr = str + nextToken;

						if (i < strarr.length - 2) {
							combStr += strarr[i + 2].matchedStr || strarr[i + 2];
						}

						// Try the pattern again on the reconstructed text
						pattern.lastIndex = 0;
						match = pattern.exec(combStr);
						if (!match) {
							continue;
						}

						var from = match.index + (lookbehind ? match[1].length : 0);
						// To be a valid candidate, the new match has to start inside of str
						if (from >= str.length) {
							continue;
						}
						var to = match.index + match[0].length,
						    len = str.length + nextToken.length;

						// Number of tokens to delete and replace with the new match
						delNum = 3;

						if (to <= len) {
							if (strarr[i + 1].greedy) {
								continue;
							}
							delNum = 2;
							combStr = combStr.slice(0, len);
						}
						str = combStr;
					}

					if (!match) {
						continue;
					}

					if(lookbehind) {
						lookbehindLength = match[1].length;
					}

					var from = match.index + lookbehindLength,
					    match = match[0].slice(lookbehindLength),
					    to = from + match.length,
					    before = str.slice(0, from),
					    after = str.slice(to);

					var args = [i, delNum];

					if (before) {
						args.push(before);
					}

					var wrapped = new Token(token, inside? _.tokenize(match, inside) : match, alias, match, greedy);

					args.push(wrapped);

					if (after) {
						args.push(after);
					}

					Array.prototype.splice.apply(strarr, args);
				}
			}
		}

		return strarr;
	},

	hooks: {
		all: {},

		add: function (name, callback) {
			var hooks = _.hooks.all;

			hooks[name] = hooks[name] || [];

			hooks[name].push(callback);
		},

		run: function (name, env) {
			var callbacks = _.hooks.all[name];

			if (!callbacks || !callbacks.length) {
				return;
			}

			for (var i=0, callback; callback = callbacks[i++];) {
				callback(env);
			}
		}
	}
};

var Token = _.Token = function(type, content, alias, matchedStr, greedy) {
	this.type = type;
	this.content = content;
	this.alias = alias;
	// Copy of the full string this token was created from
	this.matchedStr = matchedStr || null;
	this.greedy = !!greedy;
};

Token.stringify = function(o, language, parent) {
	if (typeof o == 'string') {
		return o;
	}

	if (_.util.type(o) === 'Array') {
		return o.map(function(element) {
			return Token.stringify(element, language, o);
		}).join('');
	}

	var env = {
		type: o.type,
		content: Token.stringify(o.content, language, parent),
		tag: 'span',
		classes: ['token', o.type],
		attributes: {},
		language: language,
		parent: parent
	};

	if (env.type == 'comment') {
		env.attributes['spellcheck'] = 'true';
	}

	if (o.alias) {
		var aliases = _.util.type(o.alias) === 'Array' ? o.alias : [o.alias];
		Array.prototype.push.apply(env.classes, aliases);
	}

	_.hooks.run('wrap', env);

	var attributes = '';

	for (var name in env.attributes) {
		attributes += (attributes ? ' ' : '') + name + '="' + (env.attributes[name] || '') + '"';
	}

	return '<' + env.tag + ' class="' + env.classes.join(' ') + '" ' + attributes + '>' + env.content + '</' + env.tag + '>';

};

if (!_self.document) {
	if (!_self.addEventListener) {
		// in Node.js
		return _self.Prism;
	}
 	// In worker
	_self.addEventListener('message', function(evt) {
		var message = JSON.parse(evt.data),
		    lang = message.language,
		    code = message.code,
		    immediateClose = message.immediateClose;

		_self.postMessage(_.highlight(code, _.languages[lang], lang));
		if (immediateClose) {
			_self.close();
		}
	}, false);

	return _self.Prism;
}

//Get current script and highlight
var script = document.currentScript || [].slice.call(document.getElementsByTagName("script")).pop();

if (script) {
	_.filename = script.src;

	if (document.addEventListener && !script.hasAttribute('data-manual')) {
		if(document.readyState !== "loading") {
			requestAnimationFrame(_.highlightAll, 0);
		}
		else {
			document.addEventListener('DOMContentLoaded', _.highlightAll);
		}
	}
}

return _self.Prism;

})();

if (typeof module !== 'undefined' && module.exports) {
	module.exports = Prism;
}

// hack for components to work correctly in node.js
if (typeof global !== 'undefined') {
	global.Prism = Prism;
}


/* **********************************************
     Begin prism-markup.js
********************************************** */

Prism.languages.markup = {
	'comment': /<!--[\w\W]*?-->/,
	'prolog': /<\?[\w\W]+?\?>/,
	'doctype': /<!DOCTYPE[\w\W]+?>/,
	'cdata': /<!\[CDATA\[[\w\W]*?]]>/i,
	'tag': {
		pattern: /<\/?(?!\d)[^\s>\/=.$<]+(?:\s+[^\s>\/=]+(?:=(?:("|')(?:\\\1|\\?(?!\1)[\w\W])*\1|[^\s'">=]+))?)*\s*\/?>/i,
		inside: {
			'tag': {
				pattern: /^<\/?[^\s>\/]+/i,
				inside: {
					'punctuation': /^<\/?/,
					'namespace': /^[^\s>\/:]+:/
				}
			},
			'attr-value': {
				pattern: /=(?:('|")[\w\W]*?(\1)|[^\s>]+)/i,
				inside: {
					'punctuation': /[=>"']/
				}
			},
			'punctuation': /\/?>/,
			'attr-name': {
				pattern: /[^\s>\/]+/,
				inside: {
					'namespace': /^[^\s>\/:]+:/
				}
			}

		}
	},
	'entity': /&#?[\da-z]{1,8};/i
};

// Plugin to make entity title show the real entity, idea by Roman Komarov
Prism.hooks.add('wrap', function(env) {

	if (env.type === 'entity') {
		env.attributes['title'] = env.content.replace(/&amp;/, '&');
	}
});

Prism.languages.xml = Prism.languages.markup;
Prism.languages.html = Prism.languages.markup;
Prism.languages.mathml = Prism.languages.markup;
Prism.languages.svg = Prism.languages.markup;


/* **********************************************
     Begin prism-css.js
********************************************** */

Prism.languages.css = {
	'comment': /\/\*[\w\W]*?\*\//,
	'atrule': {
		pattern: /@[\w-]+?.*?(;|(?=\s*\{))/i,
		inside: {
			'rule': /@[\w-]+/
			// See rest below
		}
	},
	'url': /url\((?:(["'])(\\(?:\r\n|[\w\W])|(?!\1)[^\\\r\n])*\1|.*?)\)/i,
	'selector': /[^\{\}\s][^\{\};]*?(?=\s*\{)/,
	'string': /("|')(\\(?:\r\n|[\w\W])|(?!\1)[^\\\r\n])*\1/,
	'property': /(\b|\B)[\w-]+(?=\s*:)/i,
	'important': /\B!important\b/i,
	'function': /[-a-z0-9]+(?=\()/i,
	'punctuation': /[(){};:]/
};

Prism.languages.css['atrule'].inside.rest = Prism.util.clone(Prism.languages.css);

if (Prism.languages.markup) {
	Prism.languages.insertBefore('markup', 'tag', {
		'style': {
			pattern: /(<style[\w\W]*?>)[\w\W]*?(?=<\/style>)/i,
			lookbehind: true,
			inside: Prism.languages.css,
			alias: 'language-css'
		}
	});
	
	Prism.languages.insertBefore('inside', 'attr-value', {
		'style-attr': {
			pattern: /\s*style=("|').*?\1/i,
			inside: {
				'attr-name': {
					pattern: /^\s*style/i,
					inside: Prism.languages.markup.tag.inside
				},
				'punctuation': /^\s*=\s*['"]|['"]\s*$/,
				'attr-value': {
					pattern: /.+/i,
					inside: Prism.languages.css
				}
			},
			alias: 'language-css'
		}
	}, Prism.languages.markup.tag);
}

/* **********************************************
     Begin prism-clike.js
********************************************** */

Prism.languages.clike = {
	'comment': [
		{
			pattern: /(^|[^\\])\/\*[\w\W]*?\*\//,
			lookbehind: true
		},
		{
			pattern: /(^|[^\\:])\/\/.*/,
			lookbehind: true
		}
	],
	'string': {
		pattern: /(["'])(\\(?:\r\n|[\s\S])|(?!\1)[^\\\r\n])*\1/,
		greedy: true
	},
	'class-name': {
		pattern: /((?:\b(?:class|interface|extends|implements|trait|instanceof|new)\s+)|(?:catch\s+\())[a-z0-9_\.\\]+/i,
		lookbehind: true,
		inside: {
			punctuation: /(\.|\\)/
		}
	},
	'keyword': /\b(if|else|while|do|for|return|in|instanceof|function|new|try|throw|catch|finally|null|break|continue)\b/,
	'boolean': /\b(true|false)\b/,
	'function': /[a-z0-9_]+(?=\()/i,
	'number': /\b-?(?:0x[\da-f]+|\d*\.?\d+(?:e[+-]?\d+)?)\b/i,
	'operator': /--?|\+\+?|!=?=?|<=?|>=?|==?=?|&&?|\|\|?|\?|\*|\/|~|\^|%/,
	'punctuation': /[{}[\];(),.:]/
};


/* **********************************************
     Begin prism-javascript.js
********************************************** */

Prism.languages.javascript = Prism.languages.extend('clike', {
	'keyword': /\b(as|async|await|break|case|catch|class|const|continue|debugger|default|delete|do|else|enum|export|extends|finally|for|from|function|get|if|implements|import|in|instanceof|interface|let|new|null|of|package|private|protected|public|return|set|static|super|switch|this|throw|try|typeof|var|void|while|with|yield)\b/,
	'number': /\b-?(0x[\dA-Fa-f]+|0b[01]+|0o[0-7]+|\d*\.?\d+([Ee][+-]?\d+)?|NaN|Infinity)\b/,
	// Allow for all non-ASCII characters (See http://stackoverflow.com/a/2008444)
	'function': /[_$a-zA-Z\xA0-\uFFFF][_$a-zA-Z0-9\xA0-\uFFFF]*(?=\()/i
});

Prism.languages.insertBefore('javascript', 'keyword', {
	'regex': {
		pattern: /(^|[^/])\/(?!\/)(\[.+?]|\\.|[^/\\\r\n])+\/[gimyu]{0,5}(?=\s*($|[\r\n,.;})]))/,
		lookbehind: true,
		greedy: true
	}
});

Prism.languages.insertBefore('javascript', 'string', {
	'template-string': {
		pattern: /`(?:\\\\|\\?[^\\])*?`/,
		greedy: true,
		inside: {
			'interpolation': {
				pattern: /\$\{[^}]+\}/,
				inside: {
					'interpolation-punctuation': {
						pattern: /^\$\{|\}$/,
						alias: 'punctuation'
					},
					rest: Prism.languages.javascript
				}
			},
			'string': /[\s\S]+/
		}
	}
});

if (Prism.languages.markup) {
	Prism.languages.insertBefore('markup', 'tag', {
		'script': {
			pattern: /(<script[\w\W]*?>)[\w\W]*?(?=<\/script>)/i,
			lookbehind: true,
			inside: Prism.languages.javascript,
			alias: 'language-javascript'
		}
	});
}

Prism.languages.js = Prism.languages.javascript;

/* **********************************************
     Begin prism-file-highlight.js
********************************************** */

(function () {
	if (typeof self === 'undefined' || !self.Prism || !self.document || !document.querySelector) {
		return;
	}

	self.Prism.fileHighlight = function() {

		var Extensions = {
			'js': 'javascript',
			'py': 'python',
			'rb': 'ruby',
			'ps1': 'powershell',
			'psm1': 'powershell',
			'sh': 'bash',
			'bat': 'batch',
			'h': 'c',
			'tex': 'latex'
		};

		if(Array.prototype.forEach) { // Check to prevent error in IE8
			Array.prototype.slice.call(document.querySelectorAll('pre[data-src]')).forEach(function (pre) {
				var src = pre.getAttribute('data-src');

				var language, parent = pre;
				var lang = /\blang(?:uage)?-(?!\*)(\w+)\b/i;
				while (parent && !lang.test(parent.className)) {
					parent = parent.parentNode;
				}

				if (parent) {
					language = (pre.className.match(lang) || [, ''])[1];
				}

				if (!language) {
					var extension = (src.match(/\.(\w+)$/) || [, ''])[1];
					language = Extensions[extension] || extension;
				}

				var code = document.createElement('code');
				code.className = 'language-' + language;

				pre.textContent = '';

				code.textContent = 'Loading…';

				pre.appendChild(code);

				var xhr = new XMLHttpRequest();

				xhr.open('GET', src, true);

				xhr.onreadystatechange = function () {
					if (xhr.readyState == 4) {

						if (xhr.status < 400 && xhr.responseText) {
							code.textContent = xhr.responseText;

							Prism.highlightElement(code);
						}
						else if (xhr.status >= 400) {
							code.textContent = '✖ Error ' + xhr.status + ' while fetching file: ' + xhr.statusText;
						}
						else {
							code.textContent = '✖ Error: File does not exist or is empty';
						}
					}
				};

				xhr.send(null);
			});
		}

	};

	document.addEventListener('DOMContentLoaded', self.Prism.fileHighlight);

})();

/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(106)))

/***/ },

/***/ 126:
/***/ function(module, exports, __webpack_require__) {

module.exports={render:function (){with(this) {
  return _h('div', {
    staticClass: "pure-g"
  }, [_h('div', {
    staticClass: "pure-u-1"
  }, [_h('div', {
    staticClass: "pure-menu pure-menu-horizontal"
  }, [_h('ul', {
    staticClass: "pure-menu-list"
  }, [_h('li', {
    class: {
      'pure-menu-item': true, 'pure-menu-selected': content === 'demo'
    }
  }, [_h('a', {
    staticClass: "pure-menu-link",
    on: {
      "click": function($event) {
        content = 'demo'
      }
    }
  }, [_m(0), "\n                        Demo\n                    "])]), " ", _h('li', {
    class: {
      'pure-menu-item': true, 'pure-menu-selected': content === 'html'
    }
  }, [_h('a', {
    staticClass: "pure-menu-link",
    on: {
      "click": function($event) {
        content = 'html'
      }
    }
  }, [_m(1), "\n                        HTML\n                    "])]), " ", _h('li', {
    class: {
      'pure-menu-item': true, 'pure-menu-selected': content === 'js'
    }
  }, [_h('a', {
    staticClass: "pure-menu-link",
    on: {
      "click": function($event) {
        content = 'js'
      }
    }
  }, [_m(2), "\n                        JavaScript\n                    "])])])])]), " ", _h('div', {
    directives: [{
      name: "show",
      value: (content === 'demo'),
      expression: "content === 'demo'"
    }],
    staticClass: "pure-u-1"
  }, [_t("example")]), " ", _h('div', {
    directives: [{
      name: "show",
      value: (content === 'html'),
      expression: "content === 'html'"
    }],
    staticClass: "pure-u-1"
  }, [_h('code-block', {
    staticClass: "language-html"
  }, [_t("code-html")])]), " ", _h('div', {
    directives: [{
      name: "show",
      value: (content === 'js'),
      expression: "content === 'js'"
    }],
    staticClass: "pure-u-1"
  }, [_h('code-block', {
    staticClass: "language-javascript"
  }, [_t("code-js")])])])
}},staticRenderFns: [function (){with(this) {
  return _h('i', {
    staticClass: "icon-play"
  })
}},function (){with(this) {
  return _h('i', {
    staticClass: "icon-html5"
  })
}},function (){with(this) {
  return _h('i', {
    staticClass: "icon-code"
  })
}}]}
if (false) {
  module.hot.accept()
  if (module.hot.data) {
     require("vue-hot-reload-api").rerender("data-v-1", module.exports)
  }
}

/***/ },

/***/ 127:
/***/ function(module, exports, __webpack_require__) {

module.exports={render:function (){with(this) {
  return _h('div', {
    ref: "layout",
    attrs: {
      "id": "layout"
    }
  }, [_h('a', {
    ref: "menuLink",
    staticClass: "menu-link",
    attrs: {
      "href": "#menu",
      "id": "menuLink"
    }
  }, [_m(0)]), " ", _h('div', {
    ref: "menu",
    attrs: {
      "id": "menu"
    }
  }, [_h('div', {
    staticClass: "pure-menu"
  }, [_h('router-link', {
    staticClass: "pure-menu-heading",
    attrs: {
      "to": {
        name: 'home'
      }
    }
  }, ["Vee Validate"]), " ", _h('ul', {
    staticClass: "pure-menu-list"
  }, [_h('li', {
    staticClass: "pure-menu-item"
  }, [_h('router-link', {
    staticClass: "pure-menu-link",
    attrs: {
      "to": {
        name: 'home'
      }
    }
  }, ["Getting Started"])]), " ", _h('li', {
    staticClass: "pure-menu-item"
  }, [_h('router-link', {
    staticClass: "pure-menu-link",
    attrs: {
      "to": {
        name: 'home',
        hash: '#installation'
      }
    }
  }, ["Installation"])]), " ", _h('li', {
    staticClass: "pure-menu-item"
  }, [_h('router-link', {
    staticClass: "pure-menu-link",
    attrs: {
      "to": {
        name: 'home',
        hash: '#basic-example'
      }
    }
  }, ["Basic Example"])]), " ", _h('li', {
    staticClass: "pure-menu-item"
  }, [_h('router-link', {
    staticClass: "pure-menu-link",
    attrs: {
      "to": {
        name: 'home',
        hash: '#render-errors'
      }
    }
  }, ["Rendering Errors"])]), " ", _h('li', {
    staticClass: "pure-menu-item"
  }, [_h('router-link', {
    staticClass: "pure-menu-link",
    attrs: {
      "to": {
        name: 'examples'
      }
    }
  }, ["Examples"])]), " ", _h('li', {
    staticClass: "pure-menu-item"
  }, [_h('router-link', {
    staticClass: "pure-menu-link",
    attrs: {
      "to": {
        name: 'rules'
      }
    }
  }, ["Validation Rules"])]), " ", _h('li', {
    staticClass: "pure-menu-item"
  }, [_h('router-link', {
    staticClass: "pure-menu-link",
    attrs: {
      "to": {
        name: 'localization'
      }
    }
  }, ["Localization"])]), " ", _h('li', {
    staticClass: "pure-menu-item"
  }, [_h('router-link', {
    staticClass: "pure-menu-link",
    attrs: {
      "to": {
        name: 'api'
      }
    }
  }, ["API Reference"])]), " ", _h('li', {
    staticClass: "pure-menu-item"
  }, [_h('router-link', {
    staticClass: "pure-menu-link",
    attrs: {
      "to": {
        name: 'home',
        hash: '#configuration'
      }
    }
  }, ["Configuration"])])])]), " ", _m(1)]), " ", _h('div', {
    attrs: {
      "id": "main"
    }
  }, [_h('div', {
    staticClass: "header"
  }, [_h('h1', [_s($route.meta.title || 'Vee-Validate')]), " ", _h('h2', [_s($route.meta.subtitle)])]), " ", _h('div', {
    staticClass: "content"
  }, [_h('transition', {
    attrs: {
      "name": "fade",
      "mode": "out-in"
    }
  }, [_h('router-view')])])])])
}},staticRenderFns: [function (){with(this) {
  return _h('span')
}},function (){with(this) {
  return _h('div', {
    staticClass: "about flex-center"
  }, [_h('a', {
    attrs: {
      "target": "github",
      "href": "https://github.com/logaretm/vee-validate"
    }
  }, [_h('i', {
    staticClass: "icon-github"
  })])])
}}]}
if (false) {
  module.hot.accept()
  if (module.hot.data) {
     require("vue-hot-reload-api").rerender("data-v-4", module.exports)
  }
}

/***/ },

/***/ 128:
/***/ function(module, exports, __webpack_require__) {

module.exports={render:function (){with(this) {
  return _h('pre', [_h('code', {
    ref: "code"
  }, [_t("default")])])
}},staticRenderFns: []}
if (false) {
  module.hot.accept()
  if (module.hot.data) {
     require("vue-hot-reload-api").rerender("data-v-7", module.exports)
  }
}

/***/ },

/***/ 130:
/***/ function(module, exports, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_purecss_build_pure_css__ = __webpack_require__(112);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_purecss_build_pure_css___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_purecss_build_pure_css__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_prismjs_themes_prism_css__ = __webpack_require__(111);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_prismjs_themes_prism_css___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_prismjs_themes_prism_css__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_prismjs_plugins_show_language_prism_show_language_css__ = __webpack_require__(110);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_prismjs_plugins_show_language_prism_show_language_css___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_prismjs_plugins_show_language_prism_show_language_css__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_prismjs_plugins_line_numbers_prism_line_numbers_css__ = __webpack_require__(109);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_prismjs_plugins_line_numbers_prism_line_numbers_css___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_prismjs_plugins_line_numbers_prism_line_numbers_css__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_vue__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_vue___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_vue__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_moment__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_moment___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_5_moment__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_vue_router__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_vue_router___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_6_vue_router__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__vee_validate__ = __webpack_require__(108);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__vee_validate___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_7__vee_validate__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__components_CodeExample_vue__ = __webpack_require__(116);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__components_CodeExample_vue___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_8__components_CodeExample_vue__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__components_CodeBlock_vue__ = __webpack_require__(115);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__components_CodeBlock_vue___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_9__components_CodeBlock_vue__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__App_vue__ = __webpack_require__(114);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__App_vue___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_10__App_vue__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__routerConfig__ = __webpack_require__(107);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__sass_main_scss__ = __webpack_require__(113);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__sass_main_scss___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_12__sass_main_scss__);














__WEBPACK_IMPORTED_MODULE_7__vee_validate__["Validator"].installDateTimeValidators(__WEBPACK_IMPORTED_MODULE_5_moment___default.a);
__WEBPACK_IMPORTED_MODULE_4_vue___default.a.use(__WEBPACK_IMPORTED_MODULE_7__vee_validate___default.a);
__WEBPACK_IMPORTED_MODULE_4_vue___default.a.use(__WEBPACK_IMPORTED_MODULE_6_vue_router___default.a);
__WEBPACK_IMPORTED_MODULE_4_vue___default.a.component('code-example', __WEBPACK_IMPORTED_MODULE_8__components_CodeExample_vue___default.a);
__WEBPACK_IMPORTED_MODULE_4_vue___default.a.component('code-block', __WEBPACK_IMPORTED_MODULE_9__components_CodeBlock_vue___default.a);

var router = new __WEBPACK_IMPORTED_MODULE_6_vue_router___default.a(__WEBPACK_IMPORTED_MODULE_11__routerConfig__["a" /* default */]);

__WEBPACK_IMPORTED_MODULE_7__vee_validate__["Validator"].extend('verify_coupon', {
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

new __WEBPACK_IMPORTED_MODULE_4_vue___default.a({
    el: '#app',
    router: router,
    render: function render(h) {
        return h(__WEBPACK_IMPORTED_MODULE_10__App_vue___default.a);
    }
});

/***/ },

/***/ 132:
/***/ function(module, exports) {

/*
	MIT License http://www.opensource.org/licenses/mit-license.php
	Author Tobias Koppers @sokra
*/
// css base code, injected by the css-loader
module.exports = function() {
	var list = [];

	// return the list of modules as css string
	list.toString = function toString() {
		var result = [];
		for(var i = 0; i < this.length; i++) {
			var item = this[i];
			if(item[2]) {
				result.push("@media " + item[2] + "{" + item[1] + "}");
			} else {
				result.push(item[1]);
			}
		}
		return result.join("");
	};

	// import a list of modules into the list
	list.i = function(modules, mediaQuery) {
		if(typeof modules === "string")
			modules = [[null, modules, ""]];
		var alreadyImportedModules = {};
		for(var i = 0; i < this.length; i++) {
			var id = this[i][0];
			if(typeof id === "number")
				alreadyImportedModules[id] = true;
		}
		for(i = 0; i < modules.length; i++) {
			var item = modules[i];
			// skip already imported module
			// this implementation is not 100% perfect for weird media query combinations
			//  when a module is imported multiple times with different media queries.
			//  I hope this will never occur (Hey this way we have smaller bundles)
			if(typeof item[0] !== "number" || !alreadyImportedModules[item[0]]) {
				if(mediaQuery && !item[2]) {
					item[2] = mediaQuery;
				} else if(mediaQuery) {
					item[2] = "(" + item[2] + ") and (" + mediaQuery + ")";
				}
				list.push(item);
			}
		}
	};
	return list;
};


/***/ },

/***/ 133:
/***/ function(module, exports) {

/*
	MIT License http://www.opensource.org/licenses/mit-license.php
	Author Tobias Koppers @sokra
*/
var stylesInDom = {},
	memoize = function(fn) {
		var memo;
		return function () {
			if (typeof memo === "undefined") memo = fn.apply(this, arguments);
			return memo;
		};
	},
	isOldIE = memoize(function() {
		return /msie [6-9]\b/.test(window.navigator.userAgent.toLowerCase());
	}),
	getHeadElement = memoize(function () {
		return document.head || document.getElementsByTagName("head")[0];
	}),
	singletonElement = null,
	singletonCounter = 0,
	styleElementsInsertedAtTop = [];

module.exports = function(list, options) {
	if(typeof DEBUG !== "undefined" && DEBUG) {
		if(typeof document !== "object") throw new Error("The style-loader cannot be used in a non-browser environment");
	}

	options = options || {};
	// Force single-tag solution on IE6-9, which has a hard limit on the # of <style>
	// tags it will allow on a page
	if (typeof options.singleton === "undefined") options.singleton = isOldIE();

	// By default, add <style> tags to the bottom of <head>.
	if (typeof options.insertAt === "undefined") options.insertAt = "bottom";

	var styles = listToStyles(list);
	addStylesToDom(styles, options);

	return function update(newList) {
		var mayRemove = [];
		for(var i = 0; i < styles.length; i++) {
			var item = styles[i];
			var domStyle = stylesInDom[item.id];
			domStyle.refs--;
			mayRemove.push(domStyle);
		}
		if(newList) {
			var newStyles = listToStyles(newList);
			addStylesToDom(newStyles, options);
		}
		for(var i = 0; i < mayRemove.length; i++) {
			var domStyle = mayRemove[i];
			if(domStyle.refs === 0) {
				for(var j = 0; j < domStyle.parts.length; j++)
					domStyle.parts[j]();
				delete stylesInDom[domStyle.id];
			}
		}
	};
}

function addStylesToDom(styles, options) {
	for(var i = 0; i < styles.length; i++) {
		var item = styles[i];
		var domStyle = stylesInDom[item.id];
		if(domStyle) {
			domStyle.refs++;
			for(var j = 0; j < domStyle.parts.length; j++) {
				domStyle.parts[j](item.parts[j]);
			}
			for(; j < item.parts.length; j++) {
				domStyle.parts.push(addStyle(item.parts[j], options));
			}
		} else {
			var parts = [];
			for(var j = 0; j < item.parts.length; j++) {
				parts.push(addStyle(item.parts[j], options));
			}
			stylesInDom[item.id] = {id: item.id, refs: 1, parts: parts};
		}
	}
}

function listToStyles(list) {
	var styles = [];
	var newStyles = {};
	for(var i = 0; i < list.length; i++) {
		var item = list[i];
		var id = item[0];
		var css = item[1];
		var media = item[2];
		var sourceMap = item[3];
		var part = {css: css, media: media, sourceMap: sourceMap};
		if(!newStyles[id])
			styles.push(newStyles[id] = {id: id, parts: [part]});
		else
			newStyles[id].parts.push(part);
	}
	return styles;
}

function insertStyleElement(options, styleElement) {
	var head = getHeadElement();
	var lastStyleElementInsertedAtTop = styleElementsInsertedAtTop[styleElementsInsertedAtTop.length - 1];
	if (options.insertAt === "top") {
		if(!lastStyleElementInsertedAtTop) {
			head.insertBefore(styleElement, head.firstChild);
		} else if(lastStyleElementInsertedAtTop.nextSibling) {
			head.insertBefore(styleElement, lastStyleElementInsertedAtTop.nextSibling);
		} else {
			head.appendChild(styleElement);
		}
		styleElementsInsertedAtTop.push(styleElement);
	} else if (options.insertAt === "bottom") {
		head.appendChild(styleElement);
	} else {
		throw new Error("Invalid value for parameter 'insertAt'. Must be 'top' or 'bottom'.");
	}
}

function removeStyleElement(styleElement) {
	styleElement.parentNode.removeChild(styleElement);
	var idx = styleElementsInsertedAtTop.indexOf(styleElement);
	if(idx >= 0) {
		styleElementsInsertedAtTop.splice(idx, 1);
	}
}

function createStyleElement(options) {
	var styleElement = document.createElement("style");
	styleElement.type = "text/css";
	insertStyleElement(options, styleElement);
	return styleElement;
}

function createLinkElement(options) {
	var linkElement = document.createElement("link");
	linkElement.rel = "stylesheet";
	insertStyleElement(options, linkElement);
	return linkElement;
}

function addStyle(obj, options) {
	var styleElement, update, remove;

	if (options.singleton) {
		var styleIndex = singletonCounter++;
		styleElement = singletonElement || (singletonElement = createStyleElement(options));
		update = applyToSingletonTag.bind(null, styleElement, styleIndex, false);
		remove = applyToSingletonTag.bind(null, styleElement, styleIndex, true);
	} else if(obj.sourceMap &&
		typeof URL === "function" &&
		typeof URL.createObjectURL === "function" &&
		typeof URL.revokeObjectURL === "function" &&
		typeof Blob === "function" &&
		typeof btoa === "function") {
		styleElement = createLinkElement(options);
		update = updateLink.bind(null, styleElement);
		remove = function() {
			removeStyleElement(styleElement);
			if(styleElement.href)
				URL.revokeObjectURL(styleElement.href);
		};
	} else {
		styleElement = createStyleElement(options);
		update = applyToTag.bind(null, styleElement);
		remove = function() {
			removeStyleElement(styleElement);
		};
	}

	update(obj);

	return function updateStyle(newObj) {
		if(newObj) {
			if(newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap)
				return;
			update(obj = newObj);
		} else {
			remove();
		}
	};
}

var replaceText = (function () {
	var textStore = [];

	return function (index, replacement) {
		textStore[index] = replacement;
		return textStore.filter(Boolean).join('\n');
	};
})();

function applyToSingletonTag(styleElement, index, remove, obj) {
	var css = remove ? "" : obj.css;

	if (styleElement.styleSheet) {
		styleElement.styleSheet.cssText = replaceText(index, css);
	} else {
		var cssNode = document.createTextNode(css);
		var childNodes = styleElement.childNodes;
		if (childNodes[index]) styleElement.removeChild(childNodes[index]);
		if (childNodes.length) {
			styleElement.insertBefore(cssNode, childNodes[index]);
		} else {
			styleElement.appendChild(cssNode);
		}
	}
}

function applyToTag(styleElement, obj) {
	var css = obj.css;
	var media = obj.media;

	if(media) {
		styleElement.setAttribute("media", media)
	}

	if(styleElement.styleSheet) {
		styleElement.styleSheet.cssText = css;
	} else {
		while(styleElement.firstChild) {
			styleElement.removeChild(styleElement.firstChild);
		}
		styleElement.appendChild(document.createTextNode(css));
	}
}

function updateLink(linkElement, obj) {
	var css = obj.css;
	var sourceMap = obj.sourceMap;

	if(sourceMap) {
		// http://stackoverflow.com/a/26603875
		css += "\n/*# sourceMappingURL=data:application/json;base64," + btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))) + " */";
	}

	var blob = new Blob([css], { type: "text/css" });

	var oldSrc = linkElement.href;

	linkElement.href = URL.createObjectURL(blob);

	if(oldSrc)
		URL.revokeObjectURL(oldSrc);
}


/***/ }

},[130]);