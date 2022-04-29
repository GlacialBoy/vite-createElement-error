var __defProp = Object.defineProperty;
var __defProps = Object.defineProperties;
var __getOwnPropDescs = Object.getOwnPropertyDescriptors;
var __getOwnPropSymbols = Object.getOwnPropertySymbols;
var __hasOwnProp = Object.prototype.hasOwnProperty;
var __propIsEnum = Object.prototype.propertyIsEnumerable;
var __defNormalProp = (obj, key, value) => key in obj ? __defProp(obj, key, { enumerable: true, configurable: true, writable: true, value }) : obj[key] = value;
var __spreadValues = (a, b) => {
  for (var prop in b || (b = {}))
    if (__hasOwnProp.call(b, prop))
      __defNormalProp(a, prop, b[prop]);
  if (__getOwnPropSymbols)
    for (var prop of __getOwnPropSymbols(b)) {
      if (__propIsEnum.call(b, prop))
        __defNormalProp(a, prop, b[prop]);
    }
  return a;
};
var __spreadProps = (a, b) => __defProps(a, __getOwnPropDescs(b));
var __objRest = (source, exclude) => {
  var target = {};
  for (var prop in source)
    if (__hasOwnProp.call(source, prop) && exclude.indexOf(prop) < 0)
      target[prop] = source[prop];
  if (source != null && __getOwnPropSymbols)
    for (var prop of __getOwnPropSymbols(source)) {
      if (exclude.indexOf(prop) < 0 && __propIsEnum.call(source, prop))
        target[prop] = source[prop];
    }
  return target;
};
import * as React$c from "react";
import React__default, { isValidElement, PureComponent, Component } from "react";
var commonjsGlobal = typeof globalThis !== "undefined" ? globalThis : typeof window !== "undefined" ? window : typeof global !== "undefined" ? global : typeof self !== "undefined" ? self : {};
function getAugmentedNamespace(n) {
  if (n.__esModule)
    return n;
  var a = Object.defineProperty({}, "__esModule", { value: true });
  Object.keys(n).forEach(function(k) {
    var d = Object.getOwnPropertyDescriptor(n, k);
    Object.defineProperty(a, k, d.get ? d : {
      enumerable: true,
      get: function() {
        return n[k];
      }
    });
  });
  return a;
}
var lib$1 = {};
var propTypes = { exports: {} };
var ReactPropTypesSecret$1 = "SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED";
var ReactPropTypesSecret_1 = ReactPropTypesSecret$1;
var ReactPropTypesSecret = ReactPropTypesSecret_1;
function emptyFunction$2() {
}
function emptyFunctionWithReset() {
}
emptyFunctionWithReset.resetWarningCache = emptyFunction$2;
var factoryWithThrowingShims = function() {
  function shim(props, propName, componentName, location, propFullName, secret) {
    if (secret === ReactPropTypesSecret) {
      return;
    }
    var err = new Error("Calling PropTypes validators directly is not supported by the `prop-types` package. Use PropTypes.checkPropTypes() to call them. Read more at http://fb.me/use-check-prop-types");
    err.name = "Invariant Violation";
    throw err;
  }
  shim.isRequired = shim;
  function getShim() {
    return shim;
  }
  var ReactPropTypes = {
    array: shim,
    bigint: shim,
    bool: shim,
    func: shim,
    number: shim,
    object: shim,
    string: shim,
    symbol: shim,
    any: shim,
    arrayOf: getShim,
    element: shim,
    elementType: shim,
    instanceOf: getShim,
    node: shim,
    objectOf: getShim,
    oneOf: getShim,
    oneOfType: getShim,
    shape: getShim,
    exact: getShim,
    checkPropTypes: emptyFunctionWithReset,
    resetWarningCache: emptyFunction$2
  };
  ReactPropTypes.PropTypes = ReactPropTypes;
  return ReactPropTypes;
};
{
  propTypes.exports = factoryWithThrowingShims();
}
var PropTypes = propTypes.exports;
var util = {};
Object.defineProperty(util, "__esModule", {
  value: true
});
util.convertReactSVGDOMProperty = convertReactSVGDOMProperty;
util.startsWith = startsWith;
util.serializeAttrs = serializeAttrs;
util.getSVGFromSource = getSVGFromSource;
util.extractSVGProps = extractSVGProps;
function convertReactSVGDOMProperty(str) {
  return str.replace(/[-|:]([a-z])/g, function(g) {
    return g[1].toUpperCase();
  });
}
function startsWith(str, substring2) {
  return str.indexOf(substring2) === 0;
}
var DataPropPrefix = "data-";
function serializeAttrs(map2) {
  var ret = {};
  for (var prop, i = 0; i < map2.length; i++) {
    var key = map2[i].name;
    if (key == "class") {
      prop = "className";
    } else if (!startsWith(key, DataPropPrefix)) {
      prop = convertReactSVGDOMProperty(key);
    } else {
      prop = key;
    }
    ret[prop] = map2[i].value;
  }
  return ret;
}
function getSVGFromSource(src) {
  var svgContainer = document.createElement("div");
  svgContainer.innerHTML = src;
  var svg = svgContainer.firstElementChild;
  svg.remove ? svg.remove() : svgContainer.removeChild(svg);
  return svg;
}
function extractSVGProps(src) {
  var map2 = getSVGFromSource(src).attributes;
  return map2.length > 0 ? serializeAttrs(map2) : null;
}
Object.defineProperty(lib$1, "__esModule", {
  value: true
});
var _extends$l = Object.assign || function(target) {
  for (var i = 1; i < arguments.length; i++) {
    var source = arguments[i];
    for (var key in source) {
      if (Object.prototype.hasOwnProperty.call(source, key)) {
        target[key] = source[key];
      }
    }
  }
  return target;
};
var _createClass$8 = function() {
  function defineProperties(target, props) {
    for (var i = 0; i < props.length; i++) {
      var descriptor = props[i];
      descriptor.enumerable = descriptor.enumerable || false;
      descriptor.configurable = true;
      if ("value" in descriptor)
        descriptor.writable = true;
      Object.defineProperty(target, descriptor.key, descriptor);
    }
  }
  return function(Constructor, protoProps, staticProps) {
    if (protoProps)
      defineProperties(Constructor.prototype, protoProps);
    if (staticProps)
      defineProperties(Constructor, staticProps);
    return Constructor;
  };
}();
var _react$4 = React__default;
var _react2$4 = _interopRequireDefault$8(_react$4);
var _propTypes = propTypes.exports;
var _util = util;
function _interopRequireDefault$8(obj) {
  return obj && obj.__esModule ? obj : { default: obj };
}
function _objectWithoutProperties$2(obj, keys2) {
  var target = {};
  for (var i in obj) {
    if (keys2.indexOf(i) >= 0)
      continue;
    if (!Object.prototype.hasOwnProperty.call(obj, i))
      continue;
    target[i] = obj[i];
  }
  return target;
}
function _classCallCheck$a(instance, Constructor) {
  if (!(instance instanceof Constructor)) {
    throw new TypeError("Cannot call a class as a function");
  }
}
function _possibleConstructorReturn$a(self2, call) {
  if (!self2) {
    throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
  }
  return call && (typeof call === "object" || typeof call === "function") ? call : self2;
}
function _inherits$a(subClass, superClass) {
  if (typeof superClass !== "function" && superClass !== null) {
    throw new TypeError("Super expression must either be null or a function, not " + typeof superClass);
  }
  subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } });
  if (superClass)
    Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass;
}
var InlineSVG = function(_React$Component) {
  _inherits$a(InlineSVG2, _React$Component);
  function InlineSVG2() {
    _classCallCheck$a(this, InlineSVG2);
    return _possibleConstructorReturn$a(this, (InlineSVG2.__proto__ || Object.getPrototypeOf(InlineSVG2)).apply(this, arguments));
  }
  _createClass$8(InlineSVG2, [{
    key: "componentDidMount",
    value: function componentDidMount() {
      this.props.children;
    }
  }, {
    key: "render",
    value: function render3() {
      var Element = void 0, __html = void 0, svgProps = void 0;
      var _props = this.props, element = _props.element, raw = _props.raw, src = _props.src, otherProps = _objectWithoutProperties$2(_props, ["element", "raw", "src"]);
      if (raw === true) {
        Element = "svg";
        svgProps = (0, _util.extractSVGProps)(src);
        __html = (0, _util.getSVGFromSource)(src).innerHTML;
      }
      __html = __html || src;
      Element = Element || element;
      svgProps = svgProps || {};
      return _react2$4.default.createElement(Element, _extends$l({}, svgProps, otherProps, {
        src: null,
        children: null,
        dangerouslySetInnerHTML: { __html }
      }));
    }
  }]);
  return InlineSVG2;
}(_react2$4.default.Component);
var _default$3 = lib$1.default = InlineSVG;
InlineSVG.defaultProps = {
  element: "i",
  raw: false,
  src: ""
};
InlineSVG.propTypes = {
  src: _propTypes.string.isRequired,
  element: _propTypes.string,
  raw: _propTypes.bool
};
var lib = {};
var flattenNames$1 = {};
var freeGlobal$3 = typeof commonjsGlobal == "object" && commonjsGlobal && commonjsGlobal.Object === Object && commonjsGlobal;
var _freeGlobal = freeGlobal$3;
var freeGlobal$2 = _freeGlobal;
var freeSelf$1 = typeof self == "object" && self && self.Object === Object && self;
var root$a = freeGlobal$2 || freeSelf$1 || Function("return this")();
var _root = root$a;
var root$9 = _root;
var Symbol$8 = root$9.Symbol;
var _Symbol = Symbol$8;
var Symbol$7 = _Symbol;
var objectProto$u = Object.prototype;
var hasOwnProperty$q = objectProto$u.hasOwnProperty;
var nativeObjectToString$3 = objectProto$u.toString;
var symToStringTag$3 = Symbol$7 ? Symbol$7.toStringTag : void 0;
function getRawTag$2(value) {
  var isOwn = hasOwnProperty$q.call(value, symToStringTag$3), tag = value[symToStringTag$3];
  try {
    value[symToStringTag$3] = void 0;
    var unmasked = true;
  } catch (e) {
  }
  var result = nativeObjectToString$3.call(value);
  if (unmasked) {
    if (isOwn) {
      value[symToStringTag$3] = tag;
    } else {
      delete value[symToStringTag$3];
    }
  }
  return result;
}
var _getRawTag = getRawTag$2;
var objectProto$t = Object.prototype;
var nativeObjectToString$2 = objectProto$t.toString;
function objectToString$2(value) {
  return nativeObjectToString$2.call(value);
}
var _objectToString = objectToString$2;
var Symbol$6 = _Symbol, getRawTag$1 = _getRawTag, objectToString$1 = _objectToString;
var nullTag$1 = "[object Null]", undefinedTag$1 = "[object Undefined]";
var symToStringTag$2 = Symbol$6 ? Symbol$6.toStringTag : void 0;
function baseGetTag$8(value) {
  if (value == null) {
    return value === void 0 ? undefinedTag$1 : nullTag$1;
  }
  return symToStringTag$2 && symToStringTag$2 in Object(value) ? getRawTag$1(value) : objectToString$1(value);
}
var _baseGetTag = baseGetTag$8;
var isArray$d = Array.isArray;
var isArray_1 = isArray$d;
function isObjectLike$a(value) {
  return value != null && typeof value == "object";
}
var isObjectLike_1 = isObjectLike$a;
var baseGetTag$7 = _baseGetTag, isArray$c = isArray_1, isObjectLike$9 = isObjectLike_1;
var stringTag$6 = "[object String]";
function isString(value) {
  return typeof value == "string" || !isArray$c(value) && isObjectLike$9(value) && baseGetTag$7(value) == stringTag$6;
}
var isString_1 = isString;
function createBaseFor$2(fromRight) {
  return function(object, iteratee, keysFunc) {
    var index = -1, iterable = Object(object), props = keysFunc(object), length = props.length;
    while (length--) {
      var key = props[fromRight ? length : ++index];
      if (iteratee(iterable[key], key, iterable) === false) {
        break;
      }
    }
    return object;
  };
}
var _createBaseFor = createBaseFor$2;
var createBaseFor$1 = _createBaseFor;
var baseFor$3 = createBaseFor$1();
var _baseFor = baseFor$3;
function baseTimes$2(n, iteratee) {
  var index = -1, result = Array(n);
  while (++index < n) {
    result[index] = iteratee(index);
  }
  return result;
}
var _baseTimes = baseTimes$2;
var baseGetTag$6 = _baseGetTag, isObjectLike$8 = isObjectLike_1;
var argsTag$6 = "[object Arguments]";
function baseIsArguments$2(value) {
  return isObjectLike$8(value) && baseGetTag$6(value) == argsTag$6;
}
var _baseIsArguments = baseIsArguments$2;
var baseIsArguments$1 = _baseIsArguments, isObjectLike$7 = isObjectLike_1;
var objectProto$s = Object.prototype;
var hasOwnProperty$p = objectProto$s.hasOwnProperty;
var propertyIsEnumerable$3 = objectProto$s.propertyIsEnumerable;
var isArguments$4 = baseIsArguments$1(function() {
  return arguments;
}()) ? baseIsArguments$1 : function(value) {
  return isObjectLike$7(value) && hasOwnProperty$p.call(value, "callee") && !propertyIsEnumerable$3.call(value, "callee");
};
var isArguments_1 = isArguments$4;
var isBuffer$5 = { exports: {} };
function stubFalse$1() {
  return false;
}
var stubFalse_1 = stubFalse$1;
(function(module2, exports2) {
  var root2 = _root, stubFalse2 = stubFalse_1;
  var freeExports2 = exports2 && !exports2.nodeType && exports2;
  var freeModule2 = freeExports2 && true && module2 && !module2.nodeType && module2;
  var moduleExports2 = freeModule2 && freeModule2.exports === freeExports2;
  var Buffer3 = moduleExports2 ? root2.Buffer : void 0;
  var nativeIsBuffer2 = Buffer3 ? Buffer3.isBuffer : void 0;
  var isBuffer2 = nativeIsBuffer2 || stubFalse2;
  module2.exports = isBuffer2;
})(isBuffer$5, isBuffer$5.exports);
var MAX_SAFE_INTEGER$3 = 9007199254740991;
var reIsUint$1 = /^(?:0|[1-9]\d*)$/;
function isIndex$3(value, length) {
  var type = typeof value;
  length = length == null ? MAX_SAFE_INTEGER$3 : length;
  return !!length && (type == "number" || type != "symbol" && reIsUint$1.test(value)) && (value > -1 && value % 1 == 0 && value < length);
}
var _isIndex = isIndex$3;
var MAX_SAFE_INTEGER$2 = 9007199254740991;
function isLength$4(value) {
  return typeof value == "number" && value > -1 && value % 1 == 0 && value <= MAX_SAFE_INTEGER$2;
}
var isLength_1 = isLength$4;
var baseGetTag$5 = _baseGetTag, isLength$3 = isLength_1, isObjectLike$6 = isObjectLike_1;
var argsTag$5 = "[object Arguments]", arrayTag$4 = "[object Array]", boolTag$5 = "[object Boolean]", dateTag$5 = "[object Date]", errorTag$4 = "[object Error]", funcTag$4 = "[object Function]", mapTag$8 = "[object Map]", numberTag$5 = "[object Number]", objectTag$8 = "[object Object]", regexpTag$5 = "[object RegExp]", setTag$8 = "[object Set]", stringTag$5 = "[object String]", weakMapTag$4 = "[object WeakMap]";
var arrayBufferTag$5 = "[object ArrayBuffer]", dataViewTag$7 = "[object DataView]", float32Tag$3 = "[object Float32Array]", float64Tag$3 = "[object Float64Array]", int8Tag$3 = "[object Int8Array]", int16Tag$3 = "[object Int16Array]", int32Tag$3 = "[object Int32Array]", uint8Tag$3 = "[object Uint8Array]", uint8ClampedTag$3 = "[object Uint8ClampedArray]", uint16Tag$3 = "[object Uint16Array]", uint32Tag$3 = "[object Uint32Array]";
var typedArrayTags$1 = {};
typedArrayTags$1[float32Tag$3] = typedArrayTags$1[float64Tag$3] = typedArrayTags$1[int8Tag$3] = typedArrayTags$1[int16Tag$3] = typedArrayTags$1[int32Tag$3] = typedArrayTags$1[uint8Tag$3] = typedArrayTags$1[uint8ClampedTag$3] = typedArrayTags$1[uint16Tag$3] = typedArrayTags$1[uint32Tag$3] = true;
typedArrayTags$1[argsTag$5] = typedArrayTags$1[arrayTag$4] = typedArrayTags$1[arrayBufferTag$5] = typedArrayTags$1[boolTag$5] = typedArrayTags$1[dataViewTag$7] = typedArrayTags$1[dateTag$5] = typedArrayTags$1[errorTag$4] = typedArrayTags$1[funcTag$4] = typedArrayTags$1[mapTag$8] = typedArrayTags$1[numberTag$5] = typedArrayTags$1[objectTag$8] = typedArrayTags$1[regexpTag$5] = typedArrayTags$1[setTag$8] = typedArrayTags$1[stringTag$5] = typedArrayTags$1[weakMapTag$4] = false;
function baseIsTypedArray$2(value) {
  return isObjectLike$6(value) && isLength$3(value.length) && !!typedArrayTags$1[baseGetTag$5(value)];
}
var _baseIsTypedArray = baseIsTypedArray$2;
function baseUnary$4(func) {
  return function(value) {
    return func(value);
  };
}
var _baseUnary = baseUnary$4;
var _nodeUtil = { exports: {} };
(function(module2, exports2) {
  var freeGlobal2 = _freeGlobal;
  var freeExports2 = exports2 && !exports2.nodeType && exports2;
  var freeModule2 = freeExports2 && true && module2 && !module2.nodeType && module2;
  var moduleExports2 = freeModule2 && freeModule2.exports === freeExports2;
  var freeProcess2 = moduleExports2 && freeGlobal2.process;
  var nodeUtil2 = function() {
    try {
      var types = freeModule2 && freeModule2.require && freeModule2.require("util").types;
      if (types) {
        return types;
      }
      return freeProcess2 && freeProcess2.binding && freeProcess2.binding("util");
    } catch (e) {
    }
  }();
  module2.exports = nodeUtil2;
})(_nodeUtil, _nodeUtil.exports);
var baseIsTypedArray$1 = _baseIsTypedArray, baseUnary$3 = _baseUnary, nodeUtil$4 = _nodeUtil.exports;
var nodeIsTypedArray$1 = nodeUtil$4 && nodeUtil$4.isTypedArray;
var isTypedArray$4 = nodeIsTypedArray$1 ? baseUnary$3(nodeIsTypedArray$1) : baseIsTypedArray$1;
var isTypedArray_1 = isTypedArray$4;
var baseTimes$1 = _baseTimes, isArguments$3 = isArguments_1, isArray$b = isArray_1, isBuffer$4 = isBuffer$5.exports, isIndex$2 = _isIndex, isTypedArray$3 = isTypedArray_1;
var objectProto$r = Object.prototype;
var hasOwnProperty$o = objectProto$r.hasOwnProperty;
function arrayLikeKeys$3(value, inherited) {
  var isArr = isArray$b(value), isArg = !isArr && isArguments$3(value), isBuff = !isArr && !isArg && isBuffer$4(value), isType = !isArr && !isArg && !isBuff && isTypedArray$3(value), skipIndexes = isArr || isArg || isBuff || isType, result = skipIndexes ? baseTimes$1(value.length, String) : [], length = result.length;
  for (var key in value) {
    if ((inherited || hasOwnProperty$o.call(value, key)) && !(skipIndexes && (key == "length" || isBuff && (key == "offset" || key == "parent") || isType && (key == "buffer" || key == "byteLength" || key == "byteOffset") || isIndex$2(key, length)))) {
      result.push(key);
    }
  }
  return result;
}
var _arrayLikeKeys = arrayLikeKeys$3;
var objectProto$q = Object.prototype;
function isPrototype$4(value) {
  var Ctor = value && value.constructor, proto = typeof Ctor == "function" && Ctor.prototype || objectProto$q;
  return value === proto;
}
var _isPrototype = isPrototype$4;
function overArg$3(func, transform2) {
  return function(arg) {
    return func(transform2(arg));
  };
}
var _overArg = overArg$3;
var overArg$2 = _overArg;
var nativeKeys$3 = overArg$2(Object.keys, Object);
var _nativeKeys = nativeKeys$3;
var isPrototype$3 = _isPrototype, nativeKeys$2 = _nativeKeys;
var objectProto$p = Object.prototype;
var hasOwnProperty$n = objectProto$p.hasOwnProperty;
function baseKeys$2(object) {
  if (!isPrototype$3(object)) {
    return nativeKeys$2(object);
  }
  var result = [];
  for (var key in Object(object)) {
    if (hasOwnProperty$n.call(object, key) && key != "constructor") {
      result.push(key);
    }
  }
  return result;
}
var _baseKeys = baseKeys$2;
function isObject$7(value) {
  var type = typeof value;
  return value != null && (type == "object" || type == "function");
}
var isObject_1 = isObject$7;
var baseGetTag$4 = _baseGetTag, isObject$6 = isObject_1;
var asyncTag$1 = "[object AsyncFunction]", funcTag$3 = "[object Function]", genTag$2 = "[object GeneratorFunction]", proxyTag$1 = "[object Proxy]";
function isFunction$3(value) {
  if (!isObject$6(value)) {
    return false;
  }
  var tag = baseGetTag$4(value);
  return tag == funcTag$3 || tag == genTag$2 || tag == asyncTag$1 || tag == proxyTag$1;
}
var isFunction_1 = isFunction$3;
var isFunction$2 = isFunction_1, isLength$2 = isLength_1;
function isArrayLike$5(value) {
  return value != null && isLength$2(value.length) && !isFunction$2(value);
}
var isArrayLike_1 = isArrayLike$5;
var arrayLikeKeys$2 = _arrayLikeKeys, baseKeys$1 = _baseKeys, isArrayLike$4 = isArrayLike_1;
function keys$6(object) {
  return isArrayLike$4(object) ? arrayLikeKeys$2(object) : baseKeys$1(object);
}
var keys_1 = keys$6;
var baseFor$2 = _baseFor, keys$5 = keys_1;
function baseForOwn$3(object, iteratee) {
  return object && baseFor$2(object, iteratee, keys$5);
}
var _baseForOwn = baseForOwn$3;
function identity$3(value) {
  return value;
}
var identity_1 = identity$3;
var identity$2 = identity_1;
function castFunction$2(value) {
  return typeof value == "function" ? value : identity$2;
}
var _castFunction = castFunction$2;
var baseForOwn$2 = _baseForOwn, castFunction$1 = _castFunction;
function forOwn(object, iteratee) {
  return object && baseForOwn$2(object, castFunction$1(iteratee));
}
var forOwn_1 = forOwn;
var overArg$1 = _overArg;
var getPrototype$5 = overArg$1(Object.getPrototypeOf, Object);
var _getPrototype = getPrototype$5;
var baseGetTag$3 = _baseGetTag, getPrototype$4 = _getPrototype, isObjectLike$5 = isObjectLike_1;
var objectTag$7 = "[object Object]";
var funcProto$5 = Function.prototype, objectProto$o = Object.prototype;
var funcToString$5 = funcProto$5.toString;
var hasOwnProperty$m = objectProto$o.hasOwnProperty;
var objectCtorString$1 = funcToString$5.call(Object);
function isPlainObject$1(value) {
  if (!isObjectLike$5(value) || baseGetTag$3(value) != objectTag$7) {
    return false;
  }
  var proto = getPrototype$4(value);
  if (proto === null) {
    return true;
  }
  var Ctor = hasOwnProperty$m.call(proto, "constructor") && proto.constructor;
  return typeof Ctor == "function" && Ctor instanceof Ctor && funcToString$5.call(Ctor) == objectCtorString$1;
}
var isPlainObject_1 = isPlainObject$1;
function arrayMap$3(array, iteratee) {
  var index = -1, length = array == null ? 0 : array.length, result = Array(length);
  while (++index < length) {
    result[index] = iteratee(array[index], index, array);
  }
  return result;
}
var _arrayMap = arrayMap$3;
function listCacheClear$2() {
  this.__data__ = [];
  this.size = 0;
}
var _listCacheClear = listCacheClear$2;
function eq$4(value, other) {
  return value === other || value !== value && other !== other;
}
var eq_1 = eq$4;
var eq$3 = eq_1;
function assocIndexOf$5(array, key) {
  var length = array.length;
  while (length--) {
    if (eq$3(array[length][0], key)) {
      return length;
    }
  }
  return -1;
}
var _assocIndexOf = assocIndexOf$5;
var assocIndexOf$4 = _assocIndexOf;
var arrayProto$1 = Array.prototype;
var splice$1 = arrayProto$1.splice;
function listCacheDelete$2(key) {
  var data = this.__data__, index = assocIndexOf$4(data, key);
  if (index < 0) {
    return false;
  }
  var lastIndex = data.length - 1;
  if (index == lastIndex) {
    data.pop();
  } else {
    splice$1.call(data, index, 1);
  }
  --this.size;
  return true;
}
var _listCacheDelete = listCacheDelete$2;
var assocIndexOf$3 = _assocIndexOf;
function listCacheGet$2(key) {
  var data = this.__data__, index = assocIndexOf$3(data, key);
  return index < 0 ? void 0 : data[index][1];
}
var _listCacheGet = listCacheGet$2;
var assocIndexOf$2 = _assocIndexOf;
function listCacheHas$2(key) {
  return assocIndexOf$2(this.__data__, key) > -1;
}
var _listCacheHas = listCacheHas$2;
var assocIndexOf$1 = _assocIndexOf;
function listCacheSet$2(key, value) {
  var data = this.__data__, index = assocIndexOf$1(data, key);
  if (index < 0) {
    ++this.size;
    data.push([key, value]);
  } else {
    data[index][1] = value;
  }
  return this;
}
var _listCacheSet = listCacheSet$2;
var listCacheClear$1 = _listCacheClear, listCacheDelete$1 = _listCacheDelete, listCacheGet$1 = _listCacheGet, listCacheHas$1 = _listCacheHas, listCacheSet$1 = _listCacheSet;
function ListCache$5(entries) {
  var index = -1, length = entries == null ? 0 : entries.length;
  this.clear();
  while (++index < length) {
    var entry = entries[index];
    this.set(entry[0], entry[1]);
  }
}
ListCache$5.prototype.clear = listCacheClear$1;
ListCache$5.prototype["delete"] = listCacheDelete$1;
ListCache$5.prototype.get = listCacheGet$1;
ListCache$5.prototype.has = listCacheHas$1;
ListCache$5.prototype.set = listCacheSet$1;
var _ListCache = ListCache$5;
var ListCache$4 = _ListCache;
function stackClear$2() {
  this.__data__ = new ListCache$4();
  this.size = 0;
}
var _stackClear = stackClear$2;
function stackDelete$2(key) {
  var data = this.__data__, result = data["delete"](key);
  this.size = data.size;
  return result;
}
var _stackDelete = stackDelete$2;
function stackGet$2(key) {
  return this.__data__.get(key);
}
var _stackGet = stackGet$2;
function stackHas$2(key) {
  return this.__data__.has(key);
}
var _stackHas = stackHas$2;
var root$8 = _root;
var coreJsData$3 = root$8["__core-js_shared__"];
var _coreJsData = coreJsData$3;
var coreJsData$2 = _coreJsData;
var maskSrcKey$1 = function() {
  var uid = /[^.]+$/.exec(coreJsData$2 && coreJsData$2.keys && coreJsData$2.keys.IE_PROTO || "");
  return uid ? "Symbol(src)_1." + uid : "";
}();
function isMasked$2(func) {
  return !!maskSrcKey$1 && maskSrcKey$1 in func;
}
var _isMasked = isMasked$2;
var funcProto$4 = Function.prototype;
var funcToString$4 = funcProto$4.toString;
function toSource$3(func) {
  if (func != null) {
    try {
      return funcToString$4.call(func);
    } catch (e) {
    }
    try {
      return func + "";
    } catch (e) {
    }
  }
  return "";
}
var _toSource = toSource$3;
var isFunction$1 = isFunction_1, isMasked$1 = _isMasked, isObject$5 = isObject_1, toSource$2 = _toSource;
var reRegExpChar$1 = /[\\^$.*+?()[\]{}|]/g;
var reIsHostCtor$1 = /^\[object .+?Constructor\]$/;
var funcProto$3 = Function.prototype, objectProto$n = Object.prototype;
var funcToString$3 = funcProto$3.toString;
var hasOwnProperty$l = objectProto$n.hasOwnProperty;
var reIsNative$1 = RegExp("^" + funcToString$3.call(hasOwnProperty$l).replace(reRegExpChar$1, "\\$&").replace(/hasOwnProperty|(function).*?(?=\\\()| for .+?(?=\\\])/g, "$1.*?") + "$");
function baseIsNative$2(value) {
  if (!isObject$5(value) || isMasked$1(value)) {
    return false;
  }
  var pattern = isFunction$1(value) ? reIsNative$1 : reIsHostCtor$1;
  return pattern.test(toSource$2(value));
}
var _baseIsNative = baseIsNative$2;
function getValue$2(object, key) {
  return object == null ? void 0 : object[key];
}
var _getValue = getValue$2;
var baseIsNative$1 = _baseIsNative, getValue$1 = _getValue;
function getNative$8(object, key) {
  var value = getValue$1(object, key);
  return baseIsNative$1(value) ? value : void 0;
}
var _getNative = getNative$8;
var getNative$7 = _getNative, root$7 = _root;
var Map$i = getNative$7(root$7, "Map");
var _Map = Map$i;
var getNative$6 = _getNative;
var nativeCreate$6 = getNative$6(Object, "create");
var _nativeCreate = nativeCreate$6;
var nativeCreate$5 = _nativeCreate;
function hashClear$2() {
  this.__data__ = nativeCreate$5 ? nativeCreate$5(null) : {};
  this.size = 0;
}
var _hashClear = hashClear$2;
function hashDelete$2(key) {
  var result = this.has(key) && delete this.__data__[key];
  this.size -= result ? 1 : 0;
  return result;
}
var _hashDelete = hashDelete$2;
var nativeCreate$4 = _nativeCreate;
var HASH_UNDEFINED$5 = "__lodash_hash_undefined__";
var objectProto$m = Object.prototype;
var hasOwnProperty$k = objectProto$m.hasOwnProperty;
function hashGet$2(key) {
  var data = this.__data__;
  if (nativeCreate$4) {
    var result = data[key];
    return result === HASH_UNDEFINED$5 ? void 0 : result;
  }
  return hasOwnProperty$k.call(data, key) ? data[key] : void 0;
}
var _hashGet = hashGet$2;
var nativeCreate$3 = _nativeCreate;
var objectProto$l = Object.prototype;
var hasOwnProperty$j = objectProto$l.hasOwnProperty;
function hashHas$2(key) {
  var data = this.__data__;
  return nativeCreate$3 ? data[key] !== void 0 : hasOwnProperty$j.call(data, key);
}
var _hashHas = hashHas$2;
var nativeCreate$2 = _nativeCreate;
var HASH_UNDEFINED$4 = "__lodash_hash_undefined__";
function hashSet$2(key, value) {
  var data = this.__data__;
  this.size += this.has(key) ? 0 : 1;
  data[key] = nativeCreate$2 && value === void 0 ? HASH_UNDEFINED$4 : value;
  return this;
}
var _hashSet = hashSet$2;
var hashClear$1 = _hashClear, hashDelete$1 = _hashDelete, hashGet$1 = _hashGet, hashHas$1 = _hashHas, hashSet$1 = _hashSet;
function Hash$2(entries) {
  var index = -1, length = entries == null ? 0 : entries.length;
  this.clear();
  while (++index < length) {
    var entry = entries[index];
    this.set(entry[0], entry[1]);
  }
}
Hash$2.prototype.clear = hashClear$1;
Hash$2.prototype["delete"] = hashDelete$1;
Hash$2.prototype.get = hashGet$1;
Hash$2.prototype.has = hashHas$1;
Hash$2.prototype.set = hashSet$1;
var _Hash = Hash$2;
var Hash$1 = _Hash, ListCache$3 = _ListCache, Map$h = _Map;
function mapCacheClear$2() {
  this.size = 0;
  this.__data__ = {
    "hash": new Hash$1(),
    "map": new (Map$h || ListCache$3)(),
    "string": new Hash$1()
  };
}
var _mapCacheClear = mapCacheClear$2;
function isKeyable$2(value) {
  var type = typeof value;
  return type == "string" || type == "number" || type == "symbol" || type == "boolean" ? value !== "__proto__" : value === null;
}
var _isKeyable = isKeyable$2;
var isKeyable$1 = _isKeyable;
function getMapData$5(map2, key) {
  var data = map2.__data__;
  return isKeyable$1(key) ? data[typeof key == "string" ? "string" : "hash"] : data.map;
}
var _getMapData = getMapData$5;
var getMapData$4 = _getMapData;
function mapCacheDelete$2(key) {
  var result = getMapData$4(this, key)["delete"](key);
  this.size -= result ? 1 : 0;
  return result;
}
var _mapCacheDelete = mapCacheDelete$2;
var getMapData$3 = _getMapData;
function mapCacheGet$2(key) {
  return getMapData$3(this, key).get(key);
}
var _mapCacheGet = mapCacheGet$2;
var getMapData$2 = _getMapData;
function mapCacheHas$2(key) {
  return getMapData$2(this, key).has(key);
}
var _mapCacheHas = mapCacheHas$2;
var getMapData$1 = _getMapData;
function mapCacheSet$2(key, value) {
  var data = getMapData$1(this, key), size = data.size;
  data.set(key, value);
  this.size += data.size == size ? 0 : 1;
  return this;
}
var _mapCacheSet = mapCacheSet$2;
var mapCacheClear$1 = _mapCacheClear, mapCacheDelete$1 = _mapCacheDelete, mapCacheGet$1 = _mapCacheGet, mapCacheHas$1 = _mapCacheHas, mapCacheSet$1 = _mapCacheSet;
function MapCache$4(entries) {
  var index = -1, length = entries == null ? 0 : entries.length;
  this.clear();
  while (++index < length) {
    var entry = entries[index];
    this.set(entry[0], entry[1]);
  }
}
MapCache$4.prototype.clear = mapCacheClear$1;
MapCache$4.prototype["delete"] = mapCacheDelete$1;
MapCache$4.prototype.get = mapCacheGet$1;
MapCache$4.prototype.has = mapCacheHas$1;
MapCache$4.prototype.set = mapCacheSet$1;
var _MapCache = MapCache$4;
var ListCache$2 = _ListCache, Map$g = _Map, MapCache$3 = _MapCache;
var LARGE_ARRAY_SIZE$1 = 200;
function stackSet$2(key, value) {
  var data = this.__data__;
  if (data instanceof ListCache$2) {
    var pairs = data.__data__;
    if (!Map$g || pairs.length < LARGE_ARRAY_SIZE$1 - 1) {
      pairs.push([key, value]);
      this.size = ++data.size;
      return this;
    }
    data = this.__data__ = new MapCache$3(pairs);
  }
  data.set(key, value);
  this.size = data.size;
  return this;
}
var _stackSet = stackSet$2;
var ListCache$1 = _ListCache, stackClear$1 = _stackClear, stackDelete$1 = _stackDelete, stackGet$1 = _stackGet, stackHas$1 = _stackHas, stackSet$1 = _stackSet;
function Stack$5(entries) {
  var data = this.__data__ = new ListCache$1(entries);
  this.size = data.size;
}
Stack$5.prototype.clear = stackClear$1;
Stack$5.prototype["delete"] = stackDelete$1;
Stack$5.prototype.get = stackGet$1;
Stack$5.prototype.has = stackHas$1;
Stack$5.prototype.set = stackSet$1;
var _Stack = Stack$5;
var HASH_UNDEFINED$3 = "__lodash_hash_undefined__";
function setCacheAdd$2(value) {
  this.__data__.set(value, HASH_UNDEFINED$3);
  return this;
}
var _setCacheAdd = setCacheAdd$2;
function setCacheHas$2(value) {
  return this.__data__.has(value);
}
var _setCacheHas = setCacheHas$2;
var MapCache$2 = _MapCache, setCacheAdd$1 = _setCacheAdd, setCacheHas$1 = _setCacheHas;
function SetCache$2(values) {
  var index = -1, length = values == null ? 0 : values.length;
  this.__data__ = new MapCache$2();
  while (++index < length) {
    this.add(values[index]);
  }
}
SetCache$2.prototype.add = SetCache$2.prototype.push = setCacheAdd$1;
SetCache$2.prototype.has = setCacheHas$1;
var _SetCache = SetCache$2;
function arraySome$2(array, predicate) {
  var index = -1, length = array == null ? 0 : array.length;
  while (++index < length) {
    if (predicate(array[index], index, array)) {
      return true;
    }
  }
  return false;
}
var _arraySome = arraySome$2;
function cacheHas$2(cache, key) {
  return cache.has(key);
}
var _cacheHas = cacheHas$2;
var SetCache$1 = _SetCache, arraySome$1 = _arraySome, cacheHas$1 = _cacheHas;
var COMPARE_PARTIAL_FLAG$b = 1, COMPARE_UNORDERED_FLAG$7 = 2;
function equalArrays$3(array, other, bitmask, customizer, equalFunc, stack) {
  var isPartial = bitmask & COMPARE_PARTIAL_FLAG$b, arrLength = array.length, othLength = other.length;
  if (arrLength != othLength && !(isPartial && othLength > arrLength)) {
    return false;
  }
  var arrStacked = stack.get(array);
  var othStacked = stack.get(other);
  if (arrStacked && othStacked) {
    return arrStacked == other && othStacked == array;
  }
  var index = -1, result = true, seen = bitmask & COMPARE_UNORDERED_FLAG$7 ? new SetCache$1() : void 0;
  stack.set(array, other);
  stack.set(other, array);
  while (++index < arrLength) {
    var arrValue = array[index], othValue = other[index];
    if (customizer) {
      var compared = isPartial ? customizer(othValue, arrValue, index, other, array, stack) : customizer(arrValue, othValue, index, array, other, stack);
    }
    if (compared !== void 0) {
      if (compared) {
        continue;
      }
      result = false;
      break;
    }
    if (seen) {
      if (!arraySome$1(other, function(othValue2, othIndex) {
        if (!cacheHas$1(seen, othIndex) && (arrValue === othValue2 || equalFunc(arrValue, othValue2, bitmask, customizer, stack))) {
          return seen.push(othIndex);
        }
      })) {
        result = false;
        break;
      }
    } else if (!(arrValue === othValue || equalFunc(arrValue, othValue, bitmask, customizer, stack))) {
      result = false;
      break;
    }
  }
  stack["delete"](array);
  stack["delete"](other);
  return result;
}
var _equalArrays = equalArrays$3;
var root$6 = _root;
var Uint8Array$4 = root$6.Uint8Array;
var _Uint8Array = Uint8Array$4;
function mapToArray$2(map2) {
  var index = -1, result = Array(map2.size);
  map2.forEach(function(value, key) {
    result[++index] = [key, value];
  });
  return result;
}
var _mapToArray = mapToArray$2;
function setToArray$2(set) {
  var index = -1, result = Array(set.size);
  set.forEach(function(value) {
    result[++index] = value;
  });
  return result;
}
var _setToArray = setToArray$2;
var Symbol$5 = _Symbol, Uint8Array$3 = _Uint8Array, eq$2 = eq_1, equalArrays$2 = _equalArrays, mapToArray$1 = _mapToArray, setToArray$1 = _setToArray;
var COMPARE_PARTIAL_FLAG$a = 1, COMPARE_UNORDERED_FLAG$6 = 2;
var boolTag$4 = "[object Boolean]", dateTag$4 = "[object Date]", errorTag$3 = "[object Error]", mapTag$7 = "[object Map]", numberTag$4 = "[object Number]", regexpTag$4 = "[object RegExp]", setTag$7 = "[object Set]", stringTag$4 = "[object String]", symbolTag$5 = "[object Symbol]";
var arrayBufferTag$4 = "[object ArrayBuffer]", dataViewTag$6 = "[object DataView]";
var symbolProto$4 = Symbol$5 ? Symbol$5.prototype : void 0, symbolValueOf$2 = symbolProto$4 ? symbolProto$4.valueOf : void 0;
function equalByTag$2(object, other, tag, bitmask, customizer, equalFunc, stack) {
  switch (tag) {
    case dataViewTag$6:
      if (object.byteLength != other.byteLength || object.byteOffset != other.byteOffset) {
        return false;
      }
      object = object.buffer;
      other = other.buffer;
    case arrayBufferTag$4:
      if (object.byteLength != other.byteLength || !equalFunc(new Uint8Array$3(object), new Uint8Array$3(other))) {
        return false;
      }
      return true;
    case boolTag$4:
    case dateTag$4:
    case numberTag$4:
      return eq$2(+object, +other);
    case errorTag$3:
      return object.name == other.name && object.message == other.message;
    case regexpTag$4:
    case stringTag$4:
      return object == other + "";
    case mapTag$7:
      var convert = mapToArray$1;
    case setTag$7:
      var isPartial = bitmask & COMPARE_PARTIAL_FLAG$a;
      convert || (convert = setToArray$1);
      if (object.size != other.size && !isPartial) {
        return false;
      }
      var stacked = stack.get(object);
      if (stacked) {
        return stacked == other;
      }
      bitmask |= COMPARE_UNORDERED_FLAG$6;
      stack.set(object, other);
      var result = equalArrays$2(convert(object), convert(other), bitmask, customizer, equalFunc, stack);
      stack["delete"](object);
      return result;
    case symbolTag$5:
      if (symbolValueOf$2) {
        return symbolValueOf$2.call(object) == symbolValueOf$2.call(other);
      }
  }
  return false;
}
var _equalByTag = equalByTag$2;
function arrayPush$3(array, values) {
  var index = -1, length = values.length, offset = array.length;
  while (++index < length) {
    array[offset + index] = values[index];
  }
  return array;
}
var _arrayPush = arrayPush$3;
var arrayPush$2 = _arrayPush, isArray$a = isArray_1;
function baseGetAllKeys$3(object, keysFunc, symbolsFunc) {
  var result = keysFunc(object);
  return isArray$a(object) ? result : arrayPush$2(result, symbolsFunc(object));
}
var _baseGetAllKeys = baseGetAllKeys$3;
function arrayFilter$2(array, predicate) {
  var index = -1, length = array == null ? 0 : array.length, resIndex = 0, result = [];
  while (++index < length) {
    var value = array[index];
    if (predicate(value, index, array)) {
      result[resIndex++] = value;
    }
  }
  return result;
}
var _arrayFilter = arrayFilter$2;
function stubArray$3() {
  return [];
}
var stubArray_1 = stubArray$3;
var arrayFilter$1 = _arrayFilter, stubArray$2 = stubArray_1;
var objectProto$k = Object.prototype;
var propertyIsEnumerable$2 = objectProto$k.propertyIsEnumerable;
var nativeGetSymbols$2 = Object.getOwnPropertySymbols;
var getSymbols$5 = !nativeGetSymbols$2 ? stubArray$2 : function(object) {
  if (object == null) {
    return [];
  }
  object = Object(object);
  return arrayFilter$1(nativeGetSymbols$2(object), function(symbol) {
    return propertyIsEnumerable$2.call(object, symbol);
  });
};
var _getSymbols = getSymbols$5;
var baseGetAllKeys$2 = _baseGetAllKeys, getSymbols$4 = _getSymbols, keys$4 = keys_1;
function getAllKeys$3(object) {
  return baseGetAllKeys$2(object, keys$4, getSymbols$4);
}
var _getAllKeys = getAllKeys$3;
var getAllKeys$2 = _getAllKeys;
var COMPARE_PARTIAL_FLAG$9 = 1;
var objectProto$j = Object.prototype;
var hasOwnProperty$i = objectProto$j.hasOwnProperty;
function equalObjects$2(object, other, bitmask, customizer, equalFunc, stack) {
  var isPartial = bitmask & COMPARE_PARTIAL_FLAG$9, objProps = getAllKeys$2(object), objLength = objProps.length, othProps = getAllKeys$2(other), othLength = othProps.length;
  if (objLength != othLength && !isPartial) {
    return false;
  }
  var index = objLength;
  while (index--) {
    var key = objProps[index];
    if (!(isPartial ? key in other : hasOwnProperty$i.call(other, key))) {
      return false;
    }
  }
  var objStacked = stack.get(object);
  var othStacked = stack.get(other);
  if (objStacked && othStacked) {
    return objStacked == other && othStacked == object;
  }
  var result = true;
  stack.set(object, other);
  stack.set(other, object);
  var skipCtor = isPartial;
  while (++index < objLength) {
    key = objProps[index];
    var objValue = object[key], othValue = other[key];
    if (customizer) {
      var compared = isPartial ? customizer(othValue, objValue, key, other, object, stack) : customizer(objValue, othValue, key, object, other, stack);
    }
    if (!(compared === void 0 ? objValue === othValue || equalFunc(objValue, othValue, bitmask, customizer, stack) : compared)) {
      result = false;
      break;
    }
    skipCtor || (skipCtor = key == "constructor");
  }
  if (result && !skipCtor) {
    var objCtor = object.constructor, othCtor = other.constructor;
    if (objCtor != othCtor && ("constructor" in object && "constructor" in other) && !(typeof objCtor == "function" && objCtor instanceof objCtor && typeof othCtor == "function" && othCtor instanceof othCtor)) {
      result = false;
    }
  }
  stack["delete"](object);
  stack["delete"](other);
  return result;
}
var _equalObjects = equalObjects$2;
var getNative$5 = _getNative, root$5 = _root;
var DataView$3 = getNative$5(root$5, "DataView");
var _DataView = DataView$3;
var getNative$4 = _getNative, root$4 = _root;
var Promise$4 = getNative$4(root$4, "Promise");
var _Promise = Promise$4;
var getNative$3 = _getNative, root$3 = _root;
var Set$4 = getNative$3(root$3, "Set");
var _Set = Set$4;
var getNative$2 = _getNative, root$2 = _root;
var WeakMap$4 = getNative$2(root$2, "WeakMap");
var _WeakMap = WeakMap$4;
var DataView$2 = _DataView, Map$f = _Map, Promise$3 = _Promise, Set$3 = _Set, WeakMap$3 = _WeakMap, baseGetTag$2 = _baseGetTag, toSource$1 = _toSource;
var mapTag$6 = "[object Map]", objectTag$6 = "[object Object]", promiseTag$1 = "[object Promise]", setTag$6 = "[object Set]", weakMapTag$3 = "[object WeakMap]";
var dataViewTag$5 = "[object DataView]";
var dataViewCtorString$1 = toSource$1(DataView$2), mapCtorString$1 = toSource$1(Map$f), promiseCtorString$1 = toSource$1(Promise$3), setCtorString$1 = toSource$1(Set$3), weakMapCtorString$1 = toSource$1(WeakMap$3);
var getTag$6 = baseGetTag$2;
if (DataView$2 && getTag$6(new DataView$2(new ArrayBuffer(1))) != dataViewTag$5 || Map$f && getTag$6(new Map$f()) != mapTag$6 || Promise$3 && getTag$6(Promise$3.resolve()) != promiseTag$1 || Set$3 && getTag$6(new Set$3()) != setTag$6 || WeakMap$3 && getTag$6(new WeakMap$3()) != weakMapTag$3) {
  getTag$6 = function(value) {
    var result = baseGetTag$2(value), Ctor = result == objectTag$6 ? value.constructor : void 0, ctorString = Ctor ? toSource$1(Ctor) : "";
    if (ctorString) {
      switch (ctorString) {
        case dataViewCtorString$1:
          return dataViewTag$5;
        case mapCtorString$1:
          return mapTag$6;
        case promiseCtorString$1:
          return promiseTag$1;
        case setCtorString$1:
          return setTag$6;
        case weakMapCtorString$1:
          return weakMapTag$3;
      }
    }
    return result;
  };
}
var _getTag = getTag$6;
var Stack$4 = _Stack, equalArrays$1 = _equalArrays, equalByTag$1 = _equalByTag, equalObjects$1 = _equalObjects, getTag$5 = _getTag, isArray$9 = isArray_1, isBuffer$3 = isBuffer$5.exports, isTypedArray$2 = isTypedArray_1;
var COMPARE_PARTIAL_FLAG$8 = 1;
var argsTag$4 = "[object Arguments]", arrayTag$3 = "[object Array]", objectTag$5 = "[object Object]";
var objectProto$i = Object.prototype;
var hasOwnProperty$h = objectProto$i.hasOwnProperty;
function baseIsEqualDeep$2(object, other, bitmask, customizer, equalFunc, stack) {
  var objIsArr = isArray$9(object), othIsArr = isArray$9(other), objTag = objIsArr ? arrayTag$3 : getTag$5(object), othTag = othIsArr ? arrayTag$3 : getTag$5(other);
  objTag = objTag == argsTag$4 ? objectTag$5 : objTag;
  othTag = othTag == argsTag$4 ? objectTag$5 : othTag;
  var objIsObj = objTag == objectTag$5, othIsObj = othTag == objectTag$5, isSameTag = objTag == othTag;
  if (isSameTag && isBuffer$3(object)) {
    if (!isBuffer$3(other)) {
      return false;
    }
    objIsArr = true;
    objIsObj = false;
  }
  if (isSameTag && !objIsObj) {
    stack || (stack = new Stack$4());
    return objIsArr || isTypedArray$2(object) ? equalArrays$1(object, other, bitmask, customizer, equalFunc, stack) : equalByTag$1(object, other, objTag, bitmask, customizer, equalFunc, stack);
  }
  if (!(bitmask & COMPARE_PARTIAL_FLAG$8)) {
    var objIsWrapped = objIsObj && hasOwnProperty$h.call(object, "__wrapped__"), othIsWrapped = othIsObj && hasOwnProperty$h.call(other, "__wrapped__");
    if (objIsWrapped || othIsWrapped) {
      var objUnwrapped = objIsWrapped ? object.value() : object, othUnwrapped = othIsWrapped ? other.value() : other;
      stack || (stack = new Stack$4());
      return equalFunc(objUnwrapped, othUnwrapped, bitmask, customizer, stack);
    }
  }
  if (!isSameTag) {
    return false;
  }
  stack || (stack = new Stack$4());
  return equalObjects$1(object, other, bitmask, customizer, equalFunc, stack);
}
var _baseIsEqualDeep = baseIsEqualDeep$2;
var baseIsEqualDeep$1 = _baseIsEqualDeep, isObjectLike$4 = isObjectLike_1;
function baseIsEqual$3(value, other, bitmask, customizer, stack) {
  if (value === other) {
    return true;
  }
  if (value == null || other == null || !isObjectLike$4(value) && !isObjectLike$4(other)) {
    return value !== value && other !== other;
  }
  return baseIsEqualDeep$1(value, other, bitmask, customizer, baseIsEqual$3, stack);
}
var _baseIsEqual = baseIsEqual$3;
var Stack$3 = _Stack, baseIsEqual$2 = _baseIsEqual;
var COMPARE_PARTIAL_FLAG$7 = 1, COMPARE_UNORDERED_FLAG$5 = 2;
function baseIsMatch$2(object, source, matchData, customizer) {
  var index = matchData.length, length = index, noCustomizer = !customizer;
  if (object == null) {
    return !length;
  }
  object = Object(object);
  while (index--) {
    var data = matchData[index];
    if (noCustomizer && data[2] ? data[1] !== object[data[0]] : !(data[0] in object)) {
      return false;
    }
  }
  while (++index < length) {
    data = matchData[index];
    var key = data[0], objValue = object[key], srcValue = data[1];
    if (noCustomizer && data[2]) {
      if (objValue === void 0 && !(key in object)) {
        return false;
      }
    } else {
      var stack = new Stack$3();
      if (customizer) {
        var result = customizer(objValue, srcValue, key, object, source, stack);
      }
      if (!(result === void 0 ? baseIsEqual$2(srcValue, objValue, COMPARE_PARTIAL_FLAG$7 | COMPARE_UNORDERED_FLAG$5, customizer, stack) : result)) {
        return false;
      }
    }
  }
  return true;
}
var _baseIsMatch = baseIsMatch$2;
var isObject$4 = isObject_1;
function isStrictComparable$3(value) {
  return value === value && !isObject$4(value);
}
var _isStrictComparable = isStrictComparable$3;
var isStrictComparable$2 = _isStrictComparable, keys$3 = keys_1;
function getMatchData$2(object) {
  var result = keys$3(object), length = result.length;
  while (length--) {
    var key = result[length], value = object[key];
    result[length] = [key, value, isStrictComparable$2(value)];
  }
  return result;
}
var _getMatchData = getMatchData$2;
function matchesStrictComparable$3(key, srcValue) {
  return function(object) {
    if (object == null) {
      return false;
    }
    return object[key] === srcValue && (srcValue !== void 0 || key in Object(object));
  };
}
var _matchesStrictComparable = matchesStrictComparable$3;
var baseIsMatch$1 = _baseIsMatch, getMatchData$1 = _getMatchData, matchesStrictComparable$2 = _matchesStrictComparable;
function baseMatches$2(source) {
  var matchData = getMatchData$1(source);
  if (matchData.length == 1 && matchData[0][2]) {
    return matchesStrictComparable$2(matchData[0][0], matchData[0][1]);
  }
  return function(object) {
    return object === source || baseIsMatch$1(object, source, matchData);
  };
}
var _baseMatches = baseMatches$2;
var baseGetTag$1 = _baseGetTag, isObjectLike$3 = isObjectLike_1;
var symbolTag$4 = "[object Symbol]";
function isSymbol$4(value) {
  return typeof value == "symbol" || isObjectLike$3(value) && baseGetTag$1(value) == symbolTag$4;
}
var isSymbol_1 = isSymbol$4;
var isArray$8 = isArray_1, isSymbol$3 = isSymbol_1;
var reIsDeepProp$1 = /\.|\[(?:[^[\]]*|(["'])(?:(?!\1)[^\\]|\\.)*?\1)\]/, reIsPlainProp$1 = /^\w*$/;
function isKey$4(value, object) {
  if (isArray$8(value)) {
    return false;
  }
  var type = typeof value;
  if (type == "number" || type == "symbol" || type == "boolean" || value == null || isSymbol$3(value)) {
    return true;
  }
  return reIsPlainProp$1.test(value) || !reIsDeepProp$1.test(value) || object != null && value in Object(object);
}
var _isKey = isKey$4;
var MapCache$1 = _MapCache;
var FUNC_ERROR_TEXT$3 = "Expected a function";
function memoize$2(func, resolver) {
  if (typeof func != "function" || resolver != null && typeof resolver != "function") {
    throw new TypeError(FUNC_ERROR_TEXT$3);
  }
  var memoized = function() {
    var args = arguments, key = resolver ? resolver.apply(this, args) : args[0], cache = memoized.cache;
    if (cache.has(key)) {
      return cache.get(key);
    }
    var result = func.apply(this, args);
    memoized.cache = cache.set(key, result) || cache;
    return result;
  };
  memoized.cache = new (memoize$2.Cache || MapCache$1)();
  return memoized;
}
memoize$2.Cache = MapCache$1;
var memoize_1 = memoize$2;
var memoize$1 = memoize_1;
var MAX_MEMOIZE_SIZE$1 = 500;
function memoizeCapped$2(func) {
  var result = memoize$1(func, function(key) {
    if (cache.size === MAX_MEMOIZE_SIZE$1) {
      cache.clear();
    }
    return key;
  });
  var cache = result.cache;
  return result;
}
var _memoizeCapped = memoizeCapped$2;
var memoizeCapped$1 = _memoizeCapped;
var rePropName$1 = /[^.[\]]+|\[(?:(-?\d+(?:\.\d+)?)|(["'])((?:(?!\2)[^\\]|\\.)*?)\2)\]|(?=(?:\.|\[\])(?:\.|\[\]|$))/g;
var reEscapeChar$1 = /\\(\\)?/g;
var stringToPath$3 = memoizeCapped$1(function(string) {
  var result = [];
  if (string.charCodeAt(0) === 46) {
    result.push("");
  }
  string.replace(rePropName$1, function(match, number, quote, subString) {
    result.push(quote ? subString.replace(reEscapeChar$1, "$1") : number || match);
  });
  return result;
});
var _stringToPath = stringToPath$3;
var Symbol$4 = _Symbol, arrayMap$2 = _arrayMap, isArray$7 = isArray_1, isSymbol$2 = isSymbol_1;
var INFINITY$3 = 1 / 0;
var symbolProto$3 = Symbol$4 ? Symbol$4.prototype : void 0, symbolToString$1 = symbolProto$3 ? symbolProto$3.toString : void 0;
function baseToString$2(value) {
  if (typeof value == "string") {
    return value;
  }
  if (isArray$7(value)) {
    return arrayMap$2(value, baseToString$2) + "";
  }
  if (isSymbol$2(value)) {
    return symbolToString$1 ? symbolToString$1.call(value) : "";
  }
  var result = value + "";
  return result == "0" && 1 / value == -INFINITY$3 ? "-0" : result;
}
var _baseToString = baseToString$2;
var baseToString$1 = _baseToString;
function toString$2(value) {
  return value == null ? "" : baseToString$1(value);
}
var toString_1 = toString$2;
var isArray$6 = isArray_1, isKey$3 = _isKey, stringToPath$2 = _stringToPath, toString$1 = toString_1;
function castPath$3(value, object) {
  if (isArray$6(value)) {
    return value;
  }
  return isKey$3(value, object) ? [value] : stringToPath$2(toString$1(value));
}
var _castPath = castPath$3;
var isSymbol$1 = isSymbol_1;
var INFINITY$2 = 1 / 0;
function toKey$5(value) {
  if (typeof value == "string" || isSymbol$1(value)) {
    return value;
  }
  var result = value + "";
  return result == "0" && 1 / value == -INFINITY$2 ? "-0" : result;
}
var _toKey = toKey$5;
var castPath$2 = _castPath, toKey$4 = _toKey;
function baseGet$3(object, path) {
  path = castPath$2(path, object);
  var index = 0, length = path.length;
  while (object != null && index < length) {
    object = object[toKey$4(path[index++])];
  }
  return index && index == length ? object : void 0;
}
var _baseGet = baseGet$3;
var baseGet$2 = _baseGet;
function get$3(object, path, defaultValue) {
  var result = object == null ? void 0 : baseGet$2(object, path);
  return result === void 0 ? defaultValue : result;
}
var get_1 = get$3;
function baseHasIn$2(object, key) {
  return object != null && key in Object(object);
}
var _baseHasIn = baseHasIn$2;
var castPath$1 = _castPath, isArguments$2 = isArguments_1, isArray$5 = isArray_1, isIndex$1 = _isIndex, isLength$1 = isLength_1, toKey$3 = _toKey;
function hasPath$2(object, path, hasFunc) {
  path = castPath$1(path, object);
  var index = -1, length = path.length, result = false;
  while (++index < length) {
    var key = toKey$3(path[index]);
    if (!(result = object != null && hasFunc(object, key))) {
      break;
    }
    object = object[key];
  }
  if (result || ++index != length) {
    return result;
  }
  length = object == null ? 0 : object.length;
  return !!length && isLength$1(length) && isIndex$1(key, length) && (isArray$5(object) || isArguments$2(object));
}
var _hasPath = hasPath$2;
var baseHasIn$1 = _baseHasIn, hasPath$1 = _hasPath;
function hasIn$2(object, path) {
  return object != null && hasPath$1(object, path, baseHasIn$1);
}
var hasIn_1 = hasIn$2;
var baseIsEqual$1 = _baseIsEqual, get$2 = get_1, hasIn$1 = hasIn_1, isKey$2 = _isKey, isStrictComparable$1 = _isStrictComparable, matchesStrictComparable$1 = _matchesStrictComparable, toKey$2 = _toKey;
var COMPARE_PARTIAL_FLAG$6 = 1, COMPARE_UNORDERED_FLAG$4 = 2;
function baseMatchesProperty$2(path, srcValue) {
  if (isKey$2(path) && isStrictComparable$1(srcValue)) {
    return matchesStrictComparable$1(toKey$2(path), srcValue);
  }
  return function(object) {
    var objValue = get$2(object, path);
    return objValue === void 0 && objValue === srcValue ? hasIn$1(object, path) : baseIsEqual$1(srcValue, objValue, COMPARE_PARTIAL_FLAG$6 | COMPARE_UNORDERED_FLAG$4);
  };
}
var _baseMatchesProperty = baseMatchesProperty$2;
function baseProperty$2(key) {
  return function(object) {
    return object == null ? void 0 : object[key];
  };
}
var _baseProperty = baseProperty$2;
var baseGet$1 = _baseGet;
function basePropertyDeep$2(path) {
  return function(object) {
    return baseGet$1(object, path);
  };
}
var _basePropertyDeep = basePropertyDeep$2;
var baseProperty$1 = _baseProperty, basePropertyDeep$1 = _basePropertyDeep, isKey$1 = _isKey, toKey$1 = _toKey;
function property$2(path) {
  return isKey$1(path) ? baseProperty$1(toKey$1(path)) : basePropertyDeep$1(path);
}
var property_1 = property$2;
var baseMatches$1 = _baseMatches, baseMatchesProperty$1 = _baseMatchesProperty, identity$1 = identity_1, isArray$4 = isArray_1, property$1 = property_1;
function baseIteratee$2(value) {
  if (typeof value == "function") {
    return value;
  }
  if (value == null) {
    return identity$1;
  }
  if (typeof value == "object") {
    return isArray$4(value) ? baseMatchesProperty$1(value[0], value[1]) : baseMatches$1(value);
  }
  return property$1(value);
}
var _baseIteratee = baseIteratee$2;
var isArrayLike$3 = isArrayLike_1;
function createBaseEach$2(eachFunc, fromRight) {
  return function(collection, iteratee) {
    if (collection == null) {
      return collection;
    }
    if (!isArrayLike$3(collection)) {
      return eachFunc(collection, iteratee);
    }
    var length = collection.length, index = fromRight ? length : -1, iterable = Object(collection);
    while (fromRight ? index-- : ++index < length) {
      if (iteratee(iterable[index], index, iterable) === false) {
        break;
      }
    }
    return collection;
  };
}
var _createBaseEach = createBaseEach$2;
var baseForOwn$1 = _baseForOwn, createBaseEach$1 = _createBaseEach;
var baseEach$3 = createBaseEach$1(baseForOwn$1);
var _baseEach = baseEach$3;
var baseEach$2 = _baseEach, isArrayLike$2 = isArrayLike_1;
function baseMap$2(collection, iteratee) {
  var index = -1, result = isArrayLike$2(collection) ? Array(collection.length) : [];
  baseEach$2(collection, function(value, key, collection2) {
    result[++index] = iteratee(value, key, collection2);
  });
  return result;
}
var _baseMap = baseMap$2;
var arrayMap$1 = _arrayMap, baseIteratee$1 = _baseIteratee, baseMap$1 = _baseMap, isArray$3 = isArray_1;
function map$1(collection, iteratee) {
  var func = isArray$3(collection) ? arrayMap$1 : baseMap$1;
  return func(collection, baseIteratee$1(iteratee));
}
var map_1 = map$1;
Object.defineProperty(flattenNames$1, "__esModule", {
  value: true
});
flattenNames$1.flattenNames = void 0;
var _isString2 = isString_1;
var _isString3 = _interopRequireDefault$7(_isString2);
var _forOwn2$2 = forOwn_1;
var _forOwn3$2 = _interopRequireDefault$7(_forOwn2$2);
var _isPlainObject2 = isPlainObject_1;
var _isPlainObject3 = _interopRequireDefault$7(_isPlainObject2);
var _map2 = map_1;
var _map3 = _interopRequireDefault$7(_map2);
function _interopRequireDefault$7(obj) {
  return obj && obj.__esModule ? obj : { default: obj };
}
var flattenNames = flattenNames$1.flattenNames = function flattenNames2() {
  var things = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : [];
  var names = [];
  (0, _map3.default)(things, function(thing) {
    if (Array.isArray(thing)) {
      flattenNames2(thing).map(function(name) {
        return names.push(name);
      });
    } else if ((0, _isPlainObject3.default)(thing)) {
      (0, _forOwn3$2.default)(thing, function(value, key) {
        value === true && names.push(key);
        names.push(key + "-" + value);
      });
    } else if ((0, _isString3.default)(thing)) {
      names.push(thing);
    }
  });
  return names;
};
flattenNames$1.default = flattenNames;
var mergeClasses$1 = {};
function arrayEach$2(array, iteratee) {
  var index = -1, length = array == null ? 0 : array.length;
  while (++index < length) {
    if (iteratee(array[index], index, array) === false) {
      break;
    }
  }
  return array;
}
var _arrayEach = arrayEach$2;
var getNative$1 = _getNative;
var defineProperty$3 = function() {
  try {
    var func = getNative$1(Object, "defineProperty");
    func({}, "", {});
    return func;
  } catch (e) {
  }
}();
var _defineProperty$l = defineProperty$3;
var defineProperty$2 = _defineProperty$l;
function baseAssignValue$3(object, key, value) {
  if (key == "__proto__" && defineProperty$2) {
    defineProperty$2(object, key, {
      "configurable": true,
      "enumerable": true,
      "value": value,
      "writable": true
    });
  } else {
    object[key] = value;
  }
}
var _baseAssignValue = baseAssignValue$3;
var baseAssignValue$2 = _baseAssignValue, eq$1 = eq_1;
var objectProto$h = Object.prototype;
var hasOwnProperty$g = objectProto$h.hasOwnProperty;
function assignValue$3(object, key, value) {
  var objValue = object[key];
  if (!(hasOwnProperty$g.call(object, key) && eq$1(objValue, value)) || value === void 0 && !(key in object)) {
    baseAssignValue$2(object, key, value);
  }
}
var _assignValue = assignValue$3;
var assignValue$2 = _assignValue, baseAssignValue$1 = _baseAssignValue;
function copyObject$5(source, props, object, customizer) {
  var isNew = !object;
  object || (object = {});
  var index = -1, length = props.length;
  while (++index < length) {
    var key = props[index];
    var newValue = customizer ? customizer(object[key], source[key], key, object, source) : void 0;
    if (newValue === void 0) {
      newValue = source[key];
    }
    if (isNew) {
      baseAssignValue$1(object, key, newValue);
    } else {
      assignValue$2(object, key, newValue);
    }
  }
  return object;
}
var _copyObject = copyObject$5;
var copyObject$4 = _copyObject, keys$2 = keys_1;
function baseAssign$1(object, source) {
  return object && copyObject$4(source, keys$2(source), object);
}
var _baseAssign = baseAssign$1;
function nativeKeysIn$2(object) {
  var result = [];
  if (object != null) {
    for (var key in Object(object)) {
      result.push(key);
    }
  }
  return result;
}
var _nativeKeysIn = nativeKeysIn$2;
var isObject$3 = isObject_1, isPrototype$2 = _isPrototype, nativeKeysIn$1 = _nativeKeysIn;
var objectProto$g = Object.prototype;
var hasOwnProperty$f = objectProto$g.hasOwnProperty;
function baseKeysIn$2(object) {
  if (!isObject$3(object)) {
    return nativeKeysIn$1(object);
  }
  var isProto = isPrototype$2(object), result = [];
  for (var key in object) {
    if (!(key == "constructor" && (isProto || !hasOwnProperty$f.call(object, key)))) {
      result.push(key);
    }
  }
  return result;
}
var _baseKeysIn = baseKeysIn$2;
var arrayLikeKeys$1 = _arrayLikeKeys, baseKeysIn$1 = _baseKeysIn, isArrayLike$1 = isArrayLike_1;
function keysIn$4(object) {
  return isArrayLike$1(object) ? arrayLikeKeys$1(object, true) : baseKeysIn$1(object);
}
var keysIn_1 = keysIn$4;
var copyObject$3 = _copyObject, keysIn$3 = keysIn_1;
function baseAssignIn$1(object, source) {
  return object && copyObject$3(source, keysIn$3(source), object);
}
var _baseAssignIn = baseAssignIn$1;
var _cloneBuffer = { exports: {} };
(function(module2, exports2) {
  var root2 = _root;
  var freeExports2 = exports2 && !exports2.nodeType && exports2;
  var freeModule2 = freeExports2 && true && module2 && !module2.nodeType && module2;
  var moduleExports2 = freeModule2 && freeModule2.exports === freeExports2;
  var Buffer3 = moduleExports2 ? root2.Buffer : void 0, allocUnsafe2 = Buffer3 ? Buffer3.allocUnsafe : void 0;
  function cloneBuffer2(buffer, isDeep) {
    if (isDeep) {
      return buffer.slice();
    }
    var length = buffer.length, result = allocUnsafe2 ? allocUnsafe2(length) : new buffer.constructor(length);
    buffer.copy(result);
    return result;
  }
  module2.exports = cloneBuffer2;
})(_cloneBuffer, _cloneBuffer.exports);
function copyArray$2(source, array) {
  var index = -1, length = source.length;
  array || (array = Array(length));
  while (++index < length) {
    array[index] = source[index];
  }
  return array;
}
var _copyArray = copyArray$2;
var copyObject$2 = _copyObject, getSymbols$3 = _getSymbols;
function copySymbols$1(source, object) {
  return copyObject$2(source, getSymbols$3(source), object);
}
var _copySymbols = copySymbols$1;
var arrayPush$1 = _arrayPush, getPrototype$3 = _getPrototype, getSymbols$2 = _getSymbols, stubArray$1 = stubArray_1;
var nativeGetSymbols$1 = Object.getOwnPropertySymbols;
var getSymbolsIn$2 = !nativeGetSymbols$1 ? stubArray$1 : function(object) {
  var result = [];
  while (object) {
    arrayPush$1(result, getSymbols$2(object));
    object = getPrototype$3(object);
  }
  return result;
};
var _getSymbolsIn = getSymbolsIn$2;
var copyObject$1 = _copyObject, getSymbolsIn$1 = _getSymbolsIn;
function copySymbolsIn$1(source, object) {
  return copyObject$1(source, getSymbolsIn$1(source), object);
}
var _copySymbolsIn = copySymbolsIn$1;
var baseGetAllKeys$1 = _baseGetAllKeys, getSymbolsIn = _getSymbolsIn, keysIn$2 = keysIn_1;
function getAllKeysIn$1(object) {
  return baseGetAllKeys$1(object, keysIn$2, getSymbolsIn);
}
var _getAllKeysIn = getAllKeysIn$1;
var objectProto$f = Object.prototype;
var hasOwnProperty$e = objectProto$f.hasOwnProperty;
function initCloneArray$1(array) {
  var length = array.length, result = new array.constructor(length);
  if (length && typeof array[0] == "string" && hasOwnProperty$e.call(array, "index")) {
    result.index = array.index;
    result.input = array.input;
  }
  return result;
}
var _initCloneArray = initCloneArray$1;
var Uint8Array$2 = _Uint8Array;
function cloneArrayBuffer$4(arrayBuffer) {
  var result = new arrayBuffer.constructor(arrayBuffer.byteLength);
  new Uint8Array$2(result).set(new Uint8Array$2(arrayBuffer));
  return result;
}
var _cloneArrayBuffer = cloneArrayBuffer$4;
var cloneArrayBuffer$3 = _cloneArrayBuffer;
function cloneDataView$1(dataView, isDeep) {
  var buffer = isDeep ? cloneArrayBuffer$3(dataView.buffer) : dataView.buffer;
  return new dataView.constructor(buffer, dataView.byteOffset, dataView.byteLength);
}
var _cloneDataView = cloneDataView$1;
var reFlags = /\w*$/;
function cloneRegExp$1(regexp) {
  var result = new regexp.constructor(regexp.source, reFlags.exec(regexp));
  result.lastIndex = regexp.lastIndex;
  return result;
}
var _cloneRegExp = cloneRegExp$1;
var Symbol$3 = _Symbol;
var symbolProto$2 = Symbol$3 ? Symbol$3.prototype : void 0, symbolValueOf$1 = symbolProto$2 ? symbolProto$2.valueOf : void 0;
function cloneSymbol$1(symbol) {
  return symbolValueOf$1 ? Object(symbolValueOf$1.call(symbol)) : {};
}
var _cloneSymbol = cloneSymbol$1;
var cloneArrayBuffer$2 = _cloneArrayBuffer;
function cloneTypedArray$2(typedArray, isDeep) {
  var buffer = isDeep ? cloneArrayBuffer$2(typedArray.buffer) : typedArray.buffer;
  return new typedArray.constructor(buffer, typedArray.byteOffset, typedArray.length);
}
var _cloneTypedArray = cloneTypedArray$2;
var cloneArrayBuffer$1 = _cloneArrayBuffer, cloneDataView = _cloneDataView, cloneRegExp = _cloneRegExp, cloneSymbol = _cloneSymbol, cloneTypedArray$1 = _cloneTypedArray;
var boolTag$3 = "[object Boolean]", dateTag$3 = "[object Date]", mapTag$5 = "[object Map]", numberTag$3 = "[object Number]", regexpTag$3 = "[object RegExp]", setTag$5 = "[object Set]", stringTag$3 = "[object String]", symbolTag$3 = "[object Symbol]";
var arrayBufferTag$3 = "[object ArrayBuffer]", dataViewTag$4 = "[object DataView]", float32Tag$2 = "[object Float32Array]", float64Tag$2 = "[object Float64Array]", int8Tag$2 = "[object Int8Array]", int16Tag$2 = "[object Int16Array]", int32Tag$2 = "[object Int32Array]", uint8Tag$2 = "[object Uint8Array]", uint8ClampedTag$2 = "[object Uint8ClampedArray]", uint16Tag$2 = "[object Uint16Array]", uint32Tag$2 = "[object Uint32Array]";
function initCloneByTag$1(object, tag, isDeep) {
  var Ctor = object.constructor;
  switch (tag) {
    case arrayBufferTag$3:
      return cloneArrayBuffer$1(object);
    case boolTag$3:
    case dateTag$3:
      return new Ctor(+object);
    case dataViewTag$4:
      return cloneDataView(object, isDeep);
    case float32Tag$2:
    case float64Tag$2:
    case int8Tag$2:
    case int16Tag$2:
    case int32Tag$2:
    case uint8Tag$2:
    case uint8ClampedTag$2:
    case uint16Tag$2:
    case uint32Tag$2:
      return cloneTypedArray$1(object, isDeep);
    case mapTag$5:
      return new Ctor();
    case numberTag$3:
    case stringTag$3:
      return new Ctor(object);
    case regexpTag$3:
      return cloneRegExp(object);
    case setTag$5:
      return new Ctor();
    case symbolTag$3:
      return cloneSymbol(object);
  }
}
var _initCloneByTag = initCloneByTag$1;
var isObject$2 = isObject_1;
var objectCreate$1 = Object.create;
var baseCreate$3 = function() {
  function object() {
  }
  return function(proto) {
    if (!isObject$2(proto)) {
      return {};
    }
    if (objectCreate$1) {
      return objectCreate$1(proto);
    }
    object.prototype = proto;
    var result = new object();
    object.prototype = void 0;
    return result;
  };
}();
var _baseCreate = baseCreate$3;
var baseCreate$2 = _baseCreate, getPrototype$2 = _getPrototype, isPrototype$1 = _isPrototype;
function initCloneObject$2(object) {
  return typeof object.constructor == "function" && !isPrototype$1(object) ? baseCreate$2(getPrototype$2(object)) : {};
}
var _initCloneObject = initCloneObject$2;
var getTag$4 = _getTag, isObjectLike$2 = isObjectLike_1;
var mapTag$4 = "[object Map]";
function baseIsMap$1(value) {
  return isObjectLike$2(value) && getTag$4(value) == mapTag$4;
}
var _baseIsMap = baseIsMap$1;
var baseIsMap = _baseIsMap, baseUnary$2 = _baseUnary, nodeUtil$3 = _nodeUtil.exports;
var nodeIsMap = nodeUtil$3 && nodeUtil$3.isMap;
var isMap$1 = nodeIsMap ? baseUnary$2(nodeIsMap) : baseIsMap;
var isMap_1 = isMap$1;
var getTag$3 = _getTag, isObjectLike$1 = isObjectLike_1;
var setTag$4 = "[object Set]";
function baseIsSet$1(value) {
  return isObjectLike$1(value) && getTag$3(value) == setTag$4;
}
var _baseIsSet = baseIsSet$1;
var baseIsSet = _baseIsSet, baseUnary$1 = _baseUnary, nodeUtil$2 = _nodeUtil.exports;
var nodeIsSet = nodeUtil$2 && nodeUtil$2.isSet;
var isSet$1 = nodeIsSet ? baseUnary$1(nodeIsSet) : baseIsSet;
var isSet_1 = isSet$1;
var Stack$2 = _Stack, arrayEach$1 = _arrayEach, assignValue$1 = _assignValue, baseAssign = _baseAssign, baseAssignIn = _baseAssignIn, cloneBuffer$1 = _cloneBuffer.exports, copyArray$1 = _copyArray, copySymbols = _copySymbols, copySymbolsIn = _copySymbolsIn, getAllKeys$1 = _getAllKeys, getAllKeysIn = _getAllKeysIn, getTag$2 = _getTag, initCloneArray = _initCloneArray, initCloneByTag = _initCloneByTag, initCloneObject$1 = _initCloneObject, isArray$2 = isArray_1, isBuffer$2 = isBuffer$5.exports, isMap = isMap_1, isObject$1 = isObject_1, isSet = isSet_1, keys$1 = keys_1, keysIn$1 = keysIn_1;
var CLONE_DEEP_FLAG$1 = 1, CLONE_FLAT_FLAG = 2, CLONE_SYMBOLS_FLAG$1 = 4;
var argsTag$3 = "[object Arguments]", arrayTag$2 = "[object Array]", boolTag$2 = "[object Boolean]", dateTag$2 = "[object Date]", errorTag$2 = "[object Error]", funcTag$2 = "[object Function]", genTag$1 = "[object GeneratorFunction]", mapTag$3 = "[object Map]", numberTag$2 = "[object Number]", objectTag$4 = "[object Object]", regexpTag$2 = "[object RegExp]", setTag$3 = "[object Set]", stringTag$2 = "[object String]", symbolTag$2 = "[object Symbol]", weakMapTag$2 = "[object WeakMap]";
var arrayBufferTag$2 = "[object ArrayBuffer]", dataViewTag$3 = "[object DataView]", float32Tag$1 = "[object Float32Array]", float64Tag$1 = "[object Float64Array]", int8Tag$1 = "[object Int8Array]", int16Tag$1 = "[object Int16Array]", int32Tag$1 = "[object Int32Array]", uint8Tag$1 = "[object Uint8Array]", uint8ClampedTag$1 = "[object Uint8ClampedArray]", uint16Tag$1 = "[object Uint16Array]", uint32Tag$1 = "[object Uint32Array]";
var cloneableTags = {};
cloneableTags[argsTag$3] = cloneableTags[arrayTag$2] = cloneableTags[arrayBufferTag$2] = cloneableTags[dataViewTag$3] = cloneableTags[boolTag$2] = cloneableTags[dateTag$2] = cloneableTags[float32Tag$1] = cloneableTags[float64Tag$1] = cloneableTags[int8Tag$1] = cloneableTags[int16Tag$1] = cloneableTags[int32Tag$1] = cloneableTags[mapTag$3] = cloneableTags[numberTag$2] = cloneableTags[objectTag$4] = cloneableTags[regexpTag$2] = cloneableTags[setTag$3] = cloneableTags[stringTag$2] = cloneableTags[symbolTag$2] = cloneableTags[uint8Tag$1] = cloneableTags[uint8ClampedTag$1] = cloneableTags[uint16Tag$1] = cloneableTags[uint32Tag$1] = true;
cloneableTags[errorTag$2] = cloneableTags[funcTag$2] = cloneableTags[weakMapTag$2] = false;
function baseClone$1(value, bitmask, customizer, key, object, stack) {
  var result, isDeep = bitmask & CLONE_DEEP_FLAG$1, isFlat = bitmask & CLONE_FLAT_FLAG, isFull = bitmask & CLONE_SYMBOLS_FLAG$1;
  if (customizer) {
    result = object ? customizer(value, key, object, stack) : customizer(value);
  }
  if (result !== void 0) {
    return result;
  }
  if (!isObject$1(value)) {
    return value;
  }
  var isArr = isArray$2(value);
  if (isArr) {
    result = initCloneArray(value);
    if (!isDeep) {
      return copyArray$1(value, result);
    }
  } else {
    var tag = getTag$2(value), isFunc = tag == funcTag$2 || tag == genTag$1;
    if (isBuffer$2(value)) {
      return cloneBuffer$1(value, isDeep);
    }
    if (tag == objectTag$4 || tag == argsTag$3 || isFunc && !object) {
      result = isFlat || isFunc ? {} : initCloneObject$1(value);
      if (!isDeep) {
        return isFlat ? copySymbolsIn(value, baseAssignIn(result, value)) : copySymbols(value, baseAssign(result, value));
      }
    } else {
      if (!cloneableTags[tag]) {
        return object ? value : {};
      }
      result = initCloneByTag(value, tag, isDeep);
    }
  }
  stack || (stack = new Stack$2());
  var stacked = stack.get(value);
  if (stacked) {
    return stacked;
  }
  stack.set(value, result);
  if (isSet(value)) {
    value.forEach(function(subValue) {
      result.add(baseClone$1(subValue, bitmask, customizer, subValue, value, stack));
    });
  } else if (isMap(value)) {
    value.forEach(function(subValue, key2) {
      result.set(key2, baseClone$1(subValue, bitmask, customizer, key2, value, stack));
    });
  }
  var keysFunc = isFull ? isFlat ? getAllKeysIn : getAllKeys$1 : isFlat ? keysIn$1 : keys$1;
  var props = isArr ? void 0 : keysFunc(value);
  arrayEach$1(props || value, function(subValue, key2) {
    if (props) {
      key2 = subValue;
      subValue = value[key2];
    }
    assignValue$1(result, key2, baseClone$1(subValue, bitmask, customizer, key2, value, stack));
  });
  return result;
}
var _baseClone = baseClone$1;
var baseClone = _baseClone;
var CLONE_DEEP_FLAG = 1, CLONE_SYMBOLS_FLAG = 4;
function cloneDeep(value) {
  return baseClone(value, CLONE_DEEP_FLAG | CLONE_SYMBOLS_FLAG);
}
var cloneDeep_1 = cloneDeep;
Object.defineProperty(mergeClasses$1, "__esModule", {
  value: true
});
mergeClasses$1.mergeClasses = void 0;
var _forOwn2$1 = forOwn_1;
var _forOwn3$1 = _interopRequireDefault$6(_forOwn2$1);
var _cloneDeep2 = cloneDeep_1;
var _cloneDeep3 = _interopRequireDefault$6(_cloneDeep2);
var _extends$k = Object.assign || function(target) {
  for (var i = 1; i < arguments.length; i++) {
    var source = arguments[i];
    for (var key in source) {
      if (Object.prototype.hasOwnProperty.call(source, key)) {
        target[key] = source[key];
      }
    }
  }
  return target;
};
function _interopRequireDefault$6(obj) {
  return obj && obj.__esModule ? obj : { default: obj };
}
var mergeClasses = mergeClasses$1.mergeClasses = function mergeClasses2(classes) {
  var activeNames = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : [];
  var styles = classes.default && (0, _cloneDeep3.default)(classes.default) || {};
  activeNames.map(function(name) {
    var toMerge = classes[name];
    if (toMerge) {
      (0, _forOwn3$1.default)(toMerge, function(value, key) {
        if (!styles[key]) {
          styles[key] = {};
        }
        styles[key] = _extends$k({}, styles[key], toMerge[key]);
      });
    }
    return name;
  });
  return styles;
};
mergeClasses$1.default = mergeClasses;
var autoprefix$1 = {};
Object.defineProperty(autoprefix$1, "__esModule", {
  value: true
});
autoprefix$1.autoprefix = void 0;
var _forOwn2 = forOwn_1;
var _forOwn3 = _interopRequireDefault$5(_forOwn2);
var _extends$j = Object.assign || function(target) {
  for (var i = 1; i < arguments.length; i++) {
    var source = arguments[i];
    for (var key in source) {
      if (Object.prototype.hasOwnProperty.call(source, key)) {
        target[key] = source[key];
      }
    }
  }
  return target;
};
function _interopRequireDefault$5(obj) {
  return obj && obj.__esModule ? obj : { default: obj };
}
var transforms = {
  borderRadius: function borderRadius(value) {
    return {
      msBorderRadius: value,
      MozBorderRadius: value,
      OBorderRadius: value,
      WebkitBorderRadius: value,
      borderRadius: value
    };
  },
  boxShadow: function boxShadow(value) {
    return {
      msBoxShadow: value,
      MozBoxShadow: value,
      OBoxShadow: value,
      WebkitBoxShadow: value,
      boxShadow: value
    };
  },
  userSelect: function userSelect(value) {
    return {
      WebkitTouchCallout: value,
      KhtmlUserSelect: value,
      MozUserSelect: value,
      msUserSelect: value,
      WebkitUserSelect: value,
      userSelect: value
    };
  },
  flex: function flex(value) {
    return {
      WebkitBoxFlex: value,
      MozBoxFlex: value,
      WebkitFlex: value,
      msFlex: value,
      flex: value
    };
  },
  flexBasis: function flexBasis(value) {
    return {
      WebkitFlexBasis: value,
      flexBasis: value
    };
  },
  justifyContent: function justifyContent(value) {
    return {
      WebkitJustifyContent: value,
      justifyContent: value
    };
  },
  transition: function transition(value) {
    return {
      msTransition: value,
      MozTransition: value,
      OTransition: value,
      WebkitTransition: value,
      transition: value
    };
  },
  transform: function transform(value) {
    return {
      msTransform: value,
      MozTransform: value,
      OTransform: value,
      WebkitTransform: value,
      transform: value
    };
  },
  absolute: function absolute(value) {
    var direction = value && value.split(" ");
    return {
      position: "absolute",
      top: direction && direction[0],
      right: direction && direction[1],
      bottom: direction && direction[2],
      left: direction && direction[3]
    };
  },
  extend: function extend(name, otherElementStyles) {
    var otherStyle = otherElementStyles[name];
    if (otherStyle) {
      return otherStyle;
    }
    return {
      "extend": name
    };
  }
};
var autoprefix = autoprefix$1.autoprefix = function autoprefix2(elements) {
  var prefixed = {};
  (0, _forOwn3.default)(elements, function(styles, element) {
    var expanded = {};
    (0, _forOwn3.default)(styles, function(value, key) {
      var transform2 = transforms[key];
      if (transform2) {
        expanded = _extends$j({}, expanded, transform2(value));
      } else {
        expanded[key] = value;
      }
    });
    prefixed[element] = expanded;
  });
  return prefixed;
};
autoprefix$1.default = autoprefix;
var hover$1 = {};
Object.defineProperty(hover$1, "__esModule", {
  value: true
});
hover$1.hover = void 0;
var _extends$i = Object.assign || function(target) {
  for (var i = 1; i < arguments.length; i++) {
    var source = arguments[i];
    for (var key in source) {
      if (Object.prototype.hasOwnProperty.call(source, key)) {
        target[key] = source[key];
      }
    }
  }
  return target;
};
var _react$3 = React__default;
var _react2$3 = _interopRequireDefault$4(_react$3);
function _interopRequireDefault$4(obj) {
  return obj && obj.__esModule ? obj : { default: obj };
}
function _classCallCheck$9(instance, Constructor) {
  if (!(instance instanceof Constructor)) {
    throw new TypeError("Cannot call a class as a function");
  }
}
function _possibleConstructorReturn$9(self2, call) {
  if (!self2) {
    throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
  }
  return call && (typeof call === "object" || typeof call === "function") ? call : self2;
}
function _inherits$9(subClass, superClass) {
  if (typeof superClass !== "function" && superClass !== null) {
    throw new TypeError("Super expression must either be null or a function, not " + typeof superClass);
  }
  subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } });
  if (superClass)
    Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass;
}
var hover = hover$1.hover = function hover2(Component2) {
  var Span = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : "span";
  return function(_React$Component) {
    _inherits$9(Hover, _React$Component);
    function Hover() {
      var _ref;
      var _temp, _this, _ret;
      _classCallCheck$9(this, Hover);
      for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
        args[_key] = arguments[_key];
      }
      return _ret = (_temp = (_this = _possibleConstructorReturn$9(this, (_ref = Hover.__proto__ || Object.getPrototypeOf(Hover)).call.apply(_ref, [this].concat(args))), _this), _this.state = { hover: false }, _this.handleMouseOver = function() {
        return _this.setState({ hover: true });
      }, _this.handleMouseOut = function() {
        return _this.setState({ hover: false });
      }, _this.render = function() {
        return _react2$3.default.createElement(Span, { onMouseOver: _this.handleMouseOver, onMouseOut: _this.handleMouseOut }, _react2$3.default.createElement(Component2, _extends$i({}, _this.props, _this.state)));
      }, _temp), _possibleConstructorReturn$9(_this, _ret);
    }
    return Hover;
  }(_react2$3.default.Component);
};
hover$1.default = hover;
var active$1 = {};
Object.defineProperty(active$1, "__esModule", {
  value: true
});
active$1.active = void 0;
var _extends$h = Object.assign || function(target) {
  for (var i = 1; i < arguments.length; i++) {
    var source = arguments[i];
    for (var key in source) {
      if (Object.prototype.hasOwnProperty.call(source, key)) {
        target[key] = source[key];
      }
    }
  }
  return target;
};
var _react$2 = React__default;
var _react2$2 = _interopRequireDefault$3(_react$2);
function _interopRequireDefault$3(obj) {
  return obj && obj.__esModule ? obj : { default: obj };
}
function _classCallCheck$8(instance, Constructor) {
  if (!(instance instanceof Constructor)) {
    throw new TypeError("Cannot call a class as a function");
  }
}
function _possibleConstructorReturn$8(self2, call) {
  if (!self2) {
    throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
  }
  return call && (typeof call === "object" || typeof call === "function") ? call : self2;
}
function _inherits$8(subClass, superClass) {
  if (typeof superClass !== "function" && superClass !== null) {
    throw new TypeError("Super expression must either be null or a function, not " + typeof superClass);
  }
  subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } });
  if (superClass)
    Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass;
}
var active = active$1.active = function active2(Component2) {
  var Span = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : "span";
  return function(_React$Component) {
    _inherits$8(Active, _React$Component);
    function Active() {
      var _ref;
      var _temp, _this, _ret;
      _classCallCheck$8(this, Active);
      for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
        args[_key] = arguments[_key];
      }
      return _ret = (_temp = (_this = _possibleConstructorReturn$8(this, (_ref = Active.__proto__ || Object.getPrototypeOf(Active)).call.apply(_ref, [this].concat(args))), _this), _this.state = { active: false }, _this.handleMouseDown = function() {
        return _this.setState({ active: true });
      }, _this.handleMouseUp = function() {
        return _this.setState({ active: false });
      }, _this.render = function() {
        return _react2$2.default.createElement(Span, { onMouseDown: _this.handleMouseDown, onMouseUp: _this.handleMouseUp }, _react2$2.default.createElement(Component2, _extends$h({}, _this.props, _this.state)));
      }, _temp), _possibleConstructorReturn$8(_this, _ret);
    }
    return Active;
  }(_react2$2.default.Component);
};
active$1.default = active;
var loop = {};
Object.defineProperty(loop, "__esModule", {
  value: true
});
var loopable = function loopable2(i, length) {
  var props = {};
  var setProp = function setProp2(name) {
    var value = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : true;
    props[name] = value;
  };
  i === 0 && setProp("first-child");
  i === length - 1 && setProp("last-child");
  (i === 0 || i % 2 === 0) && setProp("even");
  Math.abs(i % 2) === 1 && setProp("odd");
  setProp("nth-child", i);
  return props;
};
loop.default = loopable;
Object.defineProperty(lib, "__esModule", {
  value: true
});
lib.ReactCSS = lib.loop = lib.handleActive = handleHover = lib.handleHover = lib.hover = void 0;
var _flattenNames = flattenNames$1;
var _flattenNames2 = _interopRequireDefault$2(_flattenNames);
var _mergeClasses = mergeClasses$1;
var _mergeClasses2 = _interopRequireDefault$2(_mergeClasses);
var _autoprefix = autoprefix$1;
var _autoprefix2 = _interopRequireDefault$2(_autoprefix);
var _hover2 = hover$1;
var _hover3 = _interopRequireDefault$2(_hover2);
var _active = active$1;
var _active2 = _interopRequireDefault$2(_active);
var _loop2 = loop;
var _loop3 = _interopRequireDefault$2(_loop2);
function _interopRequireDefault$2(obj) {
  return obj && obj.__esModule ? obj : { default: obj };
}
lib.hover = _hover3.default;
var handleHover = lib.handleHover = _hover3.default;
lib.handleActive = _active2.default;
lib.loop = _loop3.default;
var ReactCSS = lib.ReactCSS = function ReactCSS2(classes) {
  for (var _len = arguments.length, activations = Array(_len > 1 ? _len - 1 : 0), _key = 1; _key < _len; _key++) {
    activations[_key - 1] = arguments[_key];
  }
  var activeNames = (0, _flattenNames2.default)(activations);
  var merged = (0, _mergeClasses2.default)(classes, activeNames);
  return (0, _autoprefix2.default)(merged);
};
var _default$2 = lib.default = ReactCSS;
var calculateChange$2 = function calculateChange(e, hsl, direction, initialA, container) {
  var containerWidth = container.clientWidth;
  var containerHeight = container.clientHeight;
  var x = typeof e.pageX === "number" ? e.pageX : e.touches[0].pageX;
  var y2 = typeof e.pageY === "number" ? e.pageY : e.touches[0].pageY;
  var left = x - (container.getBoundingClientRect().left + window.pageXOffset);
  var top = y2 - (container.getBoundingClientRect().top + window.pageYOffset);
  if (direction === "vertical") {
    var a = void 0;
    if (top < 0) {
      a = 0;
    } else if (top > containerHeight) {
      a = 1;
    } else {
      a = Math.round(top * 100 / containerHeight) / 100;
    }
    if (hsl.a !== a) {
      return {
        h: hsl.h,
        s: hsl.s,
        l: hsl.l,
        a,
        source: "rgb"
      };
    }
  } else {
    var _a = void 0;
    if (left < 0) {
      _a = 0;
    } else if (left > containerWidth) {
      _a = 1;
    } else {
      _a = Math.round(left * 100 / containerWidth) / 100;
    }
    if (initialA !== _a) {
      return {
        h: hsl.h,
        s: hsl.s,
        l: hsl.l,
        a: _a,
        source: "rgb"
      };
    }
  }
  return null;
};
var checkboardCache = {};
var render = function render2(c1, c2, size, serverCanvas) {
  if (typeof document === "undefined" && !serverCanvas) {
    return null;
  }
  var canvas = serverCanvas ? new serverCanvas() : document.createElement("canvas");
  canvas.width = size * 2;
  canvas.height = size * 2;
  var ctx = canvas.getContext("2d");
  if (!ctx) {
    return null;
  }
  ctx.fillStyle = c1;
  ctx.fillRect(0, 0, canvas.width, canvas.height);
  ctx.fillStyle = c2;
  ctx.fillRect(0, 0, size, size);
  ctx.translate(size, size);
  ctx.fillRect(0, 0, size, size);
  return canvas.toDataURL();
};
var get$1 = function get(c1, c2, size, serverCanvas) {
  var key = c1 + "-" + c2 + "-" + size + (serverCanvas ? "-server" : "");
  if (checkboardCache[key]) {
    return checkboardCache[key];
  }
  var checkboard = render(c1, c2, size, serverCanvas);
  checkboardCache[key] = checkboard;
  return checkboard;
};
var _extends$g = Object.assign || function(target) {
  for (var i = 1; i < arguments.length; i++) {
    var source = arguments[i];
    for (var key in source) {
      if (Object.prototype.hasOwnProperty.call(source, key)) {
        target[key] = source[key];
      }
    }
  }
  return target;
};
var Checkboard = function Checkboard2(_ref) {
  var white = _ref.white, grey = _ref.grey, size = _ref.size, renderers = _ref.renderers, borderRadius2 = _ref.borderRadius, boxShadow2 = _ref.boxShadow, children = _ref.children;
  var styles = _default$2({
    "default": {
      grid: {
        borderRadius: borderRadius2,
        boxShadow: boxShadow2,
        absolute: "0px 0px 0px 0px",
        background: "url(" + get$1(white, grey, size, renderers.canvas) + ") center left"
      }
    }
  });
  return isValidElement(children) ? React__default.cloneElement(children, _extends$g({}, children.props, { style: _extends$g({}, children.props.style, styles.grid) })) : React__default.createElement("div", { style: styles.grid });
};
Checkboard.defaultProps = {
  size: 8,
  white: "transparent",
  grey: "rgba(0,0,0,.08)",
  renderers: {}
};
var _extends$f = Object.assign || function(target) {
  for (var i = 1; i < arguments.length; i++) {
    var source = arguments[i];
    for (var key in source) {
      if (Object.prototype.hasOwnProperty.call(source, key)) {
        target[key] = source[key];
      }
    }
  }
  return target;
};
var _createClass$7 = function() {
  function defineProperties(target, props) {
    for (var i = 0; i < props.length; i++) {
      var descriptor = props[i];
      descriptor.enumerable = descriptor.enumerable || false;
      descriptor.configurable = true;
      if ("value" in descriptor)
        descriptor.writable = true;
      Object.defineProperty(target, descriptor.key, descriptor);
    }
  }
  return function(Constructor, protoProps, staticProps) {
    if (protoProps)
      defineProperties(Constructor.prototype, protoProps);
    if (staticProps)
      defineProperties(Constructor, staticProps);
    return Constructor;
  };
}();
function _classCallCheck$7(instance, Constructor) {
  if (!(instance instanceof Constructor)) {
    throw new TypeError("Cannot call a class as a function");
  }
}
function _possibleConstructorReturn$7(self2, call) {
  if (!self2) {
    throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
  }
  return call && (typeof call === "object" || typeof call === "function") ? call : self2;
}
function _inherits$7(subClass, superClass) {
  if (typeof superClass !== "function" && superClass !== null) {
    throw new TypeError("Super expression must either be null or a function, not " + typeof superClass);
  }
  subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } });
  if (superClass)
    Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass;
}
var Alpha = function(_ref) {
  _inherits$7(Alpha2, _ref);
  function Alpha2() {
    var _ref2;
    var _temp, _this, _ret;
    _classCallCheck$7(this, Alpha2);
    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }
    return _ret = (_temp = (_this = _possibleConstructorReturn$7(this, (_ref2 = Alpha2.__proto__ || Object.getPrototypeOf(Alpha2)).call.apply(_ref2, [this].concat(args))), _this), _this.handleChange = function(e) {
      var change = calculateChange$2(e, _this.props.hsl, _this.props.direction, _this.props.a, _this.container);
      change && typeof _this.props.onChange === "function" && _this.props.onChange(change, e);
    }, _this.handleMouseDown = function(e) {
      _this.handleChange(e);
      window.addEventListener("mousemove", _this.handleChange);
      window.addEventListener("mouseup", _this.handleMouseUp);
    }, _this.handleMouseUp = function() {
      _this.unbindEventListeners();
    }, _this.unbindEventListeners = function() {
      window.removeEventListener("mousemove", _this.handleChange);
      window.removeEventListener("mouseup", _this.handleMouseUp);
    }, _temp), _possibleConstructorReturn$7(_this, _ret);
  }
  _createClass$7(Alpha2, [{
    key: "componentWillUnmount",
    value: function componentWillUnmount() {
      this.unbindEventListeners();
    }
  }, {
    key: "render",
    value: function render3() {
      var _this2 = this;
      var rgb = this.props.rgb;
      var styles = _default$2({
        "default": {
          alpha: {
            absolute: "0px 0px 0px 0px",
            borderRadius: this.props.radius
          },
          checkboard: {
            absolute: "0px 0px 0px 0px",
            overflow: "hidden",
            borderRadius: this.props.radius
          },
          gradient: {
            absolute: "0px 0px 0px 0px",
            background: "linear-gradient(to right, rgba(" + rgb.r + "," + rgb.g + "," + rgb.b + ", 0) 0%,\n           rgba(" + rgb.r + "," + rgb.g + "," + rgb.b + ", 1) 100%)",
            boxShadow: this.props.shadow,
            borderRadius: this.props.radius
          },
          container: {
            position: "relative",
            height: "100%",
            margin: "0 3px"
          },
          pointer: {
            position: "absolute",
            left: rgb.a * 100 + "%"
          },
          slider: {
            width: "4px",
            borderRadius: "1px",
            height: "8px",
            boxShadow: "0 0 2px rgba(0, 0, 0, .6)",
            background: "#fff",
            marginTop: "1px",
            transform: "translateX(-2px)"
          }
        },
        "vertical": {
          gradient: {
            background: "linear-gradient(to bottom, rgba(" + rgb.r + "," + rgb.g + "," + rgb.b + ", 0) 0%,\n           rgba(" + rgb.r + "," + rgb.g + "," + rgb.b + ", 1) 100%)"
          },
          pointer: {
            left: 0,
            top: rgb.a * 100 + "%"
          }
        },
        "overwrite": _extends$f({}, this.props.style)
      }, {
        vertical: this.props.direction === "vertical",
        overwrite: true
      });
      return React__default.createElement("div", { style: styles.alpha }, React__default.createElement("div", { style: styles.checkboard }, React__default.createElement(Checkboard, { renderers: this.props.renderers })), React__default.createElement("div", { style: styles.gradient }), React__default.createElement("div", {
        style: styles.container,
        ref: function ref(container) {
          return _this2.container = container;
        },
        onMouseDown: this.handleMouseDown,
        onTouchMove: this.handleChange,
        onTouchStart: this.handleChange
      }, React__default.createElement("div", { style: styles.pointer }, this.props.pointer ? React__default.createElement(this.props.pointer, this.props) : React__default.createElement("div", { style: styles.slider }))));
    }
  }]);
  return Alpha2;
}(PureComponent || Component);
var _createClass$6 = function() {
  function defineProperties(target, props) {
    for (var i = 0; i < props.length; i++) {
      var descriptor = props[i];
      descriptor.enumerable = descriptor.enumerable || false;
      descriptor.configurable = true;
      if ("value" in descriptor)
        descriptor.writable = true;
      Object.defineProperty(target, descriptor.key, descriptor);
    }
  }
  return function(Constructor, protoProps, staticProps) {
    if (protoProps)
      defineProperties(Constructor.prototype, protoProps);
    if (staticProps)
      defineProperties(Constructor, staticProps);
    return Constructor;
  };
}();
function _defineProperty$k(obj, key, value) {
  if (key in obj) {
    Object.defineProperty(obj, key, { value, enumerable: true, configurable: true, writable: true });
  } else {
    obj[key] = value;
  }
  return obj;
}
function _classCallCheck$6(instance, Constructor) {
  if (!(instance instanceof Constructor)) {
    throw new TypeError("Cannot call a class as a function");
  }
}
function _possibleConstructorReturn$6(self2, call) {
  if (!self2) {
    throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
  }
  return call && (typeof call === "object" || typeof call === "function") ? call : self2;
}
function _inherits$6(subClass, superClass) {
  if (typeof superClass !== "function" && superClass !== null) {
    throw new TypeError("Super expression must either be null or a function, not " + typeof superClass);
  }
  subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } });
  if (superClass)
    Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass;
}
var DEFAULT_ARROW_OFFSET = 1;
var UP_KEY_CODE = 38;
var DOWN_KEY_CODE = 40;
var VALID_KEY_CODES = [UP_KEY_CODE, DOWN_KEY_CODE];
var isValidKeyCode = function isValidKeyCode2(keyCode) {
  return VALID_KEY_CODES.indexOf(keyCode) > -1;
};
var getNumberValue = function getNumberValue2(value) {
  return Number(String(value).replace(/%/g, ""));
};
var idCounter = 1;
var EditableInput = function(_ref) {
  _inherits$6(EditableInput2, _ref);
  function EditableInput2(props) {
    _classCallCheck$6(this, EditableInput2);
    var _this = _possibleConstructorReturn$6(this, (EditableInput2.__proto__ || Object.getPrototypeOf(EditableInput2)).call(this));
    _this.handleBlur = function() {
      if (_this.state.blurValue) {
        _this.setState({ value: _this.state.blurValue, blurValue: null });
      }
    };
    _this.handleChange = function(e) {
      _this.setUpdatedValue(e.target.value, e);
    };
    _this.handleKeyDown = function(e) {
      var value = getNumberValue(e.target.value);
      if (!isNaN(value) && isValidKeyCode(e.keyCode)) {
        var offset = _this.getArrowOffset();
        var updatedValue = e.keyCode === UP_KEY_CODE ? value + offset : value - offset;
        _this.setUpdatedValue(updatedValue, e);
      }
    };
    _this.handleDrag = function(e) {
      if (_this.props.dragLabel) {
        var newValue = Math.round(_this.props.value + e.movementX);
        if (newValue >= 0 && newValue <= _this.props.dragMax) {
          _this.props.onChange && _this.props.onChange(_this.getValueObjectWithLabel(newValue), e);
        }
      }
    };
    _this.handleMouseDown = function(e) {
      if (_this.props.dragLabel) {
        e.preventDefault();
        _this.handleDrag(e);
        window.addEventListener("mousemove", _this.handleDrag);
        window.addEventListener("mouseup", _this.handleMouseUp);
      }
    };
    _this.handleMouseUp = function() {
      _this.unbindEventListeners();
    };
    _this.unbindEventListeners = function() {
      window.removeEventListener("mousemove", _this.handleDrag);
      window.removeEventListener("mouseup", _this.handleMouseUp);
    };
    _this.state = {
      value: String(props.value).toUpperCase(),
      blurValue: String(props.value).toUpperCase()
    };
    _this.inputId = "rc-editable-input-" + idCounter++;
    return _this;
  }
  _createClass$6(EditableInput2, [{
    key: "componentDidUpdate",
    value: function componentDidUpdate(prevProps, prevState) {
      if (this.props.value !== this.state.value && (prevProps.value !== this.props.value || prevState.value !== this.state.value)) {
        if (this.input === document.activeElement) {
          this.setState({ blurValue: String(this.props.value).toUpperCase() });
        } else {
          this.setState({ value: String(this.props.value).toUpperCase(), blurValue: !this.state.blurValue && String(this.props.value).toUpperCase() });
        }
      }
    }
  }, {
    key: "componentWillUnmount",
    value: function componentWillUnmount() {
      this.unbindEventListeners();
    }
  }, {
    key: "getValueObjectWithLabel",
    value: function getValueObjectWithLabel(value) {
      return _defineProperty$k({}, this.props.label, value);
    }
  }, {
    key: "getArrowOffset",
    value: function getArrowOffset() {
      return this.props.arrowOffset || DEFAULT_ARROW_OFFSET;
    }
  }, {
    key: "setUpdatedValue",
    value: function setUpdatedValue(value, e) {
      var onChangeValue = this.props.label ? this.getValueObjectWithLabel(value) : value;
      this.props.onChange && this.props.onChange(onChangeValue, e);
      this.setState({ value });
    }
  }, {
    key: "render",
    value: function render3() {
      var _this2 = this;
      var styles = _default$2({
        "default": {
          wrap: {
            position: "relative"
          }
        },
        "user-override": {
          wrap: this.props.style && this.props.style.wrap ? this.props.style.wrap : {},
          input: this.props.style && this.props.style.input ? this.props.style.input : {},
          label: this.props.style && this.props.style.label ? this.props.style.label : {}
        },
        "dragLabel-true": {
          label: {
            cursor: "ew-resize"
          }
        }
      }, {
        "user-override": true
      }, this.props);
      return React__default.createElement("div", { style: styles.wrap }, React__default.createElement("input", {
        id: this.inputId,
        style: styles.input,
        ref: function ref(input) {
          return _this2.input = input;
        },
        value: this.state.value,
        onKeyDown: this.handleKeyDown,
        onChange: this.handleChange,
        onBlur: this.handleBlur,
        placeholder: this.props.placeholder,
        spellCheck: "false"
      }), this.props.label && !this.props.hideLabel ? React__default.createElement("label", {
        htmlFor: this.inputId,
        style: styles.label,
        onMouseDown: this.handleMouseDown
      }, this.props.label) : null);
    }
  }]);
  return EditableInput2;
}(PureComponent || Component);
var calculateChange$1 = function calculateChange2(e, direction, hsl, container) {
  var containerWidth = container.clientWidth;
  var containerHeight = container.clientHeight;
  var x = typeof e.pageX === "number" ? e.pageX : e.touches[0].pageX;
  var y2 = typeof e.pageY === "number" ? e.pageY : e.touches[0].pageY;
  var left = x - (container.getBoundingClientRect().left + window.pageXOffset);
  var top = y2 - (container.getBoundingClientRect().top + window.pageYOffset);
  if (direction === "vertical") {
    var h = void 0;
    if (top < 0) {
      h = 359;
    } else if (top > containerHeight) {
      h = 0;
    } else {
      var percent = -(top * 100 / containerHeight) + 100;
      h = 360 * percent / 100;
    }
    if (hsl.h !== h) {
      return {
        h,
        s: hsl.s,
        l: hsl.l,
        a: hsl.a,
        source: "hsl"
      };
    }
  } else {
    var _h = void 0;
    if (left < 0) {
      _h = 0;
    } else if (left > containerWidth) {
      _h = 359;
    } else {
      var _percent = left * 100 / containerWidth;
      _h = 360 * _percent / 100;
    }
    if (hsl.h !== _h) {
      return {
        h: _h,
        s: hsl.s,
        l: hsl.l,
        a: hsl.a,
        source: "hsl"
      };
    }
  }
  return null;
};
var _createClass$5 = function() {
  function defineProperties(target, props) {
    for (var i = 0; i < props.length; i++) {
      var descriptor = props[i];
      descriptor.enumerable = descriptor.enumerable || false;
      descriptor.configurable = true;
      if ("value" in descriptor)
        descriptor.writable = true;
      Object.defineProperty(target, descriptor.key, descriptor);
    }
  }
  return function(Constructor, protoProps, staticProps) {
    if (protoProps)
      defineProperties(Constructor.prototype, protoProps);
    if (staticProps)
      defineProperties(Constructor, staticProps);
    return Constructor;
  };
}();
function _classCallCheck$5(instance, Constructor) {
  if (!(instance instanceof Constructor)) {
    throw new TypeError("Cannot call a class as a function");
  }
}
function _possibleConstructorReturn$5(self2, call) {
  if (!self2) {
    throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
  }
  return call && (typeof call === "object" || typeof call === "function") ? call : self2;
}
function _inherits$5(subClass, superClass) {
  if (typeof superClass !== "function" && superClass !== null) {
    throw new TypeError("Super expression must either be null or a function, not " + typeof superClass);
  }
  subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } });
  if (superClass)
    Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass;
}
var Hue = function(_ref) {
  _inherits$5(Hue2, _ref);
  function Hue2() {
    var _ref2;
    var _temp, _this, _ret;
    _classCallCheck$5(this, Hue2);
    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }
    return _ret = (_temp = (_this = _possibleConstructorReturn$5(this, (_ref2 = Hue2.__proto__ || Object.getPrototypeOf(Hue2)).call.apply(_ref2, [this].concat(args))), _this), _this.handleChange = function(e) {
      var change = calculateChange$1(e, _this.props.direction, _this.props.hsl, _this.container);
      change && typeof _this.props.onChange === "function" && _this.props.onChange(change, e);
    }, _this.handleMouseDown = function(e) {
      _this.handleChange(e);
      window.addEventListener("mousemove", _this.handleChange);
      window.addEventListener("mouseup", _this.handleMouseUp);
    }, _this.handleMouseUp = function() {
      _this.unbindEventListeners();
    }, _temp), _possibleConstructorReturn$5(_this, _ret);
  }
  _createClass$5(Hue2, [{
    key: "componentWillUnmount",
    value: function componentWillUnmount() {
      this.unbindEventListeners();
    }
  }, {
    key: "unbindEventListeners",
    value: function unbindEventListeners() {
      window.removeEventListener("mousemove", this.handleChange);
      window.removeEventListener("mouseup", this.handleMouseUp);
    }
  }, {
    key: "render",
    value: function render3() {
      var _this2 = this;
      var _props$direction = this.props.direction, direction = _props$direction === void 0 ? "horizontal" : _props$direction;
      var styles = _default$2({
        "default": {
          hue: {
            absolute: "0px 0px 0px 0px",
            borderRadius: this.props.radius,
            boxShadow: this.props.shadow
          },
          container: {
            padding: "0 2px",
            position: "relative",
            height: "100%",
            borderRadius: this.props.radius
          },
          pointer: {
            position: "absolute",
            left: this.props.hsl.h * 100 / 360 + "%"
          },
          slider: {
            marginTop: "1px",
            width: "4px",
            borderRadius: "1px",
            height: "8px",
            boxShadow: "0 0 2px rgba(0, 0, 0, .6)",
            background: "#fff",
            transform: "translateX(-2px)"
          }
        },
        "vertical": {
          pointer: {
            left: "0px",
            top: -(this.props.hsl.h * 100 / 360) + 100 + "%"
          }
        }
      }, { vertical: direction === "vertical" });
      return React__default.createElement("div", { style: styles.hue }, React__default.createElement("div", {
        className: "hue-" + direction,
        style: styles.container,
        ref: function ref(container) {
          return _this2.container = container;
        },
        onMouseDown: this.handleMouseDown,
        onTouchMove: this.handleChange,
        onTouchStart: this.handleChange
      }, React__default.createElement("style", null, "\n            .hue-horizontal {\n              background: linear-gradient(to right, #f00 0%, #ff0 17%, #0f0\n                33%, #0ff 50%, #00f 67%, #f0f 83%, #f00 100%);\n              background: -webkit-linear-gradient(to right, #f00 0%, #ff0\n                17%, #0f0 33%, #0ff 50%, #00f 67%, #f0f 83%, #f00 100%);\n            }\n\n            .hue-vertical {\n              background: linear-gradient(to top, #f00 0%, #ff0 17%, #0f0 33%,\n                #0ff 50%, #00f 67%, #f0f 83%, #f00 100%);\n              background: -webkit-linear-gradient(to top, #f00 0%, #ff0 17%,\n                #0f0 33%, #0ff 50%, #00f 67%, #f0f 83%, #f00 100%);\n            }\n          "), React__default.createElement("div", { style: styles.pointer }, this.props.pointer ? React__default.createElement(this.props.pointer, this.props) : React__default.createElement("div", { style: styles.slider }))));
    }
  }]);
  return Hue2;
}(PureComponent || Component);
function listCacheClear() {
  this.__data__ = [];
  this.size = 0;
}
function eq(value, other) {
  return value === other || value !== value && other !== other;
}
function assocIndexOf(array, key) {
  var length = array.length;
  while (length--) {
    if (eq(array[length][0], key)) {
      return length;
    }
  }
  return -1;
}
var arrayProto = Array.prototype;
var splice = arrayProto.splice;
function listCacheDelete(key) {
  var data = this.__data__, index = assocIndexOf(data, key);
  if (index < 0) {
    return false;
  }
  var lastIndex = data.length - 1;
  if (index == lastIndex) {
    data.pop();
  } else {
    splice.call(data, index, 1);
  }
  --this.size;
  return true;
}
function listCacheGet(key) {
  var data = this.__data__, index = assocIndexOf(data, key);
  return index < 0 ? void 0 : data[index][1];
}
function listCacheHas(key) {
  return assocIndexOf(this.__data__, key) > -1;
}
function listCacheSet(key, value) {
  var data = this.__data__, index = assocIndexOf(data, key);
  if (index < 0) {
    ++this.size;
    data.push([key, value]);
  } else {
    data[index][1] = value;
  }
  return this;
}
function ListCache(entries) {
  var index = -1, length = entries == null ? 0 : entries.length;
  this.clear();
  while (++index < length) {
    var entry = entries[index];
    this.set(entry[0], entry[1]);
  }
}
ListCache.prototype.clear = listCacheClear;
ListCache.prototype["delete"] = listCacheDelete;
ListCache.prototype.get = listCacheGet;
ListCache.prototype.has = listCacheHas;
ListCache.prototype.set = listCacheSet;
function stackClear() {
  this.__data__ = new ListCache();
  this.size = 0;
}
function stackDelete(key) {
  var data = this.__data__, result = data["delete"](key);
  this.size = data.size;
  return result;
}
function stackGet(key) {
  return this.__data__.get(key);
}
function stackHas(key) {
  return this.__data__.has(key);
}
var freeGlobal = typeof global == "object" && global && global.Object === Object && global;
var freeGlobal$1 = freeGlobal;
var freeSelf = typeof self == "object" && self && self.Object === Object && self;
var root = freeGlobal$1 || freeSelf || Function("return this")();
var root$1 = root;
var Symbol$1 = root$1.Symbol;
var Symbol$2 = Symbol$1;
var objectProto$e = Object.prototype;
var hasOwnProperty$d = objectProto$e.hasOwnProperty;
var nativeObjectToString$1 = objectProto$e.toString;
var symToStringTag$1 = Symbol$2 ? Symbol$2.toStringTag : void 0;
function getRawTag(value) {
  var isOwn = hasOwnProperty$d.call(value, symToStringTag$1), tag = value[symToStringTag$1];
  try {
    value[symToStringTag$1] = void 0;
    var unmasked = true;
  } catch (e) {
  }
  var result = nativeObjectToString$1.call(value);
  if (unmasked) {
    if (isOwn) {
      value[symToStringTag$1] = tag;
    } else {
      delete value[symToStringTag$1];
    }
  }
  return result;
}
var objectProto$d = Object.prototype;
var nativeObjectToString = objectProto$d.toString;
function objectToString(value) {
  return nativeObjectToString.call(value);
}
var nullTag = "[object Null]", undefinedTag = "[object Undefined]";
var symToStringTag = Symbol$2 ? Symbol$2.toStringTag : void 0;
function baseGetTag(value) {
  if (value == null) {
    return value === void 0 ? undefinedTag : nullTag;
  }
  return symToStringTag && symToStringTag in Object(value) ? getRawTag(value) : objectToString(value);
}
function isObject(value) {
  var type = typeof value;
  return value != null && (type == "object" || type == "function");
}
var asyncTag = "[object AsyncFunction]", funcTag$1 = "[object Function]", genTag = "[object GeneratorFunction]", proxyTag = "[object Proxy]";
function isFunction(value) {
  if (!isObject(value)) {
    return false;
  }
  var tag = baseGetTag(value);
  return tag == funcTag$1 || tag == genTag || tag == asyncTag || tag == proxyTag;
}
var coreJsData = root$1["__core-js_shared__"];
var coreJsData$1 = coreJsData;
var maskSrcKey = function() {
  var uid = /[^.]+$/.exec(coreJsData$1 && coreJsData$1.keys && coreJsData$1.keys.IE_PROTO || "");
  return uid ? "Symbol(src)_1." + uid : "";
}();
function isMasked(func) {
  return !!maskSrcKey && maskSrcKey in func;
}
var funcProto$2 = Function.prototype;
var funcToString$2 = funcProto$2.toString;
function toSource(func) {
  if (func != null) {
    try {
      return funcToString$2.call(func);
    } catch (e) {
    }
    try {
      return func + "";
    } catch (e) {
    }
  }
  return "";
}
var reRegExpChar = /[\\^$.*+?()[\]{}|]/g;
var reIsHostCtor = /^\[object .+?Constructor\]$/;
var funcProto$1 = Function.prototype, objectProto$c = Object.prototype;
var funcToString$1 = funcProto$1.toString;
var hasOwnProperty$c = objectProto$c.hasOwnProperty;
var reIsNative = RegExp("^" + funcToString$1.call(hasOwnProperty$c).replace(reRegExpChar, "\\$&").replace(/hasOwnProperty|(function).*?(?=\\\()| for .+?(?=\\\])/g, "$1.*?") + "$");
function baseIsNative(value) {
  if (!isObject(value) || isMasked(value)) {
    return false;
  }
  var pattern = isFunction(value) ? reIsNative : reIsHostCtor;
  return pattern.test(toSource(value));
}
function getValue(object, key) {
  return object == null ? void 0 : object[key];
}
function getNative(object, key) {
  var value = getValue(object, key);
  return baseIsNative(value) ? value : void 0;
}
var Map$d = getNative(root$1, "Map");
var Map$e = Map$d;
var nativeCreate = getNative(Object, "create");
var nativeCreate$1 = nativeCreate;
function hashClear() {
  this.__data__ = nativeCreate$1 ? nativeCreate$1(null) : {};
  this.size = 0;
}
function hashDelete(key) {
  var result = this.has(key) && delete this.__data__[key];
  this.size -= result ? 1 : 0;
  return result;
}
var HASH_UNDEFINED$2 = "__lodash_hash_undefined__";
var objectProto$b = Object.prototype;
var hasOwnProperty$b = objectProto$b.hasOwnProperty;
function hashGet(key) {
  var data = this.__data__;
  if (nativeCreate$1) {
    var result = data[key];
    return result === HASH_UNDEFINED$2 ? void 0 : result;
  }
  return hasOwnProperty$b.call(data, key) ? data[key] : void 0;
}
var objectProto$a = Object.prototype;
var hasOwnProperty$a = objectProto$a.hasOwnProperty;
function hashHas(key) {
  var data = this.__data__;
  return nativeCreate$1 ? data[key] !== void 0 : hasOwnProperty$a.call(data, key);
}
var HASH_UNDEFINED$1 = "__lodash_hash_undefined__";
function hashSet(key, value) {
  var data = this.__data__;
  this.size += this.has(key) ? 0 : 1;
  data[key] = nativeCreate$1 && value === void 0 ? HASH_UNDEFINED$1 : value;
  return this;
}
function Hash(entries) {
  var index = -1, length = entries == null ? 0 : entries.length;
  this.clear();
  while (++index < length) {
    var entry = entries[index];
    this.set(entry[0], entry[1]);
  }
}
Hash.prototype.clear = hashClear;
Hash.prototype["delete"] = hashDelete;
Hash.prototype.get = hashGet;
Hash.prototype.has = hashHas;
Hash.prototype.set = hashSet;
function mapCacheClear() {
  this.size = 0;
  this.__data__ = {
    "hash": new Hash(),
    "map": new (Map$e || ListCache)(),
    "string": new Hash()
  };
}
function isKeyable(value) {
  var type = typeof value;
  return type == "string" || type == "number" || type == "symbol" || type == "boolean" ? value !== "__proto__" : value === null;
}
function getMapData(map2, key) {
  var data = map2.__data__;
  return isKeyable(key) ? data[typeof key == "string" ? "string" : "hash"] : data.map;
}
function mapCacheDelete(key) {
  var result = getMapData(this, key)["delete"](key);
  this.size -= result ? 1 : 0;
  return result;
}
function mapCacheGet(key) {
  return getMapData(this, key).get(key);
}
function mapCacheHas(key) {
  return getMapData(this, key).has(key);
}
function mapCacheSet(key, value) {
  var data = getMapData(this, key), size = data.size;
  data.set(key, value);
  this.size += data.size == size ? 0 : 1;
  return this;
}
function MapCache(entries) {
  var index = -1, length = entries == null ? 0 : entries.length;
  this.clear();
  while (++index < length) {
    var entry = entries[index];
    this.set(entry[0], entry[1]);
  }
}
MapCache.prototype.clear = mapCacheClear;
MapCache.prototype["delete"] = mapCacheDelete;
MapCache.prototype.get = mapCacheGet;
MapCache.prototype.has = mapCacheHas;
MapCache.prototype.set = mapCacheSet;
var LARGE_ARRAY_SIZE = 200;
function stackSet(key, value) {
  var data = this.__data__;
  if (data instanceof ListCache) {
    var pairs = data.__data__;
    if (!Map$e || pairs.length < LARGE_ARRAY_SIZE - 1) {
      pairs.push([key, value]);
      this.size = ++data.size;
      return this;
    }
    data = this.__data__ = new MapCache(pairs);
  }
  data.set(key, value);
  this.size = data.size;
  return this;
}
function Stack$1(entries) {
  var data = this.__data__ = new ListCache(entries);
  this.size = data.size;
}
Stack$1.prototype.clear = stackClear;
Stack$1.prototype["delete"] = stackDelete;
Stack$1.prototype.get = stackGet;
Stack$1.prototype.has = stackHas;
Stack$1.prototype.set = stackSet;
var defineProperty = function() {
  try {
    var func = getNative(Object, "defineProperty");
    func({}, "", {});
    return func;
  } catch (e) {
  }
}();
var defineProperty$1 = defineProperty;
function baseAssignValue(object, key, value) {
  if (key == "__proto__" && defineProperty$1) {
    defineProperty$1(object, key, {
      "configurable": true,
      "enumerable": true,
      "value": value,
      "writable": true
    });
  } else {
    object[key] = value;
  }
}
function assignMergeValue(object, key, value) {
  if (value !== void 0 && !eq(object[key], value) || value === void 0 && !(key in object)) {
    baseAssignValue(object, key, value);
  }
}
function createBaseFor(fromRight) {
  return function(object, iteratee, keysFunc) {
    var index = -1, iterable = Object(object), props = keysFunc(object), length = props.length;
    while (length--) {
      var key = props[fromRight ? length : ++index];
      if (iteratee(iterable[key], key, iterable) === false) {
        break;
      }
    }
    return object;
  };
}
var baseFor = createBaseFor();
var baseFor$1 = baseFor;
var freeExports$2 = typeof exports == "object" && exports && !exports.nodeType && exports;
var freeModule$2 = freeExports$2 && typeof module == "object" && module && !module.nodeType && module;
var moduleExports$2 = freeModule$2 && freeModule$2.exports === freeExports$2;
var Buffer$1 = moduleExports$2 ? root$1.Buffer : void 0, allocUnsafe = Buffer$1 ? Buffer$1.allocUnsafe : void 0;
function cloneBuffer(buffer, isDeep) {
  if (isDeep) {
    return buffer.slice();
  }
  var length = buffer.length, result = allocUnsafe ? allocUnsafe(length) : new buffer.constructor(length);
  buffer.copy(result);
  return result;
}
var Uint8Array2 = root$1.Uint8Array;
var Uint8Array$1 = Uint8Array2;
function cloneArrayBuffer(arrayBuffer) {
  var result = new arrayBuffer.constructor(arrayBuffer.byteLength);
  new Uint8Array$1(result).set(new Uint8Array$1(arrayBuffer));
  return result;
}
function cloneTypedArray(typedArray, isDeep) {
  var buffer = isDeep ? cloneArrayBuffer(typedArray.buffer) : typedArray.buffer;
  return new typedArray.constructor(buffer, typedArray.byteOffset, typedArray.length);
}
function copyArray(source, array) {
  var index = -1, length = source.length;
  array || (array = Array(length));
  while (++index < length) {
    array[index] = source[index];
  }
  return array;
}
var objectCreate = Object.create;
var baseCreate = function() {
  function object() {
  }
  return function(proto) {
    if (!isObject(proto)) {
      return {};
    }
    if (objectCreate) {
      return objectCreate(proto);
    }
    object.prototype = proto;
    var result = new object();
    object.prototype = void 0;
    return result;
  };
}();
var baseCreate$1 = baseCreate;
function overArg(func, transform2) {
  return function(arg) {
    return func(transform2(arg));
  };
}
var getPrototype = overArg(Object.getPrototypeOf, Object);
var getPrototype$1 = getPrototype;
var objectProto$9 = Object.prototype;
function isPrototype(value) {
  var Ctor = value && value.constructor, proto = typeof Ctor == "function" && Ctor.prototype || objectProto$9;
  return value === proto;
}
function initCloneObject(object) {
  return typeof object.constructor == "function" && !isPrototype(object) ? baseCreate$1(getPrototype$1(object)) : {};
}
function isObjectLike(value) {
  return value != null && typeof value == "object";
}
var argsTag$2 = "[object Arguments]";
function baseIsArguments(value) {
  return isObjectLike(value) && baseGetTag(value) == argsTag$2;
}
var objectProto$8 = Object.prototype;
var hasOwnProperty$9 = objectProto$8.hasOwnProperty;
var propertyIsEnumerable$1 = objectProto$8.propertyIsEnumerable;
var isArguments = baseIsArguments(function() {
  return arguments;
}()) ? baseIsArguments : function(value) {
  return isObjectLike(value) && hasOwnProperty$9.call(value, "callee") && !propertyIsEnumerable$1.call(value, "callee");
};
var isArguments$1 = isArguments;
var isArray = Array.isArray;
var isArray$1 = isArray;
var MAX_SAFE_INTEGER$1 = 9007199254740991;
function isLength(value) {
  return typeof value == "number" && value > -1 && value % 1 == 0 && value <= MAX_SAFE_INTEGER$1;
}
function isArrayLike(value) {
  return value != null && isLength(value.length) && !isFunction(value);
}
function isArrayLikeObject(value) {
  return isObjectLike(value) && isArrayLike(value);
}
function stubFalse() {
  return false;
}
var freeExports$1 = typeof exports == "object" && exports && !exports.nodeType && exports;
var freeModule$1 = freeExports$1 && typeof module == "object" && module && !module.nodeType && module;
var moduleExports$1 = freeModule$1 && freeModule$1.exports === freeExports$1;
var Buffer2 = moduleExports$1 ? root$1.Buffer : void 0;
var nativeIsBuffer = Buffer2 ? Buffer2.isBuffer : void 0;
var isBuffer = nativeIsBuffer || stubFalse;
var isBuffer$1 = isBuffer;
var objectTag$3 = "[object Object]";
var funcProto = Function.prototype, objectProto$7 = Object.prototype;
var funcToString = funcProto.toString;
var hasOwnProperty$8 = objectProto$7.hasOwnProperty;
var objectCtorString = funcToString.call(Object);
function isPlainObject(value) {
  if (!isObjectLike(value) || baseGetTag(value) != objectTag$3) {
    return false;
  }
  var proto = getPrototype$1(value);
  if (proto === null) {
    return true;
  }
  var Ctor = hasOwnProperty$8.call(proto, "constructor") && proto.constructor;
  return typeof Ctor == "function" && Ctor instanceof Ctor && funcToString.call(Ctor) == objectCtorString;
}
var argsTag$1 = "[object Arguments]", arrayTag$1 = "[object Array]", boolTag$1 = "[object Boolean]", dateTag$1 = "[object Date]", errorTag$1 = "[object Error]", funcTag = "[object Function]", mapTag$2 = "[object Map]", numberTag$1 = "[object Number]", objectTag$2 = "[object Object]", regexpTag$1 = "[object RegExp]", setTag$2 = "[object Set]", stringTag$1 = "[object String]", weakMapTag$1 = "[object WeakMap]";
var arrayBufferTag$1 = "[object ArrayBuffer]", dataViewTag$2 = "[object DataView]", float32Tag = "[object Float32Array]", float64Tag = "[object Float64Array]", int8Tag = "[object Int8Array]", int16Tag = "[object Int16Array]", int32Tag = "[object Int32Array]", uint8Tag = "[object Uint8Array]", uint8ClampedTag = "[object Uint8ClampedArray]", uint16Tag = "[object Uint16Array]", uint32Tag = "[object Uint32Array]";
var typedArrayTags = {};
typedArrayTags[float32Tag] = typedArrayTags[float64Tag] = typedArrayTags[int8Tag] = typedArrayTags[int16Tag] = typedArrayTags[int32Tag] = typedArrayTags[uint8Tag] = typedArrayTags[uint8ClampedTag] = typedArrayTags[uint16Tag] = typedArrayTags[uint32Tag] = true;
typedArrayTags[argsTag$1] = typedArrayTags[arrayTag$1] = typedArrayTags[arrayBufferTag$1] = typedArrayTags[boolTag$1] = typedArrayTags[dataViewTag$2] = typedArrayTags[dateTag$1] = typedArrayTags[errorTag$1] = typedArrayTags[funcTag] = typedArrayTags[mapTag$2] = typedArrayTags[numberTag$1] = typedArrayTags[objectTag$2] = typedArrayTags[regexpTag$1] = typedArrayTags[setTag$2] = typedArrayTags[stringTag$1] = typedArrayTags[weakMapTag$1] = false;
function baseIsTypedArray(value) {
  return isObjectLike(value) && isLength(value.length) && !!typedArrayTags[baseGetTag(value)];
}
function baseUnary(func) {
  return function(value) {
    return func(value);
  };
}
var freeExports = typeof exports == "object" && exports && !exports.nodeType && exports;
var freeModule = freeExports && typeof module == "object" && module && !module.nodeType && module;
var moduleExports = freeModule && freeModule.exports === freeExports;
var freeProcess = moduleExports && freeGlobal$1.process;
var nodeUtil = function() {
  try {
    var types = freeModule && freeModule.require && freeModule.require("util").types;
    if (types) {
      return types;
    }
    return freeProcess && freeProcess.binding && freeProcess.binding("util");
  } catch (e) {
  }
}();
var nodeUtil$1 = nodeUtil;
var nodeIsTypedArray = nodeUtil$1 && nodeUtil$1.isTypedArray;
var isTypedArray = nodeIsTypedArray ? baseUnary(nodeIsTypedArray) : baseIsTypedArray;
var isTypedArray$1 = isTypedArray;
function safeGet(object, key) {
  if (key === "constructor" && typeof object[key] === "function") {
    return;
  }
  if (key == "__proto__") {
    return;
  }
  return object[key];
}
var objectProto$6 = Object.prototype;
var hasOwnProperty$7 = objectProto$6.hasOwnProperty;
function assignValue(object, key, value) {
  var objValue = object[key];
  if (!(hasOwnProperty$7.call(object, key) && eq(objValue, value)) || value === void 0 && !(key in object)) {
    baseAssignValue(object, key, value);
  }
}
function copyObject(source, props, object, customizer) {
  var isNew = !object;
  object || (object = {});
  var index = -1, length = props.length;
  while (++index < length) {
    var key = props[index];
    var newValue = customizer ? customizer(object[key], source[key], key, object, source) : void 0;
    if (newValue === void 0) {
      newValue = source[key];
    }
    if (isNew) {
      baseAssignValue(object, key, newValue);
    } else {
      assignValue(object, key, newValue);
    }
  }
  return object;
}
function baseTimes(n, iteratee) {
  var index = -1, result = Array(n);
  while (++index < n) {
    result[index] = iteratee(index);
  }
  return result;
}
var MAX_SAFE_INTEGER = 9007199254740991;
var reIsUint = /^(?:0|[1-9]\d*)$/;
function isIndex(value, length) {
  var type = typeof value;
  length = length == null ? MAX_SAFE_INTEGER : length;
  return !!length && (type == "number" || type != "symbol" && reIsUint.test(value)) && (value > -1 && value % 1 == 0 && value < length);
}
var objectProto$5 = Object.prototype;
var hasOwnProperty$6 = objectProto$5.hasOwnProperty;
function arrayLikeKeys(value, inherited) {
  var isArr = isArray$1(value), isArg = !isArr && isArguments$1(value), isBuff = !isArr && !isArg && isBuffer$1(value), isType = !isArr && !isArg && !isBuff && isTypedArray$1(value), skipIndexes = isArr || isArg || isBuff || isType, result = skipIndexes ? baseTimes(value.length, String) : [], length = result.length;
  for (var key in value) {
    if ((inherited || hasOwnProperty$6.call(value, key)) && !(skipIndexes && (key == "length" || isBuff && (key == "offset" || key == "parent") || isType && (key == "buffer" || key == "byteLength" || key == "byteOffset") || isIndex(key, length)))) {
      result.push(key);
    }
  }
  return result;
}
function nativeKeysIn(object) {
  var result = [];
  if (object != null) {
    for (var key in Object(object)) {
      result.push(key);
    }
  }
  return result;
}
var objectProto$4 = Object.prototype;
var hasOwnProperty$5 = objectProto$4.hasOwnProperty;
function baseKeysIn(object) {
  if (!isObject(object)) {
    return nativeKeysIn(object);
  }
  var isProto = isPrototype(object), result = [];
  for (var key in object) {
    if (!(key == "constructor" && (isProto || !hasOwnProperty$5.call(object, key)))) {
      result.push(key);
    }
  }
  return result;
}
function keysIn(object) {
  return isArrayLike(object) ? arrayLikeKeys(object, true) : baseKeysIn(object);
}
function toPlainObject(value) {
  return copyObject(value, keysIn(value));
}
function baseMergeDeep(object, source, key, srcIndex, mergeFunc, customizer, stack) {
  var objValue = safeGet(object, key), srcValue = safeGet(source, key), stacked = stack.get(srcValue);
  if (stacked) {
    assignMergeValue(object, key, stacked);
    return;
  }
  var newValue = customizer ? customizer(objValue, srcValue, key + "", object, source, stack) : void 0;
  var isCommon = newValue === void 0;
  if (isCommon) {
    var isArr = isArray$1(srcValue), isBuff = !isArr && isBuffer$1(srcValue), isTyped = !isArr && !isBuff && isTypedArray$1(srcValue);
    newValue = srcValue;
    if (isArr || isBuff || isTyped) {
      if (isArray$1(objValue)) {
        newValue = objValue;
      } else if (isArrayLikeObject(objValue)) {
        newValue = copyArray(objValue);
      } else if (isBuff) {
        isCommon = false;
        newValue = cloneBuffer(srcValue, true);
      } else if (isTyped) {
        isCommon = false;
        newValue = cloneTypedArray(srcValue, true);
      } else {
        newValue = [];
      }
    } else if (isPlainObject(srcValue) || isArguments$1(srcValue)) {
      newValue = objValue;
      if (isArguments$1(objValue)) {
        newValue = toPlainObject(objValue);
      } else if (!isObject(objValue) || isFunction(objValue)) {
        newValue = initCloneObject(srcValue);
      }
    } else {
      isCommon = false;
    }
  }
  if (isCommon) {
    stack.set(srcValue, newValue);
    mergeFunc(newValue, srcValue, srcIndex, customizer, stack);
    stack["delete"](srcValue);
  }
  assignMergeValue(object, key, newValue);
}
function baseMerge(object, source, srcIndex, customizer, stack) {
  if (object === source) {
    return;
  }
  baseFor$1(source, function(srcValue, key) {
    stack || (stack = new Stack$1());
    if (isObject(srcValue)) {
      baseMergeDeep(object, source, key, srcIndex, baseMerge, customizer, stack);
    } else {
      var newValue = customizer ? customizer(safeGet(object, key), srcValue, key + "", object, source, stack) : void 0;
      if (newValue === void 0) {
        newValue = srcValue;
      }
      assignMergeValue(object, key, newValue);
    }
  }, keysIn);
}
function identity(value) {
  return value;
}
function apply(func, thisArg, args) {
  switch (args.length) {
    case 0:
      return func.call(thisArg);
    case 1:
      return func.call(thisArg, args[0]);
    case 2:
      return func.call(thisArg, args[0], args[1]);
    case 3:
      return func.call(thisArg, args[0], args[1], args[2]);
  }
  return func.apply(thisArg, args);
}
var nativeMax$1 = Math.max;
function overRest(func, start, transform2) {
  start = nativeMax$1(start === void 0 ? func.length - 1 : start, 0);
  return function() {
    var args = arguments, index = -1, length = nativeMax$1(args.length - start, 0), array = Array(length);
    while (++index < length) {
      array[index] = args[start + index];
    }
    index = -1;
    var otherArgs = Array(start + 1);
    while (++index < start) {
      otherArgs[index] = args[index];
    }
    otherArgs[start] = transform2(array);
    return apply(func, this, otherArgs);
  };
}
function constant(value) {
  return function() {
    return value;
  };
}
var baseSetToString = !defineProperty$1 ? identity : function(func, string) {
  return defineProperty$1(func, "toString", {
    "configurable": true,
    "enumerable": false,
    "value": constant(string),
    "writable": true
  });
};
var baseSetToString$1 = baseSetToString;
var HOT_COUNT = 800, HOT_SPAN = 16;
var nativeNow = Date.now;
function shortOut(func) {
  var count = 0, lastCalled = 0;
  return function() {
    var stamp = nativeNow(), remaining = HOT_SPAN - (stamp - lastCalled);
    lastCalled = stamp;
    if (remaining > 0) {
      if (++count >= HOT_COUNT) {
        return arguments[0];
      }
    } else {
      count = 0;
    }
    return func.apply(void 0, arguments);
  };
}
var setToString = shortOut(baseSetToString$1);
var setToString$1 = setToString;
function baseRest(func, start) {
  return setToString$1(overRest(func, start, identity), func + "");
}
function isIterateeCall(value, index, object) {
  if (!isObject(object)) {
    return false;
  }
  var type = typeof index;
  if (type == "number" ? isArrayLike(object) && isIndex(index, object.length) : type == "string" && index in object) {
    return eq(object[index], value);
  }
  return false;
}
function createAssigner(assigner) {
  return baseRest(function(object, sources) {
    var index = -1, length = sources.length, customizer = length > 1 ? sources[length - 1] : void 0, guard = length > 2 ? sources[2] : void 0;
    customizer = assigner.length > 3 && typeof customizer == "function" ? (length--, customizer) : void 0;
    if (guard && isIterateeCall(sources[0], sources[1], guard)) {
      customizer = length < 3 ? void 0 : customizer;
      length = 1;
    }
    object = Object(object);
    while (++index < length) {
      var source = sources[index];
      if (source) {
        assigner(object, source, index, customizer);
      }
    }
    return object;
  });
}
var merge = createAssigner(function(object, source, srcIndex) {
  baseMerge(object, source, srcIndex);
});
var merge$1 = merge;
var Raised = function Raised2(_ref) {
  var zDepth = _ref.zDepth, radius = _ref.radius, background = _ref.background, children = _ref.children, _ref$styles = _ref.styles, passedStyles = _ref$styles === void 0 ? {} : _ref$styles;
  var styles = _default$2(merge$1({
    "default": {
      wrap: {
        position: "relative",
        display: "inline-block"
      },
      content: {
        position: "relative"
      },
      bg: {
        absolute: "0px 0px 0px 0px",
        boxShadow: "0 " + zDepth + "px " + zDepth * 4 + "px rgba(0,0,0,.24)",
        borderRadius: radius,
        background
      }
    },
    "zDepth-0": {
      bg: {
        boxShadow: "none"
      }
    },
    "zDepth-1": {
      bg: {
        boxShadow: "0 2px 10px rgba(0,0,0,.12), 0 2px 5px rgba(0,0,0,.16)"
      }
    },
    "zDepth-2": {
      bg: {
        boxShadow: "0 6px 20px rgba(0,0,0,.19), 0 8px 17px rgba(0,0,0,.2)"
      }
    },
    "zDepth-3": {
      bg: {
        boxShadow: "0 17px 50px rgba(0,0,0,.19), 0 12px 15px rgba(0,0,0,.24)"
      }
    },
    "zDepth-4": {
      bg: {
        boxShadow: "0 25px 55px rgba(0,0,0,.21), 0 16px 28px rgba(0,0,0,.22)"
      }
    },
    "zDepth-5": {
      bg: {
        boxShadow: "0 40px 77px rgba(0,0,0,.22), 0 27px 24px rgba(0,0,0,.2)"
      }
    },
    "square": {
      bg: {
        borderRadius: "0"
      }
    },
    "circle": {
      bg: {
        borderRadius: "50%"
      }
    }
  }, passedStyles), { "zDepth-1": zDepth === 1 });
  return React__default.createElement("div", { style: styles.wrap }, React__default.createElement("div", { style: styles.bg }), React__default.createElement("div", { style: styles.content }, children));
};
Raised.propTypes = {
  background: PropTypes.string,
  zDepth: PropTypes.oneOf([0, 1, 2, 3, 4, 5]),
  radius: PropTypes.number,
  styles: PropTypes.object
};
Raised.defaultProps = {
  background: "#fff",
  zDepth: 1,
  radius: 2,
  styles: {}
};
var now = function() {
  return root$1.Date.now();
};
var now$1 = now;
var reWhitespace = /\s/;
function trimmedEndIndex(string) {
  var index = string.length;
  while (index-- && reWhitespace.test(string.charAt(index))) {
  }
  return index;
}
var reTrimStart = /^\s+/;
function baseTrim(string) {
  return string ? string.slice(0, trimmedEndIndex(string) + 1).replace(reTrimStart, "") : string;
}
var symbolTag$1 = "[object Symbol]";
function isSymbol(value) {
  return typeof value == "symbol" || isObjectLike(value) && baseGetTag(value) == symbolTag$1;
}
var NAN = 0 / 0;
var reIsBadHex = /^[-+]0x[0-9a-f]+$/i;
var reIsBinary = /^0b[01]+$/i;
var reIsOctal = /^0o[0-7]+$/i;
var freeParseInt = parseInt;
function toNumber(value) {
  if (typeof value == "number") {
    return value;
  }
  if (isSymbol(value)) {
    return NAN;
  }
  if (isObject(value)) {
    var other = typeof value.valueOf == "function" ? value.valueOf() : value;
    value = isObject(other) ? other + "" : other;
  }
  if (typeof value != "string") {
    return value === 0 ? value : +value;
  }
  value = baseTrim(value);
  var isBinary = reIsBinary.test(value);
  return isBinary || reIsOctal.test(value) ? freeParseInt(value.slice(2), isBinary ? 2 : 8) : reIsBadHex.test(value) ? NAN : +value;
}
var FUNC_ERROR_TEXT$2 = "Expected a function";
var nativeMax = Math.max, nativeMin = Math.min;
function debounce(func, wait, options) {
  var lastArgs, lastThis, maxWait, result, timerId, lastCallTime, lastInvokeTime = 0, leading = false, maxing = false, trailing = true;
  if (typeof func != "function") {
    throw new TypeError(FUNC_ERROR_TEXT$2);
  }
  wait = toNumber(wait) || 0;
  if (isObject(options)) {
    leading = !!options.leading;
    maxing = "maxWait" in options;
    maxWait = maxing ? nativeMax(toNumber(options.maxWait) || 0, wait) : maxWait;
    trailing = "trailing" in options ? !!options.trailing : trailing;
  }
  function invokeFunc(time) {
    var args = lastArgs, thisArg = lastThis;
    lastArgs = lastThis = void 0;
    lastInvokeTime = time;
    result = func.apply(thisArg, args);
    return result;
  }
  function leadingEdge(time) {
    lastInvokeTime = time;
    timerId = setTimeout(timerExpired, wait);
    return leading ? invokeFunc(time) : result;
  }
  function remainingWait(time) {
    var timeSinceLastCall = time - lastCallTime, timeSinceLastInvoke = time - lastInvokeTime, timeWaiting = wait - timeSinceLastCall;
    return maxing ? nativeMin(timeWaiting, maxWait - timeSinceLastInvoke) : timeWaiting;
  }
  function shouldInvoke(time) {
    var timeSinceLastCall = time - lastCallTime, timeSinceLastInvoke = time - lastInvokeTime;
    return lastCallTime === void 0 || timeSinceLastCall >= wait || timeSinceLastCall < 0 || maxing && timeSinceLastInvoke >= maxWait;
  }
  function timerExpired() {
    var time = now$1();
    if (shouldInvoke(time)) {
      return trailingEdge(time);
    }
    timerId = setTimeout(timerExpired, remainingWait(time));
  }
  function trailingEdge(time) {
    timerId = void 0;
    if (trailing && lastArgs) {
      return invokeFunc(time);
    }
    lastArgs = lastThis = void 0;
    return result;
  }
  function cancel() {
    if (timerId !== void 0) {
      clearTimeout(timerId);
    }
    lastInvokeTime = 0;
    lastArgs = lastCallTime = lastThis = timerId = void 0;
  }
  function flush() {
    return timerId === void 0 ? result : trailingEdge(now$1());
  }
  function debounced() {
    var time = now$1(), isInvoking = shouldInvoke(time);
    lastArgs = arguments;
    lastThis = this;
    lastCallTime = time;
    if (isInvoking) {
      if (timerId === void 0) {
        return leadingEdge(lastCallTime);
      }
      if (maxing) {
        clearTimeout(timerId);
        timerId = setTimeout(timerExpired, wait);
        return invokeFunc(lastCallTime);
      }
    }
    if (timerId === void 0) {
      timerId = setTimeout(timerExpired, wait);
    }
    return result;
  }
  debounced.cancel = cancel;
  debounced.flush = flush;
  return debounced;
}
var FUNC_ERROR_TEXT$1 = "Expected a function";
function throttle(func, wait, options) {
  var leading = true, trailing = true;
  if (typeof func != "function") {
    throw new TypeError(FUNC_ERROR_TEXT$1);
  }
  if (isObject(options)) {
    leading = "leading" in options ? !!options.leading : leading;
    trailing = "trailing" in options ? !!options.trailing : trailing;
  }
  return debounce(func, wait, {
    "leading": leading,
    "maxWait": wait,
    "trailing": trailing
  });
}
var calculateChange3 = function calculateChange4(e, hsl, container) {
  var _container$getBoundin = container.getBoundingClientRect(), containerWidth = _container$getBoundin.width, containerHeight = _container$getBoundin.height;
  var x = typeof e.pageX === "number" ? e.pageX : e.touches[0].pageX;
  var y2 = typeof e.pageY === "number" ? e.pageY : e.touches[0].pageY;
  var left = x - (container.getBoundingClientRect().left + window.pageXOffset);
  var top = y2 - (container.getBoundingClientRect().top + window.pageYOffset);
  if (left < 0) {
    left = 0;
  } else if (left > containerWidth) {
    left = containerWidth;
  }
  if (top < 0) {
    top = 0;
  } else if (top > containerHeight) {
    top = containerHeight;
  }
  var saturation = left / containerWidth;
  var bright = 1 - top / containerHeight;
  return {
    h: hsl.h,
    s: saturation,
    v: bright,
    a: hsl.a,
    source: "hsv"
  };
};
var _createClass$4 = function() {
  function defineProperties(target, props) {
    for (var i = 0; i < props.length; i++) {
      var descriptor = props[i];
      descriptor.enumerable = descriptor.enumerable || false;
      descriptor.configurable = true;
      if ("value" in descriptor)
        descriptor.writable = true;
      Object.defineProperty(target, descriptor.key, descriptor);
    }
  }
  return function(Constructor, protoProps, staticProps) {
    if (protoProps)
      defineProperties(Constructor.prototype, protoProps);
    if (staticProps)
      defineProperties(Constructor, staticProps);
    return Constructor;
  };
}();
function _classCallCheck$4(instance, Constructor) {
  if (!(instance instanceof Constructor)) {
    throw new TypeError("Cannot call a class as a function");
  }
}
function _possibleConstructorReturn$4(self2, call) {
  if (!self2) {
    throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
  }
  return call && (typeof call === "object" || typeof call === "function") ? call : self2;
}
function _inherits$4(subClass, superClass) {
  if (typeof superClass !== "function" && superClass !== null) {
    throw new TypeError("Super expression must either be null or a function, not " + typeof superClass);
  }
  subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } });
  if (superClass)
    Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass;
}
var Saturation = function(_ref) {
  _inherits$4(Saturation2, _ref);
  function Saturation2(props) {
    _classCallCheck$4(this, Saturation2);
    var _this = _possibleConstructorReturn$4(this, (Saturation2.__proto__ || Object.getPrototypeOf(Saturation2)).call(this, props));
    _this.handleChange = function(e) {
      typeof _this.props.onChange === "function" && _this.throttle(_this.props.onChange, calculateChange3(e, _this.props.hsl, _this.container), e);
    };
    _this.handleMouseDown = function(e) {
      _this.handleChange(e);
      var renderWindow = _this.getContainerRenderWindow();
      renderWindow.addEventListener("mousemove", _this.handleChange);
      renderWindow.addEventListener("mouseup", _this.handleMouseUp);
    };
    _this.handleMouseUp = function() {
      _this.unbindEventListeners();
    };
    _this.throttle = throttle(function(fn, data, e) {
      fn(data, e);
    }, 50);
    return _this;
  }
  _createClass$4(Saturation2, [{
    key: "componentWillUnmount",
    value: function componentWillUnmount() {
      this.throttle.cancel();
      this.unbindEventListeners();
    }
  }, {
    key: "getContainerRenderWindow",
    value: function getContainerRenderWindow() {
      var container = this.container;
      var renderWindow = window;
      while (!renderWindow.document.contains(container) && renderWindow.parent !== renderWindow) {
        renderWindow = renderWindow.parent;
      }
      return renderWindow;
    }
  }, {
    key: "unbindEventListeners",
    value: function unbindEventListeners() {
      var renderWindow = this.getContainerRenderWindow();
      renderWindow.removeEventListener("mousemove", this.handleChange);
      renderWindow.removeEventListener("mouseup", this.handleMouseUp);
    }
  }, {
    key: "render",
    value: function render3() {
      var _this2 = this;
      var _ref2 = this.props.style || {}, color = _ref2.color, white = _ref2.white, black = _ref2.black, pointer = _ref2.pointer, circle = _ref2.circle;
      var styles = _default$2({
        "default": {
          color: {
            absolute: "0px 0px 0px 0px",
            background: "hsl(" + this.props.hsl.h + ",100%, 50%)",
            borderRadius: this.props.radius
          },
          white: {
            absolute: "0px 0px 0px 0px",
            borderRadius: this.props.radius
          },
          black: {
            absolute: "0px 0px 0px 0px",
            boxShadow: this.props.shadow,
            borderRadius: this.props.radius
          },
          pointer: {
            position: "absolute",
            top: -(this.props.hsv.v * 100) + 100 + "%",
            left: this.props.hsv.s * 100 + "%",
            cursor: "default"
          },
          circle: {
            width: "4px",
            height: "4px",
            boxShadow: "0 0 0 1.5px #fff, inset 0 0 1px 1px rgba(0,0,0,.3),\n            0 0 1px 2px rgba(0,0,0,.4)",
            borderRadius: "50%",
            cursor: "hand",
            transform: "translate(-2px, -2px)"
          }
        },
        "custom": {
          color,
          white,
          black,
          pointer,
          circle
        }
      }, { "custom": !!this.props.style });
      return React__default.createElement("div", {
        style: styles.color,
        ref: function ref(container) {
          return _this2.container = container;
        },
        onMouseDown: this.handleMouseDown,
        onTouchMove: this.handleChange,
        onTouchStart: this.handleChange
      }, React__default.createElement("style", null, "\n          .saturation-white {\n            background: -webkit-linear-gradient(to right, #fff, rgba(255,255,255,0));\n            background: linear-gradient(to right, #fff, rgba(255,255,255,0));\n          }\n          .saturation-black {\n            background: -webkit-linear-gradient(to top, #000, rgba(0,0,0,0));\n            background: linear-gradient(to top, #000, rgba(0,0,0,0));\n          }\n        "), React__default.createElement("div", { style: styles.white, className: "saturation-white" }, React__default.createElement("div", { style: styles.black, className: "saturation-black" }), React__default.createElement("div", { style: styles.pointer }, this.props.pointer ? React__default.createElement(this.props.pointer, this.props) : React__default.createElement("div", { style: styles.circle }))));
    }
  }]);
  return Saturation2;
}(PureComponent || Component);
function arrayEach(array, iteratee) {
  var index = -1, length = array == null ? 0 : array.length;
  while (++index < length) {
    if (iteratee(array[index], index, array) === false) {
      break;
    }
  }
  return array;
}
var nativeKeys = overArg(Object.keys, Object);
var nativeKeys$1 = nativeKeys;
var objectProto$3 = Object.prototype;
var hasOwnProperty$4 = objectProto$3.hasOwnProperty;
function baseKeys(object) {
  if (!isPrototype(object)) {
    return nativeKeys$1(object);
  }
  var result = [];
  for (var key in Object(object)) {
    if (hasOwnProperty$4.call(object, key) && key != "constructor") {
      result.push(key);
    }
  }
  return result;
}
function keys(object) {
  return isArrayLike(object) ? arrayLikeKeys(object) : baseKeys(object);
}
function baseForOwn(object, iteratee) {
  return object && baseFor$1(object, iteratee, keys);
}
function createBaseEach(eachFunc, fromRight) {
  return function(collection, iteratee) {
    if (collection == null) {
      return collection;
    }
    if (!isArrayLike(collection)) {
      return eachFunc(collection, iteratee);
    }
    var length = collection.length, index = fromRight ? length : -1, iterable = Object(collection);
    while (fromRight ? index-- : ++index < length) {
      if (iteratee(iterable[index], index, iterable) === false) {
        break;
      }
    }
    return collection;
  };
}
var baseEach = createBaseEach(baseForOwn);
var baseEach$1 = baseEach;
function castFunction(value) {
  return typeof value == "function" ? value : identity;
}
function forEach(collection, iteratee) {
  var func = isArray$1(collection) ? arrayEach : baseEach$1;
  return func(collection, castFunction(iteratee));
}
var tinycolor$1 = { exports: {} };
(function(module2) {
  (function(Math2) {
    var trimLeft = /^\s+/, trimRight = /\s+$/, tinyCounter = 0, mathRound = Math2.round, mathMin = Math2.min, mathMax = Math2.max, mathRandom = Math2.random;
    function tinycolor2(color, opts) {
      color = color ? color : "";
      opts = opts || {};
      if (color instanceof tinycolor2) {
        return color;
      }
      if (!(this instanceof tinycolor2)) {
        return new tinycolor2(color, opts);
      }
      var rgb = inputToRGB(color);
      this._originalInput = color, this._r = rgb.r, this._g = rgb.g, this._b = rgb.b, this._a = rgb.a, this._roundA = mathRound(100 * this._a) / 100, this._format = opts.format || rgb.format;
      this._gradientType = opts.gradientType;
      if (this._r < 1) {
        this._r = mathRound(this._r);
      }
      if (this._g < 1) {
        this._g = mathRound(this._g);
      }
      if (this._b < 1) {
        this._b = mathRound(this._b);
      }
      this._ok = rgb.ok;
      this._tc_id = tinyCounter++;
    }
    tinycolor2.prototype = {
      isDark: function() {
        return this.getBrightness() < 128;
      },
      isLight: function() {
        return !this.isDark();
      },
      isValid: function() {
        return this._ok;
      },
      getOriginalInput: function() {
        return this._originalInput;
      },
      getFormat: function() {
        return this._format;
      },
      getAlpha: function() {
        return this._a;
      },
      getBrightness: function() {
        var rgb = this.toRgb();
        return (rgb.r * 299 + rgb.g * 587 + rgb.b * 114) / 1e3;
      },
      getLuminance: function() {
        var rgb = this.toRgb();
        var RsRGB, GsRGB, BsRGB, R2, G2, B2;
        RsRGB = rgb.r / 255;
        GsRGB = rgb.g / 255;
        BsRGB = rgb.b / 255;
        if (RsRGB <= 0.03928) {
          R2 = RsRGB / 12.92;
        } else {
          R2 = Math2.pow((RsRGB + 0.055) / 1.055, 2.4);
        }
        if (GsRGB <= 0.03928) {
          G2 = GsRGB / 12.92;
        } else {
          G2 = Math2.pow((GsRGB + 0.055) / 1.055, 2.4);
        }
        if (BsRGB <= 0.03928) {
          B2 = BsRGB / 12.92;
        } else {
          B2 = Math2.pow((BsRGB + 0.055) / 1.055, 2.4);
        }
        return 0.2126 * R2 + 0.7152 * G2 + 0.0722 * B2;
      },
      setAlpha: function(value) {
        this._a = boundAlpha(value);
        this._roundA = mathRound(100 * this._a) / 100;
        return this;
      },
      toHsv: function() {
        var hsv = rgbToHsv(this._r, this._g, this._b);
        return { h: hsv.h * 360, s: hsv.s, v: hsv.v, a: this._a };
      },
      toHsvString: function() {
        var hsv = rgbToHsv(this._r, this._g, this._b);
        var h = mathRound(hsv.h * 360), s = mathRound(hsv.s * 100), v = mathRound(hsv.v * 100);
        return this._a == 1 ? "hsv(" + h + ", " + s + "%, " + v + "%)" : "hsva(" + h + ", " + s + "%, " + v + "%, " + this._roundA + ")";
      },
      toHsl: function() {
        var hsl = rgbToHsl(this._r, this._g, this._b);
        return { h: hsl.h * 360, s: hsl.s, l: hsl.l, a: this._a };
      },
      toHslString: function() {
        var hsl = rgbToHsl(this._r, this._g, this._b);
        var h = mathRound(hsl.h * 360), s = mathRound(hsl.s * 100), l = mathRound(hsl.l * 100);
        return this._a == 1 ? "hsl(" + h + ", " + s + "%, " + l + "%)" : "hsla(" + h + ", " + s + "%, " + l + "%, " + this._roundA + ")";
      },
      toHex: function(allow3Char) {
        return rgbToHex(this._r, this._g, this._b, allow3Char);
      },
      toHexString: function(allow3Char) {
        return "#" + this.toHex(allow3Char);
      },
      toHex8: function(allow4Char) {
        return rgbaToHex(this._r, this._g, this._b, this._a, allow4Char);
      },
      toHex8String: function(allow4Char) {
        return "#" + this.toHex8(allow4Char);
      },
      toRgb: function() {
        return { r: mathRound(this._r), g: mathRound(this._g), b: mathRound(this._b), a: this._a };
      },
      toRgbString: function() {
        return this._a == 1 ? "rgb(" + mathRound(this._r) + ", " + mathRound(this._g) + ", " + mathRound(this._b) + ")" : "rgba(" + mathRound(this._r) + ", " + mathRound(this._g) + ", " + mathRound(this._b) + ", " + this._roundA + ")";
      },
      toPercentageRgb: function() {
        return { r: mathRound(bound01(this._r, 255) * 100) + "%", g: mathRound(bound01(this._g, 255) * 100) + "%", b: mathRound(bound01(this._b, 255) * 100) + "%", a: this._a };
      },
      toPercentageRgbString: function() {
        return this._a == 1 ? "rgb(" + mathRound(bound01(this._r, 255) * 100) + "%, " + mathRound(bound01(this._g, 255) * 100) + "%, " + mathRound(bound01(this._b, 255) * 100) + "%)" : "rgba(" + mathRound(bound01(this._r, 255) * 100) + "%, " + mathRound(bound01(this._g, 255) * 100) + "%, " + mathRound(bound01(this._b, 255) * 100) + "%, " + this._roundA + ")";
      },
      toName: function() {
        if (this._a === 0) {
          return "transparent";
        }
        if (this._a < 1) {
          return false;
        }
        return hexNames[rgbToHex(this._r, this._g, this._b, true)] || false;
      },
      toFilter: function(secondColor) {
        var hex8String = "#" + rgbaToArgbHex(this._r, this._g, this._b, this._a);
        var secondHex8String = hex8String;
        var gradientType = this._gradientType ? "GradientType = 1, " : "";
        if (secondColor) {
          var s = tinycolor2(secondColor);
          secondHex8String = "#" + rgbaToArgbHex(s._r, s._g, s._b, s._a);
        }
        return "progid:DXImageTransform.Microsoft.gradient(" + gradientType + "startColorstr=" + hex8String + ",endColorstr=" + secondHex8String + ")";
      },
      toString: function(format) {
        var formatSet = !!format;
        format = format || this._format;
        var formattedString = false;
        var hasAlpha = this._a < 1 && this._a >= 0;
        var needsAlphaFormat = !formatSet && hasAlpha && (format === "hex" || format === "hex6" || format === "hex3" || format === "hex4" || format === "hex8" || format === "name");
        if (needsAlphaFormat) {
          if (format === "name" && this._a === 0) {
            return this.toName();
          }
          return this.toRgbString();
        }
        if (format === "rgb") {
          formattedString = this.toRgbString();
        }
        if (format === "prgb") {
          formattedString = this.toPercentageRgbString();
        }
        if (format === "hex" || format === "hex6") {
          formattedString = this.toHexString();
        }
        if (format === "hex3") {
          formattedString = this.toHexString(true);
        }
        if (format === "hex4") {
          formattedString = this.toHex8String(true);
        }
        if (format === "hex8") {
          formattedString = this.toHex8String();
        }
        if (format === "name") {
          formattedString = this.toName();
        }
        if (format === "hsl") {
          formattedString = this.toHslString();
        }
        if (format === "hsv") {
          formattedString = this.toHsvString();
        }
        return formattedString || this.toHexString();
      },
      clone: function() {
        return tinycolor2(this.toString());
      },
      _applyModification: function(fn, args) {
        var color = fn.apply(null, [this].concat([].slice.call(args)));
        this._r = color._r;
        this._g = color._g;
        this._b = color._b;
        this.setAlpha(color._a);
        return this;
      },
      lighten: function() {
        return this._applyModification(lighten, arguments);
      },
      brighten: function() {
        return this._applyModification(brighten, arguments);
      },
      darken: function() {
        return this._applyModification(darken, arguments);
      },
      desaturate: function() {
        return this._applyModification(desaturate, arguments);
      },
      saturate: function() {
        return this._applyModification(saturate, arguments);
      },
      greyscale: function() {
        return this._applyModification(greyscale, arguments);
      },
      spin: function() {
        return this._applyModification(spin, arguments);
      },
      _applyCombination: function(fn, args) {
        return fn.apply(null, [this].concat([].slice.call(args)));
      },
      analogous: function() {
        return this._applyCombination(analogous, arguments);
      },
      complement: function() {
        return this._applyCombination(complement, arguments);
      },
      monochromatic: function() {
        return this._applyCombination(monochromatic, arguments);
      },
      splitcomplement: function() {
        return this._applyCombination(splitcomplement, arguments);
      },
      triad: function() {
        return this._applyCombination(triad, arguments);
      },
      tetrad: function() {
        return this._applyCombination(tetrad, arguments);
      }
    };
    tinycolor2.fromRatio = function(color, opts) {
      if (typeof color == "object") {
        var newColor = {};
        for (var i in color) {
          if (color.hasOwnProperty(i)) {
            if (i === "a") {
              newColor[i] = color[i];
            } else {
              newColor[i] = convertToPercentage(color[i]);
            }
          }
        }
        color = newColor;
      }
      return tinycolor2(color, opts);
    };
    function inputToRGB(color) {
      var rgb = { r: 0, g: 0, b: 0 };
      var a = 1;
      var s = null;
      var v = null;
      var l = null;
      var ok2 = false;
      var format = false;
      if (typeof color == "string") {
        color = stringInputToObject(color);
      }
      if (typeof color == "object") {
        if (isValidCSSUnit(color.r) && isValidCSSUnit(color.g) && isValidCSSUnit(color.b)) {
          rgb = rgbToRgb(color.r, color.g, color.b);
          ok2 = true;
          format = String(color.r).substr(-1) === "%" ? "prgb" : "rgb";
        } else if (isValidCSSUnit(color.h) && isValidCSSUnit(color.s) && isValidCSSUnit(color.v)) {
          s = convertToPercentage(color.s);
          v = convertToPercentage(color.v);
          rgb = hsvToRgb(color.h, s, v);
          ok2 = true;
          format = "hsv";
        } else if (isValidCSSUnit(color.h) && isValidCSSUnit(color.s) && isValidCSSUnit(color.l)) {
          s = convertToPercentage(color.s);
          l = convertToPercentage(color.l);
          rgb = hslToRgb(color.h, s, l);
          ok2 = true;
          format = "hsl";
        }
        if (color.hasOwnProperty("a")) {
          a = color.a;
        }
      }
      a = boundAlpha(a);
      return {
        ok: ok2,
        format: color.format || format,
        r: mathMin(255, mathMax(rgb.r, 0)),
        g: mathMin(255, mathMax(rgb.g, 0)),
        b: mathMin(255, mathMax(rgb.b, 0)),
        a
      };
    }
    function rgbToRgb(r2, g, b) {
      return {
        r: bound01(r2, 255) * 255,
        g: bound01(g, 255) * 255,
        b: bound01(b, 255) * 255
      };
    }
    function rgbToHsl(r2, g, b) {
      r2 = bound01(r2, 255);
      g = bound01(g, 255);
      b = bound01(b, 255);
      var max = mathMax(r2, g, b), min = mathMin(r2, g, b);
      var h, s, l = (max + min) / 2;
      if (max == min) {
        h = s = 0;
      } else {
        var d = max - min;
        s = l > 0.5 ? d / (2 - max - min) : d / (max + min);
        switch (max) {
          case r2:
            h = (g - b) / d + (g < b ? 6 : 0);
            break;
          case g:
            h = (b - r2) / d + 2;
            break;
          case b:
            h = (r2 - g) / d + 4;
            break;
        }
        h /= 6;
      }
      return { h, s, l };
    }
    function hslToRgb(h, s, l) {
      var r2, g, b;
      h = bound01(h, 360);
      s = bound01(s, 100);
      l = bound01(l, 100);
      function hue2rgb(p2, q2, t) {
        if (t < 0)
          t += 1;
        if (t > 1)
          t -= 1;
        if (t < 1 / 6)
          return p2 + (q2 - p2) * 6 * t;
        if (t < 1 / 2)
          return q2;
        if (t < 2 / 3)
          return p2 + (q2 - p2) * (2 / 3 - t) * 6;
        return p2;
      }
      if (s === 0) {
        r2 = g = b = l;
      } else {
        var q = l < 0.5 ? l * (1 + s) : l + s - l * s;
        var p = 2 * l - q;
        r2 = hue2rgb(p, q, h + 1 / 3);
        g = hue2rgb(p, q, h);
        b = hue2rgb(p, q, h - 1 / 3);
      }
      return { r: r2 * 255, g: g * 255, b: b * 255 };
    }
    function rgbToHsv(r2, g, b) {
      r2 = bound01(r2, 255);
      g = bound01(g, 255);
      b = bound01(b, 255);
      var max = mathMax(r2, g, b), min = mathMin(r2, g, b);
      var h, s, v = max;
      var d = max - min;
      s = max === 0 ? 0 : d / max;
      if (max == min) {
        h = 0;
      } else {
        switch (max) {
          case r2:
            h = (g - b) / d + (g < b ? 6 : 0);
            break;
          case g:
            h = (b - r2) / d + 2;
            break;
          case b:
            h = (r2 - g) / d + 4;
            break;
        }
        h /= 6;
      }
      return { h, s, v };
    }
    function hsvToRgb(h, s, v) {
      h = bound01(h, 360) * 6;
      s = bound01(s, 100);
      v = bound01(v, 100);
      var i = Math2.floor(h), f = h - i, p = v * (1 - s), q = v * (1 - f * s), t = v * (1 - (1 - f) * s), mod = i % 6, r2 = [v, q, p, p, t, v][mod], g = [t, v, v, q, p, p][mod], b = [p, p, t, v, v, q][mod];
      return { r: r2 * 255, g: g * 255, b: b * 255 };
    }
    function rgbToHex(r2, g, b, allow3Char) {
      var hex = [
        pad2(mathRound(r2).toString(16)),
        pad2(mathRound(g).toString(16)),
        pad2(mathRound(b).toString(16))
      ];
      if (allow3Char && hex[0].charAt(0) == hex[0].charAt(1) && hex[1].charAt(0) == hex[1].charAt(1) && hex[2].charAt(0) == hex[2].charAt(1)) {
        return hex[0].charAt(0) + hex[1].charAt(0) + hex[2].charAt(0);
      }
      return hex.join("");
    }
    function rgbaToHex(r2, g, b, a, allow4Char) {
      var hex = [
        pad2(mathRound(r2).toString(16)),
        pad2(mathRound(g).toString(16)),
        pad2(mathRound(b).toString(16)),
        pad2(convertDecimalToHex(a))
      ];
      if (allow4Char && hex[0].charAt(0) == hex[0].charAt(1) && hex[1].charAt(0) == hex[1].charAt(1) && hex[2].charAt(0) == hex[2].charAt(1) && hex[3].charAt(0) == hex[3].charAt(1)) {
        return hex[0].charAt(0) + hex[1].charAt(0) + hex[2].charAt(0) + hex[3].charAt(0);
      }
      return hex.join("");
    }
    function rgbaToArgbHex(r2, g, b, a) {
      var hex = [
        pad2(convertDecimalToHex(a)),
        pad2(mathRound(r2).toString(16)),
        pad2(mathRound(g).toString(16)),
        pad2(mathRound(b).toString(16))
      ];
      return hex.join("");
    }
    tinycolor2.equals = function(color1, color2) {
      if (!color1 || !color2) {
        return false;
      }
      return tinycolor2(color1).toRgbString() == tinycolor2(color2).toRgbString();
    };
    tinycolor2.random = function() {
      return tinycolor2.fromRatio({
        r: mathRandom(),
        g: mathRandom(),
        b: mathRandom()
      });
    };
    function desaturate(color, amount) {
      amount = amount === 0 ? 0 : amount || 10;
      var hsl = tinycolor2(color).toHsl();
      hsl.s -= amount / 100;
      hsl.s = clamp01(hsl.s);
      return tinycolor2(hsl);
    }
    function saturate(color, amount) {
      amount = amount === 0 ? 0 : amount || 10;
      var hsl = tinycolor2(color).toHsl();
      hsl.s += amount / 100;
      hsl.s = clamp01(hsl.s);
      return tinycolor2(hsl);
    }
    function greyscale(color) {
      return tinycolor2(color).desaturate(100);
    }
    function lighten(color, amount) {
      amount = amount === 0 ? 0 : amount || 10;
      var hsl = tinycolor2(color).toHsl();
      hsl.l += amount / 100;
      hsl.l = clamp01(hsl.l);
      return tinycolor2(hsl);
    }
    function brighten(color, amount) {
      amount = amount === 0 ? 0 : amount || 10;
      var rgb = tinycolor2(color).toRgb();
      rgb.r = mathMax(0, mathMin(255, rgb.r - mathRound(255 * -(amount / 100))));
      rgb.g = mathMax(0, mathMin(255, rgb.g - mathRound(255 * -(amount / 100))));
      rgb.b = mathMax(0, mathMin(255, rgb.b - mathRound(255 * -(amount / 100))));
      return tinycolor2(rgb);
    }
    function darken(color, amount) {
      amount = amount === 0 ? 0 : amount || 10;
      var hsl = tinycolor2(color).toHsl();
      hsl.l -= amount / 100;
      hsl.l = clamp01(hsl.l);
      return tinycolor2(hsl);
    }
    function spin(color, amount) {
      var hsl = tinycolor2(color).toHsl();
      var hue = (hsl.h + amount) % 360;
      hsl.h = hue < 0 ? 360 + hue : hue;
      return tinycolor2(hsl);
    }
    function complement(color) {
      var hsl = tinycolor2(color).toHsl();
      hsl.h = (hsl.h + 180) % 360;
      return tinycolor2(hsl);
    }
    function triad(color) {
      var hsl = tinycolor2(color).toHsl();
      var h = hsl.h;
      return [
        tinycolor2(color),
        tinycolor2({ h: (h + 120) % 360, s: hsl.s, l: hsl.l }),
        tinycolor2({ h: (h + 240) % 360, s: hsl.s, l: hsl.l })
      ];
    }
    function tetrad(color) {
      var hsl = tinycolor2(color).toHsl();
      var h = hsl.h;
      return [
        tinycolor2(color),
        tinycolor2({ h: (h + 90) % 360, s: hsl.s, l: hsl.l }),
        tinycolor2({ h: (h + 180) % 360, s: hsl.s, l: hsl.l }),
        tinycolor2({ h: (h + 270) % 360, s: hsl.s, l: hsl.l })
      ];
    }
    function splitcomplement(color) {
      var hsl = tinycolor2(color).toHsl();
      var h = hsl.h;
      return [
        tinycolor2(color),
        tinycolor2({ h: (h + 72) % 360, s: hsl.s, l: hsl.l }),
        tinycolor2({ h: (h + 216) % 360, s: hsl.s, l: hsl.l })
      ];
    }
    function analogous(color, results2, slices) {
      results2 = results2 || 6;
      slices = slices || 30;
      var hsl = tinycolor2(color).toHsl();
      var part = 360 / slices;
      var ret = [tinycolor2(color)];
      for (hsl.h = (hsl.h - (part * results2 >> 1) + 720) % 360; --results2; ) {
        hsl.h = (hsl.h + part) % 360;
        ret.push(tinycolor2(hsl));
      }
      return ret;
    }
    function monochromatic(color, results2) {
      results2 = results2 || 6;
      var hsv = tinycolor2(color).toHsv();
      var h = hsv.h, s = hsv.s, v = hsv.v;
      var ret = [];
      var modification = 1 / results2;
      while (results2--) {
        ret.push(tinycolor2({ h, s, v }));
        v = (v + modification) % 1;
      }
      return ret;
    }
    tinycolor2.mix = function(color1, color2, amount) {
      amount = amount === 0 ? 0 : amount || 50;
      var rgb1 = tinycolor2(color1).toRgb();
      var rgb2 = tinycolor2(color2).toRgb();
      var p = amount / 100;
      var rgba = {
        r: (rgb2.r - rgb1.r) * p + rgb1.r,
        g: (rgb2.g - rgb1.g) * p + rgb1.g,
        b: (rgb2.b - rgb1.b) * p + rgb1.b,
        a: (rgb2.a - rgb1.a) * p + rgb1.a
      };
      return tinycolor2(rgba);
    };
    tinycolor2.readability = function(color1, color2) {
      var c1 = tinycolor2(color1);
      var c2 = tinycolor2(color2);
      return (Math2.max(c1.getLuminance(), c2.getLuminance()) + 0.05) / (Math2.min(c1.getLuminance(), c2.getLuminance()) + 0.05);
    };
    tinycolor2.isReadable = function(color1, color2, wcag2) {
      var readability = tinycolor2.readability(color1, color2);
      var wcag2Parms, out;
      out = false;
      wcag2Parms = validateWCAG2Parms(wcag2);
      switch (wcag2Parms.level + wcag2Parms.size) {
        case "AAsmall":
        case "AAAlarge":
          out = readability >= 4.5;
          break;
        case "AAlarge":
          out = readability >= 3;
          break;
        case "AAAsmall":
          out = readability >= 7;
          break;
      }
      return out;
    };
    tinycolor2.mostReadable = function(baseColor, colorList, args) {
      var bestColor = null;
      var bestScore = 0;
      var readability;
      var includeFallbackColors, level, size;
      args = args || {};
      includeFallbackColors = args.includeFallbackColors;
      level = args.level;
      size = args.size;
      for (var i = 0; i < colorList.length; i++) {
        readability = tinycolor2.readability(baseColor, colorList[i]);
        if (readability > bestScore) {
          bestScore = readability;
          bestColor = tinycolor2(colorList[i]);
        }
      }
      if (tinycolor2.isReadable(baseColor, bestColor, { "level": level, "size": size }) || !includeFallbackColors) {
        return bestColor;
      } else {
        args.includeFallbackColors = false;
        return tinycolor2.mostReadable(baseColor, ["#fff", "#000"], args);
      }
    };
    var names = tinycolor2.names = {
      aliceblue: "f0f8ff",
      antiquewhite: "faebd7",
      aqua: "0ff",
      aquamarine: "7fffd4",
      azure: "f0ffff",
      beige: "f5f5dc",
      bisque: "ffe4c4",
      black: "000",
      blanchedalmond: "ffebcd",
      blue: "00f",
      blueviolet: "8a2be2",
      brown: "a52a2a",
      burlywood: "deb887",
      burntsienna: "ea7e5d",
      cadetblue: "5f9ea0",
      chartreuse: "7fff00",
      chocolate: "d2691e",
      coral: "ff7f50",
      cornflowerblue: "6495ed",
      cornsilk: "fff8dc",
      crimson: "dc143c",
      cyan: "0ff",
      darkblue: "00008b",
      darkcyan: "008b8b",
      darkgoldenrod: "b8860b",
      darkgray: "a9a9a9",
      darkgreen: "006400",
      darkgrey: "a9a9a9",
      darkkhaki: "bdb76b",
      darkmagenta: "8b008b",
      darkolivegreen: "556b2f",
      darkorange: "ff8c00",
      darkorchid: "9932cc",
      darkred: "8b0000",
      darksalmon: "e9967a",
      darkseagreen: "8fbc8f",
      darkslateblue: "483d8b",
      darkslategray: "2f4f4f",
      darkslategrey: "2f4f4f",
      darkturquoise: "00ced1",
      darkviolet: "9400d3",
      deeppink: "ff1493",
      deepskyblue: "00bfff",
      dimgray: "696969",
      dimgrey: "696969",
      dodgerblue: "1e90ff",
      firebrick: "b22222",
      floralwhite: "fffaf0",
      forestgreen: "228b22",
      fuchsia: "f0f",
      gainsboro: "dcdcdc",
      ghostwhite: "f8f8ff",
      gold: "ffd700",
      goldenrod: "daa520",
      gray: "808080",
      green: "008000",
      greenyellow: "adff2f",
      grey: "808080",
      honeydew: "f0fff0",
      hotpink: "ff69b4",
      indianred: "cd5c5c",
      indigo: "4b0082",
      ivory: "fffff0",
      khaki: "f0e68c",
      lavender: "e6e6fa",
      lavenderblush: "fff0f5",
      lawngreen: "7cfc00",
      lemonchiffon: "fffacd",
      lightblue: "add8e6",
      lightcoral: "f08080",
      lightcyan: "e0ffff",
      lightgoldenrodyellow: "fafad2",
      lightgray: "d3d3d3",
      lightgreen: "90ee90",
      lightgrey: "d3d3d3",
      lightpink: "ffb6c1",
      lightsalmon: "ffa07a",
      lightseagreen: "20b2aa",
      lightskyblue: "87cefa",
      lightslategray: "789",
      lightslategrey: "789",
      lightsteelblue: "b0c4de",
      lightyellow: "ffffe0",
      lime: "0f0",
      limegreen: "32cd32",
      linen: "faf0e6",
      magenta: "f0f",
      maroon: "800000",
      mediumaquamarine: "66cdaa",
      mediumblue: "0000cd",
      mediumorchid: "ba55d3",
      mediumpurple: "9370db",
      mediumseagreen: "3cb371",
      mediumslateblue: "7b68ee",
      mediumspringgreen: "00fa9a",
      mediumturquoise: "48d1cc",
      mediumvioletred: "c71585",
      midnightblue: "191970",
      mintcream: "f5fffa",
      mistyrose: "ffe4e1",
      moccasin: "ffe4b5",
      navajowhite: "ffdead",
      navy: "000080",
      oldlace: "fdf5e6",
      olive: "808000",
      olivedrab: "6b8e23",
      orange: "ffa500",
      orangered: "ff4500",
      orchid: "da70d6",
      palegoldenrod: "eee8aa",
      palegreen: "98fb98",
      paleturquoise: "afeeee",
      palevioletred: "db7093",
      papayawhip: "ffefd5",
      peachpuff: "ffdab9",
      peru: "cd853f",
      pink: "ffc0cb",
      plum: "dda0dd",
      powderblue: "b0e0e6",
      purple: "800080",
      rebeccapurple: "663399",
      red: "f00",
      rosybrown: "bc8f8f",
      royalblue: "4169e1",
      saddlebrown: "8b4513",
      salmon: "fa8072",
      sandybrown: "f4a460",
      seagreen: "2e8b57",
      seashell: "fff5ee",
      sienna: "a0522d",
      silver: "c0c0c0",
      skyblue: "87ceeb",
      slateblue: "6a5acd",
      slategray: "708090",
      slategrey: "708090",
      snow: "fffafa",
      springgreen: "00ff7f",
      steelblue: "4682b4",
      tan: "d2b48c",
      teal: "008080",
      thistle: "d8bfd8",
      tomato: "ff6347",
      turquoise: "40e0d0",
      violet: "ee82ee",
      wheat: "f5deb3",
      white: "fff",
      whitesmoke: "f5f5f5",
      yellow: "ff0",
      yellowgreen: "9acd32"
    };
    var hexNames = tinycolor2.hexNames = flip(names);
    function flip(o) {
      var flipped = {};
      for (var i in o) {
        if (o.hasOwnProperty(i)) {
          flipped[o[i]] = i;
        }
      }
      return flipped;
    }
    function boundAlpha(a) {
      a = parseFloat(a);
      if (isNaN(a) || a < 0 || a > 1) {
        a = 1;
      }
      return a;
    }
    function bound01(n, max) {
      if (isOnePointZero(n)) {
        n = "100%";
      }
      var processPercent = isPercentage(n);
      n = mathMin(max, mathMax(0, parseFloat(n)));
      if (processPercent) {
        n = parseInt(n * max, 10) / 100;
      }
      if (Math2.abs(n - max) < 1e-6) {
        return 1;
      }
      return n % max / parseFloat(max);
    }
    function clamp01(val) {
      return mathMin(1, mathMax(0, val));
    }
    function parseIntFromHex(val) {
      return parseInt(val, 16);
    }
    function isOnePointZero(n) {
      return typeof n == "string" && n.indexOf(".") != -1 && parseFloat(n) === 1;
    }
    function isPercentage(n) {
      return typeof n === "string" && n.indexOf("%") != -1;
    }
    function pad2(c) {
      return c.length == 1 ? "0" + c : "" + c;
    }
    function convertToPercentage(n) {
      if (n <= 1) {
        n = n * 100 + "%";
      }
      return n;
    }
    function convertDecimalToHex(d) {
      return Math2.round(parseFloat(d) * 255).toString(16);
    }
    function convertHexToDecimal(h) {
      return parseIntFromHex(h) / 255;
    }
    var matchers = function() {
      var CSS_INTEGER = "[-\\+]?\\d+%?";
      var CSS_NUMBER = "[-\\+]?\\d*\\.\\d+%?";
      var CSS_UNIT = "(?:" + CSS_NUMBER + ")|(?:" + CSS_INTEGER + ")";
      var PERMISSIVE_MATCH3 = "[\\s|\\(]+(" + CSS_UNIT + ")[,|\\s]+(" + CSS_UNIT + ")[,|\\s]+(" + CSS_UNIT + ")\\s*\\)?";
      var PERMISSIVE_MATCH4 = "[\\s|\\(]+(" + CSS_UNIT + ")[,|\\s]+(" + CSS_UNIT + ")[,|\\s]+(" + CSS_UNIT + ")[,|\\s]+(" + CSS_UNIT + ")\\s*\\)?";
      return {
        CSS_UNIT: new RegExp(CSS_UNIT),
        rgb: new RegExp("rgb" + PERMISSIVE_MATCH3),
        rgba: new RegExp("rgba" + PERMISSIVE_MATCH4),
        hsl: new RegExp("hsl" + PERMISSIVE_MATCH3),
        hsla: new RegExp("hsla" + PERMISSIVE_MATCH4),
        hsv: new RegExp("hsv" + PERMISSIVE_MATCH3),
        hsva: new RegExp("hsva" + PERMISSIVE_MATCH4),
        hex3: /^#?([0-9a-fA-F]{1})([0-9a-fA-F]{1})([0-9a-fA-F]{1})$/,
        hex6: /^#?([0-9a-fA-F]{2})([0-9a-fA-F]{2})([0-9a-fA-F]{2})$/,
        hex4: /^#?([0-9a-fA-F]{1})([0-9a-fA-F]{1})([0-9a-fA-F]{1})([0-9a-fA-F]{1})$/,
        hex8: /^#?([0-9a-fA-F]{2})([0-9a-fA-F]{2})([0-9a-fA-F]{2})([0-9a-fA-F]{2})$/
      };
    }();
    function isValidCSSUnit(color) {
      return !!matchers.CSS_UNIT.exec(color);
    }
    function stringInputToObject(color) {
      color = color.replace(trimLeft, "").replace(trimRight, "").toLowerCase();
      var named = false;
      if (names[color]) {
        color = names[color];
        named = true;
      } else if (color == "transparent") {
        return { r: 0, g: 0, b: 0, a: 0, format: "name" };
      }
      var match;
      if (match = matchers.rgb.exec(color)) {
        return { r: match[1], g: match[2], b: match[3] };
      }
      if (match = matchers.rgba.exec(color)) {
        return { r: match[1], g: match[2], b: match[3], a: match[4] };
      }
      if (match = matchers.hsl.exec(color)) {
        return { h: match[1], s: match[2], l: match[3] };
      }
      if (match = matchers.hsla.exec(color)) {
        return { h: match[1], s: match[2], l: match[3], a: match[4] };
      }
      if (match = matchers.hsv.exec(color)) {
        return { h: match[1], s: match[2], v: match[3] };
      }
      if (match = matchers.hsva.exec(color)) {
        return { h: match[1], s: match[2], v: match[3], a: match[4] };
      }
      if (match = matchers.hex8.exec(color)) {
        return {
          r: parseIntFromHex(match[1]),
          g: parseIntFromHex(match[2]),
          b: parseIntFromHex(match[3]),
          a: convertHexToDecimal(match[4]),
          format: named ? "name" : "hex8"
        };
      }
      if (match = matchers.hex6.exec(color)) {
        return {
          r: parseIntFromHex(match[1]),
          g: parseIntFromHex(match[2]),
          b: parseIntFromHex(match[3]),
          format: named ? "name" : "hex"
        };
      }
      if (match = matchers.hex4.exec(color)) {
        return {
          r: parseIntFromHex(match[1] + "" + match[1]),
          g: parseIntFromHex(match[2] + "" + match[2]),
          b: parseIntFromHex(match[3] + "" + match[3]),
          a: convertHexToDecimal(match[4] + "" + match[4]),
          format: named ? "name" : "hex8"
        };
      }
      if (match = matchers.hex3.exec(color)) {
        return {
          r: parseIntFromHex(match[1] + "" + match[1]),
          g: parseIntFromHex(match[2] + "" + match[2]),
          b: parseIntFromHex(match[3] + "" + match[3]),
          format: named ? "name" : "hex"
        };
      }
      return false;
    }
    function validateWCAG2Parms(parms) {
      var level, size;
      parms = parms || { "level": "AA", "size": "small" };
      level = (parms.level || "AA").toUpperCase();
      size = (parms.size || "small").toLowerCase();
      if (level !== "AA" && level !== "AAA") {
        level = "AA";
      }
      if (size !== "small" && size !== "large") {
        size = "small";
      }
      return { "level": level, "size": size };
    }
    if (module2.exports) {
      module2.exports = tinycolor2;
    } else {
      window.tinycolor = tinycolor2;
    }
  })(Math);
})(tinycolor$1);
var tinycolor = tinycolor$1.exports;
var simpleCheckForValidColor = function simpleCheckForValidColor2(data) {
  var keysToCheck = ["r", "g", "b", "a", "h", "s", "l", "v"];
  var checked = 0;
  var passed = 0;
  forEach(keysToCheck, function(letter) {
    if (data[letter]) {
      checked += 1;
      if (!isNaN(data[letter])) {
        passed += 1;
      }
      if (letter === "s" || letter === "l") {
        var percentPatt = /^\d+%$/;
        if (percentPatt.test(data[letter])) {
          passed += 1;
        }
      }
    }
  });
  return checked === passed ? data : false;
};
var toState = function toState2(data, oldHue) {
  var color = data.hex ? tinycolor(data.hex) : tinycolor(data);
  var hsl = color.toHsl();
  var hsv = color.toHsv();
  var rgb = color.toRgb();
  var hex = color.toHex();
  if (hsl.s === 0) {
    hsl.h = oldHue || 0;
    hsv.h = oldHue || 0;
  }
  var transparent = hex === "000000" && rgb.a === 0;
  return {
    hsl,
    hex: transparent ? "transparent" : "#" + hex,
    rgb,
    hsv,
    oldHue: data.h || oldHue || hsl.h,
    source: data.source
  };
};
var isValidHex = function isValidHex2(hex) {
  if (hex === "transparent") {
    return true;
  }
  var lh2 = String(hex).charAt(0) === "#" ? 1 : 0;
  return hex.length !== 4 + lh2 && hex.length < 7 + lh2 && tinycolor(hex).isValid();
};
var getContrastingColor = function getContrastingColor2(data) {
  if (!data) {
    return "#fff";
  }
  var col = toState(data);
  if (col.hex === "transparent") {
    return "rgba(0,0,0,0.4)";
  }
  var yiq = (col.rgb.r * 299 + col.rgb.g * 587 + col.rgb.b * 114) / 1e3;
  return yiq >= 128 ? "#000" : "#fff";
};
var isvalidColorString = function isvalidColorString2(string, type) {
  var stringWithoutDegree = string.replace("\xB0", "");
  return tinycolor(type + " (" + stringWithoutDegree + ")")._ok;
};
var _extends$e = Object.assign || function(target) {
  for (var i = 1; i < arguments.length; i++) {
    var source = arguments[i];
    for (var key in source) {
      if (Object.prototype.hasOwnProperty.call(source, key)) {
        target[key] = source[key];
      }
    }
  }
  return target;
};
var _createClass$3 = function() {
  function defineProperties(target, props) {
    for (var i = 0; i < props.length; i++) {
      var descriptor = props[i];
      descriptor.enumerable = descriptor.enumerable || false;
      descriptor.configurable = true;
      if ("value" in descriptor)
        descriptor.writable = true;
      Object.defineProperty(target, descriptor.key, descriptor);
    }
  }
  return function(Constructor, protoProps, staticProps) {
    if (protoProps)
      defineProperties(Constructor.prototype, protoProps);
    if (staticProps)
      defineProperties(Constructor, staticProps);
    return Constructor;
  };
}();
function _classCallCheck$3(instance, Constructor) {
  if (!(instance instanceof Constructor)) {
    throw new TypeError("Cannot call a class as a function");
  }
}
function _possibleConstructorReturn$3(self2, call) {
  if (!self2) {
    throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
  }
  return call && (typeof call === "object" || typeof call === "function") ? call : self2;
}
function _inherits$3(subClass, superClass) {
  if (typeof superClass !== "function" && superClass !== null) {
    throw new TypeError("Super expression must either be null or a function, not " + typeof superClass);
  }
  subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } });
  if (superClass)
    Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass;
}
var ColorWrap = function ColorWrap2(Picker) {
  var ColorPicker2 = function(_ref) {
    _inherits$3(ColorPicker3, _ref);
    function ColorPicker3(props) {
      _classCallCheck$3(this, ColorPicker3);
      var _this = _possibleConstructorReturn$3(this, (ColorPicker3.__proto__ || Object.getPrototypeOf(ColorPicker3)).call(this));
      _this.handleChange = function(data, event) {
        var isValidColor = simpleCheckForValidColor(data);
        if (isValidColor) {
          var colors = toState(data, data.h || _this.state.oldHue);
          _this.setState(colors);
          _this.props.onChangeComplete && _this.debounce(_this.props.onChangeComplete, colors, event);
          _this.props.onChange && _this.props.onChange(colors, event);
        }
      };
      _this.handleSwatchHover = function(data, event) {
        var isValidColor = simpleCheckForValidColor(data);
        if (isValidColor) {
          var colors = toState(data, data.h || _this.state.oldHue);
          _this.props.onSwatchHover && _this.props.onSwatchHover(colors, event);
        }
      };
      _this.state = _extends$e({}, toState(props.color, 0));
      _this.debounce = debounce(function(fn, data, event) {
        fn(data, event);
      }, 100);
      return _this;
    }
    _createClass$3(ColorPicker3, [{
      key: "render",
      value: function render3() {
        var optionalEvents = {};
        if (this.props.onSwatchHover) {
          optionalEvents.onSwatchHover = this.handleSwatchHover;
        }
        return React__default.createElement(Picker, _extends$e({}, this.props, this.state, {
          onChange: this.handleChange
        }, optionalEvents));
      }
    }], [{
      key: "getDerivedStateFromProps",
      value: function getDerivedStateFromProps(nextProps, state) {
        return _extends$e({}, toState(nextProps.color, state.oldHue));
      }
    }]);
    return ColorPicker3;
  }(PureComponent || Component);
  ColorPicker2.propTypes = _extends$e({}, Picker.propTypes);
  ColorPicker2.defaultProps = _extends$e({}, Picker.defaultProps, {
    color: {
      h: 250,
      s: 0.5,
      l: 0.2,
      a: 1
    }
  });
  return ColorPicker2;
};
var _extends$d = Object.assign || function(target) {
  for (var i = 1; i < arguments.length; i++) {
    var source = arguments[i];
    for (var key in source) {
      if (Object.prototype.hasOwnProperty.call(source, key)) {
        target[key] = source[key];
      }
    }
  }
  return target;
};
var _createClass$2 = function() {
  function defineProperties(target, props) {
    for (var i = 0; i < props.length; i++) {
      var descriptor = props[i];
      descriptor.enumerable = descriptor.enumerable || false;
      descriptor.configurable = true;
      if ("value" in descriptor)
        descriptor.writable = true;
      Object.defineProperty(target, descriptor.key, descriptor);
    }
  }
  return function(Constructor, protoProps, staticProps) {
    if (protoProps)
      defineProperties(Constructor.prototype, protoProps);
    if (staticProps)
      defineProperties(Constructor, staticProps);
    return Constructor;
  };
}();
function _classCallCheck$2(instance, Constructor) {
  if (!(instance instanceof Constructor)) {
    throw new TypeError("Cannot call a class as a function");
  }
}
function _possibleConstructorReturn$2(self2, call) {
  if (!self2) {
    throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
  }
  return call && (typeof call === "object" || typeof call === "function") ? call : self2;
}
function _inherits$2(subClass, superClass) {
  if (typeof superClass !== "function" && superClass !== null) {
    throw new TypeError("Super expression must either be null or a function, not " + typeof superClass);
  }
  subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } });
  if (superClass)
    Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass;
}
var handleFocus = function handleFocus2(Component2) {
  var Span = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : "span";
  return function(_React$Component) {
    _inherits$2(Focus, _React$Component);
    function Focus() {
      var _ref;
      var _temp, _this, _ret;
      _classCallCheck$2(this, Focus);
      for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
        args[_key] = arguments[_key];
      }
      return _ret = (_temp = (_this = _possibleConstructorReturn$2(this, (_ref = Focus.__proto__ || Object.getPrototypeOf(Focus)).call.apply(_ref, [this].concat(args))), _this), _this.state = { focus: false }, _this.handleFocus = function() {
        return _this.setState({ focus: true });
      }, _this.handleBlur = function() {
        return _this.setState({ focus: false });
      }, _temp), _possibleConstructorReturn$2(_this, _ret);
    }
    _createClass$2(Focus, [{
      key: "render",
      value: function render3() {
        return React__default.createElement(Span, { onFocus: this.handleFocus, onBlur: this.handleBlur }, React__default.createElement(Component2, _extends$d({}, this.props, this.state)));
      }
    }]);
    return Focus;
  }(React__default.Component);
};
var _extends$c = Object.assign || function(target) {
  for (var i = 1; i < arguments.length; i++) {
    var source = arguments[i];
    for (var key in source) {
      if (Object.prototype.hasOwnProperty.call(source, key)) {
        target[key] = source[key];
      }
    }
  }
  return target;
};
var ENTER = 13;
var Swatch = function Swatch2(_ref) {
  var color = _ref.color, style = _ref.style, _ref$onClick = _ref.onClick, onClick = _ref$onClick === void 0 ? function() {
  } : _ref$onClick, onHover = _ref.onHover, _ref$title = _ref.title, title = _ref$title === void 0 ? color : _ref$title, children = _ref.children, focus = _ref.focus, _ref$focusStyle = _ref.focusStyle, focusStyle = _ref$focusStyle === void 0 ? {} : _ref$focusStyle;
  var transparent = color === "transparent";
  var styles = _default$2({
    default: {
      swatch: _extends$c({
        background: color,
        height: "100%",
        width: "100%",
        cursor: "pointer",
        position: "relative",
        outline: "none"
      }, style, focus ? focusStyle : {})
    }
  });
  var handleClick = function handleClick2(e) {
    return onClick(color, e);
  };
  var handleKeyDown = function handleKeyDown2(e) {
    return e.keyCode === ENTER && onClick(color, e);
  };
  var handleHover2 = function handleHover3(e) {
    return onHover(color, e);
  };
  var optionalEvents = {};
  if (onHover) {
    optionalEvents.onMouseOver = handleHover2;
  }
  return React__default.createElement("div", _extends$c({
    style: styles.swatch,
    onClick: handleClick,
    title,
    tabIndex: 0,
    onKeyDown: handleKeyDown
  }, optionalEvents), children, transparent && React__default.createElement(Checkboard, {
    borderRadius: styles.swatch.borderRadius,
    boxShadow: "inset 0 0 0 1px rgba(0,0,0,0.1)"
  }));
};
var Swatch$1 = handleFocus(Swatch);
var AlphaPointer = function AlphaPointer2(_ref) {
  var direction = _ref.direction;
  var styles = _default$2({
    "default": {
      picker: {
        width: "18px",
        height: "18px",
        borderRadius: "50%",
        transform: "translate(-9px, -1px)",
        backgroundColor: "rgb(248, 248, 248)",
        boxShadow: "0 1px 4px 0 rgba(0, 0, 0, 0.37)"
      }
    },
    "vertical": {
      picker: {
        transform: "translate(-3px, -9px)"
      }
    }
  }, { vertical: direction === "vertical" });
  return React__default.createElement("div", { style: styles.picker });
};
var _extends$b = Object.assign || function(target) {
  for (var i = 1; i < arguments.length; i++) {
    var source = arguments[i];
    for (var key in source) {
      if (Object.prototype.hasOwnProperty.call(source, key)) {
        target[key] = source[key];
      }
    }
  }
  return target;
};
var AlphaPicker = function AlphaPicker2(_ref) {
  var rgb = _ref.rgb, hsl = _ref.hsl, width = _ref.width, height = _ref.height, onChange = _ref.onChange, direction = _ref.direction, style = _ref.style, renderers = _ref.renderers, pointer = _ref.pointer, _ref$className = _ref.className, className = _ref$className === void 0 ? "" : _ref$className;
  var styles = _default$2({
    "default": {
      picker: {
        position: "relative",
        width,
        height
      },
      alpha: {
        radius: "2px",
        style
      }
    }
  });
  return React__default.createElement("div", { style: styles.picker, className: "alpha-picker " + className }, React__default.createElement(Alpha, _extends$b({}, styles.alpha, {
    rgb,
    hsl,
    pointer,
    renderers,
    onChange,
    direction
  })));
};
AlphaPicker.defaultProps = {
  width: "316px",
  height: "16px",
  direction: "horizontal",
  pointer: AlphaPointer
};
ColorWrap(AlphaPicker);
function arrayMap(array, iteratee) {
  var index = -1, length = array == null ? 0 : array.length, result = Array(length);
  while (++index < length) {
    result[index] = iteratee(array[index], index, array);
  }
  return result;
}
var HASH_UNDEFINED = "__lodash_hash_undefined__";
function setCacheAdd(value) {
  this.__data__.set(value, HASH_UNDEFINED);
  return this;
}
function setCacheHas(value) {
  return this.__data__.has(value);
}
function SetCache(values) {
  var index = -1, length = values == null ? 0 : values.length;
  this.__data__ = new MapCache();
  while (++index < length) {
    this.add(values[index]);
  }
}
SetCache.prototype.add = SetCache.prototype.push = setCacheAdd;
SetCache.prototype.has = setCacheHas;
function arraySome(array, predicate) {
  var index = -1, length = array == null ? 0 : array.length;
  while (++index < length) {
    if (predicate(array[index], index, array)) {
      return true;
    }
  }
  return false;
}
function cacheHas(cache, key) {
  return cache.has(key);
}
var COMPARE_PARTIAL_FLAG$5 = 1, COMPARE_UNORDERED_FLAG$3 = 2;
function equalArrays(array, other, bitmask, customizer, equalFunc, stack) {
  var isPartial = bitmask & COMPARE_PARTIAL_FLAG$5, arrLength = array.length, othLength = other.length;
  if (arrLength != othLength && !(isPartial && othLength > arrLength)) {
    return false;
  }
  var arrStacked = stack.get(array);
  var othStacked = stack.get(other);
  if (arrStacked && othStacked) {
    return arrStacked == other && othStacked == array;
  }
  var index = -1, result = true, seen = bitmask & COMPARE_UNORDERED_FLAG$3 ? new SetCache() : void 0;
  stack.set(array, other);
  stack.set(other, array);
  while (++index < arrLength) {
    var arrValue = array[index], othValue = other[index];
    if (customizer) {
      var compared = isPartial ? customizer(othValue, arrValue, index, other, array, stack) : customizer(arrValue, othValue, index, array, other, stack);
    }
    if (compared !== void 0) {
      if (compared) {
        continue;
      }
      result = false;
      break;
    }
    if (seen) {
      if (!arraySome(other, function(othValue2, othIndex) {
        if (!cacheHas(seen, othIndex) && (arrValue === othValue2 || equalFunc(arrValue, othValue2, bitmask, customizer, stack))) {
          return seen.push(othIndex);
        }
      })) {
        result = false;
        break;
      }
    } else if (!(arrValue === othValue || equalFunc(arrValue, othValue, bitmask, customizer, stack))) {
      result = false;
      break;
    }
  }
  stack["delete"](array);
  stack["delete"](other);
  return result;
}
function mapToArray(map2) {
  var index = -1, result = Array(map2.size);
  map2.forEach(function(value, key) {
    result[++index] = [key, value];
  });
  return result;
}
function setToArray(set) {
  var index = -1, result = Array(set.size);
  set.forEach(function(value) {
    result[++index] = value;
  });
  return result;
}
var COMPARE_PARTIAL_FLAG$4 = 1, COMPARE_UNORDERED_FLAG$2 = 2;
var boolTag = "[object Boolean]", dateTag = "[object Date]", errorTag = "[object Error]", mapTag$1 = "[object Map]", numberTag = "[object Number]", regexpTag = "[object RegExp]", setTag$1 = "[object Set]", stringTag = "[object String]", symbolTag = "[object Symbol]";
var arrayBufferTag = "[object ArrayBuffer]", dataViewTag$1 = "[object DataView]";
var symbolProto$1 = Symbol$2 ? Symbol$2.prototype : void 0, symbolValueOf = symbolProto$1 ? symbolProto$1.valueOf : void 0;
function equalByTag(object, other, tag, bitmask, customizer, equalFunc, stack) {
  switch (tag) {
    case dataViewTag$1:
      if (object.byteLength != other.byteLength || object.byteOffset != other.byteOffset) {
        return false;
      }
      object = object.buffer;
      other = other.buffer;
    case arrayBufferTag:
      if (object.byteLength != other.byteLength || !equalFunc(new Uint8Array$1(object), new Uint8Array$1(other))) {
        return false;
      }
      return true;
    case boolTag:
    case dateTag:
    case numberTag:
      return eq(+object, +other);
    case errorTag:
      return object.name == other.name && object.message == other.message;
    case regexpTag:
    case stringTag:
      return object == other + "";
    case mapTag$1:
      var convert = mapToArray;
    case setTag$1:
      var isPartial = bitmask & COMPARE_PARTIAL_FLAG$4;
      convert || (convert = setToArray);
      if (object.size != other.size && !isPartial) {
        return false;
      }
      var stacked = stack.get(object);
      if (stacked) {
        return stacked == other;
      }
      bitmask |= COMPARE_UNORDERED_FLAG$2;
      stack.set(object, other);
      var result = equalArrays(convert(object), convert(other), bitmask, customizer, equalFunc, stack);
      stack["delete"](object);
      return result;
    case symbolTag:
      if (symbolValueOf) {
        return symbolValueOf.call(object) == symbolValueOf.call(other);
      }
  }
  return false;
}
function arrayPush(array, values) {
  var index = -1, length = values.length, offset = array.length;
  while (++index < length) {
    array[offset + index] = values[index];
  }
  return array;
}
function baseGetAllKeys(object, keysFunc, symbolsFunc) {
  var result = keysFunc(object);
  return isArray$1(object) ? result : arrayPush(result, symbolsFunc(object));
}
function arrayFilter(array, predicate) {
  var index = -1, length = array == null ? 0 : array.length, resIndex = 0, result = [];
  while (++index < length) {
    var value = array[index];
    if (predicate(value, index, array)) {
      result[resIndex++] = value;
    }
  }
  return result;
}
function stubArray() {
  return [];
}
var objectProto$2 = Object.prototype;
var propertyIsEnumerable = objectProto$2.propertyIsEnumerable;
var nativeGetSymbols = Object.getOwnPropertySymbols;
var getSymbols = !nativeGetSymbols ? stubArray : function(object) {
  if (object == null) {
    return [];
  }
  object = Object(object);
  return arrayFilter(nativeGetSymbols(object), function(symbol) {
    return propertyIsEnumerable.call(object, symbol);
  });
};
var getSymbols$1 = getSymbols;
function getAllKeys(object) {
  return baseGetAllKeys(object, keys, getSymbols$1);
}
var COMPARE_PARTIAL_FLAG$3 = 1;
var objectProto$1 = Object.prototype;
var hasOwnProperty$3 = objectProto$1.hasOwnProperty;
function equalObjects(object, other, bitmask, customizer, equalFunc, stack) {
  var isPartial = bitmask & COMPARE_PARTIAL_FLAG$3, objProps = getAllKeys(object), objLength = objProps.length, othProps = getAllKeys(other), othLength = othProps.length;
  if (objLength != othLength && !isPartial) {
    return false;
  }
  var index = objLength;
  while (index--) {
    var key = objProps[index];
    if (!(isPartial ? key in other : hasOwnProperty$3.call(other, key))) {
      return false;
    }
  }
  var objStacked = stack.get(object);
  var othStacked = stack.get(other);
  if (objStacked && othStacked) {
    return objStacked == other && othStacked == object;
  }
  var result = true;
  stack.set(object, other);
  stack.set(other, object);
  var skipCtor = isPartial;
  while (++index < objLength) {
    key = objProps[index];
    var objValue = object[key], othValue = other[key];
    if (customizer) {
      var compared = isPartial ? customizer(othValue, objValue, key, other, object, stack) : customizer(objValue, othValue, key, object, other, stack);
    }
    if (!(compared === void 0 ? objValue === othValue || equalFunc(objValue, othValue, bitmask, customizer, stack) : compared)) {
      result = false;
      break;
    }
    skipCtor || (skipCtor = key == "constructor");
  }
  if (result && !skipCtor) {
    var objCtor = object.constructor, othCtor = other.constructor;
    if (objCtor != othCtor && ("constructor" in object && "constructor" in other) && !(typeof objCtor == "function" && objCtor instanceof objCtor && typeof othCtor == "function" && othCtor instanceof othCtor)) {
      result = false;
    }
  }
  stack["delete"](object);
  stack["delete"](other);
  return result;
}
var DataView = getNative(root$1, "DataView");
var DataView$1 = DataView;
var Promise$1 = getNative(root$1, "Promise");
var Promise$2 = Promise$1;
var Set$1 = getNative(root$1, "Set");
var Set$2 = Set$1;
var WeakMap$1 = getNative(root$1, "WeakMap");
var WeakMap$2 = WeakMap$1;
var mapTag = "[object Map]", objectTag$1 = "[object Object]", promiseTag = "[object Promise]", setTag = "[object Set]", weakMapTag = "[object WeakMap]";
var dataViewTag = "[object DataView]";
var dataViewCtorString = toSource(DataView$1), mapCtorString = toSource(Map$e), promiseCtorString = toSource(Promise$2), setCtorString = toSource(Set$2), weakMapCtorString = toSource(WeakMap$2);
var getTag = baseGetTag;
if (DataView$1 && getTag(new DataView$1(new ArrayBuffer(1))) != dataViewTag || Map$e && getTag(new Map$e()) != mapTag || Promise$2 && getTag(Promise$2.resolve()) != promiseTag || Set$2 && getTag(new Set$2()) != setTag || WeakMap$2 && getTag(new WeakMap$2()) != weakMapTag) {
  getTag = function(value) {
    var result = baseGetTag(value), Ctor = result == objectTag$1 ? value.constructor : void 0, ctorString = Ctor ? toSource(Ctor) : "";
    if (ctorString) {
      switch (ctorString) {
        case dataViewCtorString:
          return dataViewTag;
        case mapCtorString:
          return mapTag;
        case promiseCtorString:
          return promiseTag;
        case setCtorString:
          return setTag;
        case weakMapCtorString:
          return weakMapTag;
      }
    }
    return result;
  };
}
var getTag$1 = getTag;
var COMPARE_PARTIAL_FLAG$2 = 1;
var argsTag = "[object Arguments]", arrayTag = "[object Array]", objectTag = "[object Object]";
var objectProto = Object.prototype;
var hasOwnProperty$2 = objectProto.hasOwnProperty;
function baseIsEqualDeep(object, other, bitmask, customizer, equalFunc, stack) {
  var objIsArr = isArray$1(object), othIsArr = isArray$1(other), objTag = objIsArr ? arrayTag : getTag$1(object), othTag = othIsArr ? arrayTag : getTag$1(other);
  objTag = objTag == argsTag ? objectTag : objTag;
  othTag = othTag == argsTag ? objectTag : othTag;
  var objIsObj = objTag == objectTag, othIsObj = othTag == objectTag, isSameTag = objTag == othTag;
  if (isSameTag && isBuffer$1(object)) {
    if (!isBuffer$1(other)) {
      return false;
    }
    objIsArr = true;
    objIsObj = false;
  }
  if (isSameTag && !objIsObj) {
    stack || (stack = new Stack$1());
    return objIsArr || isTypedArray$1(object) ? equalArrays(object, other, bitmask, customizer, equalFunc, stack) : equalByTag(object, other, objTag, bitmask, customizer, equalFunc, stack);
  }
  if (!(bitmask & COMPARE_PARTIAL_FLAG$2)) {
    var objIsWrapped = objIsObj && hasOwnProperty$2.call(object, "__wrapped__"), othIsWrapped = othIsObj && hasOwnProperty$2.call(other, "__wrapped__");
    if (objIsWrapped || othIsWrapped) {
      var objUnwrapped = objIsWrapped ? object.value() : object, othUnwrapped = othIsWrapped ? other.value() : other;
      stack || (stack = new Stack$1());
      return equalFunc(objUnwrapped, othUnwrapped, bitmask, customizer, stack);
    }
  }
  if (!isSameTag) {
    return false;
  }
  stack || (stack = new Stack$1());
  return equalObjects(object, other, bitmask, customizer, equalFunc, stack);
}
function baseIsEqual(value, other, bitmask, customizer, stack) {
  if (value === other) {
    return true;
  }
  if (value == null || other == null || !isObjectLike(value) && !isObjectLike(other)) {
    return value !== value && other !== other;
  }
  return baseIsEqualDeep(value, other, bitmask, customizer, baseIsEqual, stack);
}
var COMPARE_PARTIAL_FLAG$1 = 1, COMPARE_UNORDERED_FLAG$1 = 2;
function baseIsMatch(object, source, matchData, customizer) {
  var index = matchData.length, length = index, noCustomizer = !customizer;
  if (object == null) {
    return !length;
  }
  object = Object(object);
  while (index--) {
    var data = matchData[index];
    if (noCustomizer && data[2] ? data[1] !== object[data[0]] : !(data[0] in object)) {
      return false;
    }
  }
  while (++index < length) {
    data = matchData[index];
    var key = data[0], objValue = object[key], srcValue = data[1];
    if (noCustomizer && data[2]) {
      if (objValue === void 0 && !(key in object)) {
        return false;
      }
    } else {
      var stack = new Stack$1();
      if (customizer) {
        var result = customizer(objValue, srcValue, key, object, source, stack);
      }
      if (!(result === void 0 ? baseIsEqual(srcValue, objValue, COMPARE_PARTIAL_FLAG$1 | COMPARE_UNORDERED_FLAG$1, customizer, stack) : result)) {
        return false;
      }
    }
  }
  return true;
}
function isStrictComparable(value) {
  return value === value && !isObject(value);
}
function getMatchData(object) {
  var result = keys(object), length = result.length;
  while (length--) {
    var key = result[length], value = object[key];
    result[length] = [key, value, isStrictComparable(value)];
  }
  return result;
}
function matchesStrictComparable(key, srcValue) {
  return function(object) {
    if (object == null) {
      return false;
    }
    return object[key] === srcValue && (srcValue !== void 0 || key in Object(object));
  };
}
function baseMatches(source) {
  var matchData = getMatchData(source);
  if (matchData.length == 1 && matchData[0][2]) {
    return matchesStrictComparable(matchData[0][0], matchData[0][1]);
  }
  return function(object) {
    return object === source || baseIsMatch(object, source, matchData);
  };
}
var reIsDeepProp = /\.|\[(?:[^[\]]*|(["'])(?:(?!\1)[^\\]|\\.)*?\1)\]/, reIsPlainProp = /^\w*$/;
function isKey(value, object) {
  if (isArray$1(value)) {
    return false;
  }
  var type = typeof value;
  if (type == "number" || type == "symbol" || type == "boolean" || value == null || isSymbol(value)) {
    return true;
  }
  return reIsPlainProp.test(value) || !reIsDeepProp.test(value) || object != null && value in Object(object);
}
var FUNC_ERROR_TEXT = "Expected a function";
function memoize(func, resolver) {
  if (typeof func != "function" || resolver != null && typeof resolver != "function") {
    throw new TypeError(FUNC_ERROR_TEXT);
  }
  var memoized = function() {
    var args = arguments, key = resolver ? resolver.apply(this, args) : args[0], cache = memoized.cache;
    if (cache.has(key)) {
      return cache.get(key);
    }
    var result = func.apply(this, args);
    memoized.cache = cache.set(key, result) || cache;
    return result;
  };
  memoized.cache = new (memoize.Cache || MapCache)();
  return memoized;
}
memoize.Cache = MapCache;
var MAX_MEMOIZE_SIZE = 500;
function memoizeCapped(func) {
  var result = memoize(func, function(key) {
    if (cache.size === MAX_MEMOIZE_SIZE) {
      cache.clear();
    }
    return key;
  });
  var cache = result.cache;
  return result;
}
var rePropName = /[^.[\]]+|\[(?:(-?\d+(?:\.\d+)?)|(["'])((?:(?!\2)[^\\]|\\.)*?)\2)\]|(?=(?:\.|\[\])(?:\.|\[\]|$))/g;
var reEscapeChar = /\\(\\)?/g;
var stringToPath = memoizeCapped(function(string) {
  var result = [];
  if (string.charCodeAt(0) === 46) {
    result.push("");
  }
  string.replace(rePropName, function(match, number, quote, subString) {
    result.push(quote ? subString.replace(reEscapeChar, "$1") : number || match);
  });
  return result;
});
var stringToPath$1 = stringToPath;
var INFINITY$1 = 1 / 0;
var symbolProto = Symbol$2 ? Symbol$2.prototype : void 0, symbolToString = symbolProto ? symbolProto.toString : void 0;
function baseToString(value) {
  if (typeof value == "string") {
    return value;
  }
  if (isArray$1(value)) {
    return arrayMap(value, baseToString) + "";
  }
  if (isSymbol(value)) {
    return symbolToString ? symbolToString.call(value) : "";
  }
  var result = value + "";
  return result == "0" && 1 / value == -INFINITY$1 ? "-0" : result;
}
function toString(value) {
  return value == null ? "" : baseToString(value);
}
function castPath(value, object) {
  if (isArray$1(value)) {
    return value;
  }
  return isKey(value, object) ? [value] : stringToPath$1(toString(value));
}
var INFINITY = 1 / 0;
function toKey(value) {
  if (typeof value == "string" || isSymbol(value)) {
    return value;
  }
  var result = value + "";
  return result == "0" && 1 / value == -INFINITY ? "-0" : result;
}
function baseGet(object, path) {
  path = castPath(path, object);
  var index = 0, length = path.length;
  while (object != null && index < length) {
    object = object[toKey(path[index++])];
  }
  return index && index == length ? object : void 0;
}
function get2(object, path, defaultValue) {
  var result = object == null ? void 0 : baseGet(object, path);
  return result === void 0 ? defaultValue : result;
}
function baseHasIn(object, key) {
  return object != null && key in Object(object);
}
function hasPath(object, path, hasFunc) {
  path = castPath(path, object);
  var index = -1, length = path.length, result = false;
  while (++index < length) {
    var key = toKey(path[index]);
    if (!(result = object != null && hasFunc(object, key))) {
      break;
    }
    object = object[key];
  }
  if (result || ++index != length) {
    return result;
  }
  length = object == null ? 0 : object.length;
  return !!length && isLength(length) && isIndex(key, length) && (isArray$1(object) || isArguments$1(object));
}
function hasIn(object, path) {
  return object != null && hasPath(object, path, baseHasIn);
}
var COMPARE_PARTIAL_FLAG = 1, COMPARE_UNORDERED_FLAG = 2;
function baseMatchesProperty(path, srcValue) {
  if (isKey(path) && isStrictComparable(srcValue)) {
    return matchesStrictComparable(toKey(path), srcValue);
  }
  return function(object) {
    var objValue = get2(object, path);
    return objValue === void 0 && objValue === srcValue ? hasIn(object, path) : baseIsEqual(srcValue, objValue, COMPARE_PARTIAL_FLAG | COMPARE_UNORDERED_FLAG);
  };
}
function baseProperty(key) {
  return function(object) {
    return object == null ? void 0 : object[key];
  };
}
function basePropertyDeep(path) {
  return function(object) {
    return baseGet(object, path);
  };
}
function property(path) {
  return isKey(path) ? baseProperty(toKey(path)) : basePropertyDeep(path);
}
function baseIteratee(value) {
  if (typeof value == "function") {
    return value;
  }
  if (value == null) {
    return identity;
  }
  if (typeof value == "object") {
    return isArray$1(value) ? baseMatchesProperty(value[0], value[1]) : baseMatches(value);
  }
  return property(value);
}
function baseMap(collection, iteratee) {
  var index = -1, result = isArrayLike(collection) ? Array(collection.length) : [];
  baseEach$1(collection, function(value, key, collection2) {
    result[++index] = iteratee(value, key, collection2);
  });
  return result;
}
function map(collection, iteratee) {
  var func = isArray$1(collection) ? arrayMap : baseMap;
  return func(collection, baseIteratee(iteratee));
}
var BlockSwatches = function BlockSwatches2(_ref) {
  var colors = _ref.colors, onClick = _ref.onClick, onSwatchHover = _ref.onSwatchHover;
  var styles = _default$2({
    "default": {
      swatches: {
        marginRight: "-10px"
      },
      swatch: {
        width: "22px",
        height: "22px",
        float: "left",
        marginRight: "10px",
        marginBottom: "10px",
        borderRadius: "4px"
      },
      clear: {
        clear: "both"
      }
    }
  });
  return React__default.createElement("div", { style: styles.swatches }, map(colors, function(c) {
    return React__default.createElement(Swatch$1, {
      key: c,
      color: c,
      style: styles.swatch,
      onClick,
      onHover: onSwatchHover,
      focusStyle: {
        boxShadow: "0 0 4px " + c
      }
    });
  }), React__default.createElement("div", { style: styles.clear }));
};
var Block = function Block2(_ref) {
  var onChange = _ref.onChange, onSwatchHover = _ref.onSwatchHover, hex = _ref.hex, colors = _ref.colors, width = _ref.width, triangle = _ref.triangle, _ref$styles = _ref.styles, passedStyles = _ref$styles === void 0 ? {} : _ref$styles, _ref$className = _ref.className, className = _ref$className === void 0 ? "" : _ref$className;
  var transparent = hex === "transparent";
  var handleChange = function handleChange2(hexCode, e) {
    isValidHex(hexCode) && onChange({
      hex: hexCode,
      source: "hex"
    }, e);
  };
  var styles = _default$2(merge$1({
    "default": {
      card: {
        width,
        background: "#fff",
        boxShadow: "0 1px rgba(0,0,0,.1)",
        borderRadius: "6px",
        position: "relative"
      },
      head: {
        height: "110px",
        background: hex,
        borderRadius: "6px 6px 0 0",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        position: "relative"
      },
      body: {
        padding: "10px"
      },
      label: {
        fontSize: "18px",
        color: getContrastingColor(hex),
        position: "relative"
      },
      triangle: {
        width: "0px",
        height: "0px",
        borderStyle: "solid",
        borderWidth: "0 10px 10px 10px",
        borderColor: "transparent transparent " + hex + " transparent",
        position: "absolute",
        top: "-10px",
        left: "50%",
        marginLeft: "-10px"
      },
      input: {
        width: "100%",
        fontSize: "12px",
        color: "#666",
        border: "0px",
        outline: "none",
        height: "22px",
        boxShadow: "inset 0 0 0 1px #ddd",
        borderRadius: "4px",
        padding: "0 7px",
        boxSizing: "border-box"
      }
    },
    "hide-triangle": {
      triangle: {
        display: "none"
      }
    }
  }, passedStyles), { "hide-triangle": triangle === "hide" });
  return React__default.createElement("div", { style: styles.card, className: "block-picker " + className }, React__default.createElement("div", { style: styles.triangle }), React__default.createElement("div", { style: styles.head }, transparent && React__default.createElement(Checkboard, { borderRadius: "6px 6px 0 0" }), React__default.createElement("div", { style: styles.label }, hex)), React__default.createElement("div", { style: styles.body }, React__default.createElement(BlockSwatches, { colors, onClick: handleChange, onSwatchHover }), React__default.createElement(EditableInput, {
    style: { input: styles.input },
    value: hex,
    onChange: handleChange
  })));
};
Block.propTypes = {
  width: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  colors: PropTypes.arrayOf(PropTypes.string),
  triangle: PropTypes.oneOf(["top", "hide"]),
  styles: PropTypes.object
};
Block.defaultProps = {
  width: 170,
  colors: ["#D9E3F0", "#F47373", "#697689", "#37D67A", "#2CCCE4", "#555555", "#dce775", "#ff8a65", "#ba68c8"],
  triangle: "top",
  styles: {}
};
ColorWrap(Block);
var red = { "50": "#ffebee", "100": "#ffcdd2", "200": "#ef9a9a", "300": "#e57373", "400": "#ef5350", "500": "#f44336", "600": "#e53935", "700": "#d32f2f", "800": "#c62828", "900": "#b71c1c", "a100": "#ff8a80", "a200": "#ff5252", "a400": "#ff1744", "a700": "#d50000" };
var pink = { "50": "#fce4ec", "100": "#f8bbd0", "200": "#f48fb1", "300": "#f06292", "400": "#ec407a", "500": "#e91e63", "600": "#d81b60", "700": "#c2185b", "800": "#ad1457", "900": "#880e4f", "a100": "#ff80ab", "a200": "#ff4081", "a400": "#f50057", "a700": "#c51162" };
var purple = { "50": "#f3e5f5", "100": "#e1bee7", "200": "#ce93d8", "300": "#ba68c8", "400": "#ab47bc", "500": "#9c27b0", "600": "#8e24aa", "700": "#7b1fa2", "800": "#6a1b9a", "900": "#4a148c", "a100": "#ea80fc", "a200": "#e040fb", "a400": "#d500f9", "a700": "#aa00ff" };
var deepPurple = { "50": "#ede7f6", "100": "#d1c4e9", "200": "#b39ddb", "300": "#9575cd", "400": "#7e57c2", "500": "#673ab7", "600": "#5e35b1", "700": "#512da8", "800": "#4527a0", "900": "#311b92", "a100": "#b388ff", "a200": "#7c4dff", "a400": "#651fff", "a700": "#6200ea" };
var indigo = { "50": "#e8eaf6", "100": "#c5cae9", "200": "#9fa8da", "300": "#7986cb", "400": "#5c6bc0", "500": "#3f51b5", "600": "#3949ab", "700": "#303f9f", "800": "#283593", "900": "#1a237e", "a100": "#8c9eff", "a200": "#536dfe", "a400": "#3d5afe", "a700": "#304ffe" };
var blue = { "50": "#e3f2fd", "100": "#bbdefb", "200": "#90caf9", "300": "#64b5f6", "400": "#42a5f5", "500": "#2196f3", "600": "#1e88e5", "700": "#1976d2", "800": "#1565c0", "900": "#0d47a1", "a100": "#82b1ff", "a200": "#448aff", "a400": "#2979ff", "a700": "#2962ff" };
var lightBlue = { "50": "#e1f5fe", "100": "#b3e5fc", "200": "#81d4fa", "300": "#4fc3f7", "400": "#29b6f6", "500": "#03a9f4", "600": "#039be5", "700": "#0288d1", "800": "#0277bd", "900": "#01579b", "a100": "#80d8ff", "a200": "#40c4ff", "a400": "#00b0ff", "a700": "#0091ea" };
var cyan = { "50": "#e0f7fa", "100": "#b2ebf2", "200": "#80deea", "300": "#4dd0e1", "400": "#26c6da", "500": "#00bcd4", "600": "#00acc1", "700": "#0097a7", "800": "#00838f", "900": "#006064", "a100": "#84ffff", "a200": "#18ffff", "a400": "#00e5ff", "a700": "#00b8d4" };
var teal = { "50": "#e0f2f1", "100": "#b2dfdb", "200": "#80cbc4", "300": "#4db6ac", "400": "#26a69a", "500": "#009688", "600": "#00897b", "700": "#00796b", "800": "#00695c", "900": "#004d40", "a100": "#a7ffeb", "a200": "#64ffda", "a400": "#1de9b6", "a700": "#00bfa5" };
var green = { "50": "#e8f5e9", "100": "#c8e6c9", "200": "#a5d6a7", "300": "#81c784", "400": "#66bb6a", "500": "#4caf50", "600": "#43a047", "700": "#388e3c", "800": "#2e7d32", "900": "#1b5e20", "a100": "#b9f6ca", "a200": "#69f0ae", "a400": "#00e676", "a700": "#00c853" };
var lightGreen = { "50": "#f1f8e9", "100": "#dcedc8", "200": "#c5e1a5", "300": "#aed581", "400": "#9ccc65", "500": "#8bc34a", "600": "#7cb342", "700": "#689f38", "800": "#558b2f", "900": "#33691e", "a100": "#ccff90", "a200": "#b2ff59", "a400": "#76ff03", "a700": "#64dd17" };
var lime = { "50": "#f9fbe7", "100": "#f0f4c3", "200": "#e6ee9c", "300": "#dce775", "400": "#d4e157", "500": "#cddc39", "600": "#c0ca33", "700": "#afb42b", "800": "#9e9d24", "900": "#827717", "a100": "#f4ff81", "a200": "#eeff41", "a400": "#c6ff00", "a700": "#aeea00" };
var yellow = { "50": "#fffde7", "100": "#fff9c4", "200": "#fff59d", "300": "#fff176", "400": "#ffee58", "500": "#ffeb3b", "600": "#fdd835", "700": "#fbc02d", "800": "#f9a825", "900": "#f57f17", "a100": "#ffff8d", "a200": "#ffff00", "a400": "#ffea00", "a700": "#ffd600" };
var amber = { "50": "#fff8e1", "100": "#ffecb3", "200": "#ffe082", "300": "#ffd54f", "400": "#ffca28", "500": "#ffc107", "600": "#ffb300", "700": "#ffa000", "800": "#ff8f00", "900": "#ff6f00", "a100": "#ffe57f", "a200": "#ffd740", "a400": "#ffc400", "a700": "#ffab00" };
var orange = { "50": "#fff3e0", "100": "#ffe0b2", "200": "#ffcc80", "300": "#ffb74d", "400": "#ffa726", "500": "#ff9800", "600": "#fb8c00", "700": "#f57c00", "800": "#ef6c00", "900": "#e65100", "a100": "#ffd180", "a200": "#ffab40", "a400": "#ff9100", "a700": "#ff6d00" };
var deepOrange = { "50": "#fbe9e7", "100": "#ffccbc", "200": "#ffab91", "300": "#ff8a65", "400": "#ff7043", "500": "#ff5722", "600": "#f4511e", "700": "#e64a19", "800": "#d84315", "900": "#bf360c", "a100": "#ff9e80", "a200": "#ff6e40", "a400": "#ff3d00", "a700": "#dd2c00" };
var brown = { "50": "#efebe9", "100": "#d7ccc8", "200": "#bcaaa4", "300": "#a1887f", "400": "#8d6e63", "500": "#795548", "600": "#6d4c41", "700": "#5d4037", "800": "#4e342e", "900": "#3e2723" };
var blueGrey = { "50": "#eceff1", "100": "#cfd8dc", "200": "#b0bec5", "300": "#90a4ae", "400": "#78909c", "500": "#607d8b", "600": "#546e7a", "700": "#455a64", "800": "#37474f", "900": "#263238" };
var CircleSwatch = function CircleSwatch2(_ref) {
  var color = _ref.color, onClick = _ref.onClick, onSwatchHover = _ref.onSwatchHover, hover3 = _ref.hover, active3 = _ref.active, circleSize = _ref.circleSize, circleSpacing = _ref.circleSpacing;
  var styles = _default$2({
    "default": {
      swatch: {
        width: circleSize,
        height: circleSize,
        marginRight: circleSpacing,
        marginBottom: circleSpacing,
        transform: "scale(1)",
        transition: "100ms transform ease"
      },
      Swatch: {
        borderRadius: "50%",
        background: "transparent",
        boxShadow: "inset 0 0 0 " + (circleSize / 2 + 1) + "px " + color,
        transition: "100ms box-shadow ease"
      }
    },
    "hover": {
      swatch: {
        transform: "scale(1.2)"
      }
    },
    "active": {
      Swatch: {
        boxShadow: "inset 0 0 0 3px " + color
      }
    }
  }, { hover: hover3, active: active3 });
  return React__default.createElement("div", { style: styles.swatch }, React__default.createElement(Swatch$1, {
    style: styles.Swatch,
    color,
    onClick,
    onHover: onSwatchHover,
    focusStyle: { boxShadow: styles.Swatch.boxShadow + ", 0 0 5px " + color }
  }));
};
CircleSwatch.defaultProps = {
  circleSize: 28,
  circleSpacing: 14
};
var CircleSwatch$1 = handleHover(CircleSwatch);
var Circle = function Circle2(_ref) {
  var width = _ref.width, onChange = _ref.onChange, onSwatchHover = _ref.onSwatchHover, colors = _ref.colors, hex = _ref.hex, circleSize = _ref.circleSize, _ref$styles = _ref.styles, passedStyles = _ref$styles === void 0 ? {} : _ref$styles, circleSpacing = _ref.circleSpacing, _ref$className = _ref.className, className = _ref$className === void 0 ? "" : _ref$className;
  var styles = _default$2(merge$1({
    "default": {
      card: {
        width,
        display: "flex",
        flexWrap: "wrap",
        marginRight: -circleSpacing,
        marginBottom: -circleSpacing
      }
    }
  }, passedStyles));
  var handleChange = function handleChange2(hexCode, e) {
    return onChange({ hex: hexCode, source: "hex" }, e);
  };
  return React__default.createElement("div", { style: styles.card, className: "circle-picker " + className }, map(colors, function(c) {
    return React__default.createElement(CircleSwatch$1, {
      key: c,
      color: c,
      onClick: handleChange,
      onSwatchHover,
      active: hex === c.toLowerCase(),
      circleSize,
      circleSpacing
    });
  }));
};
Circle.propTypes = {
  width: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  circleSize: PropTypes.number,
  circleSpacing: PropTypes.number,
  styles: PropTypes.object
};
Circle.defaultProps = {
  width: 252,
  circleSize: 28,
  circleSpacing: 14,
  colors: [red["500"], pink["500"], purple["500"], deepPurple["500"], indigo["500"], blue["500"], lightBlue["500"], cyan["500"], teal["500"], green["500"], lightGreen["500"], lime["500"], yellow["500"], amber["500"], orange["500"], deepOrange["500"], brown["500"], blueGrey["500"]],
  styles: {}
};
ColorWrap(Circle);
function isUndefined(value) {
  return value === void 0;
}
var UnfoldMoreHorizontalIcon = {};
Object.defineProperty(UnfoldMoreHorizontalIcon, "__esModule", {
  value: true
});
var _extends$a = Object.assign || function(target) {
  for (var i = 1; i < arguments.length; i++) {
    var source = arguments[i];
    for (var key in source) {
      if (Object.prototype.hasOwnProperty.call(source, key)) {
        target[key] = source[key];
      }
    }
  }
  return target;
};
var _react$1 = React__default;
var _react2$1 = _interopRequireDefault$1(_react$1);
function _interopRequireDefault$1(obj) {
  return obj && obj.__esModule ? obj : { default: obj };
}
function _objectWithoutProperties$1(obj, keys2) {
  var target = {};
  for (var i in obj) {
    if (keys2.indexOf(i) >= 0)
      continue;
    if (!Object.prototype.hasOwnProperty.call(obj, i))
      continue;
    target[i] = obj[i];
  }
  return target;
}
var DEFAULT_SIZE$1 = 24;
var _default$1 = UnfoldMoreHorizontalIcon.default = function(_ref) {
  var _ref$fill = _ref.fill, fill = _ref$fill === void 0 ? "currentColor" : _ref$fill, _ref$width = _ref.width, width = _ref$width === void 0 ? DEFAULT_SIZE$1 : _ref$width, _ref$height = _ref.height, height = _ref$height === void 0 ? DEFAULT_SIZE$1 : _ref$height, _ref$style = _ref.style, style = _ref$style === void 0 ? {} : _ref$style, props = _objectWithoutProperties$1(_ref, ["fill", "width", "height", "style"]);
  return _react2$1.default.createElement("svg", _extends$a({
    viewBox: "0 0 " + DEFAULT_SIZE$1 + " " + DEFAULT_SIZE$1,
    style: _extends$a({ fill, width, height }, style)
  }, props), _react2$1.default.createElement("path", { d: "M12,18.17L8.83,15L7.42,16.41L12,21L16.59,16.41L15.17,15M12,5.83L15.17,9L16.58,7.59L12,3L7.41,7.59L8.83,9L12,5.83Z" }));
};
var _createClass$1 = function() {
  function defineProperties(target, props) {
    for (var i = 0; i < props.length; i++) {
      var descriptor = props[i];
      descriptor.enumerable = descriptor.enumerable || false;
      descriptor.configurable = true;
      if ("value" in descriptor)
        descriptor.writable = true;
      Object.defineProperty(target, descriptor.key, descriptor);
    }
  }
  return function(Constructor, protoProps, staticProps) {
    if (protoProps)
      defineProperties(Constructor.prototype, protoProps);
    if (staticProps)
      defineProperties(Constructor, staticProps);
    return Constructor;
  };
}();
function _classCallCheck$1(instance, Constructor) {
  if (!(instance instanceof Constructor)) {
    throw new TypeError("Cannot call a class as a function");
  }
}
function _possibleConstructorReturn$1(self2, call) {
  if (!self2) {
    throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
  }
  return call && (typeof call === "object" || typeof call === "function") ? call : self2;
}
function _inherits$1(subClass, superClass) {
  if (typeof superClass !== "function" && superClass !== null) {
    throw new TypeError("Super expression must either be null or a function, not " + typeof superClass);
  }
  subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } });
  if (superClass)
    Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass;
}
var ChromeFields = function(_React$Component) {
  _inherits$1(ChromeFields2, _React$Component);
  function ChromeFields2(props) {
    _classCallCheck$1(this, ChromeFields2);
    var _this = _possibleConstructorReturn$1(this, (ChromeFields2.__proto__ || Object.getPrototypeOf(ChromeFields2)).call(this));
    _this.toggleViews = function() {
      if (_this.state.view === "hex") {
        _this.setState({ view: "rgb" });
      } else if (_this.state.view === "rgb") {
        _this.setState({ view: "hsl" });
      } else if (_this.state.view === "hsl") {
        if (_this.props.hsl.a === 1) {
          _this.setState({ view: "hex" });
        } else {
          _this.setState({ view: "rgb" });
        }
      }
    };
    _this.handleChange = function(data, e) {
      if (data.hex) {
        isValidHex(data.hex) && _this.props.onChange({
          hex: data.hex,
          source: "hex"
        }, e);
      } else if (data.r || data.g || data.b) {
        _this.props.onChange({
          r: data.r || _this.props.rgb.r,
          g: data.g || _this.props.rgb.g,
          b: data.b || _this.props.rgb.b,
          source: "rgb"
        }, e);
      } else if (data.a) {
        if (data.a < 0) {
          data.a = 0;
        } else if (data.a > 1) {
          data.a = 1;
        }
        _this.props.onChange({
          h: _this.props.hsl.h,
          s: _this.props.hsl.s,
          l: _this.props.hsl.l,
          a: Math.round(data.a * 100) / 100,
          source: "rgb"
        }, e);
      } else if (data.h || data.s || data.l) {
        if (typeof data.s === "string" && data.s.includes("%")) {
          data.s = data.s.replace("%", "");
        }
        if (typeof data.l === "string" && data.l.includes("%")) {
          data.l = data.l.replace("%", "");
        }
        if (data.s == 1) {
          data.s = 0.01;
        } else if (data.l == 1) {
          data.l = 0.01;
        }
        _this.props.onChange({
          h: data.h || _this.props.hsl.h,
          s: Number(!isUndefined(data.s) ? data.s : _this.props.hsl.s),
          l: Number(!isUndefined(data.l) ? data.l : _this.props.hsl.l),
          source: "hsl"
        }, e);
      }
    };
    _this.showHighlight = function(e) {
      e.currentTarget.style.background = "#eee";
    };
    _this.hideHighlight = function(e) {
      e.currentTarget.style.background = "transparent";
    };
    if (props.hsl.a !== 1 && props.view === "hex") {
      _this.state = {
        view: "rgb"
      };
    } else {
      _this.state = {
        view: props.view
      };
    }
    return _this;
  }
  _createClass$1(ChromeFields2, [{
    key: "render",
    value: function render3() {
      var _this2 = this;
      var styles = _default$2({
        "default": {
          wrap: {
            paddingTop: "16px",
            display: "flex"
          },
          fields: {
            flex: "1",
            display: "flex",
            marginLeft: "-6px"
          },
          field: {
            paddingLeft: "6px",
            width: "100%"
          },
          alpha: {
            paddingLeft: "6px",
            width: "100%"
          },
          toggle: {
            width: "32px",
            textAlign: "right",
            position: "relative"
          },
          icon: {
            marginRight: "-4px",
            marginTop: "12px",
            cursor: "pointer",
            position: "relative"
          },
          iconHighlight: {
            position: "absolute",
            width: "24px",
            height: "28px",
            background: "#eee",
            borderRadius: "4px",
            top: "10px",
            left: "12px",
            display: "none"
          },
          input: {
            fontSize: "11px",
            color: "#333",
            width: "100%",
            borderRadius: "2px",
            border: "none",
            boxShadow: "inset 0 0 0 1px #dadada",
            height: "21px",
            textAlign: "center"
          },
          label: {
            textTransform: "uppercase",
            fontSize: "11px",
            lineHeight: "11px",
            color: "#969696",
            textAlign: "center",
            display: "block",
            marginTop: "12px"
          },
          svg: {
            fill: "#333",
            width: "24px",
            height: "24px",
            border: "1px transparent solid",
            borderRadius: "5px"
          }
        },
        "disableAlpha": {
          alpha: {
            display: "none"
          }
        }
      }, this.props, this.state);
      var fields = void 0;
      if (this.state.view === "hex") {
        fields = React__default.createElement("div", { style: styles.fields, className: "flexbox-fix" }, React__default.createElement("div", { style: styles.field }, React__default.createElement(EditableInput, {
          style: { input: styles.input, label: styles.label },
          label: "hex",
          value: this.props.hex,
          onChange: this.handleChange
        })));
      } else if (this.state.view === "rgb") {
        fields = React__default.createElement("div", { style: styles.fields, className: "flexbox-fix" }, React__default.createElement("div", { style: styles.field }, React__default.createElement(EditableInput, {
          style: { input: styles.input, label: styles.label },
          label: "r",
          value: this.props.rgb.r,
          onChange: this.handleChange
        })), React__default.createElement("div", { style: styles.field }, React__default.createElement(EditableInput, {
          style: { input: styles.input, label: styles.label },
          label: "g",
          value: this.props.rgb.g,
          onChange: this.handleChange
        })), React__default.createElement("div", { style: styles.field }, React__default.createElement(EditableInput, {
          style: { input: styles.input, label: styles.label },
          label: "b",
          value: this.props.rgb.b,
          onChange: this.handleChange
        })), React__default.createElement("div", { style: styles.alpha }, React__default.createElement(EditableInput, {
          style: { input: styles.input, label: styles.label },
          label: "a",
          value: this.props.rgb.a,
          arrowOffset: 0.01,
          onChange: this.handleChange
        })));
      } else if (this.state.view === "hsl") {
        fields = React__default.createElement("div", { style: styles.fields, className: "flexbox-fix" }, React__default.createElement("div", { style: styles.field }, React__default.createElement(EditableInput, {
          style: { input: styles.input, label: styles.label },
          label: "h",
          value: Math.round(this.props.hsl.h),
          onChange: this.handleChange
        })), React__default.createElement("div", { style: styles.field }, React__default.createElement(EditableInput, {
          style: { input: styles.input, label: styles.label },
          label: "s",
          value: Math.round(this.props.hsl.s * 100) + "%",
          onChange: this.handleChange
        })), React__default.createElement("div", { style: styles.field }, React__default.createElement(EditableInput, {
          style: { input: styles.input, label: styles.label },
          label: "l",
          value: Math.round(this.props.hsl.l * 100) + "%",
          onChange: this.handleChange
        })), React__default.createElement("div", { style: styles.alpha }, React__default.createElement(EditableInput, {
          style: { input: styles.input, label: styles.label },
          label: "a",
          value: this.props.hsl.a,
          arrowOffset: 0.01,
          onChange: this.handleChange
        })));
      }
      return React__default.createElement("div", { style: styles.wrap, className: "flexbox-fix" }, fields, React__default.createElement("div", { style: styles.toggle }, React__default.createElement("div", { style: styles.icon, onClick: this.toggleViews, ref: function ref(icon) {
        return _this2.icon = icon;
      } }, React__default.createElement(_default$1, {
        style: styles.svg,
        onMouseOver: this.showHighlight,
        onMouseEnter: this.showHighlight,
        onMouseOut: this.hideHighlight
      }))));
    }
  }], [{
    key: "getDerivedStateFromProps",
    value: function getDerivedStateFromProps(nextProps, state) {
      if (nextProps.hsl.a !== 1 && state.view === "hex") {
        return { view: "rgb" };
      }
      return null;
    }
  }]);
  return ChromeFields2;
}(React__default.Component);
ChromeFields.defaultProps = {
  view: "hex"
};
var ChromePointer = function ChromePointer2() {
  var styles = _default$2({
    "default": {
      picker: {
        width: "12px",
        height: "12px",
        borderRadius: "6px",
        transform: "translate(-6px, -1px)",
        backgroundColor: "rgb(248, 248, 248)",
        boxShadow: "0 1px 4px 0 rgba(0, 0, 0, 0.37)"
      }
    }
  });
  return React__default.createElement("div", { style: styles.picker });
};
var ChromePointerCircle = function ChromePointerCircle2() {
  var styles = _default$2({
    "default": {
      picker: {
        width: "12px",
        height: "12px",
        borderRadius: "6px",
        boxShadow: "inset 0 0 0 1px #fff",
        transform: "translate(-6px, -6px)"
      }
    }
  });
  return React__default.createElement("div", { style: styles.picker });
};
var Chrome = function Chrome2(_ref) {
  var width = _ref.width, onChange = _ref.onChange, disableAlpha = _ref.disableAlpha, rgb = _ref.rgb, hsl = _ref.hsl, hsv = _ref.hsv, hex = _ref.hex, renderers = _ref.renderers, _ref$styles = _ref.styles, passedStyles = _ref$styles === void 0 ? {} : _ref$styles, _ref$className = _ref.className, className = _ref$className === void 0 ? "" : _ref$className, defaultView = _ref.defaultView;
  var styles = _default$2(merge$1({
    "default": {
      picker: {
        width,
        background: "#fff",
        borderRadius: "2px",
        boxShadow: "0 0 2px rgba(0,0,0,.3), 0 4px 8px rgba(0,0,0,.3)",
        boxSizing: "initial",
        fontFamily: "Menlo"
      },
      saturation: {
        width: "100%",
        paddingBottom: "55%",
        position: "relative",
        borderRadius: "2px 2px 0 0",
        overflow: "hidden"
      },
      Saturation: {
        radius: "2px 2px 0 0"
      },
      body: {
        padding: "16px 16px 12px"
      },
      controls: {
        display: "flex"
      },
      color: {
        width: "32px"
      },
      swatch: {
        marginTop: "6px",
        width: "16px",
        height: "16px",
        borderRadius: "8px",
        position: "relative",
        overflow: "hidden"
      },
      active: {
        absolute: "0px 0px 0px 0px",
        borderRadius: "8px",
        boxShadow: "inset 0 0 0 1px rgba(0,0,0,.1)",
        background: "rgba(" + rgb.r + ", " + rgb.g + ", " + rgb.b + ", " + rgb.a + ")",
        zIndex: "2"
      },
      toggles: {
        flex: "1"
      },
      hue: {
        height: "10px",
        position: "relative",
        marginBottom: "8px"
      },
      Hue: {
        radius: "2px"
      },
      alpha: {
        height: "10px",
        position: "relative"
      },
      Alpha: {
        radius: "2px"
      }
    },
    "disableAlpha": {
      color: {
        width: "22px"
      },
      alpha: {
        display: "none"
      },
      hue: {
        marginBottom: "0px"
      },
      swatch: {
        width: "10px",
        height: "10px",
        marginTop: "0px"
      }
    }
  }, passedStyles), { disableAlpha });
  return React__default.createElement("div", { style: styles.picker, className: "chrome-picker " + className }, React__default.createElement("div", { style: styles.saturation }, React__default.createElement(Saturation, {
    style: styles.Saturation,
    hsl,
    hsv,
    pointer: ChromePointerCircle,
    onChange
  })), React__default.createElement("div", { style: styles.body }, React__default.createElement("div", { style: styles.controls, className: "flexbox-fix" }, React__default.createElement("div", { style: styles.color }, React__default.createElement("div", { style: styles.swatch }, React__default.createElement("div", { style: styles.active }), React__default.createElement(Checkboard, { renderers }))), React__default.createElement("div", { style: styles.toggles }, React__default.createElement("div", { style: styles.hue }, React__default.createElement(Hue, {
    style: styles.Hue,
    hsl,
    pointer: ChromePointer,
    onChange
  })), React__default.createElement("div", { style: styles.alpha }, React__default.createElement(Alpha, {
    style: styles.Alpha,
    rgb,
    hsl,
    pointer: ChromePointer,
    renderers,
    onChange
  })))), React__default.createElement(ChromeFields, {
    rgb,
    hsl,
    hex,
    view: defaultView,
    onChange,
    disableAlpha
  })));
};
Chrome.propTypes = {
  width: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  disableAlpha: PropTypes.bool,
  styles: PropTypes.object,
  defaultView: PropTypes.oneOf(["hex", "rgb", "hsl"])
};
Chrome.defaultProps = {
  width: 225,
  disableAlpha: false,
  styles: {}
};
ColorWrap(Chrome);
var CompactColor = function CompactColor2(_ref) {
  var color = _ref.color, _ref$onClick = _ref.onClick, onClick = _ref$onClick === void 0 ? function() {
  } : _ref$onClick, onSwatchHover = _ref.onSwatchHover, active3 = _ref.active;
  var styles = _default$2({
    "default": {
      color: {
        background: color,
        width: "15px",
        height: "15px",
        float: "left",
        marginRight: "5px",
        marginBottom: "5px",
        position: "relative",
        cursor: "pointer"
      },
      dot: {
        absolute: "5px 5px 5px 5px",
        background: getContrastingColor(color),
        borderRadius: "50%",
        opacity: "0"
      }
    },
    "active": {
      dot: {
        opacity: "1"
      }
    },
    "color-#FFFFFF": {
      color: {
        boxShadow: "inset 0 0 0 1px #ddd"
      },
      dot: {
        background: "#000"
      }
    },
    "transparent": {
      dot: {
        background: "#000"
      }
    }
  }, { active: active3, "color-#FFFFFF": color === "#FFFFFF", "transparent": color === "transparent" });
  return React__default.createElement(Swatch$1, {
    style: styles.color,
    color,
    onClick,
    onHover: onSwatchHover,
    focusStyle: { boxShadow: "0 0 4px " + color }
  }, React__default.createElement("div", { style: styles.dot }));
};
var CompactFields = function CompactFields2(_ref) {
  var hex = _ref.hex, rgb = _ref.rgb, onChange = _ref.onChange;
  var styles = _default$2({
    "default": {
      fields: {
        display: "flex",
        paddingBottom: "6px",
        paddingRight: "5px",
        position: "relative"
      },
      active: {
        position: "absolute",
        top: "6px",
        left: "5px",
        height: "9px",
        width: "9px",
        background: hex
      },
      HEXwrap: {
        flex: "6",
        position: "relative"
      },
      HEXinput: {
        width: "80%",
        padding: "0px",
        paddingLeft: "20%",
        border: "none",
        outline: "none",
        background: "none",
        fontSize: "12px",
        color: "#333",
        height: "16px"
      },
      HEXlabel: {
        display: "none"
      },
      RGBwrap: {
        flex: "3",
        position: "relative"
      },
      RGBinput: {
        width: "70%",
        padding: "0px",
        paddingLeft: "30%",
        border: "none",
        outline: "none",
        background: "none",
        fontSize: "12px",
        color: "#333",
        height: "16px"
      },
      RGBlabel: {
        position: "absolute",
        top: "3px",
        left: "0px",
        lineHeight: "16px",
        textTransform: "uppercase",
        fontSize: "12px",
        color: "#999"
      }
    }
  });
  var handleChange = function handleChange2(data, e) {
    if (data.r || data.g || data.b) {
      onChange({
        r: data.r || rgb.r,
        g: data.g || rgb.g,
        b: data.b || rgb.b,
        source: "rgb"
      }, e);
    } else {
      onChange({
        hex: data.hex,
        source: "hex"
      }, e);
    }
  };
  return React__default.createElement("div", { style: styles.fields, className: "flexbox-fix" }, React__default.createElement("div", { style: styles.active }), React__default.createElement(EditableInput, {
    style: { wrap: styles.HEXwrap, input: styles.HEXinput, label: styles.HEXlabel },
    label: "hex",
    value: hex,
    onChange: handleChange
  }), React__default.createElement(EditableInput, {
    style: { wrap: styles.RGBwrap, input: styles.RGBinput, label: styles.RGBlabel },
    label: "r",
    value: rgb.r,
    onChange: handleChange
  }), React__default.createElement(EditableInput, {
    style: { wrap: styles.RGBwrap, input: styles.RGBinput, label: styles.RGBlabel },
    label: "g",
    value: rgb.g,
    onChange: handleChange
  }), React__default.createElement(EditableInput, {
    style: { wrap: styles.RGBwrap, input: styles.RGBinput, label: styles.RGBlabel },
    label: "b",
    value: rgb.b,
    onChange: handleChange
  }));
};
var Compact = function Compact2(_ref) {
  var onChange = _ref.onChange, onSwatchHover = _ref.onSwatchHover, colors = _ref.colors, hex = _ref.hex, rgb = _ref.rgb, _ref$styles = _ref.styles, passedStyles = _ref$styles === void 0 ? {} : _ref$styles, _ref$className = _ref.className, className = _ref$className === void 0 ? "" : _ref$className;
  var styles = _default$2(merge$1({
    "default": {
      Compact: {
        background: "#f6f6f6",
        radius: "4px"
      },
      compact: {
        paddingTop: "5px",
        paddingLeft: "5px",
        boxSizing: "initial",
        width: "240px"
      },
      clear: {
        clear: "both"
      }
    }
  }, passedStyles));
  var handleChange = function handleChange2(data, e) {
    if (data.hex) {
      isValidHex(data.hex) && onChange({
        hex: data.hex,
        source: "hex"
      }, e);
    } else {
      onChange(data, e);
    }
  };
  return React__default.createElement(Raised, { style: styles.Compact, styles: passedStyles }, React__default.createElement("div", { style: styles.compact, className: "compact-picker " + className }, React__default.createElement("div", null, map(colors, function(c) {
    return React__default.createElement(CompactColor, {
      key: c,
      color: c,
      active: c.toLowerCase() === hex,
      onClick: handleChange,
      onSwatchHover
    });
  }), React__default.createElement("div", { style: styles.clear })), React__default.createElement(CompactFields, { hex, rgb, onChange: handleChange })));
};
Compact.propTypes = {
  colors: PropTypes.arrayOf(PropTypes.string),
  styles: PropTypes.object
};
Compact.defaultProps = {
  colors: ["#4D4D4D", "#999999", "#FFFFFF", "#F44E3B", "#FE9200", "#FCDC00", "#DBDF00", "#A4DD00", "#68CCCA", "#73D8FF", "#AEA1FF", "#FDA1FF", "#333333", "#808080", "#cccccc", "#D33115", "#E27300", "#FCC400", "#B0BC00", "#68BC00", "#16A5A5", "#009CE0", "#7B64FF", "#FA28FF", "#000000", "#666666", "#B3B3B3", "#9F0500", "#C45100", "#FB9E00", "#808900", "#194D33", "#0C797D", "#0062B1", "#653294", "#AB149E"],
  styles: {}
};
ColorWrap(Compact);
var GithubSwatch = function GithubSwatch2(_ref) {
  var hover3 = _ref.hover, color = _ref.color, onClick = _ref.onClick, onSwatchHover = _ref.onSwatchHover;
  var hoverSwatch = {
    position: "relative",
    zIndex: "2",
    outline: "2px solid #fff",
    boxShadow: "0 0 5px 2px rgba(0,0,0,0.25)"
  };
  var styles = _default$2({
    "default": {
      swatch: {
        width: "25px",
        height: "25px",
        fontSize: "0"
      }
    },
    "hover": {
      swatch: hoverSwatch
    }
  }, { hover: hover3 });
  return React__default.createElement("div", { style: styles.swatch }, React__default.createElement(Swatch$1, {
    color,
    onClick,
    onHover: onSwatchHover,
    focusStyle: hoverSwatch
  }));
};
var GithubSwatch$1 = handleHover(GithubSwatch);
var Github = function Github2(_ref) {
  var width = _ref.width, colors = _ref.colors, onChange = _ref.onChange, onSwatchHover = _ref.onSwatchHover, triangle = _ref.triangle, _ref$styles = _ref.styles, passedStyles = _ref$styles === void 0 ? {} : _ref$styles, _ref$className = _ref.className, className = _ref$className === void 0 ? "" : _ref$className;
  var styles = _default$2(merge$1({
    "default": {
      card: {
        width,
        background: "#fff",
        border: "1px solid rgba(0,0,0,0.2)",
        boxShadow: "0 3px 12px rgba(0,0,0,0.15)",
        borderRadius: "4px",
        position: "relative",
        padding: "5px",
        display: "flex",
        flexWrap: "wrap"
      },
      triangle: {
        position: "absolute",
        border: "7px solid transparent",
        borderBottomColor: "#fff"
      },
      triangleShadow: {
        position: "absolute",
        border: "8px solid transparent",
        borderBottomColor: "rgba(0,0,0,0.15)"
      }
    },
    "hide-triangle": {
      triangle: {
        display: "none"
      },
      triangleShadow: {
        display: "none"
      }
    },
    "top-left-triangle": {
      triangle: {
        top: "-14px",
        left: "10px"
      },
      triangleShadow: {
        top: "-16px",
        left: "9px"
      }
    },
    "top-right-triangle": {
      triangle: {
        top: "-14px",
        right: "10px"
      },
      triangleShadow: {
        top: "-16px",
        right: "9px"
      }
    },
    "bottom-left-triangle": {
      triangle: {
        top: "35px",
        left: "10px",
        transform: "rotate(180deg)"
      },
      triangleShadow: {
        top: "37px",
        left: "9px",
        transform: "rotate(180deg)"
      }
    },
    "bottom-right-triangle": {
      triangle: {
        top: "35px",
        right: "10px",
        transform: "rotate(180deg)"
      },
      triangleShadow: {
        top: "37px",
        right: "9px",
        transform: "rotate(180deg)"
      }
    }
  }, passedStyles), {
    "hide-triangle": triangle === "hide",
    "top-left-triangle": triangle === "top-left",
    "top-right-triangle": triangle === "top-right",
    "bottom-left-triangle": triangle === "bottom-left",
    "bottom-right-triangle": triangle === "bottom-right"
  });
  var handleChange = function handleChange2(hex, e) {
    return onChange({ hex, source: "hex" }, e);
  };
  return React__default.createElement("div", { style: styles.card, className: "github-picker " + className }, React__default.createElement("div", { style: styles.triangleShadow }), React__default.createElement("div", { style: styles.triangle }), map(colors, function(c) {
    return React__default.createElement(GithubSwatch$1, {
      color: c,
      key: c,
      onClick: handleChange,
      onSwatchHover
    });
  }));
};
Github.propTypes = {
  width: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  colors: PropTypes.arrayOf(PropTypes.string),
  triangle: PropTypes.oneOf(["hide", "top-left", "top-right", "bottom-left", "bottom-right"]),
  styles: PropTypes.object
};
Github.defaultProps = {
  width: 200,
  colors: ["#B80000", "#DB3E00", "#FCCB00", "#008B02", "#006B76", "#1273DE", "#004DCF", "#5300EB", "#EB9694", "#FAD0C3", "#FEF3BD", "#C1E1C5", "#BEDADC", "#C4DEF6", "#BED3F3", "#D4C4FB"],
  triangle: "top-left",
  styles: {}
};
ColorWrap(Github);
var SliderPointer$1 = function SliderPointer(_ref) {
  var direction = _ref.direction;
  var styles = _default$2({
    "default": {
      picker: {
        width: "18px",
        height: "18px",
        borderRadius: "50%",
        transform: "translate(-9px, -1px)",
        backgroundColor: "rgb(248, 248, 248)",
        boxShadow: "0 1px 4px 0 rgba(0, 0, 0, 0.37)"
      }
    },
    "vertical": {
      picker: {
        transform: "translate(-3px, -9px)"
      }
    }
  }, { vertical: direction === "vertical" });
  return React__default.createElement("div", { style: styles.picker });
};
var _extends$9 = Object.assign || function(target) {
  for (var i = 1; i < arguments.length; i++) {
    var source = arguments[i];
    for (var key in source) {
      if (Object.prototype.hasOwnProperty.call(source, key)) {
        target[key] = source[key];
      }
    }
  }
  return target;
};
var HuePicker = function HuePicker2(_ref) {
  var width = _ref.width, height = _ref.height, onChange = _ref.onChange, hsl = _ref.hsl, direction = _ref.direction, pointer = _ref.pointer, _ref$styles = _ref.styles, passedStyles = _ref$styles === void 0 ? {} : _ref$styles, _ref$className = _ref.className, className = _ref$className === void 0 ? "" : _ref$className;
  var styles = _default$2(merge$1({
    "default": {
      picker: {
        position: "relative",
        width,
        height
      },
      hue: {
        radius: "2px"
      }
    }
  }, passedStyles));
  var handleChange = function handleChange2(data) {
    return onChange({ a: 1, h: data.h, l: 0.5, s: 1 });
  };
  return React__default.createElement("div", { style: styles.picker, className: "hue-picker " + className }, React__default.createElement(Hue, _extends$9({}, styles.hue, {
    hsl,
    pointer,
    onChange: handleChange,
    direction
  })));
};
HuePicker.propTypes = {
  styles: PropTypes.object
};
HuePicker.defaultProps = {
  width: "316px",
  height: "16px",
  direction: "horizontal",
  pointer: SliderPointer$1,
  styles: {}
};
ColorWrap(HuePicker);
var Material = function Material2(_ref) {
  var onChange = _ref.onChange, hex = _ref.hex, rgb = _ref.rgb, _ref$styles = _ref.styles, passedStyles = _ref$styles === void 0 ? {} : _ref$styles, _ref$className = _ref.className, className = _ref$className === void 0 ? "" : _ref$className;
  var styles = _default$2(merge$1({
    "default": {
      material: {
        width: "98px",
        height: "98px",
        padding: "16px",
        fontFamily: "Roboto"
      },
      HEXwrap: {
        position: "relative"
      },
      HEXinput: {
        width: "100%",
        marginTop: "12px",
        fontSize: "15px",
        color: "#333",
        padding: "0px",
        border: "0px",
        borderBottom: "2px solid " + hex,
        outline: "none",
        height: "30px"
      },
      HEXlabel: {
        position: "absolute",
        top: "0px",
        left: "0px",
        fontSize: "11px",
        color: "#999999",
        textTransform: "capitalize"
      },
      Hex: {
        style: {}
      },
      RGBwrap: {
        position: "relative"
      },
      RGBinput: {
        width: "100%",
        marginTop: "12px",
        fontSize: "15px",
        color: "#333",
        padding: "0px",
        border: "0px",
        borderBottom: "1px solid #eee",
        outline: "none",
        height: "30px"
      },
      RGBlabel: {
        position: "absolute",
        top: "0px",
        left: "0px",
        fontSize: "11px",
        color: "#999999",
        textTransform: "capitalize"
      },
      split: {
        display: "flex",
        marginRight: "-10px",
        paddingTop: "11px"
      },
      third: {
        flex: "1",
        paddingRight: "10px"
      }
    }
  }, passedStyles));
  var handleChange = function handleChange2(data, e) {
    if (data.hex) {
      isValidHex(data.hex) && onChange({
        hex: data.hex,
        source: "hex"
      }, e);
    } else if (data.r || data.g || data.b) {
      onChange({
        r: data.r || rgb.r,
        g: data.g || rgb.g,
        b: data.b || rgb.b,
        source: "rgb"
      }, e);
    }
  };
  return React__default.createElement(Raised, { styles: passedStyles }, React__default.createElement("div", { style: styles.material, className: "material-picker " + className }, React__default.createElement(EditableInput, {
    style: { wrap: styles.HEXwrap, input: styles.HEXinput, label: styles.HEXlabel },
    label: "hex",
    value: hex,
    onChange: handleChange
  }), React__default.createElement("div", { style: styles.split, className: "flexbox-fix" }, React__default.createElement("div", { style: styles.third }, React__default.createElement(EditableInput, {
    style: { wrap: styles.RGBwrap, input: styles.RGBinput, label: styles.RGBlabel },
    label: "r",
    value: rgb.r,
    onChange: handleChange
  })), React__default.createElement("div", { style: styles.third }, React__default.createElement(EditableInput, {
    style: { wrap: styles.RGBwrap, input: styles.RGBinput, label: styles.RGBlabel },
    label: "g",
    value: rgb.g,
    onChange: handleChange
  })), React__default.createElement("div", { style: styles.third }, React__default.createElement(EditableInput, {
    style: { wrap: styles.RGBwrap, input: styles.RGBinput, label: styles.RGBlabel },
    label: "b",
    value: rgb.b,
    onChange: handleChange
  })))));
};
ColorWrap(Material);
var PhotoshopPicker = function PhotoshopPicker2(_ref) {
  var onChange = _ref.onChange, rgb = _ref.rgb, hsv = _ref.hsv, hex = _ref.hex;
  var styles = _default$2({
    "default": {
      fields: {
        paddingTop: "5px",
        paddingBottom: "9px",
        width: "80px",
        position: "relative"
      },
      divider: {
        height: "5px"
      },
      RGBwrap: {
        position: "relative"
      },
      RGBinput: {
        marginLeft: "40%",
        width: "40%",
        height: "18px",
        border: "1px solid #888888",
        boxShadow: "inset 0 1px 1px rgba(0,0,0,.1), 0 1px 0 0 #ECECEC",
        marginBottom: "5px",
        fontSize: "13px",
        paddingLeft: "3px",
        marginRight: "10px"
      },
      RGBlabel: {
        left: "0px",
        top: "0px",
        width: "34px",
        textTransform: "uppercase",
        fontSize: "13px",
        height: "18px",
        lineHeight: "22px",
        position: "absolute"
      },
      HEXwrap: {
        position: "relative"
      },
      HEXinput: {
        marginLeft: "20%",
        width: "80%",
        height: "18px",
        border: "1px solid #888888",
        boxShadow: "inset 0 1px 1px rgba(0,0,0,.1), 0 1px 0 0 #ECECEC",
        marginBottom: "6px",
        fontSize: "13px",
        paddingLeft: "3px"
      },
      HEXlabel: {
        position: "absolute",
        top: "0px",
        left: "0px",
        width: "14px",
        textTransform: "uppercase",
        fontSize: "13px",
        height: "18px",
        lineHeight: "22px"
      },
      fieldSymbols: {
        position: "absolute",
        top: "5px",
        right: "-7px",
        fontSize: "13px"
      },
      symbol: {
        height: "20px",
        lineHeight: "22px",
        paddingBottom: "7px"
      }
    }
  });
  var handleChange = function handleChange2(data, e) {
    if (data["#"]) {
      isValidHex(data["#"]) && onChange({
        hex: data["#"],
        source: "hex"
      }, e);
    } else if (data.r || data.g || data.b) {
      onChange({
        r: data.r || rgb.r,
        g: data.g || rgb.g,
        b: data.b || rgb.b,
        source: "rgb"
      }, e);
    } else if (data.h || data.s || data.v) {
      onChange({
        h: data.h || hsv.h,
        s: data.s || hsv.s,
        v: data.v || hsv.v,
        source: "hsv"
      }, e);
    }
  };
  return React__default.createElement("div", { style: styles.fields }, React__default.createElement(EditableInput, {
    style: { wrap: styles.RGBwrap, input: styles.RGBinput, label: styles.RGBlabel },
    label: "h",
    value: Math.round(hsv.h),
    onChange: handleChange
  }), React__default.createElement(EditableInput, {
    style: { wrap: styles.RGBwrap, input: styles.RGBinput, label: styles.RGBlabel },
    label: "s",
    value: Math.round(hsv.s * 100),
    onChange: handleChange
  }), React__default.createElement(EditableInput, {
    style: { wrap: styles.RGBwrap, input: styles.RGBinput, label: styles.RGBlabel },
    label: "v",
    value: Math.round(hsv.v * 100),
    onChange: handleChange
  }), React__default.createElement("div", { style: styles.divider }), React__default.createElement(EditableInput, {
    style: { wrap: styles.RGBwrap, input: styles.RGBinput, label: styles.RGBlabel },
    label: "r",
    value: rgb.r,
    onChange: handleChange
  }), React__default.createElement(EditableInput, {
    style: { wrap: styles.RGBwrap, input: styles.RGBinput, label: styles.RGBlabel },
    label: "g",
    value: rgb.g,
    onChange: handleChange
  }), React__default.createElement(EditableInput, {
    style: { wrap: styles.RGBwrap, input: styles.RGBinput, label: styles.RGBlabel },
    label: "b",
    value: rgb.b,
    onChange: handleChange
  }), React__default.createElement("div", { style: styles.divider }), React__default.createElement(EditableInput, {
    style: { wrap: styles.HEXwrap, input: styles.HEXinput, label: styles.HEXlabel },
    label: "#",
    value: hex.replace("#", ""),
    onChange: handleChange
  }), React__default.createElement("div", { style: styles.fieldSymbols }, React__default.createElement("div", { style: styles.symbol }, "\xB0"), React__default.createElement("div", { style: styles.symbol }, "%"), React__default.createElement("div", { style: styles.symbol }, "%")));
};
var PhotoshopPointerCircle$1 = function PhotoshopPointerCircle(_ref) {
  var hsl = _ref.hsl;
  var styles = _default$2({
    "default": {
      picker: {
        width: "12px",
        height: "12px",
        borderRadius: "6px",
        boxShadow: "inset 0 0 0 1px #fff",
        transform: "translate(-6px, -6px)"
      }
    },
    "black-outline": {
      picker: {
        boxShadow: "inset 0 0 0 1px #000"
      }
    }
  }, { "black-outline": hsl.l > 0.5 });
  return React__default.createElement("div", { style: styles.picker });
};
var PhotoshopPointerCircle2 = function PhotoshopPointerCircle3() {
  var styles = _default$2({
    "default": {
      triangle: {
        width: 0,
        height: 0,
        borderStyle: "solid",
        borderWidth: "4px 0 4px 6px",
        borderColor: "transparent transparent transparent #fff",
        position: "absolute",
        top: "1px",
        left: "1px"
      },
      triangleBorder: {
        width: 0,
        height: 0,
        borderStyle: "solid",
        borderWidth: "5px 0 5px 8px",
        borderColor: "transparent transparent transparent #555"
      },
      left: {
        Extend: "triangleBorder",
        transform: "translate(-13px, -4px)"
      },
      leftInside: {
        Extend: "triangle",
        transform: "translate(-8px, -5px)"
      },
      right: {
        Extend: "triangleBorder",
        transform: "translate(20px, -14px) rotate(180deg)"
      },
      rightInside: {
        Extend: "triangle",
        transform: "translate(-8px, -5px)"
      }
    }
  });
  return React__default.createElement("div", { style: styles.pointer }, React__default.createElement("div", { style: styles.left }, React__default.createElement("div", { style: styles.leftInside })), React__default.createElement("div", { style: styles.right }, React__default.createElement("div", { style: styles.rightInside })));
};
var PhotoshopButton = function PhotoshopButton2(_ref) {
  var onClick = _ref.onClick, label = _ref.label, children = _ref.children, active3 = _ref.active;
  var styles = _default$2({
    "default": {
      button: {
        backgroundImage: "linear-gradient(-180deg, #FFFFFF 0%, #E6E6E6 100%)",
        border: "1px solid #878787",
        borderRadius: "2px",
        height: "20px",
        boxShadow: "0 1px 0 0 #EAEAEA",
        fontSize: "14px",
        color: "#000",
        lineHeight: "20px",
        textAlign: "center",
        marginBottom: "10px",
        cursor: "pointer"
      }
    },
    "active": {
      button: {
        boxShadow: "0 0 0 1px #878787"
      }
    }
  }, { active: active3 });
  return React__default.createElement("div", { style: styles.button, onClick }, label || children);
};
var PhotoshopPreviews = function PhotoshopPreviews2(_ref) {
  var rgb = _ref.rgb, currentColor = _ref.currentColor;
  var styles = _default$2({
    "default": {
      swatches: {
        border: "1px solid #B3B3B3",
        borderBottom: "1px solid #F0F0F0",
        marginBottom: "2px",
        marginTop: "1px"
      },
      new: {
        height: "34px",
        background: "rgb(" + rgb.r + "," + rgb.g + ", " + rgb.b + ")",
        boxShadow: "inset 1px 0 0 #000, inset -1px 0 0 #000, inset 0 1px 0 #000"
      },
      current: {
        height: "34px",
        background: currentColor,
        boxShadow: "inset 1px 0 0 #000, inset -1px 0 0 #000, inset 0 -1px 0 #000"
      },
      label: {
        fontSize: "14px",
        color: "#000",
        textAlign: "center"
      }
    }
  });
  return React__default.createElement("div", null, React__default.createElement("div", { style: styles.label }, "new"), React__default.createElement("div", { style: styles.swatches }, React__default.createElement("div", { style: styles.new }), React__default.createElement("div", { style: styles.current })), React__default.createElement("div", { style: styles.label }, "current"));
};
var _createClass = function() {
  function defineProperties(target, props) {
    for (var i = 0; i < props.length; i++) {
      var descriptor = props[i];
      descriptor.enumerable = descriptor.enumerable || false;
      descriptor.configurable = true;
      if ("value" in descriptor)
        descriptor.writable = true;
      Object.defineProperty(target, descriptor.key, descriptor);
    }
  }
  return function(Constructor, protoProps, staticProps) {
    if (protoProps)
      defineProperties(Constructor.prototype, protoProps);
    if (staticProps)
      defineProperties(Constructor, staticProps);
    return Constructor;
  };
}();
function _classCallCheck(instance, Constructor) {
  if (!(instance instanceof Constructor)) {
    throw new TypeError("Cannot call a class as a function");
  }
}
function _possibleConstructorReturn(self2, call) {
  if (!self2) {
    throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
  }
  return call && (typeof call === "object" || typeof call === "function") ? call : self2;
}
function _inherits(subClass, superClass) {
  if (typeof superClass !== "function" && superClass !== null) {
    throw new TypeError("Super expression must either be null or a function, not " + typeof superClass);
  }
  subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } });
  if (superClass)
    Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass;
}
var Photoshop = function(_React$Component) {
  _inherits(Photoshop2, _React$Component);
  function Photoshop2(props) {
    _classCallCheck(this, Photoshop2);
    var _this = _possibleConstructorReturn(this, (Photoshop2.__proto__ || Object.getPrototypeOf(Photoshop2)).call(this));
    _this.state = {
      currentColor: props.hex
    };
    return _this;
  }
  _createClass(Photoshop2, [{
    key: "render",
    value: function render3() {
      var _props = this.props, _props$styles = _props.styles, passedStyles = _props$styles === void 0 ? {} : _props$styles, _props$className = _props.className, className = _props$className === void 0 ? "" : _props$className;
      var styles = _default$2(merge$1({
        "default": {
          picker: {
            background: "#DCDCDC",
            borderRadius: "4px",
            boxShadow: "0 0 0 1px rgba(0,0,0,.25), 0 8px 16px rgba(0,0,0,.15)",
            boxSizing: "initial",
            width: "513px"
          },
          head: {
            backgroundImage: "linear-gradient(-180deg, #F0F0F0 0%, #D4D4D4 100%)",
            borderBottom: "1px solid #B1B1B1",
            boxShadow: "inset 0 1px 0 0 rgba(255,255,255,.2), inset 0 -1px 0 0 rgba(0,0,0,.02)",
            height: "23px",
            lineHeight: "24px",
            borderRadius: "4px 4px 0 0",
            fontSize: "13px",
            color: "#4D4D4D",
            textAlign: "center"
          },
          body: {
            padding: "15px 15px 0",
            display: "flex"
          },
          saturation: {
            width: "256px",
            height: "256px",
            position: "relative",
            border: "2px solid #B3B3B3",
            borderBottom: "2px solid #F0F0F0",
            overflow: "hidden"
          },
          hue: {
            position: "relative",
            height: "256px",
            width: "19px",
            marginLeft: "10px",
            border: "2px solid #B3B3B3",
            borderBottom: "2px solid #F0F0F0"
          },
          controls: {
            width: "180px",
            marginLeft: "10px"
          },
          top: {
            display: "flex"
          },
          previews: {
            width: "60px"
          },
          actions: {
            flex: "1",
            marginLeft: "20px"
          }
        }
      }, passedStyles));
      return React__default.createElement("div", { style: styles.picker, className: "photoshop-picker " + className }, React__default.createElement("div", { style: styles.head }, this.props.header), React__default.createElement("div", { style: styles.body, className: "flexbox-fix" }, React__default.createElement("div", { style: styles.saturation }, React__default.createElement(Saturation, {
        hsl: this.props.hsl,
        hsv: this.props.hsv,
        pointer: PhotoshopPointerCircle$1,
        onChange: this.props.onChange
      })), React__default.createElement("div", { style: styles.hue }, React__default.createElement(Hue, {
        direction: "vertical",
        hsl: this.props.hsl,
        pointer: PhotoshopPointerCircle2,
        onChange: this.props.onChange
      })), React__default.createElement("div", { style: styles.controls }, React__default.createElement("div", { style: styles.top, className: "flexbox-fix" }, React__default.createElement("div", { style: styles.previews }, React__default.createElement(PhotoshopPreviews, {
        rgb: this.props.rgb,
        currentColor: this.state.currentColor
      })), React__default.createElement("div", { style: styles.actions }, React__default.createElement(PhotoshopButton, { label: "OK", onClick: this.props.onAccept, active: true }), React__default.createElement(PhotoshopButton, { label: "Cancel", onClick: this.props.onCancel }), React__default.createElement(PhotoshopPicker, {
        onChange: this.props.onChange,
        rgb: this.props.rgb,
        hsv: this.props.hsv,
        hex: this.props.hex
      }))))));
    }
  }]);
  return Photoshop2;
}(React__default.Component);
Photoshop.propTypes = {
  header: PropTypes.string,
  styles: PropTypes.object
};
Photoshop.defaultProps = {
  header: "Color Picker",
  styles: {}
};
ColorWrap(Photoshop);
var SketchFields = function SketchFields2(_ref) {
  var onChange = _ref.onChange, rgb = _ref.rgb, hsl = _ref.hsl, hex = _ref.hex, disableAlpha = _ref.disableAlpha;
  var styles = _default$2({
    "default": {
      fields: {
        display: "flex",
        paddingTop: "4px"
      },
      single: {
        flex: "1",
        paddingLeft: "6px"
      },
      alpha: {
        flex: "1",
        paddingLeft: "6px"
      },
      double: {
        flex: "2"
      },
      input: {
        width: "80%",
        padding: "4px 10% 3px",
        border: "none",
        boxShadow: "inset 0 0 0 1px #ccc",
        fontSize: "11px"
      },
      label: {
        display: "block",
        textAlign: "center",
        fontSize: "11px",
        color: "#222",
        paddingTop: "3px",
        paddingBottom: "4px",
        textTransform: "capitalize"
      }
    },
    "disableAlpha": {
      alpha: {
        display: "none"
      }
    }
  }, { disableAlpha });
  var handleChange = function handleChange2(data, e) {
    if (data.hex) {
      isValidHex(data.hex) && onChange({
        hex: data.hex,
        source: "hex"
      }, e);
    } else if (data.r || data.g || data.b) {
      onChange({
        r: data.r || rgb.r,
        g: data.g || rgb.g,
        b: data.b || rgb.b,
        a: rgb.a,
        source: "rgb"
      }, e);
    } else if (data.a) {
      if (data.a < 0) {
        data.a = 0;
      } else if (data.a > 100) {
        data.a = 100;
      }
      data.a /= 100;
      onChange({
        h: hsl.h,
        s: hsl.s,
        l: hsl.l,
        a: data.a,
        source: "rgb"
      }, e);
    }
  };
  return React__default.createElement("div", { style: styles.fields, className: "flexbox-fix" }, React__default.createElement("div", { style: styles.double }, React__default.createElement(EditableInput, {
    style: { input: styles.input, label: styles.label },
    label: "hex",
    value: hex.replace("#", ""),
    onChange: handleChange
  })), React__default.createElement("div", { style: styles.single }, React__default.createElement(EditableInput, {
    style: { input: styles.input, label: styles.label },
    label: "r",
    value: rgb.r,
    onChange: handleChange,
    dragLabel: "true",
    dragMax: "255"
  })), React__default.createElement("div", { style: styles.single }, React__default.createElement(EditableInput, {
    style: { input: styles.input, label: styles.label },
    label: "g",
    value: rgb.g,
    onChange: handleChange,
    dragLabel: "true",
    dragMax: "255"
  })), React__default.createElement("div", { style: styles.single }, React__default.createElement(EditableInput, {
    style: { input: styles.input, label: styles.label },
    label: "b",
    value: rgb.b,
    onChange: handleChange,
    dragLabel: "true",
    dragMax: "255"
  })), React__default.createElement("div", { style: styles.alpha }, React__default.createElement(EditableInput, {
    style: { input: styles.input, label: styles.label },
    label: "a",
    value: Math.round(rgb.a * 100),
    onChange: handleChange,
    dragLabel: "true",
    dragMax: "100"
  })));
};
var _extends$8 = Object.assign || function(target) {
  for (var i = 1; i < arguments.length; i++) {
    var source = arguments[i];
    for (var key in source) {
      if (Object.prototype.hasOwnProperty.call(source, key)) {
        target[key] = source[key];
      }
    }
  }
  return target;
};
var SketchPresetColors = function SketchPresetColors2(_ref) {
  var colors = _ref.colors, _ref$onClick = _ref.onClick, onClick = _ref$onClick === void 0 ? function() {
  } : _ref$onClick, onSwatchHover = _ref.onSwatchHover;
  var styles = _default$2({
    "default": {
      colors: {
        margin: "0 -10px",
        padding: "10px 0 0 10px",
        borderTop: "1px solid #eee",
        display: "flex",
        flexWrap: "wrap",
        position: "relative"
      },
      swatchWrap: {
        width: "16px",
        height: "16px",
        margin: "0 10px 10px 0"
      },
      swatch: {
        borderRadius: "3px",
        boxShadow: "inset 0 0 0 1px rgba(0,0,0,.15)"
      }
    },
    "no-presets": {
      colors: {
        display: "none"
      }
    }
  }, {
    "no-presets": !colors || !colors.length
  });
  var handleClick = function handleClick2(hex, e) {
    onClick({
      hex,
      source: "hex"
    }, e);
  };
  return React__default.createElement("div", { style: styles.colors, className: "flexbox-fix" }, colors.map(function(colorObjOrString) {
    var c = typeof colorObjOrString === "string" ? { color: colorObjOrString } : colorObjOrString;
    var key = "" + c.color + (c.title || "");
    return React__default.createElement("div", { key, style: styles.swatchWrap }, React__default.createElement(Swatch$1, _extends$8({}, c, {
      style: styles.swatch,
      onClick: handleClick,
      onHover: onSwatchHover,
      focusStyle: {
        boxShadow: "inset 0 0 0 1px rgba(0,0,0,.15), 0 0 4px " + c.color
      }
    })));
  }));
};
SketchPresetColors.propTypes = {
  colors: PropTypes.arrayOf(PropTypes.oneOfType([PropTypes.string, PropTypes.shape({
    color: PropTypes.string,
    title: PropTypes.string
  })])).isRequired
};
var _extends$7 = Object.assign || function(target) {
  for (var i = 1; i < arguments.length; i++) {
    var source = arguments[i];
    for (var key in source) {
      if (Object.prototype.hasOwnProperty.call(source, key)) {
        target[key] = source[key];
      }
    }
  }
  return target;
};
var Sketch = function Sketch2(_ref) {
  var width = _ref.width, rgb = _ref.rgb, hex = _ref.hex, hsv = _ref.hsv, hsl = _ref.hsl, onChange = _ref.onChange, onSwatchHover = _ref.onSwatchHover, disableAlpha = _ref.disableAlpha, presetColors = _ref.presetColors, renderers = _ref.renderers, _ref$styles = _ref.styles, passedStyles = _ref$styles === void 0 ? {} : _ref$styles, _ref$className = _ref.className, className = _ref$className === void 0 ? "" : _ref$className;
  var styles = _default$2(merge$1({
    "default": _extends$7({
      picker: {
        width,
        padding: "10px 10px 0",
        boxSizing: "initial",
        background: "#fff",
        borderRadius: "4px",
        boxShadow: "0 0 0 1px rgba(0,0,0,.15), 0 8px 16px rgba(0,0,0,.15)"
      },
      saturation: {
        width: "100%",
        paddingBottom: "75%",
        position: "relative",
        overflow: "hidden"
      },
      Saturation: {
        radius: "3px",
        shadow: "inset 0 0 0 1px rgba(0,0,0,.15), inset 0 0 4px rgba(0,0,0,.25)"
      },
      controls: {
        display: "flex"
      },
      sliders: {
        padding: "4px 0",
        flex: "1"
      },
      color: {
        width: "24px",
        height: "24px",
        position: "relative",
        marginTop: "4px",
        marginLeft: "4px",
        borderRadius: "3px"
      },
      activeColor: {
        absolute: "0px 0px 0px 0px",
        borderRadius: "2px",
        background: "rgba(" + rgb.r + "," + rgb.g + "," + rgb.b + "," + rgb.a + ")",
        boxShadow: "inset 0 0 0 1px rgba(0,0,0,.15), inset 0 0 4px rgba(0,0,0,.25)"
      },
      hue: {
        position: "relative",
        height: "10px",
        overflow: "hidden"
      },
      Hue: {
        radius: "2px",
        shadow: "inset 0 0 0 1px rgba(0,0,0,.15), inset 0 0 4px rgba(0,0,0,.25)"
      },
      alpha: {
        position: "relative",
        height: "10px",
        marginTop: "4px",
        overflow: "hidden"
      },
      Alpha: {
        radius: "2px",
        shadow: "inset 0 0 0 1px rgba(0,0,0,.15), inset 0 0 4px rgba(0,0,0,.25)"
      }
    }, passedStyles),
    "disableAlpha": {
      color: {
        height: "10px"
      },
      hue: {
        height: "10px"
      },
      alpha: {
        display: "none"
      }
    }
  }, passedStyles), { disableAlpha });
  return React__default.createElement("div", { style: styles.picker, className: "sketch-picker " + className }, React__default.createElement("div", { style: styles.saturation }, React__default.createElement(Saturation, {
    style: styles.Saturation,
    hsl,
    hsv,
    onChange
  })), React__default.createElement("div", { style: styles.controls, className: "flexbox-fix" }, React__default.createElement("div", { style: styles.sliders }, React__default.createElement("div", { style: styles.hue }, React__default.createElement(Hue, {
    style: styles.Hue,
    hsl,
    onChange
  })), React__default.createElement("div", { style: styles.alpha }, React__default.createElement(Alpha, {
    style: styles.Alpha,
    rgb,
    hsl,
    renderers,
    onChange
  }))), React__default.createElement("div", { style: styles.color }, React__default.createElement(Checkboard, null), React__default.createElement("div", { style: styles.activeColor }))), React__default.createElement(SketchFields, {
    rgb,
    hsl,
    hex,
    onChange,
    disableAlpha
  }), React__default.createElement(SketchPresetColors, {
    colors: presetColors,
    onClick: onChange,
    onSwatchHover
  }));
};
Sketch.propTypes = {
  disableAlpha: PropTypes.bool,
  width: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  styles: PropTypes.object
};
Sketch.defaultProps = {
  disableAlpha: false,
  width: 200,
  styles: {},
  presetColors: ["#D0021B", "#F5A623", "#F8E71C", "#8B572A", "#7ED321", "#417505", "#BD10E0", "#9013FE", "#4A90E2", "#50E3C2", "#B8E986", "#000000", "#4A4A4A", "#9B9B9B", "#FFFFFF"]
};
ColorWrap(Sketch);
var SliderSwatch = function SliderSwatch2(_ref) {
  var hsl = _ref.hsl, offset = _ref.offset, _ref$onClick = _ref.onClick, onClick = _ref$onClick === void 0 ? function() {
  } : _ref$onClick, active3 = _ref.active, first = _ref.first, last = _ref.last;
  var styles = _default$2({
    "default": {
      swatch: {
        height: "12px",
        background: "hsl(" + hsl.h + ", 50%, " + offset * 100 + "%)",
        cursor: "pointer"
      }
    },
    "first": {
      swatch: {
        borderRadius: "2px 0 0 2px"
      }
    },
    "last": {
      swatch: {
        borderRadius: "0 2px 2px 0"
      }
    },
    "active": {
      swatch: {
        transform: "scaleY(1.8)",
        borderRadius: "3.6px/2px"
      }
    }
  }, { active: active3, first, last });
  var handleClick = function handleClick2(e) {
    return onClick({
      h: hsl.h,
      s: 0.5,
      l: offset,
      source: "hsl"
    }, e);
  };
  return React__default.createElement("div", { style: styles.swatch, onClick: handleClick });
};
var SliderSwatches = function SliderSwatches2(_ref) {
  var onClick = _ref.onClick, hsl = _ref.hsl;
  var styles = _default$2({
    "default": {
      swatches: {
        marginTop: "20px"
      },
      swatch: {
        boxSizing: "border-box",
        width: "20%",
        paddingRight: "1px",
        float: "left"
      },
      clear: {
        clear: "both"
      }
    }
  });
  var epsilon = 0.1;
  return React__default.createElement("div", { style: styles.swatches }, React__default.createElement("div", { style: styles.swatch }, React__default.createElement(SliderSwatch, {
    hsl,
    offset: ".80",
    active: Math.abs(hsl.l - 0.8) < epsilon && Math.abs(hsl.s - 0.5) < epsilon,
    onClick,
    first: true
  })), React__default.createElement("div", { style: styles.swatch }, React__default.createElement(SliderSwatch, {
    hsl,
    offset: ".65",
    active: Math.abs(hsl.l - 0.65) < epsilon && Math.abs(hsl.s - 0.5) < epsilon,
    onClick
  })), React__default.createElement("div", { style: styles.swatch }, React__default.createElement(SliderSwatch, {
    hsl,
    offset: ".50",
    active: Math.abs(hsl.l - 0.5) < epsilon && Math.abs(hsl.s - 0.5) < epsilon,
    onClick
  })), React__default.createElement("div", { style: styles.swatch }, React__default.createElement(SliderSwatch, {
    hsl,
    offset: ".35",
    active: Math.abs(hsl.l - 0.35) < epsilon && Math.abs(hsl.s - 0.5) < epsilon,
    onClick
  })), React__default.createElement("div", { style: styles.swatch }, React__default.createElement(SliderSwatch, {
    hsl,
    offset: ".20",
    active: Math.abs(hsl.l - 0.2) < epsilon && Math.abs(hsl.s - 0.5) < epsilon,
    onClick,
    last: true
  })), React__default.createElement("div", { style: styles.clear }));
};
var SliderPointer2 = function SliderPointer3() {
  var styles = _default$2({
    "default": {
      picker: {
        width: "14px",
        height: "14px",
        borderRadius: "6px",
        transform: "translate(-7px, -1px)",
        backgroundColor: "rgb(248, 248, 248)",
        boxShadow: "0 1px 4px 0 rgba(0, 0, 0, 0.37)"
      }
    }
  });
  return React__default.createElement("div", { style: styles.picker });
};
var Slider = function Slider2(_ref) {
  var hsl = _ref.hsl, onChange = _ref.onChange, pointer = _ref.pointer, _ref$styles = _ref.styles, passedStyles = _ref$styles === void 0 ? {} : _ref$styles, _ref$className = _ref.className, className = _ref$className === void 0 ? "" : _ref$className;
  var styles = _default$2(merge$1({
    "default": {
      hue: {
        height: "12px",
        position: "relative"
      },
      Hue: {
        radius: "2px"
      }
    }
  }, passedStyles));
  return React__default.createElement("div", { style: styles.wrap || {}, className: "slider-picker " + className }, React__default.createElement("div", { style: styles.hue }, React__default.createElement(Hue, {
    style: styles.Hue,
    hsl,
    pointer,
    onChange
  })), React__default.createElement("div", { style: styles.swatches }, React__default.createElement(SliderSwatches, { hsl, onClick: onChange })));
};
Slider.propTypes = {
  styles: PropTypes.object
};
Slider.defaultProps = {
  pointer: SliderPointer2,
  styles: {}
};
ColorWrap(Slider);
var CheckIcon = {};
Object.defineProperty(CheckIcon, "__esModule", {
  value: true
});
var _extends$6 = Object.assign || function(target) {
  for (var i = 1; i < arguments.length; i++) {
    var source = arguments[i];
    for (var key in source) {
      if (Object.prototype.hasOwnProperty.call(source, key)) {
        target[key] = source[key];
      }
    }
  }
  return target;
};
var _react = React__default;
var _react2 = _interopRequireDefault(_react);
function _interopRequireDefault(obj) {
  return obj && obj.__esModule ? obj : { default: obj };
}
function _objectWithoutProperties(obj, keys2) {
  var target = {};
  for (var i in obj) {
    if (keys2.indexOf(i) >= 0)
      continue;
    if (!Object.prototype.hasOwnProperty.call(obj, i))
      continue;
    target[i] = obj[i];
  }
  return target;
}
var DEFAULT_SIZE = 24;
var _default = CheckIcon.default = function(_ref) {
  var _ref$fill = _ref.fill, fill = _ref$fill === void 0 ? "currentColor" : _ref$fill, _ref$width = _ref.width, width = _ref$width === void 0 ? DEFAULT_SIZE : _ref$width, _ref$height = _ref.height, height = _ref$height === void 0 ? DEFAULT_SIZE : _ref$height, _ref$style = _ref.style, style = _ref$style === void 0 ? {} : _ref$style, props = _objectWithoutProperties(_ref, ["fill", "width", "height", "style"]);
  return _react2.default.createElement("svg", _extends$6({
    viewBox: "0 0 " + DEFAULT_SIZE + " " + DEFAULT_SIZE,
    style: _extends$6({ fill, width, height }, style)
  }, props), _react2.default.createElement("path", { d: "M21,7L9,19L3.5,13.5L4.91,12.09L9,16.17L19.59,5.59L21,7Z" }));
};
var SwatchesColor = function SwatchesColor2(_ref) {
  var color = _ref.color, _ref$onClick = _ref.onClick, onClick = _ref$onClick === void 0 ? function() {
  } : _ref$onClick, onSwatchHover = _ref.onSwatchHover, first = _ref.first, last = _ref.last, active3 = _ref.active;
  var styles = _default$2({
    "default": {
      color: {
        width: "40px",
        height: "24px",
        cursor: "pointer",
        background: color,
        marginBottom: "1px"
      },
      check: {
        color: getContrastingColor(color),
        marginLeft: "8px",
        display: "none"
      }
    },
    "first": {
      color: {
        overflow: "hidden",
        borderRadius: "2px 2px 0 0"
      }
    },
    "last": {
      color: {
        overflow: "hidden",
        borderRadius: "0 0 2px 2px"
      }
    },
    "active": {
      check: {
        display: "block"
      }
    },
    "color-#FFFFFF": {
      color: {
        boxShadow: "inset 0 0 0 1px #ddd"
      },
      check: {
        color: "#333"
      }
    },
    "transparent": {
      check: {
        color: "#333"
      }
    }
  }, {
    first,
    last,
    active: active3,
    "color-#FFFFFF": color === "#FFFFFF",
    "transparent": color === "transparent"
  });
  return React__default.createElement(Swatch$1, {
    color,
    style: styles.color,
    onClick,
    onHover: onSwatchHover,
    focusStyle: { boxShadow: "0 0 4px " + color }
  }, React__default.createElement("div", { style: styles.check }, React__default.createElement(_default, null)));
};
var SwatchesGroup = function SwatchesGroup2(_ref) {
  var onClick = _ref.onClick, onSwatchHover = _ref.onSwatchHover, group = _ref.group, active3 = _ref.active;
  var styles = _default$2({
    "default": {
      group: {
        paddingBottom: "10px",
        width: "40px",
        float: "left",
        marginRight: "10px"
      }
    }
  });
  return React__default.createElement("div", { style: styles.group }, map(group, function(color, i) {
    return React__default.createElement(SwatchesColor, {
      key: color,
      color,
      active: color.toLowerCase() === active3,
      first: i === 0,
      last: i === group.length - 1,
      onClick,
      onSwatchHover
    });
  }));
};
var Swatches = function Swatches2(_ref) {
  var width = _ref.width, height = _ref.height, onChange = _ref.onChange, onSwatchHover = _ref.onSwatchHover, colors = _ref.colors, hex = _ref.hex, _ref$styles = _ref.styles, passedStyles = _ref$styles === void 0 ? {} : _ref$styles, _ref$className = _ref.className, className = _ref$className === void 0 ? "" : _ref$className;
  var styles = _default$2(merge$1({
    "default": {
      picker: {
        width,
        height
      },
      overflow: {
        height,
        overflowY: "scroll"
      },
      body: {
        padding: "16px 0 6px 16px"
      },
      clear: {
        clear: "both"
      }
    }
  }, passedStyles));
  var handleChange = function handleChange2(data, e) {
    return onChange({ hex: data, source: "hex" }, e);
  };
  return React__default.createElement("div", { style: styles.picker, className: "swatches-picker " + className }, React__default.createElement(Raised, null, React__default.createElement("div", { style: styles.overflow }, React__default.createElement("div", { style: styles.body }, map(colors, function(group) {
    return React__default.createElement(SwatchesGroup, {
      key: group.toString(),
      group,
      active: hex,
      onClick: handleChange,
      onSwatchHover
    });
  }), React__default.createElement("div", { style: styles.clear })))));
};
Swatches.propTypes = {
  width: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  height: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  colors: PropTypes.arrayOf(PropTypes.arrayOf(PropTypes.string)),
  styles: PropTypes.object
};
Swatches.defaultProps = {
  width: 320,
  height: 240,
  colors: [[red["900"], red["700"], red["500"], red["300"], red["100"]], [pink["900"], pink["700"], pink["500"], pink["300"], pink["100"]], [purple["900"], purple["700"], purple["500"], purple["300"], purple["100"]], [deepPurple["900"], deepPurple["700"], deepPurple["500"], deepPurple["300"], deepPurple["100"]], [indigo["900"], indigo["700"], indigo["500"], indigo["300"], indigo["100"]], [blue["900"], blue["700"], blue["500"], blue["300"], blue["100"]], [lightBlue["900"], lightBlue["700"], lightBlue["500"], lightBlue["300"], lightBlue["100"]], [cyan["900"], cyan["700"], cyan["500"], cyan["300"], cyan["100"]], [teal["900"], teal["700"], teal["500"], teal["300"], teal["100"]], ["#194D33", green["700"], green["500"], green["300"], green["100"]], [lightGreen["900"], lightGreen["700"], lightGreen["500"], lightGreen["300"], lightGreen["100"]], [lime["900"], lime["700"], lime["500"], lime["300"], lime["100"]], [yellow["900"], yellow["700"], yellow["500"], yellow["300"], yellow["100"]], [amber["900"], amber["700"], amber["500"], amber["300"], amber["100"]], [orange["900"], orange["700"], orange["500"], orange["300"], orange["100"]], [deepOrange["900"], deepOrange["700"], deepOrange["500"], deepOrange["300"], deepOrange["100"]], [brown["900"], brown["700"], brown["500"], brown["300"], brown["100"]], [blueGrey["900"], blueGrey["700"], blueGrey["500"], blueGrey["300"], blueGrey["100"]], ["#000000", "#525252", "#969696", "#D9D9D9", "#FFFFFF"]],
  styles: {}
};
ColorWrap(Swatches);
var Twitter = function Twitter2(_ref) {
  var onChange = _ref.onChange, onSwatchHover = _ref.onSwatchHover, hex = _ref.hex, colors = _ref.colors, width = _ref.width, triangle = _ref.triangle, _ref$styles = _ref.styles, passedStyles = _ref$styles === void 0 ? {} : _ref$styles, _ref$className = _ref.className, className = _ref$className === void 0 ? "" : _ref$className;
  var styles = _default$2(merge$1({
    "default": {
      card: {
        width,
        background: "#fff",
        border: "0 solid rgba(0,0,0,0.25)",
        boxShadow: "0 1px 4px rgba(0,0,0,0.25)",
        borderRadius: "4px",
        position: "relative"
      },
      body: {
        padding: "15px 9px 9px 15px"
      },
      label: {
        fontSize: "18px",
        color: "#fff"
      },
      triangle: {
        width: "0px",
        height: "0px",
        borderStyle: "solid",
        borderWidth: "0 9px 10px 9px",
        borderColor: "transparent transparent #fff transparent",
        position: "absolute"
      },
      triangleShadow: {
        width: "0px",
        height: "0px",
        borderStyle: "solid",
        borderWidth: "0 9px 10px 9px",
        borderColor: "transparent transparent rgba(0,0,0,.1) transparent",
        position: "absolute"
      },
      hash: {
        background: "#F0F0F0",
        height: "30px",
        width: "30px",
        borderRadius: "4px 0 0 4px",
        float: "left",
        color: "#98A1A4",
        display: "flex",
        alignItems: "center",
        justifyContent: "center"
      },
      input: {
        width: "100px",
        fontSize: "14px",
        color: "#666",
        border: "0px",
        outline: "none",
        height: "28px",
        boxShadow: "inset 0 0 0 1px #F0F0F0",
        boxSizing: "content-box",
        borderRadius: "0 4px 4px 0",
        float: "left",
        paddingLeft: "8px"
      },
      swatch: {
        width: "30px",
        height: "30px",
        float: "left",
        borderRadius: "4px",
        margin: "0 6px 6px 0"
      },
      clear: {
        clear: "both"
      }
    },
    "hide-triangle": {
      triangle: {
        display: "none"
      },
      triangleShadow: {
        display: "none"
      }
    },
    "top-left-triangle": {
      triangle: {
        top: "-10px",
        left: "12px"
      },
      triangleShadow: {
        top: "-11px",
        left: "12px"
      }
    },
    "top-right-triangle": {
      triangle: {
        top: "-10px",
        right: "12px"
      },
      triangleShadow: {
        top: "-11px",
        right: "12px"
      }
    }
  }, passedStyles), {
    "hide-triangle": triangle === "hide",
    "top-left-triangle": triangle === "top-left",
    "top-right-triangle": triangle === "top-right"
  });
  var handleChange = function handleChange2(hexcode, e) {
    isValidHex(hexcode) && onChange({
      hex: hexcode,
      source: "hex"
    }, e);
  };
  return React__default.createElement("div", { style: styles.card, className: "twitter-picker " + className }, React__default.createElement("div", { style: styles.triangleShadow }), React__default.createElement("div", { style: styles.triangle }), React__default.createElement("div", { style: styles.body }, map(colors, function(c, i) {
    return React__default.createElement(Swatch$1, {
      key: i,
      color: c,
      hex: c,
      style: styles.swatch,
      onClick: handleChange,
      onHover: onSwatchHover,
      focusStyle: {
        boxShadow: "0 0 4px " + c
      }
    });
  }), React__default.createElement("div", { style: styles.hash }, "#"), React__default.createElement(EditableInput, {
    label: null,
    style: { input: styles.input },
    value: hex.replace("#", ""),
    onChange: handleChange
  }), React__default.createElement("div", { style: styles.clear })));
};
Twitter.propTypes = {
  width: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  triangle: PropTypes.oneOf(["hide", "top-left", "top-right"]),
  colors: PropTypes.arrayOf(PropTypes.string),
  styles: PropTypes.object
};
Twitter.defaultProps = {
  width: 276,
  colors: ["#FF6900", "#FCB900", "#7BDCB5", "#00D084", "#8ED1FC", "#0693E3", "#ABB8C3", "#EB144C", "#F78DA7", "#9900EF"],
  triangle: "top-left",
  styles: {}
};
ColorWrap(Twitter);
var GooglePointerCircle = function GooglePointerCircle2(props) {
  var styles = _default$2({
    "default": {
      picker: {
        width: "20px",
        height: "20px",
        borderRadius: "22px",
        border: "2px #fff solid",
        transform: "translate(-12px, -13px)",
        background: "hsl(" + Math.round(props.hsl.h) + ", " + Math.round(props.hsl.s * 100) + "%, " + Math.round(props.hsl.l * 100) + "%)"
      }
    }
  });
  return React__default.createElement("div", { style: styles.picker });
};
GooglePointerCircle.propTypes = {
  hsl: PropTypes.shape({
    h: PropTypes.number,
    s: PropTypes.number,
    l: PropTypes.number,
    a: PropTypes.number
  })
};
GooglePointerCircle.defaultProps = {
  hsl: { a: 1, h: 249.94, l: 0.2, s: 0.5 }
};
var GooglePointer = function GooglePointer2(props) {
  var styles = _default$2({
    "default": {
      picker: {
        width: "20px",
        height: "20px",
        borderRadius: "22px",
        transform: "translate(-10px, -7px)",
        background: "hsl(" + Math.round(props.hsl.h) + ", 100%, 50%)",
        border: "2px white solid"
      }
    }
  });
  return React__default.createElement("div", { style: styles.picker });
};
GooglePointer.propTypes = {
  hsl: PropTypes.shape({
    h: PropTypes.number,
    s: PropTypes.number,
    l: PropTypes.number,
    a: PropTypes.number
  })
};
GooglePointer.defaultProps = {
  hsl: { a: 1, h: 249.94, l: 0.2, s: 0.5 }
};
var GoogleFields = function GoogleFields2(_ref) {
  var onChange = _ref.onChange, rgb = _ref.rgb, hsl = _ref.hsl, hex = _ref.hex, hsv = _ref.hsv;
  var handleChange = function handleChange2(data, e) {
    if (data.hex) {
      isValidHex(data.hex) && onChange({
        hex: data.hex,
        source: "hex"
      }, e);
    } else if (data.rgb) {
      var values = data.rgb.split(",");
      isvalidColorString(data.rgb, "rgb") && onChange({
        r: values[0],
        g: values[1],
        b: values[2],
        a: 1,
        source: "rgb"
      }, e);
    } else if (data.hsv) {
      var _values = data.hsv.split(",");
      if (isvalidColorString(data.hsv, "hsv")) {
        _values[2] = _values[2].replace("%", "");
        _values[1] = _values[1].replace("%", "");
        _values[0] = _values[0].replace("\xB0", "");
        if (_values[1] == 1) {
          _values[1] = 0.01;
        } else if (_values[2] == 1) {
          _values[2] = 0.01;
        }
        onChange({
          h: Number(_values[0]),
          s: Number(_values[1]),
          v: Number(_values[2]),
          source: "hsv"
        }, e);
      }
    } else if (data.hsl) {
      var _values2 = data.hsl.split(",");
      if (isvalidColorString(data.hsl, "hsl")) {
        _values2[2] = _values2[2].replace("%", "");
        _values2[1] = _values2[1].replace("%", "");
        _values2[0] = _values2[0].replace("\xB0", "");
        if (hsvValue[1] == 1) {
          hsvValue[1] = 0.01;
        } else if (hsvValue[2] == 1) {
          hsvValue[2] = 0.01;
        }
        onChange({
          h: Number(_values2[0]),
          s: Number(_values2[1]),
          v: Number(_values2[2]),
          source: "hsl"
        }, e);
      }
    }
  };
  var styles = _default$2({
    "default": {
      wrap: {
        display: "flex",
        height: "100px",
        marginTop: "4px"
      },
      fields: {
        width: "100%"
      },
      column: {
        paddingTop: "10px",
        display: "flex",
        justifyContent: "space-between"
      },
      double: {
        padding: "0px 4.4px",
        boxSizing: "border-box"
      },
      input: {
        width: "100%",
        height: "38px",
        boxSizing: "border-box",
        padding: "4px 10% 3px",
        textAlign: "center",
        border: "1px solid #dadce0",
        fontSize: "11px",
        textTransform: "lowercase",
        borderRadius: "5px",
        outline: "none",
        fontFamily: "Roboto,Arial,sans-serif"
      },
      input2: {
        height: "38px",
        width: "100%",
        border: "1px solid #dadce0",
        boxSizing: "border-box",
        fontSize: "11px",
        textTransform: "lowercase",
        borderRadius: "5px",
        outline: "none",
        paddingLeft: "10px",
        fontFamily: "Roboto,Arial,sans-serif"
      },
      label: {
        textAlign: "center",
        fontSize: "12px",
        background: "#fff",
        position: "absolute",
        textTransform: "uppercase",
        color: "#3c4043",
        width: "35px",
        top: "-6px",
        left: "0",
        right: "0",
        marginLeft: "auto",
        marginRight: "auto",
        fontFamily: "Roboto,Arial,sans-serif"
      },
      label2: {
        left: "10px",
        textAlign: "center",
        fontSize: "12px",
        background: "#fff",
        position: "absolute",
        textTransform: "uppercase",
        color: "#3c4043",
        width: "32px",
        top: "-6px",
        fontFamily: "Roboto,Arial,sans-serif"
      },
      single: {
        flexGrow: "1",
        margin: "0px 4.4px"
      }
    }
  });
  var rgbValue = rgb.r + ", " + rgb.g + ", " + rgb.b;
  var hslValue = Math.round(hsl.h) + "\xB0, " + Math.round(hsl.s * 100) + "%, " + Math.round(hsl.l * 100) + "%";
  var hsvValue = Math.round(hsv.h) + "\xB0, " + Math.round(hsv.s * 100) + "%, " + Math.round(hsv.v * 100) + "%";
  return React__default.createElement("div", { style: styles.wrap, className: "flexbox-fix" }, React__default.createElement("div", { style: styles.fields }, React__default.createElement("div", { style: styles.double }, React__default.createElement(EditableInput, {
    style: { input: styles.input, label: styles.label },
    label: "hex",
    value: hex,
    onChange: handleChange
  })), React__default.createElement("div", { style: styles.column }, React__default.createElement("div", { style: styles.single }, React__default.createElement(EditableInput, {
    style: { input: styles.input2, label: styles.label2 },
    label: "rgb",
    value: rgbValue,
    onChange: handleChange
  })), React__default.createElement("div", { style: styles.single }, React__default.createElement(EditableInput, {
    style: { input: styles.input2, label: styles.label2 },
    label: "hsv",
    value: hsvValue,
    onChange: handleChange
  })), React__default.createElement("div", { style: styles.single }, React__default.createElement(EditableInput, {
    style: { input: styles.input2, label: styles.label2 },
    label: "hsl",
    value: hslValue,
    onChange: handleChange
  })))));
};
var Google = function Google2(_ref) {
  var width = _ref.width, onChange = _ref.onChange, rgb = _ref.rgb, hsl = _ref.hsl, hsv = _ref.hsv, hex = _ref.hex, header = _ref.header, _ref$styles = _ref.styles, passedStyles = _ref$styles === void 0 ? {} : _ref$styles, _ref$className = _ref.className, className = _ref$className === void 0 ? "" : _ref$className;
  var styles = _default$2(merge$1({
    "default": {
      picker: {
        width,
        background: "#fff",
        border: "1px solid #dfe1e5",
        boxSizing: "initial",
        display: "flex",
        flexWrap: "wrap",
        borderRadius: "8px 8px 0px 0px"
      },
      head: {
        height: "57px",
        width: "100%",
        paddingTop: "16px",
        paddingBottom: "16px",
        paddingLeft: "16px",
        fontSize: "20px",
        boxSizing: "border-box",
        fontFamily: "Roboto-Regular,HelveticaNeue,Arial,sans-serif"
      },
      saturation: {
        width: "70%",
        padding: "0px",
        position: "relative",
        overflow: "hidden"
      },
      swatch: {
        width: "30%",
        height: "228px",
        padding: "0px",
        background: "rgba(" + rgb.r + ", " + rgb.g + ", " + rgb.b + ", 1)",
        position: "relative",
        overflow: "hidden"
      },
      body: {
        margin: "auto",
        width: "95%"
      },
      controls: {
        display: "flex",
        boxSizing: "border-box",
        height: "52px",
        paddingTop: "22px"
      },
      color: {
        width: "32px"
      },
      hue: {
        height: "8px",
        position: "relative",
        margin: "0px 16px 0px 16px",
        width: "100%"
      },
      Hue: {
        radius: "2px"
      }
    }
  }, passedStyles));
  return React__default.createElement("div", { style: styles.picker, className: "google-picker " + className }, React__default.createElement("div", { style: styles.head }, header), React__default.createElement("div", { style: styles.swatch }), React__default.createElement("div", { style: styles.saturation }, React__default.createElement(Saturation, {
    hsl,
    hsv,
    pointer: GooglePointerCircle,
    onChange
  })), React__default.createElement("div", { style: styles.body }, React__default.createElement("div", { style: styles.controls, className: "flexbox-fix" }, React__default.createElement("div", { style: styles.hue }, React__default.createElement(Hue, {
    style: styles.Hue,
    hsl,
    radius: "4px",
    pointer: GooglePointer,
    onChange
  }))), React__default.createElement(GoogleFields, {
    rgb,
    hsl,
    hex,
    hsv,
    onChange
  })));
};
Google.propTypes = {
  width: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  styles: PropTypes.object,
  header: PropTypes.string
};
Google.defaultProps = {
  width: 652,
  styles: {},
  header: "Color picker"
};
ColorWrap(Google);
var immutable = { exports: {} };
(function(module2, exports2) {
  (function(global2, factory) {
    module2.exports = factory();
  })(commonjsGlobal, function() {
    var SLICE$0 = Array.prototype.slice;
    function createClass(ctor, superClass) {
      if (superClass) {
        ctor.prototype = Object.create(superClass.prototype);
      }
      ctor.prototype.constructor = ctor;
    }
    function Iterable(value) {
      return isIterable(value) ? value : Seq(value);
    }
    createClass(KeyedIterable, Iterable);
    function KeyedIterable(value) {
      return isKeyed(value) ? value : KeyedSeq(value);
    }
    createClass(IndexedIterable, Iterable);
    function IndexedIterable(value) {
      return isIndexed(value) ? value : IndexedSeq(value);
    }
    createClass(SetIterable, Iterable);
    function SetIterable(value) {
      return isIterable(value) && !isAssociative(value) ? value : SetSeq(value);
    }
    function isIterable(maybeIterable) {
      return !!(maybeIterable && maybeIterable[IS_ITERABLE_SENTINEL]);
    }
    function isKeyed(maybeKeyed) {
      return !!(maybeKeyed && maybeKeyed[IS_KEYED_SENTINEL]);
    }
    function isIndexed(maybeIndexed) {
      return !!(maybeIndexed && maybeIndexed[IS_INDEXED_SENTINEL]);
    }
    function isAssociative(maybeAssociative) {
      return isKeyed(maybeAssociative) || isIndexed(maybeAssociative);
    }
    function isOrdered(maybeOrdered) {
      return !!(maybeOrdered && maybeOrdered[IS_ORDERED_SENTINEL]);
    }
    Iterable.isIterable = isIterable;
    Iterable.isKeyed = isKeyed;
    Iterable.isIndexed = isIndexed;
    Iterable.isAssociative = isAssociative;
    Iterable.isOrdered = isOrdered;
    Iterable.Keyed = KeyedIterable;
    Iterable.Indexed = IndexedIterable;
    Iterable.Set = SetIterable;
    var IS_ITERABLE_SENTINEL = "@@__IMMUTABLE_ITERABLE__@@";
    var IS_KEYED_SENTINEL = "@@__IMMUTABLE_KEYED__@@";
    var IS_INDEXED_SENTINEL = "@@__IMMUTABLE_INDEXED__@@";
    var IS_ORDERED_SENTINEL = "@@__IMMUTABLE_ORDERED__@@";
    var DELETE = "delete";
    var SHIFT = 5;
    var SIZE = 1 << SHIFT;
    var MASK = SIZE - 1;
    var NOT_SET = {};
    var CHANGE_LENGTH = { value: false };
    var DID_ALTER = { value: false };
    function MakeRef(ref) {
      ref.value = false;
      return ref;
    }
    function SetRef(ref) {
      ref && (ref.value = true);
    }
    function OwnerID() {
    }
    function arrCopy(arr, offset) {
      offset = offset || 0;
      var len = Math.max(0, arr.length - offset);
      var newArr = new Array(len);
      for (var ii2 = 0; ii2 < len; ii2++) {
        newArr[ii2] = arr[ii2 + offset];
      }
      return newArr;
    }
    function ensureSize(iter) {
      if (iter.size === void 0) {
        iter.size = iter.__iterate(returnTrue3);
      }
      return iter.size;
    }
    function wrapIndex(iter, index) {
      if (typeof index !== "number") {
        var uint32Index = index >>> 0;
        if ("" + uint32Index !== index || uint32Index === 4294967295) {
          return NaN;
        }
        index = uint32Index;
      }
      return index < 0 ? ensureSize(iter) + index : index;
    }
    function returnTrue3() {
      return true;
    }
    function wholeSlice(begin, end, size) {
      return (begin === 0 || size !== void 0 && begin <= -size) && (end === void 0 || size !== void 0 && end >= size);
    }
    function resolveBegin(begin, size) {
      return resolveIndex(begin, size, 0);
    }
    function resolveEnd(end, size) {
      return resolveIndex(end, size, size);
    }
    function resolveIndex(index, size, defaultIndex) {
      return index === void 0 ? defaultIndex : index < 0 ? Math.max(0, size + index) : size === void 0 ? index : Math.min(size, index);
    }
    var ITERATE_KEYS = 0;
    var ITERATE_VALUES = 1;
    var ITERATE_ENTRIES = 2;
    var REAL_ITERATOR_SYMBOL = typeof Symbol === "function" && Symbol.iterator;
    var FAUX_ITERATOR_SYMBOL = "@@iterator";
    var ITERATOR_SYMBOL = REAL_ITERATOR_SYMBOL || FAUX_ITERATOR_SYMBOL;
    function Iterator(next) {
      this.next = next;
    }
    Iterator.prototype.toString = function() {
      return "[Iterator]";
    };
    Iterator.KEYS = ITERATE_KEYS;
    Iterator.VALUES = ITERATE_VALUES;
    Iterator.ENTRIES = ITERATE_ENTRIES;
    Iterator.prototype.inspect = Iterator.prototype.toSource = function() {
      return this.toString();
    };
    Iterator.prototype[ITERATOR_SYMBOL] = function() {
      return this;
    };
    function iteratorValue(type, k, v, iteratorResult) {
      var value = type === 0 ? k : type === 1 ? v : [k, v];
      iteratorResult ? iteratorResult.value = value : iteratorResult = {
        value,
        done: false
      };
      return iteratorResult;
    }
    function iteratorDone() {
      return { value: void 0, done: true };
    }
    function hasIterator(maybeIterable) {
      return !!getIteratorFn(maybeIterable);
    }
    function isIterator(maybeIterator) {
      return maybeIterator && typeof maybeIterator.next === "function";
    }
    function getIterator(iterable) {
      var iteratorFn = getIteratorFn(iterable);
      return iteratorFn && iteratorFn.call(iterable);
    }
    function getIteratorFn(iterable) {
      var iteratorFn = iterable && (REAL_ITERATOR_SYMBOL && iterable[REAL_ITERATOR_SYMBOL] || iterable[FAUX_ITERATOR_SYMBOL]);
      if (typeof iteratorFn === "function") {
        return iteratorFn;
      }
    }
    function isArrayLike2(value) {
      return value && typeof value.length === "number";
    }
    createClass(Seq, Iterable);
    function Seq(value) {
      return value === null || value === void 0 ? emptySequence() : isIterable(value) ? value.toSeq() : seqFromValue(value);
    }
    Seq.of = function() {
      return Seq(arguments);
    };
    Seq.prototype.toSeq = function() {
      return this;
    };
    Seq.prototype.toString = function() {
      return this.__toString("Seq {", "}");
    };
    Seq.prototype.cacheResult = function() {
      if (!this._cache && this.__iterateUncached) {
        this._cache = this.entrySeq().toArray();
        this.size = this._cache.length;
      }
      return this;
    };
    Seq.prototype.__iterate = function(fn, reverse) {
      return seqIterate(this, fn, reverse, true);
    };
    Seq.prototype.__iterator = function(type, reverse) {
      return seqIterator(this, type, reverse, true);
    };
    createClass(KeyedSeq, Seq);
    function KeyedSeq(value) {
      return value === null || value === void 0 ? emptySequence().toKeyedSeq() : isIterable(value) ? isKeyed(value) ? value.toSeq() : value.fromEntrySeq() : keyedSeqFromValue(value);
    }
    KeyedSeq.prototype.toKeyedSeq = function() {
      return this;
    };
    createClass(IndexedSeq, Seq);
    function IndexedSeq(value) {
      return value === null || value === void 0 ? emptySequence() : !isIterable(value) ? indexedSeqFromValue(value) : isKeyed(value) ? value.entrySeq() : value.toIndexedSeq();
    }
    IndexedSeq.of = function() {
      return IndexedSeq(arguments);
    };
    IndexedSeq.prototype.toIndexedSeq = function() {
      return this;
    };
    IndexedSeq.prototype.toString = function() {
      return this.__toString("Seq [", "]");
    };
    IndexedSeq.prototype.__iterate = function(fn, reverse) {
      return seqIterate(this, fn, reverse, false);
    };
    IndexedSeq.prototype.__iterator = function(type, reverse) {
      return seqIterator(this, type, reverse, false);
    };
    createClass(SetSeq, Seq);
    function SetSeq(value) {
      return (value === null || value === void 0 ? emptySequence() : !isIterable(value) ? indexedSeqFromValue(value) : isKeyed(value) ? value.entrySeq() : value).toSetSeq();
    }
    SetSeq.of = function() {
      return SetSeq(arguments);
    };
    SetSeq.prototype.toSetSeq = function() {
      return this;
    };
    Seq.isSeq = isSeq;
    Seq.Keyed = KeyedSeq;
    Seq.Set = SetSeq;
    Seq.Indexed = IndexedSeq;
    var IS_SEQ_SENTINEL = "@@__IMMUTABLE_SEQ__@@";
    Seq.prototype[IS_SEQ_SENTINEL] = true;
    createClass(ArraySeq, IndexedSeq);
    function ArraySeq(array) {
      this._array = array;
      this.size = array.length;
    }
    ArraySeq.prototype.get = function(index, notSetValue) {
      return this.has(index) ? this._array[wrapIndex(this, index)] : notSetValue;
    };
    ArraySeq.prototype.__iterate = function(fn, reverse) {
      var array = this._array;
      var maxIndex = array.length - 1;
      for (var ii2 = 0; ii2 <= maxIndex; ii2++) {
        if (fn(array[reverse ? maxIndex - ii2 : ii2], ii2, this) === false) {
          return ii2 + 1;
        }
      }
      return ii2;
    };
    ArraySeq.prototype.__iterator = function(type, reverse) {
      var array = this._array;
      var maxIndex = array.length - 1;
      var ii2 = 0;
      return new Iterator(function() {
        return ii2 > maxIndex ? iteratorDone() : iteratorValue(type, ii2, array[reverse ? maxIndex - ii2++ : ii2++]);
      });
    };
    createClass(ObjectSeq, KeyedSeq);
    function ObjectSeq(object) {
      var keys2 = Object.keys(object);
      this._object = object;
      this._keys = keys2;
      this.size = keys2.length;
    }
    ObjectSeq.prototype.get = function(key, notSetValue) {
      if (notSetValue !== void 0 && !this.has(key)) {
        return notSetValue;
      }
      return this._object[key];
    };
    ObjectSeq.prototype.has = function(key) {
      return this._object.hasOwnProperty(key);
    };
    ObjectSeq.prototype.__iterate = function(fn, reverse) {
      var object = this._object;
      var keys2 = this._keys;
      var maxIndex = keys2.length - 1;
      for (var ii2 = 0; ii2 <= maxIndex; ii2++) {
        var key = keys2[reverse ? maxIndex - ii2 : ii2];
        if (fn(object[key], key, this) === false) {
          return ii2 + 1;
        }
      }
      return ii2;
    };
    ObjectSeq.prototype.__iterator = function(type, reverse) {
      var object = this._object;
      var keys2 = this._keys;
      var maxIndex = keys2.length - 1;
      var ii2 = 0;
      return new Iterator(function() {
        var key = keys2[reverse ? maxIndex - ii2 : ii2];
        return ii2++ > maxIndex ? iteratorDone() : iteratorValue(type, key, object[key]);
      });
    };
    ObjectSeq.prototype[IS_ORDERED_SENTINEL] = true;
    createClass(IterableSeq, IndexedSeq);
    function IterableSeq(iterable) {
      this._iterable = iterable;
      this.size = iterable.length || iterable.size;
    }
    IterableSeq.prototype.__iterateUncached = function(fn, reverse) {
      if (reverse) {
        return this.cacheResult().__iterate(fn, reverse);
      }
      var iterable = this._iterable;
      var iterator = getIterator(iterable);
      var iterations = 0;
      if (isIterator(iterator)) {
        var step;
        while (!(step = iterator.next()).done) {
          if (fn(step.value, iterations++, this) === false) {
            break;
          }
        }
      }
      return iterations;
    };
    IterableSeq.prototype.__iteratorUncached = function(type, reverse) {
      if (reverse) {
        return this.cacheResult().__iterator(type, reverse);
      }
      var iterable = this._iterable;
      var iterator = getIterator(iterable);
      if (!isIterator(iterator)) {
        return new Iterator(iteratorDone);
      }
      var iterations = 0;
      return new Iterator(function() {
        var step = iterator.next();
        return step.done ? step : iteratorValue(type, iterations++, step.value);
      });
    };
    createClass(IteratorSeq, IndexedSeq);
    function IteratorSeq(iterator) {
      this._iterator = iterator;
      this._iteratorCache = [];
    }
    IteratorSeq.prototype.__iterateUncached = function(fn, reverse) {
      if (reverse) {
        return this.cacheResult().__iterate(fn, reverse);
      }
      var iterator = this._iterator;
      var cache = this._iteratorCache;
      var iterations = 0;
      while (iterations < cache.length) {
        if (fn(cache[iterations], iterations++, this) === false) {
          return iterations;
        }
      }
      var step;
      while (!(step = iterator.next()).done) {
        var val = step.value;
        cache[iterations] = val;
        if (fn(val, iterations++, this) === false) {
          break;
        }
      }
      return iterations;
    };
    IteratorSeq.prototype.__iteratorUncached = function(type, reverse) {
      if (reverse) {
        return this.cacheResult().__iterator(type, reverse);
      }
      var iterator = this._iterator;
      var cache = this._iteratorCache;
      var iterations = 0;
      return new Iterator(function() {
        if (iterations >= cache.length) {
          var step = iterator.next();
          if (step.done) {
            return step;
          }
          cache[iterations] = step.value;
        }
        return iteratorValue(type, iterations, cache[iterations++]);
      });
    };
    function isSeq(maybeSeq) {
      return !!(maybeSeq && maybeSeq[IS_SEQ_SENTINEL]);
    }
    var EMPTY_SEQ;
    function emptySequence() {
      return EMPTY_SEQ || (EMPTY_SEQ = new ArraySeq([]));
    }
    function keyedSeqFromValue(value) {
      var seq = Array.isArray(value) ? new ArraySeq(value).fromEntrySeq() : isIterator(value) ? new IteratorSeq(value).fromEntrySeq() : hasIterator(value) ? new IterableSeq(value).fromEntrySeq() : typeof value === "object" ? new ObjectSeq(value) : void 0;
      if (!seq) {
        throw new TypeError("Expected Array or iterable object of [k, v] entries, or keyed object: " + value);
      }
      return seq;
    }
    function indexedSeqFromValue(value) {
      var seq = maybeIndexedSeqFromValue(value);
      if (!seq) {
        throw new TypeError("Expected Array or iterable object of values: " + value);
      }
      return seq;
    }
    function seqFromValue(value) {
      var seq = maybeIndexedSeqFromValue(value) || typeof value === "object" && new ObjectSeq(value);
      if (!seq) {
        throw new TypeError("Expected Array or iterable object of values, or keyed object: " + value);
      }
      return seq;
    }
    function maybeIndexedSeqFromValue(value) {
      return isArrayLike2(value) ? new ArraySeq(value) : isIterator(value) ? new IteratorSeq(value) : hasIterator(value) ? new IterableSeq(value) : void 0;
    }
    function seqIterate(seq, fn, reverse, useKeys) {
      var cache = seq._cache;
      if (cache) {
        var maxIndex = cache.length - 1;
        for (var ii2 = 0; ii2 <= maxIndex; ii2++) {
          var entry = cache[reverse ? maxIndex - ii2 : ii2];
          if (fn(entry[1], useKeys ? entry[0] : ii2, seq) === false) {
            return ii2 + 1;
          }
        }
        return ii2;
      }
      return seq.__iterateUncached(fn, reverse);
    }
    function seqIterator(seq, type, reverse, useKeys) {
      var cache = seq._cache;
      if (cache) {
        var maxIndex = cache.length - 1;
        var ii2 = 0;
        return new Iterator(function() {
          var entry = cache[reverse ? maxIndex - ii2 : ii2];
          return ii2++ > maxIndex ? iteratorDone() : iteratorValue(type, useKeys ? entry[0] : ii2 - 1, entry[1]);
        });
      }
      return seq.__iteratorUncached(type, reverse);
    }
    function fromJS2(json, converter) {
      return converter ? fromJSWith(converter, json, "", { "": json }) : fromJSDefault(json);
    }
    function fromJSWith(converter, json, key, parentJSON) {
      if (Array.isArray(json)) {
        return converter.call(parentJSON, key, IndexedSeq(json).map(function(v, k) {
          return fromJSWith(converter, v, k, json);
        }));
      }
      if (isPlainObj(json)) {
        return converter.call(parentJSON, key, KeyedSeq(json).map(function(v, k) {
          return fromJSWith(converter, v, k, json);
        }));
      }
      return json;
    }
    function fromJSDefault(json) {
      if (Array.isArray(json)) {
        return IndexedSeq(json).map(fromJSDefault).toList();
      }
      if (isPlainObj(json)) {
        return KeyedSeq(json).map(fromJSDefault).toMap();
      }
      return json;
    }
    function isPlainObj(value) {
      return value && (value.constructor === Object || value.constructor === void 0);
    }
    function is(valueA, valueB) {
      if (valueA === valueB || valueA !== valueA && valueB !== valueB) {
        return true;
      }
      if (!valueA || !valueB) {
        return false;
      }
      if (typeof valueA.valueOf === "function" && typeof valueB.valueOf === "function") {
        valueA = valueA.valueOf();
        valueB = valueB.valueOf();
        if (valueA === valueB || valueA !== valueA && valueB !== valueB) {
          return true;
        }
        if (!valueA || !valueB) {
          return false;
        }
      }
      if (typeof valueA.equals === "function" && typeof valueB.equals === "function" && valueA.equals(valueB)) {
        return true;
      }
      return false;
    }
    function deepEqual(a, b) {
      if (a === b) {
        return true;
      }
      if (!isIterable(b) || a.size !== void 0 && b.size !== void 0 && a.size !== b.size || a.__hash !== void 0 && b.__hash !== void 0 && a.__hash !== b.__hash || isKeyed(a) !== isKeyed(b) || isIndexed(a) !== isIndexed(b) || isOrdered(a) !== isOrdered(b)) {
        return false;
      }
      if (a.size === 0 && b.size === 0) {
        return true;
      }
      var notAssociative = !isAssociative(a);
      if (isOrdered(a)) {
        var entries = a.entries();
        return b.every(function(v, k) {
          var entry = entries.next().value;
          return entry && is(entry[1], v) && (notAssociative || is(entry[0], k));
        }) && entries.next().done;
      }
      var flipped = false;
      if (a.size === void 0) {
        if (b.size === void 0) {
          if (typeof a.cacheResult === "function") {
            a.cacheResult();
          }
        } else {
          flipped = true;
          var _ = a;
          a = b;
          b = _;
        }
      }
      var allEqual = true;
      var bSize = b.__iterate(function(v, k) {
        if (notAssociative ? !a.has(v) : flipped ? !is(v, a.get(k, NOT_SET)) : !is(a.get(k, NOT_SET), v)) {
          allEqual = false;
          return false;
        }
      });
      return allEqual && a.size === bSize;
    }
    createClass(Repeat2, IndexedSeq);
    function Repeat2(value, times) {
      if (!(this instanceof Repeat2)) {
        return new Repeat2(value, times);
      }
      this._value = value;
      this.size = times === void 0 ? Infinity : Math.max(0, times);
      if (this.size === 0) {
        if (EMPTY_REPEAT) {
          return EMPTY_REPEAT;
        }
        EMPTY_REPEAT = this;
      }
    }
    Repeat2.prototype.toString = function() {
      if (this.size === 0) {
        return "Repeat []";
      }
      return "Repeat [ " + this._value + " " + this.size + " times ]";
    };
    Repeat2.prototype.get = function(index, notSetValue) {
      return this.has(index) ? this._value : notSetValue;
    };
    Repeat2.prototype.includes = function(searchValue) {
      return is(this._value, searchValue);
    };
    Repeat2.prototype.slice = function(begin, end) {
      var size = this.size;
      return wholeSlice(begin, end, size) ? this : new Repeat2(this._value, resolveEnd(end, size) - resolveBegin(begin, size));
    };
    Repeat2.prototype.reverse = function() {
      return this;
    };
    Repeat2.prototype.indexOf = function(searchValue) {
      if (is(this._value, searchValue)) {
        return 0;
      }
      return -1;
    };
    Repeat2.prototype.lastIndexOf = function(searchValue) {
      if (is(this._value, searchValue)) {
        return this.size;
      }
      return -1;
    };
    Repeat2.prototype.__iterate = function(fn, reverse) {
      for (var ii2 = 0; ii2 < this.size; ii2++) {
        if (fn(this._value, ii2, this) === false) {
          return ii2 + 1;
        }
      }
      return ii2;
    };
    Repeat2.prototype.__iterator = function(type, reverse) {
      var this$0 = this;
      var ii2 = 0;
      return new Iterator(function() {
        return ii2 < this$0.size ? iteratorValue(type, ii2++, this$0._value) : iteratorDone();
      });
    };
    Repeat2.prototype.equals = function(other) {
      return other instanceof Repeat2 ? is(this._value, other._value) : deepEqual(other);
    };
    var EMPTY_REPEAT;
    function invariant2(condition, error) {
      if (!condition)
        throw new Error(error);
    }
    createClass(Range, IndexedSeq);
    function Range(start, end, step) {
      if (!(this instanceof Range)) {
        return new Range(start, end, step);
      }
      invariant2(step !== 0, "Cannot step a Range by 0");
      start = start || 0;
      if (end === void 0) {
        end = Infinity;
      }
      step = step === void 0 ? 1 : Math.abs(step);
      if (end < start) {
        step = -step;
      }
      this._start = start;
      this._end = end;
      this._step = step;
      this.size = Math.max(0, Math.ceil((end - start) / step - 1) + 1);
      if (this.size === 0) {
        if (EMPTY_RANGE) {
          return EMPTY_RANGE;
        }
        EMPTY_RANGE = this;
      }
    }
    Range.prototype.toString = function() {
      if (this.size === 0) {
        return "Range []";
      }
      return "Range [ " + this._start + "..." + this._end + (this._step > 1 ? " by " + this._step : "") + " ]";
    };
    Range.prototype.get = function(index, notSetValue) {
      return this.has(index) ? this._start + wrapIndex(this, index) * this._step : notSetValue;
    };
    Range.prototype.includes = function(searchValue) {
      var possibleIndex = (searchValue - this._start) / this._step;
      return possibleIndex >= 0 && possibleIndex < this.size && possibleIndex === Math.floor(possibleIndex);
    };
    Range.prototype.slice = function(begin, end) {
      if (wholeSlice(begin, end, this.size)) {
        return this;
      }
      begin = resolveBegin(begin, this.size);
      end = resolveEnd(end, this.size);
      if (end <= begin) {
        return new Range(0, 0);
      }
      return new Range(this.get(begin, this._end), this.get(end, this._end), this._step);
    };
    Range.prototype.indexOf = function(searchValue) {
      var offsetValue = searchValue - this._start;
      if (offsetValue % this._step === 0) {
        var index = offsetValue / this._step;
        if (index >= 0 && index < this.size) {
          return index;
        }
      }
      return -1;
    };
    Range.prototype.lastIndexOf = function(searchValue) {
      return this.indexOf(searchValue);
    };
    Range.prototype.__iterate = function(fn, reverse) {
      var maxIndex = this.size - 1;
      var step = this._step;
      var value = reverse ? this._start + maxIndex * step : this._start;
      for (var ii2 = 0; ii2 <= maxIndex; ii2++) {
        if (fn(value, ii2, this) === false) {
          return ii2 + 1;
        }
        value += reverse ? -step : step;
      }
      return ii2;
    };
    Range.prototype.__iterator = function(type, reverse) {
      var maxIndex = this.size - 1;
      var step = this._step;
      var value = reverse ? this._start + maxIndex * step : this._start;
      var ii2 = 0;
      return new Iterator(function() {
        var v = value;
        value += reverse ? -step : step;
        return ii2 > maxIndex ? iteratorDone() : iteratorValue(type, ii2++, v);
      });
    };
    Range.prototype.equals = function(other) {
      return other instanceof Range ? this._start === other._start && this._end === other._end && this._step === other._step : deepEqual(this, other);
    };
    var EMPTY_RANGE;
    createClass(Collection, Iterable);
    function Collection() {
      throw TypeError("Abstract");
    }
    createClass(KeyedCollection, Collection);
    function KeyedCollection() {
    }
    createClass(IndexedCollection, Collection);
    function IndexedCollection() {
    }
    createClass(SetCollection, Collection);
    function SetCollection() {
    }
    Collection.Keyed = KeyedCollection;
    Collection.Indexed = IndexedCollection;
    Collection.Set = SetCollection;
    var imul = typeof Math.imul === "function" && Math.imul(4294967295, 2) === -2 ? Math.imul : function imul2(a, b) {
      a = a | 0;
      b = b | 0;
      var c = a & 65535;
      var d = b & 65535;
      return c * d + ((a >>> 16) * d + c * (b >>> 16) << 16 >>> 0) | 0;
    };
    function smi(i32) {
      return i32 >>> 1 & 1073741824 | i32 & 3221225471;
    }
    function hash(o) {
      if (o === false || o === null || o === void 0) {
        return 0;
      }
      if (typeof o.valueOf === "function") {
        o = o.valueOf();
        if (o === false || o === null || o === void 0) {
          return 0;
        }
      }
      if (o === true) {
        return 1;
      }
      var type = typeof o;
      if (type === "number") {
        var h = o | 0;
        if (h !== o) {
          h ^= o * 4294967295;
        }
        while (o > 4294967295) {
          o /= 4294967295;
          h ^= o;
        }
        return smi(h);
      }
      if (type === "string") {
        return o.length > STRING_HASH_CACHE_MIN_STRLEN ? cachedHashString(o) : hashString(o);
      }
      if (typeof o.hashCode === "function") {
        return o.hashCode();
      }
      if (type === "object") {
        return hashJSObj(o);
      }
      if (typeof o.toString === "function") {
        return hashString(o.toString());
      }
      throw new Error("Value type " + type + " cannot be hashed.");
    }
    function cachedHashString(string) {
      var hash2 = stringHashCache[string];
      if (hash2 === void 0) {
        hash2 = hashString(string);
        if (STRING_HASH_CACHE_SIZE === STRING_HASH_CACHE_MAX_SIZE) {
          STRING_HASH_CACHE_SIZE = 0;
          stringHashCache = {};
        }
        STRING_HASH_CACHE_SIZE++;
        stringHashCache[string] = hash2;
      }
      return hash2;
    }
    function hashString(string) {
      var hash2 = 0;
      for (var ii2 = 0; ii2 < string.length; ii2++) {
        hash2 = 31 * hash2 + string.charCodeAt(ii2) | 0;
      }
      return smi(hash2);
    }
    function hashJSObj(obj) {
      var hash2;
      if (usingWeakMap) {
        hash2 = weakMap.get(obj);
        if (hash2 !== void 0) {
          return hash2;
        }
      }
      hash2 = obj[UID_HASH_KEY];
      if (hash2 !== void 0) {
        return hash2;
      }
      if (!canDefineProperty) {
        hash2 = obj.propertyIsEnumerable && obj.propertyIsEnumerable[UID_HASH_KEY];
        if (hash2 !== void 0) {
          return hash2;
        }
        hash2 = getIENodeHash(obj);
        if (hash2 !== void 0) {
          return hash2;
        }
      }
      hash2 = ++objHashUID;
      if (objHashUID & 1073741824) {
        objHashUID = 0;
      }
      if (usingWeakMap) {
        weakMap.set(obj, hash2);
      } else if (isExtensible !== void 0 && isExtensible(obj) === false) {
        throw new Error("Non-extensible objects are not allowed as keys.");
      } else if (canDefineProperty) {
        Object.defineProperty(obj, UID_HASH_KEY, {
          "enumerable": false,
          "configurable": false,
          "writable": false,
          "value": hash2
        });
      } else if (obj.propertyIsEnumerable !== void 0 && obj.propertyIsEnumerable === obj.constructor.prototype.propertyIsEnumerable) {
        obj.propertyIsEnumerable = function() {
          return this.constructor.prototype.propertyIsEnumerable.apply(this, arguments);
        };
        obj.propertyIsEnumerable[UID_HASH_KEY] = hash2;
      } else if (obj.nodeType !== void 0) {
        obj[UID_HASH_KEY] = hash2;
      } else {
        throw new Error("Unable to set a non-enumerable property on object.");
      }
      return hash2;
    }
    var isExtensible = Object.isExtensible;
    var canDefineProperty = function() {
      try {
        Object.defineProperty({}, "@", {});
        return true;
      } catch (e) {
        return false;
      }
    }();
    function getIENodeHash(node) {
      if (node && node.nodeType > 0) {
        switch (node.nodeType) {
          case 1:
            return node.uniqueID;
          case 9:
            return node.documentElement && node.documentElement.uniqueID;
        }
      }
    }
    var usingWeakMap = typeof WeakMap === "function";
    var weakMap;
    if (usingWeakMap) {
      weakMap = /* @__PURE__ */ new WeakMap();
    }
    var objHashUID = 0;
    var UID_HASH_KEY = "__immutablehash__";
    if (typeof Symbol === "function") {
      UID_HASH_KEY = Symbol(UID_HASH_KEY);
    }
    var STRING_HASH_CACHE_MIN_STRLEN = 16;
    var STRING_HASH_CACHE_MAX_SIZE = 255;
    var STRING_HASH_CACHE_SIZE = 0;
    var stringHashCache = {};
    function assertNotInfinite(size) {
      invariant2(size !== Infinity, "Cannot perform this action with an infinite size.");
    }
    createClass(Map2, KeyedCollection);
    function Map2(value) {
      return value === null || value === void 0 ? emptyMap() : isMap2(value) && !isOrdered(value) ? value : emptyMap().withMutations(function(map2) {
        var iter = KeyedIterable(value);
        assertNotInfinite(iter.size);
        iter.forEach(function(v, k) {
          return map2.set(k, v);
        });
      });
    }
    Map2.prototype.toString = function() {
      return this.__toString("Map {", "}");
    };
    Map2.prototype.get = function(k, notSetValue) {
      return this._root ? this._root.get(0, void 0, k, notSetValue) : notSetValue;
    };
    Map2.prototype.set = function(k, v) {
      return updateMap(this, k, v);
    };
    Map2.prototype.setIn = function(keyPath, v) {
      return this.updateIn(keyPath, NOT_SET, function() {
        return v;
      });
    };
    Map2.prototype.remove = function(k) {
      return updateMap(this, k, NOT_SET);
    };
    Map2.prototype.deleteIn = function(keyPath) {
      return this.updateIn(keyPath, function() {
        return NOT_SET;
      });
    };
    Map2.prototype.update = function(k, notSetValue, updater) {
      return arguments.length === 1 ? k(this) : this.updateIn([k], notSetValue, updater);
    };
    Map2.prototype.updateIn = function(keyPath, notSetValue, updater) {
      if (!updater) {
        updater = notSetValue;
        notSetValue = void 0;
      }
      var updatedValue = updateInDeepMap(this, forceIterator(keyPath), notSetValue, updater);
      return updatedValue === NOT_SET ? void 0 : updatedValue;
    };
    Map2.prototype.clear = function() {
      if (this.size === 0) {
        return this;
      }
      if (this.__ownerID) {
        this.size = 0;
        this._root = null;
        this.__hash = void 0;
        this.__altered = true;
        return this;
      }
      return emptyMap();
    };
    Map2.prototype.merge = function() {
      return mergeIntoMapWith(this, void 0, arguments);
    };
    Map2.prototype.mergeWith = function(merger) {
      var iters = SLICE$0.call(arguments, 1);
      return mergeIntoMapWith(this, merger, iters);
    };
    Map2.prototype.mergeIn = function(keyPath) {
      var iters = SLICE$0.call(arguments, 1);
      return this.updateIn(keyPath, emptyMap(), function(m2) {
        return typeof m2.merge === "function" ? m2.merge.apply(m2, iters) : iters[iters.length - 1];
      });
    };
    Map2.prototype.mergeDeep = function() {
      return mergeIntoMapWith(this, deepMerger, arguments);
    };
    Map2.prototype.mergeDeepWith = function(merger) {
      var iters = SLICE$0.call(arguments, 1);
      return mergeIntoMapWith(this, deepMergerWith(merger), iters);
    };
    Map2.prototype.mergeDeepIn = function(keyPath) {
      var iters = SLICE$0.call(arguments, 1);
      return this.updateIn(keyPath, emptyMap(), function(m2) {
        return typeof m2.mergeDeep === "function" ? m2.mergeDeep.apply(m2, iters) : iters[iters.length - 1];
      });
    };
    Map2.prototype.sort = function(comparator) {
      return OrderedMap2(sortFactory(this, comparator));
    };
    Map2.prototype.sortBy = function(mapper, comparator) {
      return OrderedMap2(sortFactory(this, comparator, mapper));
    };
    Map2.prototype.withMutations = function(fn) {
      var mutable = this.asMutable();
      fn(mutable);
      return mutable.wasAltered() ? mutable.__ensureOwner(this.__ownerID) : this;
    };
    Map2.prototype.asMutable = function() {
      return this.__ownerID ? this : this.__ensureOwner(new OwnerID());
    };
    Map2.prototype.asImmutable = function() {
      return this.__ensureOwner();
    };
    Map2.prototype.wasAltered = function() {
      return this.__altered;
    };
    Map2.prototype.__iterator = function(type, reverse) {
      return new MapIterator(this, type, reverse);
    };
    Map2.prototype.__iterate = function(fn, reverse) {
      var this$0 = this;
      var iterations = 0;
      this._root && this._root.iterate(function(entry) {
        iterations++;
        return fn(entry[1], entry[0], this$0);
      }, reverse);
      return iterations;
    };
    Map2.prototype.__ensureOwner = function(ownerID) {
      if (ownerID === this.__ownerID) {
        return this;
      }
      if (!ownerID) {
        this.__ownerID = ownerID;
        this.__altered = false;
        return this;
      }
      return makeMap(this.size, this._root, ownerID, this.__hash);
    };
    function isMap2(maybeMap) {
      return !!(maybeMap && maybeMap[IS_MAP_SENTINEL]);
    }
    Map2.isMap = isMap2;
    var IS_MAP_SENTINEL = "@@__IMMUTABLE_MAP__@@";
    var MapPrototype = Map2.prototype;
    MapPrototype[IS_MAP_SENTINEL] = true;
    MapPrototype[DELETE] = MapPrototype.remove;
    MapPrototype.removeIn = MapPrototype.deleteIn;
    function ArrayMapNode(ownerID, entries) {
      this.ownerID = ownerID;
      this.entries = entries;
    }
    ArrayMapNode.prototype.get = function(shift, keyHash, key, notSetValue) {
      var entries = this.entries;
      for (var ii2 = 0, len = entries.length; ii2 < len; ii2++) {
        if (is(key, entries[ii2][0])) {
          return entries[ii2][1];
        }
      }
      return notSetValue;
    };
    ArrayMapNode.prototype.update = function(ownerID, shift, keyHash, key, value, didChangeSize, didAlter) {
      var removed = value === NOT_SET;
      var entries = this.entries;
      var idx = 0;
      for (var len = entries.length; idx < len; idx++) {
        if (is(key, entries[idx][0])) {
          break;
        }
      }
      var exists = idx < len;
      if (exists ? entries[idx][1] === value : removed) {
        return this;
      }
      SetRef(didAlter);
      (removed || !exists) && SetRef(didChangeSize);
      if (removed && entries.length === 1) {
        return;
      }
      if (!exists && !removed && entries.length >= MAX_ARRAY_MAP_SIZE) {
        return createNodes(ownerID, entries, key, value);
      }
      var isEditable = ownerID && ownerID === this.ownerID;
      var newEntries = isEditable ? entries : arrCopy(entries);
      if (exists) {
        if (removed) {
          idx === len - 1 ? newEntries.pop() : newEntries[idx] = newEntries.pop();
        } else {
          newEntries[idx] = [key, value];
        }
      } else {
        newEntries.push([key, value]);
      }
      if (isEditable) {
        this.entries = newEntries;
        return this;
      }
      return new ArrayMapNode(ownerID, newEntries);
    };
    function BitmapIndexedNode(ownerID, bitmap, nodes) {
      this.ownerID = ownerID;
      this.bitmap = bitmap;
      this.nodes = nodes;
    }
    BitmapIndexedNode.prototype.get = function(shift, keyHash, key, notSetValue) {
      if (keyHash === void 0) {
        keyHash = hash(key);
      }
      var bit = 1 << ((shift === 0 ? keyHash : keyHash >>> shift) & MASK);
      var bitmap = this.bitmap;
      return (bitmap & bit) === 0 ? notSetValue : this.nodes[popCount(bitmap & bit - 1)].get(shift + SHIFT, keyHash, key, notSetValue);
    };
    BitmapIndexedNode.prototype.update = function(ownerID, shift, keyHash, key, value, didChangeSize, didAlter) {
      if (keyHash === void 0) {
        keyHash = hash(key);
      }
      var keyHashFrag = (shift === 0 ? keyHash : keyHash >>> shift) & MASK;
      var bit = 1 << keyHashFrag;
      var bitmap = this.bitmap;
      var exists = (bitmap & bit) !== 0;
      if (!exists && value === NOT_SET) {
        return this;
      }
      var idx = popCount(bitmap & bit - 1);
      var nodes = this.nodes;
      var node = exists ? nodes[idx] : void 0;
      var newNode = updateNode(node, ownerID, shift + SHIFT, keyHash, key, value, didChangeSize, didAlter);
      if (newNode === node) {
        return this;
      }
      if (!exists && newNode && nodes.length >= MAX_BITMAP_INDEXED_SIZE) {
        return expandNodes(ownerID, nodes, bitmap, keyHashFrag, newNode);
      }
      if (exists && !newNode && nodes.length === 2 && isLeafNode(nodes[idx ^ 1])) {
        return nodes[idx ^ 1];
      }
      if (exists && newNode && nodes.length === 1 && isLeafNode(newNode)) {
        return newNode;
      }
      var isEditable = ownerID && ownerID === this.ownerID;
      var newBitmap = exists ? newNode ? bitmap : bitmap ^ bit : bitmap | bit;
      var newNodes = exists ? newNode ? setIn(nodes, idx, newNode, isEditable) : spliceOut(nodes, idx, isEditable) : spliceIn(nodes, idx, newNode, isEditable);
      if (isEditable) {
        this.bitmap = newBitmap;
        this.nodes = newNodes;
        return this;
      }
      return new BitmapIndexedNode(ownerID, newBitmap, newNodes);
    };
    function HashArrayMapNode(ownerID, count, nodes) {
      this.ownerID = ownerID;
      this.count = count;
      this.nodes = nodes;
    }
    HashArrayMapNode.prototype.get = function(shift, keyHash, key, notSetValue) {
      if (keyHash === void 0) {
        keyHash = hash(key);
      }
      var idx = (shift === 0 ? keyHash : keyHash >>> shift) & MASK;
      var node = this.nodes[idx];
      return node ? node.get(shift + SHIFT, keyHash, key, notSetValue) : notSetValue;
    };
    HashArrayMapNode.prototype.update = function(ownerID, shift, keyHash, key, value, didChangeSize, didAlter) {
      if (keyHash === void 0) {
        keyHash = hash(key);
      }
      var idx = (shift === 0 ? keyHash : keyHash >>> shift) & MASK;
      var removed = value === NOT_SET;
      var nodes = this.nodes;
      var node = nodes[idx];
      if (removed && !node) {
        return this;
      }
      var newNode = updateNode(node, ownerID, shift + SHIFT, keyHash, key, value, didChangeSize, didAlter);
      if (newNode === node) {
        return this;
      }
      var newCount = this.count;
      if (!node) {
        newCount++;
      } else if (!newNode) {
        newCount--;
        if (newCount < MIN_HASH_ARRAY_MAP_SIZE) {
          return packNodes(ownerID, nodes, newCount, idx);
        }
      }
      var isEditable = ownerID && ownerID === this.ownerID;
      var newNodes = setIn(nodes, idx, newNode, isEditable);
      if (isEditable) {
        this.count = newCount;
        this.nodes = newNodes;
        return this;
      }
      return new HashArrayMapNode(ownerID, newCount, newNodes);
    };
    function HashCollisionNode(ownerID, keyHash, entries) {
      this.ownerID = ownerID;
      this.keyHash = keyHash;
      this.entries = entries;
    }
    HashCollisionNode.prototype.get = function(shift, keyHash, key, notSetValue) {
      var entries = this.entries;
      for (var ii2 = 0, len = entries.length; ii2 < len; ii2++) {
        if (is(key, entries[ii2][0])) {
          return entries[ii2][1];
        }
      }
      return notSetValue;
    };
    HashCollisionNode.prototype.update = function(ownerID, shift, keyHash, key, value, didChangeSize, didAlter) {
      if (keyHash === void 0) {
        keyHash = hash(key);
      }
      var removed = value === NOT_SET;
      if (keyHash !== this.keyHash) {
        if (removed) {
          return this;
        }
        SetRef(didAlter);
        SetRef(didChangeSize);
        return mergeIntoNode(this, ownerID, shift, keyHash, [key, value]);
      }
      var entries = this.entries;
      var idx = 0;
      for (var len = entries.length; idx < len; idx++) {
        if (is(key, entries[idx][0])) {
          break;
        }
      }
      var exists = idx < len;
      if (exists ? entries[idx][1] === value : removed) {
        return this;
      }
      SetRef(didAlter);
      (removed || !exists) && SetRef(didChangeSize);
      if (removed && len === 2) {
        return new ValueNode(ownerID, this.keyHash, entries[idx ^ 1]);
      }
      var isEditable = ownerID && ownerID === this.ownerID;
      var newEntries = isEditable ? entries : arrCopy(entries);
      if (exists) {
        if (removed) {
          idx === len - 1 ? newEntries.pop() : newEntries[idx] = newEntries.pop();
        } else {
          newEntries[idx] = [key, value];
        }
      } else {
        newEntries.push([key, value]);
      }
      if (isEditable) {
        this.entries = newEntries;
        return this;
      }
      return new HashCollisionNode(ownerID, this.keyHash, newEntries);
    };
    function ValueNode(ownerID, keyHash, entry) {
      this.ownerID = ownerID;
      this.keyHash = keyHash;
      this.entry = entry;
    }
    ValueNode.prototype.get = function(shift, keyHash, key, notSetValue) {
      return is(key, this.entry[0]) ? this.entry[1] : notSetValue;
    };
    ValueNode.prototype.update = function(ownerID, shift, keyHash, key, value, didChangeSize, didAlter) {
      var removed = value === NOT_SET;
      var keyMatch = is(key, this.entry[0]);
      if (keyMatch ? value === this.entry[1] : removed) {
        return this;
      }
      SetRef(didAlter);
      if (removed) {
        SetRef(didChangeSize);
        return;
      }
      if (keyMatch) {
        if (ownerID && ownerID === this.ownerID) {
          this.entry[1] = value;
          return this;
        }
        return new ValueNode(ownerID, this.keyHash, [key, value]);
      }
      SetRef(didChangeSize);
      return mergeIntoNode(this, ownerID, shift, hash(key), [key, value]);
    };
    ArrayMapNode.prototype.iterate = HashCollisionNode.prototype.iterate = function(fn, reverse) {
      var entries = this.entries;
      for (var ii2 = 0, maxIndex = entries.length - 1; ii2 <= maxIndex; ii2++) {
        if (fn(entries[reverse ? maxIndex - ii2 : ii2]) === false) {
          return false;
        }
      }
    };
    BitmapIndexedNode.prototype.iterate = HashArrayMapNode.prototype.iterate = function(fn, reverse) {
      var nodes = this.nodes;
      for (var ii2 = 0, maxIndex = nodes.length - 1; ii2 <= maxIndex; ii2++) {
        var node = nodes[reverse ? maxIndex - ii2 : ii2];
        if (node && node.iterate(fn, reverse) === false) {
          return false;
        }
      }
    };
    ValueNode.prototype.iterate = function(fn, reverse) {
      return fn(this.entry);
    };
    createClass(MapIterator, Iterator);
    function MapIterator(map2, type, reverse) {
      this._type = type;
      this._reverse = reverse;
      this._stack = map2._root && mapIteratorFrame(map2._root);
    }
    MapIterator.prototype.next = function() {
      var type = this._type;
      var stack = this._stack;
      while (stack) {
        var node = stack.node;
        var index = stack.index++;
        var maxIndex;
        if (node.entry) {
          if (index === 0) {
            return mapIteratorValue(type, node.entry);
          }
        } else if (node.entries) {
          maxIndex = node.entries.length - 1;
          if (index <= maxIndex) {
            return mapIteratorValue(type, node.entries[this._reverse ? maxIndex - index : index]);
          }
        } else {
          maxIndex = node.nodes.length - 1;
          if (index <= maxIndex) {
            var subNode = node.nodes[this._reverse ? maxIndex - index : index];
            if (subNode) {
              if (subNode.entry) {
                return mapIteratorValue(type, subNode.entry);
              }
              stack = this._stack = mapIteratorFrame(subNode, stack);
            }
            continue;
          }
        }
        stack = this._stack = this._stack.__prev;
      }
      return iteratorDone();
    };
    function mapIteratorValue(type, entry) {
      return iteratorValue(type, entry[0], entry[1]);
    }
    function mapIteratorFrame(node, prev) {
      return {
        node,
        index: 0,
        __prev: prev
      };
    }
    function makeMap(size, root2, ownerID, hash2) {
      var map2 = Object.create(MapPrototype);
      map2.size = size;
      map2._root = root2;
      map2.__ownerID = ownerID;
      map2.__hash = hash2;
      map2.__altered = false;
      return map2;
    }
    var EMPTY_MAP;
    function emptyMap() {
      return EMPTY_MAP || (EMPTY_MAP = makeMap(0));
    }
    function updateMap(map2, k, v) {
      var newRoot;
      var newSize;
      if (!map2._root) {
        if (v === NOT_SET) {
          return map2;
        }
        newSize = 1;
        newRoot = new ArrayMapNode(map2.__ownerID, [[k, v]]);
      } else {
        var didChangeSize = MakeRef(CHANGE_LENGTH);
        var didAlter = MakeRef(DID_ALTER);
        newRoot = updateNode(map2._root, map2.__ownerID, 0, void 0, k, v, didChangeSize, didAlter);
        if (!didAlter.value) {
          return map2;
        }
        newSize = map2.size + (didChangeSize.value ? v === NOT_SET ? -1 : 1 : 0);
      }
      if (map2.__ownerID) {
        map2.size = newSize;
        map2._root = newRoot;
        map2.__hash = void 0;
        map2.__altered = true;
        return map2;
      }
      return newRoot ? makeMap(newSize, newRoot) : emptyMap();
    }
    function updateNode(node, ownerID, shift, keyHash, key, value, didChangeSize, didAlter) {
      if (!node) {
        if (value === NOT_SET) {
          return node;
        }
        SetRef(didAlter);
        SetRef(didChangeSize);
        return new ValueNode(ownerID, keyHash, [key, value]);
      }
      return node.update(ownerID, shift, keyHash, key, value, didChangeSize, didAlter);
    }
    function isLeafNode(node) {
      return node.constructor === ValueNode || node.constructor === HashCollisionNode;
    }
    function mergeIntoNode(node, ownerID, shift, keyHash, entry) {
      if (node.keyHash === keyHash) {
        return new HashCollisionNode(ownerID, keyHash, [node.entry, entry]);
      }
      var idx1 = (shift === 0 ? node.keyHash : node.keyHash >>> shift) & MASK;
      var idx2 = (shift === 0 ? keyHash : keyHash >>> shift) & MASK;
      var newNode;
      var nodes = idx1 === idx2 ? [mergeIntoNode(node, ownerID, shift + SHIFT, keyHash, entry)] : (newNode = new ValueNode(ownerID, keyHash, entry), idx1 < idx2 ? [node, newNode] : [newNode, node]);
      return new BitmapIndexedNode(ownerID, 1 << idx1 | 1 << idx2, nodes);
    }
    function createNodes(ownerID, entries, key, value) {
      if (!ownerID) {
        ownerID = new OwnerID();
      }
      var node = new ValueNode(ownerID, hash(key), [key, value]);
      for (var ii2 = 0; ii2 < entries.length; ii2++) {
        var entry = entries[ii2];
        node = node.update(ownerID, 0, void 0, entry[0], entry[1]);
      }
      return node;
    }
    function packNodes(ownerID, nodes, count, excluding) {
      var bitmap = 0;
      var packedII = 0;
      var packedNodes = new Array(count);
      for (var ii2 = 0, bit = 1, len = nodes.length; ii2 < len; ii2++, bit <<= 1) {
        var node = nodes[ii2];
        if (node !== void 0 && ii2 !== excluding) {
          bitmap |= bit;
          packedNodes[packedII++] = node;
        }
      }
      return new BitmapIndexedNode(ownerID, bitmap, packedNodes);
    }
    function expandNodes(ownerID, nodes, bitmap, including, node) {
      var count = 0;
      var expandedNodes = new Array(SIZE);
      for (var ii2 = 0; bitmap !== 0; ii2++, bitmap >>>= 1) {
        expandedNodes[ii2] = bitmap & 1 ? nodes[count++] : void 0;
      }
      expandedNodes[including] = node;
      return new HashArrayMapNode(ownerID, count + 1, expandedNodes);
    }
    function mergeIntoMapWith(map2, merger, iterables) {
      var iters = [];
      for (var ii2 = 0; ii2 < iterables.length; ii2++) {
        var value = iterables[ii2];
        var iter = KeyedIterable(value);
        if (!isIterable(value)) {
          iter = iter.map(function(v) {
            return fromJS2(v);
          });
        }
        iters.push(iter);
      }
      return mergeIntoCollectionWith(map2, merger, iters);
    }
    function deepMerger(existing, value, key) {
      return existing && existing.mergeDeep && isIterable(value) ? existing.mergeDeep(value) : is(existing, value) ? existing : value;
    }
    function deepMergerWith(merger) {
      return function(existing, value, key) {
        if (existing && existing.mergeDeepWith && isIterable(value)) {
          return existing.mergeDeepWith(merger, value);
        }
        var nextValue = merger(existing, value, key);
        return is(existing, nextValue) ? existing : nextValue;
      };
    }
    function mergeIntoCollectionWith(collection, merger, iters) {
      iters = iters.filter(function(x) {
        return x.size !== 0;
      });
      if (iters.length === 0) {
        return collection;
      }
      if (collection.size === 0 && !collection.__ownerID && iters.length === 1) {
        return collection.constructor(iters[0]);
      }
      return collection.withMutations(function(collection2) {
        var mergeIntoMap = merger ? function(value, key) {
          collection2.update(key, NOT_SET, function(existing) {
            return existing === NOT_SET ? value : merger(existing, value, key);
          });
        } : function(value, key) {
          collection2.set(key, value);
        };
        for (var ii2 = 0; ii2 < iters.length; ii2++) {
          iters[ii2].forEach(mergeIntoMap);
        }
      });
    }
    function updateInDeepMap(existing, keyPathIter, notSetValue, updater) {
      var isNotSet = existing === NOT_SET;
      var step = keyPathIter.next();
      if (step.done) {
        var existingValue = isNotSet ? notSetValue : existing;
        var newValue = updater(existingValue);
        return newValue === existingValue ? existing : newValue;
      }
      invariant2(isNotSet || existing && existing.set, "invalid keyPath");
      var key = step.value;
      var nextExisting = isNotSet ? NOT_SET : existing.get(key, NOT_SET);
      var nextUpdated = updateInDeepMap(nextExisting, keyPathIter, notSetValue, updater);
      return nextUpdated === nextExisting ? existing : nextUpdated === NOT_SET ? existing.remove(key) : (isNotSet ? emptyMap() : existing).set(key, nextUpdated);
    }
    function popCount(x) {
      x = x - (x >> 1 & 1431655765);
      x = (x & 858993459) + (x >> 2 & 858993459);
      x = x + (x >> 4) & 252645135;
      x = x + (x >> 8);
      x = x + (x >> 16);
      return x & 127;
    }
    function setIn(array, idx, val, canEdit) {
      var newArray = canEdit ? array : arrCopy(array);
      newArray[idx] = val;
      return newArray;
    }
    function spliceIn(array, idx, val, canEdit) {
      var newLen = array.length + 1;
      if (canEdit && idx + 1 === newLen) {
        array[idx] = val;
        return array;
      }
      var newArray = new Array(newLen);
      var after = 0;
      for (var ii2 = 0; ii2 < newLen; ii2++) {
        if (ii2 === idx) {
          newArray[ii2] = val;
          after = -1;
        } else {
          newArray[ii2] = array[ii2 + after];
        }
      }
      return newArray;
    }
    function spliceOut(array, idx, canEdit) {
      var newLen = array.length - 1;
      if (canEdit && idx === newLen) {
        array.pop();
        return array;
      }
      var newArray = new Array(newLen);
      var after = 0;
      for (var ii2 = 0; ii2 < newLen; ii2++) {
        if (ii2 === idx) {
          after = 1;
        }
        newArray[ii2] = array[ii2 + after];
      }
      return newArray;
    }
    var MAX_ARRAY_MAP_SIZE = SIZE / 4;
    var MAX_BITMAP_INDEXED_SIZE = SIZE / 2;
    var MIN_HASH_ARRAY_MAP_SIZE = SIZE / 4;
    createClass(List2, IndexedCollection);
    function List2(value) {
      var empty = emptyList();
      if (value === null || value === void 0) {
        return empty;
      }
      if (isList(value)) {
        return value;
      }
      var iter = IndexedIterable(value);
      var size = iter.size;
      if (size === 0) {
        return empty;
      }
      assertNotInfinite(size);
      if (size > 0 && size < SIZE) {
        return makeList(0, size, SHIFT, null, new VNode(iter.toArray()));
      }
      return empty.withMutations(function(list) {
        list.setSize(size);
        iter.forEach(function(v, i) {
          return list.set(i, v);
        });
      });
    }
    List2.of = function() {
      return this(arguments);
    };
    List2.prototype.toString = function() {
      return this.__toString("List [", "]");
    };
    List2.prototype.get = function(index, notSetValue) {
      index = wrapIndex(this, index);
      if (index >= 0 && index < this.size) {
        index += this._origin;
        var node = listNodeFor(this, index);
        return node && node.array[index & MASK];
      }
      return notSetValue;
    };
    List2.prototype.set = function(index, value) {
      return updateList(this, index, value);
    };
    List2.prototype.remove = function(index) {
      return !this.has(index) ? this : index === 0 ? this.shift() : index === this.size - 1 ? this.pop() : this.splice(index, 1);
    };
    List2.prototype.insert = function(index, value) {
      return this.splice(index, 0, value);
    };
    List2.prototype.clear = function() {
      if (this.size === 0) {
        return this;
      }
      if (this.__ownerID) {
        this.size = this._origin = this._capacity = 0;
        this._level = SHIFT;
        this._root = this._tail = null;
        this.__hash = void 0;
        this.__altered = true;
        return this;
      }
      return emptyList();
    };
    List2.prototype.push = function() {
      var values = arguments;
      var oldSize = this.size;
      return this.withMutations(function(list) {
        setListBounds(list, 0, oldSize + values.length);
        for (var ii2 = 0; ii2 < values.length; ii2++) {
          list.set(oldSize + ii2, values[ii2]);
        }
      });
    };
    List2.prototype.pop = function() {
      return setListBounds(this, 0, -1);
    };
    List2.prototype.unshift = function() {
      var values = arguments;
      return this.withMutations(function(list) {
        setListBounds(list, -values.length);
        for (var ii2 = 0; ii2 < values.length; ii2++) {
          list.set(ii2, values[ii2]);
        }
      });
    };
    List2.prototype.shift = function() {
      return setListBounds(this, 1);
    };
    List2.prototype.merge = function() {
      return mergeIntoListWith(this, void 0, arguments);
    };
    List2.prototype.mergeWith = function(merger) {
      var iters = SLICE$0.call(arguments, 1);
      return mergeIntoListWith(this, merger, iters);
    };
    List2.prototype.mergeDeep = function() {
      return mergeIntoListWith(this, deepMerger, arguments);
    };
    List2.prototype.mergeDeepWith = function(merger) {
      var iters = SLICE$0.call(arguments, 1);
      return mergeIntoListWith(this, deepMergerWith(merger), iters);
    };
    List2.prototype.setSize = function(size) {
      return setListBounds(this, 0, size);
    };
    List2.prototype.slice = function(begin, end) {
      var size = this.size;
      if (wholeSlice(begin, end, size)) {
        return this;
      }
      return setListBounds(this, resolveBegin(begin, size), resolveEnd(end, size));
    };
    List2.prototype.__iterator = function(type, reverse) {
      var index = 0;
      var values = iterateList(this, reverse);
      return new Iterator(function() {
        var value = values();
        return value === DONE ? iteratorDone() : iteratorValue(type, index++, value);
      });
    };
    List2.prototype.__iterate = function(fn, reverse) {
      var index = 0;
      var values = iterateList(this, reverse);
      var value;
      while ((value = values()) !== DONE) {
        if (fn(value, index++, this) === false) {
          break;
        }
      }
      return index;
    };
    List2.prototype.__ensureOwner = function(ownerID) {
      if (ownerID === this.__ownerID) {
        return this;
      }
      if (!ownerID) {
        this.__ownerID = ownerID;
        return this;
      }
      return makeList(this._origin, this._capacity, this._level, this._root, this._tail, ownerID, this.__hash);
    };
    function isList(maybeList) {
      return !!(maybeList && maybeList[IS_LIST_SENTINEL]);
    }
    List2.isList = isList;
    var IS_LIST_SENTINEL = "@@__IMMUTABLE_LIST__@@";
    var ListPrototype = List2.prototype;
    ListPrototype[IS_LIST_SENTINEL] = true;
    ListPrototype[DELETE] = ListPrototype.remove;
    ListPrototype.setIn = MapPrototype.setIn;
    ListPrototype.deleteIn = ListPrototype.removeIn = MapPrototype.removeIn;
    ListPrototype.update = MapPrototype.update;
    ListPrototype.updateIn = MapPrototype.updateIn;
    ListPrototype.mergeIn = MapPrototype.mergeIn;
    ListPrototype.mergeDeepIn = MapPrototype.mergeDeepIn;
    ListPrototype.withMutations = MapPrototype.withMutations;
    ListPrototype.asMutable = MapPrototype.asMutable;
    ListPrototype.asImmutable = MapPrototype.asImmutable;
    ListPrototype.wasAltered = MapPrototype.wasAltered;
    function VNode(array, ownerID) {
      this.array = array;
      this.ownerID = ownerID;
    }
    VNode.prototype.removeBefore = function(ownerID, level, index) {
      if (index === level ? 1 << level : this.array.length === 0) {
        return this;
      }
      var originIndex = index >>> level & MASK;
      if (originIndex >= this.array.length) {
        return new VNode([], ownerID);
      }
      var removingFirst = originIndex === 0;
      var newChild;
      if (level > 0) {
        var oldChild = this.array[originIndex];
        newChild = oldChild && oldChild.removeBefore(ownerID, level - SHIFT, index);
        if (newChild === oldChild && removingFirst) {
          return this;
        }
      }
      if (removingFirst && !newChild) {
        return this;
      }
      var editable = editableVNode(this, ownerID);
      if (!removingFirst) {
        for (var ii2 = 0; ii2 < originIndex; ii2++) {
          editable.array[ii2] = void 0;
        }
      }
      if (newChild) {
        editable.array[originIndex] = newChild;
      }
      return editable;
    };
    VNode.prototype.removeAfter = function(ownerID, level, index) {
      if (index === (level ? 1 << level : 0) || this.array.length === 0) {
        return this;
      }
      var sizeIndex = index - 1 >>> level & MASK;
      if (sizeIndex >= this.array.length) {
        return this;
      }
      var newChild;
      if (level > 0) {
        var oldChild = this.array[sizeIndex];
        newChild = oldChild && oldChild.removeAfter(ownerID, level - SHIFT, index);
        if (newChild === oldChild && sizeIndex === this.array.length - 1) {
          return this;
        }
      }
      var editable = editableVNode(this, ownerID);
      editable.array.splice(sizeIndex + 1);
      if (newChild) {
        editable.array[sizeIndex] = newChild;
      }
      return editable;
    };
    var DONE = {};
    function iterateList(list, reverse) {
      var left = list._origin;
      var right = list._capacity;
      var tailPos = getTailOffset(right);
      var tail = list._tail;
      return iterateNodeOrLeaf(list._root, list._level, 0);
      function iterateNodeOrLeaf(node, level, offset) {
        return level === 0 ? iterateLeaf(node, offset) : iterateNode(node, level, offset);
      }
      function iterateLeaf(node, offset) {
        var array = offset === tailPos ? tail && tail.array : node && node.array;
        var from = offset > left ? 0 : left - offset;
        var to = right - offset;
        if (to > SIZE) {
          to = SIZE;
        }
        return function() {
          if (from === to) {
            return DONE;
          }
          var idx = reverse ? --to : from++;
          return array && array[idx];
        };
      }
      function iterateNode(node, level, offset) {
        var values;
        var array = node && node.array;
        var from = offset > left ? 0 : left - offset >> level;
        var to = (right - offset >> level) + 1;
        if (to > SIZE) {
          to = SIZE;
        }
        return function() {
          do {
            if (values) {
              var value = values();
              if (value !== DONE) {
                return value;
              }
              values = null;
            }
            if (from === to) {
              return DONE;
            }
            var idx = reverse ? --to : from++;
            values = iterateNodeOrLeaf(array && array[idx], level - SHIFT, offset + (idx << level));
          } while (true);
        };
      }
    }
    function makeList(origin, capacity, level, root2, tail, ownerID, hash2) {
      var list = Object.create(ListPrototype);
      list.size = capacity - origin;
      list._origin = origin;
      list._capacity = capacity;
      list._level = level;
      list._root = root2;
      list._tail = tail;
      list.__ownerID = ownerID;
      list.__hash = hash2;
      list.__altered = false;
      return list;
    }
    var EMPTY_LIST;
    function emptyList() {
      return EMPTY_LIST || (EMPTY_LIST = makeList(0, 0, SHIFT));
    }
    function updateList(list, index, value) {
      index = wrapIndex(list, index);
      if (index !== index) {
        return list;
      }
      if (index >= list.size || index < 0) {
        return list.withMutations(function(list2) {
          index < 0 ? setListBounds(list2, index).set(0, value) : setListBounds(list2, 0, index + 1).set(index, value);
        });
      }
      index += list._origin;
      var newTail = list._tail;
      var newRoot = list._root;
      var didAlter = MakeRef(DID_ALTER);
      if (index >= getTailOffset(list._capacity)) {
        newTail = updateVNode(newTail, list.__ownerID, 0, index, value, didAlter);
      } else {
        newRoot = updateVNode(newRoot, list.__ownerID, list._level, index, value, didAlter);
      }
      if (!didAlter.value) {
        return list;
      }
      if (list.__ownerID) {
        list._root = newRoot;
        list._tail = newTail;
        list.__hash = void 0;
        list.__altered = true;
        return list;
      }
      return makeList(list._origin, list._capacity, list._level, newRoot, newTail);
    }
    function updateVNode(node, ownerID, level, index, value, didAlter) {
      var idx = index >>> level & MASK;
      var nodeHas = node && idx < node.array.length;
      if (!nodeHas && value === void 0) {
        return node;
      }
      var newNode;
      if (level > 0) {
        var lowerNode = node && node.array[idx];
        var newLowerNode = updateVNode(lowerNode, ownerID, level - SHIFT, index, value, didAlter);
        if (newLowerNode === lowerNode) {
          return node;
        }
        newNode = editableVNode(node, ownerID);
        newNode.array[idx] = newLowerNode;
        return newNode;
      }
      if (nodeHas && node.array[idx] === value) {
        return node;
      }
      SetRef(didAlter);
      newNode = editableVNode(node, ownerID);
      if (value === void 0 && idx === newNode.array.length - 1) {
        newNode.array.pop();
      } else {
        newNode.array[idx] = value;
      }
      return newNode;
    }
    function editableVNode(node, ownerID) {
      if (ownerID && node && ownerID === node.ownerID) {
        return node;
      }
      return new VNode(node ? node.array.slice() : [], ownerID);
    }
    function listNodeFor(list, rawIndex) {
      if (rawIndex >= getTailOffset(list._capacity)) {
        return list._tail;
      }
      if (rawIndex < 1 << list._level + SHIFT) {
        var node = list._root;
        var level = list._level;
        while (node && level > 0) {
          node = node.array[rawIndex >>> level & MASK];
          level -= SHIFT;
        }
        return node;
      }
    }
    function setListBounds(list, begin, end) {
      if (begin !== void 0) {
        begin = begin | 0;
      }
      if (end !== void 0) {
        end = end | 0;
      }
      var owner = list.__ownerID || new OwnerID();
      var oldOrigin = list._origin;
      var oldCapacity = list._capacity;
      var newOrigin = oldOrigin + begin;
      var newCapacity = end === void 0 ? oldCapacity : end < 0 ? oldCapacity + end : oldOrigin + end;
      if (newOrigin === oldOrigin && newCapacity === oldCapacity) {
        return list;
      }
      if (newOrigin >= newCapacity) {
        return list.clear();
      }
      var newLevel = list._level;
      var newRoot = list._root;
      var offsetShift = 0;
      while (newOrigin + offsetShift < 0) {
        newRoot = new VNode(newRoot && newRoot.array.length ? [void 0, newRoot] : [], owner);
        newLevel += SHIFT;
        offsetShift += 1 << newLevel;
      }
      if (offsetShift) {
        newOrigin += offsetShift;
        oldOrigin += offsetShift;
        newCapacity += offsetShift;
        oldCapacity += offsetShift;
      }
      var oldTailOffset = getTailOffset(oldCapacity);
      var newTailOffset = getTailOffset(newCapacity);
      while (newTailOffset >= 1 << newLevel + SHIFT) {
        newRoot = new VNode(newRoot && newRoot.array.length ? [newRoot] : [], owner);
        newLevel += SHIFT;
      }
      var oldTail = list._tail;
      var newTail = newTailOffset < oldTailOffset ? listNodeFor(list, newCapacity - 1) : newTailOffset > oldTailOffset ? new VNode([], owner) : oldTail;
      if (oldTail && newTailOffset > oldTailOffset && newOrigin < oldCapacity && oldTail.array.length) {
        newRoot = editableVNode(newRoot, owner);
        var node = newRoot;
        for (var level = newLevel; level > SHIFT; level -= SHIFT) {
          var idx = oldTailOffset >>> level & MASK;
          node = node.array[idx] = editableVNode(node.array[idx], owner);
        }
        node.array[oldTailOffset >>> SHIFT & MASK] = oldTail;
      }
      if (newCapacity < oldCapacity) {
        newTail = newTail && newTail.removeAfter(owner, 0, newCapacity);
      }
      if (newOrigin >= newTailOffset) {
        newOrigin -= newTailOffset;
        newCapacity -= newTailOffset;
        newLevel = SHIFT;
        newRoot = null;
        newTail = newTail && newTail.removeBefore(owner, 0, newOrigin);
      } else if (newOrigin > oldOrigin || newTailOffset < oldTailOffset) {
        offsetShift = 0;
        while (newRoot) {
          var beginIndex = newOrigin >>> newLevel & MASK;
          if (beginIndex !== newTailOffset >>> newLevel & MASK) {
            break;
          }
          if (beginIndex) {
            offsetShift += (1 << newLevel) * beginIndex;
          }
          newLevel -= SHIFT;
          newRoot = newRoot.array[beginIndex];
        }
        if (newRoot && newOrigin > oldOrigin) {
          newRoot = newRoot.removeBefore(owner, newLevel, newOrigin - offsetShift);
        }
        if (newRoot && newTailOffset < oldTailOffset) {
          newRoot = newRoot.removeAfter(owner, newLevel, newTailOffset - offsetShift);
        }
        if (offsetShift) {
          newOrigin -= offsetShift;
          newCapacity -= offsetShift;
        }
      }
      if (list.__ownerID) {
        list.size = newCapacity - newOrigin;
        list._origin = newOrigin;
        list._capacity = newCapacity;
        list._level = newLevel;
        list._root = newRoot;
        list._tail = newTail;
        list.__hash = void 0;
        list.__altered = true;
        return list;
      }
      return makeList(newOrigin, newCapacity, newLevel, newRoot, newTail);
    }
    function mergeIntoListWith(list, merger, iterables) {
      var iters = [];
      var maxSize = 0;
      for (var ii2 = 0; ii2 < iterables.length; ii2++) {
        var value = iterables[ii2];
        var iter = IndexedIterable(value);
        if (iter.size > maxSize) {
          maxSize = iter.size;
        }
        if (!isIterable(value)) {
          iter = iter.map(function(v) {
            return fromJS2(v);
          });
        }
        iters.push(iter);
      }
      if (maxSize > list.size) {
        list = list.setSize(maxSize);
      }
      return mergeIntoCollectionWith(list, merger, iters);
    }
    function getTailOffset(size) {
      return size < SIZE ? 0 : size - 1 >>> SHIFT << SHIFT;
    }
    createClass(OrderedMap2, Map2);
    function OrderedMap2(value) {
      return value === null || value === void 0 ? emptyOrderedMap() : isOrderedMap(value) ? value : emptyOrderedMap().withMutations(function(map2) {
        var iter = KeyedIterable(value);
        assertNotInfinite(iter.size);
        iter.forEach(function(v, k) {
          return map2.set(k, v);
        });
      });
    }
    OrderedMap2.of = function() {
      return this(arguments);
    };
    OrderedMap2.prototype.toString = function() {
      return this.__toString("OrderedMap {", "}");
    };
    OrderedMap2.prototype.get = function(k, notSetValue) {
      var index = this._map.get(k);
      return index !== void 0 ? this._list.get(index)[1] : notSetValue;
    };
    OrderedMap2.prototype.clear = function() {
      if (this.size === 0) {
        return this;
      }
      if (this.__ownerID) {
        this.size = 0;
        this._map.clear();
        this._list.clear();
        return this;
      }
      return emptyOrderedMap();
    };
    OrderedMap2.prototype.set = function(k, v) {
      return updateOrderedMap(this, k, v);
    };
    OrderedMap2.prototype.remove = function(k) {
      return updateOrderedMap(this, k, NOT_SET);
    };
    OrderedMap2.prototype.wasAltered = function() {
      return this._map.wasAltered() || this._list.wasAltered();
    };
    OrderedMap2.prototype.__iterate = function(fn, reverse) {
      var this$0 = this;
      return this._list.__iterate(function(entry) {
        return entry && fn(entry[1], entry[0], this$0);
      }, reverse);
    };
    OrderedMap2.prototype.__iterator = function(type, reverse) {
      return this._list.fromEntrySeq().__iterator(type, reverse);
    };
    OrderedMap2.prototype.__ensureOwner = function(ownerID) {
      if (ownerID === this.__ownerID) {
        return this;
      }
      var newMap = this._map.__ensureOwner(ownerID);
      var newList = this._list.__ensureOwner(ownerID);
      if (!ownerID) {
        this.__ownerID = ownerID;
        this._map = newMap;
        this._list = newList;
        return this;
      }
      return makeOrderedMap(newMap, newList, ownerID, this.__hash);
    };
    function isOrderedMap(maybeOrderedMap) {
      return isMap2(maybeOrderedMap) && isOrdered(maybeOrderedMap);
    }
    OrderedMap2.isOrderedMap = isOrderedMap;
    OrderedMap2.prototype[IS_ORDERED_SENTINEL] = true;
    OrderedMap2.prototype[DELETE] = OrderedMap2.prototype.remove;
    function makeOrderedMap(map2, list, ownerID, hash2) {
      var omap = Object.create(OrderedMap2.prototype);
      omap.size = map2 ? map2.size : 0;
      omap._map = map2;
      omap._list = list;
      omap.__ownerID = ownerID;
      omap.__hash = hash2;
      return omap;
    }
    var EMPTY_ORDERED_MAP;
    function emptyOrderedMap() {
      return EMPTY_ORDERED_MAP || (EMPTY_ORDERED_MAP = makeOrderedMap(emptyMap(), emptyList()));
    }
    function updateOrderedMap(omap, k, v) {
      var map2 = omap._map;
      var list = omap._list;
      var i = map2.get(k);
      var has = i !== void 0;
      var newMap;
      var newList;
      if (v === NOT_SET) {
        if (!has) {
          return omap;
        }
        if (list.size >= SIZE && list.size >= map2.size * 2) {
          newList = list.filter(function(entry, idx) {
            return entry !== void 0 && i !== idx;
          });
          newMap = newList.toKeyedSeq().map(function(entry) {
            return entry[0];
          }).flip().toMap();
          if (omap.__ownerID) {
            newMap.__ownerID = newList.__ownerID = omap.__ownerID;
          }
        } else {
          newMap = map2.remove(k);
          newList = i === list.size - 1 ? list.pop() : list.set(i, void 0);
        }
      } else {
        if (has) {
          if (v === list.get(i)[1]) {
            return omap;
          }
          newMap = map2;
          newList = list.set(i, [k, v]);
        } else {
          newMap = map2.set(k, list.size);
          newList = list.set(list.size, [k, v]);
        }
      }
      if (omap.__ownerID) {
        omap.size = newMap.size;
        omap._map = newMap;
        omap._list = newList;
        omap.__hash = void 0;
        return omap;
      }
      return makeOrderedMap(newMap, newList);
    }
    createClass(ToKeyedSequence, KeyedSeq);
    function ToKeyedSequence(indexed, useKeys) {
      this._iter = indexed;
      this._useKeys = useKeys;
      this.size = indexed.size;
    }
    ToKeyedSequence.prototype.get = function(key, notSetValue) {
      return this._iter.get(key, notSetValue);
    };
    ToKeyedSequence.prototype.has = function(key) {
      return this._iter.has(key);
    };
    ToKeyedSequence.prototype.valueSeq = function() {
      return this._iter.valueSeq();
    };
    ToKeyedSequence.prototype.reverse = function() {
      var this$0 = this;
      var reversedSequence = reverseFactory(this, true);
      if (!this._useKeys) {
        reversedSequence.valueSeq = function() {
          return this$0._iter.toSeq().reverse();
        };
      }
      return reversedSequence;
    };
    ToKeyedSequence.prototype.map = function(mapper, context) {
      var this$0 = this;
      var mappedSequence = mapFactory(this, mapper, context);
      if (!this._useKeys) {
        mappedSequence.valueSeq = function() {
          return this$0._iter.toSeq().map(mapper, context);
        };
      }
      return mappedSequence;
    };
    ToKeyedSequence.prototype.__iterate = function(fn, reverse) {
      var this$0 = this;
      var ii2;
      return this._iter.__iterate(this._useKeys ? function(v, k) {
        return fn(v, k, this$0);
      } : (ii2 = reverse ? resolveSize(this) : 0, function(v) {
        return fn(v, reverse ? --ii2 : ii2++, this$0);
      }), reverse);
    };
    ToKeyedSequence.prototype.__iterator = function(type, reverse) {
      if (this._useKeys) {
        return this._iter.__iterator(type, reverse);
      }
      var iterator = this._iter.__iterator(ITERATE_VALUES, reverse);
      var ii2 = reverse ? resolveSize(this) : 0;
      return new Iterator(function() {
        var step = iterator.next();
        return step.done ? step : iteratorValue(type, reverse ? --ii2 : ii2++, step.value, step);
      });
    };
    ToKeyedSequence.prototype[IS_ORDERED_SENTINEL] = true;
    createClass(ToIndexedSequence, IndexedSeq);
    function ToIndexedSequence(iter) {
      this._iter = iter;
      this.size = iter.size;
    }
    ToIndexedSequence.prototype.includes = function(value) {
      return this._iter.includes(value);
    };
    ToIndexedSequence.prototype.__iterate = function(fn, reverse) {
      var this$0 = this;
      var iterations = 0;
      return this._iter.__iterate(function(v) {
        return fn(v, iterations++, this$0);
      }, reverse);
    };
    ToIndexedSequence.prototype.__iterator = function(type, reverse) {
      var iterator = this._iter.__iterator(ITERATE_VALUES, reverse);
      var iterations = 0;
      return new Iterator(function() {
        var step = iterator.next();
        return step.done ? step : iteratorValue(type, iterations++, step.value, step);
      });
    };
    createClass(ToSetSequence, SetSeq);
    function ToSetSequence(iter) {
      this._iter = iter;
      this.size = iter.size;
    }
    ToSetSequence.prototype.has = function(key) {
      return this._iter.includes(key);
    };
    ToSetSequence.prototype.__iterate = function(fn, reverse) {
      var this$0 = this;
      return this._iter.__iterate(function(v) {
        return fn(v, v, this$0);
      }, reverse);
    };
    ToSetSequence.prototype.__iterator = function(type, reverse) {
      var iterator = this._iter.__iterator(ITERATE_VALUES, reverse);
      return new Iterator(function() {
        var step = iterator.next();
        return step.done ? step : iteratorValue(type, step.value, step.value, step);
      });
    };
    createClass(FromEntriesSequence, KeyedSeq);
    function FromEntriesSequence(entries) {
      this._iter = entries;
      this.size = entries.size;
    }
    FromEntriesSequence.prototype.entrySeq = function() {
      return this._iter.toSeq();
    };
    FromEntriesSequence.prototype.__iterate = function(fn, reverse) {
      var this$0 = this;
      return this._iter.__iterate(function(entry) {
        if (entry) {
          validateEntry(entry);
          var indexedIterable = isIterable(entry);
          return fn(indexedIterable ? entry.get(1) : entry[1], indexedIterable ? entry.get(0) : entry[0], this$0);
        }
      }, reverse);
    };
    FromEntriesSequence.prototype.__iterator = function(type, reverse) {
      var iterator = this._iter.__iterator(ITERATE_VALUES, reverse);
      return new Iterator(function() {
        while (true) {
          var step = iterator.next();
          if (step.done) {
            return step;
          }
          var entry = step.value;
          if (entry) {
            validateEntry(entry);
            var indexedIterable = isIterable(entry);
            return iteratorValue(type, indexedIterable ? entry.get(0) : entry[0], indexedIterable ? entry.get(1) : entry[1], step);
          }
        }
      });
    };
    ToIndexedSequence.prototype.cacheResult = ToKeyedSequence.prototype.cacheResult = ToSetSequence.prototype.cacheResult = FromEntriesSequence.prototype.cacheResult = cacheResultThrough;
    function flipFactory(iterable) {
      var flipSequence = makeSequence(iterable);
      flipSequence._iter = iterable;
      flipSequence.size = iterable.size;
      flipSequence.flip = function() {
        return iterable;
      };
      flipSequence.reverse = function() {
        var reversedSequence = iterable.reverse.apply(this);
        reversedSequence.flip = function() {
          return iterable.reverse();
        };
        return reversedSequence;
      };
      flipSequence.has = function(key) {
        return iterable.includes(key);
      };
      flipSequence.includes = function(key) {
        return iterable.has(key);
      };
      flipSequence.cacheResult = cacheResultThrough;
      flipSequence.__iterateUncached = function(fn, reverse) {
        var this$0 = this;
        return iterable.__iterate(function(v, k) {
          return fn(k, v, this$0) !== false;
        }, reverse);
      };
      flipSequence.__iteratorUncached = function(type, reverse) {
        if (type === ITERATE_ENTRIES) {
          var iterator = iterable.__iterator(type, reverse);
          return new Iterator(function() {
            var step = iterator.next();
            if (!step.done) {
              var k = step.value[0];
              step.value[0] = step.value[1];
              step.value[1] = k;
            }
            return step;
          });
        }
        return iterable.__iterator(type === ITERATE_VALUES ? ITERATE_KEYS : ITERATE_VALUES, reverse);
      };
      return flipSequence;
    }
    function mapFactory(iterable, mapper, context) {
      var mappedSequence = makeSequence(iterable);
      mappedSequence.size = iterable.size;
      mappedSequence.has = function(key) {
        return iterable.has(key);
      };
      mappedSequence.get = function(key, notSetValue) {
        var v = iterable.get(key, NOT_SET);
        return v === NOT_SET ? notSetValue : mapper.call(context, v, key, iterable);
      };
      mappedSequence.__iterateUncached = function(fn, reverse) {
        var this$0 = this;
        return iterable.__iterate(function(v, k, c) {
          return fn(mapper.call(context, v, k, c), k, this$0) !== false;
        }, reverse);
      };
      mappedSequence.__iteratorUncached = function(type, reverse) {
        var iterator = iterable.__iterator(ITERATE_ENTRIES, reverse);
        return new Iterator(function() {
          var step = iterator.next();
          if (step.done) {
            return step;
          }
          var entry = step.value;
          var key = entry[0];
          return iteratorValue(type, key, mapper.call(context, entry[1], key, iterable), step);
        });
      };
      return mappedSequence;
    }
    function reverseFactory(iterable, useKeys) {
      var reversedSequence = makeSequence(iterable);
      reversedSequence._iter = iterable;
      reversedSequence.size = iterable.size;
      reversedSequence.reverse = function() {
        return iterable;
      };
      if (iterable.flip) {
        reversedSequence.flip = function() {
          var flipSequence = flipFactory(iterable);
          flipSequence.reverse = function() {
            return iterable.flip();
          };
          return flipSequence;
        };
      }
      reversedSequence.get = function(key, notSetValue) {
        return iterable.get(useKeys ? key : -1 - key, notSetValue);
      };
      reversedSequence.has = function(key) {
        return iterable.has(useKeys ? key : -1 - key);
      };
      reversedSequence.includes = function(value) {
        return iterable.includes(value);
      };
      reversedSequence.cacheResult = cacheResultThrough;
      reversedSequence.__iterate = function(fn, reverse) {
        var this$0 = this;
        return iterable.__iterate(function(v, k) {
          return fn(v, k, this$0);
        }, !reverse);
      };
      reversedSequence.__iterator = function(type, reverse) {
        return iterable.__iterator(type, !reverse);
      };
      return reversedSequence;
    }
    function filterFactory(iterable, predicate, context, useKeys) {
      var filterSequence = makeSequence(iterable);
      if (useKeys) {
        filterSequence.has = function(key) {
          var v = iterable.get(key, NOT_SET);
          return v !== NOT_SET && !!predicate.call(context, v, key, iterable);
        };
        filterSequence.get = function(key, notSetValue) {
          var v = iterable.get(key, NOT_SET);
          return v !== NOT_SET && predicate.call(context, v, key, iterable) ? v : notSetValue;
        };
      }
      filterSequence.__iterateUncached = function(fn, reverse) {
        var this$0 = this;
        var iterations = 0;
        iterable.__iterate(function(v, k, c) {
          if (predicate.call(context, v, k, c)) {
            iterations++;
            return fn(v, useKeys ? k : iterations - 1, this$0);
          }
        }, reverse);
        return iterations;
      };
      filterSequence.__iteratorUncached = function(type, reverse) {
        var iterator = iterable.__iterator(ITERATE_ENTRIES, reverse);
        var iterations = 0;
        return new Iterator(function() {
          while (true) {
            var step = iterator.next();
            if (step.done) {
              return step;
            }
            var entry = step.value;
            var key = entry[0];
            var value = entry[1];
            if (predicate.call(context, value, key, iterable)) {
              return iteratorValue(type, useKeys ? key : iterations++, value, step);
            }
          }
        });
      };
      return filterSequence;
    }
    function countByFactory(iterable, grouper, context) {
      var groups = Map2().asMutable();
      iterable.__iterate(function(v, k) {
        groups.update(grouper.call(context, v, k, iterable), 0, function(a) {
          return a + 1;
        });
      });
      return groups.asImmutable();
    }
    function groupByFactory(iterable, grouper, context) {
      var isKeyedIter = isKeyed(iterable);
      var groups = (isOrdered(iterable) ? OrderedMap2() : Map2()).asMutable();
      iterable.__iterate(function(v, k) {
        groups.update(grouper.call(context, v, k, iterable), function(a) {
          return a = a || [], a.push(isKeyedIter ? [k, v] : v), a;
        });
      });
      var coerce = iterableClass(iterable);
      return groups.map(function(arr) {
        return reify(iterable, coerce(arr));
      });
    }
    function sliceFactory(iterable, begin, end, useKeys) {
      var originalSize = iterable.size;
      if (begin !== void 0) {
        begin = begin | 0;
      }
      if (end !== void 0) {
        end = end | 0;
      }
      if (wholeSlice(begin, end, originalSize)) {
        return iterable;
      }
      var resolvedBegin = resolveBegin(begin, originalSize);
      var resolvedEnd = resolveEnd(end, originalSize);
      if (resolvedBegin !== resolvedBegin || resolvedEnd !== resolvedEnd) {
        return sliceFactory(iterable.toSeq().cacheResult(), begin, end, useKeys);
      }
      var resolvedSize = resolvedEnd - resolvedBegin;
      var sliceSize;
      if (resolvedSize === resolvedSize) {
        sliceSize = resolvedSize < 0 ? 0 : resolvedSize;
      }
      var sliceSeq = makeSequence(iterable);
      sliceSeq.size = sliceSize === 0 ? sliceSize : iterable.size && sliceSize || void 0;
      if (!useKeys && isSeq(iterable) && sliceSize >= 0) {
        sliceSeq.get = function(index, notSetValue) {
          index = wrapIndex(this, index);
          return index >= 0 && index < sliceSize ? iterable.get(index + resolvedBegin, notSetValue) : notSetValue;
        };
      }
      sliceSeq.__iterateUncached = function(fn, reverse) {
        var this$0 = this;
        if (sliceSize === 0) {
          return 0;
        }
        if (reverse) {
          return this.cacheResult().__iterate(fn, reverse);
        }
        var skipped = 0;
        var isSkipping = true;
        var iterations = 0;
        iterable.__iterate(function(v, k) {
          if (!(isSkipping && (isSkipping = skipped++ < resolvedBegin))) {
            iterations++;
            return fn(v, useKeys ? k : iterations - 1, this$0) !== false && iterations !== sliceSize;
          }
        });
        return iterations;
      };
      sliceSeq.__iteratorUncached = function(type, reverse) {
        if (sliceSize !== 0 && reverse) {
          return this.cacheResult().__iterator(type, reverse);
        }
        var iterator = sliceSize !== 0 && iterable.__iterator(type, reverse);
        var skipped = 0;
        var iterations = 0;
        return new Iterator(function() {
          while (skipped++ < resolvedBegin) {
            iterator.next();
          }
          if (++iterations > sliceSize) {
            return iteratorDone();
          }
          var step = iterator.next();
          if (useKeys || type === ITERATE_VALUES) {
            return step;
          } else if (type === ITERATE_KEYS) {
            return iteratorValue(type, iterations - 1, void 0, step);
          } else {
            return iteratorValue(type, iterations - 1, step.value[1], step);
          }
        });
      };
      return sliceSeq;
    }
    function takeWhileFactory(iterable, predicate, context) {
      var takeSequence = makeSequence(iterable);
      takeSequence.__iterateUncached = function(fn, reverse) {
        var this$0 = this;
        if (reverse) {
          return this.cacheResult().__iterate(fn, reverse);
        }
        var iterations = 0;
        iterable.__iterate(function(v, k, c) {
          return predicate.call(context, v, k, c) && ++iterations && fn(v, k, this$0);
        });
        return iterations;
      };
      takeSequence.__iteratorUncached = function(type, reverse) {
        var this$0 = this;
        if (reverse) {
          return this.cacheResult().__iterator(type, reverse);
        }
        var iterator = iterable.__iterator(ITERATE_ENTRIES, reverse);
        var iterating = true;
        return new Iterator(function() {
          if (!iterating) {
            return iteratorDone();
          }
          var step = iterator.next();
          if (step.done) {
            return step;
          }
          var entry = step.value;
          var k = entry[0];
          var v = entry[1];
          if (!predicate.call(context, v, k, this$0)) {
            iterating = false;
            return iteratorDone();
          }
          return type === ITERATE_ENTRIES ? step : iteratorValue(type, k, v, step);
        });
      };
      return takeSequence;
    }
    function skipWhileFactory(iterable, predicate, context, useKeys) {
      var skipSequence = makeSequence(iterable);
      skipSequence.__iterateUncached = function(fn, reverse) {
        var this$0 = this;
        if (reverse) {
          return this.cacheResult().__iterate(fn, reverse);
        }
        var isSkipping = true;
        var iterations = 0;
        iterable.__iterate(function(v, k, c) {
          if (!(isSkipping && (isSkipping = predicate.call(context, v, k, c)))) {
            iterations++;
            return fn(v, useKeys ? k : iterations - 1, this$0);
          }
        });
        return iterations;
      };
      skipSequence.__iteratorUncached = function(type, reverse) {
        var this$0 = this;
        if (reverse) {
          return this.cacheResult().__iterator(type, reverse);
        }
        var iterator = iterable.__iterator(ITERATE_ENTRIES, reverse);
        var skipping = true;
        var iterations = 0;
        return new Iterator(function() {
          var step, k, v;
          do {
            step = iterator.next();
            if (step.done) {
              if (useKeys || type === ITERATE_VALUES) {
                return step;
              } else if (type === ITERATE_KEYS) {
                return iteratorValue(type, iterations++, void 0, step);
              } else {
                return iteratorValue(type, iterations++, step.value[1], step);
              }
            }
            var entry = step.value;
            k = entry[0];
            v = entry[1];
            skipping && (skipping = predicate.call(context, v, k, this$0));
          } while (skipping);
          return type === ITERATE_ENTRIES ? step : iteratorValue(type, k, v, step);
        });
      };
      return skipSequence;
    }
    function concatFactory(iterable, values) {
      var isKeyedIterable = isKeyed(iterable);
      var iters = [iterable].concat(values).map(function(v) {
        if (!isIterable(v)) {
          v = isKeyedIterable ? keyedSeqFromValue(v) : indexedSeqFromValue(Array.isArray(v) ? v : [v]);
        } else if (isKeyedIterable) {
          v = KeyedIterable(v);
        }
        return v;
      }).filter(function(v) {
        return v.size !== 0;
      });
      if (iters.length === 0) {
        return iterable;
      }
      if (iters.length === 1) {
        var singleton = iters[0];
        if (singleton === iterable || isKeyedIterable && isKeyed(singleton) || isIndexed(iterable) && isIndexed(singleton)) {
          return singleton;
        }
      }
      var concatSeq = new ArraySeq(iters);
      if (isKeyedIterable) {
        concatSeq = concatSeq.toKeyedSeq();
      } else if (!isIndexed(iterable)) {
        concatSeq = concatSeq.toSetSeq();
      }
      concatSeq = concatSeq.flatten(true);
      concatSeq.size = iters.reduce(function(sum, seq) {
        if (sum !== void 0) {
          var size = seq.size;
          if (size !== void 0) {
            return sum + size;
          }
        }
      }, 0);
      return concatSeq;
    }
    function flattenFactory(iterable, depth, useKeys) {
      var flatSequence = makeSequence(iterable);
      flatSequence.__iterateUncached = function(fn, reverse) {
        var iterations = 0;
        var stopped = false;
        function flatDeep(iter, currentDepth) {
          var this$0 = this;
          iter.__iterate(function(v, k) {
            if ((!depth || currentDepth < depth) && isIterable(v)) {
              flatDeep(v, currentDepth + 1);
            } else if (fn(v, useKeys ? k : iterations++, this$0) === false) {
              stopped = true;
            }
            return !stopped;
          }, reverse);
        }
        flatDeep(iterable, 0);
        return iterations;
      };
      flatSequence.__iteratorUncached = function(type, reverse) {
        var iterator = iterable.__iterator(type, reverse);
        var stack = [];
        var iterations = 0;
        return new Iterator(function() {
          while (iterator) {
            var step = iterator.next();
            if (step.done !== false) {
              iterator = stack.pop();
              continue;
            }
            var v = step.value;
            if (type === ITERATE_ENTRIES) {
              v = v[1];
            }
            if ((!depth || stack.length < depth) && isIterable(v)) {
              stack.push(iterator);
              iterator = v.__iterator(type, reverse);
            } else {
              return useKeys ? step : iteratorValue(type, iterations++, v, step);
            }
          }
          return iteratorDone();
        });
      };
      return flatSequence;
    }
    function flatMapFactory(iterable, mapper, context) {
      var coerce = iterableClass(iterable);
      return iterable.toSeq().map(function(v, k) {
        return coerce(mapper.call(context, v, k, iterable));
      }).flatten(true);
    }
    function interposeFactory(iterable, separator) {
      var interposedSequence = makeSequence(iterable);
      interposedSequence.size = iterable.size && iterable.size * 2 - 1;
      interposedSequence.__iterateUncached = function(fn, reverse) {
        var this$0 = this;
        var iterations = 0;
        iterable.__iterate(function(v, k) {
          return (!iterations || fn(separator, iterations++, this$0) !== false) && fn(v, iterations++, this$0) !== false;
        }, reverse);
        return iterations;
      };
      interposedSequence.__iteratorUncached = function(type, reverse) {
        var iterator = iterable.__iterator(ITERATE_VALUES, reverse);
        var iterations = 0;
        var step;
        return new Iterator(function() {
          if (!step || iterations % 2) {
            step = iterator.next();
            if (step.done) {
              return step;
            }
          }
          return iterations % 2 ? iteratorValue(type, iterations++, separator) : iteratorValue(type, iterations++, step.value, step);
        });
      };
      return interposedSequence;
    }
    function sortFactory(iterable, comparator, mapper) {
      if (!comparator) {
        comparator = defaultComparator;
      }
      var isKeyedIterable = isKeyed(iterable);
      var index = 0;
      var entries = iterable.toSeq().map(function(v, k) {
        return [k, v, index++, mapper ? mapper(v, k, iterable) : v];
      }).toArray();
      entries.sort(function(a, b) {
        return comparator(a[3], b[3]) || a[2] - b[2];
      }).forEach(isKeyedIterable ? function(v, i) {
        entries[i].length = 2;
      } : function(v, i) {
        entries[i] = v[1];
      });
      return isKeyedIterable ? KeyedSeq(entries) : isIndexed(iterable) ? IndexedSeq(entries) : SetSeq(entries);
    }
    function maxFactory(iterable, comparator, mapper) {
      if (!comparator) {
        comparator = defaultComparator;
      }
      if (mapper) {
        var entry = iterable.toSeq().map(function(v, k) {
          return [v, mapper(v, k, iterable)];
        }).reduce(function(a, b) {
          return maxCompare(comparator, a[1], b[1]) ? b : a;
        });
        return entry && entry[0];
      } else {
        return iterable.reduce(function(a, b) {
          return maxCompare(comparator, a, b) ? b : a;
        });
      }
    }
    function maxCompare(comparator, a, b) {
      var comp = comparator(b, a);
      return comp === 0 && b !== a && (b === void 0 || b === null || b !== b) || comp > 0;
    }
    function zipWithFactory(keyIter, zipper, iters) {
      var zipSequence = makeSequence(keyIter);
      zipSequence.size = new ArraySeq(iters).map(function(i) {
        return i.size;
      }).min();
      zipSequence.__iterate = function(fn, reverse) {
        var iterator = this.__iterator(ITERATE_VALUES, reverse);
        var step;
        var iterations = 0;
        while (!(step = iterator.next()).done) {
          if (fn(step.value, iterations++, this) === false) {
            break;
          }
        }
        return iterations;
      };
      zipSequence.__iteratorUncached = function(type, reverse) {
        var iterators = iters.map(function(i) {
          return i = Iterable(i), getIterator(reverse ? i.reverse() : i);
        });
        var iterations = 0;
        var isDone = false;
        return new Iterator(function() {
          var steps;
          if (!isDone) {
            steps = iterators.map(function(i) {
              return i.next();
            });
            isDone = steps.some(function(s) {
              return s.done;
            });
          }
          if (isDone) {
            return iteratorDone();
          }
          return iteratorValue(type, iterations++, zipper.apply(null, steps.map(function(s) {
            return s.value;
          })));
        });
      };
      return zipSequence;
    }
    function reify(iter, seq) {
      return isSeq(iter) ? seq : iter.constructor(seq);
    }
    function validateEntry(entry) {
      if (entry !== Object(entry)) {
        throw new TypeError("Expected [K, V] tuple: " + entry);
      }
    }
    function resolveSize(iter) {
      assertNotInfinite(iter.size);
      return ensureSize(iter);
    }
    function iterableClass(iterable) {
      return isKeyed(iterable) ? KeyedIterable : isIndexed(iterable) ? IndexedIterable : SetIterable;
    }
    function makeSequence(iterable) {
      return Object.create((isKeyed(iterable) ? KeyedSeq : isIndexed(iterable) ? IndexedSeq : SetSeq).prototype);
    }
    function cacheResultThrough() {
      if (this._iter.cacheResult) {
        this._iter.cacheResult();
        this.size = this._iter.size;
        return this;
      } else {
        return Seq.prototype.cacheResult.call(this);
      }
    }
    function defaultComparator(a, b) {
      return a > b ? 1 : a < b ? -1 : 0;
    }
    function forceIterator(keyPath) {
      var iter = getIterator(keyPath);
      if (!iter) {
        if (!isArrayLike2(keyPath)) {
          throw new TypeError("Expected iterable or array-like: " + keyPath);
        }
        iter = getIterator(Iterable(keyPath));
      }
      return iter;
    }
    createClass(Record2, KeyedCollection);
    function Record2(defaultValues, name) {
      var hasInitialized;
      var RecordType = function Record3(values) {
        if (values instanceof RecordType) {
          return values;
        }
        if (!(this instanceof RecordType)) {
          return new RecordType(values);
        }
        if (!hasInitialized) {
          hasInitialized = true;
          var keys2 = Object.keys(defaultValues);
          setProps(RecordTypePrototype, keys2);
          RecordTypePrototype.size = keys2.length;
          RecordTypePrototype._name = name;
          RecordTypePrototype._keys = keys2;
          RecordTypePrototype._defaultValues = defaultValues;
        }
        this._map = Map2(values);
      };
      var RecordTypePrototype = RecordType.prototype = Object.create(RecordPrototype);
      RecordTypePrototype.constructor = RecordType;
      return RecordType;
    }
    Record2.prototype.toString = function() {
      return this.__toString(recordName(this) + " {", "}");
    };
    Record2.prototype.has = function(k) {
      return this._defaultValues.hasOwnProperty(k);
    };
    Record2.prototype.get = function(k, notSetValue) {
      if (!this.has(k)) {
        return notSetValue;
      }
      var defaultVal = this._defaultValues[k];
      return this._map ? this._map.get(k, defaultVal) : defaultVal;
    };
    Record2.prototype.clear = function() {
      if (this.__ownerID) {
        this._map && this._map.clear();
        return this;
      }
      var RecordType = this.constructor;
      return RecordType._empty || (RecordType._empty = makeRecord(this, emptyMap()));
    };
    Record2.prototype.set = function(k, v) {
      if (!this.has(k)) {
        throw new Error('Cannot set unknown key "' + k + '" on ' + recordName(this));
      }
      var newMap = this._map && this._map.set(k, v);
      if (this.__ownerID || newMap === this._map) {
        return this;
      }
      return makeRecord(this, newMap);
    };
    Record2.prototype.remove = function(k) {
      if (!this.has(k)) {
        return this;
      }
      var newMap = this._map && this._map.remove(k);
      if (this.__ownerID || newMap === this._map) {
        return this;
      }
      return makeRecord(this, newMap);
    };
    Record2.prototype.wasAltered = function() {
      return this._map.wasAltered();
    };
    Record2.prototype.__iterator = function(type, reverse) {
      var this$0 = this;
      return KeyedIterable(this._defaultValues).map(function(_, k) {
        return this$0.get(k);
      }).__iterator(type, reverse);
    };
    Record2.prototype.__iterate = function(fn, reverse) {
      var this$0 = this;
      return KeyedIterable(this._defaultValues).map(function(_, k) {
        return this$0.get(k);
      }).__iterate(fn, reverse);
    };
    Record2.prototype.__ensureOwner = function(ownerID) {
      if (ownerID === this.__ownerID) {
        return this;
      }
      var newMap = this._map && this._map.__ensureOwner(ownerID);
      if (!ownerID) {
        this.__ownerID = ownerID;
        this._map = newMap;
        return this;
      }
      return makeRecord(this, newMap, ownerID);
    };
    var RecordPrototype = Record2.prototype;
    RecordPrototype[DELETE] = RecordPrototype.remove;
    RecordPrototype.deleteIn = RecordPrototype.removeIn = MapPrototype.removeIn;
    RecordPrototype.merge = MapPrototype.merge;
    RecordPrototype.mergeWith = MapPrototype.mergeWith;
    RecordPrototype.mergeIn = MapPrototype.mergeIn;
    RecordPrototype.mergeDeep = MapPrototype.mergeDeep;
    RecordPrototype.mergeDeepWith = MapPrototype.mergeDeepWith;
    RecordPrototype.mergeDeepIn = MapPrototype.mergeDeepIn;
    RecordPrototype.setIn = MapPrototype.setIn;
    RecordPrototype.update = MapPrototype.update;
    RecordPrototype.updateIn = MapPrototype.updateIn;
    RecordPrototype.withMutations = MapPrototype.withMutations;
    RecordPrototype.asMutable = MapPrototype.asMutable;
    RecordPrototype.asImmutable = MapPrototype.asImmutable;
    function makeRecord(likeRecord, map2, ownerID) {
      var record = Object.create(Object.getPrototypeOf(likeRecord));
      record._map = map2;
      record.__ownerID = ownerID;
      return record;
    }
    function recordName(record) {
      return record._name || record.constructor.name || "Record";
    }
    function setProps(prototype, names) {
      try {
        names.forEach(setProp.bind(void 0, prototype));
      } catch (error) {
      }
    }
    function setProp(prototype, name) {
      Object.defineProperty(prototype, name, {
        get: function() {
          return this.get(name);
        },
        set: function(value) {
          invariant2(this.__ownerID, "Cannot set on an immutable record.");
          this.set(name, value);
        }
      });
    }
    createClass(Set2, SetCollection);
    function Set2(value) {
      return value === null || value === void 0 ? emptySet() : isSet2(value) && !isOrdered(value) ? value : emptySet().withMutations(function(set) {
        var iter = SetIterable(value);
        assertNotInfinite(iter.size);
        iter.forEach(function(v) {
          return set.add(v);
        });
      });
    }
    Set2.of = function() {
      return this(arguments);
    };
    Set2.fromKeys = function(value) {
      return this(KeyedIterable(value).keySeq());
    };
    Set2.prototype.toString = function() {
      return this.__toString("Set {", "}");
    };
    Set2.prototype.has = function(value) {
      return this._map.has(value);
    };
    Set2.prototype.add = function(value) {
      return updateSet(this, this._map.set(value, true));
    };
    Set2.prototype.remove = function(value) {
      return updateSet(this, this._map.remove(value));
    };
    Set2.prototype.clear = function() {
      return updateSet(this, this._map.clear());
    };
    Set2.prototype.union = function() {
      var iters = SLICE$0.call(arguments, 0);
      iters = iters.filter(function(x) {
        return x.size !== 0;
      });
      if (iters.length === 0) {
        return this;
      }
      if (this.size === 0 && !this.__ownerID && iters.length === 1) {
        return this.constructor(iters[0]);
      }
      return this.withMutations(function(set) {
        for (var ii2 = 0; ii2 < iters.length; ii2++) {
          SetIterable(iters[ii2]).forEach(function(value) {
            return set.add(value);
          });
        }
      });
    };
    Set2.prototype.intersect = function() {
      var iters = SLICE$0.call(arguments, 0);
      if (iters.length === 0) {
        return this;
      }
      iters = iters.map(function(iter) {
        return SetIterable(iter);
      });
      var originalSet = this;
      return this.withMutations(function(set) {
        originalSet.forEach(function(value) {
          if (!iters.every(function(iter) {
            return iter.includes(value);
          })) {
            set.remove(value);
          }
        });
      });
    };
    Set2.prototype.subtract = function() {
      var iters = SLICE$0.call(arguments, 0);
      if (iters.length === 0) {
        return this;
      }
      iters = iters.map(function(iter) {
        return SetIterable(iter);
      });
      var originalSet = this;
      return this.withMutations(function(set) {
        originalSet.forEach(function(value) {
          if (iters.some(function(iter) {
            return iter.includes(value);
          })) {
            set.remove(value);
          }
        });
      });
    };
    Set2.prototype.merge = function() {
      return this.union.apply(this, arguments);
    };
    Set2.prototype.mergeWith = function(merger) {
      var iters = SLICE$0.call(arguments, 1);
      return this.union.apply(this, iters);
    };
    Set2.prototype.sort = function(comparator) {
      return OrderedSet2(sortFactory(this, comparator));
    };
    Set2.prototype.sortBy = function(mapper, comparator) {
      return OrderedSet2(sortFactory(this, comparator, mapper));
    };
    Set2.prototype.wasAltered = function() {
      return this._map.wasAltered();
    };
    Set2.prototype.__iterate = function(fn, reverse) {
      var this$0 = this;
      return this._map.__iterate(function(_, k) {
        return fn(k, k, this$0);
      }, reverse);
    };
    Set2.prototype.__iterator = function(type, reverse) {
      return this._map.map(function(_, k) {
        return k;
      }).__iterator(type, reverse);
    };
    Set2.prototype.__ensureOwner = function(ownerID) {
      if (ownerID === this.__ownerID) {
        return this;
      }
      var newMap = this._map.__ensureOwner(ownerID);
      if (!ownerID) {
        this.__ownerID = ownerID;
        this._map = newMap;
        return this;
      }
      return this.__make(newMap, ownerID);
    };
    function isSet2(maybeSet) {
      return !!(maybeSet && maybeSet[IS_SET_SENTINEL]);
    }
    Set2.isSet = isSet2;
    var IS_SET_SENTINEL = "@@__IMMUTABLE_SET__@@";
    var SetPrototype = Set2.prototype;
    SetPrototype[IS_SET_SENTINEL] = true;
    SetPrototype[DELETE] = SetPrototype.remove;
    SetPrototype.mergeDeep = SetPrototype.merge;
    SetPrototype.mergeDeepWith = SetPrototype.mergeWith;
    SetPrototype.withMutations = MapPrototype.withMutations;
    SetPrototype.asMutable = MapPrototype.asMutable;
    SetPrototype.asImmutable = MapPrototype.asImmutable;
    SetPrototype.__empty = emptySet;
    SetPrototype.__make = makeSet;
    function updateSet(set, newMap) {
      if (set.__ownerID) {
        set.size = newMap.size;
        set._map = newMap;
        return set;
      }
      return newMap === set._map ? set : newMap.size === 0 ? set.__empty() : set.__make(newMap);
    }
    function makeSet(map2, ownerID) {
      var set = Object.create(SetPrototype);
      set.size = map2 ? map2.size : 0;
      set._map = map2;
      set.__ownerID = ownerID;
      return set;
    }
    var EMPTY_SET2;
    function emptySet() {
      return EMPTY_SET2 || (EMPTY_SET2 = makeSet(emptyMap()));
    }
    createClass(OrderedSet2, Set2);
    function OrderedSet2(value) {
      return value === null || value === void 0 ? emptyOrderedSet() : isOrderedSet(value) ? value : emptyOrderedSet().withMutations(function(set) {
        var iter = SetIterable(value);
        assertNotInfinite(iter.size);
        iter.forEach(function(v) {
          return set.add(v);
        });
      });
    }
    OrderedSet2.of = function() {
      return this(arguments);
    };
    OrderedSet2.fromKeys = function(value) {
      return this(KeyedIterable(value).keySeq());
    };
    OrderedSet2.prototype.toString = function() {
      return this.__toString("OrderedSet {", "}");
    };
    function isOrderedSet(maybeOrderedSet) {
      return isSet2(maybeOrderedSet) && isOrdered(maybeOrderedSet);
    }
    OrderedSet2.isOrderedSet = isOrderedSet;
    var OrderedSetPrototype = OrderedSet2.prototype;
    OrderedSetPrototype[IS_ORDERED_SENTINEL] = true;
    OrderedSetPrototype.__empty = emptyOrderedSet;
    OrderedSetPrototype.__make = makeOrderedSet;
    function makeOrderedSet(map2, ownerID) {
      var set = Object.create(OrderedSetPrototype);
      set.size = map2 ? map2.size : 0;
      set._map = map2;
      set.__ownerID = ownerID;
      return set;
    }
    var EMPTY_ORDERED_SET;
    function emptyOrderedSet() {
      return EMPTY_ORDERED_SET || (EMPTY_ORDERED_SET = makeOrderedSet(emptyOrderedMap()));
    }
    createClass(Stack2, IndexedCollection);
    function Stack2(value) {
      return value === null || value === void 0 ? emptyStack() : isStack(value) ? value : emptyStack().unshiftAll(value);
    }
    Stack2.of = function() {
      return this(arguments);
    };
    Stack2.prototype.toString = function() {
      return this.__toString("Stack [", "]");
    };
    Stack2.prototype.get = function(index, notSetValue) {
      var head = this._head;
      index = wrapIndex(this, index);
      while (head && index--) {
        head = head.next;
      }
      return head ? head.value : notSetValue;
    };
    Stack2.prototype.peek = function() {
      return this._head && this._head.value;
    };
    Stack2.prototype.push = function() {
      if (arguments.length === 0) {
        return this;
      }
      var newSize = this.size + arguments.length;
      var head = this._head;
      for (var ii2 = arguments.length - 1; ii2 >= 0; ii2--) {
        head = {
          value: arguments[ii2],
          next: head
        };
      }
      if (this.__ownerID) {
        this.size = newSize;
        this._head = head;
        this.__hash = void 0;
        this.__altered = true;
        return this;
      }
      return makeStack(newSize, head);
    };
    Stack2.prototype.pushAll = function(iter) {
      iter = IndexedIterable(iter);
      if (iter.size === 0) {
        return this;
      }
      assertNotInfinite(iter.size);
      var newSize = this.size;
      var head = this._head;
      iter.reverse().forEach(function(value) {
        newSize++;
        head = {
          value,
          next: head
        };
      });
      if (this.__ownerID) {
        this.size = newSize;
        this._head = head;
        this.__hash = void 0;
        this.__altered = true;
        return this;
      }
      return makeStack(newSize, head);
    };
    Stack2.prototype.pop = function() {
      return this.slice(1);
    };
    Stack2.prototype.unshift = function() {
      return this.push.apply(this, arguments);
    };
    Stack2.prototype.unshiftAll = function(iter) {
      return this.pushAll(iter);
    };
    Stack2.prototype.shift = function() {
      return this.pop.apply(this, arguments);
    };
    Stack2.prototype.clear = function() {
      if (this.size === 0) {
        return this;
      }
      if (this.__ownerID) {
        this.size = 0;
        this._head = void 0;
        this.__hash = void 0;
        this.__altered = true;
        return this;
      }
      return emptyStack();
    };
    Stack2.prototype.slice = function(begin, end) {
      if (wholeSlice(begin, end, this.size)) {
        return this;
      }
      var resolvedBegin = resolveBegin(begin, this.size);
      var resolvedEnd = resolveEnd(end, this.size);
      if (resolvedEnd !== this.size) {
        return IndexedCollection.prototype.slice.call(this, begin, end);
      }
      var newSize = this.size - resolvedBegin;
      var head = this._head;
      while (resolvedBegin--) {
        head = head.next;
      }
      if (this.__ownerID) {
        this.size = newSize;
        this._head = head;
        this.__hash = void 0;
        this.__altered = true;
        return this;
      }
      return makeStack(newSize, head);
    };
    Stack2.prototype.__ensureOwner = function(ownerID) {
      if (ownerID === this.__ownerID) {
        return this;
      }
      if (!ownerID) {
        this.__ownerID = ownerID;
        this.__altered = false;
        return this;
      }
      return makeStack(this.size, this._head, ownerID, this.__hash);
    };
    Stack2.prototype.__iterate = function(fn, reverse) {
      if (reverse) {
        return this.reverse().__iterate(fn);
      }
      var iterations = 0;
      var node = this._head;
      while (node) {
        if (fn(node.value, iterations++, this) === false) {
          break;
        }
        node = node.next;
      }
      return iterations;
    };
    Stack2.prototype.__iterator = function(type, reverse) {
      if (reverse) {
        return this.reverse().__iterator(type);
      }
      var iterations = 0;
      var node = this._head;
      return new Iterator(function() {
        if (node) {
          var value = node.value;
          node = node.next;
          return iteratorValue(type, iterations++, value);
        }
        return iteratorDone();
      });
    };
    function isStack(maybeStack) {
      return !!(maybeStack && maybeStack[IS_STACK_SENTINEL]);
    }
    Stack2.isStack = isStack;
    var IS_STACK_SENTINEL = "@@__IMMUTABLE_STACK__@@";
    var StackPrototype = Stack2.prototype;
    StackPrototype[IS_STACK_SENTINEL] = true;
    StackPrototype.withMutations = MapPrototype.withMutations;
    StackPrototype.asMutable = MapPrototype.asMutable;
    StackPrototype.asImmutable = MapPrototype.asImmutable;
    StackPrototype.wasAltered = MapPrototype.wasAltered;
    function makeStack(size, head, ownerID, hash2) {
      var map2 = Object.create(StackPrototype);
      map2.size = size;
      map2._head = head;
      map2.__ownerID = ownerID;
      map2.__hash = hash2;
      map2.__altered = false;
      return map2;
    }
    var EMPTY_STACK;
    function emptyStack() {
      return EMPTY_STACK || (EMPTY_STACK = makeStack(0));
    }
    function mixin(ctor, methods) {
      var keyCopier = function(key) {
        ctor.prototype[key] = methods[key];
      };
      Object.keys(methods).forEach(keyCopier);
      Object.getOwnPropertySymbols && Object.getOwnPropertySymbols(methods).forEach(keyCopier);
      return ctor;
    }
    Iterable.Iterator = Iterator;
    mixin(Iterable, {
      toArray: function() {
        assertNotInfinite(this.size);
        var array = new Array(this.size || 0);
        this.valueSeq().__iterate(function(v, i) {
          array[i] = v;
        });
        return array;
      },
      toIndexedSeq: function() {
        return new ToIndexedSequence(this);
      },
      toJS: function() {
        return this.toSeq().map(function(value) {
          return value && typeof value.toJS === "function" ? value.toJS() : value;
        }).__toJS();
      },
      toJSON: function() {
        return this.toSeq().map(function(value) {
          return value && typeof value.toJSON === "function" ? value.toJSON() : value;
        }).__toJS();
      },
      toKeyedSeq: function() {
        return new ToKeyedSequence(this, true);
      },
      toMap: function() {
        return Map2(this.toKeyedSeq());
      },
      toObject: function() {
        assertNotInfinite(this.size);
        var object = {};
        this.__iterate(function(v, k) {
          object[k] = v;
        });
        return object;
      },
      toOrderedMap: function() {
        return OrderedMap2(this.toKeyedSeq());
      },
      toOrderedSet: function() {
        return OrderedSet2(isKeyed(this) ? this.valueSeq() : this);
      },
      toSet: function() {
        return Set2(isKeyed(this) ? this.valueSeq() : this);
      },
      toSetSeq: function() {
        return new ToSetSequence(this);
      },
      toSeq: function() {
        return isIndexed(this) ? this.toIndexedSeq() : isKeyed(this) ? this.toKeyedSeq() : this.toSetSeq();
      },
      toStack: function() {
        return Stack2(isKeyed(this) ? this.valueSeq() : this);
      },
      toList: function() {
        return List2(isKeyed(this) ? this.valueSeq() : this);
      },
      toString: function() {
        return "[Iterable]";
      },
      __toString: function(head, tail) {
        if (this.size === 0) {
          return head + tail;
        }
        return head + " " + this.toSeq().map(this.__toStringMapper).join(", ") + " " + tail;
      },
      concat: function() {
        var values = SLICE$0.call(arguments, 0);
        return reify(this, concatFactory(this, values));
      },
      includes: function(searchValue) {
        return this.some(function(value) {
          return is(value, searchValue);
        });
      },
      entries: function() {
        return this.__iterator(ITERATE_ENTRIES);
      },
      every: function(predicate, context) {
        assertNotInfinite(this.size);
        var returnValue = true;
        this.__iterate(function(v, k, c) {
          if (!predicate.call(context, v, k, c)) {
            returnValue = false;
            return false;
          }
        });
        return returnValue;
      },
      filter: function(predicate, context) {
        return reify(this, filterFactory(this, predicate, context, true));
      },
      find: function(predicate, context, notSetValue) {
        var entry = this.findEntry(predicate, context);
        return entry ? entry[1] : notSetValue;
      },
      findEntry: function(predicate, context) {
        var found;
        this.__iterate(function(v, k, c) {
          if (predicate.call(context, v, k, c)) {
            found = [k, v];
            return false;
          }
        });
        return found;
      },
      findLastEntry: function(predicate, context) {
        return this.toSeq().reverse().findEntry(predicate, context);
      },
      forEach: function(sideEffect, context) {
        assertNotInfinite(this.size);
        return this.__iterate(context ? sideEffect.bind(context) : sideEffect);
      },
      join: function(separator) {
        assertNotInfinite(this.size);
        separator = separator !== void 0 ? "" + separator : ",";
        var joined = "";
        var isFirst = true;
        this.__iterate(function(v) {
          isFirst ? isFirst = false : joined += separator;
          joined += v !== null && v !== void 0 ? v.toString() : "";
        });
        return joined;
      },
      keys: function() {
        return this.__iterator(ITERATE_KEYS);
      },
      map: function(mapper, context) {
        return reify(this, mapFactory(this, mapper, context));
      },
      reduce: function(reducer, initialReduction, context) {
        assertNotInfinite(this.size);
        var reduction;
        var useFirst;
        if (arguments.length < 2) {
          useFirst = true;
        } else {
          reduction = initialReduction;
        }
        this.__iterate(function(v, k, c) {
          if (useFirst) {
            useFirst = false;
            reduction = v;
          } else {
            reduction = reducer.call(context, reduction, v, k, c);
          }
        });
        return reduction;
      },
      reduceRight: function(reducer, initialReduction, context) {
        var reversed = this.toKeyedSeq().reverse();
        return reversed.reduce.apply(reversed, arguments);
      },
      reverse: function() {
        return reify(this, reverseFactory(this, true));
      },
      slice: function(begin, end) {
        return reify(this, sliceFactory(this, begin, end, true));
      },
      some: function(predicate, context) {
        return !this.every(not(predicate), context);
      },
      sort: function(comparator) {
        return reify(this, sortFactory(this, comparator));
      },
      values: function() {
        return this.__iterator(ITERATE_VALUES);
      },
      butLast: function() {
        return this.slice(0, -1);
      },
      isEmpty: function() {
        return this.size !== void 0 ? this.size === 0 : !this.some(function() {
          return true;
        });
      },
      count: function(predicate, context) {
        return ensureSize(predicate ? this.toSeq().filter(predicate, context) : this);
      },
      countBy: function(grouper, context) {
        return countByFactory(this, grouper, context);
      },
      equals: function(other) {
        return deepEqual(this, other);
      },
      entrySeq: function() {
        var iterable = this;
        if (iterable._cache) {
          return new ArraySeq(iterable._cache);
        }
        var entriesSequence = iterable.toSeq().map(entryMapper).toIndexedSeq();
        entriesSequence.fromEntrySeq = function() {
          return iterable.toSeq();
        };
        return entriesSequence;
      },
      filterNot: function(predicate, context) {
        return this.filter(not(predicate), context);
      },
      findLast: function(predicate, context, notSetValue) {
        return this.toKeyedSeq().reverse().find(predicate, context, notSetValue);
      },
      first: function() {
        return this.find(returnTrue3);
      },
      flatMap: function(mapper, context) {
        return reify(this, flatMapFactory(this, mapper, context));
      },
      flatten: function(depth) {
        return reify(this, flattenFactory(this, depth, true));
      },
      fromEntrySeq: function() {
        return new FromEntriesSequence(this);
      },
      get: function(searchKey, notSetValue) {
        return this.find(function(_, key) {
          return is(key, searchKey);
        }, void 0, notSetValue);
      },
      getIn: function(searchKeyPath, notSetValue) {
        var nested = this;
        var iter = forceIterator(searchKeyPath);
        var step;
        while (!(step = iter.next()).done) {
          var key = step.value;
          nested = nested && nested.get ? nested.get(key, NOT_SET) : NOT_SET;
          if (nested === NOT_SET) {
            return notSetValue;
          }
        }
        return nested;
      },
      groupBy: function(grouper, context) {
        return groupByFactory(this, grouper, context);
      },
      has: function(searchKey) {
        return this.get(searchKey, NOT_SET) !== NOT_SET;
      },
      hasIn: function(searchKeyPath) {
        return this.getIn(searchKeyPath, NOT_SET) !== NOT_SET;
      },
      isSubset: function(iter) {
        iter = typeof iter.includes === "function" ? iter : Iterable(iter);
        return this.every(function(value) {
          return iter.includes(value);
        });
      },
      isSuperset: function(iter) {
        iter = typeof iter.isSubset === "function" ? iter : Iterable(iter);
        return iter.isSubset(this);
      },
      keySeq: function() {
        return this.toSeq().map(keyMapper).toIndexedSeq();
      },
      last: function() {
        return this.toSeq().reverse().first();
      },
      max: function(comparator) {
        return maxFactory(this, comparator);
      },
      maxBy: function(mapper, comparator) {
        return maxFactory(this, comparator, mapper);
      },
      min: function(comparator) {
        return maxFactory(this, comparator ? neg(comparator) : defaultNegComparator);
      },
      minBy: function(mapper, comparator) {
        return maxFactory(this, comparator ? neg(comparator) : defaultNegComparator, mapper);
      },
      rest: function() {
        return this.slice(1);
      },
      skip: function(amount) {
        return this.slice(Math.max(0, amount));
      },
      skipLast: function(amount) {
        return reify(this, this.toSeq().reverse().skip(amount).reverse());
      },
      skipWhile: function(predicate, context) {
        return reify(this, skipWhileFactory(this, predicate, context, true));
      },
      skipUntil: function(predicate, context) {
        return this.skipWhile(not(predicate), context);
      },
      sortBy: function(mapper, comparator) {
        return reify(this, sortFactory(this, comparator, mapper));
      },
      take: function(amount) {
        return this.slice(0, Math.max(0, amount));
      },
      takeLast: function(amount) {
        return reify(this, this.toSeq().reverse().take(amount).reverse());
      },
      takeWhile: function(predicate, context) {
        return reify(this, takeWhileFactory(this, predicate, context));
      },
      takeUntil: function(predicate, context) {
        return this.takeWhile(not(predicate), context);
      },
      valueSeq: function() {
        return this.toIndexedSeq();
      },
      hashCode: function() {
        return this.__hash || (this.__hash = hashIterable(this));
      }
    });
    var IterablePrototype = Iterable.prototype;
    IterablePrototype[IS_ITERABLE_SENTINEL] = true;
    IterablePrototype[ITERATOR_SYMBOL] = IterablePrototype.values;
    IterablePrototype.__toJS = IterablePrototype.toArray;
    IterablePrototype.__toStringMapper = quoteString;
    IterablePrototype.inspect = IterablePrototype.toSource = function() {
      return this.toString();
    };
    IterablePrototype.chain = IterablePrototype.flatMap;
    IterablePrototype.contains = IterablePrototype.includes;
    (function() {
      try {
        Object.defineProperty(IterablePrototype, "length", {
          get: function() {
            if (!Iterable.noLengthWarning) {
              var stack;
              try {
                throw new Error();
              } catch (error) {
                stack = error.stack;
              }
              if (stack.indexOf("_wrapObject") === -1) {
                console && console.warn && console.warn("iterable.length has been deprecated, use iterable.size or iterable.count(). This warning will become a silent error in a future version. " + stack);
                return this.size;
              }
            }
          }
        });
      } catch (e) {
      }
    })();
    mixin(KeyedIterable, {
      flip: function() {
        return reify(this, flipFactory(this));
      },
      findKey: function(predicate, context) {
        var entry = this.findEntry(predicate, context);
        return entry && entry[0];
      },
      findLastKey: function(predicate, context) {
        return this.toSeq().reverse().findKey(predicate, context);
      },
      keyOf: function(searchValue) {
        return this.findKey(function(value) {
          return is(value, searchValue);
        });
      },
      lastKeyOf: function(searchValue) {
        return this.findLastKey(function(value) {
          return is(value, searchValue);
        });
      },
      mapEntries: function(mapper, context) {
        var this$0 = this;
        var iterations = 0;
        return reify(this, this.toSeq().map(function(v, k) {
          return mapper.call(context, [k, v], iterations++, this$0);
        }).fromEntrySeq());
      },
      mapKeys: function(mapper, context) {
        var this$0 = this;
        return reify(this, this.toSeq().flip().map(function(k, v) {
          return mapper.call(context, k, v, this$0);
        }).flip());
      }
    });
    var KeyedIterablePrototype = KeyedIterable.prototype;
    KeyedIterablePrototype[IS_KEYED_SENTINEL] = true;
    KeyedIterablePrototype[ITERATOR_SYMBOL] = IterablePrototype.entries;
    KeyedIterablePrototype.__toJS = IterablePrototype.toObject;
    KeyedIterablePrototype.__toStringMapper = function(v, k) {
      return JSON.stringify(k) + ": " + quoteString(v);
    };
    mixin(IndexedIterable, {
      toKeyedSeq: function() {
        return new ToKeyedSequence(this, false);
      },
      filter: function(predicate, context) {
        return reify(this, filterFactory(this, predicate, context, false));
      },
      findIndex: function(predicate, context) {
        var entry = this.findEntry(predicate, context);
        return entry ? entry[0] : -1;
      },
      indexOf: function(searchValue) {
        var key = this.toKeyedSeq().keyOf(searchValue);
        return key === void 0 ? -1 : key;
      },
      lastIndexOf: function(searchValue) {
        var key = this.toKeyedSeq().reverse().keyOf(searchValue);
        return key === void 0 ? -1 : key;
      },
      reverse: function() {
        return reify(this, reverseFactory(this, false));
      },
      slice: function(begin, end) {
        return reify(this, sliceFactory(this, begin, end, false));
      },
      splice: function(index, removeNum) {
        var numArgs = arguments.length;
        removeNum = Math.max(removeNum | 0, 0);
        if (numArgs === 0 || numArgs === 2 && !removeNum) {
          return this;
        }
        index = resolveBegin(index, index < 0 ? this.count() : this.size);
        var spliced = this.slice(0, index);
        return reify(this, numArgs === 1 ? spliced : spliced.concat(arrCopy(arguments, 2), this.slice(index + removeNum)));
      },
      findLastIndex: function(predicate, context) {
        var key = this.toKeyedSeq().findLastKey(predicate, context);
        return key === void 0 ? -1 : key;
      },
      first: function() {
        return this.get(0);
      },
      flatten: function(depth) {
        return reify(this, flattenFactory(this, depth, false));
      },
      get: function(index, notSetValue) {
        index = wrapIndex(this, index);
        return index < 0 || (this.size === Infinity || this.size !== void 0 && index > this.size) ? notSetValue : this.find(function(_, key) {
          return key === index;
        }, void 0, notSetValue);
      },
      has: function(index) {
        index = wrapIndex(this, index);
        return index >= 0 && (this.size !== void 0 ? this.size === Infinity || index < this.size : this.indexOf(index) !== -1);
      },
      interpose: function(separator) {
        return reify(this, interposeFactory(this, separator));
      },
      interleave: function() {
        var iterables = [this].concat(arrCopy(arguments));
        var zipped = zipWithFactory(this.toSeq(), IndexedSeq.of, iterables);
        var interleaved = zipped.flatten(true);
        if (zipped.size) {
          interleaved.size = zipped.size * iterables.length;
        }
        return reify(this, interleaved);
      },
      last: function() {
        return this.get(-1);
      },
      skipWhile: function(predicate, context) {
        return reify(this, skipWhileFactory(this, predicate, context, false));
      },
      zip: function() {
        var iterables = [this].concat(arrCopy(arguments));
        return reify(this, zipWithFactory(this, defaultZipper, iterables));
      },
      zipWith: function(zipper) {
        var iterables = arrCopy(arguments);
        iterables[0] = this;
        return reify(this, zipWithFactory(this, zipper, iterables));
      }
    });
    IndexedIterable.prototype[IS_INDEXED_SENTINEL] = true;
    IndexedIterable.prototype[IS_ORDERED_SENTINEL] = true;
    mixin(SetIterable, {
      get: function(value, notSetValue) {
        return this.has(value) ? value : notSetValue;
      },
      includes: function(value) {
        return this.has(value);
      },
      keySeq: function() {
        return this.valueSeq();
      }
    });
    SetIterable.prototype.has = IterablePrototype.includes;
    mixin(KeyedSeq, KeyedIterable.prototype);
    mixin(IndexedSeq, IndexedIterable.prototype);
    mixin(SetSeq, SetIterable.prototype);
    mixin(KeyedCollection, KeyedIterable.prototype);
    mixin(IndexedCollection, IndexedIterable.prototype);
    mixin(SetCollection, SetIterable.prototype);
    function keyMapper(v, k) {
      return k;
    }
    function entryMapper(v, k) {
      return [k, v];
    }
    function not(predicate) {
      return function() {
        return !predicate.apply(this, arguments);
      };
    }
    function neg(predicate) {
      return function() {
        return -predicate.apply(this, arguments);
      };
    }
    function quoteString(value) {
      return typeof value === "string" ? JSON.stringify(value) : value;
    }
    function defaultZipper() {
      return arrCopy(arguments);
    }
    function defaultNegComparator(a, b) {
      return a < b ? 1 : a > b ? -1 : 0;
    }
    function hashIterable(iterable) {
      if (iterable.size === Infinity) {
        return 0;
      }
      var ordered = isOrdered(iterable);
      var keyed = isKeyed(iterable);
      var h = ordered ? 1 : 0;
      var size = iterable.__iterate(keyed ? ordered ? function(v, k) {
        h = 31 * h + hashMerge(hash(v), hash(k)) | 0;
      } : function(v, k) {
        h = h + hashMerge(hash(v), hash(k)) | 0;
      } : ordered ? function(v) {
        h = 31 * h + hash(v) | 0;
      } : function(v) {
        h = h + hash(v) | 0;
      });
      return murmurHashOfSize(size, h);
    }
    function murmurHashOfSize(size, h) {
      h = imul(h, 3432918353);
      h = imul(h << 15 | h >>> -15, 461845907);
      h = imul(h << 13 | h >>> -13, 5);
      h = (h + 3864292196 | 0) ^ size;
      h = imul(h ^ h >>> 16, 2246822507);
      h = imul(h ^ h >>> 13, 3266489909);
      h = smi(h ^ h >>> 16);
      return h;
    }
    function hashMerge(a, b) {
      return a ^ b + 2654435769 + (a << 6) + (a >> 2) | 0;
    }
    var Immutable2 = {
      Iterable,
      Seq,
      Collection,
      Map: Map2,
      OrderedMap: OrderedMap2,
      List: List2,
      Stack: Stack2,
      Set: Set2,
      OrderedSet: OrderedSet2,
      Record: Record2,
      Range,
      Repeat: Repeat2,
      is,
      fromJS: fromJS2
    };
    return Immutable2;
  });
})(immutable);
var Immutable$q = immutable.exports;
var OrderedMap$6 = Immutable$q.OrderedMap;
var BlockMapBuilder$5 = {
  createFromArray: function createFromArray(blocks) {
    return OrderedMap$6(blocks.map(function(block) {
      return [block.getKey(), block];
    }));
  }
};
var BlockMapBuilder_1 = BlockMapBuilder$5;
function _inheritsLoose$f(subClass, superClass) {
  subClass.prototype = Object.create(superClass.prototype);
  subClass.prototype.constructor = subClass;
  subClass.__proto__ = superClass;
}
var _require$6 = immutable.exports, Map$c = _require$6.Map, OrderedSet$6 = _require$6.OrderedSet, Record$7 = _require$6.Record;
var EMPTY_SET$3 = OrderedSet$6();
var defaultRecord$5 = {
  style: EMPTY_SET$3,
  entity: null
};
var CharacterMetadataRecord = Record$7(defaultRecord$5);
var CharacterMetadata$c = /* @__PURE__ */ function(_CharacterMetadataRec) {
  _inheritsLoose$f(CharacterMetadata2, _CharacterMetadataRec);
  function CharacterMetadata2() {
    return _CharacterMetadataRec.apply(this, arguments) || this;
  }
  var _proto = CharacterMetadata2.prototype;
  _proto.getStyle = function getStyle() {
    return this.get("style");
  };
  _proto.getEntity = function getEntity() {
    return this.get("entity");
  };
  _proto.hasStyle = function hasStyle(style) {
    return this.getStyle().includes(style);
  };
  CharacterMetadata2.applyStyle = function applyStyle(record, style) {
    var withStyle = record.set("style", record.getStyle().add(style));
    return CharacterMetadata2.create(withStyle);
  };
  CharacterMetadata2.removeStyle = function removeStyle(record, style) {
    var withoutStyle = record.set("style", record.getStyle().remove(style));
    return CharacterMetadata2.create(withoutStyle);
  };
  CharacterMetadata2.applyEntity = function applyEntity2(record, entityKey) {
    var withEntity = record.getEntity() === entityKey ? record : record.set("entity", entityKey);
    return CharacterMetadata2.create(withEntity);
  };
  CharacterMetadata2.create = function create2(config) {
    if (!config) {
      return EMPTY;
    }
    var defaultConfig = {
      style: EMPTY_SET$3,
      entity: null
    };
    var configMap = Map$c(defaultConfig).merge(config);
    var existing = pool.get(configMap);
    if (existing) {
      return existing;
    }
    var newCharacter = new CharacterMetadata2(configMap);
    pool = pool.set(configMap, newCharacter);
    return newCharacter;
  };
  CharacterMetadata2.fromJS = function fromJS2(_ref) {
    var style = _ref.style, entity = _ref.entity;
    return new CharacterMetadata2({
      style: Array.isArray(style) ? OrderedSet$6(style) : style,
      entity: Array.isArray(entity) ? OrderedSet$6(entity) : entity
    });
  };
  return CharacterMetadata2;
}(CharacterMetadataRecord);
var EMPTY = new CharacterMetadata$c();
var pool = Map$c([[Map$c(defaultRecord$5), EMPTY]]);
CharacterMetadata$c.EMPTY = EMPTY;
var CharacterMetadata_1 = CharacterMetadata$c;
function findRangesImmutable$5(haystack, areEqualFn, filterFn, foundFn) {
  if (!haystack.size) {
    return;
  }
  var cursor = 0;
  haystack.reduce(function(value, nextValue, nextIndex) {
    if (!areEqualFn(value, nextValue)) {
      if (filterFn(value)) {
        foundFn(cursor, nextIndex);
      }
      cursor = nextIndex;
    }
    return nextValue;
  });
  filterFn(haystack.last()) && foundFn(cursor, haystack.count());
}
var findRangesImmutable_1 = findRangesImmutable$5;
function _inheritsLoose$e(subClass, superClass) {
  subClass.prototype = Object.create(superClass.prototype);
  subClass.prototype.constructor = subClass;
  subClass.__proto__ = superClass;
}
var CharacterMetadata$b = CharacterMetadata_1;
var findRangesImmutable$4 = findRangesImmutable_1;
var Immutable$p = immutable.exports;
var List$d = Immutable$p.List, Map$b = Immutable$p.Map, OrderedSet$5 = Immutable$p.OrderedSet, Record$6 = Immutable$p.Record, Repeat$6 = Immutable$p.Repeat;
var EMPTY_SET$2 = OrderedSet$5();
var defaultRecord$4 = {
  key: "",
  type: "unstyled",
  text: "",
  characterList: List$d(),
  depth: 0,
  data: Map$b()
};
var ContentBlockRecord$2 = Record$6(defaultRecord$4);
var decorateCharacterList$1 = function decorateCharacterList(config) {
  if (!config) {
    return config;
  }
  var characterList = config.characterList, text = config.text;
  if (text && !characterList) {
    config.characterList = List$d(Repeat$6(CharacterMetadata$b.EMPTY, text.length));
  }
  return config;
};
var ContentBlock$7 = /* @__PURE__ */ function(_ContentBlockRecord) {
  _inheritsLoose$e(ContentBlock2, _ContentBlockRecord);
  function ContentBlock2(config) {
    return _ContentBlockRecord.call(this, decorateCharacterList$1(config)) || this;
  }
  var _proto = ContentBlock2.prototype;
  _proto.getKey = function getKey() {
    return this.get("key");
  };
  _proto.getType = function getType() {
    return this.get("type");
  };
  _proto.getText = function getText() {
    return this.get("text");
  };
  _proto.getCharacterList = function getCharacterList() {
    return this.get("characterList");
  };
  _proto.getLength = function getLength() {
    return this.getText().length;
  };
  _proto.getDepth = function getDepth() {
    return this.get("depth");
  };
  _proto.getData = function getData() {
    return this.get("data");
  };
  _proto.getInlineStyleAt = function getInlineStyleAt(offset) {
    var character = this.getCharacterList().get(offset);
    return character ? character.getStyle() : EMPTY_SET$2;
  };
  _proto.getEntityAt = function getEntityAt(offset) {
    var character = this.getCharacterList().get(offset);
    return character ? character.getEntity() : null;
  };
  _proto.findStyleRanges = function findStyleRanges(filterFn, callback) {
    findRangesImmutable$4(this.getCharacterList(), haveEqualStyle$1, filterFn, callback);
  };
  _proto.findEntityRanges = function findEntityRanges(filterFn, callback) {
    findRangesImmutable$4(this.getCharacterList(), haveEqualEntity$1, filterFn, callback);
  };
  return ContentBlock2;
}(ContentBlockRecord$2);
function haveEqualStyle$1(charA, charB) {
  return charA.getStyle() === charB.getStyle();
}
function haveEqualEntity$1(charA, charB) {
  return charA.getEntity() === charB.getEntity();
}
var ContentBlock_1 = ContentBlock$7;
function _inheritsLoose$d(subClass, superClass) {
  subClass.prototype = Object.create(superClass.prototype);
  subClass.prototype.constructor = subClass;
  subClass.__proto__ = superClass;
}
var CharacterMetadata$a = CharacterMetadata_1;
var findRangesImmutable$3 = findRangesImmutable_1;
var Immutable$o = immutable.exports;
var List$c = Immutable$o.List, Map$a = Immutable$o.Map, OrderedSet$4 = Immutable$o.OrderedSet, Record$5 = Immutable$o.Record, Repeat$5 = Immutable$o.Repeat;
var EMPTY_SET$1 = OrderedSet$4();
var defaultRecord$3 = {
  parent: null,
  characterList: List$c(),
  data: Map$a(),
  depth: 0,
  key: "",
  text: "",
  type: "unstyled",
  children: List$c(),
  prevSibling: null,
  nextSibling: null
};
var haveEqualStyle = function haveEqualStyle2(charA, charB) {
  return charA.getStyle() === charB.getStyle();
};
var haveEqualEntity = function haveEqualEntity2(charA, charB) {
  return charA.getEntity() === charB.getEntity();
};
var decorateCharacterList2 = function decorateCharacterList3(config) {
  if (!config) {
    return config;
  }
  var characterList = config.characterList, text = config.text;
  if (text && !characterList) {
    config.characterList = List$c(Repeat$5(CharacterMetadata$a.EMPTY, text.length));
  }
  return config;
};
var ContentBlockNode$c = /* @__PURE__ */ function(_ref) {
  _inheritsLoose$d(ContentBlockNode2, _ref);
  function ContentBlockNode2() {
    var props = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : defaultRecord$3;
    return _ref.call(this, decorateCharacterList2(props)) || this;
  }
  var _proto = ContentBlockNode2.prototype;
  _proto.getKey = function getKey() {
    return this.get("key");
  };
  _proto.getType = function getType() {
    return this.get("type");
  };
  _proto.getText = function getText() {
    return this.get("text");
  };
  _proto.getCharacterList = function getCharacterList() {
    return this.get("characterList");
  };
  _proto.getLength = function getLength() {
    return this.getText().length;
  };
  _proto.getDepth = function getDepth() {
    return this.get("depth");
  };
  _proto.getData = function getData() {
    return this.get("data");
  };
  _proto.getInlineStyleAt = function getInlineStyleAt(offset) {
    var character = this.getCharacterList().get(offset);
    return character ? character.getStyle() : EMPTY_SET$1;
  };
  _proto.getEntityAt = function getEntityAt(offset) {
    var character = this.getCharacterList().get(offset);
    return character ? character.getEntity() : null;
  };
  _proto.getChildKeys = function getChildKeys() {
    return this.get("children");
  };
  _proto.getParentKey = function getParentKey() {
    return this.get("parent");
  };
  _proto.getPrevSiblingKey = function getPrevSiblingKey() {
    return this.get("prevSibling");
  };
  _proto.getNextSiblingKey = function getNextSiblingKey() {
    return this.get("nextSibling");
  };
  _proto.findStyleRanges = function findStyleRanges(filterFn, callback) {
    findRangesImmutable$3(this.getCharacterList(), haveEqualStyle, filterFn, callback);
  };
  _proto.findEntityRanges = function findEntityRanges(filterFn, callback) {
    findRangesImmutable$3(this.getCharacterList(), haveEqualEntity, filterFn, callback);
  };
  return ContentBlockNode2;
}(Record$5(defaultRecord$3));
var ContentBlockNode_1 = ContentBlockNode$c;
var CharacterMetadata$9 = CharacterMetadata_1;
var _require$5 = immutable.exports, Map$9 = _require$5.Map;
var ContentStateInlineStyle$1 = {
  add: function add(contentState, selectionState, inlineStyle) {
    return modifyInlineStyle(contentState, selectionState, inlineStyle, true);
  },
  remove: function remove(contentState, selectionState, inlineStyle) {
    return modifyInlineStyle(contentState, selectionState, inlineStyle, false);
  }
};
function modifyInlineStyle(contentState, selectionState, inlineStyle, addOrRemove) {
  var blockMap = contentState.getBlockMap();
  var startKey = selectionState.getStartKey();
  var startOffset = selectionState.getStartOffset();
  var endKey = selectionState.getEndKey();
  var endOffset = selectionState.getEndOffset();
  var newBlocks = blockMap.skipUntil(function(_, k) {
    return k === startKey;
  }).takeUntil(function(_, k) {
    return k === endKey;
  }).concat(Map$9([[endKey, blockMap.get(endKey)]])).map(function(block, blockKey) {
    var sliceStart;
    var sliceEnd;
    if (startKey === endKey) {
      sliceStart = startOffset;
      sliceEnd = endOffset;
    } else {
      sliceStart = blockKey === startKey ? startOffset : 0;
      sliceEnd = blockKey === endKey ? endOffset : block.getLength();
    }
    var chars = block.getCharacterList();
    var current;
    while (sliceStart < sliceEnd) {
      current = chars.get(sliceStart);
      chars = chars.set(sliceStart, addOrRemove ? CharacterMetadata$9.applyStyle(current, inlineStyle) : CharacterMetadata$9.removeStyle(current, inlineStyle));
      sliceStart++;
    }
    return block.set("characterList", chars);
  });
  return contentState.merge({
    blockMap: blockMap.merge(newBlocks),
    selectionBefore: selectionState,
    selectionAfter: selectionState
  });
}
var ContentStateInlineStyle_1 = ContentStateInlineStyle$1;
var CharacterMetadata$8 = CharacterMetadata_1;
function applyEntityToContentBlock$1(contentBlock, startArg, end, entityKey) {
  var start = startArg;
  var characterList = contentBlock.getCharacterList();
  while (start < end) {
    characterList = characterList.set(start, CharacterMetadata$8.applyEntity(characterList.get(start), entityKey));
    start++;
  }
  return contentBlock.set("characterList", characterList);
}
var applyEntityToContentBlock_1 = applyEntityToContentBlock$1;
var applyEntityToContentBlock = applyEntityToContentBlock_1;
var Immutable$n = immutable.exports;
function applyEntityToContentState$1(contentState, selectionState, entityKey) {
  var blockMap = contentState.getBlockMap();
  var startKey = selectionState.getStartKey();
  var startOffset = selectionState.getStartOffset();
  var endKey = selectionState.getEndKey();
  var endOffset = selectionState.getEndOffset();
  var newBlocks = blockMap.skipUntil(function(_, k) {
    return k === startKey;
  }).takeUntil(function(_, k) {
    return k === endKey;
  }).toOrderedMap().merge(Immutable$n.OrderedMap([[endKey, blockMap.get(endKey)]])).map(function(block, blockKey) {
    var sliceStart = blockKey === startKey ? startOffset : 0;
    var sliceEnd = blockKey === endKey ? endOffset : block.getLength();
    return applyEntityToContentBlock(block, sliceStart, sliceEnd, entityKey);
  });
  return contentState.merge({
    blockMap: blockMap.merge(newBlocks),
    selectionBefore: selectionState,
    selectionAfter: selectionState
  });
}
var applyEntityToContentState_1 = applyEntityToContentState$1;
var DraftEntitySegments$1 = {
  getRemovalRange: function getRemovalRange(selectionStart, selectionEnd, text, entityStart, direction) {
    var segments = text.split(" ");
    segments = segments.map(function(segment2, ii2) {
      if (direction === "forward") {
        if (ii2 > 0) {
          return " " + segment2;
        }
      } else if (ii2 < segments.length - 1) {
        return segment2 + " ";
      }
      return segment2;
    });
    var segmentStart = entityStart;
    var segmentEnd;
    var segment;
    var removalStart = null;
    var removalEnd = null;
    for (var jj2 = 0; jj2 < segments.length; jj2++) {
      segment = segments[jj2];
      segmentEnd = segmentStart + segment.length;
      if (selectionStart < segmentEnd && segmentStart < selectionEnd) {
        if (removalStart !== null) {
          removalEnd = segmentEnd;
        } else {
          removalStart = segmentStart;
          removalEnd = segmentEnd;
        }
      } else if (removalStart !== null) {
        break;
      }
      segmentStart = segmentEnd;
    }
    var entityEnd = entityStart + text.length;
    var atStart = removalStart === entityStart;
    var atEnd = removalEnd === entityEnd;
    if (!atStart && atEnd || atStart && !atEnd) {
      if (direction === "forward") {
        if (removalEnd !== entityEnd) {
          removalEnd++;
        }
      } else if (removalStart !== entityStart) {
        removalStart--;
      }
    }
    return {
      start: removalStart,
      end: removalEnd
    };
  }
};
var DraftEntitySegments_1 = DraftEntitySegments$1;
function invariant$v(condition, format) {
  for (var _len = arguments.length, args = new Array(_len > 2 ? _len - 2 : 0), _key = 2; _key < _len; _key++) {
    args[_key - 2] = arguments[_key];
  }
  if (!condition) {
    var error;
    if (format === void 0) {
      error = new Error("Minified exception occurred; use the non-minified dev environment for the full error message and additional helpful warnings.");
    } else {
      var argIndex = 0;
      error = new Error(format.replace(/%s/g, function() {
        return String(args[argIndex++]);
      }));
      error.name = "Invariant Violation";
    }
    error.framesToPop = 1;
    throw error;
  }
}
var invariant_1 = invariant$v;
var invariant$u = invariant_1;
function getRangesForDraftEntity$1(block, key) {
  var ranges = [];
  block.findEntityRanges(function(c) {
    return c.getEntity() === key;
  }, function(start, end) {
    ranges.push({
      start,
      end
    });
  });
  !!!ranges.length ? invariant$u(false) : void 0;
  return ranges;
}
var getRangesForDraftEntity_1 = getRangesForDraftEntity$1;
var DraftEntitySegments = DraftEntitySegments_1;
var getRangesForDraftEntity = getRangesForDraftEntity_1;
var invariant$t = invariant_1;
function getCharacterRemovalRange$1(entityMap, startBlock, endBlock, selectionState, direction) {
  var start = selectionState.getStartOffset();
  var end = selectionState.getEndOffset();
  var startEntityKey = startBlock.getEntityAt(start);
  var endEntityKey = endBlock.getEntityAt(end - 1);
  if (!startEntityKey && !endEntityKey) {
    return selectionState;
  }
  var newSelectionState = selectionState;
  if (startEntityKey && startEntityKey === endEntityKey) {
    newSelectionState = getEntityRemovalRange(entityMap, startBlock, newSelectionState, direction, startEntityKey, true, true);
  } else if (startEntityKey && endEntityKey) {
    var startSelectionState = getEntityRemovalRange(entityMap, startBlock, newSelectionState, direction, startEntityKey, false, true);
    var endSelectionState = getEntityRemovalRange(entityMap, endBlock, newSelectionState, direction, endEntityKey, false, false);
    newSelectionState = newSelectionState.merge({
      anchorOffset: startSelectionState.getAnchorOffset(),
      focusOffset: endSelectionState.getFocusOffset(),
      isBackward: false
    });
  } else if (startEntityKey) {
    var _startSelectionState = getEntityRemovalRange(entityMap, startBlock, newSelectionState, direction, startEntityKey, false, true);
    newSelectionState = newSelectionState.merge({
      anchorOffset: _startSelectionState.getStartOffset(),
      isBackward: false
    });
  } else if (endEntityKey) {
    var _endSelectionState = getEntityRemovalRange(entityMap, endBlock, newSelectionState, direction, endEntityKey, false, false);
    newSelectionState = newSelectionState.merge({
      focusOffset: _endSelectionState.getEndOffset(),
      isBackward: false
    });
  }
  return newSelectionState;
}
function getEntityRemovalRange(entityMap, block, selectionState, direction, entityKey, isEntireSelectionWithinEntity, isEntityAtStart) {
  var start = selectionState.getStartOffset();
  var end = selectionState.getEndOffset();
  var entity = entityMap.__get(entityKey);
  var mutability = entity.getMutability();
  var sideToConsider = isEntityAtStart ? start : end;
  if (mutability === "MUTABLE") {
    return selectionState;
  }
  var entityRanges = getRangesForDraftEntity(block, entityKey).filter(function(range) {
    return sideToConsider <= range.end && sideToConsider >= range.start;
  });
  !(entityRanges.length == 1) ? invariant$t(false) : void 0;
  var entityRange = entityRanges[0];
  if (mutability === "IMMUTABLE") {
    return selectionState.merge({
      anchorOffset: entityRange.start,
      focusOffset: entityRange.end,
      isBackward: false
    });
  }
  if (!isEntireSelectionWithinEntity) {
    if (isEntityAtStart) {
      end = entityRange.end;
    } else {
      start = entityRange.start;
    }
  }
  var removalRange = DraftEntitySegments.getRemovalRange(start, end, block.getText().slice(entityRange.start, entityRange.end), entityRange.start, direction);
  return selectionState.merge({
    anchorOffset: removalRange.start,
    focusOffset: removalRange.end,
    isBackward: false
  });
}
var getCharacterRemovalRange_1 = getCharacterRemovalRange$1;
var seenKeys = {};
var MULTIPLIER = Math.pow(2, 24);
function generateRandomKey$a() {
  var key;
  while (key === void 0 || seenKeys.hasOwnProperty(key) || !isNaN(+key)) {
    key = Math.floor(Math.random() * MULTIPLIER).toString(32);
  }
  seenKeys[key] = true;
  return key;
}
var generateRandomKey_1 = generateRandomKey$a;
var ContentBlockNode$b = ContentBlockNode_1;
var generateRandomKey$9 = generateRandomKey_1;
var Immutable$m = immutable.exports;
var OrderedMap$5 = Immutable$m.OrderedMap;
var randomizeContentBlockNodeKeys = function randomizeContentBlockNodeKeys2(blockMap) {
  var newKeysRef = {};
  var lastRootBlock;
  return OrderedMap$5(blockMap.withMutations(function(blockMapState) {
    blockMapState.forEach(function(block, index) {
      var oldKey = block.getKey();
      var nextKey = block.getNextSiblingKey();
      var prevKey = block.getPrevSiblingKey();
      var childrenKeys = block.getChildKeys();
      var parentKey = block.getParentKey();
      var key = generateRandomKey$9();
      newKeysRef[oldKey] = key;
      if (nextKey) {
        var nextBlock = blockMapState.get(nextKey);
        if (nextBlock) {
          blockMapState.setIn([nextKey, "prevSibling"], key);
        } else {
          blockMapState.setIn([oldKey, "nextSibling"], null);
        }
      }
      if (prevKey) {
        var prevBlock = blockMapState.get(prevKey);
        if (prevBlock) {
          blockMapState.setIn([prevKey, "nextSibling"], key);
        } else {
          blockMapState.setIn([oldKey, "prevSibling"], null);
        }
      }
      if (parentKey && blockMapState.get(parentKey)) {
        var parentBlock = blockMapState.get(parentKey);
        var parentChildrenList = parentBlock.getChildKeys();
        blockMapState.setIn([parentKey, "children"], parentChildrenList.set(parentChildrenList.indexOf(block.getKey()), key));
      } else {
        blockMapState.setIn([oldKey, "parent"], null);
        if (lastRootBlock) {
          blockMapState.setIn([lastRootBlock.getKey(), "nextSibling"], key);
          blockMapState.setIn([oldKey, "prevSibling"], newKeysRef[lastRootBlock.getKey()]);
        }
        lastRootBlock = blockMapState.get(oldKey);
      }
      childrenKeys.forEach(function(childKey) {
        var childBlock = blockMapState.get(childKey);
        if (childBlock) {
          blockMapState.setIn([childKey, "parent"], key);
        } else {
          blockMapState.setIn([oldKey, "children"], block.getChildKeys().filter(function(child) {
            return child !== childKey;
          }));
        }
      });
    });
  }).toArray().map(function(block) {
    return [newKeysRef[block.getKey()], block.set("key", newKeysRef[block.getKey()])];
  }));
};
var randomizeContentBlockKeys = function randomizeContentBlockKeys2(blockMap) {
  return OrderedMap$5(blockMap.toArray().map(function(block) {
    var key = generateRandomKey$9();
    return [key, block.set("key", key)];
  }));
};
var randomizeBlockMapKeys$2 = function randomizeBlockMapKeys(blockMap) {
  var isTreeBasedBlockMap = blockMap.first() instanceof ContentBlockNode$b;
  if (!isTreeBasedBlockMap) {
    return randomizeContentBlockKeys(blockMap);
  }
  return randomizeContentBlockNodeKeys(blockMap);
};
var randomizeBlockMapKeys_1 = randomizeBlockMapKeys$2;
var CharacterMetadata$7 = CharacterMetadata_1;
var findRangesImmutable$2 = findRangesImmutable_1;
var invariant$s = invariant_1;
function removeEntitiesAtEdges$2(contentState, selectionState) {
  var blockMap = contentState.getBlockMap();
  var entityMap = contentState.getEntityMap();
  var updatedBlocks = {};
  var startKey = selectionState.getStartKey();
  var startOffset = selectionState.getStartOffset();
  var startBlock = blockMap.get(startKey);
  var updatedStart = removeForBlock(entityMap, startBlock, startOffset);
  if (updatedStart !== startBlock) {
    updatedBlocks[startKey] = updatedStart;
  }
  var endKey = selectionState.getEndKey();
  var endOffset = selectionState.getEndOffset();
  var endBlock = blockMap.get(endKey);
  if (startKey === endKey) {
    endBlock = updatedStart;
  }
  var updatedEnd = removeForBlock(entityMap, endBlock, endOffset);
  if (updatedEnd !== endBlock) {
    updatedBlocks[endKey] = updatedEnd;
  }
  if (!Object.keys(updatedBlocks).length) {
    return contentState.set("selectionAfter", selectionState);
  }
  return contentState.merge({
    blockMap: blockMap.merge(updatedBlocks),
    selectionAfter: selectionState
  });
}
function getRemovalRange2(characters, entityKey, offset) {
  var removalRange;
  findRangesImmutable$2(characters, function(a, b) {
    return a.getEntity() === b.getEntity();
  }, function(element) {
    return element.getEntity() === entityKey;
  }, function(start, end) {
    if (start <= offset && end >= offset) {
      removalRange = {
        start,
        end
      };
    }
  });
  !(typeof removalRange === "object") ? invariant$s(false) : void 0;
  return removalRange;
}
function removeForBlock(entityMap, block, offset) {
  var chars = block.getCharacterList();
  var charBefore = offset > 0 ? chars.get(offset - 1) : void 0;
  var charAfter = offset < chars.count() ? chars.get(offset) : void 0;
  var entityBeforeCursor = charBefore ? charBefore.getEntity() : void 0;
  var entityAfterCursor = charAfter ? charAfter.getEntity() : void 0;
  if (entityAfterCursor && entityAfterCursor === entityBeforeCursor) {
    var entity = entityMap.__get(entityAfterCursor);
    if (entity.getMutability() !== "MUTABLE") {
      var _getRemovalRange = getRemovalRange2(chars, entityAfterCursor, offset), start = _getRemovalRange.start, end = _getRemovalRange.end;
      var current;
      while (start < end) {
        current = chars.get(start);
        chars = chars.set(start, CharacterMetadata$7.applyEntity(current, null));
        start++;
      }
      return block.set("characterList", chars);
    }
  }
  return block;
}
var removeEntitiesAtEdges_1 = removeEntitiesAtEdges$2;
var randomizeBlockMapKeys$1 = randomizeBlockMapKeys_1;
var removeEntitiesAtEdges$1 = removeEntitiesAtEdges_1;
var getContentStateFragment$4 = function getContentStateFragment(contentState, selectionState) {
  var startKey = selectionState.getStartKey();
  var startOffset = selectionState.getStartOffset();
  var endKey = selectionState.getEndKey();
  var endOffset = selectionState.getEndOffset();
  var contentWithoutEdgeEntities = removeEntitiesAtEdges$1(contentState, selectionState);
  var blockMap = contentWithoutEdgeEntities.getBlockMap();
  var blockKeys = blockMap.keySeq();
  var startIndex = blockKeys.indexOf(startKey);
  var endIndex = blockKeys.indexOf(endKey) + 1;
  return randomizeBlockMapKeys$1(blockMap.slice(startIndex, endIndex).map(function(block, blockKey) {
    var text = block.getText();
    var chars = block.getCharacterList();
    if (startKey === endKey) {
      return block.merge({
        text: text.slice(startOffset, endOffset),
        characterList: chars.slice(startOffset, endOffset)
      });
    }
    if (blockKey === startKey) {
      return block.merge({
        text: text.slice(startOffset),
        characterList: chars.slice(startOffset)
      });
    }
    if (blockKey === endKey) {
      return block.merge({
        text: text.slice(0, endOffset),
        characterList: chars.slice(0, endOffset)
      });
    }
    return block;
  }));
};
var getContentStateFragment_1 = getContentStateFragment$4;
function insertIntoList$2(targetListArg, toInsert, offset) {
  var targetList = targetListArg;
  if (offset === targetList.count()) {
    toInsert.forEach(function(c) {
      targetList = targetList.push(c);
    });
  } else if (offset === 0) {
    toInsert.reverse().forEach(function(c) {
      targetList = targetList.unshift(c);
    });
  } else {
    var head = targetList.slice(0, offset);
    var tail = targetList.slice(offset);
    targetList = head.concat(toInsert, tail).toList();
  }
  return targetList;
}
var insertIntoList_1 = insertIntoList$2;
var BlockMapBuilder$4 = BlockMapBuilder_1;
var ContentBlockNode$a = ContentBlockNode_1;
var Immutable$l = immutable.exports;
var insertIntoList$1 = insertIntoList_1;
var invariant$r = invariant_1;
var randomizeBlockMapKeys2 = randomizeBlockMapKeys_1;
var List$b = Immutable$l.List;
var updateExistingBlock = function updateExistingBlock2(contentState, selectionState, blockMap, fragmentBlock, targetKey, targetOffset) {
  var mergeBlockData2 = arguments.length > 6 && arguments[6] !== void 0 ? arguments[6] : "REPLACE_WITH_NEW_DATA";
  var targetBlock = blockMap.get(targetKey);
  var text = targetBlock.getText();
  var chars = targetBlock.getCharacterList();
  var finalKey = targetKey;
  var finalOffset = targetOffset + fragmentBlock.getText().length;
  var data = null;
  switch (mergeBlockData2) {
    case "MERGE_OLD_DATA_TO_NEW_DATA":
      data = fragmentBlock.getData().merge(targetBlock.getData());
      break;
    case "REPLACE_WITH_NEW_DATA":
      data = fragmentBlock.getData();
      break;
  }
  var type = targetBlock.getType();
  if (text && type === "unstyled") {
    type = fragmentBlock.getType();
  }
  var newBlock = targetBlock.merge({
    text: text.slice(0, targetOffset) + fragmentBlock.getText() + text.slice(targetOffset),
    characterList: insertIntoList$1(chars, fragmentBlock.getCharacterList(), targetOffset),
    type,
    data
  });
  return contentState.merge({
    blockMap: blockMap.set(targetKey, newBlock),
    selectionBefore: selectionState,
    selectionAfter: selectionState.merge({
      anchorKey: finalKey,
      anchorOffset: finalOffset,
      focusKey: finalKey,
      focusOffset: finalOffset,
      isBackward: false
    })
  });
};
var updateHead = function updateHead2(block, targetOffset, fragment) {
  var text = block.getText();
  var chars = block.getCharacterList();
  var headText = text.slice(0, targetOffset);
  var headCharacters = chars.slice(0, targetOffset);
  var appendToHead = fragment.first();
  return block.merge({
    text: headText + appendToHead.getText(),
    characterList: headCharacters.concat(appendToHead.getCharacterList()),
    type: headText ? block.getType() : appendToHead.getType(),
    data: appendToHead.getData()
  });
};
var updateTail = function updateTail2(block, targetOffset, fragment) {
  var text = block.getText();
  var chars = block.getCharacterList();
  var blockSize = text.length;
  var tailText = text.slice(targetOffset, blockSize);
  var tailCharacters = chars.slice(targetOffset, blockSize);
  var prependToTail = fragment.last();
  return prependToTail.merge({
    text: prependToTail.getText() + tailText,
    characterList: prependToTail.getCharacterList().concat(tailCharacters),
    data: prependToTail.getData()
  });
};
var getRootBlocks = function getRootBlocks2(block, blockMap) {
  var headKey = block.getKey();
  var rootBlock = block;
  var rootBlocks = [];
  if (blockMap.get(headKey)) {
    rootBlocks.push(headKey);
  }
  while (rootBlock && rootBlock.getNextSiblingKey()) {
    var lastSiblingKey = rootBlock.getNextSiblingKey();
    if (!lastSiblingKey) {
      break;
    }
    rootBlocks.push(lastSiblingKey);
    rootBlock = blockMap.get(lastSiblingKey);
  }
  return rootBlocks;
};
var updateBlockMapLinks$3 = function updateBlockMapLinks(blockMap, originalBlockMap, targetBlock, fragmentHeadBlock) {
  return blockMap.withMutations(function(blockMapState) {
    var targetKey = targetBlock.getKey();
    var headKey = fragmentHeadBlock.getKey();
    var targetNextKey = targetBlock.getNextSiblingKey();
    var targetParentKey = targetBlock.getParentKey();
    var fragmentRootBlocks = getRootBlocks(fragmentHeadBlock, blockMap);
    var lastRootFragmentBlockKey = fragmentRootBlocks[fragmentRootBlocks.length - 1];
    if (blockMapState.get(headKey)) {
      blockMapState.setIn([targetKey, "nextSibling"], headKey);
      blockMapState.setIn([headKey, "prevSibling"], targetKey);
    } else {
      blockMapState.setIn([targetKey, "nextSibling"], fragmentHeadBlock.getNextSiblingKey());
      blockMapState.setIn([fragmentHeadBlock.getNextSiblingKey(), "prevSibling"], targetKey);
    }
    blockMapState.setIn([lastRootFragmentBlockKey, "nextSibling"], targetNextKey);
    if (targetNextKey) {
      blockMapState.setIn([targetNextKey, "prevSibling"], lastRootFragmentBlockKey);
    }
    fragmentRootBlocks.forEach(function(blockKey) {
      return blockMapState.setIn([blockKey, "parent"], targetParentKey);
    });
    if (targetParentKey) {
      var targetParent = blockMap.get(targetParentKey);
      var originalTargetParentChildKeys = targetParent.getChildKeys();
      var targetBlockIndex = originalTargetParentChildKeys.indexOf(targetKey);
      var insertionIndex = targetBlockIndex + 1;
      var newChildrenKeysArray = originalTargetParentChildKeys.toArray();
      newChildrenKeysArray.splice.apply(newChildrenKeysArray, [insertionIndex, 0].concat(fragmentRootBlocks));
      blockMapState.setIn([targetParentKey, "children"], List$b(newChildrenKeysArray));
    }
  });
};
var insertFragment$1 = function insertFragment(contentState, selectionState, blockMap, fragment, targetKey, targetOffset) {
  var isTreeBasedBlockMap = blockMap.first() instanceof ContentBlockNode$a;
  var newBlockArr = [];
  var fragmentSize = fragment.size;
  var target = blockMap.get(targetKey);
  var head = fragment.first();
  var tail = fragment.last();
  var finalOffset = tail.getLength();
  var finalKey = tail.getKey();
  var shouldNotUpdateFromFragmentBlock = isTreeBasedBlockMap && (!target.getChildKeys().isEmpty() || !head.getChildKeys().isEmpty());
  blockMap.forEach(function(block, blockKey) {
    if (blockKey !== targetKey) {
      newBlockArr.push(block);
      return;
    }
    if (shouldNotUpdateFromFragmentBlock) {
      newBlockArr.push(block);
    } else {
      newBlockArr.push(updateHead(block, targetOffset, fragment));
    }
    fragment.slice(shouldNotUpdateFromFragmentBlock ? 0 : 1, fragmentSize - 1).forEach(function(fragmentBlock) {
      return newBlockArr.push(fragmentBlock);
    });
    newBlockArr.push(updateTail(block, targetOffset, fragment));
  });
  var updatedBlockMap = BlockMapBuilder$4.createFromArray(newBlockArr);
  if (isTreeBasedBlockMap) {
    updatedBlockMap = updateBlockMapLinks$3(updatedBlockMap, blockMap, target, head);
  }
  return contentState.merge({
    blockMap: updatedBlockMap,
    selectionBefore: selectionState,
    selectionAfter: selectionState.merge({
      anchorKey: finalKey,
      anchorOffset: finalOffset,
      focusKey: finalKey,
      focusOffset: finalOffset,
      isBackward: false
    })
  });
};
var insertFragmentIntoContentState$1 = function insertFragmentIntoContentState(contentState, selectionState, fragmentBlockMap) {
  var mergeBlockData2 = arguments.length > 3 && arguments[3] !== void 0 ? arguments[3] : "REPLACE_WITH_NEW_DATA";
  !selectionState.isCollapsed() ? invariant$r(false) : void 0;
  var blockMap = contentState.getBlockMap();
  var fragment = randomizeBlockMapKeys2(fragmentBlockMap);
  var targetKey = selectionState.getStartKey();
  var targetOffset = selectionState.getStartOffset();
  var targetBlock = blockMap.get(targetKey);
  if (targetBlock instanceof ContentBlockNode$a) {
    !targetBlock.getChildKeys().isEmpty() ? invariant$r(false) : void 0;
  }
  if (fragment.size === 1) {
    return updateExistingBlock(contentState, selectionState, blockMap, fragment.first(), targetKey, targetOffset, mergeBlockData2);
  }
  return insertFragment$1(contentState, selectionState, blockMap, fragment, targetKey, targetOffset);
};
var insertFragmentIntoContentState_1 = insertFragmentIntoContentState$1;
var Immutable$k = immutable.exports;
var insertIntoList = insertIntoList_1;
var invariant$q = invariant_1;
var Repeat$4 = Immutable$k.Repeat;
function insertTextIntoContentState$1(contentState, selectionState, text, characterMetadata) {
  !selectionState.isCollapsed() ? invariant$q(false) : void 0;
  var len = null;
  if (text != null) {
    len = text.length;
  }
  if (len == null || len === 0) {
    return contentState;
  }
  var blockMap = contentState.getBlockMap();
  var key = selectionState.getStartKey();
  var offset = selectionState.getStartOffset();
  var block = blockMap.get(key);
  var blockText = block.getText();
  var newBlock = block.merge({
    text: blockText.slice(0, offset) + text + blockText.slice(offset, block.getLength()),
    characterList: insertIntoList(block.getCharacterList(), Repeat$4(characterMetadata, len).toList(), offset)
  });
  var newOffset = offset + len;
  return contentState.merge({
    blockMap: blockMap.set(key, newBlock),
    selectionAfter: selectionState.merge({
      anchorOffset: newOffset,
      focusOffset: newOffset
    })
  });
}
var insertTextIntoContentState_1 = insertTextIntoContentState$1;
var Immutable$j = immutable.exports;
var Map$8 = Immutable$j.Map;
function modifyBlockForContentState$2(contentState, selectionState, operation) {
  var startKey = selectionState.getStartKey();
  var endKey = selectionState.getEndKey();
  var blockMap = contentState.getBlockMap();
  var newBlocks = blockMap.toSeq().skipUntil(function(_, k) {
    return k === startKey;
  }).takeUntil(function(_, k) {
    return k === endKey;
  }).concat(Map$8([[endKey, blockMap.get(endKey)]])).map(operation);
  return contentState.merge({
    blockMap: blockMap.merge(newBlocks),
    selectionBefore: selectionState,
    selectionAfter: selectionState
  });
}
var modifyBlockForContentState_1 = modifyBlockForContentState$2;
var ContentBlockNode$9 = ContentBlockNode_1;
var getNextDelimiterBlockKey$2 = function getNextDelimiterBlockKey(block, blockMap) {
  var isExperimentalTreeBlock = block instanceof ContentBlockNode$9;
  if (!isExperimentalTreeBlock) {
    return null;
  }
  var nextSiblingKey = block.getNextSiblingKey();
  if (nextSiblingKey) {
    return nextSiblingKey;
  }
  var parent = block.getParentKey();
  if (!parent) {
    return null;
  }
  var nextNonDescendantBlock = blockMap.get(parent);
  while (nextNonDescendantBlock && !nextNonDescendantBlock.getNextSiblingKey()) {
    var parentKey = nextNonDescendantBlock.getParentKey();
    nextNonDescendantBlock = parentKey ? blockMap.get(parentKey) : null;
  }
  if (!nextNonDescendantBlock) {
    return null;
  }
  return nextNonDescendantBlock.getNextSiblingKey();
};
var getNextDelimiterBlockKey_1 = getNextDelimiterBlockKey$2;
var ContentBlockNode$8 = ContentBlockNode_1;
var getNextDelimiterBlockKey$1 = getNextDelimiterBlockKey_1;
var Immutable$i = immutable.exports;
Immutable$i.List;
var Map$7 = Immutable$i.Map;
var transformBlock$2 = function transformBlock(key, blockMap, func) {
  if (!key) {
    return;
  }
  var block = blockMap.get(key);
  if (!block) {
    return;
  }
  blockMap.set(key, func(block));
};
var getAncestorsKeys = function getAncestorsKeys2(blockKey, blockMap) {
  var parents = [];
  if (!blockKey) {
    return parents;
  }
  var blockNode = blockMap.get(blockKey);
  while (blockNode && blockNode.getParentKey()) {
    var parentKey = blockNode.getParentKey();
    if (parentKey) {
      parents.push(parentKey);
    }
    blockNode = parentKey ? blockMap.get(parentKey) : null;
  }
  return parents;
};
var getNextDelimitersBlockKeys = function getNextDelimitersBlockKeys2(block, blockMap) {
  var nextDelimiters = [];
  if (!block) {
    return nextDelimiters;
  }
  var nextDelimiter = getNextDelimiterBlockKey$1(block, blockMap);
  while (nextDelimiter && blockMap.get(nextDelimiter)) {
    var _block = blockMap.get(nextDelimiter);
    nextDelimiters.push(nextDelimiter);
    nextDelimiter = _block.getParentKey() ? getNextDelimiterBlockKey$1(_block, blockMap) : null;
  }
  return nextDelimiters;
};
var getNextValidSibling = function getNextValidSibling2(block, blockMap, originalBlockMap) {
  if (!block) {
    return null;
  }
  var nextValidSiblingKey = originalBlockMap.get(block.getKey()).getNextSiblingKey();
  while (nextValidSiblingKey && !blockMap.get(nextValidSiblingKey)) {
    nextValidSiblingKey = originalBlockMap.get(nextValidSiblingKey).getNextSiblingKey() || null;
  }
  return nextValidSiblingKey;
};
var getPrevValidSibling = function getPrevValidSibling2(block, blockMap, originalBlockMap) {
  if (!block) {
    return null;
  }
  var prevValidSiblingKey = originalBlockMap.get(block.getKey()).getPrevSiblingKey();
  while (prevValidSiblingKey && !blockMap.get(prevValidSiblingKey)) {
    prevValidSiblingKey = originalBlockMap.get(prevValidSiblingKey).getPrevSiblingKey() || null;
  }
  return prevValidSiblingKey;
};
var updateBlockMapLinks$2 = function updateBlockMapLinks2(blockMap, startBlock, endBlock, originalBlockMap) {
  return blockMap.withMutations(function(blocks) {
    transformBlock$2(startBlock.getKey(), blocks, function(block) {
      return block.merge({
        nextSibling: getNextValidSibling(block, blocks, originalBlockMap),
        prevSibling: getPrevValidSibling(block, blocks, originalBlockMap)
      });
    });
    transformBlock$2(endBlock.getKey(), blocks, function(block) {
      return block.merge({
        nextSibling: getNextValidSibling(block, blocks, originalBlockMap),
        prevSibling: getPrevValidSibling(block, blocks, originalBlockMap)
      });
    });
    getAncestorsKeys(startBlock.getKey(), originalBlockMap).forEach(function(parentKey) {
      return transformBlock$2(parentKey, blocks, function(block) {
        return block.merge({
          children: block.getChildKeys().filter(function(key) {
            return blocks.get(key);
          }),
          nextSibling: getNextValidSibling(block, blocks, originalBlockMap),
          prevSibling: getPrevValidSibling(block, blocks, originalBlockMap)
        });
      });
    });
    transformBlock$2(startBlock.getNextSiblingKey(), blocks, function(block) {
      return block.merge({
        prevSibling: startBlock.getPrevSiblingKey()
      });
    });
    transformBlock$2(startBlock.getPrevSiblingKey(), blocks, function(block) {
      return block.merge({
        nextSibling: getNextValidSibling(block, blocks, originalBlockMap)
      });
    });
    transformBlock$2(endBlock.getNextSiblingKey(), blocks, function(block) {
      return block.merge({
        prevSibling: getPrevValidSibling(block, blocks, originalBlockMap)
      });
    });
    transformBlock$2(endBlock.getPrevSiblingKey(), blocks, function(block) {
      return block.merge({
        nextSibling: endBlock.getNextSiblingKey()
      });
    });
    getAncestorsKeys(endBlock.getKey(), originalBlockMap).forEach(function(parentKey) {
      transformBlock$2(parentKey, blocks, function(block) {
        return block.merge({
          children: block.getChildKeys().filter(function(key) {
            return blocks.get(key);
          }),
          nextSibling: getNextValidSibling(block, blocks, originalBlockMap),
          prevSibling: getPrevValidSibling(block, blocks, originalBlockMap)
        });
      });
    });
    getNextDelimitersBlockKeys(endBlock, originalBlockMap).forEach(function(delimiterKey) {
      return transformBlock$2(delimiterKey, blocks, function(block) {
        return block.merge({
          nextSibling: getNextValidSibling(block, blocks, originalBlockMap),
          prevSibling: getPrevValidSibling(block, blocks, originalBlockMap)
        });
      });
    });
    if (blockMap.get(startBlock.getKey()) == null && blockMap.get(endBlock.getKey()) != null && endBlock.getParentKey() === startBlock.getKey() && endBlock.getPrevSiblingKey() == null) {
      var prevSiblingKey = startBlock.getPrevSiblingKey();
      transformBlock$2(endBlock.getKey(), blocks, function(block) {
        return block.merge({
          prevSibling: prevSiblingKey
        });
      });
      transformBlock$2(prevSiblingKey, blocks, function(block) {
        return block.merge({
          nextSibling: endBlock.getKey()
        });
      });
      var prevSibling = prevSiblingKey ? blockMap.get(prevSiblingKey) : null;
      var newParentKey = prevSibling ? prevSibling.getParentKey() : null;
      startBlock.getChildKeys().forEach(function(childKey) {
        transformBlock$2(childKey, blocks, function(block) {
          return block.merge({
            parent: newParentKey
          });
        });
      });
      if (newParentKey != null) {
        var newParent = blockMap.get(newParentKey);
        transformBlock$2(newParentKey, blocks, function(block) {
          return block.merge({
            children: newParent.getChildKeys().concat(startBlock.getChildKeys())
          });
        });
      }
      transformBlock$2(startBlock.getChildKeys().find(function(key) {
        var block = blockMap.get(key);
        return block.getNextSiblingKey() === null;
      }), blocks, function(block) {
        return block.merge({
          nextSibling: startBlock.getNextSiblingKey()
        });
      });
    }
  });
};
var removeRangeFromContentState$1 = function removeRangeFromContentState(contentState, selectionState) {
  if (selectionState.isCollapsed()) {
    return contentState;
  }
  var blockMap = contentState.getBlockMap();
  var startKey = selectionState.getStartKey();
  var startOffset = selectionState.getStartOffset();
  var endKey = selectionState.getEndKey();
  var endOffset = selectionState.getEndOffset();
  var startBlock = blockMap.get(startKey);
  var endBlock = blockMap.get(endKey);
  var isExperimentalTreeBlock = startBlock instanceof ContentBlockNode$8;
  var parentAncestors = [];
  if (isExperimentalTreeBlock) {
    var endBlockchildrenKeys = endBlock.getChildKeys();
    var endBlockAncestors = getAncestorsKeys(endKey, blockMap);
    if (endBlock.getNextSiblingKey()) {
      parentAncestors = parentAncestors.concat(endBlockAncestors);
    }
    if (!endBlockchildrenKeys.isEmpty()) {
      parentAncestors = parentAncestors.concat(endBlockAncestors.concat([endKey]));
    }
    parentAncestors = parentAncestors.concat(getAncestorsKeys(getNextDelimiterBlockKey$1(endBlock, blockMap), blockMap));
  }
  var characterList;
  if (startBlock === endBlock) {
    characterList = removeFromList(startBlock.getCharacterList(), startOffset, endOffset);
  } else {
    characterList = startBlock.getCharacterList().slice(0, startOffset).concat(endBlock.getCharacterList().slice(endOffset));
  }
  var modifiedStart = startBlock.merge({
    text: startBlock.getText().slice(0, startOffset) + endBlock.getText().slice(endOffset),
    characterList
  });
  var shouldDeleteParent = isExperimentalTreeBlock && startOffset === 0 && endOffset === 0 && endBlock.getParentKey() === startKey && endBlock.getPrevSiblingKey() == null;
  var newBlocks = shouldDeleteParent ? Map$7([[startKey, null]]) : blockMap.toSeq().skipUntil(function(_, k) {
    return k === startKey;
  }).takeUntil(function(_, k) {
    return k === endKey;
  }).filter(function(_, k) {
    return parentAncestors.indexOf(k) === -1;
  }).concat(Map$7([[endKey, null]])).map(function(_, k) {
    return k === startKey ? modifiedStart : null;
  });
  var updatedBlockMap = blockMap.merge(newBlocks).filter(function(block) {
    return !!block;
  });
  if (isExperimentalTreeBlock && startBlock !== endBlock) {
    updatedBlockMap = updateBlockMapLinks$2(updatedBlockMap, startBlock, endBlock, blockMap);
  }
  return contentState.merge({
    blockMap: updatedBlockMap,
    selectionBefore: selectionState,
    selectionAfter: selectionState.merge({
      anchorKey: startKey,
      anchorOffset: startOffset,
      focusKey: startKey,
      focusOffset: startOffset,
      isBackward: false
    })
  });
};
var removeFromList = function removeFromList2(targetList, startOffset, endOffset) {
  if (startOffset === 0) {
    while (startOffset < endOffset) {
      targetList = targetList.shift();
      startOffset++;
    }
  } else if (endOffset === targetList.count()) {
    while (endOffset > startOffset) {
      targetList = targetList.pop();
      endOffset--;
    }
  } else {
    var head = targetList.slice(0, startOffset);
    var tail = targetList.slice(endOffset);
    targetList = head.concat(tail).toList();
  }
  return targetList;
};
var removeRangeFromContentState_1 = removeRangeFromContentState$1;
var ContentBlockNode$7 = ContentBlockNode_1;
var generateRandomKey$8 = generateRandomKey_1;
var Immutable$h = immutable.exports;
var invariant$p = invariant_1;
var modifyBlockForContentState$1 = modifyBlockForContentState_1;
var List$a = Immutable$h.List, Map$6 = Immutable$h.Map;
var transformBlock$1 = function transformBlock2(key, blockMap, func) {
  if (!key) {
    return;
  }
  var block = blockMap.get(key);
  if (!block) {
    return;
  }
  blockMap.set(key, func(block));
};
var updateBlockMapLinks$1 = function updateBlockMapLinks3(blockMap, originalBlock, belowBlock) {
  return blockMap.withMutations(function(blocks) {
    var originalBlockKey = originalBlock.getKey();
    var belowBlockKey = belowBlock.getKey();
    transformBlock$1(originalBlock.getParentKey(), blocks, function(block) {
      var parentChildrenList = block.getChildKeys();
      var insertionIndex = parentChildrenList.indexOf(originalBlockKey) + 1;
      var newChildrenArray = parentChildrenList.toArray();
      newChildrenArray.splice(insertionIndex, 0, belowBlockKey);
      return block.merge({
        children: List$a(newChildrenArray)
      });
    });
    transformBlock$1(originalBlock.getNextSiblingKey(), blocks, function(block) {
      return block.merge({
        prevSibling: belowBlockKey
      });
    });
    transformBlock$1(originalBlockKey, blocks, function(block) {
      return block.merge({
        nextSibling: belowBlockKey
      });
    });
    transformBlock$1(belowBlockKey, blocks, function(block) {
      return block.merge({
        prevSibling: originalBlockKey
      });
    });
  });
};
var splitBlockInContentState$1 = function splitBlockInContentState(contentState, selectionState) {
  !selectionState.isCollapsed() ? invariant$p(false) : void 0;
  var key = selectionState.getAnchorKey();
  var blockMap = contentState.getBlockMap();
  var blockToSplit = blockMap.get(key);
  var text = blockToSplit.getText();
  if (!text) {
    var blockType = blockToSplit.getType();
    if (blockType === "unordered-list-item" || blockType === "ordered-list-item") {
      return modifyBlockForContentState$1(contentState, selectionState, function(block) {
        return block.merge({
          type: "unstyled",
          depth: 0
        });
      });
    }
  }
  var offset = selectionState.getAnchorOffset();
  var chars = blockToSplit.getCharacterList();
  var keyBelow = generateRandomKey$8();
  var isExperimentalTreeBlock = blockToSplit instanceof ContentBlockNode$7;
  var blockAbove = blockToSplit.merge({
    text: text.slice(0, offset),
    characterList: chars.slice(0, offset)
  });
  var blockBelow = blockAbove.merge({
    key: keyBelow,
    text: text.slice(offset),
    characterList: chars.slice(offset),
    data: Map$6()
  });
  var blocksBefore = blockMap.toSeq().takeUntil(function(v) {
    return v === blockToSplit;
  });
  var blocksAfter = blockMap.toSeq().skipUntil(function(v) {
    return v === blockToSplit;
  }).rest();
  var newBlocks = blocksBefore.concat([[key, blockAbove], [keyBelow, blockBelow]], blocksAfter).toOrderedMap();
  if (isExperimentalTreeBlock) {
    !blockToSplit.getChildKeys().isEmpty() ? invariant$p(false) : void 0;
    newBlocks = updateBlockMapLinks$1(newBlocks, blockAbove, blockBelow);
  }
  return contentState.merge({
    blockMap: newBlocks,
    selectionBefore: selectionState,
    selectionAfter: selectionState.merge({
      anchorKey: keyBelow,
      anchorOffset: 0,
      focusKey: keyBelow,
      focusOffset: 0,
      isBackward: false
    })
  });
};
var splitBlockInContentState_1 = splitBlockInContentState$1;
var CharacterMetadata$6 = CharacterMetadata_1;
var ContentStateInlineStyle = ContentStateInlineStyle_1;
var applyEntityToContentState = applyEntityToContentState_1;
var getCharacterRemovalRange = getCharacterRemovalRange_1;
var getContentStateFragment$3 = getContentStateFragment_1;
var Immutable$g = immutable.exports;
var insertFragmentIntoContentState2 = insertFragmentIntoContentState_1;
var insertTextIntoContentState = insertTextIntoContentState_1;
var invariant$o = invariant_1;
var modifyBlockForContentState = modifyBlockForContentState_1;
var removeEntitiesAtEdges = removeEntitiesAtEdges_1;
var removeRangeFromContentState2 = removeRangeFromContentState_1;
var splitBlockInContentState2 = splitBlockInContentState_1;
var OrderedSet$3 = Immutable$g.OrderedSet;
var DraftModifier$e = {
  replaceText: function replaceText(contentState, rangeToReplace, text, inlineStyle, entityKey) {
    var withoutEntities = removeEntitiesAtEdges(contentState, rangeToReplace);
    var withoutText = removeRangeFromContentState2(withoutEntities, rangeToReplace);
    var character = CharacterMetadata$6.create({
      style: inlineStyle || OrderedSet$3(),
      entity: entityKey || null
    });
    return insertTextIntoContentState(withoutText, withoutText.getSelectionAfter(), text, character);
  },
  insertText: function insertText(contentState, targetRange, text, inlineStyle, entityKey) {
    !targetRange.isCollapsed() ? invariant$o(false) : void 0;
    return DraftModifier$e.replaceText(contentState, targetRange, text, inlineStyle, entityKey);
  },
  moveText: function moveText(contentState, removalRange, targetRange) {
    var movedFragment = getContentStateFragment$3(contentState, removalRange);
    var afterRemoval = DraftModifier$e.removeRange(contentState, removalRange, "backward");
    return DraftModifier$e.replaceWithFragment(afterRemoval, targetRange, movedFragment);
  },
  replaceWithFragment: function replaceWithFragment(contentState, targetRange, fragment) {
    var mergeBlockData2 = arguments.length > 3 && arguments[3] !== void 0 ? arguments[3] : "REPLACE_WITH_NEW_DATA";
    var withoutEntities = removeEntitiesAtEdges(contentState, targetRange);
    var withoutText = removeRangeFromContentState2(withoutEntities, targetRange);
    return insertFragmentIntoContentState2(withoutText, withoutText.getSelectionAfter(), fragment, mergeBlockData2);
  },
  removeRange: function removeRange(contentState, rangeToRemove, removalDirection) {
    var startKey, endKey, startBlock, endBlock;
    if (rangeToRemove.getIsBackward()) {
      rangeToRemove = rangeToRemove.merge({
        anchorKey: rangeToRemove.getFocusKey(),
        anchorOffset: rangeToRemove.getFocusOffset(),
        focusKey: rangeToRemove.getAnchorKey(),
        focusOffset: rangeToRemove.getAnchorOffset(),
        isBackward: false
      });
    }
    startKey = rangeToRemove.getAnchorKey();
    endKey = rangeToRemove.getFocusKey();
    startBlock = contentState.getBlockForKey(startKey);
    endBlock = contentState.getBlockForKey(endKey);
    var startOffset = rangeToRemove.getStartOffset();
    var endOffset = rangeToRemove.getEndOffset();
    var startEntityKey = startBlock.getEntityAt(startOffset);
    var endEntityKey = endBlock.getEntityAt(endOffset - 1);
    if (startKey === endKey) {
      if (startEntityKey && startEntityKey === endEntityKey) {
        var adjustedRemovalRange = getCharacterRemovalRange(contentState.getEntityMap(), startBlock, endBlock, rangeToRemove, removalDirection);
        return removeRangeFromContentState2(contentState, adjustedRemovalRange);
      }
    }
    var withoutEntities = removeEntitiesAtEdges(contentState, rangeToRemove);
    return removeRangeFromContentState2(withoutEntities, rangeToRemove);
  },
  splitBlock: function splitBlock(contentState, selectionState) {
    var withoutEntities = removeEntitiesAtEdges(contentState, selectionState);
    var withoutText = removeRangeFromContentState2(withoutEntities, selectionState);
    return splitBlockInContentState2(withoutText, withoutText.getSelectionAfter());
  },
  applyInlineStyle: function applyInlineStyle(contentState, selectionState, inlineStyle) {
    return ContentStateInlineStyle.add(contentState, selectionState, inlineStyle);
  },
  removeInlineStyle: function removeInlineStyle(contentState, selectionState, inlineStyle) {
    return ContentStateInlineStyle.remove(contentState, selectionState, inlineStyle);
  },
  setBlockType: function setBlockType(contentState, selectionState, blockType) {
    return modifyBlockForContentState(contentState, selectionState, function(block) {
      return block.merge({
        type: blockType,
        depth: 0
      });
    });
  },
  setBlockData: function setBlockData(contentState, selectionState, blockData) {
    return modifyBlockForContentState(contentState, selectionState, function(block) {
      return block.merge({
        data: blockData
      });
    });
  },
  mergeBlockData: function mergeBlockData(contentState, selectionState, blockData) {
    return modifyBlockForContentState(contentState, selectionState, function(block) {
      return block.merge({
        data: block.getData().merge(blockData)
      });
    });
  },
  applyEntity: function applyEntity(contentState, selectionState, entityKey) {
    var withoutEntities = removeEntitiesAtEdges(contentState, selectionState);
    return applyEntityToContentState(withoutEntities, selectionState, entityKey);
  }
};
var DraftModifier_1 = DraftModifier$e;
function getOwnObjectValues$2(obj) {
  return Object.keys(obj).map(function(key) {
    return obj[key];
  });
}
var getOwnObjectValues_1 = getOwnObjectValues$2;
function _objectSpread$c(target) {
  for (var i = 1; i < arguments.length; i++) {
    var source = arguments[i] != null ? arguments[i] : {};
    var ownKeys = Object.keys(source);
    if (typeof Object.getOwnPropertySymbols === "function") {
      ownKeys = ownKeys.concat(Object.getOwnPropertySymbols(source).filter(function(sym) {
        return Object.getOwnPropertyDescriptor(source, sym).enumerable;
      }));
    }
    ownKeys.forEach(function(key) {
      _defineProperty$j(target, key, source[key]);
    });
  }
  return target;
}
function _defineProperty$j(obj, key, value) {
  if (key in obj) {
    Object.defineProperty(obj, key, { value, enumerable: true, configurable: true, writable: true });
  } else {
    obj[key] = value;
  }
  return obj;
}
function _objectWithoutPropertiesLoose(source, excluded) {
  if (source == null)
    return {};
  var target = {};
  var sourceKeys = Object.keys(source);
  var key, i;
  for (i = 0; i < sourceKeys.length; i++) {
    key = sourceKeys[i];
    if (excluded.indexOf(key) >= 0)
      continue;
    target[key] = source[key];
  }
  return target;
}
var findRangesImmutable$1 = findRangesImmutable_1;
var getOwnObjectValues$1 = getOwnObjectValues_1;
var Immutable$f = immutable.exports;
var List$9 = Immutable$f.List, Repeat$3 = Immutable$f.Repeat, Record$4 = Immutable$f.Record;
var returnTrue = function returnTrue2() {
  return true;
};
var defaultLeafRange = {
  start: null,
  end: null
};
var LeafRange = Record$4(defaultLeafRange);
var defaultDecoratorRange = {
  start: null,
  end: null,
  decoratorKey: null,
  leaves: null
};
var DecoratorRange = Record$4(defaultDecoratorRange);
var BlockTree$1 = {
  generate: function generate(contentState, block, decorator) {
    var textLength = block.getLength();
    if (!textLength) {
      return List$9.of(new DecoratorRange({
        start: 0,
        end: 0,
        decoratorKey: null,
        leaves: List$9.of(new LeafRange({
          start: 0,
          end: 0
        }))
      }));
    }
    var leafSets = [];
    var decorations = decorator ? decorator.getDecorations(block, contentState) : List$9(Repeat$3(null, textLength));
    var chars = block.getCharacterList();
    findRangesImmutable$1(decorations, areEqual$1, returnTrue, function(start, end) {
      leafSets.push(new DecoratorRange({
        start,
        end,
        decoratorKey: decorations.get(start),
        leaves: generateLeaves(chars.slice(start, end).toList(), start)
      }));
    });
    return List$9(leafSets);
  },
  fromJS: function fromJS(_ref) {
    var leaves = _ref.leaves, other = _objectWithoutPropertiesLoose(_ref, ["leaves"]);
    return new DecoratorRange(_objectSpread$c({}, other, {
      leaves: leaves != null ? List$9(Array.isArray(leaves) ? leaves : getOwnObjectValues$1(leaves)).map(function(leaf) {
        return LeafRange(leaf);
      }) : null
    }));
  }
};
function generateLeaves(characters, offset) {
  var leaves = [];
  var inlineStyles = characters.map(function(c) {
    return c.getStyle();
  }).toList();
  findRangesImmutable$1(inlineStyles, areEqual$1, returnTrue, function(start, end) {
    leaves.push(new LeafRange({
      start: start + offset,
      end: end + offset
    }));
  });
  return List$9(leaves);
}
function areEqual$1(a, b) {
  return a === b;
}
var BlockTree_1 = BlockTree$1;
function _inheritsLoose$c(subClass, superClass) {
  subClass.prototype = Object.create(superClass.prototype);
  subClass.prototype.constructor = subClass;
  subClass.__proto__ = superClass;
}
var Immutable$e = immutable.exports;
var Record$3 = Immutable$e.Record;
var DraftEntityInstanceRecord = Record$3({
  type: "TOKEN",
  mutability: "IMMUTABLE",
  data: Object
});
var DraftEntityInstance$2 = /* @__PURE__ */ function(_DraftEntityInstanceR) {
  _inheritsLoose$c(DraftEntityInstance2, _DraftEntityInstanceR);
  function DraftEntityInstance2() {
    return _DraftEntityInstanceR.apply(this, arguments) || this;
  }
  var _proto = DraftEntityInstance2.prototype;
  _proto.getType = function getType() {
    return this.get("type");
  };
  _proto.getMutability = function getMutability() {
    return this.get("mutability");
  };
  _proto.getData = function getData() {
    return this.get("data");
  };
  return DraftEntityInstance2;
}(DraftEntityInstanceRecord);
var DraftEntityInstance_1 = DraftEntityInstance$2;
function uuid$1() {
  return "xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx".replace(/[xy]/g, function(c) {
    var r2 = Math.random() * 16 | 0;
    var v = c == "x" ? r2 : r2 & 3 | 8;
    return v.toString(16);
  });
}
var uuid_1 = uuid$1;
function _objectSpread$b(target) {
  for (var i = 1; i < arguments.length; i++) {
    var source = arguments[i] != null ? arguments[i] : {};
    var ownKeys = Object.keys(source);
    if (typeof Object.getOwnPropertySymbols === "function") {
      ownKeys = ownKeys.concat(Object.getOwnPropertySymbols(source).filter(function(sym) {
        return Object.getOwnPropertyDescriptor(source, sym).enumerable;
      }));
    }
    ownKeys.forEach(function(key) {
      _defineProperty$i(target, key, source[key]);
    });
  }
  return target;
}
function _defineProperty$i(obj, key, value) {
  if (key in obj) {
    Object.defineProperty(obj, key, { value, enumerable: true, configurable: true, writable: true });
  } else {
    obj[key] = value;
  }
  return obj;
}
var DraftEntityInstance$1 = DraftEntityInstance_1;
var Immutable$d = immutable.exports;
var invariant$n = invariant_1;
var uuid = uuid_1;
var Map$5 = Immutable$d.Map;
var instances = Map$5();
var instanceKey = uuid();
function logWarning(oldMethodCall, newMethodCall) {
  console.warn("WARNING: " + oldMethodCall + ' will be deprecated soon!\nPlease use "' + newMethodCall + '" instead.');
}
var DraftEntity$4 = {
  getLastCreatedEntityKey: function getLastCreatedEntityKey() {
    logWarning("DraftEntity.getLastCreatedEntityKey", "contentState.getLastCreatedEntityKey");
    return DraftEntity$4.__getLastCreatedEntityKey();
  },
  create: function create(type, mutability, data) {
    logWarning("DraftEntity.create", "contentState.createEntity");
    return DraftEntity$4.__create(type, mutability, data);
  },
  add: function add2(instance) {
    logWarning("DraftEntity.add", "contentState.addEntity");
    return DraftEntity$4.__add(instance);
  },
  get: function get3(key) {
    logWarning("DraftEntity.get", "contentState.getEntity");
    return DraftEntity$4.__get(key);
  },
  __getAll: function __getAll() {
    return instances;
  },
  __loadWithEntities: function __loadWithEntities(entities) {
    instances = entities;
    instanceKey = uuid();
  },
  mergeData: function mergeData(key, toMerge) {
    logWarning("DraftEntity.mergeData", "contentState.mergeEntityData");
    return DraftEntity$4.__mergeData(key, toMerge);
  },
  replaceData: function replaceData(key, newData) {
    logWarning("DraftEntity.replaceData", "contentState.replaceEntityData");
    return DraftEntity$4.__replaceData(key, newData);
  },
  __getLastCreatedEntityKey: function __getLastCreatedEntityKey() {
    return instanceKey;
  },
  __create: function __create(type, mutability, data) {
    return DraftEntity$4.__add(new DraftEntityInstance$1({
      type,
      mutability,
      data: data || {}
    }));
  },
  __add: function __add(instance) {
    instanceKey = uuid();
    instances = instances.set(instanceKey, instance);
    return instanceKey;
  },
  __get: function __get(key) {
    var instance = instances.get(key);
    !!!instance ? invariant$n(false) : void 0;
    return instance;
  },
  __mergeData: function __mergeData(key, toMerge) {
    var instance = DraftEntity$4.__get(key);
    var newData = _objectSpread$b({}, instance.getData(), toMerge);
    var newInstance = instance.set("data", newData);
    instances = instances.set(key, newInstance);
    return newInstance;
  },
  __replaceData: function __replaceData(key, newData) {
    var instance = DraftEntity$4.__get(key);
    var newInstance = instance.set("data", newData);
    instances = instances.set(key, newInstance);
    return newInstance;
  }
};
var DraftEntity_1 = DraftEntity$4;
function _inheritsLoose$b(subClass, superClass) {
  subClass.prototype = Object.create(superClass.prototype);
  subClass.prototype.constructor = subClass;
  subClass.__proto__ = superClass;
}
var Immutable$c = immutable.exports;
var Record$2 = Immutable$c.Record;
var defaultRecord$2 = {
  anchorKey: "",
  anchorOffset: 0,
  focusKey: "",
  focusOffset: 0,
  isBackward: false,
  hasFocus: false
};
var SelectionStateRecord = Record$2(defaultRecord$2);
var SelectionState$4 = /* @__PURE__ */ function(_SelectionStateRecord) {
  _inheritsLoose$b(SelectionState2, _SelectionStateRecord);
  function SelectionState2() {
    return _SelectionStateRecord.apply(this, arguments) || this;
  }
  var _proto = SelectionState2.prototype;
  _proto.serialize = function serialize() {
    return "Anchor: " + this.getAnchorKey() + ":" + this.getAnchorOffset() + ", Focus: " + this.getFocusKey() + ":" + this.getFocusOffset() + ", Is Backward: " + String(this.getIsBackward()) + ", Has Focus: " + String(this.getHasFocus());
  };
  _proto.getAnchorKey = function getAnchorKey() {
    return this.get("anchorKey");
  };
  _proto.getAnchorOffset = function getAnchorOffset() {
    return this.get("anchorOffset");
  };
  _proto.getFocusKey = function getFocusKey() {
    return this.get("focusKey");
  };
  _proto.getFocusOffset = function getFocusOffset() {
    return this.get("focusOffset");
  };
  _proto.getIsBackward = function getIsBackward() {
    return this.get("isBackward");
  };
  _proto.getHasFocus = function getHasFocus() {
    return this.get("hasFocus");
  };
  _proto.hasEdgeWithin = function hasEdgeWithin(blockKey, start, end) {
    var anchorKey = this.getAnchorKey();
    var focusKey = this.getFocusKey();
    if (anchorKey === focusKey && anchorKey === blockKey) {
      var selectionStart = this.getStartOffset();
      var selectionEnd = this.getEndOffset();
      return start <= selectionStart && selectionStart <= end || start <= selectionEnd && selectionEnd <= end;
    }
    if (blockKey !== anchorKey && blockKey !== focusKey) {
      return false;
    }
    var offsetToCheck = blockKey === anchorKey ? this.getAnchorOffset() : this.getFocusOffset();
    return start <= offsetToCheck && end >= offsetToCheck;
  };
  _proto.isCollapsed = function isCollapsed() {
    return this.getAnchorKey() === this.getFocusKey() && this.getAnchorOffset() === this.getFocusOffset();
  };
  _proto.getStartKey = function getStartKey() {
    return this.getIsBackward() ? this.getFocusKey() : this.getAnchorKey();
  };
  _proto.getStartOffset = function getStartOffset() {
    return this.getIsBackward() ? this.getFocusOffset() : this.getAnchorOffset();
  };
  _proto.getEndKey = function getEndKey() {
    return this.getIsBackward() ? this.getAnchorKey() : this.getFocusKey();
  };
  _proto.getEndOffset = function getEndOffset() {
    return this.getIsBackward() ? this.getAnchorOffset() : this.getFocusOffset();
  };
  SelectionState2.createEmpty = function createEmpty(key) {
    return new SelectionState2({
      anchorKey: key,
      anchorOffset: 0,
      focusKey: key,
      focusOffset: 0,
      isBackward: false,
      hasFocus: false
    });
  };
  return SelectionState2;
}(SelectionStateRecord);
var SelectionState_1 = SelectionState$4;
var gkx$8 = function(name) {
  if (typeof window !== "undefined" && window.__DRAFT_GKX) {
    return !!window.__DRAFT_GKX[name];
  }
  return false;
};
var REGEX_BLOCK_DELIMITER = new RegExp("\r", "g");
function sanitizeDraftText$2(input) {
  return input.replace(REGEX_BLOCK_DELIMITER, "");
}
var sanitizeDraftText_1 = sanitizeDraftText$2;
function _objectSpread$a(target) {
  for (var i = 1; i < arguments.length; i++) {
    var source = arguments[i] != null ? arguments[i] : {};
    var ownKeys = Object.keys(source);
    if (typeof Object.getOwnPropertySymbols === "function") {
      ownKeys = ownKeys.concat(Object.getOwnPropertySymbols(source).filter(function(sym) {
        return Object.getOwnPropertyDescriptor(source, sym).enumerable;
      }));
    }
    ownKeys.forEach(function(key) {
      _defineProperty$h(target, key, source[key]);
    });
  }
  return target;
}
function _defineProperty$h(obj, key, value) {
  if (key in obj) {
    Object.defineProperty(obj, key, { value, enumerable: true, configurable: true, writable: true });
  } else {
    obj[key] = value;
  }
  return obj;
}
function _inheritsLoose$a(subClass, superClass) {
  subClass.prototype = Object.create(superClass.prototype);
  subClass.prototype.constructor = subClass;
  subClass.__proto__ = superClass;
}
var BlockMapBuilder$3 = BlockMapBuilder_1;
var CharacterMetadata$5 = CharacterMetadata_1;
var ContentBlock$6 = ContentBlock_1;
var ContentBlockNode$6 = ContentBlockNode_1;
var DraftEntity$3 = DraftEntity_1;
var SelectionState$3 = SelectionState_1;
var generateRandomKey$7 = generateRandomKey_1;
var getOwnObjectValues = getOwnObjectValues_1;
var gkx$7 = gkx$8;
var Immutable$b = immutable.exports;
var sanitizeDraftText$1 = sanitizeDraftText_1;
var List$8 = Immutable$b.List, Record$1 = Immutable$b.Record, Repeat$2 = Immutable$b.Repeat, ImmutableMap = Immutable$b.Map, OrderedMap$4 = Immutable$b.OrderedMap;
var defaultRecord$1 = {
  entityMap: null,
  blockMap: null,
  selectionBefore: null,
  selectionAfter: null
};
var ContentStateRecord = Record$1(defaultRecord$1);
var ContentBlockNodeRecord = gkx$7("draft_tree_data_support") ? ContentBlockNode$6 : ContentBlock$6;
var ContentState$3 = /* @__PURE__ */ function(_ContentStateRecord) {
  _inheritsLoose$a(ContentState2, _ContentStateRecord);
  function ContentState2() {
    return _ContentStateRecord.apply(this, arguments) || this;
  }
  var _proto = ContentState2.prototype;
  _proto.getEntityMap = function getEntityMap() {
    return DraftEntity$3;
  };
  _proto.getBlockMap = function getBlockMap() {
    return this.get("blockMap");
  };
  _proto.getSelectionBefore = function getSelectionBefore() {
    return this.get("selectionBefore");
  };
  _proto.getSelectionAfter = function getSelectionAfter() {
    return this.get("selectionAfter");
  };
  _proto.getBlockForKey = function getBlockForKey(key) {
    var block = this.getBlockMap().get(key);
    return block;
  };
  _proto.getKeyBefore = function getKeyBefore(key) {
    return this.getBlockMap().reverse().keySeq().skipUntil(function(v) {
      return v === key;
    }).skip(1).first();
  };
  _proto.getKeyAfter = function getKeyAfter(key) {
    return this.getBlockMap().keySeq().skipUntil(function(v) {
      return v === key;
    }).skip(1).first();
  };
  _proto.getBlockAfter = function getBlockAfter(key) {
    return this.getBlockMap().skipUntil(function(_, k) {
      return k === key;
    }).skip(1).first();
  };
  _proto.getBlockBefore = function getBlockBefore(key) {
    return this.getBlockMap().reverse().skipUntil(function(_, k) {
      return k === key;
    }).skip(1).first();
  };
  _proto.getBlocksAsArray = function getBlocksAsArray() {
    return this.getBlockMap().toArray();
  };
  _proto.getFirstBlock = function getFirstBlock() {
    return this.getBlockMap().first();
  };
  _proto.getLastBlock = function getLastBlock() {
    return this.getBlockMap().last();
  };
  _proto.getPlainText = function getPlainText(delimiter) {
    return this.getBlockMap().map(function(block) {
      return block ? block.getText() : "";
    }).join(delimiter || "\n");
  };
  _proto.getLastCreatedEntityKey = function getLastCreatedEntityKey2() {
    return DraftEntity$3.__getLastCreatedEntityKey();
  };
  _proto.hasText = function hasText() {
    var blockMap = this.getBlockMap();
    return blockMap.size > 1 || escape(blockMap.first().getText()).replace(/%u200B/g, "").length > 0;
  };
  _proto.createEntity = function createEntity(type, mutability, data) {
    DraftEntity$3.__create(type, mutability, data);
    return this;
  };
  _proto.mergeEntityData = function mergeEntityData(key, toMerge) {
    DraftEntity$3.__mergeData(key, toMerge);
    return this;
  };
  _proto.replaceEntityData = function replaceEntityData(key, newData) {
    DraftEntity$3.__replaceData(key, newData);
    return this;
  };
  _proto.addEntity = function addEntity(instance) {
    DraftEntity$3.__add(instance);
    return this;
  };
  _proto.getEntity = function getEntity(key) {
    return DraftEntity$3.__get(key);
  };
  _proto.getAllEntities = function getAllEntities() {
    return DraftEntity$3.__getAll();
  };
  _proto.loadWithEntities = function loadWithEntities(entities) {
    return DraftEntity$3.__loadWithEntities(entities);
  };
  ContentState2.createFromBlockArray = function createFromBlockArray(blocks, entityMap) {
    var theBlocks = Array.isArray(blocks) ? blocks : blocks.contentBlocks;
    var blockMap = BlockMapBuilder$3.createFromArray(theBlocks);
    var selectionState = blockMap.isEmpty() ? new SelectionState$3() : SelectionState$3.createEmpty(blockMap.first().getKey());
    return new ContentState2({
      blockMap,
      entityMap: entityMap || DraftEntity$3,
      selectionBefore: selectionState,
      selectionAfter: selectionState
    });
  };
  ContentState2.createFromText = function createFromText(text) {
    var delimiter = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : /\r\n?|\n/g;
    var strings = text.split(delimiter);
    var blocks = strings.map(function(block) {
      block = sanitizeDraftText$1(block);
      return new ContentBlockNodeRecord({
        key: generateRandomKey$7(),
        text: block,
        type: "unstyled",
        characterList: List$8(Repeat$2(CharacterMetadata$5.EMPTY, block.length))
      });
    });
    return ContentState2.createFromBlockArray(blocks);
  };
  ContentState2.fromJS = function fromJS2(state) {
    return new ContentState2(_objectSpread$a({}, state, {
      blockMap: OrderedMap$4(state.blockMap).map(ContentState2.createContentBlockFromJS),
      selectionBefore: new SelectionState$3(state.selectionBefore),
      selectionAfter: new SelectionState$3(state.selectionAfter)
    }));
  };
  ContentState2.createContentBlockFromJS = function createContentBlockFromJS(block) {
    var characterList = block.characterList;
    return new ContentBlockNodeRecord(_objectSpread$a({}, block, {
      data: ImmutableMap(block.data),
      characterList: characterList != null ? List$8((Array.isArray(characterList) ? characterList : getOwnObjectValues(characterList)).map(function(c) {
        return CharacterMetadata$5.fromJS(c);
      })) : void 0
    }));
  };
  return ContentState2;
}(ContentStateRecord);
var ContentState_1 = ContentState$3;
var invariant$m = invariant_1;
var NEUTRAL = "NEUTRAL";
var LTR = "LTR";
var RTL = "RTL";
var globalDir = null;
function isStrong(dir) {
  return dir === LTR || dir === RTL;
}
function getHTMLDir(dir) {
  !isStrong(dir) ? invariant$m(false) : void 0;
  return dir === LTR ? "ltr" : "rtl";
}
function getHTMLDirIfDifferent(dir, otherDir) {
  !isStrong(dir) ? invariant$m(false) : void 0;
  !isStrong(otherDir) ? invariant$m(false) : void 0;
  return dir === otherDir ? null : getHTMLDir(dir);
}
function setGlobalDir(dir) {
  globalDir = dir;
}
function initGlobalDir() {
  setGlobalDir(LTR);
}
function getGlobalDir() {
  if (!globalDir) {
    this.initGlobalDir();
  }
  !globalDir ? invariant$m(false) : void 0;
  return globalDir;
}
var UnicodeBidiDirection$4 = {
  NEUTRAL,
  LTR,
  RTL,
  isStrong,
  getHTMLDir,
  getHTMLDirIfDifferent,
  setGlobalDir,
  initGlobalDir,
  getGlobalDir
};
var UnicodeBidiDirection_1 = UnicodeBidiDirection$4;
var UnicodeBidiDirection$3 = UnicodeBidiDirection_1;
var invariant$l = invariant_1;
var RANGE_BY_BIDI_TYPE = {
  L: "A-Za-z\xAA\xB5\xBA\xC0-\xD6\xD8-\xF6\xF8-\u01BA\u01BB\u01BC-\u01BF\u01C0-\u01C3\u01C4-\u0293\u0294\u0295-\u02AF\u02B0-\u02B8\u02BB-\u02C1\u02D0-\u02D1\u02E0-\u02E4\u02EE\u0370-\u0373\u0376-\u0377\u037A\u037B-\u037D\u037F\u0386\u0388-\u038A\u038C\u038E-\u03A1\u03A3-\u03F5\u03F7-\u0481\u0482\u048A-\u052F\u0531-\u0556\u0559\u055A-\u055F\u0561-\u0587\u0589\u0903\u0904-\u0939\u093B\u093D\u093E-\u0940\u0949-\u094C\u094E-\u094F\u0950\u0958-\u0961\u0964-\u0965\u0966-\u096F\u0970\u0971\u0972-\u0980\u0982-\u0983\u0985-\u098C\u098F-\u0990\u0993-\u09A8\u09AA-\u09B0\u09B2\u09B6-\u09B9\u09BD\u09BE-\u09C0\u09C7-\u09C8\u09CB-\u09CC\u09CE\u09D7\u09DC-\u09DD\u09DF-\u09E1\u09E6-\u09EF\u09F0-\u09F1\u09F4-\u09F9\u09FA\u0A03\u0A05-\u0A0A\u0A0F-\u0A10\u0A13-\u0A28\u0A2A-\u0A30\u0A32-\u0A33\u0A35-\u0A36\u0A38-\u0A39\u0A3E-\u0A40\u0A59-\u0A5C\u0A5E\u0A66-\u0A6F\u0A72-\u0A74\u0A83\u0A85-\u0A8D\u0A8F-\u0A91\u0A93-\u0AA8\u0AAA-\u0AB0\u0AB2-\u0AB3\u0AB5-\u0AB9\u0ABD\u0ABE-\u0AC0\u0AC9\u0ACB-\u0ACC\u0AD0\u0AE0-\u0AE1\u0AE6-\u0AEF\u0AF0\u0B02-\u0B03\u0B05-\u0B0C\u0B0F-\u0B10\u0B13-\u0B28\u0B2A-\u0B30\u0B32-\u0B33\u0B35-\u0B39\u0B3D\u0B3E\u0B40\u0B47-\u0B48\u0B4B-\u0B4C\u0B57\u0B5C-\u0B5D\u0B5F-\u0B61\u0B66-\u0B6F\u0B70\u0B71\u0B72-\u0B77\u0B83\u0B85-\u0B8A\u0B8E-\u0B90\u0B92-\u0B95\u0B99-\u0B9A\u0B9C\u0B9E-\u0B9F\u0BA3-\u0BA4\u0BA8-\u0BAA\u0BAE-\u0BB9\u0BBE-\u0BBF\u0BC1-\u0BC2\u0BC6-\u0BC8\u0BCA-\u0BCC\u0BD0\u0BD7\u0BE6-\u0BEF\u0BF0-\u0BF2\u0C01-\u0C03\u0C05-\u0C0C\u0C0E-\u0C10\u0C12-\u0C28\u0C2A-\u0C39\u0C3D\u0C41-\u0C44\u0C58-\u0C59\u0C60-\u0C61\u0C66-\u0C6F\u0C7F\u0C82-\u0C83\u0C85-\u0C8C\u0C8E-\u0C90\u0C92-\u0CA8\u0CAA-\u0CB3\u0CB5-\u0CB9\u0CBD\u0CBE\u0CBF\u0CC0-\u0CC4\u0CC6\u0CC7-\u0CC8\u0CCA-\u0CCB\u0CD5-\u0CD6\u0CDE\u0CE0-\u0CE1\u0CE6-\u0CEF\u0CF1-\u0CF2\u0D02-\u0D03\u0D05-\u0D0C\u0D0E-\u0D10\u0D12-\u0D3A\u0D3D\u0D3E-\u0D40\u0D46-\u0D48\u0D4A-\u0D4C\u0D4E\u0D57\u0D60-\u0D61\u0D66-\u0D6F\u0D70-\u0D75\u0D79\u0D7A-\u0D7F\u0D82-\u0D83\u0D85-\u0D96\u0D9A-\u0DB1\u0DB3-\u0DBB\u0DBD\u0DC0-\u0DC6\u0DCF-\u0DD1\u0DD8-\u0DDF\u0DE6-\u0DEF\u0DF2-\u0DF3\u0DF4\u0E01-\u0E30\u0E32-\u0E33\u0E40-\u0E45\u0E46\u0E4F\u0E50-\u0E59\u0E5A-\u0E5B\u0E81-\u0E82\u0E84\u0E87-\u0E88\u0E8A\u0E8D\u0E94-\u0E97\u0E99-\u0E9F\u0EA1-\u0EA3\u0EA5\u0EA7\u0EAA-\u0EAB\u0EAD-\u0EB0\u0EB2-\u0EB3\u0EBD\u0EC0-\u0EC4\u0EC6\u0ED0-\u0ED9\u0EDC-\u0EDF\u0F00\u0F01-\u0F03\u0F04-\u0F12\u0F13\u0F14\u0F15-\u0F17\u0F1A-\u0F1F\u0F20-\u0F29\u0F2A-\u0F33\u0F34\u0F36\u0F38\u0F3E-\u0F3F\u0F40-\u0F47\u0F49-\u0F6C\u0F7F\u0F85\u0F88-\u0F8C\u0FBE-\u0FC5\u0FC7-\u0FCC\u0FCE-\u0FCF\u0FD0-\u0FD4\u0FD5-\u0FD8\u0FD9-\u0FDA\u1000-\u102A\u102B-\u102C\u1031\u1038\u103B-\u103C\u103F\u1040-\u1049\u104A-\u104F\u1050-\u1055\u1056-\u1057\u105A-\u105D\u1061\u1062-\u1064\u1065-\u1066\u1067-\u106D\u106E-\u1070\u1075-\u1081\u1083-\u1084\u1087-\u108C\u108E\u108F\u1090-\u1099\u109A-\u109C\u109E-\u109F\u10A0-\u10C5\u10C7\u10CD\u10D0-\u10FA\u10FB\u10FC\u10FD-\u1248\u124A-\u124D\u1250-\u1256\u1258\u125A-\u125D\u1260-\u1288\u128A-\u128D\u1290-\u12B0\u12B2-\u12B5\u12B8-\u12BE\u12C0\u12C2-\u12C5\u12C8-\u12D6\u12D8-\u1310\u1312-\u1315\u1318-\u135A\u1360-\u1368\u1369-\u137C\u1380-\u138F\u13A0-\u13F4\u1401-\u166C\u166D-\u166E\u166F-\u167F\u1681-\u169A\u16A0-\u16EA\u16EB-\u16ED\u16EE-\u16F0\u16F1-\u16F8\u1700-\u170C\u170E-\u1711\u1720-\u1731\u1735-\u1736\u1740-\u1751\u1760-\u176C\u176E-\u1770\u1780-\u17B3\u17B6\u17BE-\u17C5\u17C7-\u17C8\u17D4-\u17D6\u17D7\u17D8-\u17DA\u17DC\u17E0-\u17E9\u1810-\u1819\u1820-\u1842\u1843\u1844-\u1877\u1880-\u18A8\u18AA\u18B0-\u18F5\u1900-\u191E\u1923-\u1926\u1929-\u192B\u1930-\u1931\u1933-\u1938\u1946-\u194F\u1950-\u196D\u1970-\u1974\u1980-\u19AB\u19B0-\u19C0\u19C1-\u19C7\u19C8-\u19C9\u19D0-\u19D9\u19DA\u1A00-\u1A16\u1A19-\u1A1A\u1A1E-\u1A1F\u1A20-\u1A54\u1A55\u1A57\u1A61\u1A63-\u1A64\u1A6D-\u1A72\u1A80-\u1A89\u1A90-\u1A99\u1AA0-\u1AA6\u1AA7\u1AA8-\u1AAD\u1B04\u1B05-\u1B33\u1B35\u1B3B\u1B3D-\u1B41\u1B43-\u1B44\u1B45-\u1B4B\u1B50-\u1B59\u1B5A-\u1B60\u1B61-\u1B6A\u1B74-\u1B7C\u1B82\u1B83-\u1BA0\u1BA1\u1BA6-\u1BA7\u1BAA\u1BAE-\u1BAF\u1BB0-\u1BB9\u1BBA-\u1BE5\u1BE7\u1BEA-\u1BEC\u1BEE\u1BF2-\u1BF3\u1BFC-\u1BFF\u1C00-\u1C23\u1C24-\u1C2B\u1C34-\u1C35\u1C3B-\u1C3F\u1C40-\u1C49\u1C4D-\u1C4F\u1C50-\u1C59\u1C5A-\u1C77\u1C78-\u1C7D\u1C7E-\u1C7F\u1CC0-\u1CC7\u1CD3\u1CE1\u1CE9-\u1CEC\u1CEE-\u1CF1\u1CF2-\u1CF3\u1CF5-\u1CF6\u1D00-\u1D2B\u1D2C-\u1D6A\u1D6B-\u1D77\u1D78\u1D79-\u1D9A\u1D9B-\u1DBF\u1E00-\u1F15\u1F18-\u1F1D\u1F20-\u1F45\u1F48-\u1F4D\u1F50-\u1F57\u1F59\u1F5B\u1F5D\u1F5F-\u1F7D\u1F80-\u1FB4\u1FB6-\u1FBC\u1FBE\u1FC2-\u1FC4\u1FC6-\u1FCC\u1FD0-\u1FD3\u1FD6-\u1FDB\u1FE0-\u1FEC\u1FF2-\u1FF4\u1FF6-\u1FFC\u200E\u2071\u207F\u2090-\u209C\u2102\u2107\u210A-\u2113\u2115\u2119-\u211D\u2124\u2126\u2128\u212A-\u212D\u212F-\u2134\u2135-\u2138\u2139\u213C-\u213F\u2145-\u2149\u214E\u214F\u2160-\u2182\u2183-\u2184\u2185-\u2188\u2336-\u237A\u2395\u249C-\u24E9\u26AC\u2800-\u28FF\u2C00-\u2C2E\u2C30-\u2C5E\u2C60-\u2C7B\u2C7C-\u2C7D\u2C7E-\u2CE4\u2CEB-\u2CEE\u2CF2-\u2CF3\u2D00-\u2D25\u2D27\u2D2D\u2D30-\u2D67\u2D6F\u2D70\u2D80-\u2D96\u2DA0-\u2DA6\u2DA8-\u2DAE\u2DB0-\u2DB6\u2DB8-\u2DBE\u2DC0-\u2DC6\u2DC8-\u2DCE\u2DD0-\u2DD6\u2DD8-\u2DDE\u3005\u3006\u3007\u3021-\u3029\u302E-\u302F\u3031-\u3035\u3038-\u303A\u303B\u303C\u3041-\u3096\u309D-\u309E\u309F\u30A1-\u30FA\u30FC-\u30FE\u30FF\u3105-\u312D\u3131-\u318E\u3190-\u3191\u3192-\u3195\u3196-\u319F\u31A0-\u31BA\u31F0-\u31FF\u3200-\u321C\u3220-\u3229\u322A-\u3247\u3248-\u324F\u3260-\u327B\u327F\u3280-\u3289\u328A-\u32B0\u32C0-\u32CB\u32D0-\u32FE\u3300-\u3376\u337B-\u33DD\u33E0-\u33FE\u3400-\u4DB5\u4E00-\u9FCC\uA000-\uA014\uA015\uA016-\uA48C\uA4D0-\uA4F7\uA4F8-\uA4FD\uA4FE-\uA4FF\uA500-\uA60B\uA60C\uA610-\uA61F\uA620-\uA629\uA62A-\uA62B\uA640-\uA66D\uA66E\uA680-\uA69B\uA69C-\uA69D\uA6A0-\uA6E5\uA6E6-\uA6EF\uA6F2-\uA6F7\uA722-\uA76F\uA770\uA771-\uA787\uA789-\uA78A\uA78B-\uA78E\uA790-\uA7AD\uA7B0-\uA7B1\uA7F7\uA7F8-\uA7F9\uA7FA\uA7FB-\uA801\uA803-\uA805\uA807-\uA80A\uA80C-\uA822\uA823-\uA824\uA827\uA830-\uA835\uA836-\uA837\uA840-\uA873\uA880-\uA881\uA882-\uA8B3\uA8B4-\uA8C3\uA8CE-\uA8CF\uA8D0-\uA8D9\uA8F2-\uA8F7\uA8F8-\uA8FA\uA8FB\uA900-\uA909\uA90A-\uA925\uA92E-\uA92F\uA930-\uA946\uA952-\uA953\uA95F\uA960-\uA97C\uA983\uA984-\uA9B2\uA9B4-\uA9B5\uA9BA-\uA9BB\uA9BD-\uA9C0\uA9C1-\uA9CD\uA9CF\uA9D0-\uA9D9\uA9DE-\uA9DF\uA9E0-\uA9E4\uA9E6\uA9E7-\uA9EF\uA9F0-\uA9F9\uA9FA-\uA9FE\uAA00-\uAA28\uAA2F-\uAA30\uAA33-\uAA34\uAA40-\uAA42\uAA44-\uAA4B\uAA4D\uAA50-\uAA59\uAA5C-\uAA5F\uAA60-\uAA6F\uAA70\uAA71-\uAA76\uAA77-\uAA79\uAA7A\uAA7B\uAA7D\uAA7E-\uAAAF\uAAB1\uAAB5-\uAAB6\uAAB9-\uAABD\uAAC0\uAAC2\uAADB-\uAADC\uAADD\uAADE-\uAADF\uAAE0-\uAAEA\uAAEB\uAAEE-\uAAEF\uAAF0-\uAAF1\uAAF2\uAAF3-\uAAF4\uAAF5\uAB01-\uAB06\uAB09-\uAB0E\uAB11-\uAB16\uAB20-\uAB26\uAB28-\uAB2E\uAB30-\uAB5A\uAB5B\uAB5C-\uAB5F\uAB64-\uAB65\uABC0-\uABE2\uABE3-\uABE4\uABE6-\uABE7\uABE9-\uABEA\uABEB\uABEC\uABF0-\uABF9\uAC00-\uD7A3\uD7B0-\uD7C6\uD7CB-\uD7FB\uE000-\uF8FF\uF900-\uFA6D\uFA70-\uFAD9\uFB00-\uFB06\uFB13-\uFB17\uFF21-\uFF3A\uFF41-\uFF5A\uFF66-\uFF6F\uFF70\uFF71-\uFF9D\uFF9E-\uFF9F\uFFA0-\uFFBE\uFFC2-\uFFC7\uFFCA-\uFFCF\uFFD2-\uFFD7\uFFDA-\uFFDC",
  R: "\u0590\u05BE\u05C0\u05C3\u05C6\u05C8-\u05CF\u05D0-\u05EA\u05EB-\u05EF\u05F0-\u05F2\u05F3-\u05F4\u05F5-\u05FF\u07C0-\u07C9\u07CA-\u07EA\u07F4-\u07F5\u07FA\u07FB-\u07FF\u0800-\u0815\u081A\u0824\u0828\u082E-\u082F\u0830-\u083E\u083F\u0840-\u0858\u085C-\u085D\u085E\u085F-\u089F\u200F\uFB1D\uFB1F-\uFB28\uFB2A-\uFB36\uFB37\uFB38-\uFB3C\uFB3D\uFB3E\uFB3F\uFB40-\uFB41\uFB42\uFB43-\uFB44\uFB45\uFB46-\uFB4F",
  AL: "\u0608\u060B\u060D\u061B\u061C\u061D\u061E-\u061F\u0620-\u063F\u0640\u0641-\u064A\u066D\u066E-\u066F\u0671-\u06D3\u06D4\u06D5\u06E5-\u06E6\u06EE-\u06EF\u06FA-\u06FC\u06FD-\u06FE\u06FF\u0700-\u070D\u070E\u070F\u0710\u0712-\u072F\u074B-\u074C\u074D-\u07A5\u07B1\u07B2-\u07BF\u08A0-\u08B2\u08B3-\u08E3\uFB50-\uFBB1\uFBB2-\uFBC1\uFBC2-\uFBD2\uFBD3-\uFD3D\uFD40-\uFD4F\uFD50-\uFD8F\uFD90-\uFD91\uFD92-\uFDC7\uFDC8-\uFDCF\uFDF0-\uFDFB\uFDFC\uFDFE-\uFDFF\uFE70-\uFE74\uFE75\uFE76-\uFEFC\uFEFD-\uFEFE"
};
var REGEX_STRONG = new RegExp("[" + RANGE_BY_BIDI_TYPE.L + RANGE_BY_BIDI_TYPE.R + RANGE_BY_BIDI_TYPE.AL + "]");
var REGEX_RTL = new RegExp("[" + RANGE_BY_BIDI_TYPE.R + RANGE_BY_BIDI_TYPE.AL + "]");
function firstStrongChar(str) {
  var match = REGEX_STRONG.exec(str);
  return match == null ? null : match[0];
}
function firstStrongCharDir(str) {
  var strongChar = firstStrongChar(str);
  if (strongChar == null) {
    return UnicodeBidiDirection$3.NEUTRAL;
  }
  return REGEX_RTL.exec(strongChar) ? UnicodeBidiDirection$3.RTL : UnicodeBidiDirection$3.LTR;
}
function resolveBlockDir(str, fallback) {
  fallback = fallback || UnicodeBidiDirection$3.NEUTRAL;
  if (!str.length) {
    return fallback;
  }
  var blockDir = firstStrongCharDir(str);
  return blockDir === UnicodeBidiDirection$3.NEUTRAL ? fallback : blockDir;
}
function getDirection(str, strongFallback) {
  if (!strongFallback) {
    strongFallback = UnicodeBidiDirection$3.getGlobalDir();
  }
  !UnicodeBidiDirection$3.isStrong(strongFallback) ? invariant$l(false) : void 0;
  return resolveBlockDir(str, strongFallback);
}
function isDirectionLTR(str, strongFallback) {
  return getDirection(str, strongFallback) === UnicodeBidiDirection$3.LTR;
}
function isDirectionRTL(str, strongFallback) {
  return getDirection(str, strongFallback) === UnicodeBidiDirection$3.RTL;
}
var UnicodeBidi$3 = {
  firstStrongChar,
  firstStrongCharDir,
  resolveBlockDir,
  getDirection,
  isDirectionLTR,
  isDirectionRTL
};
var UnicodeBidi_1 = UnicodeBidi$3;
function _defineProperty$g(obj, key, value) {
  if (key in obj) {
    Object.defineProperty(obj, key, { value, enumerable: true, configurable: true, writable: true });
  } else {
    obj[key] = value;
  }
  return obj;
}
var UnicodeBidi$2 = UnicodeBidi_1;
var UnicodeBidiDirection$2 = UnicodeBidiDirection_1;
var invariant$k = invariant_1;
var UnicodeBidiService$1 = /* @__PURE__ */ function() {
  function UnicodeBidiService2(defaultDir) {
    _defineProperty$g(this, "_defaultDir", void 0);
    _defineProperty$g(this, "_lastDir", void 0);
    if (!defaultDir) {
      defaultDir = UnicodeBidiDirection$2.getGlobalDir();
    } else {
      !UnicodeBidiDirection$2.isStrong(defaultDir) ? invariant$k(false) : void 0;
    }
    this._defaultDir = defaultDir;
    this.reset();
  }
  var _proto = UnicodeBidiService2.prototype;
  _proto.reset = function reset() {
    this._lastDir = this._defaultDir;
  };
  _proto.getDirection = function getDirection2(str) {
    this._lastDir = UnicodeBidi$2.getDirection(str, this._lastDir);
    return this._lastDir;
  };
  return UnicodeBidiService2;
}();
var UnicodeBidiService_1 = UnicodeBidiService$1;
var nullthrows$e = function nullthrows(x) {
  if (x != null) {
    return x;
  }
  throw new Error("Got unexpected null or undefined");
};
var nullthrows_1 = nullthrows$e;
var UnicodeBidiService = UnicodeBidiService_1;
var Immutable$a = immutable.exports;
var nullthrows$d = nullthrows_1;
var OrderedMap$3 = Immutable$a.OrderedMap;
var bidiService;
var EditorBidiService$1 = {
  getDirectionMap: function getDirectionMap(content, prevBidiMap) {
    if (!bidiService) {
      bidiService = new UnicodeBidiService();
    } else {
      bidiService.reset();
    }
    var blockMap = content.getBlockMap();
    var nextBidi = blockMap.valueSeq().map(function(block) {
      return nullthrows$d(bidiService).getDirection(block.getText());
    });
    var bidiMap = OrderedMap$3(blockMap.keySeq().zip(nextBidi));
    if (prevBidiMap != null && Immutable$a.is(prevBidiMap, bidiMap)) {
      return prevBidiMap;
    }
    return bidiMap;
  }
};
var EditorBidiService_1 = EditorBidiService$1;
function _objectSpread$9(target) {
  for (var i = 1; i < arguments.length; i++) {
    var source = arguments[i] != null ? arguments[i] : {};
    var ownKeys = Object.keys(source);
    if (typeof Object.getOwnPropertySymbols === "function") {
      ownKeys = ownKeys.concat(Object.getOwnPropertySymbols(source).filter(function(sym) {
        return Object.getOwnPropertyDescriptor(source, sym).enumerable;
      }));
    }
    ownKeys.forEach(function(key) {
      _defineProperty$f(target, key, source[key]);
    });
  }
  return target;
}
function _defineProperty$f(obj, key, value) {
  if (key in obj) {
    Object.defineProperty(obj, key, { value, enumerable: true, configurable: true, writable: true });
  } else {
    obj[key] = value;
  }
  return obj;
}
var BlockTree = BlockTree_1;
var ContentState$2 = ContentState_1;
var EditorBidiService = EditorBidiService_1;
var SelectionState$2 = SelectionState_1;
var Immutable$9 = immutable.exports;
var OrderedSet$2 = Immutable$9.OrderedSet, Record = Immutable$9.Record, Stack = Immutable$9.Stack, OrderedMap$2 = Immutable$9.OrderedMap, List$7 = Immutable$9.List;
var defaultRecord = {
  allowUndo: true,
  currentContent: null,
  decorator: null,
  directionMap: null,
  forceSelection: false,
  inCompositionMode: false,
  inlineStyleOverride: null,
  lastChangeType: null,
  nativelyRenderedContent: null,
  redoStack: Stack(),
  selection: null,
  treeMap: null,
  undoStack: Stack()
};
var EditorStateRecord = Record(defaultRecord);
var EditorState$q = /* @__PURE__ */ function() {
  EditorState2.createEmpty = function createEmpty(decorator) {
    return this.createWithText("", decorator);
  };
  EditorState2.createWithText = function createWithText(text, decorator) {
    return EditorState2.createWithContent(ContentState$2.createFromText(text), decorator);
  };
  EditorState2.createWithContent = function createWithContent(contentState, decorator) {
    if (contentState.getBlockMap().count() === 0) {
      return EditorState2.createEmpty(decorator);
    }
    var firstKey = contentState.getBlockMap().first().getKey();
    return EditorState2.create({
      currentContent: contentState,
      undoStack: Stack(),
      redoStack: Stack(),
      decorator: decorator || null,
      selection: SelectionState$2.createEmpty(firstKey)
    });
  };
  EditorState2.create = function create2(config) {
    var currentContent = config.currentContent, decorator = config.decorator;
    var recordConfig = _objectSpread$9({}, config, {
      treeMap: generateNewTreeMap(currentContent, decorator),
      directionMap: EditorBidiService.getDirectionMap(currentContent)
    });
    return new EditorState2(new EditorStateRecord(recordConfig));
  };
  EditorState2.fromJS = function fromJS2(config) {
    return new EditorState2(new EditorStateRecord(_objectSpread$9({}, config, {
      directionMap: config.directionMap != null ? OrderedMap$2(config.directionMap) : config.directionMap,
      inlineStyleOverride: config.inlineStyleOverride != null ? OrderedSet$2(config.inlineStyleOverride) : config.inlineStyleOverride,
      nativelyRenderedContent: config.nativelyRenderedContent != null ? ContentState$2.fromJS(config.nativelyRenderedContent) : config.nativelyRenderedContent,
      redoStack: config.redoStack != null ? Stack(config.redoStack.map(function(v) {
        return ContentState$2.fromJS(v);
      })) : config.redoStack,
      selection: config.selection != null ? new SelectionState$2(config.selection) : config.selection,
      treeMap: config.treeMap != null ? OrderedMap$2(config.treeMap).map(function(v) {
        return List$7(v).map(function(v2) {
          return BlockTree.fromJS(v2);
        });
      }) : config.treeMap,
      undoStack: config.undoStack != null ? Stack(config.undoStack.map(function(v) {
        return ContentState$2.fromJS(v);
      })) : config.undoStack,
      currentContent: ContentState$2.fromJS(config.currentContent)
    })));
  };
  EditorState2.set = function set(editorState, put) {
    var map2 = editorState.getImmutable().withMutations(function(state) {
      var existingDecorator = state.get("decorator");
      var decorator = existingDecorator;
      if (put.decorator === null) {
        decorator = null;
      } else if (put.decorator) {
        decorator = put.decorator;
      }
      var newContent = put.currentContent || editorState.getCurrentContent();
      if (decorator !== existingDecorator) {
        var treeMap = state.get("treeMap");
        var newTreeMap;
        if (decorator && existingDecorator) {
          newTreeMap = regenerateTreeForNewDecorator(newContent, newContent.getBlockMap(), treeMap, decorator, existingDecorator);
        } else {
          newTreeMap = generateNewTreeMap(newContent, decorator);
        }
        state.merge({
          decorator,
          treeMap: newTreeMap,
          nativelyRenderedContent: null
        });
        return;
      }
      var existingContent = editorState.getCurrentContent();
      if (newContent !== existingContent) {
        state.set("treeMap", regenerateTreeForNewBlocks(editorState, newContent.getBlockMap(), newContent.getEntityMap(), decorator));
      }
      state.merge(put);
    });
    return new EditorState2(map2);
  };
  var _proto = EditorState2.prototype;
  _proto.toJS = function toJS() {
    return this.getImmutable().toJS();
  };
  _proto.getAllowUndo = function getAllowUndo() {
    return this.getImmutable().get("allowUndo");
  };
  _proto.getCurrentContent = function getCurrentContent() {
    return this.getImmutable().get("currentContent");
  };
  _proto.getUndoStack = function getUndoStack() {
    return this.getImmutable().get("undoStack");
  };
  _proto.getRedoStack = function getRedoStack() {
    return this.getImmutable().get("redoStack");
  };
  _proto.getSelection = function getSelection() {
    return this.getImmutable().get("selection");
  };
  _proto.getDecorator = function getDecorator() {
    return this.getImmutable().get("decorator");
  };
  _proto.isInCompositionMode = function isInCompositionMode() {
    return this.getImmutable().get("inCompositionMode");
  };
  _proto.mustForceSelection = function mustForceSelection() {
    return this.getImmutable().get("forceSelection");
  };
  _proto.getNativelyRenderedContent = function getNativelyRenderedContent() {
    return this.getImmutable().get("nativelyRenderedContent");
  };
  _proto.getLastChangeType = function getLastChangeType() {
    return this.getImmutable().get("lastChangeType");
  };
  _proto.getInlineStyleOverride = function getInlineStyleOverride() {
    return this.getImmutable().get("inlineStyleOverride");
  };
  EditorState2.setInlineStyleOverride = function setInlineStyleOverride(editorState, inlineStyleOverride) {
    return EditorState2.set(editorState, {
      inlineStyleOverride
    });
  };
  _proto.getCurrentInlineStyle = function getCurrentInlineStyle() {
    var override = this.getInlineStyleOverride();
    if (override != null) {
      return override;
    }
    var content = this.getCurrentContent();
    var selection = this.getSelection();
    if (selection.isCollapsed()) {
      return getInlineStyleForCollapsedSelection(content, selection);
    }
    return getInlineStyleForNonCollapsedSelection(content, selection);
  };
  _proto.getBlockTree = function getBlockTree(blockKey) {
    return this.getImmutable().getIn(["treeMap", blockKey]);
  };
  _proto.isSelectionAtStartOfContent = function isSelectionAtStartOfContent() {
    var firstKey = this.getCurrentContent().getBlockMap().first().getKey();
    return this.getSelection().hasEdgeWithin(firstKey, 0, 0);
  };
  _proto.isSelectionAtEndOfContent = function isSelectionAtEndOfContent() {
    var content = this.getCurrentContent();
    var blockMap = content.getBlockMap();
    var last = blockMap.last();
    var end = last.getLength();
    return this.getSelection().hasEdgeWithin(last.getKey(), end, end);
  };
  _proto.getDirectionMap = function getDirectionMap2() {
    return this.getImmutable().get("directionMap");
  };
  EditorState2.acceptSelection = function acceptSelection(editorState, selection) {
    return updateSelection(editorState, selection, false);
  };
  EditorState2.forceSelection = function forceSelection(editorState, selection) {
    if (!selection.getHasFocus()) {
      selection = selection.set("hasFocus", true);
    }
    return updateSelection(editorState, selection, true);
  };
  EditorState2.moveSelectionToEnd = function moveSelectionToEnd(editorState) {
    var content = editorState.getCurrentContent();
    var lastBlock = content.getLastBlock();
    var lastKey = lastBlock.getKey();
    var length = lastBlock.getLength();
    return EditorState2.acceptSelection(editorState, new SelectionState$2({
      anchorKey: lastKey,
      anchorOffset: length,
      focusKey: lastKey,
      focusOffset: length,
      isBackward: false
    }));
  };
  EditorState2.moveFocusToEnd = function moveFocusToEnd(editorState) {
    var afterSelectionMove = EditorState2.moveSelectionToEnd(editorState);
    return EditorState2.forceSelection(afterSelectionMove, afterSelectionMove.getSelection());
  };
  EditorState2.push = function push(editorState, contentState, changeType) {
    var forceSelection = arguments.length > 3 && arguments[3] !== void 0 ? arguments[3] : true;
    if (editorState.getCurrentContent() === contentState) {
      return editorState;
    }
    var directionMap = EditorBidiService.getDirectionMap(contentState, editorState.getDirectionMap());
    if (!editorState.getAllowUndo()) {
      return EditorState2.set(editorState, {
        currentContent: contentState,
        directionMap,
        lastChangeType: changeType,
        selection: contentState.getSelectionAfter(),
        forceSelection,
        inlineStyleOverride: null
      });
    }
    var selection = editorState.getSelection();
    var currentContent = editorState.getCurrentContent();
    var undoStack = editorState.getUndoStack();
    var newContent = contentState;
    if (selection !== currentContent.getSelectionAfter() || mustBecomeBoundary(editorState, changeType)) {
      undoStack = undoStack.push(currentContent);
      newContent = newContent.set("selectionBefore", selection);
    } else if (changeType === "insert-characters" || changeType === "backspace-character" || changeType === "delete-character") {
      newContent = newContent.set("selectionBefore", currentContent.getSelectionBefore());
    }
    var inlineStyleOverride = editorState.getInlineStyleOverride();
    var overrideChangeTypes = ["adjust-depth", "change-block-type", "split-block"];
    if (overrideChangeTypes.indexOf(changeType) === -1) {
      inlineStyleOverride = null;
    }
    var editorStateChanges = {
      currentContent: newContent,
      directionMap,
      undoStack,
      redoStack: Stack(),
      lastChangeType: changeType,
      selection: contentState.getSelectionAfter(),
      forceSelection,
      inlineStyleOverride
    };
    return EditorState2.set(editorState, editorStateChanges);
  };
  EditorState2.undo = function undo(editorState) {
    if (!editorState.getAllowUndo()) {
      return editorState;
    }
    var undoStack = editorState.getUndoStack();
    var newCurrentContent = undoStack.peek();
    if (!newCurrentContent) {
      return editorState;
    }
    var currentContent = editorState.getCurrentContent();
    var directionMap = EditorBidiService.getDirectionMap(newCurrentContent, editorState.getDirectionMap());
    return EditorState2.set(editorState, {
      currentContent: newCurrentContent,
      directionMap,
      undoStack: undoStack.shift(),
      redoStack: editorState.getRedoStack().push(currentContent),
      forceSelection: true,
      inlineStyleOverride: null,
      lastChangeType: "undo",
      nativelyRenderedContent: null,
      selection: currentContent.getSelectionBefore()
    });
  };
  EditorState2.redo = function redo(editorState) {
    if (!editorState.getAllowUndo()) {
      return editorState;
    }
    var redoStack = editorState.getRedoStack();
    var newCurrentContent = redoStack.peek();
    if (!newCurrentContent) {
      return editorState;
    }
    var currentContent = editorState.getCurrentContent();
    var directionMap = EditorBidiService.getDirectionMap(newCurrentContent, editorState.getDirectionMap());
    return EditorState2.set(editorState, {
      currentContent: newCurrentContent,
      directionMap,
      undoStack: editorState.getUndoStack().push(currentContent),
      redoStack: redoStack.shift(),
      forceSelection: true,
      inlineStyleOverride: null,
      lastChangeType: "redo",
      nativelyRenderedContent: null,
      selection: newCurrentContent.getSelectionAfter()
    });
  };
  function EditorState2(immutable2) {
    _defineProperty$f(this, "_immutable", void 0);
    this._immutable = immutable2;
  }
  _proto.getImmutable = function getImmutable() {
    return this._immutable;
  };
  return EditorState2;
}();
function updateSelection(editorState, selection, forceSelection) {
  return EditorState$q.set(editorState, {
    selection,
    forceSelection,
    nativelyRenderedContent: null,
    inlineStyleOverride: null
  });
}
function generateNewTreeMap(contentState, decorator) {
  return contentState.getBlockMap().map(function(block) {
    return BlockTree.generate(contentState, block, decorator);
  }).toOrderedMap();
}
function regenerateTreeForNewBlocks(editorState, newBlockMap, newEntityMap, decorator) {
  var contentState = editorState.getCurrentContent().set("entityMap", newEntityMap);
  var prevBlockMap = contentState.getBlockMap();
  var prevTreeMap = editorState.getImmutable().get("treeMap");
  return prevTreeMap.merge(newBlockMap.toSeq().filter(function(block, key) {
    return block !== prevBlockMap.get(key);
  }).map(function(block) {
    return BlockTree.generate(contentState, block, decorator);
  }));
}
function regenerateTreeForNewDecorator(content, blockMap, previousTreeMap, decorator, existingDecorator) {
  return previousTreeMap.merge(blockMap.toSeq().filter(function(block) {
    return decorator.getDecorations(block, content) !== existingDecorator.getDecorations(block, content);
  }).map(function(block) {
    return BlockTree.generate(content, block, decorator);
  }));
}
function mustBecomeBoundary(editorState, changeType) {
  var lastChangeType = editorState.getLastChangeType();
  return changeType !== lastChangeType || changeType !== "insert-characters" && changeType !== "backspace-character" && changeType !== "delete-character";
}
function getInlineStyleForCollapsedSelection(content, selection) {
  var startKey = selection.getStartKey();
  var startOffset = selection.getStartOffset();
  var startBlock = content.getBlockForKey(startKey);
  if (startOffset > 0) {
    return startBlock.getInlineStyleAt(startOffset - 1);
  }
  if (startBlock.getLength()) {
    return startBlock.getInlineStyleAt(0);
  }
  return lookUpwardForInlineStyle(content, startKey);
}
function getInlineStyleForNonCollapsedSelection(content, selection) {
  var startKey = selection.getStartKey();
  var startOffset = selection.getStartOffset();
  var startBlock = content.getBlockForKey(startKey);
  if (startOffset < startBlock.getLength()) {
    return startBlock.getInlineStyleAt(startOffset);
  }
  if (startOffset > 0) {
    return startBlock.getInlineStyleAt(startOffset - 1);
  }
  return lookUpwardForInlineStyle(content, startKey);
}
function lookUpwardForInlineStyle(content, fromKey) {
  var lastNonEmpty = content.getBlockMap().reverse().skipUntil(function(_, k) {
    return k === fromKey;
  }).skip(1).skipUntil(function(block, _) {
    return block.getLength();
  }).first();
  if (lastNonEmpty) {
    return lastNonEmpty.getInlineStyleAt(lastNonEmpty.getLength() - 1);
  }
  return OrderedSet$2();
}
var EditorState_1 = EditorState$q;
var ContentBlockNode$5 = ContentBlockNode_1;
var getNextDelimiterBlockKey2 = getNextDelimiterBlockKey_1;
var Immutable$8 = immutable.exports;
var invariant$j = invariant_1;
var OrderedMap$1 = Immutable$8.OrderedMap, List$6 = Immutable$8.List;
var transformBlock3 = function transformBlock4(key, blockMap, func) {
  if (!key) {
    return;
  }
  var block = blockMap.get(key);
  if (!block) {
    return;
  }
  blockMap.set(key, func(block));
};
var updateBlockMapLinks4 = function updateBlockMapLinks5(blockMap, originalBlockToBeMoved, originalTargetBlock, insertionMode, isExperimentalTreeBlock) {
  if (!isExperimentalTreeBlock) {
    return blockMap;
  }
  var isInsertedAfterTarget = insertionMode === "after";
  var originalBlockKey = originalBlockToBeMoved.getKey();
  var originalTargetKey = originalTargetBlock.getKey();
  var originalParentKey = originalBlockToBeMoved.getParentKey();
  var originalNextSiblingKey = originalBlockToBeMoved.getNextSiblingKey();
  var originalPrevSiblingKey = originalBlockToBeMoved.getPrevSiblingKey();
  var newParentKey = originalTargetBlock.getParentKey();
  var newNextSiblingKey = isInsertedAfterTarget ? originalTargetBlock.getNextSiblingKey() : originalTargetKey;
  var newPrevSiblingKey = isInsertedAfterTarget ? originalTargetKey : originalTargetBlock.getPrevSiblingKey();
  return blockMap.withMutations(function(blocks) {
    transformBlock3(originalParentKey, blocks, function(block) {
      var parentChildrenList = block.getChildKeys();
      return block.merge({
        children: parentChildrenList["delete"](parentChildrenList.indexOf(originalBlockKey))
      });
    });
    transformBlock3(originalPrevSiblingKey, blocks, function(block) {
      return block.merge({
        nextSibling: originalNextSiblingKey
      });
    });
    transformBlock3(originalNextSiblingKey, blocks, function(block) {
      return block.merge({
        prevSibling: originalPrevSiblingKey
      });
    });
    transformBlock3(newNextSiblingKey, blocks, function(block) {
      return block.merge({
        prevSibling: originalBlockKey
      });
    });
    transformBlock3(newPrevSiblingKey, blocks, function(block) {
      return block.merge({
        nextSibling: originalBlockKey
      });
    });
    transformBlock3(newParentKey, blocks, function(block) {
      var newParentChildrenList = block.getChildKeys();
      var targetBlockIndex = newParentChildrenList.indexOf(originalTargetKey);
      var insertionIndex = isInsertedAfterTarget ? targetBlockIndex + 1 : targetBlockIndex !== 0 ? targetBlockIndex - 1 : 0;
      var newChildrenArray = newParentChildrenList.toArray();
      newChildrenArray.splice(insertionIndex, 0, originalBlockKey);
      return block.merge({
        children: List$6(newChildrenArray)
      });
    });
    transformBlock3(originalBlockKey, blocks, function(block) {
      return block.merge({
        nextSibling: newNextSiblingKey,
        prevSibling: newPrevSiblingKey,
        parent: newParentKey
      });
    });
  });
};
var moveBlockInContentState$1 = function moveBlockInContentState(contentState, blockToBeMoved, targetBlock, insertionMode) {
  !(insertionMode !== "replace") ? invariant$j(false) : void 0;
  var targetKey = targetBlock.getKey();
  var blockKey = blockToBeMoved.getKey();
  !(blockKey !== targetKey) ? invariant$j(false) : void 0;
  var blockMap = contentState.getBlockMap();
  var isExperimentalTreeBlock = blockToBeMoved instanceof ContentBlockNode$5;
  var blocksToBeMoved = [blockToBeMoved];
  var blockMapWithoutBlocksToBeMoved = blockMap["delete"](blockKey);
  if (isExperimentalTreeBlock) {
    blocksToBeMoved = [];
    blockMapWithoutBlocksToBeMoved = blockMap.withMutations(function(blocks) {
      var nextSiblingKey = blockToBeMoved.getNextSiblingKey();
      var nextDelimiterBlockKey = getNextDelimiterBlockKey2(blockToBeMoved, blocks);
      blocks.toSeq().skipUntil(function(block) {
        return block.getKey() === blockKey;
      }).takeWhile(function(block) {
        var key = block.getKey();
        var isBlockToBeMoved = key === blockKey;
        var hasNextSiblingAndIsNotNextSibling = nextSiblingKey && key !== nextSiblingKey;
        var doesNotHaveNextSiblingAndIsNotDelimiter = !nextSiblingKey && block.getParentKey() && (!nextDelimiterBlockKey || key !== nextDelimiterBlockKey);
        return !!(isBlockToBeMoved || hasNextSiblingAndIsNotNextSibling || doesNotHaveNextSiblingAndIsNotDelimiter);
      }).forEach(function(block) {
        blocksToBeMoved.push(block);
        blocks["delete"](block.getKey());
      });
    });
  }
  var blocksBefore = blockMapWithoutBlocksToBeMoved.toSeq().takeUntil(function(v) {
    return v === targetBlock;
  });
  var blocksAfter = blockMapWithoutBlocksToBeMoved.toSeq().skipUntil(function(v) {
    return v === targetBlock;
  }).skip(1);
  var slicedBlocks = blocksToBeMoved.map(function(block) {
    return [block.getKey(), block];
  });
  var newBlocks = OrderedMap$1();
  if (insertionMode === "before") {
    var blockBefore = contentState.getBlockBefore(targetKey);
    !(!blockBefore || blockBefore.getKey() !== blockToBeMoved.getKey()) ? invariant$j(false) : void 0;
    newBlocks = blocksBefore.concat([].concat(slicedBlocks, [[targetKey, targetBlock]]), blocksAfter).toOrderedMap();
  } else if (insertionMode === "after") {
    var blockAfter = contentState.getBlockAfter(targetKey);
    !(!blockAfter || blockAfter.getKey() !== blockKey) ? invariant$j(false) : void 0;
    newBlocks = blocksBefore.concat([[targetKey, targetBlock]].concat(slicedBlocks), blocksAfter).toOrderedMap();
  }
  return contentState.merge({
    blockMap: updateBlockMapLinks4(newBlocks, blockToBeMoved, targetBlock, insertionMode, isExperimentalTreeBlock),
    selectionBefore: contentState.getSelectionAfter(),
    selectionAfter: contentState.getSelectionAfter().merge({
      anchorKey: blockKey,
      focusKey: blockKey
    })
  });
};
var moveBlockInContentState_1 = moveBlockInContentState$1;
function _objectSpread$8(target) {
  for (var i = 1; i < arguments.length; i++) {
    var source = arguments[i] != null ? arguments[i] : {};
    var ownKeys = Object.keys(source);
    if (typeof Object.getOwnPropertySymbols === "function") {
      ownKeys = ownKeys.concat(Object.getOwnPropertySymbols(source).filter(function(sym) {
        return Object.getOwnPropertyDescriptor(source, sym).enumerable;
      }));
    }
    ownKeys.forEach(function(key) {
      _defineProperty$e(target, key, source[key]);
    });
  }
  return target;
}
function _defineProperty$e(obj, key, value) {
  if (key in obj) {
    Object.defineProperty(obj, key, { value, enumerable: true, configurable: true, writable: true });
  } else {
    obj[key] = value;
  }
  return obj;
}
var BlockMapBuilder$2 = BlockMapBuilder_1;
var CharacterMetadata$4 = CharacterMetadata_1;
var ContentBlock$5 = ContentBlock_1;
var ContentBlockNode$4 = ContentBlockNode_1;
var DraftModifier$d = DraftModifier_1;
var EditorState$p = EditorState_1;
var generateRandomKey$6 = generateRandomKey_1;
var gkx$6 = gkx$8;
var Immutable$7 = immutable.exports;
var moveBlockInContentState2 = moveBlockInContentState_1;
var experimentalTreeDataSupport$5 = gkx$6("draft_tree_data_support");
var ContentBlockRecord$1 = experimentalTreeDataSupport$5 ? ContentBlockNode$4 : ContentBlock$5;
var List$5 = Immutable$7.List, Repeat$1 = Immutable$7.Repeat;
var AtomicBlockUtils$1 = {
  insertAtomicBlock: function insertAtomicBlock(editorState, entityKey, character) {
    var contentState = editorState.getCurrentContent();
    var selectionState = editorState.getSelection();
    var afterRemoval = DraftModifier$d.removeRange(contentState, selectionState, "backward");
    var targetSelection = afterRemoval.getSelectionAfter();
    var afterSplit = DraftModifier$d.splitBlock(afterRemoval, targetSelection);
    var insertionTarget = afterSplit.getSelectionAfter();
    var asAtomicBlock = DraftModifier$d.setBlockType(afterSplit, insertionTarget, "atomic");
    var charData = CharacterMetadata$4.create({
      entity: entityKey
    });
    var atomicBlockConfig = {
      key: generateRandomKey$6(),
      type: "atomic",
      text: character,
      characterList: List$5(Repeat$1(charData, character.length))
    };
    var atomicDividerBlockConfig = {
      key: generateRandomKey$6(),
      type: "unstyled"
    };
    if (experimentalTreeDataSupport$5) {
      atomicBlockConfig = _objectSpread$8({}, atomicBlockConfig, {
        nextSibling: atomicDividerBlockConfig.key
      });
      atomicDividerBlockConfig = _objectSpread$8({}, atomicDividerBlockConfig, {
        prevSibling: atomicBlockConfig.key
      });
    }
    var fragmentArray = [new ContentBlockRecord$1(atomicBlockConfig), new ContentBlockRecord$1(atomicDividerBlockConfig)];
    var fragment = BlockMapBuilder$2.createFromArray(fragmentArray);
    var withAtomicBlock = DraftModifier$d.replaceWithFragment(asAtomicBlock, insertionTarget, fragment);
    var newContent = withAtomicBlock.merge({
      selectionBefore: selectionState,
      selectionAfter: withAtomicBlock.getSelectionAfter().set("hasFocus", true)
    });
    return EditorState$p.push(editorState, newContent, "insert-fragment");
  },
  moveAtomicBlock: function moveAtomicBlock(editorState, atomicBlock, targetRange, insertionMode) {
    var contentState = editorState.getCurrentContent();
    var selectionState = editorState.getSelection();
    var withMovedAtomicBlock;
    if (insertionMode === "before" || insertionMode === "after") {
      var targetBlock = contentState.getBlockForKey(insertionMode === "before" ? targetRange.getStartKey() : targetRange.getEndKey());
      withMovedAtomicBlock = moveBlockInContentState2(contentState, atomicBlock, targetBlock, insertionMode);
    } else {
      var afterRemoval = DraftModifier$d.removeRange(contentState, targetRange, "backward");
      var selectionAfterRemoval = afterRemoval.getSelectionAfter();
      var _targetBlock = afterRemoval.getBlockForKey(selectionAfterRemoval.getFocusKey());
      if (selectionAfterRemoval.getStartOffset() === 0) {
        withMovedAtomicBlock = moveBlockInContentState2(afterRemoval, atomicBlock, _targetBlock, "before");
      } else if (selectionAfterRemoval.getEndOffset() === _targetBlock.getLength()) {
        withMovedAtomicBlock = moveBlockInContentState2(afterRemoval, atomicBlock, _targetBlock, "after");
      } else {
        var afterSplit = DraftModifier$d.splitBlock(afterRemoval, selectionAfterRemoval);
        var selectionAfterSplit = afterSplit.getSelectionAfter();
        var _targetBlock2 = afterSplit.getBlockForKey(selectionAfterSplit.getFocusKey());
        withMovedAtomicBlock = moveBlockInContentState2(afterSplit, atomicBlock, _targetBlock2, "before");
      }
    }
    var newContent = withMovedAtomicBlock.merge({
      selectionBefore: selectionState,
      selectionAfter: withMovedAtomicBlock.getSelectionAfter().set("hasFocus", true)
    });
    return EditorState$p.push(editorState, newContent, "move-block");
  }
};
var AtomicBlockUtils_1 = AtomicBlockUtils$1;
function _defineProperty$d(obj, key, value) {
  if (key in obj) {
    Object.defineProperty(obj, key, { value, enumerable: true, configurable: true, writable: true });
  } else {
    obj[key] = value;
  }
  return obj;
}
var Immutable$6 = immutable.exports;
var List$4 = Immutable$6.List;
var DELIMITER = ".";
var CompositeDraftDecorator$1 = /* @__PURE__ */ function() {
  function CompositeDraftDecorator2(decorators) {
    _defineProperty$d(this, "_decorators", void 0);
    this._decorators = decorators.slice();
  }
  var _proto = CompositeDraftDecorator2.prototype;
  _proto.getDecorations = function getDecorations(block, contentState) {
    var decorations = Array(block.getText().length).fill(null);
    this._decorators.forEach(function(decorator, ii2) {
      var counter = 0;
      var strategy = decorator.strategy;
      var callback = function callback2(start, end) {
        if (canOccupySlice(decorations, start, end)) {
          occupySlice(decorations, start, end, ii2 + DELIMITER + counter);
          counter++;
        }
      };
      strategy(block, callback, contentState);
    });
    return List$4(decorations);
  };
  _proto.getComponentForKey = function getComponentForKey(key) {
    var componentKey = parseInt(key.split(DELIMITER)[0], 10);
    return this._decorators[componentKey].component;
  };
  _proto.getPropsForKey = function getPropsForKey(key) {
    var componentKey = parseInt(key.split(DELIMITER)[0], 10);
    return this._decorators[componentKey].props;
  };
  return CompositeDraftDecorator2;
}();
function canOccupySlice(decorations, start, end) {
  for (var ii2 = start; ii2 < end; ii2++) {
    if (decorations[ii2] != null) {
      return false;
    }
  }
  return true;
}
function occupySlice(targetArr, start, end, componentKey) {
  for (var ii2 = start; ii2 < end; ii2++) {
    targetArr[ii2] = componentKey;
  }
}
var CompositeDraftDecorator_1 = CompositeDraftDecorator$1;
function cx$7(classNames) {
  if (typeof classNames == "object") {
    return Object.keys(classNames).filter(function(className) {
      return classNames[className];
    }).map(replace).join(" ");
  }
  return Array.prototype.map.call(arguments, replace).join(" ");
}
function replace(str) {
  return str.replace(/\//g, "-");
}
var cx_1 = cx$7;
var React$b = React__default;
var cx$6 = cx_1;
var _require$4 = immutable.exports, Map$4 = _require$4.Map;
var UL_WRAP = React$b.createElement("ul", {
  className: cx$6("public/DraftStyleDefault/ul")
});
var OL_WRAP = React$b.createElement("ol", {
  className: cx$6("public/DraftStyleDefault/ol")
});
var PRE_WRAP = React$b.createElement("pre", {
  className: cx$6("public/DraftStyleDefault/pre")
});
var DefaultDraftBlockRenderMap$3 = Map$4({
  "header-one": {
    element: "h1"
  },
  "header-two": {
    element: "h2"
  },
  "header-three": {
    element: "h3"
  },
  "header-four": {
    element: "h4"
  },
  "header-five": {
    element: "h5"
  },
  "header-six": {
    element: "h6"
  },
  section: {
    element: "section"
  },
  article: {
    element: "article"
  },
  "unordered-list-item": {
    element: "li",
    wrapper: UL_WRAP
  },
  "ordered-list-item": {
    element: "li",
    wrapper: OL_WRAP
  },
  blockquote: {
    element: "blockquote"
  },
  atomic: {
    element: "figure"
  },
  "code-block": {
    element: "pre",
    wrapper: PRE_WRAP
  },
  unstyled: {
    element: "div",
    aliasedElements: ["p"]
  }
});
var DefaultDraftBlockRenderMap_1 = DefaultDraftBlockRenderMap$3;
var DefaultDraftInlineStyle$2 = {
  BOLD: {
    fontWeight: "bold"
  },
  CODE: {
    fontFamily: "monospace",
    wordWrap: "break-word"
  },
  ITALIC: {
    fontStyle: "italic"
  },
  STRIKETHROUGH: {
    textDecoration: "line-through"
  },
  UNDERLINE: {
    textDecoration: "underline"
  }
};
/*
object-assign
(c) Sindre Sorhus
@license MIT
*/
var getOwnPropertySymbols = Object.getOwnPropertySymbols;
var hasOwnProperty$1 = Object.prototype.hasOwnProperty;
var propIsEnumerable = Object.prototype.propertyIsEnumerable;
function toObject(val) {
  if (val === null || val === void 0) {
    throw new TypeError("Object.assign cannot be called with null or undefined");
  }
  return Object(val);
}
function shouldUseNative() {
  try {
    if (!Object.assign) {
      return false;
    }
    var test1 = new String("abc");
    test1[5] = "de";
    if (Object.getOwnPropertyNames(test1)[0] === "5") {
      return false;
    }
    var test2 = {};
    for (var i = 0; i < 10; i++) {
      test2["_" + String.fromCharCode(i)] = i;
    }
    var order2 = Object.getOwnPropertyNames(test2).map(function(n) {
      return test2[n];
    });
    if (order2.join("") !== "0123456789") {
      return false;
    }
    var test3 = {};
    "abcdefghijklmnopqrst".split("").forEach(function(letter) {
      test3[letter] = letter;
    });
    if (Object.keys(Object.assign({}, test3)).join("") !== "abcdefghijklmnopqrst") {
      return false;
    }
    return true;
  } catch (err) {
    return false;
  }
}
var objectAssign = shouldUseNative() ? Object.assign : function(target, source) {
  var from;
  var to = toObject(target);
  var symbols;
  for (var s = 1; s < arguments.length; s++) {
    from = Object(arguments[s]);
    for (var key in from) {
      if (hasOwnProperty$1.call(from, key)) {
        to[key] = from[key];
      }
    }
    if (getOwnPropertySymbols) {
      symbols = getOwnPropertySymbols(from);
      for (var i = 0; i < symbols.length; i++) {
        if (propIsEnumerable.call(from, symbols[i])) {
          to[symbols[i]] = from[symbols[i]];
        }
      }
    }
  }
  return to;
};
var uaParser = { exports: {} };
(function(module2, exports2) {
  (function(window2, undefined$1) {
    var LIBVERSION = "0.7.31", EMPTY2 = "", UNKNOWN2 = "?", FUNC_TYPE = "function", UNDEF_TYPE = "undefined", OBJ_TYPE = "object", STR_TYPE = "string", MAJOR = "major", MODEL = "model", NAME = "name", TYPE = "type", VENDOR = "vendor", VERSION = "version", ARCHITECTURE = "architecture", CONSOLE = "console", MOBILE = "mobile", TABLET = "tablet", SMARTTV = "smarttv", WEARABLE = "wearable", EMBEDDED = "embedded", UA_MAX_LENGTH = 255;
    var AMAZON = "Amazon", APPLE = "Apple", ASUS = "ASUS", BLACKBERRY = "BlackBerry", BROWSER = "Browser", CHROME = "Chrome", EDGE = "Edge", FIREFOX = "Firefox", GOOGLE = "Google", HUAWEI = "Huawei", LG = "LG", MICROSOFT = "Microsoft", MOTOROLA = "Motorola", OPERA = "Opera", SAMSUNG = "Samsung", SONY = "Sony", XIAOMI = "Xiaomi", ZEBRA = "Zebra", FACEBOOK = "Facebook";
    var extend2 = function(regexes2, extensions) {
      var mergedRegexes = {};
      for (var i in regexes2) {
        if (extensions[i] && extensions[i].length % 2 === 0) {
          mergedRegexes[i] = extensions[i].concat(regexes2[i]);
        } else {
          mergedRegexes[i] = regexes2[i];
        }
      }
      return mergedRegexes;
    }, enumerize = function(arr) {
      var enums = {};
      for (var i = 0; i < arr.length; i++) {
        enums[arr[i].toUpperCase()] = arr[i];
      }
      return enums;
    }, has = function(str1, str2) {
      return typeof str1 === STR_TYPE ? lowerize(str2).indexOf(lowerize(str1)) !== -1 : false;
    }, lowerize = function(str) {
      return str.toLowerCase();
    }, majorize = function(version) {
      return typeof version === STR_TYPE ? version.replace(/[^\d\.]/g, EMPTY2).split(".")[0] : undefined$1;
    }, trim = function(str, len) {
      if (typeof str === STR_TYPE) {
        str = str.replace(/^\s\s*/, EMPTY2).replace(/\s\s*$/, EMPTY2);
        return typeof len === UNDEF_TYPE ? str : str.substring(0, UA_MAX_LENGTH);
      }
    };
    var rgxMapper = function(ua2, arrays) {
      var i = 0, j, k, p, q, matches, match;
      while (i < arrays.length && !matches) {
        var regex = arrays[i], props = arrays[i + 1];
        j = k = 0;
        while (j < regex.length && !matches) {
          matches = regex[j++].exec(ua2);
          if (!!matches) {
            for (p = 0; p < props.length; p++) {
              match = matches[++k];
              q = props[p];
              if (typeof q === OBJ_TYPE && q.length > 0) {
                if (q.length === 2) {
                  if (typeof q[1] == FUNC_TYPE) {
                    this[q[0]] = q[1].call(this, match);
                  } else {
                    this[q[0]] = q[1];
                  }
                } else if (q.length === 3) {
                  if (typeof q[1] === FUNC_TYPE && !(q[1].exec && q[1].test)) {
                    this[q[0]] = match ? q[1].call(this, match, q[2]) : undefined$1;
                  } else {
                    this[q[0]] = match ? match.replace(q[1], q[2]) : undefined$1;
                  }
                } else if (q.length === 4) {
                  this[q[0]] = match ? q[3].call(this, match.replace(q[1], q[2])) : undefined$1;
                }
              } else {
                this[q] = match ? match : undefined$1;
              }
            }
          }
        }
        i += 2;
      }
    }, strMapper = function(str, map2) {
      for (var i in map2) {
        if (typeof map2[i] === OBJ_TYPE && map2[i].length > 0) {
          for (var j = 0; j < map2[i].length; j++) {
            if (has(map2[i][j], str)) {
              return i === UNKNOWN2 ? undefined$1 : i;
            }
          }
        } else if (has(map2[i], str)) {
          return i === UNKNOWN2 ? undefined$1 : i;
        }
      }
      return str;
    };
    var oldSafariMap = {
      "1.0": "/8",
      "1.2": "/1",
      "1.3": "/3",
      "2.0": "/412",
      "2.0.2": "/416",
      "2.0.3": "/417",
      "2.0.4": "/419",
      "?": "/"
    }, windowsVersionMap = {
      "ME": "4.90",
      "NT 3.11": "NT3.51",
      "NT 4.0": "NT4.0",
      "2000": "NT 5.0",
      "XP": ["NT 5.1", "NT 5.2"],
      "Vista": "NT 6.0",
      "7": "NT 6.1",
      "8": "NT 6.2",
      "8.1": "NT 6.3",
      "10": ["NT 6.4", "NT 10.0"],
      "RT": "ARM"
    };
    var regexes = {
      browser: [
        [
          /\b(?:crmo|crios)\/([\w\.]+)/i
        ],
        [VERSION, [NAME, "Chrome"]],
        [
          /edg(?:e|ios|a)?\/([\w\.]+)/i
        ],
        [VERSION, [NAME, "Edge"]],
        [
          /(opera mini)\/([-\w\.]+)/i,
          /(opera [mobiletab]{3,6})\b.+version\/([-\w\.]+)/i,
          /(opera)(?:.+version\/|[\/ ]+)([\w\.]+)/i
        ],
        [NAME, VERSION],
        [
          /opios[\/ ]+([\w\.]+)/i
        ],
        [VERSION, [NAME, OPERA + " Mini"]],
        [
          /\bopr\/([\w\.]+)/i
        ],
        [VERSION, [NAME, OPERA]],
        [
          /(kindle)\/([\w\.]+)/i,
          /(lunascape|maxthon|netfront|jasmine|blazer)[\/ ]?([\w\.]*)/i,
          /(avant |iemobile|slim)(?:browser)?[\/ ]?([\w\.]*)/i,
          /(ba?idubrowser)[\/ ]?([\w\.]+)/i,
          /(?:ms|\()(ie) ([\w\.]+)/i,
          /(flock|rockmelt|midori|epiphany|silk|skyfire|ovibrowser|bolt|iron|vivaldi|iridium|phantomjs|bowser|quark|qupzilla|falkon|rekonq|puffin|brave|whale|qqbrowserlite|qq)\/([-\w\.]+)/i,
          /(weibo)__([\d\.]+)/i
        ],
        [NAME, VERSION],
        [
          /(?:\buc? ?browser|(?:juc.+)ucweb)[\/ ]?([\w\.]+)/i
        ],
        [VERSION, [NAME, "UC" + BROWSER]],
        [
          /\bqbcore\/([\w\.]+)/i
        ],
        [VERSION, [NAME, "WeChat(Win) Desktop"]],
        [
          /micromessenger\/([\w\.]+)/i
        ],
        [VERSION, [NAME, "WeChat"]],
        [
          /konqueror\/([\w\.]+)/i
        ],
        [VERSION, [NAME, "Konqueror"]],
        [
          /trident.+rv[: ]([\w\.]{1,9})\b.+like gecko/i
        ],
        [VERSION, [NAME, "IE"]],
        [
          /yabrowser\/([\w\.]+)/i
        ],
        [VERSION, [NAME, "Yandex"]],
        [
          /(avast|avg)\/([\w\.]+)/i
        ],
        [[NAME, /(.+)/, "$1 Secure " + BROWSER], VERSION],
        [
          /\bfocus\/([\w\.]+)/i
        ],
        [VERSION, [NAME, FIREFOX + " Focus"]],
        [
          /\bopt\/([\w\.]+)/i
        ],
        [VERSION, [NAME, OPERA + " Touch"]],
        [
          /coc_coc\w+\/([\w\.]+)/i
        ],
        [VERSION, [NAME, "Coc Coc"]],
        [
          /dolfin\/([\w\.]+)/i
        ],
        [VERSION, [NAME, "Dolphin"]],
        [
          /coast\/([\w\.]+)/i
        ],
        [VERSION, [NAME, OPERA + " Coast"]],
        [
          /miuibrowser\/([\w\.]+)/i
        ],
        [VERSION, [NAME, "MIUI " + BROWSER]],
        [
          /fxios\/([-\w\.]+)/i
        ],
        [VERSION, [NAME, FIREFOX]],
        [
          /\bqihu|(qi?ho?o?|360)browser/i
        ],
        [[NAME, "360 " + BROWSER]],
        [
          /(oculus|samsung|sailfish)browser\/([\w\.]+)/i
        ],
        [[NAME, /(.+)/, "$1 " + BROWSER], VERSION],
        [
          /(comodo_dragon)\/([\w\.]+)/i
        ],
        [[NAME, /_/g, " "], VERSION],
        [
          /(electron)\/([\w\.]+) safari/i,
          /(tesla)(?: qtcarbrowser|\/(20\d\d\.[-\w\.]+))/i,
          /m?(qqbrowser|baiduboxapp|2345Explorer)[\/ ]?([\w\.]+)/i
        ],
        [NAME, VERSION],
        [
          /(metasr)[\/ ]?([\w\.]+)/i,
          /(lbbrowser)/i
        ],
        [NAME],
        [
          /((?:fban\/fbios|fb_iab\/fb4a)(?!.+fbav)|;fbav\/([\w\.]+);)/i
        ],
        [[NAME, FACEBOOK], VERSION],
        [
          /safari (line)\/([\w\.]+)/i,
          /\b(line)\/([\w\.]+)\/iab/i,
          /(chromium|instagram)[\/ ]([-\w\.]+)/i
        ],
        [NAME, VERSION],
        [
          /\bgsa\/([\w\.]+) .*safari\//i
        ],
        [VERSION, [NAME, "GSA"]],
        [
          /headlesschrome(?:\/([\w\.]+)| )/i
        ],
        [VERSION, [NAME, CHROME + " Headless"]],
        [
          / wv\).+(chrome)\/([\w\.]+)/i
        ],
        [[NAME, CHROME + " WebView"], VERSION],
        [
          /droid.+ version\/([\w\.]+)\b.+(?:mobile safari|safari)/i
        ],
        [VERSION, [NAME, "Android " + BROWSER]],
        [
          /(chrome|omniweb|arora|[tizenoka]{5} ?browser)\/v?([\w\.]+)/i
        ],
        [NAME, VERSION],
        [
          /version\/([\w\.]+) .*mobile\/\w+ (safari)/i
        ],
        [VERSION, [NAME, "Mobile Safari"]],
        [
          /version\/([\w\.]+) .*(mobile ?safari|safari)/i
        ],
        [VERSION, NAME],
        [
          /webkit.+?(mobile ?safari|safari)(\/[\w\.]+)/i
        ],
        [NAME, [VERSION, strMapper, oldSafariMap]],
        [
          /(webkit|khtml)\/([\w\.]+)/i
        ],
        [NAME, VERSION],
        [
          /(navigator|netscape\d?)\/([-\w\.]+)/i
        ],
        [[NAME, "Netscape"], VERSION],
        [
          /mobile vr; rv:([\w\.]+)\).+firefox/i
        ],
        [VERSION, [NAME, FIREFOX + " Reality"]],
        [
          /ekiohf.+(flow)\/([\w\.]+)/i,
          /(swiftfox)/i,
          /(icedragon|iceweasel|camino|chimera|fennec|maemo browser|minimo|conkeror|klar)[\/ ]?([\w\.\+]+)/i,
          /(seamonkey|k-meleon|icecat|iceape|firebird|phoenix|palemoon|basilisk|waterfox)\/([-\w\.]+)$/i,
          /(firefox)\/([\w\.]+)/i,
          /(mozilla)\/([\w\.]+) .+rv\:.+gecko\/\d+/i,
          /(polaris|lynx|dillo|icab|doris|amaya|w3m|netsurf|sleipnir|obigo|mosaic|(?:go|ice|up)[\. ]?browser)[-\/ ]?v?([\w\.]+)/i,
          /(links) \(([\w\.]+)/i
        ],
        [NAME, VERSION]
      ],
      cpu: [
        [
          /(?:(amd|x(?:(?:86|64)[-_])?|wow|win)64)[;\)]/i
        ],
        [[ARCHITECTURE, "amd64"]],
        [
          /(ia32(?=;))/i
        ],
        [[ARCHITECTURE, lowerize]],
        [
          /((?:i[346]|x)86)[;\)]/i
        ],
        [[ARCHITECTURE, "ia32"]],
        [
          /\b(aarch64|arm(v?8e?l?|_?64))\b/i
        ],
        [[ARCHITECTURE, "arm64"]],
        [
          /\b(arm(?:v[67])?ht?n?[fl]p?)\b/i
        ],
        [[ARCHITECTURE, "armhf"]],
        [
          /windows (ce|mobile); ppc;/i
        ],
        [[ARCHITECTURE, "arm"]],
        [
          /((?:ppc|powerpc)(?:64)?)(?: mac|;|\))/i
        ],
        [[ARCHITECTURE, /ower/, EMPTY2, lowerize]],
        [
          /(sun4\w)[;\)]/i
        ],
        [[ARCHITECTURE, "sparc"]],
        [
          /((?:avr32|ia64(?=;))|68k(?=\))|\barm(?=v(?:[1-7]|[5-7]1)l?|;|eabi)|(?=atmel )avr|(?:irix|mips|sparc)(?:64)?\b|pa-risc)/i
        ],
        [[ARCHITECTURE, lowerize]]
      ],
      device: [
        [
          /\b(sch-i[89]0\d|shw-m380s|sm-[pt]\w{2,4}|gt-[pn]\d{2,4}|sgh-t8[56]9|nexus 10)/i
        ],
        [MODEL, [VENDOR, SAMSUNG], [TYPE, TABLET]],
        [
          /\b((?:s[cgp]h|gt|sm)-\w+|galaxy nexus)/i,
          /samsung[- ]([-\w]+)/i,
          /sec-(sgh\w+)/i
        ],
        [MODEL, [VENDOR, SAMSUNG], [TYPE, MOBILE]],
        [
          /\((ip(?:hone|od)[\w ]*);/i
        ],
        [MODEL, [VENDOR, APPLE], [TYPE, MOBILE]],
        [
          /\((ipad);[-\w\),; ]+apple/i,
          /applecoremedia\/[\w\.]+ \((ipad)/i,
          /\b(ipad)\d\d?,\d\d?[;\]].+ios/i
        ],
        [MODEL, [VENDOR, APPLE], [TYPE, TABLET]],
        [
          /\b((?:ag[rs][23]?|bah2?|sht?|btv)-a?[lw]\d{2})\b(?!.+d\/s)/i
        ],
        [MODEL, [VENDOR, HUAWEI], [TYPE, TABLET]],
        [
          /(?:huawei|honor)([-\w ]+)[;\)]/i,
          /\b(nexus 6p|\w{2,4}-[atu]?[ln][01259x][012359][an]?)\b(?!.+d\/s)/i
        ],
        [MODEL, [VENDOR, HUAWEI], [TYPE, MOBILE]],
        [
          /\b(poco[\w ]+)(?: bui|\))/i,
          /\b; (\w+) build\/hm\1/i,
          /\b(hm[-_ ]?note?[_ ]?(?:\d\w)?) bui/i,
          /\b(redmi[\-_ ]?(?:note|k)?[\w_ ]+)(?: bui|\))/i,
          /\b(mi[-_ ]?(?:a\d|one|one[_ ]plus|note lte|max)?[_ ]?(?:\d?\w?)[_ ]?(?:plus|se|lite)?)(?: bui|\))/i
        ],
        [[MODEL, /_/g, " "], [VENDOR, XIAOMI], [TYPE, MOBILE]],
        [
          /\b(mi[-_ ]?(?:pad)(?:[\w_ ]+))(?: bui|\))/i
        ],
        [[MODEL, /_/g, " "], [VENDOR, XIAOMI], [TYPE, TABLET]],
        [
          /; (\w+) bui.+ oppo/i,
          /\b(cph[12]\d{3}|p(?:af|c[al]|d\w|e[ar])[mt]\d0|x9007|a101op)\b/i
        ],
        [MODEL, [VENDOR, "OPPO"], [TYPE, MOBILE]],
        [
          /vivo (\w+)(?: bui|\))/i,
          /\b(v[12]\d{3}\w?[at])(?: bui|;)/i
        ],
        [MODEL, [VENDOR, "Vivo"], [TYPE, MOBILE]],
        [
          /\b(rmx[12]\d{3})(?: bui|;|\))/i
        ],
        [MODEL, [VENDOR, "Realme"], [TYPE, MOBILE]],
        [
          /\b(milestone|droid(?:[2-4x]| (?:bionic|x2|pro|razr))?:?( 4g)?)\b[\w ]+build\//i,
          /\bmot(?:orola)?[- ](\w*)/i,
          /((?:moto[\w\(\) ]+|xt\d{3,4}|nexus 6)(?= bui|\)))/i
        ],
        [MODEL, [VENDOR, MOTOROLA], [TYPE, MOBILE]],
        [
          /\b(mz60\d|xoom[2 ]{0,2}) build\//i
        ],
        [MODEL, [VENDOR, MOTOROLA], [TYPE, TABLET]],
        [
          /((?=lg)?[vl]k\-?\d{3}) bui| 3\.[-\w; ]{10}lg?-([06cv9]{3,4})/i
        ],
        [MODEL, [VENDOR, LG], [TYPE, TABLET]],
        [
          /(lm(?:-?f100[nv]?|-[\w\.]+)(?= bui|\))|nexus [45])/i,
          /\blg[-e;\/ ]+((?!browser|netcast|android tv)\w+)/i,
          /\blg-?([\d\w]+) bui/i
        ],
        [MODEL, [VENDOR, LG], [TYPE, MOBILE]],
        [
          /(ideatab[-\w ]+)/i,
          /lenovo ?(s[56]000[-\w]+|tab(?:[\w ]+)|yt[-\d\w]{6}|tb[-\d\w]{6})/i
        ],
        [MODEL, [VENDOR, "Lenovo"], [TYPE, TABLET]],
        [
          /(?:maemo|nokia).*(n900|lumia \d+)/i,
          /nokia[-_ ]?([-\w\.]*)/i
        ],
        [[MODEL, /_/g, " "], [VENDOR, "Nokia"], [TYPE, MOBILE]],
        [
          /(pixel c)\b/i
        ],
        [MODEL, [VENDOR, GOOGLE], [TYPE, TABLET]],
        [
          /droid.+; (pixel[\daxl ]{0,6})(?: bui|\))/i
        ],
        [MODEL, [VENDOR, GOOGLE], [TYPE, MOBILE]],
        [
          /droid.+ ([c-g]\d{4}|so[-gl]\w+|xq-a\w[4-7][12])(?= bui|\).+chrome\/(?![1-6]{0,1}\d\.))/i
        ],
        [MODEL, [VENDOR, SONY], [TYPE, MOBILE]],
        [
          /sony tablet [ps]/i,
          /\b(?:sony)?sgp\w+(?: bui|\))/i
        ],
        [[MODEL, "Xperia Tablet"], [VENDOR, SONY], [TYPE, TABLET]],
        [
          / (kb2005|in20[12]5|be20[12][59])\b/i,
          /(?:one)?(?:plus)? (a\d0\d\d)(?: b|\))/i
        ],
        [MODEL, [VENDOR, "OnePlus"], [TYPE, MOBILE]],
        [
          /(alexa)webm/i,
          /(kf[a-z]{2}wi)( bui|\))/i,
          /(kf[a-z]+)( bui|\)).+silk\//i
        ],
        [MODEL, [VENDOR, AMAZON], [TYPE, TABLET]],
        [
          /((?:sd|kf)[0349hijorstuw]+)( bui|\)).+silk\//i
        ],
        [[MODEL, /(.+)/g, "Fire Phone $1"], [VENDOR, AMAZON], [TYPE, MOBILE]],
        [
          /(playbook);[-\w\),; ]+(rim)/i
        ],
        [MODEL, VENDOR, [TYPE, TABLET]],
        [
          /\b((?:bb[a-f]|st[hv])100-\d)/i,
          /\(bb10; (\w+)/i
        ],
        [MODEL, [VENDOR, BLACKBERRY], [TYPE, MOBILE]],
        [
          /(?:\b|asus_)(transfo[prime ]{4,10} \w+|eeepc|slider \w+|nexus 7|padfone|p00[cj])/i
        ],
        [MODEL, [VENDOR, ASUS], [TYPE, TABLET]],
        [
          / (z[bes]6[027][012][km][ls]|zenfone \d\w?)\b/i
        ],
        [MODEL, [VENDOR, ASUS], [TYPE, MOBILE]],
        [
          /(nexus 9)/i
        ],
        [MODEL, [VENDOR, "HTC"], [TYPE, TABLET]],
        [
          /(htc)[-;_ ]{1,2}([\w ]+(?=\)| bui)|\w+)/i,
          /(zte)[- ]([\w ]+?)(?: bui|\/|\))/i,
          /(alcatel|geeksphone|nexian|panasonic|sony)[-_ ]?([-\w]*)/i
        ],
        [VENDOR, [MODEL, /_/g, " "], [TYPE, MOBILE]],
        [
          /droid.+; ([ab][1-7]-?[0178a]\d\d?)/i
        ],
        [MODEL, [VENDOR, "Acer"], [TYPE, TABLET]],
        [
          /droid.+; (m[1-5] note) bui/i,
          /\bmz-([-\w]{2,})/i
        ],
        [MODEL, [VENDOR, "Meizu"], [TYPE, MOBILE]],
        [
          /\b(sh-?[altvz]?\d\d[a-ekm]?)/i
        ],
        [MODEL, [VENDOR, "Sharp"], [TYPE, MOBILE]],
        [
          /(blackberry|benq|palm(?=\-)|sonyericsson|acer|asus|dell|meizu|motorola|polytron)[-_ ]?([-\w]*)/i,
          /(hp) ([\w ]+\w)/i,
          /(asus)-?(\w+)/i,
          /(microsoft); (lumia[\w ]+)/i,
          /(lenovo)[-_ ]?([-\w]+)/i,
          /(jolla)/i,
          /(oppo) ?([\w ]+) bui/i
        ],
        [VENDOR, MODEL, [TYPE, MOBILE]],
        [
          /(archos) (gamepad2?)/i,
          /(hp).+(touchpad(?!.+tablet)|tablet)/i,
          /(kindle)\/([\w\.]+)/i,
          /(nook)[\w ]+build\/(\w+)/i,
          /(dell) (strea[kpr\d ]*[\dko])/i,
          /(le[- ]+pan)[- ]+(\w{1,9}) bui/i,
          /(trinity)[- ]*(t\d{3}) bui/i,
          /(gigaset)[- ]+(q\w{1,9}) bui/i,
          /(vodafone) ([\w ]+)(?:\)| bui)/i
        ],
        [VENDOR, MODEL, [TYPE, TABLET]],
        [
          /(surface duo)/i
        ],
        [MODEL, [VENDOR, MICROSOFT], [TYPE, TABLET]],
        [
          /droid [\d\.]+; (fp\du?)(?: b|\))/i
        ],
        [MODEL, [VENDOR, "Fairphone"], [TYPE, MOBILE]],
        [
          /(u304aa)/i
        ],
        [MODEL, [VENDOR, "AT&T"], [TYPE, MOBILE]],
        [
          /\bsie-(\w*)/i
        ],
        [MODEL, [VENDOR, "Siemens"], [TYPE, MOBILE]],
        [
          /\b(rct\w+) b/i
        ],
        [MODEL, [VENDOR, "RCA"], [TYPE, TABLET]],
        [
          /\b(venue[\d ]{2,7}) b/i
        ],
        [MODEL, [VENDOR, "Dell"], [TYPE, TABLET]],
        [
          /\b(q(?:mv|ta)\w+) b/i
        ],
        [MODEL, [VENDOR, "Verizon"], [TYPE, TABLET]],
        [
          /\b(?:barnes[& ]+noble |bn[rt])([\w\+ ]*) b/i
        ],
        [MODEL, [VENDOR, "Barnes & Noble"], [TYPE, TABLET]],
        [
          /\b(tm\d{3}\w+) b/i
        ],
        [MODEL, [VENDOR, "NuVision"], [TYPE, TABLET]],
        [
          /\b(k88) b/i
        ],
        [MODEL, [VENDOR, "ZTE"], [TYPE, TABLET]],
        [
          /\b(nx\d{3}j) b/i
        ],
        [MODEL, [VENDOR, "ZTE"], [TYPE, MOBILE]],
        [
          /\b(gen\d{3}) b.+49h/i
        ],
        [MODEL, [VENDOR, "Swiss"], [TYPE, MOBILE]],
        [
          /\b(zur\d{3}) b/i
        ],
        [MODEL, [VENDOR, "Swiss"], [TYPE, TABLET]],
        [
          /\b((zeki)?tb.*\b) b/i
        ],
        [MODEL, [VENDOR, "Zeki"], [TYPE, TABLET]],
        [
          /\b([yr]\d{2}) b/i,
          /\b(dragon[- ]+touch |dt)(\w{5}) b/i
        ],
        [[VENDOR, "Dragon Touch"], MODEL, [TYPE, TABLET]],
        [
          /\b(ns-?\w{0,9}) b/i
        ],
        [MODEL, [VENDOR, "Insignia"], [TYPE, TABLET]],
        [
          /\b((nxa|next)-?\w{0,9}) b/i
        ],
        [MODEL, [VENDOR, "NextBook"], [TYPE, TABLET]],
        [
          /\b(xtreme\_)?(v(1[045]|2[015]|[3469]0|7[05])) b/i
        ],
        [[VENDOR, "Voice"], MODEL, [TYPE, MOBILE]],
        [
          /\b(lvtel\-)?(v1[12]) b/i
        ],
        [[VENDOR, "LvTel"], MODEL, [TYPE, MOBILE]],
        [
          /\b(ph-1) /i
        ],
        [MODEL, [VENDOR, "Essential"], [TYPE, MOBILE]],
        [
          /\b(v(100md|700na|7011|917g).*\b) b/i
        ],
        [MODEL, [VENDOR, "Envizen"], [TYPE, TABLET]],
        [
          /\b(trio[-\w\. ]+) b/i
        ],
        [MODEL, [VENDOR, "MachSpeed"], [TYPE, TABLET]],
        [
          /\btu_(1491) b/i
        ],
        [MODEL, [VENDOR, "Rotor"], [TYPE, TABLET]],
        [
          /(shield[\w ]+) b/i
        ],
        [MODEL, [VENDOR, "Nvidia"], [TYPE, TABLET]],
        [
          /(sprint) (\w+)/i
        ],
        [VENDOR, MODEL, [TYPE, MOBILE]],
        [
          /(kin\.[onetw]{3})/i
        ],
        [[MODEL, /\./g, " "], [VENDOR, MICROSOFT], [TYPE, MOBILE]],
        [
          /droid.+; (cc6666?|et5[16]|mc[239][23]x?|vc8[03]x?)\)/i
        ],
        [MODEL, [VENDOR, ZEBRA], [TYPE, TABLET]],
        [
          /droid.+; (ec30|ps20|tc[2-8]\d[kx])\)/i
        ],
        [MODEL, [VENDOR, ZEBRA], [TYPE, MOBILE]],
        [
          /(ouya)/i,
          /(nintendo) ([wids3utch]+)/i
        ],
        [VENDOR, MODEL, [TYPE, CONSOLE]],
        [
          /droid.+; (shield) bui/i
        ],
        [MODEL, [VENDOR, "Nvidia"], [TYPE, CONSOLE]],
        [
          /(playstation [345portablevi]+)/i
        ],
        [MODEL, [VENDOR, SONY], [TYPE, CONSOLE]],
        [
          /\b(xbox(?: one)?(?!; xbox))[\); ]/i
        ],
        [MODEL, [VENDOR, MICROSOFT], [TYPE, CONSOLE]],
        [
          /smart-tv.+(samsung)/i
        ],
        [VENDOR, [TYPE, SMARTTV]],
        [
          /hbbtv.+maple;(\d+)/i
        ],
        [[MODEL, /^/, "SmartTV"], [VENDOR, SAMSUNG], [TYPE, SMARTTV]],
        [
          /(nux; netcast.+smarttv|lg (netcast\.tv-201\d|android tv))/i
        ],
        [[VENDOR, LG], [TYPE, SMARTTV]],
        [
          /(apple) ?tv/i
        ],
        [VENDOR, [MODEL, APPLE + " TV"], [TYPE, SMARTTV]],
        [
          /crkey/i
        ],
        [[MODEL, CHROME + "cast"], [VENDOR, GOOGLE], [TYPE, SMARTTV]],
        [
          /droid.+aft(\w)( bui|\))/i
        ],
        [MODEL, [VENDOR, AMAZON], [TYPE, SMARTTV]],
        [
          /\(dtv[\);].+(aquos)/i
        ],
        [MODEL, [VENDOR, "Sharp"], [TYPE, SMARTTV]],
        [
          /\b(roku)[\dx]*[\)\/]((?:dvp-)?[\d\.]*)/i,
          /hbbtv\/\d+\.\d+\.\d+ +\([\w ]*; *(\w[^;]*);([^;]*)/i
        ],
        [[VENDOR, trim], [MODEL, trim], [TYPE, SMARTTV]],
        [
          /\b(android tv|smart[- ]?tv|opera tv|tv; rv:)\b/i
        ],
        [[TYPE, SMARTTV]],
        [
          /((pebble))app/i
        ],
        [VENDOR, MODEL, [TYPE, WEARABLE]],
        [
          /droid.+; (glass) \d/i
        ],
        [MODEL, [VENDOR, GOOGLE], [TYPE, WEARABLE]],
        [
          /droid.+; (wt63?0{2,3})\)/i
        ],
        [MODEL, [VENDOR, ZEBRA], [TYPE, WEARABLE]],
        [
          /(quest( 2)?)/i
        ],
        [MODEL, [VENDOR, FACEBOOK], [TYPE, WEARABLE]],
        [
          /(tesla)(?: qtcarbrowser|\/[-\w\.]+)/i
        ],
        [VENDOR, [TYPE, EMBEDDED]],
        [
          /droid .+?; ([^;]+?)(?: bui|\) applew).+? mobile safari/i
        ],
        [MODEL, [TYPE, MOBILE]],
        [
          /droid .+?; ([^;]+?)(?: bui|\) applew).+?(?! mobile) safari/i
        ],
        [MODEL, [TYPE, TABLET]],
        [
          /\b((tablet|tab)[;\/]|focus\/\d(?!.+mobile))/i
        ],
        [[TYPE, TABLET]],
        [
          /(phone|mobile(?:[;\/]| safari)|pda(?=.+windows ce))/i
        ],
        [[TYPE, MOBILE]],
        [
          /(android[-\w\. ]{0,9});.+buil/i
        ],
        [MODEL, [VENDOR, "Generic"]]
      ],
      engine: [
        [
          /windows.+ edge\/([\w\.]+)/i
        ],
        [VERSION, [NAME, EDGE + "HTML"]],
        [
          /webkit\/537\.36.+chrome\/(?!27)([\w\.]+)/i
        ],
        [VERSION, [NAME, "Blink"]],
        [
          /(presto)\/([\w\.]+)/i,
          /(webkit|trident|netfront|netsurf|amaya|lynx|w3m|goanna)\/([\w\.]+)/i,
          /ekioh(flow)\/([\w\.]+)/i,
          /(khtml|tasman|links)[\/ ]\(?([\w\.]+)/i,
          /(icab)[\/ ]([23]\.[\d\.]+)/i
        ],
        [NAME, VERSION],
        [
          /rv\:([\w\.]{1,9})\b.+(gecko)/i
        ],
        [VERSION, NAME]
      ],
      os: [
        [
          /microsoft (windows) (vista|xp)/i
        ],
        [NAME, VERSION],
        [
          /(windows) nt 6\.2; (arm)/i,
          /(windows (?:phone(?: os)?|mobile))[\/ ]?([\d\.\w ]*)/i,
          /(windows)[\/ ]?([ntce\d\. ]+\w)(?!.+xbox)/i
        ],
        [NAME, [VERSION, strMapper, windowsVersionMap]],
        [
          /(win(?=3|9|n)|win 9x )([nt\d\.]+)/i
        ],
        [[NAME, "Windows"], [VERSION, strMapper, windowsVersionMap]],
        [
          /ip[honead]{2,4}\b(?:.*os ([\w]+) like mac|; opera)/i,
          /cfnetwork\/.+darwin/i
        ],
        [[VERSION, /_/g, "."], [NAME, "iOS"]],
        [
          /(mac os x) ?([\w\. ]*)/i,
          /(macintosh|mac_powerpc\b)(?!.+haiku)/i
        ],
        [[NAME, "Mac OS"], [VERSION, /_/g, "."]],
        [
          /droid ([\w\.]+)\b.+(android[- ]x86)/i
        ],
        [VERSION, NAME],
        [
          /(android|webos|qnx|bada|rim tablet os|maemo|meego|sailfish)[-\/ ]?([\w\.]*)/i,
          /(blackberry)\w*\/([\w\.]*)/i,
          /(tizen|kaios)[\/ ]([\w\.]+)/i,
          /\((series40);/i
        ],
        [NAME, VERSION],
        [
          /\(bb(10);/i
        ],
        [VERSION, [NAME, BLACKBERRY]],
        [
          /(?:symbian ?os|symbos|s60(?=;)|series60)[-\/ ]?([\w\.]*)/i
        ],
        [VERSION, [NAME, "Symbian"]],
        [
          /mozilla\/[\d\.]+ \((?:mobile|tablet|tv|mobile; [\w ]+); rv:.+ gecko\/([\w\.]+)/i
        ],
        [VERSION, [NAME, FIREFOX + " OS"]],
        [
          /web0s;.+rt(tv)/i,
          /\b(?:hp)?wos(?:browser)?\/([\w\.]+)/i
        ],
        [VERSION, [NAME, "webOS"]],
        [
          /crkey\/([\d\.]+)/i
        ],
        [VERSION, [NAME, CHROME + "cast"]],
        [
          /(cros) [\w]+ ([\w\.]+\w)/i
        ],
        [[NAME, "Chromium OS"], VERSION],
        [
          /(nintendo|playstation) ([wids345portablevuch]+)/i,
          /(xbox); +xbox ([^\);]+)/i,
          /\b(joli|palm)\b ?(?:os)?\/?([\w\.]*)/i,
          /(mint)[\/\(\) ]?(\w*)/i,
          /(mageia|vectorlinux)[; ]/i,
          /([kxln]?ubuntu|debian|suse|opensuse|gentoo|arch(?= linux)|slackware|fedora|mandriva|centos|pclinuxos|red ?hat|zenwalk|linpus|raspbian|plan 9|minix|risc os|contiki|deepin|manjaro|elementary os|sabayon|linspire)(?: gnu\/linux)?(?: enterprise)?(?:[- ]linux)?(?:-gnu)?[-\/ ]?(?!chrom|package)([-\w\.]*)/i,
          /(hurd|linux) ?([\w\.]*)/i,
          /(gnu) ?([\w\.]*)/i,
          /\b([-frentopcghs]{0,5}bsd|dragonfly)[\/ ]?(?!amd|[ix346]{1,2}86)([\w\.]*)/i,
          /(haiku) (\w+)/i
        ],
        [NAME, VERSION],
        [
          /(sunos) ?([\w\.\d]*)/i
        ],
        [[NAME, "Solaris"], VERSION],
        [
          /((?:open)?solaris)[-\/ ]?([\w\.]*)/i,
          /(aix) ((\d)(?=\.|\)| )[\w\.])*/i,
          /\b(beos|os\/2|amigaos|morphos|openvms|fuchsia|hp-ux)/i,
          /(unix) ?([\w\.]*)/i
        ],
        [NAME, VERSION]
      ]
    };
    var UAParser2 = function(ua2, extensions) {
      if (typeof ua2 === OBJ_TYPE) {
        extensions = ua2;
        ua2 = undefined$1;
      }
      if (!(this instanceof UAParser2)) {
        return new UAParser2(ua2, extensions).getResult();
      }
      var _ua = ua2 || (typeof window2 !== UNDEF_TYPE && window2.navigator && window2.navigator.userAgent ? window2.navigator.userAgent : EMPTY2);
      var _rgxmap = extensions ? extend2(regexes, extensions) : regexes;
      this.getBrowser = function() {
        var _browser = {};
        _browser[NAME] = undefined$1;
        _browser[VERSION] = undefined$1;
        rgxMapper.call(_browser, _ua, _rgxmap.browser);
        _browser.major = majorize(_browser.version);
        return _browser;
      };
      this.getCPU = function() {
        var _cpu = {};
        _cpu[ARCHITECTURE] = undefined$1;
        rgxMapper.call(_cpu, _ua, _rgxmap.cpu);
        return _cpu;
      };
      this.getDevice = function() {
        var _device = {};
        _device[VENDOR] = undefined$1;
        _device[MODEL] = undefined$1;
        _device[TYPE] = undefined$1;
        rgxMapper.call(_device, _ua, _rgxmap.device);
        return _device;
      };
      this.getEngine = function() {
        var _engine = {};
        _engine[NAME] = undefined$1;
        _engine[VERSION] = undefined$1;
        rgxMapper.call(_engine, _ua, _rgxmap.engine);
        return _engine;
      };
      this.getOS = function() {
        var _os = {};
        _os[NAME] = undefined$1;
        _os[VERSION] = undefined$1;
        rgxMapper.call(_os, _ua, _rgxmap.os);
        return _os;
      };
      this.getResult = function() {
        return {
          ua: this.getUA(),
          browser: this.getBrowser(),
          engine: this.getEngine(),
          os: this.getOS(),
          device: this.getDevice(),
          cpu: this.getCPU()
        };
      };
      this.getUA = function() {
        return _ua;
      };
      this.setUA = function(ua3) {
        _ua = typeof ua3 === STR_TYPE && ua3.length > UA_MAX_LENGTH ? trim(ua3, UA_MAX_LENGTH) : ua3;
        return this;
      };
      this.setUA(_ua);
      return this;
    };
    UAParser2.VERSION = LIBVERSION;
    UAParser2.BROWSER = enumerize([NAME, VERSION, MAJOR]);
    UAParser2.CPU = enumerize([ARCHITECTURE]);
    UAParser2.DEVICE = enumerize([MODEL, VENDOR, TYPE, CONSOLE, MOBILE, SMARTTV, TABLET, WEARABLE, EMBEDDED]);
    UAParser2.ENGINE = UAParser2.OS = enumerize([NAME, VERSION]);
    {
      if (module2.exports) {
        exports2 = module2.exports = UAParser2;
      }
      exports2.UAParser = UAParser2;
    }
    var $ = typeof window2 !== UNDEF_TYPE && (window2.jQuery || window2.Zepto);
    if ($ && !$.ua) {
      var parser2 = new UAParser2();
      $.ua = parser2.getResult();
      $.ua.get = function() {
        return parser2.getUA();
      };
      $.ua.set = function(ua2) {
        parser2.setUA(ua2);
        var result = parser2.getResult();
        for (var prop in result) {
          $.ua[prop] = result[prop];
        }
      };
    }
  })(typeof window === "object" ? window : commonjsGlobal);
})(uaParser, uaParser.exports);
var UAParser = uaParser.exports;
var UNKNOWN = "Unknown";
var PLATFORM_MAP = {
  "Mac OS": "Mac OS X"
};
function convertPlatformName(name) {
  return PLATFORM_MAP[name] || name;
}
function getBrowserVersion(version) {
  if (!version) {
    return {
      major: "",
      minor: ""
    };
  }
  var parts = version.split(".");
  return {
    major: parts[0],
    minor: parts[1]
  };
}
var parser = new UAParser();
var results = parser.getResult();
var browserVersionData = getBrowserVersion(results.browser.version);
var uaData = {
  browserArchitecture: results.cpu.architecture || UNKNOWN,
  browserFullVersion: results.browser.version || UNKNOWN,
  browserMinorVersion: browserVersionData.minor || UNKNOWN,
  browserName: results.browser.name || UNKNOWN,
  browserVersion: results.browser.major || UNKNOWN,
  deviceName: results.device.model || UNKNOWN,
  engineName: results.engine.name || UNKNOWN,
  engineVersion: results.engine.version || UNKNOWN,
  platformArchitecture: results.cpu.architecture || UNKNOWN,
  platformName: convertPlatformName(results.os.name) || UNKNOWN,
  platformVersion: results.os.version || UNKNOWN,
  platformFullVersion: results.os.version || UNKNOWN
};
var UserAgentData$1 = uaData;
var invariant$i = invariant_1;
var componentRegex = /\./;
var orRegex = /\|\|/;
var rangeRegex = /\s+\-\s+/;
var modifierRegex = /^(<=|<|=|>=|~>|~|>|)?\s*(.+)/;
var numericRegex = /^(\d*)(.*)/;
function checkOrExpression(range, version) {
  var expressions = range.split(orRegex);
  if (expressions.length > 1) {
    return expressions.some(function(range2) {
      return VersionRange$1.contains(range2, version);
    });
  } else {
    range = expressions[0].trim();
    return checkRangeExpression(range, version);
  }
}
function checkRangeExpression(range, version) {
  var expressions = range.split(rangeRegex);
  !(expressions.length > 0 && expressions.length <= 2) ? invariant$i(false) : void 0;
  if (expressions.length === 1) {
    return checkSimpleExpression(expressions[0], version);
  } else {
    var startVersion = expressions[0], endVersion = expressions[1];
    !(isSimpleVersion(startVersion) && isSimpleVersion(endVersion)) ? invariant$i(false) : void 0;
    return checkSimpleExpression(">=" + startVersion, version) && checkSimpleExpression("<=" + endVersion, version);
  }
}
function checkSimpleExpression(range, version) {
  range = range.trim();
  if (range === "") {
    return true;
  }
  var versionComponents = version.split(componentRegex);
  var _getModifierAndCompon = getModifierAndComponents(range), modifier = _getModifierAndCompon.modifier, rangeComponents = _getModifierAndCompon.rangeComponents;
  switch (modifier) {
    case "<":
      return checkLessThan(versionComponents, rangeComponents);
    case "<=":
      return checkLessThanOrEqual(versionComponents, rangeComponents);
    case ">=":
      return checkGreaterThanOrEqual(versionComponents, rangeComponents);
    case ">":
      return checkGreaterThan(versionComponents, rangeComponents);
    case "~":
    case "~>":
      return checkApproximateVersion(versionComponents, rangeComponents);
    default:
      return checkEqual(versionComponents, rangeComponents);
  }
}
function checkLessThan(a, b) {
  return compareComponents(a, b) === -1;
}
function checkLessThanOrEqual(a, b) {
  var result = compareComponents(a, b);
  return result === -1 || result === 0;
}
function checkEqual(a, b) {
  return compareComponents(a, b) === 0;
}
function checkGreaterThanOrEqual(a, b) {
  var result = compareComponents(a, b);
  return result === 1 || result === 0;
}
function checkGreaterThan(a, b) {
  return compareComponents(a, b) === 1;
}
function checkApproximateVersion(a, b) {
  var lowerBound = b.slice();
  var upperBound = b.slice();
  if (upperBound.length > 1) {
    upperBound.pop();
  }
  var lastIndex = upperBound.length - 1;
  var numeric = parseInt(upperBound[lastIndex], 10);
  if (isNumber(numeric)) {
    upperBound[lastIndex] = numeric + 1 + "";
  }
  return checkGreaterThanOrEqual(a, lowerBound) && checkLessThan(a, upperBound);
}
function getModifierAndComponents(range) {
  var rangeComponents = range.split(componentRegex);
  var matches = rangeComponents[0].match(modifierRegex);
  !matches ? invariant$i(false) : void 0;
  return {
    modifier: matches[1],
    rangeComponents: [matches[2]].concat(rangeComponents.slice(1))
  };
}
function isNumber(number) {
  return !isNaN(number) && isFinite(number);
}
function isSimpleVersion(range) {
  return !getModifierAndComponents(range).modifier;
}
function zeroPad(array, length) {
  for (var i = array.length; i < length; i++) {
    array[i] = "0";
  }
}
function normalizeVersions(a, b) {
  a = a.slice();
  b = b.slice();
  zeroPad(a, b.length);
  for (var i = 0; i < b.length; i++) {
    var matches = b[i].match(/^[x*]$/i);
    if (matches) {
      b[i] = a[i] = "0";
      if (matches[0] === "*" && i === b.length - 1) {
        for (var j = i; j < a.length; j++) {
          a[j] = "0";
        }
      }
    }
  }
  zeroPad(b, a.length);
  return [a, b];
}
function compareNumeric(a, b) {
  var aPrefix = a.match(numericRegex)[1];
  var bPrefix = b.match(numericRegex)[1];
  var aNumeric = parseInt(aPrefix, 10);
  var bNumeric = parseInt(bPrefix, 10);
  if (isNumber(aNumeric) && isNumber(bNumeric) && aNumeric !== bNumeric) {
    return compare$1(aNumeric, bNumeric);
  } else {
    return compare$1(a, b);
  }
}
function compare$1(a, b) {
  !(typeof a === typeof b) ? invariant$i(false) : void 0;
  if (a > b) {
    return 1;
  } else if (a < b) {
    return -1;
  } else {
    return 0;
  }
}
function compareComponents(a, b) {
  var _normalizeVersions = normalizeVersions(a, b), aNormalized = _normalizeVersions[0], bNormalized = _normalizeVersions[1];
  for (var i = 0; i < bNormalized.length; i++) {
    var result = compareNumeric(aNormalized[i], bNormalized[i]);
    if (result) {
      return result;
    }
  }
  return 0;
}
var VersionRange$1 = {
  contains: function contains(range, version) {
    return checkOrExpression(range.trim(), version.trim());
  }
};
var VersionRange_1 = VersionRange$1;
var hasOwnProperty = Object.prototype.hasOwnProperty;
function mapObject$1(object, callback, context) {
  if (!object) {
    return null;
  }
  var result = {};
  for (var name in object) {
    if (hasOwnProperty.call(object, name)) {
      result[name] = callback.call(context, object[name], name, object);
    }
  }
  return result;
}
var mapObject_1 = mapObject$1;
function memoizeStringOnly$1(callback) {
  var cache = {};
  return function(string) {
    if (!cache.hasOwnProperty(string)) {
      cache[string] = callback.call(this, string);
    }
    return cache[string];
  };
}
var memoizeStringOnly_1 = memoizeStringOnly$1;
var UserAgentData = UserAgentData$1;
var VersionRange = VersionRange_1;
var mapObject = mapObject_1;
var memoizeStringOnly = memoizeStringOnly_1;
function compare(name, version, query, normalizer) {
  if (name === query) {
    return true;
  }
  if (!query.startsWith(name)) {
    return false;
  }
  var range = query.slice(name.length);
  if (version) {
    range = normalizer ? normalizer(range) : range;
    return VersionRange.contains(range, version);
  }
  return false;
}
function normalizePlatformVersion(version) {
  if (UserAgentData.platformName === "Windows") {
    return version.replace(/^\s*NT/, "");
  }
  return version;
}
var UserAgent$e = {
  isBrowser: function isBrowser(query) {
    return compare(UserAgentData.browserName, UserAgentData.browserFullVersion, query);
  },
  isBrowserArchitecture: function isBrowserArchitecture(query) {
    return compare(UserAgentData.browserArchitecture, null, query);
  },
  isDevice: function isDevice(query) {
    return compare(UserAgentData.deviceName, null, query);
  },
  isEngine: function isEngine(query) {
    return compare(UserAgentData.engineName, UserAgentData.engineVersion, query);
  },
  isPlatform: function isPlatform(query) {
    return compare(UserAgentData.platformName, UserAgentData.platformFullVersion, query, normalizePlatformVersion);
  },
  isPlatformArchitecture: function isPlatformArchitecture(query) {
    return compare(UserAgentData.platformArchitecture, null, query);
  }
};
var UserAgent_1 = mapObject(UserAgent$e, memoizeStringOnly);
function getCorrectDocumentFromNode$4(node) {
  if (!node || !node.ownerDocument) {
    return document;
  }
  return node.ownerDocument;
}
var getCorrectDocumentFromNode_1 = getCorrectDocumentFromNode$4;
function isElement$7(node) {
  if (!node || !node.ownerDocument) {
    return false;
  }
  return node.nodeType === Node.ELEMENT_NODE;
}
var isElement_1 = isElement$7;
var isElement$6 = isElement_1;
function getSelectionOffsetKeyForNode$2(node) {
  if (isElement$6(node)) {
    var castedNode = node;
    var offsetKey = castedNode.getAttribute("data-offset-key");
    if (offsetKey) {
      return offsetKey;
    }
    for (var ii2 = 0; ii2 < castedNode.childNodes.length; ii2++) {
      var childOffsetKey = getSelectionOffsetKeyForNode$2(castedNode.childNodes[ii2]);
      if (childOffsetKey) {
        return childOffsetKey;
      }
    }
  }
  return null;
}
var getSelectionOffsetKeyForNode_1 = getSelectionOffsetKeyForNode$2;
var getCorrectDocumentFromNode$3 = getCorrectDocumentFromNode_1;
var getSelectionOffsetKeyForNode$1 = getSelectionOffsetKeyForNode_1;
function findAncestorOffsetKey$4(node) {
  var searchNode = node;
  while (searchNode && searchNode !== getCorrectDocumentFromNode$3(node).documentElement) {
    var key = getSelectionOffsetKeyForNode$1(searchNode);
    if (key != null) {
      return key;
    }
    searchNode = searchNode.parentNode;
  }
  return null;
}
var findAncestorOffsetKey_1 = findAncestorOffsetKey$4;
function getWindowForNode$2(node) {
  if (!node || !node.ownerDocument || !node.ownerDocument.defaultView) {
    return window;
  }
  return node.ownerDocument.defaultView;
}
var getWindowForNode_1 = getWindowForNode$2;
function _defineProperty$c(obj, key, value) {
  if (key in obj) {
    Object.defineProperty(obj, key, { value, enumerable: true, configurable: true, writable: true });
  } else {
    obj[key] = value;
  }
  return obj;
}
var UserAgent$d = UserAgent_1;
var findAncestorOffsetKey$3 = findAncestorOffsetKey_1;
var getWindowForNode$1 = getWindowForNode_1;
var Immutable$5 = immutable.exports;
var invariant$h = invariant_1;
var nullthrows$c = nullthrows_1;
var Map$3 = Immutable$5.Map;
var DOM_OBSERVER_OPTIONS = {
  subtree: true,
  characterData: true,
  childList: true,
  characterDataOldValue: false,
  attributes: false
};
var USE_CHAR_DATA = UserAgent$d.isBrowser("IE <= 11");
var DOMObserver$1 = /* @__PURE__ */ function() {
  function DOMObserver2(container) {
    var _this = this;
    _defineProperty$c(this, "observer", void 0);
    _defineProperty$c(this, "container", void 0);
    _defineProperty$c(this, "mutations", void 0);
    _defineProperty$c(this, "onCharData", void 0);
    this.container = container;
    this.mutations = Map$3();
    var containerWindow = getWindowForNode$1(container);
    if (containerWindow.MutationObserver && !USE_CHAR_DATA) {
      this.observer = new containerWindow.MutationObserver(function(mutations) {
        return _this.registerMutations(mutations);
      });
    } else {
      this.onCharData = function(e) {
        !(e.target instanceof Node) ? invariant$h(false) : void 0;
        _this.registerMutation({
          type: "characterData",
          target: e.target
        });
      };
    }
  }
  var _proto = DOMObserver2.prototype;
  _proto.start = function start() {
    if (this.observer) {
      this.observer.observe(this.container, DOM_OBSERVER_OPTIONS);
    } else {
      this.container.addEventListener("DOMCharacterDataModified", this.onCharData);
    }
  };
  _proto.stopAndFlushMutations = function stopAndFlushMutations() {
    var observer = this.observer;
    if (observer) {
      this.registerMutations(observer.takeRecords());
      observer.disconnect();
    } else {
      this.container.removeEventListener("DOMCharacterDataModified", this.onCharData);
    }
    var mutations = this.mutations;
    this.mutations = Map$3();
    return mutations;
  };
  _proto.registerMutations = function registerMutations(mutations) {
    for (var i = 0; i < mutations.length; i++) {
      this.registerMutation(mutations[i]);
    }
  };
  _proto.getMutationTextContent = function getMutationTextContent(mutation) {
    var type = mutation.type, target = mutation.target, removedNodes = mutation.removedNodes;
    if (type === "characterData") {
      if (target.textContent !== "") {
        if (USE_CHAR_DATA) {
          return target.textContent.replace("\n", "");
        }
        return target.textContent;
      }
    } else if (type === "childList") {
      if (removedNodes && removedNodes.length) {
        return "";
      } else if (target.textContent !== "") {
        return target.textContent;
      }
    }
    return null;
  };
  _proto.registerMutation = function registerMutation(mutation) {
    var textContent = this.getMutationTextContent(mutation);
    if (textContent != null) {
      var offsetKey = nullthrows$c(findAncestorOffsetKey$3(mutation.target));
      this.mutations = this.mutations.set(offsetKey, textContent);
    }
  };
  return DOMObserver2;
}();
var DOMObserver_1 = DOMObserver$1;
var KEY_DELIMITER = "-";
var DraftOffsetKey$9 = {
  encode: function encode(blockKey, decoratorKey, leafKey) {
    return blockKey + KEY_DELIMITER + decoratorKey + KEY_DELIMITER + leafKey;
  },
  decode: function decode(offsetKey) {
    var _offsetKey$split$reve = offsetKey.split(KEY_DELIMITER).reverse(), leafKey = _offsetKey$split$reve[0], decoratorKey = _offsetKey$split$reve[1], blockKeyParts = _offsetKey$split$reve.slice(2);
    return {
      blockKey: blockKeyParts.reverse().join(KEY_DELIMITER),
      decoratorKey: parseInt(decoratorKey, 10),
      leafKey: parseInt(leafKey, 10)
    };
  }
};
var DraftOffsetKey_1 = DraftOffsetKey$9;
var Keys$4 = {
  BACKSPACE: 8,
  TAB: 9,
  RETURN: 13,
  ALT: 18,
  ESC: 27,
  SPACE: 32,
  PAGE_UP: 33,
  PAGE_DOWN: 34,
  END: 35,
  HOME: 36,
  LEFT: 37,
  UP: 38,
  RIGHT: 39,
  DOWN: 40,
  DELETE: 46,
  COMMA: 188,
  PERIOD: 190,
  A: 65,
  Z: 90,
  ZERO: 48,
  NUMPAD_0: 96,
  NUMPAD_9: 105
};
var DraftJsDebugLogging$2 = {
  logBlockedSelectionEvent: function logBlockedSelectionEvent() {
    return null;
  },
  logSelectionStateFailure: function logSelectionStateFailure() {
    return null;
  }
};
function isHTMLElement$5(node) {
  if (!node || !node.ownerDocument) {
    return false;
  }
  if (!node.ownerDocument.defaultView) {
    return node instanceof HTMLElement;
  }
  if (node instanceof node.ownerDocument.defaultView.HTMLElement) {
    return true;
  }
  return false;
}
var isHTMLElement_1 = isHTMLElement$5;
var invariant$g = invariant_1;
var isHTMLElement$4 = isHTMLElement_1;
function getContentEditableContainer$2(editor) {
  var editorNode = editor.editorContainer;
  !editorNode ? invariant$g(false) : void 0;
  !isHTMLElement$4(editorNode.firstChild) ? invariant$g(false) : void 0;
  var htmlElement = editorNode.firstChild;
  return htmlElement;
}
var getContentEditableContainer_1 = getContentEditableContainer$2;
var DraftOffsetKey$8 = DraftOffsetKey_1;
var nullthrows$b = nullthrows_1;
function getUpdatedSelectionState$2(editorState, anchorKey, anchorOffset, focusKey, focusOffset) {
  var selection = nullthrows$b(editorState.getSelection());
  if (!anchorKey || !focusKey) {
    return selection;
  }
  var anchorPath = DraftOffsetKey$8.decode(anchorKey);
  var anchorBlockKey = anchorPath.blockKey;
  var anchorLeafBlockTree = editorState.getBlockTree(anchorBlockKey);
  var anchorLeaf = anchorLeafBlockTree && anchorLeafBlockTree.getIn([anchorPath.decoratorKey, "leaves", anchorPath.leafKey]);
  var focusPath = DraftOffsetKey$8.decode(focusKey);
  var focusBlockKey = focusPath.blockKey;
  var focusLeafBlockTree = editorState.getBlockTree(focusBlockKey);
  var focusLeaf = focusLeafBlockTree && focusLeafBlockTree.getIn([focusPath.decoratorKey, "leaves", focusPath.leafKey]);
  if (!anchorLeaf || !focusLeaf) {
    return selection;
  }
  var anchorLeafStart = anchorLeaf.get("start");
  var focusLeafStart = focusLeaf.get("start");
  var anchorBlockOffset = anchorLeaf ? anchorLeafStart + anchorOffset : null;
  var focusBlockOffset = focusLeaf ? focusLeafStart + focusOffset : null;
  var areEqual3 = selection.getAnchorKey() === anchorBlockKey && selection.getAnchorOffset() === anchorBlockOffset && selection.getFocusKey() === focusBlockKey && selection.getFocusOffset() === focusBlockOffset;
  if (areEqual3) {
    return selection;
  }
  var isBackward = false;
  if (anchorBlockKey === focusBlockKey) {
    var anchorLeafEnd = anchorLeaf.get("end");
    var focusLeafEnd = focusLeaf.get("end");
    if (focusLeafStart === anchorLeafStart && focusLeafEnd === anchorLeafEnd) {
      isBackward = focusOffset < anchorOffset;
    } else {
      isBackward = focusLeafStart < anchorLeafStart;
    }
  } else {
    var startKey = editorState.getCurrentContent().getBlockMap().keySeq().skipUntil(function(v) {
      return v === anchorBlockKey || v === focusBlockKey;
    }).first();
    isBackward = startKey === focusBlockKey;
  }
  return selection.merge({
    anchorKey: anchorBlockKey,
    anchorOffset: anchorBlockOffset,
    focusKey: focusBlockKey,
    focusOffset: focusBlockOffset,
    isBackward
  });
}
var getUpdatedSelectionState_1 = getUpdatedSelectionState$2;
var findAncestorOffsetKey$2 = findAncestorOffsetKey_1;
var getSelectionOffsetKeyForNode = getSelectionOffsetKeyForNode_1;
var getUpdatedSelectionState$1 = getUpdatedSelectionState_1;
var invariant$f = invariant_1;
var isElement$5 = isElement_1;
var nullthrows$a = nullthrows_1;
function getDraftEditorSelectionWithNodes$2(editorState, root2, anchorNode, anchorOffset, focusNode, focusOffset) {
  var anchorIsTextNode = anchorNode.nodeType === Node.TEXT_NODE;
  var focusIsTextNode = focusNode.nodeType === Node.TEXT_NODE;
  if (anchorIsTextNode && focusIsTextNode) {
    return {
      selectionState: getUpdatedSelectionState$1(editorState, nullthrows$a(findAncestorOffsetKey$2(anchorNode)), anchorOffset, nullthrows$a(findAncestorOffsetKey$2(focusNode)), focusOffset),
      needsRecovery: false
    };
  }
  var anchorPoint = null;
  var focusPoint = null;
  var needsRecovery = true;
  if (anchorIsTextNode) {
    anchorPoint = {
      key: nullthrows$a(findAncestorOffsetKey$2(anchorNode)),
      offset: anchorOffset
    };
    focusPoint = getPointForNonTextNode(root2, focusNode, focusOffset);
  } else if (focusIsTextNode) {
    focusPoint = {
      key: nullthrows$a(findAncestorOffsetKey$2(focusNode)),
      offset: focusOffset
    };
    anchorPoint = getPointForNonTextNode(root2, anchorNode, anchorOffset);
  } else {
    anchorPoint = getPointForNonTextNode(root2, anchorNode, anchorOffset);
    focusPoint = getPointForNonTextNode(root2, focusNode, focusOffset);
    if (anchorNode === focusNode && anchorOffset === focusOffset) {
      needsRecovery = !!anchorNode.firstChild && anchorNode.firstChild.nodeName !== "BR";
    }
  }
  return {
    selectionState: getUpdatedSelectionState$1(editorState, anchorPoint.key, anchorPoint.offset, focusPoint.key, focusPoint.offset),
    needsRecovery
  };
}
function getFirstLeaf(node) {
  while (node.firstChild && (isElement$5(node.firstChild) && node.firstChild.getAttribute("data-blocks") === "true" || getSelectionOffsetKeyForNode(node.firstChild))) {
    node = node.firstChild;
  }
  return node;
}
function getLastLeaf(node) {
  while (node.lastChild && (isElement$5(node.lastChild) && node.lastChild.getAttribute("data-blocks") === "true" || getSelectionOffsetKeyForNode(node.lastChild))) {
    node = node.lastChild;
  }
  return node;
}
function getPointForNonTextNode(editorRoot, startNode, childOffset) {
  var node = startNode;
  var offsetKey = findAncestorOffsetKey$2(node);
  !(offsetKey != null || editorRoot && (editorRoot === node || editorRoot.firstChild === node)) ? invariant$f(false) : void 0;
  if (editorRoot === node) {
    node = node.firstChild;
    !isElement$5(node) ? invariant$f(false) : void 0;
    var castedNode = node;
    node = castedNode;
    !(node.getAttribute("data-contents") === "true") ? invariant$f(false) : void 0;
    if (childOffset > 0) {
      childOffset = node.childNodes.length;
    }
  }
  if (childOffset === 0) {
    var key = null;
    if (offsetKey != null) {
      key = offsetKey;
    } else {
      var firstLeaf = getFirstLeaf(node);
      key = nullthrows$a(getSelectionOffsetKeyForNode(firstLeaf));
    }
    return {
      key,
      offset: 0
    };
  }
  var nodeBeforeCursor = node.childNodes[childOffset - 1];
  var leafKey = null;
  var textLength = null;
  if (!getSelectionOffsetKeyForNode(nodeBeforeCursor)) {
    leafKey = nullthrows$a(offsetKey);
    textLength = getTextContentLength(nodeBeforeCursor);
  } else {
    var lastLeaf = getLastLeaf(nodeBeforeCursor);
    leafKey = nullthrows$a(getSelectionOffsetKeyForNode(lastLeaf));
    textLength = getTextContentLength(lastLeaf);
  }
  return {
    key: leafKey,
    offset: textLength
  };
}
function getTextContentLength(node) {
  var textContent = node.textContent;
  return textContent === "\n" ? 0 : textContent.length;
}
var getDraftEditorSelectionWithNodes_1 = getDraftEditorSelectionWithNodes$2;
var getDraftEditorSelectionWithNodes$1 = getDraftEditorSelectionWithNodes_1;
function getDraftEditorSelection$2(editorState, root2) {
  var selection = root2.ownerDocument.defaultView.getSelection();
  var anchorNode = selection.anchorNode, anchorOffset = selection.anchorOffset, focusNode = selection.focusNode, focusOffset = selection.focusOffset, rangeCount = selection.rangeCount;
  if (rangeCount === 0 || anchorNode == null || focusNode == null) {
    return {
      selectionState: editorState.getSelection().set("hasFocus", false),
      needsRecovery: false
    };
  }
  return getDraftEditorSelectionWithNodes$1(editorState, root2, anchorNode, anchorOffset, focusNode, focusOffset);
}
var getDraftEditorSelection_1 = getDraftEditorSelection$2;
var DraftJsDebugLogging$1 = DraftJsDebugLogging$2;
var EditorState$o = EditorState_1;
var getContentEditableContainer$1 = getContentEditableContainer_1;
var getDraftEditorSelection$1 = getDraftEditorSelection_1;
function editOnSelect$1(editor) {
  if (editor._blockSelectEvents || editor._latestEditorState !== editor.props.editorState) {
    if (editor._blockSelectEvents) {
      var _editorState = editor.props.editorState;
      var selectionState = _editorState.getSelection();
      DraftJsDebugLogging$1.logBlockedSelectionEvent({
        anonymizedDom: "N/A",
        extraParams: JSON.stringify({
          stacktrace: new Error().stack
        }),
        selectionState: JSON.stringify(selectionState.toJS())
      });
    }
    return;
  }
  var editorState = editor.props.editorState;
  var documentSelection = getDraftEditorSelection$1(editorState, getContentEditableContainer$1(editor));
  var updatedSelectionState = documentSelection.selectionState;
  if (updatedSelectionState !== editorState.getSelection()) {
    if (documentSelection.needsRecovery) {
      editorState = EditorState$o.forceSelection(editorState, updatedSelectionState);
    } else {
      editorState = EditorState$o.acceptSelection(editorState, updatedSelectionState);
    }
    editor.update(editorState);
  }
}
var editOnSelect_1 = editOnSelect$1;
function notEmptyKey$2(key) {
  return key != null && key != "";
}
var draftKeyUtils = {
  notEmptyKey: notEmptyKey$2
};
var _require$3 = draftKeyUtils, notEmptyKey$1 = _require$3.notEmptyKey;
function getEntityKeyForSelection$3(contentState, targetSelection) {
  var entityKey;
  if (targetSelection.isCollapsed()) {
    var key = targetSelection.getAnchorKey();
    var offset = targetSelection.getAnchorOffset();
    if (offset > 0) {
      entityKey = contentState.getBlockForKey(key).getEntityAt(offset - 1);
      if (entityKey !== contentState.getBlockForKey(key).getEntityAt(offset)) {
        return null;
      }
      return filterKey(contentState.getEntityMap(), entityKey);
    }
    return null;
  }
  var startKey = targetSelection.getStartKey();
  var startOffset = targetSelection.getStartOffset();
  var startBlock = contentState.getBlockForKey(startKey);
  entityKey = startOffset === startBlock.getLength() ? null : startBlock.getEntityAt(startOffset);
  return filterKey(contentState.getEntityMap(), entityKey);
}
function filterKey(entityMap, entityKey) {
  if (notEmptyKey$1(entityKey)) {
    var entity = entityMap.__get(entityKey);
    return entity.getMutability() === "MUTABLE" ? entityKey : null;
  }
  return null;
}
var getEntityKeyForSelection_1 = getEntityKeyForSelection$3;
var DOMObserver = DOMObserver_1;
var DraftModifier$c = DraftModifier_1;
var DraftOffsetKey$7 = DraftOffsetKey_1;
var EditorState$n = EditorState_1;
var Keys$3 = Keys$4;
var UserAgent$c = UserAgent_1;
var editOnSelect = editOnSelect_1;
var getContentEditableContainer = getContentEditableContainer_1;
var getDraftEditorSelection = getDraftEditorSelection_1;
var getEntityKeyForSelection$2 = getEntityKeyForSelection_1;
var nullthrows$9 = nullthrows_1;
var isIE$2 = UserAgent$c.isBrowser("IE");
var RESOLVE_DELAY = 20;
var resolved = false;
var stillComposing = false;
var domObserver = null;
function startDOMObserver(editor) {
  if (!domObserver) {
    domObserver = new DOMObserver(getContentEditableContainer(editor));
    domObserver.start();
  }
}
var DraftEditorCompositionHandler$1 = {
  onCompositionStart: function onCompositionStart(editor) {
    stillComposing = true;
    startDOMObserver(editor);
  },
  onCompositionEnd: function onCompositionEnd(editor) {
    resolved = false;
    stillComposing = false;
    setTimeout(function() {
      if (!resolved) {
        DraftEditorCompositionHandler$1.resolveComposition(editor);
      }
    }, RESOLVE_DELAY);
  },
  onSelect: editOnSelect,
  onKeyDown: function onKeyDown(editor, e) {
    if (!stillComposing) {
      DraftEditorCompositionHandler$1.resolveComposition(editor);
      editor._onKeyDown(e);
      return;
    }
    if (e.which === Keys$3.RIGHT || e.which === Keys$3.LEFT) {
      e.preventDefault();
    }
  },
  onKeyPress: function onKeyPress(_editor, e) {
    if (e.which === Keys$3.RETURN) {
      e.preventDefault();
    }
  },
  resolveComposition: function resolveComposition(editor) {
    if (stillComposing) {
      return;
    }
    var mutations = nullthrows$9(domObserver).stopAndFlushMutations();
    domObserver = null;
    resolved = true;
    var editorState = EditorState$n.set(editor._latestEditorState, {
      inCompositionMode: false
    });
    editor.exitCurrentMode();
    if (!mutations.size) {
      editor.update(editorState);
      return;
    }
    var contentState = editorState.getCurrentContent();
    mutations.forEach(function(composedChars, offsetKey) {
      var _DraftOffsetKey$decod = DraftOffsetKey$7.decode(offsetKey), blockKey = _DraftOffsetKey$decod.blockKey, decoratorKey = _DraftOffsetKey$decod.decoratorKey, leafKey = _DraftOffsetKey$decod.leafKey;
      var _editorState$getBlock = editorState.getBlockTree(blockKey).getIn([decoratorKey, "leaves", leafKey]), start = _editorState$getBlock.start, end = _editorState$getBlock.end;
      var replacementRange = editorState.getSelection().merge({
        anchorKey: blockKey,
        focusKey: blockKey,
        anchorOffset: start,
        focusOffset: end,
        isBackward: false
      });
      var entityKey = getEntityKeyForSelection$2(contentState, replacementRange);
      var currentStyle = contentState.getBlockForKey(blockKey).getInlineStyleAt(start);
      contentState = DraftModifier$c.replaceText(contentState, replacementRange, composedChars, currentStyle, entityKey);
      editorState = EditorState$n.set(editorState, {
        currentContent: contentState
      });
    });
    var documentSelection = getDraftEditorSelection(editorState, getContentEditableContainer(editor));
    var compositionEndSelectionState = documentSelection.selectionState;
    editor.restoreEditorDOM();
    var editorStateWithUpdatedSelection = isIE$2 ? EditorState$n.forceSelection(editorState, compositionEndSelectionState) : EditorState$n.acceptSelection(editorState, compositionEndSelectionState);
    editor.update(EditorState$n.push(editorStateWithUpdatedSelection, contentState, "insert-characters"));
  }
};
var DraftEditorCompositionHandler_1 = DraftEditorCompositionHandler$1;
var _assign$6 = objectAssign;
function _extends$5() {
  _extends$5 = _assign$6 || function(target) {
    for (var i = 1; i < arguments.length; i++) {
      var source = arguments[i];
      for (var key in source) {
        if (Object.prototype.hasOwnProperty.call(source, key)) {
          target[key] = source[key];
        }
      }
    }
    return target;
  };
  return _extends$5.apply(this, arguments);
}
function _inheritsLoose$9(subClass, superClass) {
  subClass.prototype = Object.create(superClass.prototype);
  subClass.prototype.constructor = subClass;
  subClass.__proto__ = superClass;
}
var DraftOffsetKey$6 = DraftOffsetKey_1;
var React$a = React__default;
var UnicodeBidi$1 = UnicodeBidi_1;
var UnicodeBidiDirection$1 = UnicodeBidiDirection_1;
var DraftEditorDecoratedLeaves$1 = /* @__PURE__ */ function(_React$Component) {
  _inheritsLoose$9(DraftEditorDecoratedLeaves2, _React$Component);
  function DraftEditorDecoratedLeaves2() {
    return _React$Component.apply(this, arguments) || this;
  }
  var _proto = DraftEditorDecoratedLeaves2.prototype;
  _proto.render = function render3() {
    var _this$props = this.props, block = _this$props.block, children = _this$props.children, contentState = _this$props.contentState, decorator = _this$props.decorator, decoratorKey = _this$props.decoratorKey, direction = _this$props.direction, leafSet = _this$props.leafSet, text = _this$props.text;
    var blockKey = block.getKey();
    var leavesForLeafSet = leafSet.get("leaves");
    var DecoratorComponent = decorator.getComponentForKey(decoratorKey);
    var decoratorProps = decorator.getPropsForKey(decoratorKey);
    var decoratorOffsetKey = DraftOffsetKey$6.encode(blockKey, parseInt(decoratorKey, 10), 0);
    var decoratedText = text.slice(leavesForLeafSet.first().get("start"), leavesForLeafSet.last().get("end"));
    var dir = UnicodeBidiDirection$1.getHTMLDirIfDifferent(UnicodeBidi$1.getDirection(decoratedText), direction);
    return React$a.createElement(DecoratorComponent, _extends$5({}, decoratorProps, {
      contentState,
      decoratedText,
      dir,
      key: decoratorOffsetKey,
      entityKey: block.getEntityAt(leafSet.get("start")),
      offsetKey: decoratorOffsetKey
    }), children);
  };
  return DraftEditorDecoratedLeaves2;
}(React$a.Component);
var DraftEditorDecoratedLeaves_react = DraftEditorDecoratedLeaves$1;
function _assertThisInitialized$4(self2) {
  if (self2 === void 0) {
    throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
  }
  return self2;
}
function _inheritsLoose$8(subClass, superClass) {
  subClass.prototype = Object.create(superClass.prototype);
  subClass.prototype.constructor = subClass;
  subClass.__proto__ = superClass;
}
function _defineProperty$b(obj, key, value) {
  if (key in obj) {
    Object.defineProperty(obj, key, { value, enumerable: true, configurable: true, writable: true });
  } else {
    obj[key] = value;
  }
  return obj;
}
var React$9 = React__default;
var UserAgent$b = UserAgent_1;
var invariant$e = invariant_1;
var isElement$4 = isElement_1;
var useNewlineChar = UserAgent$b.isBrowser("IE <= 11");
function isNewline(node) {
  return useNewlineChar ? node.textContent === "\n" : node.tagName === "BR";
}
var NEWLINE_A = function NEWLINE_A2(ref) {
  return useNewlineChar ? React$9.createElement("span", {
    key: "A",
    "data-text": "true",
    ref
  }, "\n") : React$9.createElement("br", {
    key: "A",
    "data-text": "true",
    ref
  });
};
var NEWLINE_B = function NEWLINE_B2(ref) {
  return useNewlineChar ? React$9.createElement("span", {
    key: "B",
    "data-text": "true",
    ref
  }, "\n") : React$9.createElement("br", {
    key: "B",
    "data-text": "true",
    ref
  });
};
var DraftEditorTextNode$1 = /* @__PURE__ */ function(_React$Component) {
  _inheritsLoose$8(DraftEditorTextNode2, _React$Component);
  function DraftEditorTextNode2(props) {
    var _this;
    _this = _React$Component.call(this, props) || this;
    _defineProperty$b(_assertThisInitialized$4(_this), "_forceFlag", void 0);
    _defineProperty$b(_assertThisInitialized$4(_this), "_node", void 0);
    _this._forceFlag = false;
    return _this;
  }
  var _proto = DraftEditorTextNode2.prototype;
  _proto.shouldComponentUpdate = function shouldComponentUpdate(nextProps) {
    var node = this._node;
    var shouldBeNewline = nextProps.children === "";
    !isElement$4(node) ? invariant$e(false) : void 0;
    var elementNode = node;
    if (shouldBeNewline) {
      return !isNewline(elementNode);
    }
    return elementNode.textContent !== nextProps.children;
  };
  _proto.componentDidMount = function componentDidMount() {
    this._forceFlag = !this._forceFlag;
  };
  _proto.componentDidUpdate = function componentDidUpdate() {
    this._forceFlag = !this._forceFlag;
  };
  _proto.render = function render3() {
    var _this2 = this;
    if (this.props.children === "") {
      return this._forceFlag ? NEWLINE_A(function(ref) {
        return _this2._node = ref;
      }) : NEWLINE_B(function(ref) {
        return _this2._node = ref;
      });
    }
    return React$9.createElement("span", {
      key: this._forceFlag ? "A" : "B",
      "data-text": "true",
      ref: function ref(_ref) {
        return _this2._node = _ref;
      }
    }, this.props.children);
  };
  return DraftEditorTextNode2;
}(React$9.Component);
var DraftEditorTextNode_react = DraftEditorTextNode$1;
var isElement$3 = isElement_1;
function isHTMLBRElement$2(node) {
  if (!node || !node.ownerDocument) {
    return false;
  }
  return isElement$3(node) && node.nodeName === "BR";
}
var isHTMLBRElement_1 = isHTMLBRElement$2;
function isNode$2(object) {
  var doc = object ? object.ownerDocument || object : document;
  var defaultView = doc.defaultView || window;
  return !!(object && (typeof defaultView.Node === "function" ? object instanceof defaultView.Node : typeof object === "object" && typeof object.nodeType === "number" && typeof object.nodeName === "string"));
}
var isNode_1 = isNode$2;
var isNode$1 = isNode_1;
function isTextNode$1(object) {
  return isNode$1(object) && object.nodeType == 3;
}
var isTextNode_1 = isTextNode$1;
var isTextNode = isTextNode_1;
function containsNode$3(outerNode, innerNode) {
  if (!outerNode || !innerNode) {
    return false;
  } else if (outerNode === innerNode) {
    return true;
  } else if (isTextNode(outerNode)) {
    return false;
  } else if (isTextNode(innerNode)) {
    return containsNode$3(outerNode, innerNode.parentNode);
  } else if ("contains" in outerNode) {
    return outerNode.contains(innerNode);
  } else if (outerNode.compareDocumentPosition) {
    return !!(outerNode.compareDocumentPosition(innerNode) & 16);
  } else {
    return false;
  }
}
var containsNode_1 = containsNode$3;
function getActiveElement$2(doc) {
  doc = doc || (typeof document !== "undefined" ? document : void 0);
  if (typeof doc === "undefined") {
    return null;
  }
  try {
    return doc.activeElement || doc.body;
  } catch (e) {
    return doc.body;
  }
}
var getActiveElement_1 = getActiveElement$2;
var DraftJsDebugLogging = DraftJsDebugLogging$2;
var UserAgent$a = UserAgent_1;
var containsNode$2 = containsNode_1;
var getActiveElement$1 = getActiveElement_1;
var getCorrectDocumentFromNode$2 = getCorrectDocumentFromNode_1;
var invariant$d = invariant_1;
var isElement$2 = isElement_1;
var isIE$1 = UserAgent$a.isBrowser("IE");
function getAnonymizedDOM(node, getNodeLabels) {
  if (!node) {
    return "[empty]";
  }
  var anonymized = anonymizeTextWithin(node, getNodeLabels);
  if (anonymized.nodeType === Node.TEXT_NODE) {
    return anonymized.textContent;
  }
  !isElement$2(anonymized) ? invariant$d(false) : void 0;
  var castedElement = anonymized;
  return castedElement.outerHTML;
}
function anonymizeTextWithin(node, getNodeLabels) {
  var labels = getNodeLabels !== void 0 ? getNodeLabels(node) : [];
  if (node.nodeType === Node.TEXT_NODE) {
    var length = node.textContent.length;
    return getCorrectDocumentFromNode$2(node).createTextNode("[text " + length + (labels.length ? " | " + labels.join(", ") : "") + "]");
  }
  var clone = node.cloneNode();
  if (clone.nodeType === 1 && labels.length) {
    clone.setAttribute("data-labels", labels.join(", "));
  }
  var childNodes = node.childNodes;
  for (var ii2 = 0; ii2 < childNodes.length; ii2++) {
    clone.appendChild(anonymizeTextWithin(childNodes[ii2], getNodeLabels));
  }
  return clone;
}
function getAnonymizedEditorDOM(node, getNodeLabels) {
  var currentNode = node;
  var castedNode = currentNode;
  while (currentNode) {
    if (isElement$2(currentNode) && castedNode.hasAttribute("contenteditable")) {
      return getAnonymizedDOM(currentNode, getNodeLabels);
    } else {
      currentNode = currentNode.parentNode;
      castedNode = currentNode;
    }
  }
  return "Could not find contentEditable parent of node";
}
function getNodeLength$1(node) {
  return node.nodeValue === null ? node.childNodes.length : node.nodeValue.length;
}
function setDraftEditorSelection$1(selectionState, node, blockKey, nodeStart, nodeEnd) {
  var documentObject = getCorrectDocumentFromNode$2(node);
  if (!containsNode$2(documentObject.documentElement, node)) {
    return;
  }
  var selection = documentObject.defaultView.getSelection();
  var anchorKey = selectionState.getAnchorKey();
  var anchorOffset = selectionState.getAnchorOffset();
  var focusKey = selectionState.getFocusKey();
  var focusOffset = selectionState.getFocusOffset();
  var isBackward = selectionState.getIsBackward();
  if (!selection.extend && isBackward) {
    var tempKey = anchorKey;
    var tempOffset = anchorOffset;
    anchorKey = focusKey;
    anchorOffset = focusOffset;
    focusKey = tempKey;
    focusOffset = tempOffset;
    isBackward = false;
  }
  var hasAnchor = anchorKey === blockKey && nodeStart <= anchorOffset && nodeEnd >= anchorOffset;
  var hasFocus = focusKey === blockKey && nodeStart <= focusOffset && nodeEnd >= focusOffset;
  if (hasAnchor && hasFocus) {
    selection.removeAllRanges();
    addPointToSelection(selection, node, anchorOffset - nodeStart, selectionState);
    addFocusToSelection(selection, node, focusOffset - nodeStart, selectionState);
    return;
  }
  if (!isBackward) {
    if (hasAnchor) {
      selection.removeAllRanges();
      addPointToSelection(selection, node, anchorOffset - nodeStart, selectionState);
    }
    if (hasFocus) {
      addFocusToSelection(selection, node, focusOffset - nodeStart, selectionState);
    }
  } else {
    if (hasFocus) {
      selection.removeAllRanges();
      addPointToSelection(selection, node, focusOffset - nodeStart, selectionState);
    }
    if (hasAnchor) {
      var storedFocusNode = selection.focusNode;
      var storedFocusOffset = selection.focusOffset;
      selection.removeAllRanges();
      addPointToSelection(selection, node, anchorOffset - nodeStart, selectionState);
      addFocusToSelection(selection, storedFocusNode, storedFocusOffset, selectionState);
    }
  }
}
function addFocusToSelection(selection, node, offset, selectionState) {
  var activeElement = getActiveElement$1();
  var extend2 = selection.extend;
  if (extend2 && node != null && containsNode$2(activeElement, node)) {
    if (offset > getNodeLength$1(node)) {
      DraftJsDebugLogging.logSelectionStateFailure({
        anonymizedDom: getAnonymizedEditorDOM(node),
        extraParams: JSON.stringify({
          offset
        }),
        selectionState: JSON.stringify(selectionState.toJS())
      });
    }
    var nodeWasFocus = node === selection.focusNode;
    try {
      if (selection.rangeCount > 0 && selection.extend) {
        selection.extend(node, offset);
      }
    } catch (e) {
      DraftJsDebugLogging.logSelectionStateFailure({
        anonymizedDom: getAnonymizedEditorDOM(node, function(n) {
          var labels = [];
          if (n === activeElement) {
            labels.push("active element");
          }
          if (n === selection.anchorNode) {
            labels.push("selection anchor node");
          }
          if (n === selection.focusNode) {
            labels.push("selection focus node");
          }
          return labels;
        }),
        extraParams: JSON.stringify({
          activeElementName: activeElement ? activeElement.nodeName : null,
          nodeIsFocus: node === selection.focusNode,
          nodeWasFocus,
          selectionRangeCount: selection.rangeCount,
          selectionAnchorNodeName: selection.anchorNode ? selection.anchorNode.nodeName : null,
          selectionAnchorOffset: selection.anchorOffset,
          selectionFocusNodeName: selection.focusNode ? selection.focusNode.nodeName : null,
          selectionFocusOffset: selection.focusOffset,
          message: e ? "" + e : null,
          offset
        }, null, 2),
        selectionState: JSON.stringify(selectionState.toJS(), null, 2)
      });
      throw e;
    }
  } else {
    if (node && selection.rangeCount > 0) {
      var range = selection.getRangeAt(0);
      range.setEnd(node, offset);
      selection.addRange(range.cloneRange());
    }
  }
}
function addPointToSelection(selection, node, offset, selectionState) {
  var range = getCorrectDocumentFromNode$2(node).createRange();
  if (offset > getNodeLength$1(node)) {
    DraftJsDebugLogging.logSelectionStateFailure({
      anonymizedDom: getAnonymizedEditorDOM(node),
      extraParams: JSON.stringify({
        offset
      }),
      selectionState: JSON.stringify(selectionState.toJS())
    });
  }
  range.setStart(node, offset);
  if (isIE$1) {
    try {
      selection.addRange(range);
    } catch (e) {
    }
  } else {
    selection.addRange(range);
  }
}
var setDraftEditorSelection_1 = {
  setDraftEditorSelection: setDraftEditorSelection$1,
  addFocusToSelection
};
var _assign$5 = objectAssign;
function _assertThisInitialized$3(self2) {
  if (self2 === void 0) {
    throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
  }
  return self2;
}
function _inheritsLoose$7(subClass, superClass) {
  subClass.prototype = Object.create(superClass.prototype);
  subClass.prototype.constructor = subClass;
  subClass.__proto__ = superClass;
}
function _defineProperty$a(obj, key, value) {
  if (key in obj) {
    Object.defineProperty(obj, key, { value, enumerable: true, configurable: true, writable: true });
  } else {
    obj[key] = value;
  }
  return obj;
}
var DraftEditorTextNode = DraftEditorTextNode_react;
var React$8 = React__default;
var invariant$c = invariant_1;
var isHTMLBRElement$1 = isHTMLBRElement_1;
var setDraftEditorSelection = setDraftEditorSelection_1.setDraftEditorSelection;
var DraftEditorLeaf$2 = /* @__PURE__ */ function(_React$Component) {
  _inheritsLoose$7(DraftEditorLeaf2, _React$Component);
  function DraftEditorLeaf2() {
    var _this;
    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }
    _this = _React$Component.call.apply(_React$Component, [this].concat(args)) || this;
    _defineProperty$a(_assertThisInitialized$3(_this), "leaf", void 0);
    return _this;
  }
  var _proto = DraftEditorLeaf2.prototype;
  _proto._setSelection = function _setSelection() {
    var selection = this.props.selection;
    if (selection == null || !selection.getHasFocus()) {
      return;
    }
    var _this$props = this.props, block = _this$props.block, start = _this$props.start, text = _this$props.text;
    var blockKey = block.getKey();
    var end = start + text.length;
    if (!selection.hasEdgeWithin(blockKey, start, end)) {
      return;
    }
    var node = this.leaf;
    !node ? invariant$c(false) : void 0;
    var child = node.firstChild;
    !child ? invariant$c(false) : void 0;
    var targetNode;
    if (child.nodeType === Node.TEXT_NODE) {
      targetNode = child;
    } else if (isHTMLBRElement$1(child)) {
      targetNode = node;
    } else {
      targetNode = child.firstChild;
      !targetNode ? invariant$c(false) : void 0;
    }
    setDraftEditorSelection(selection, targetNode, blockKey, start, end);
  };
  _proto.shouldComponentUpdate = function shouldComponentUpdate(nextProps) {
    var leafNode = this.leaf;
    !leafNode ? invariant$c(false) : void 0;
    var shouldUpdate = leafNode.textContent !== nextProps.text || nextProps.styleSet !== this.props.styleSet || nextProps.forceSelection;
    return shouldUpdate;
  };
  _proto.componentDidUpdate = function componentDidUpdate() {
    this._setSelection();
  };
  _proto.componentDidMount = function componentDidMount() {
    this._setSelection();
  };
  _proto.render = function render3() {
    var _this2 = this;
    var block = this.props.block;
    var text = this.props.text;
    if (text.endsWith("\n") && this.props.isLast) {
      text += "\n";
    }
    var _this$props2 = this.props, customStyleMap = _this$props2.customStyleMap, customStyleFn = _this$props2.customStyleFn, offsetKey = _this$props2.offsetKey, styleSet = _this$props2.styleSet;
    var styleObj = styleSet.reduce(function(map2, styleName) {
      var mergedStyles = {};
      var style = customStyleMap[styleName];
      if (style !== void 0 && map2.textDecoration !== style.textDecoration) {
        mergedStyles.textDecoration = [map2.textDecoration, style.textDecoration].join(" ").trim();
      }
      return _assign$5(map2, style, mergedStyles);
    }, {});
    if (customStyleFn) {
      var newStyles = customStyleFn(styleSet, block);
      styleObj = _assign$5(styleObj, newStyles);
    }
    return React$8.createElement("span", {
      "data-offset-key": offsetKey,
      ref: function ref(_ref) {
        return _this2.leaf = _ref;
      },
      style: styleObj
    }, React$8.createElement(DraftEditorTextNode, null, text));
  };
  return DraftEditorLeaf2;
}(React$8.Component);
var DraftEditorLeaf_react = DraftEditorLeaf$2;
function _inheritsLoose$6(subClass, superClass) {
  subClass.prototype = Object.create(superClass.prototype);
  subClass.prototype.constructor = subClass;
  subClass.__proto__ = superClass;
}
var DraftEditorDecoratedLeaves = DraftEditorDecoratedLeaves_react;
var DraftEditorLeaf$1 = DraftEditorLeaf_react;
var DraftOffsetKey$5 = DraftOffsetKey_1;
var Immutable$4 = immutable.exports;
var React$7 = React__default;
var cx$5 = cx_1;
Immutable$4.List;
var DraftEditorNode$1 = /* @__PURE__ */ function(_React$Component) {
  _inheritsLoose$6(DraftEditorNode2, _React$Component);
  function DraftEditorNode2() {
    return _React$Component.apply(this, arguments) || this;
  }
  var _proto = DraftEditorNode2.prototype;
  _proto.render = function render3() {
    var _this$props = this.props, block = _this$props.block, contentState = _this$props.contentState, customStyleFn = _this$props.customStyleFn, customStyleMap = _this$props.customStyleMap, decorator = _this$props.decorator, direction = _this$props.direction, forceSelection = _this$props.forceSelection, hasSelection = _this$props.hasSelection, selection = _this$props.selection, tree = _this$props.tree;
    var blockKey = block.getKey();
    var text = block.getText();
    var lastLeafSet = tree.size - 1;
    var children = this.props.children || tree.map(function(leafSet, ii2) {
      var decoratorKey = leafSet.get("decoratorKey");
      var leavesForLeafSet = leafSet.get("leaves");
      var lastLeaf = leavesForLeafSet.size - 1;
      var Leaves = leavesForLeafSet.map(function(leaf, jj2) {
        var offsetKey = DraftOffsetKey$5.encode(blockKey, ii2, jj2);
        var start = leaf.get("start");
        var end = leaf.get("end");
        return React$7.createElement(DraftEditorLeaf$1, {
          key: offsetKey,
          offsetKey,
          block,
          start,
          selection: hasSelection ? selection : null,
          forceSelection,
          text: text.slice(start, end),
          styleSet: block.getInlineStyleAt(start),
          customStyleMap,
          customStyleFn,
          isLast: decoratorKey === lastLeafSet && jj2 === lastLeaf
        });
      }).toArray();
      if (!decoratorKey || !decorator) {
        return Leaves;
      }
      return React$7.createElement(DraftEditorDecoratedLeaves, {
        block,
        children: Leaves,
        contentState,
        decorator,
        decoratorKey,
        direction,
        leafSet,
        text,
        key: ii2
      });
    }).toArray();
    return React$7.createElement("div", {
      "data-offset-key": DraftOffsetKey$5.encode(blockKey, 0, 0),
      className: cx$5({
        "public/DraftStyleDefault/block": true,
        "public/DraftStyleDefault/ltr": direction === "LTR",
        "public/DraftStyleDefault/rtl": direction === "RTL"
      })
    }, children);
  };
  return DraftEditorNode2;
}(React$7.Component);
var DraftEditorNode_react = DraftEditorNode$1;
function _isViewportScrollElement(element, doc) {
  return !!doc && (element === doc.documentElement || element === doc.body);
}
var Scroll$3 = {
  getTop: function getTop(element) {
    var doc = element.ownerDocument;
    return _isViewportScrollElement(element, doc) ? doc.body.scrollTop || doc.documentElement.scrollTop : element.scrollTop;
  },
  setTop: function setTop(element, newTop) {
    var doc = element.ownerDocument;
    if (_isViewportScrollElement(element, doc)) {
      doc.body.scrollTop = doc.documentElement.scrollTop = newTop;
    } else {
      element.scrollTop = newTop;
    }
  },
  getLeft: function getLeft(element) {
    var doc = element.ownerDocument;
    return _isViewportScrollElement(element, doc) ? doc.body.scrollLeft || doc.documentElement.scrollLeft : element.scrollLeft;
  },
  setLeft: function setLeft(element, newLeft) {
    var doc = element.ownerDocument;
    if (_isViewportScrollElement(element, doc)) {
      doc.body.scrollLeft = doc.documentElement.scrollLeft = newLeft;
    } else {
      element.scrollLeft = newLeft;
    }
  }
};
var Scroll_1 = Scroll$3;
var _hyphenPattern = /-(.)/g;
function camelize$1(string) {
  return string.replace(_hyphenPattern, function(_, character) {
    return character.toUpperCase();
  });
}
var camelize_1 = camelize$1;
var _uppercasePattern = /([A-Z])/g;
function hyphenate$1(string) {
  return string.replace(_uppercasePattern, "-$1").toLowerCase();
}
var hyphenate_1 = hyphenate$1;
var camelize = camelize_1;
var hyphenate = hyphenate_1;
function asString(value) {
  return value == null ? value : String(value);
}
function getStyleProperty$1(node, name) {
  var computedStyle;
  if (window.getComputedStyle) {
    computedStyle = window.getComputedStyle(node, null);
    if (computedStyle) {
      return asString(computedStyle.getPropertyValue(hyphenate(name)));
    }
  }
  if (document.defaultView && document.defaultView.getComputedStyle) {
    computedStyle = document.defaultView.getComputedStyle(node, null);
    if (computedStyle) {
      return asString(computedStyle.getPropertyValue(hyphenate(name)));
    }
    if (name === "display") {
      return "none";
    }
  }
  if (node.currentStyle) {
    if (name === "float") {
      return asString(node.currentStyle.cssFloat || node.currentStyle.styleFloat);
    }
    return asString(node.currentStyle[camelize(name)]);
  }
  return asString(node.style && node.style[camelize(name)]);
}
var getStyleProperty_1 = getStyleProperty$1;
var getStyleProperty = getStyleProperty_1;
function _isNodeScrollable(element, name) {
  var overflow = Style$4.get(element, name);
  return overflow === "auto" || overflow === "scroll";
}
var Style$4 = {
  get: getStyleProperty,
  getScrollParent: function getScrollParent(node) {
    if (!node) {
      return null;
    }
    var ownerDocument = node.ownerDocument;
    while (node && node !== ownerDocument.body) {
      if (_isNodeScrollable(node, "overflow") || _isNodeScrollable(node, "overflowY") || _isNodeScrollable(node, "overflowX")) {
        return node;
      }
      node = node.parentNode;
    }
    return ownerDocument.defaultView || ownerDocument.parentWindow;
  }
};
var Style_1 = Style$4;
var containsNode$1 = containsNode_1;
function getElementRect$1(elem) {
  var docElem = elem.ownerDocument.documentElement;
  if (!("getBoundingClientRect" in elem) || !containsNode$1(docElem, elem)) {
    return {
      left: 0,
      right: 0,
      top: 0,
      bottom: 0
    };
  }
  var rect = elem.getBoundingClientRect();
  return {
    left: Math.round(rect.left) - docElem.clientLeft,
    right: Math.round(rect.right) - docElem.clientLeft,
    top: Math.round(rect.top) - docElem.clientTop,
    bottom: Math.round(rect.bottom) - docElem.clientTop
  };
}
var getElementRect_1 = getElementRect$1;
var getElementRect = getElementRect_1;
function getElementPosition$2(element) {
  var rect = getElementRect(element);
  return {
    x: rect.left,
    y: rect.top,
    width: rect.right - rect.left,
    height: rect.bottom - rect.top
  };
}
var getElementPosition_1 = getElementPosition$2;
var isWebkit = typeof navigator !== "undefined" && navigator.userAgent.indexOf("AppleWebKit") > -1;
function getDocumentScrollElement$1(doc) {
  doc = doc || document;
  if (doc.scrollingElement) {
    return doc.scrollingElement;
  }
  return !isWebkit && doc.compatMode === "CSS1Compat" ? doc.documentElement : doc.body;
}
var getDocumentScrollElement_1 = getDocumentScrollElement$1;
function getUnboundedScrollPosition$1(scrollable) {
  if (scrollable.Window && scrollable instanceof scrollable.Window) {
    return {
      x: scrollable.pageXOffset || scrollable.document.documentElement.scrollLeft,
      y: scrollable.pageYOffset || scrollable.document.documentElement.scrollTop
    };
  }
  return {
    x: scrollable.scrollLeft,
    y: scrollable.scrollTop
  };
}
var getUnboundedScrollPosition_1 = getUnboundedScrollPosition$1;
var getDocumentScrollElement = getDocumentScrollElement_1;
var getUnboundedScrollPosition = getUnboundedScrollPosition_1;
function getScrollPosition$4(scrollable) {
  var documentScrollElement = getDocumentScrollElement(scrollable.ownerDocument || scrollable.document);
  if (scrollable.Window && scrollable instanceof scrollable.Window) {
    scrollable = documentScrollElement;
  }
  var scrollPosition = getUnboundedScrollPosition(scrollable);
  var viewport = scrollable === documentScrollElement ? scrollable.ownerDocument.documentElement : scrollable;
  var xMax = scrollable.scrollWidth - viewport.clientWidth;
  var yMax = scrollable.scrollHeight - viewport.clientHeight;
  scrollPosition.x = Math.max(0, Math.min(scrollPosition.x, xMax));
  scrollPosition.y = Math.max(0, Math.min(scrollPosition.y, yMax));
  return scrollPosition;
}
var getScrollPosition_1 = getScrollPosition$4;
function getViewportWidth() {
  var width;
  if (document.documentElement) {
    width = document.documentElement.clientWidth;
  }
  if (!width && document.body) {
    width = document.body.clientWidth;
  }
  return width || 0;
}
function getViewportHeight() {
  var height;
  if (document.documentElement) {
    height = document.documentElement.clientHeight;
  }
  if (!height && document.body) {
    height = document.body.clientHeight;
  }
  return height || 0;
}
function getViewportDimensions$2() {
  return {
    width: window.innerWidth || getViewportWidth(),
    height: window.innerHeight || getViewportHeight()
  };
}
getViewportDimensions$2.withoutScrollbars = function() {
  return {
    width: getViewportWidth(),
    height: getViewportHeight()
  };
};
var getViewportDimensions_1 = getViewportDimensions$2;
var _assign$4 = objectAssign;
function _extends$4() {
  _extends$4 = _assign$4 || function(target) {
    for (var i = 1; i < arguments.length; i++) {
      var source = arguments[i];
      for (var key in source) {
        if (Object.prototype.hasOwnProperty.call(source, key)) {
          target[key] = source[key];
        }
      }
    }
    return target;
  };
  return _extends$4.apply(this, arguments);
}
function _assertThisInitialized$2(self2) {
  if (self2 === void 0) {
    throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
  }
  return self2;
}
function _inheritsLoose$5(subClass, superClass) {
  subClass.prototype = Object.create(superClass.prototype);
  subClass.prototype.constructor = subClass;
  subClass.__proto__ = superClass;
}
function _objectSpread$7(target) {
  for (var i = 1; i < arguments.length; i++) {
    var source = arguments[i] != null ? arguments[i] : {};
    var ownKeys = Object.keys(source);
    if (typeof Object.getOwnPropertySymbols === "function") {
      ownKeys = ownKeys.concat(Object.getOwnPropertySymbols(source).filter(function(sym) {
        return Object.getOwnPropertyDescriptor(source, sym).enumerable;
      }));
    }
    ownKeys.forEach(function(key) {
      _defineProperty$9(target, key, source[key]);
    });
  }
  return target;
}
function _defineProperty$9(obj, key, value) {
  if (key in obj) {
    Object.defineProperty(obj, key, { value, enumerable: true, configurable: true, writable: true });
  } else {
    obj[key] = value;
  }
  return obj;
}
var DraftEditorNode = DraftEditorNode_react;
var DraftOffsetKey$4 = DraftOffsetKey_1;
var React$6 = React__default;
var Scroll$2 = Scroll_1;
var Style$3 = Style_1;
var getElementPosition$1 = getElementPosition_1;
var getScrollPosition$3 = getScrollPosition_1;
var getViewportDimensions$1 = getViewportDimensions_1;
var Immutable$3 = immutable.exports;
var invariant$b = invariant_1;
var isHTMLElement$3 = isHTMLElement_1;
var SCROLL_BUFFER$1 = 10;
Immutable$3.List;
var isBlockOnSelectionEdge$1 = function isBlockOnSelectionEdge(selection, key) {
  return selection.getAnchorKey() === key || selection.getFocusKey() === key;
};
var shouldNotAddWrapperElement = function shouldNotAddWrapperElement2(block, contentState) {
  var nextSiblingKey = block.getNextSiblingKey();
  return nextSiblingKey ? contentState.getBlockForKey(nextSiblingKey).getType() === block.getType() : false;
};
var applyWrapperElementToSiblings = function applyWrapperElementToSiblings2(wrapperTemplate, Element, nodes) {
  var wrappedSiblings = [];
  var _iteratorNormalCompletion = true;
  var _didIteratorError = false;
  var _iteratorError = void 0;
  try {
    for (var _iterator = nodes.reverse()[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true) {
      var sibling = _step.value;
      if (sibling.type !== Element) {
        break;
      }
      wrappedSiblings.push(sibling);
    }
  } catch (err) {
    _didIteratorError = true;
    _iteratorError = err;
  } finally {
    try {
      if (!_iteratorNormalCompletion && _iterator["return"] != null) {
        _iterator["return"]();
      }
    } finally {
      if (_didIteratorError) {
        throw _iteratorError;
      }
    }
  }
  nodes.splice(nodes.indexOf(wrappedSiblings[0]), wrappedSiblings.length + 1);
  var childrenIs = wrappedSiblings.reverse();
  var key = childrenIs[0].key;
  nodes.push(React$6.cloneElement(wrapperTemplate, {
    key: "".concat(key, "-wrap"),
    "data-offset-key": DraftOffsetKey$4.encode(key, 0, 0)
  }, childrenIs));
  return nodes;
};
var getDraftRenderConfig = function getDraftRenderConfig2(block, blockRenderMap) {
  var configForType = blockRenderMap.get(block.getType()) || blockRenderMap.get("unstyled");
  var wrapperTemplate = configForType.wrapper;
  var Element = configForType.element || blockRenderMap.get("unstyled").element;
  return {
    Element,
    wrapperTemplate
  };
};
var getCustomRenderConfig = function getCustomRenderConfig2(block, blockRendererFn2) {
  var customRenderer = blockRendererFn2(block);
  if (!customRenderer) {
    return {};
  }
  var CustomComponent = customRenderer.component, customProps = customRenderer.props, customEditable = customRenderer.editable;
  return {
    CustomComponent,
    customProps,
    customEditable
  };
};
var getElementPropsConfig = function getElementPropsConfig2(block, editorKey, offsetKey, blockStyleFn2, customConfig, ref) {
  var elementProps = {
    "data-block": true,
    "data-editor": editorKey,
    "data-offset-key": offsetKey,
    key: block.getKey(),
    ref
  };
  var customClass = blockStyleFn2(block);
  if (customClass) {
    elementProps.className = customClass;
  }
  if (customConfig.customEditable !== void 0) {
    elementProps = _objectSpread$7({}, elementProps, {
      contentEditable: customConfig.customEditable,
      suppressContentEditableWarning: true
    });
  }
  return elementProps;
};
var DraftEditorBlockNode$1 = /* @__PURE__ */ function(_React$Component) {
  _inheritsLoose$5(DraftEditorBlockNode2, _React$Component);
  function DraftEditorBlockNode2() {
    var _this;
    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }
    _this = _React$Component.call.apply(_React$Component, [this].concat(args)) || this;
    _defineProperty$9(_assertThisInitialized$2(_this), "wrapperRef", React$6.createRef());
    return _this;
  }
  var _proto = DraftEditorBlockNode2.prototype;
  _proto.shouldComponentUpdate = function shouldComponentUpdate(nextProps) {
    var _this$props = this.props, block = _this$props.block, direction = _this$props.direction, tree = _this$props.tree;
    var isContainerNode = !block.getChildKeys().isEmpty();
    var blockHasChanged = block !== nextProps.block || tree !== nextProps.tree || direction !== nextProps.direction || isBlockOnSelectionEdge$1(nextProps.selection, nextProps.block.getKey()) && nextProps.forceSelection;
    return isContainerNode || blockHasChanged;
  };
  _proto.componentDidMount = function componentDidMount() {
    var selection = this.props.selection;
    var endKey = selection.getEndKey();
    if (!selection.getHasFocus() || endKey !== this.props.block.getKey()) {
      return;
    }
    var blockNode = this.wrapperRef.current;
    if (!blockNode) {
      return;
    }
    var scrollParent = Style$3.getScrollParent(blockNode);
    var scrollPosition = getScrollPosition$3(scrollParent);
    var scrollDelta;
    if (scrollParent === window) {
      var nodePosition = getElementPosition$1(blockNode);
      var nodeBottom = nodePosition.y + nodePosition.height;
      var viewportHeight = getViewportDimensions$1().height;
      scrollDelta = nodeBottom - viewportHeight;
      if (scrollDelta > 0) {
        window.scrollTo(scrollPosition.x, scrollPosition.y + scrollDelta + SCROLL_BUFFER$1);
      }
    } else {
      !isHTMLElement$3(blockNode) ? invariant$b(false) : void 0;
      var htmlBlockNode = blockNode;
      var blockBottom = htmlBlockNode.offsetHeight + htmlBlockNode.offsetTop;
      var scrollBottom = scrollParent.offsetHeight + scrollPosition.y;
      scrollDelta = blockBottom - scrollBottom;
      if (scrollDelta > 0) {
        Scroll$2.setTop(scrollParent, Scroll$2.getTop(scrollParent) + scrollDelta + SCROLL_BUFFER$1);
      }
    }
  };
  _proto.render = function render3() {
    var _this2 = this;
    var _this$props2 = this.props, block = _this$props2.block, blockRenderMap = _this$props2.blockRenderMap, blockRendererFn2 = _this$props2.blockRendererFn, blockStyleFn2 = _this$props2.blockStyleFn, contentState = _this$props2.contentState, decorator = _this$props2.decorator, editorKey = _this$props2.editorKey, editorState = _this$props2.editorState, customStyleFn = _this$props2.customStyleFn, customStyleMap = _this$props2.customStyleMap, direction = _this$props2.direction, forceSelection = _this$props2.forceSelection, selection = _this$props2.selection, tree = _this$props2.tree;
    var children = null;
    if (block.children.size) {
      children = block.children.reduce(function(acc, key) {
        var offsetKey2 = DraftOffsetKey$4.encode(key, 0, 0);
        var child = contentState.getBlockForKey(key);
        var customConfig2 = getCustomRenderConfig(child, blockRendererFn2);
        var Component3 = customConfig2.CustomComponent || DraftEditorBlockNode2;
        var _getDraftRenderConfig = getDraftRenderConfig(child, blockRenderMap), Element2 = _getDraftRenderConfig.Element, wrapperTemplate = _getDraftRenderConfig.wrapperTemplate;
        var elementProps2 = getElementPropsConfig(child, editorKey, offsetKey2, blockStyleFn2, customConfig2, null);
        var childProps = _objectSpread$7({}, _this2.props, {
          tree: editorState.getBlockTree(key),
          blockProps: customConfig2.customProps,
          offsetKey: offsetKey2,
          block: child
        });
        acc.push(React$6.createElement(Element2, elementProps2, React$6.createElement(Component3, childProps)));
        if (!wrapperTemplate || shouldNotAddWrapperElement(child, contentState)) {
          return acc;
        }
        applyWrapperElementToSiblings(wrapperTemplate, Element2, acc);
        return acc;
      }, []);
    }
    var blockKey = block.getKey();
    var offsetKey = DraftOffsetKey$4.encode(blockKey, 0, 0);
    var customConfig = getCustomRenderConfig(block, blockRendererFn2);
    var Component2 = customConfig.CustomComponent;
    var blockNode = Component2 != null ? React$6.createElement(Component2, _extends$4({}, this.props, {
      tree: editorState.getBlockTree(blockKey),
      blockProps: customConfig.customProps,
      offsetKey,
      block
    })) : React$6.createElement(DraftEditorNode, {
      block,
      children,
      contentState,
      customStyleFn,
      customStyleMap,
      decorator,
      direction,
      forceSelection,
      hasSelection: isBlockOnSelectionEdge$1(selection, blockKey),
      selection,
      tree
    });
    if (block.getParentKey()) {
      return blockNode;
    }
    var _getDraftRenderConfig2 = getDraftRenderConfig(block, blockRenderMap), Element = _getDraftRenderConfig2.Element;
    var elementProps = getElementPropsConfig(block, editorKey, offsetKey, blockStyleFn2, customConfig, this.wrapperRef);
    return React$6.createElement(Element, elementProps, blockNode);
  };
  return DraftEditorBlockNode2;
}(React$6.Component);
var DraftEditorBlockNode_react = DraftEditorBlockNode$1;
var _assign$3 = objectAssign;
function _extends$3() {
  _extends$3 = _assign$3 || function(target) {
    for (var i = 1; i < arguments.length; i++) {
      var source = arguments[i];
      for (var key in source) {
        if (Object.prototype.hasOwnProperty.call(source, key)) {
          target[key] = source[key];
        }
      }
    }
    return target;
  };
  return _extends$3.apply(this, arguments);
}
function _inheritsLoose$4(subClass, superClass) {
  subClass.prototype = Object.create(superClass.prototype);
  subClass.prototype.constructor = subClass;
  subClass.__proto__ = superClass;
}
var DraftEditorBlockNode = DraftEditorBlockNode_react;
var DraftOffsetKey$3 = DraftOffsetKey_1;
var React$5 = React__default;
var nullthrows$8 = nullthrows_1;
var DraftEditorContentsExperimental = /* @__PURE__ */ function(_React$Component) {
  _inheritsLoose$4(DraftEditorContentsExperimental2, _React$Component);
  function DraftEditorContentsExperimental2() {
    return _React$Component.apply(this, arguments) || this;
  }
  var _proto = DraftEditorContentsExperimental2.prototype;
  _proto.shouldComponentUpdate = function shouldComponentUpdate(nextProps) {
    var prevEditorState = this.props.editorState;
    var nextEditorState = nextProps.editorState;
    var prevDirectionMap = prevEditorState.getDirectionMap();
    var nextDirectionMap = nextEditorState.getDirectionMap();
    if (prevDirectionMap !== nextDirectionMap) {
      return true;
    }
    var didHaveFocus = prevEditorState.getSelection().getHasFocus();
    var nowHasFocus = nextEditorState.getSelection().getHasFocus();
    if (didHaveFocus !== nowHasFocus) {
      return true;
    }
    var nextNativeContent = nextEditorState.getNativelyRenderedContent();
    var wasComposing = prevEditorState.isInCompositionMode();
    var nowComposing = nextEditorState.isInCompositionMode();
    if (prevEditorState === nextEditorState || nextNativeContent !== null && nextEditorState.getCurrentContent() === nextNativeContent || wasComposing && nowComposing) {
      return false;
    }
    var prevContent = prevEditorState.getCurrentContent();
    var nextContent = nextEditorState.getCurrentContent();
    var prevDecorator = prevEditorState.getDecorator();
    var nextDecorator = nextEditorState.getDecorator();
    return wasComposing !== nowComposing || prevContent !== nextContent || prevDecorator !== nextDecorator || nextEditorState.mustForceSelection();
  };
  _proto.render = function render3() {
    var _this$props = this.props, blockRenderMap = _this$props.blockRenderMap, blockRendererFn2 = _this$props.blockRendererFn, blockStyleFn2 = _this$props.blockStyleFn, customStyleMap = _this$props.customStyleMap, customStyleFn = _this$props.customStyleFn, editorState = _this$props.editorState, editorKey = _this$props.editorKey, textDirectionality = _this$props.textDirectionality;
    var content = editorState.getCurrentContent();
    var selection = editorState.getSelection();
    var forceSelection = editorState.mustForceSelection();
    var decorator = editorState.getDecorator();
    var directionMap = nullthrows$8(editorState.getDirectionMap());
    var blocksAsArray = content.getBlocksAsArray();
    var rootBlock = blocksAsArray[0];
    var processedBlocks = [];
    var nodeBlock = rootBlock;
    while (nodeBlock) {
      var blockKey = nodeBlock.getKey();
      var blockProps = {
        blockRenderMap,
        blockRendererFn: blockRendererFn2,
        blockStyleFn: blockStyleFn2,
        contentState: content,
        customStyleFn,
        customStyleMap,
        decorator,
        editorKey,
        editorState,
        forceSelection,
        selection,
        block: nodeBlock,
        direction: textDirectionality ? textDirectionality : directionMap.get(blockKey),
        tree: editorState.getBlockTree(blockKey)
      };
      var configForType = blockRenderMap.get(nodeBlock.getType()) || blockRenderMap.get("unstyled");
      var wrapperTemplate = configForType.wrapper;
      processedBlocks.push({
        block: React$5.createElement(DraftEditorBlockNode, _extends$3({
          key: blockKey
        }, blockProps)),
        wrapperTemplate,
        key: blockKey,
        offsetKey: DraftOffsetKey$3.encode(blockKey, 0, 0)
      });
      var nextBlockKey = nodeBlock.getNextSiblingKey();
      nodeBlock = nextBlockKey ? content.getBlockForKey(nextBlockKey) : null;
    }
    var outputBlocks = [];
    for (var ii2 = 0; ii2 < processedBlocks.length; ) {
      var info = processedBlocks[ii2];
      if (info.wrapperTemplate) {
        var blocks = [];
        do {
          blocks.push(processedBlocks[ii2].block);
          ii2++;
        } while (ii2 < processedBlocks.length && processedBlocks[ii2].wrapperTemplate === info.wrapperTemplate);
        var wrapperElement = React$5.cloneElement(info.wrapperTemplate, {
          key: info.key + "-wrap",
          "data-offset-key": info.offsetKey
        }, blocks);
        outputBlocks.push(wrapperElement);
      } else {
        outputBlocks.push(info.block);
        ii2++;
      }
    }
    return React$5.createElement("div", {
      "data-contents": "true"
    }, outputBlocks);
  };
  return DraftEditorContentsExperimental2;
}(React$5.Component);
var DraftEditorContentsExperimental_react = DraftEditorContentsExperimental;
var _assign$2 = objectAssign;
function _extends$2() {
  _extends$2 = _assign$2 || function(target) {
    for (var i = 1; i < arguments.length; i++) {
      var source = arguments[i];
      for (var key in source) {
        if (Object.prototype.hasOwnProperty.call(source, key)) {
          target[key] = source[key];
        }
      }
    }
    return target;
  };
  return _extends$2.apply(this, arguments);
}
function _assertThisInitialized$1(self2) {
  if (self2 === void 0) {
    throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
  }
  return self2;
}
function _inheritsLoose$3(subClass, superClass) {
  subClass.prototype = Object.create(superClass.prototype);
  subClass.prototype.constructor = subClass;
  subClass.__proto__ = superClass;
}
function _defineProperty$8(obj, key, value) {
  if (key in obj) {
    Object.defineProperty(obj, key, { value, enumerable: true, configurable: true, writable: true });
  } else {
    obj[key] = value;
  }
  return obj;
}
var DraftEditorLeaf = DraftEditorLeaf_react;
var DraftOffsetKey$2 = DraftOffsetKey_1;
var React$4 = React__default;
var Scroll$1 = Scroll_1;
var Style$2 = Style_1;
var UnicodeBidi = UnicodeBidi_1;
var UnicodeBidiDirection = UnicodeBidiDirection_1;
var cx$4 = cx_1;
var getElementPosition = getElementPosition_1;
var getScrollPosition$2 = getScrollPosition_1;
var getViewportDimensions = getViewportDimensions_1;
var invariant$a = invariant_1;
var isHTMLElement$2 = isHTMLElement_1;
var nullthrows$7 = nullthrows_1;
var SCROLL_BUFFER = 10;
var isBlockOnSelectionEdge2 = function isBlockOnSelectionEdge3(selection, key) {
  return selection.getAnchorKey() === key || selection.getFocusKey() === key;
};
var DraftEditorBlock$2 = /* @__PURE__ */ function(_React$Component) {
  _inheritsLoose$3(DraftEditorBlock2, _React$Component);
  function DraftEditorBlock2() {
    var _this;
    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }
    _this = _React$Component.call.apply(_React$Component, [this].concat(args)) || this;
    _defineProperty$8(_assertThisInitialized$1(_this), "_node", void 0);
    return _this;
  }
  var _proto = DraftEditorBlock2.prototype;
  _proto.shouldComponentUpdate = function shouldComponentUpdate(nextProps) {
    return this.props.block !== nextProps.block || this.props.tree !== nextProps.tree || this.props.direction !== nextProps.direction || isBlockOnSelectionEdge2(nextProps.selection, nextProps.block.getKey()) && nextProps.forceSelection;
  };
  _proto.componentDidMount = function componentDidMount() {
    if (this.props.preventScroll) {
      return;
    }
    var selection = this.props.selection;
    var endKey = selection.getEndKey();
    if (!selection.getHasFocus() || endKey !== this.props.block.getKey()) {
      return;
    }
    var blockNode = this._node;
    if (blockNode == null) {
      return;
    }
    var scrollParent = Style$2.getScrollParent(blockNode);
    var scrollPosition = getScrollPosition$2(scrollParent);
    var scrollDelta;
    if (scrollParent === window) {
      var nodePosition = getElementPosition(blockNode);
      var nodeBottom = nodePosition.y + nodePosition.height;
      var viewportHeight = getViewportDimensions().height;
      scrollDelta = nodeBottom - viewportHeight;
      if (scrollDelta > 0) {
        window.scrollTo(scrollPosition.x, scrollPosition.y + scrollDelta + SCROLL_BUFFER);
      }
    } else {
      !isHTMLElement$2(blockNode) ? invariant$a(false) : void 0;
      var blockBottom = blockNode.offsetHeight + blockNode.offsetTop;
      var pOffset = scrollParent.offsetTop + scrollParent.offsetHeight;
      var scrollBottom = pOffset + scrollPosition.y;
      scrollDelta = blockBottom - scrollBottom;
      if (scrollDelta > 0) {
        Scroll$1.setTop(scrollParent, Scroll$1.getTop(scrollParent) + scrollDelta + SCROLL_BUFFER);
      }
    }
  };
  _proto._renderChildren = function _renderChildren() {
    var _this2 = this;
    var block = this.props.block;
    var blockKey = block.getKey();
    var text = block.getText();
    var lastLeafSet = this.props.tree.size - 1;
    var hasSelection = isBlockOnSelectionEdge2(this.props.selection, blockKey);
    return this.props.tree.map(function(leafSet, ii2) {
      var leavesForLeafSet = leafSet.get("leaves");
      if (leavesForLeafSet.size === 0) {
        return null;
      }
      var lastLeaf = leavesForLeafSet.size - 1;
      var leaves = leavesForLeafSet.map(function(leaf, jj2) {
        var offsetKey = DraftOffsetKey$2.encode(blockKey, ii2, jj2);
        var start2 = leaf.get("start");
        var end2 = leaf.get("end");
        return React$4.createElement(DraftEditorLeaf, {
          key: offsetKey,
          offsetKey,
          block,
          start: start2,
          selection: hasSelection ? _this2.props.selection : null,
          forceSelection: _this2.props.forceSelection,
          text: text.slice(start2, end2),
          styleSet: block.getInlineStyleAt(start2),
          customStyleMap: _this2.props.customStyleMap,
          customStyleFn: _this2.props.customStyleFn,
          isLast: ii2 === lastLeafSet && jj2 === lastLeaf
        });
      }).toArray();
      var decoratorKey = leafSet.get("decoratorKey");
      if (decoratorKey == null) {
        return leaves;
      }
      if (!_this2.props.decorator) {
        return leaves;
      }
      var decorator = nullthrows$7(_this2.props.decorator);
      var DecoratorComponent = decorator.getComponentForKey(decoratorKey);
      if (!DecoratorComponent) {
        return leaves;
      }
      var decoratorProps = decorator.getPropsForKey(decoratorKey);
      var decoratorOffsetKey = DraftOffsetKey$2.encode(blockKey, ii2, 0);
      var start = leavesForLeafSet.first().get("start");
      var end = leavesForLeafSet.last().get("end");
      var decoratedText = text.slice(start, end);
      var entityKey = block.getEntityAt(leafSet.get("start"));
      var dir = UnicodeBidiDirection.getHTMLDirIfDifferent(UnicodeBidi.getDirection(decoratedText), _this2.props.direction);
      var commonProps = {
        contentState: _this2.props.contentState,
        decoratedText,
        dir,
        start,
        end,
        blockKey,
        entityKey,
        offsetKey: decoratorOffsetKey
      };
      return React$4.createElement(DecoratorComponent, _extends$2({}, decoratorProps, commonProps, {
        key: decoratorOffsetKey
      }), leaves);
    }).toArray();
  };
  _proto.render = function render3() {
    var _this3 = this;
    var _this$props = this.props, direction = _this$props.direction, offsetKey = _this$props.offsetKey;
    var className = cx$4({
      "public/DraftStyleDefault/block": true,
      "public/DraftStyleDefault/ltr": direction === "LTR",
      "public/DraftStyleDefault/rtl": direction === "RTL"
    });
    return React$4.createElement("div", {
      "data-offset-key": offsetKey,
      className,
      ref: function ref(_ref) {
        return _this3._node = _ref;
      }
    }, this._renderChildren());
  };
  return DraftEditorBlock2;
}(React$4.Component);
var DraftEditorBlock_react = DraftEditorBlock$2;
function joinClasses$1(className) {
  var newClassName = className || "";
  var argLength = arguments.length;
  if (argLength > 1) {
    for (var index = 1; index < argLength; index++) {
      var nextClass = arguments[index];
      if (nextClass) {
        newClassName = (newClassName ? newClassName + " " : "") + nextClass;
      }
    }
  }
  return newClassName;
}
var joinClasses_1 = joinClasses$1;
var _assign$1 = objectAssign;
function _extends$1() {
  _extends$1 = _assign$1 || function(target) {
    for (var i = 1; i < arguments.length; i++) {
      var source = arguments[i];
      for (var key in source) {
        if (Object.prototype.hasOwnProperty.call(source, key)) {
          target[key] = source[key];
        }
      }
    }
    return target;
  };
  return _extends$1.apply(this, arguments);
}
function _objectSpread$6(target) {
  for (var i = 1; i < arguments.length; i++) {
    var source = arguments[i] != null ? arguments[i] : {};
    var ownKeys = Object.keys(source);
    if (typeof Object.getOwnPropertySymbols === "function") {
      ownKeys = ownKeys.concat(Object.getOwnPropertySymbols(source).filter(function(sym) {
        return Object.getOwnPropertyDescriptor(source, sym).enumerable;
      }));
    }
    ownKeys.forEach(function(key) {
      _defineProperty$7(target, key, source[key]);
    });
  }
  return target;
}
function _defineProperty$7(obj, key, value) {
  if (key in obj) {
    Object.defineProperty(obj, key, { value, enumerable: true, configurable: true, writable: true });
  } else {
    obj[key] = value;
  }
  return obj;
}
function _inheritsLoose$2(subClass, superClass) {
  subClass.prototype = Object.create(superClass.prototype);
  subClass.prototype.constructor = subClass;
  subClass.__proto__ = superClass;
}
var DraftEditorBlock$1 = DraftEditorBlock_react;
var DraftOffsetKey$1 = DraftOffsetKey_1;
var React$3 = React__default;
var cx$3 = cx_1;
var joinClasses = joinClasses_1;
var nullthrows$6 = nullthrows_1;
var getListItemClasses = function getListItemClasses2(type, depth, shouldResetCount, direction) {
  return cx$3({
    "public/DraftStyleDefault/unorderedListItem": type === "unordered-list-item",
    "public/DraftStyleDefault/orderedListItem": type === "ordered-list-item",
    "public/DraftStyleDefault/reset": shouldResetCount,
    "public/DraftStyleDefault/depth0": depth === 0,
    "public/DraftStyleDefault/depth1": depth === 1,
    "public/DraftStyleDefault/depth2": depth === 2,
    "public/DraftStyleDefault/depth3": depth === 3,
    "public/DraftStyleDefault/depth4": depth >= 4,
    "public/DraftStyleDefault/listLTR": direction === "LTR",
    "public/DraftStyleDefault/listRTL": direction === "RTL"
  });
};
var DraftEditorContents$1 = /* @__PURE__ */ function(_React$Component) {
  _inheritsLoose$2(DraftEditorContents2, _React$Component);
  function DraftEditorContents2() {
    return _React$Component.apply(this, arguments) || this;
  }
  var _proto = DraftEditorContents2.prototype;
  _proto.shouldComponentUpdate = function shouldComponentUpdate(nextProps) {
    var prevEditorState = this.props.editorState;
    var nextEditorState = nextProps.editorState;
    var prevDirectionMap = prevEditorState.getDirectionMap();
    var nextDirectionMap = nextEditorState.getDirectionMap();
    if (prevDirectionMap !== nextDirectionMap) {
      return true;
    }
    var didHaveFocus = prevEditorState.getSelection().getHasFocus();
    var nowHasFocus = nextEditorState.getSelection().getHasFocus();
    if (didHaveFocus !== nowHasFocus) {
      return true;
    }
    var nextNativeContent = nextEditorState.getNativelyRenderedContent();
    var wasComposing = prevEditorState.isInCompositionMode();
    var nowComposing = nextEditorState.isInCompositionMode();
    if (prevEditorState === nextEditorState || nextNativeContent !== null && nextEditorState.getCurrentContent() === nextNativeContent || wasComposing && nowComposing) {
      return false;
    }
    var prevContent = prevEditorState.getCurrentContent();
    var nextContent = nextEditorState.getCurrentContent();
    var prevDecorator = prevEditorState.getDecorator();
    var nextDecorator = nextEditorState.getDecorator();
    return wasComposing !== nowComposing || prevContent !== nextContent || prevDecorator !== nextDecorator || nextEditorState.mustForceSelection();
  };
  _proto.render = function render3() {
    var _this$props = this.props, blockRenderMap = _this$props.blockRenderMap, blockRendererFn2 = _this$props.blockRendererFn, blockStyleFn2 = _this$props.blockStyleFn, customStyleMap = _this$props.customStyleMap, customStyleFn = _this$props.customStyleFn, editorState = _this$props.editorState, editorKey = _this$props.editorKey, preventScroll = _this$props.preventScroll, textDirectionality = _this$props.textDirectionality;
    var content = editorState.getCurrentContent();
    var selection = editorState.getSelection();
    var forceSelection = editorState.mustForceSelection();
    var decorator = editorState.getDecorator();
    var directionMap = nullthrows$6(editorState.getDirectionMap());
    var blocksAsArray = content.getBlocksAsArray();
    var processedBlocks = [];
    var currentDepth = null;
    var lastWrapperTemplate = null;
    for (var ii2 = 0; ii2 < blocksAsArray.length; ii2++) {
      var _block = blocksAsArray[ii2];
      var key = _block.getKey();
      var blockType = _block.getType();
      var customRenderer = blockRendererFn2(_block);
      var CustomComponent = void 0, customProps = void 0, customEditable = void 0;
      if (customRenderer) {
        CustomComponent = customRenderer.component;
        customProps = customRenderer.props;
        customEditable = customRenderer.editable;
      }
      var direction = textDirectionality ? textDirectionality : directionMap.get(key);
      var offsetKey = DraftOffsetKey$1.encode(key, 0, 0);
      var componentProps = {
        contentState: content,
        block: _block,
        blockProps: customProps,
        blockStyleFn: blockStyleFn2,
        customStyleMap,
        customStyleFn,
        decorator,
        direction,
        forceSelection,
        offsetKey,
        preventScroll,
        selection,
        tree: editorState.getBlockTree(key)
      };
      var configForType = blockRenderMap.get(blockType) || blockRenderMap.get("unstyled");
      var wrapperTemplate = configForType.wrapper;
      var Element = configForType.element || blockRenderMap.get("unstyled").element;
      var depth = _block.getDepth();
      var _className = "";
      if (blockStyleFn2) {
        _className = blockStyleFn2(_block);
      }
      if (Element === "li") {
        var shouldResetCount = lastWrapperTemplate !== wrapperTemplate || currentDepth === null || depth > currentDepth;
        _className = joinClasses(_className, getListItemClasses(blockType, depth, shouldResetCount, direction));
      }
      var Component2 = CustomComponent || DraftEditorBlock$1;
      var childProps = {
        className: _className,
        "data-block": true,
        "data-editor": editorKey,
        "data-offset-key": offsetKey,
        key
      };
      if (customEditable !== void 0) {
        childProps = _objectSpread$6({}, childProps, {
          contentEditable: customEditable,
          suppressContentEditableWarning: true
        });
      }
      var child = React$3.createElement(Element, childProps, React$3.createElement(Component2, _extends$1({}, componentProps, {
        key
      })));
      processedBlocks.push({
        block: child,
        wrapperTemplate,
        key,
        offsetKey
      });
      if (wrapperTemplate) {
        currentDepth = _block.getDepth();
      } else {
        currentDepth = null;
      }
      lastWrapperTemplate = wrapperTemplate;
    }
    var outputBlocks = [];
    for (var _ii = 0; _ii < processedBlocks.length; ) {
      var info = processedBlocks[_ii];
      if (info.wrapperTemplate) {
        var blocks = [];
        do {
          blocks.push(processedBlocks[_ii].block);
          _ii++;
        } while (_ii < processedBlocks.length && processedBlocks[_ii].wrapperTemplate === info.wrapperTemplate);
        var wrapperElement = React$3.cloneElement(info.wrapperTemplate, {
          key: info.key + "-wrap",
          "data-offset-key": info.offsetKey
        }, blocks);
        outputBlocks.push(wrapperElement);
      } else {
        outputBlocks.push(info.block);
        _ii++;
      }
    }
    return React$3.createElement("div", {
      "data-contents": "true"
    }, outputBlocks);
  };
  return DraftEditorContents2;
}(React$3.Component);
var DraftEditorContentsCore_react = DraftEditorContents$1;
var gkx$5 = gkx$8;
var experimentalTreeDataSupport$4 = gkx$5("draft_tree_data_support");
var DraftEditorContents_react = experimentalTreeDataSupport$4 ? DraftEditorContentsExperimental_react : DraftEditorContentsCore_react;
var PhotosMimeType$1 = {
  isImage: function isImage(mimeString) {
    return getParts(mimeString)[0] === "image";
  },
  isJpeg: function isJpeg(mimeString) {
    var parts = getParts(mimeString);
    return PhotosMimeType$1.isImage(mimeString) && (parts[1] === "jpeg" || parts[1] === "pjpeg");
  }
};
function getParts(mimeString) {
  return mimeString.split("/");
}
var PhotosMimeType_1 = PhotosMimeType$1;
var invariant$9 = invariant_1;
function toArray(obj) {
  var length = obj.length;
  !(!Array.isArray(obj) && (typeof obj === "object" || typeof obj === "function")) ? invariant$9(false) : void 0;
  !(typeof length === "number") ? invariant$9(false) : void 0;
  !(length === 0 || length - 1 in obj) ? invariant$9(false) : void 0;
  !(typeof obj.callee !== "function") ? invariant$9(false) : void 0;
  if (obj.hasOwnProperty) {
    try {
      return Array.prototype.slice.call(obj);
    } catch (e) {
    }
  }
  var ret = Array(length);
  for (var ii2 = 0; ii2 < length; ii2++) {
    ret[ii2] = obj[ii2];
  }
  return ret;
}
function hasArrayNature(obj) {
  return !!obj && (typeof obj == "object" || typeof obj == "function") && "length" in obj && !("setInterval" in obj) && typeof obj.nodeType != "number" && (Array.isArray(obj) || "callee" in obj || "item" in obj);
}
function createArrayFromMixed$1(obj) {
  if (!hasArrayNature(obj)) {
    return [obj];
  } else if (Array.isArray(obj)) {
    return obj.slice();
  } else {
    return toArray(obj);
  }
}
var createArrayFromMixed_1 = createArrayFromMixed$1;
function makeEmptyFunction(arg) {
  return function() {
    return arg;
  };
}
var emptyFunction$1 = function emptyFunction() {
};
emptyFunction$1.thatReturns = makeEmptyFunction;
emptyFunction$1.thatReturnsFalse = makeEmptyFunction(false);
emptyFunction$1.thatReturnsTrue = makeEmptyFunction(true);
emptyFunction$1.thatReturnsNull = makeEmptyFunction(null);
emptyFunction$1.thatReturnsThis = function() {
  return this;
};
emptyFunction$1.thatReturnsArgument = function(arg) {
  return arg;
};
var emptyFunction_1 = emptyFunction$1;
var PhotosMimeType = PhotosMimeType_1;
var createArrayFromMixed = createArrayFromMixed_1;
var emptyFunction2 = emptyFunction_1;
var CR_LF_REGEX = new RegExp("\r\n", "g");
var LF_ONLY = "\n";
var RICH_TEXT_TYPES = {
  "text/rtf": 1,
  "text/html": 1
};
function getFileFromDataTransfer(item) {
  if (item.kind == "file") {
    return item.getAsFile();
  }
}
var DataTransfer$2 = /* @__PURE__ */ function() {
  function DataTransfer2(data) {
    this.data = data;
    this.types = data.types ? createArrayFromMixed(data.types) : [];
  }
  var _proto = DataTransfer2.prototype;
  _proto.isRichText = function isRichText() {
    if (this.getHTML() && this.getText()) {
      return true;
    }
    if (this.isImage()) {
      return false;
    }
    return this.types.some(function(type) {
      return RICH_TEXT_TYPES[type];
    });
  };
  _proto.getText = function getText() {
    var text;
    if (this.data.getData) {
      if (!this.types.length) {
        text = this.data.getData("Text");
      } else if (this.types.indexOf("text/plain") != -1) {
        text = this.data.getData("text/plain");
      }
    }
    return text ? text.replace(CR_LF_REGEX, LF_ONLY) : null;
  };
  _proto.getHTML = function getHTML() {
    if (this.data.getData) {
      if (!this.types.length) {
        return this.data.getData("Text");
      } else if (this.types.indexOf("text/html") != -1) {
        return this.data.getData("text/html");
      }
    }
  };
  _proto.isLink = function isLink() {
    return this.types.some(function(type) {
      return type.indexOf("Url") != -1 || type.indexOf("text/uri-list") != -1 || type.indexOf("text/x-moz-url");
    });
  };
  _proto.getLink = function getLink() {
    if (this.data.getData) {
      if (this.types.indexOf("text/x-moz-url") != -1) {
        var url = this.data.getData("text/x-moz-url").split("\n");
        return url[0];
      }
      return this.types.indexOf("text/uri-list") != -1 ? this.data.getData("text/uri-list") : this.data.getData("url");
    }
    return null;
  };
  _proto.isImage = function isImage2() {
    var isImage3 = this.types.some(function(type2) {
      return type2.indexOf("application/x-moz-file") != -1;
    });
    if (isImage3) {
      return true;
    }
    var items = this.getFiles();
    for (var i = 0; i < items.length; i++) {
      var type = items[i].type;
      if (!PhotosMimeType.isImage(type)) {
        return false;
      }
    }
    return true;
  };
  _proto.getCount = function getCount() {
    if (this.data.hasOwnProperty("items")) {
      return this.data.items.length;
    } else if (this.data.hasOwnProperty("mozItemCount")) {
      return this.data.mozItemCount;
    } else if (this.data.files) {
      return this.data.files.length;
    }
    return null;
  };
  _proto.getFiles = function getFiles() {
    if (this.data.items) {
      return Array.prototype.slice.call(this.data.items).map(getFileFromDataTransfer).filter(emptyFunction2.thatReturnsArgument);
    } else if (this.data.files) {
      return Array.prototype.slice.call(this.data.files);
    } else {
      return [];
    }
  };
  _proto.hasFiles = function hasFiles() {
    return this.getFiles().length > 0;
  };
  return DataTransfer2;
}();
var DataTransfer_1 = DataTransfer$2;
var invariant$8 = invariant_1;
var TEXT_CLIPPING_REGEX = /\.textClipping$/;
var TEXT_TYPES = {
  "text/plain": true,
  "text/html": true,
  "text/rtf": true
};
var TEXT_SIZE_UPPER_BOUND = 5e3;
function getTextContentFromFiles$2(files, callback) {
  var readCount = 0;
  var results2 = [];
  files.forEach(function(file) {
    readFile(file, function(text) {
      readCount++;
      text && results2.push(text.slice(0, TEXT_SIZE_UPPER_BOUND));
      if (readCount == files.length) {
        callback(results2.join("\r"));
      }
    });
  });
}
function readFile(file, callback) {
  if (!commonjsGlobal.FileReader || file.type && !(file.type in TEXT_TYPES)) {
    callback("");
    return;
  }
  if (file.type === "") {
    var _contents = "";
    if (TEXT_CLIPPING_REGEX.test(file.name)) {
      _contents = file.name.replace(TEXT_CLIPPING_REGEX, "");
    }
    callback(_contents);
    return;
  }
  var reader = new FileReader();
  reader.onload = function() {
    var result = reader.result;
    !(typeof result === "string") ? invariant$8(false) : void 0;
    callback(result);
  };
  reader.onerror = function() {
    callback("");
  };
  reader.readAsText(file);
}
var getTextContentFromFiles_1 = getTextContentFromFiles$2;
function isEventHandled$4(value) {
  return value === "handled" || value === true;
}
var isEventHandled_1 = isEventHandled$4;
var DataTransfer$1 = DataTransfer_1;
var DraftModifier$b = DraftModifier_1;
var EditorState$m = EditorState_1;
var findAncestorOffsetKey$1 = findAncestorOffsetKey_1;
var getCorrectDocumentFromNode$1 = getCorrectDocumentFromNode_1;
var getTextContentFromFiles$1 = getTextContentFromFiles_1;
var getUpdatedSelectionState = getUpdatedSelectionState_1;
var getWindowForNode = getWindowForNode_1;
var isEventHandled$3 = isEventHandled_1;
var nullthrows$5 = nullthrows_1;
function getSelectionForEvent(event, editorState) {
  var node = null;
  var offset = null;
  var eventTargetDocument = getCorrectDocumentFromNode$1(event.currentTarget);
  if (typeof eventTargetDocument.caretRangeFromPoint === "function") {
    var dropRange = eventTargetDocument.caretRangeFromPoint(event.x, event.y);
    node = dropRange.startContainer;
    offset = dropRange.startOffset;
  } else if (event.rangeParent) {
    node = event.rangeParent;
    offset = event.rangeOffset;
  } else {
    return null;
  }
  node = nullthrows$5(node);
  offset = nullthrows$5(offset);
  var offsetKey = nullthrows$5(findAncestorOffsetKey$1(node));
  return getUpdatedSelectionState(editorState, offsetKey, offset, offsetKey, offset);
}
var DraftEditorDragHandler$1 = {
  onDragEnd: function onDragEnd(editor) {
    editor.exitCurrentMode();
    endDrag(editor);
  },
  onDrop: function onDrop(editor, e) {
    var data = new DataTransfer$1(e.nativeEvent.dataTransfer);
    var editorState = editor._latestEditorState;
    var dropSelection = getSelectionForEvent(e.nativeEvent, editorState);
    e.preventDefault();
    editor._dragCount = 0;
    editor.exitCurrentMode();
    if (dropSelection == null) {
      return;
    }
    var files = data.getFiles();
    if (files.length > 0) {
      if (editor.props.handleDroppedFiles && isEventHandled$3(editor.props.handleDroppedFiles(dropSelection, files))) {
        return;
      }
      getTextContentFromFiles$1(files, function(fileText) {
        fileText && editor.update(insertTextAtSelection(editorState, dropSelection, fileText));
      });
      return;
    }
    var dragType = editor._internalDrag ? "internal" : "external";
    if (editor.props.handleDrop && isEventHandled$3(editor.props.handleDrop(dropSelection, data, dragType)))
      ;
    else if (editor._internalDrag) {
      editor.update(moveText2(editorState, dropSelection));
    } else {
      editor.update(insertTextAtSelection(editorState, dropSelection, data.getText()));
    }
    endDrag(editor);
  }
};
function endDrag(editor) {
  editor._internalDrag = false;
  var editorNode = editor.editorContainer;
  if (editorNode) {
    var mouseUpEvent = new MouseEvent("mouseup", {
      view: getWindowForNode(editorNode),
      bubbles: true,
      cancelable: true
    });
    editorNode.dispatchEvent(mouseUpEvent);
  }
}
function moveText2(editorState, targetSelection) {
  var newContentState = DraftModifier$b.moveText(editorState.getCurrentContent(), editorState.getSelection(), targetSelection);
  return EditorState$m.push(editorState, newContentState, "insert-fragment");
}
function insertTextAtSelection(editorState, selection, text) {
  var newContentState = DraftModifier$b.insertText(editorState.getCurrentContent(), selection, text, editorState.getCurrentInlineStyle());
  return EditorState$m.push(editorState, newContentState, "insert-fragment");
}
var DraftEditorDragHandler_1 = DraftEditorDragHandler$1;
function isSelectionAtLeafStart$1(editorState) {
  var selection = editorState.getSelection();
  var anchorKey = selection.getAnchorKey();
  var blockTree = editorState.getBlockTree(anchorKey);
  var offset = selection.getStartOffset();
  var isAtStart = false;
  blockTree.some(function(leafSet) {
    if (offset === leafSet.get("start")) {
      isAtStart = true;
      return true;
    }
    if (offset < leafSet.get("end")) {
      return leafSet.get("leaves").some(function(leaf) {
        var leafStart = leaf.get("start");
        if (offset === leafStart) {
          isAtStart = true;
          return true;
        }
        return false;
      });
    }
    return false;
  });
  return isAtStart;
}
var isSelectionAtLeafStart_1 = isSelectionAtLeafStart$1;
(function(global2, undefined$1) {
  if (global2.setImmediate) {
    return;
  }
  var nextHandle = 1;
  var tasksByHandle = {};
  var currentlyRunningATask = false;
  var doc = global2.document;
  var registerImmediate;
  function setImmediate2(callback) {
    if (typeof callback !== "function") {
      callback = new Function("" + callback);
    }
    var args = new Array(arguments.length - 1);
    for (var i = 0; i < args.length; i++) {
      args[i] = arguments[i + 1];
    }
    var task = { callback, args };
    tasksByHandle[nextHandle] = task;
    registerImmediate(nextHandle);
    return nextHandle++;
  }
  function clearImmediate(handle) {
    delete tasksByHandle[handle];
  }
  function run(task) {
    var callback = task.callback;
    var args = task.args;
    switch (args.length) {
      case 0:
        callback();
        break;
      case 1:
        callback(args[0]);
        break;
      case 2:
        callback(args[0], args[1]);
        break;
      case 3:
        callback(args[0], args[1], args[2]);
        break;
      default:
        callback.apply(undefined$1, args);
        break;
    }
  }
  function runIfPresent(handle) {
    if (currentlyRunningATask) {
      setTimeout(runIfPresent, 0, handle);
    } else {
      var task = tasksByHandle[handle];
      if (task) {
        currentlyRunningATask = true;
        try {
          run(task);
        } finally {
          clearImmediate(handle);
          currentlyRunningATask = false;
        }
      }
    }
  }
  function installNextTickImplementation() {
    registerImmediate = function(handle) {
      process.nextTick(function() {
        runIfPresent(handle);
      });
    };
  }
  function canUsePostMessage() {
    if (global2.postMessage && !global2.importScripts) {
      var postMessageIsAsynchronous = true;
      var oldOnMessage = global2.onmessage;
      global2.onmessage = function() {
        postMessageIsAsynchronous = false;
      };
      global2.postMessage("", "*");
      global2.onmessage = oldOnMessage;
      return postMessageIsAsynchronous;
    }
  }
  function installPostMessageImplementation() {
    var messagePrefix = "setImmediate$" + Math.random() + "$";
    var onGlobalMessage = function(event) {
      if (event.source === global2 && typeof event.data === "string" && event.data.indexOf(messagePrefix) === 0) {
        runIfPresent(+event.data.slice(messagePrefix.length));
      }
    };
    if (global2.addEventListener) {
      global2.addEventListener("message", onGlobalMessage, false);
    } else {
      global2.attachEvent("onmessage", onGlobalMessage);
    }
    registerImmediate = function(handle) {
      global2.postMessage(messagePrefix + handle, "*");
    };
  }
  function installMessageChannelImplementation() {
    var channel = new MessageChannel();
    channel.port1.onmessage = function(event) {
      var handle = event.data;
      runIfPresent(handle);
    };
    registerImmediate = function(handle) {
      channel.port2.postMessage(handle);
    };
  }
  function installReadyStateChangeImplementation() {
    var html = doc.documentElement;
    registerImmediate = function(handle) {
      var script = doc.createElement("script");
      script.onreadystatechange = function() {
        runIfPresent(handle);
        script.onreadystatechange = null;
        html.removeChild(script);
        script = null;
      };
      html.appendChild(script);
    };
  }
  function installSetTimeoutImplementation() {
    registerImmediate = function(handle) {
      setTimeout(runIfPresent, 0, handle);
    };
  }
  var attachTo = Object.getPrototypeOf && Object.getPrototypeOf(global2);
  attachTo = attachTo && attachTo.setTimeout ? attachTo : global2;
  if ({}.toString.call(global2.process) === "[object process]") {
    installNextTickImplementation();
  } else if (canUsePostMessage()) {
    installPostMessageImplementation();
  } else if (global2.MessageChannel) {
    installMessageChannelImplementation();
  } else if (doc && "onreadystatechange" in doc.createElement("script")) {
    installReadyStateChangeImplementation();
  } else {
    installSetTimeoutImplementation();
  }
  attachTo.setImmediate = setImmediate2;
  attachTo.clearImmediate = clearImmediate;
})(typeof self === "undefined" ? typeof commonjsGlobal === "undefined" ? commonjsGlobal : commonjsGlobal : self);
var setImmediate$1 = commonjsGlobal.setImmediate;
var DraftModifier$a = DraftModifier_1;
var EditorState$l = EditorState_1;
var UserAgent$9 = UserAgent_1;
var getEntityKeyForSelection$1 = getEntityKeyForSelection_1;
var isEventHandled$2 = isEventHandled_1;
var isSelectionAtLeafStart = isSelectionAtLeafStart_1;
var nullthrows$4 = nullthrows_1;
var setImmediate = setImmediate$1;
var FF_QUICKFIND_CHAR = "'";
var FF_QUICKFIND_LINK_CHAR = "/";
var isFirefox$1 = UserAgent$9.isBrowser("Firefox");
function mustPreventDefaultForCharacter(character) {
  return isFirefox$1 && (character == FF_QUICKFIND_CHAR || character == FF_QUICKFIND_LINK_CHAR);
}
function replaceText2(editorState, text, inlineStyle, entityKey, forceSelection) {
  var contentState = DraftModifier$a.replaceText(editorState.getCurrentContent(), editorState.getSelection(), text, inlineStyle, entityKey);
  return EditorState$l.push(editorState, contentState, "insert-characters", forceSelection);
}
function editOnBeforeInput(editor, e) {
  if (editor._pendingStateFromBeforeInput !== void 0) {
    editor.update(editor._pendingStateFromBeforeInput);
    editor._pendingStateFromBeforeInput = void 0;
  }
  var editorState = editor._latestEditorState;
  var chars = e.data;
  if (!chars) {
    return;
  }
  if (editor.props.handleBeforeInput && isEventHandled$2(editor.props.handleBeforeInput(chars, editorState, e.timeStamp))) {
    e.preventDefault();
    return;
  }
  var selection = editorState.getSelection();
  var selectionStart = selection.getStartOffset();
  var anchorKey = selection.getAnchorKey();
  if (!selection.isCollapsed()) {
    e.preventDefault();
    editor.update(replaceText2(editorState, chars, editorState.getCurrentInlineStyle(), getEntityKeyForSelection$1(editorState.getCurrentContent(), editorState.getSelection()), true));
    return;
  }
  var newEditorState = replaceText2(editorState, chars, editorState.getCurrentInlineStyle(), getEntityKeyForSelection$1(editorState.getCurrentContent(), editorState.getSelection()), false);
  var mustPreventNative = false;
  if (!mustPreventNative) {
    mustPreventNative = isSelectionAtLeafStart(editor._latestCommittedEditorState);
  }
  if (!mustPreventNative) {
    var oldBlockTree = editorState.getBlockTree(anchorKey);
    var newBlockTree = newEditorState.getBlockTree(anchorKey);
    mustPreventNative = oldBlockTree.size !== newBlockTree.size || oldBlockTree.zip(newBlockTree).some(function(_ref) {
      var oldLeafSet = _ref[0], newLeafSet = _ref[1];
      var oldStart = oldLeafSet.get("start");
      var adjustedStart = oldStart + (oldStart >= selectionStart ? chars.length : 0);
      var oldEnd = oldLeafSet.get("end");
      var adjustedEnd = oldEnd + (oldEnd >= selectionStart ? chars.length : 0);
      var newStart = newLeafSet.get("start");
      var newEnd = newLeafSet.get("end");
      var newDecoratorKey = newLeafSet.get("decoratorKey");
      return oldLeafSet.get("decoratorKey") !== newDecoratorKey || oldLeafSet.get("leaves").size !== newLeafSet.get("leaves").size || adjustedStart !== newStart || adjustedEnd !== newEnd || newDecoratorKey != null && newEnd - newStart !== oldEnd - oldStart;
    });
  }
  if (!mustPreventNative) {
    mustPreventNative = mustPreventDefaultForCharacter(chars);
  }
  if (!mustPreventNative) {
    mustPreventNative = nullthrows$4(newEditorState.getDirectionMap()).get(anchorKey) !== nullthrows$4(editorState.getDirectionMap()).get(anchorKey);
  }
  if (mustPreventNative) {
    e.preventDefault();
    newEditorState = EditorState$l.set(newEditorState, {
      forceSelection: true
    });
    editor.update(newEditorState);
    return;
  }
  newEditorState = EditorState$l.set(newEditorState, {
    nativelyRenderedContent: newEditorState.getCurrentContent()
  });
  editor._pendingStateFromBeforeInput = newEditorState;
  setImmediate(function() {
    if (editor._pendingStateFromBeforeInput !== void 0) {
      editor.update(editor._pendingStateFromBeforeInput);
      editor._pendingStateFromBeforeInput = void 0;
    }
  });
}
var editOnBeforeInput_1 = editOnBeforeInput;
var EditorState$k = EditorState_1;
var containsNode = containsNode_1;
var getActiveElement = getActiveElement_1;
function editOnBlur(editor, e) {
  var ownerDocument = e.currentTarget.ownerDocument;
  if (!Boolean(editor.props.preserveSelectionOnBlur) && getActiveElement(ownerDocument) === ownerDocument.body) {
    var _selection = ownerDocument.defaultView.getSelection();
    var editorNode = editor.editor;
    if (_selection.rangeCount === 1 && containsNode(editorNode, _selection.anchorNode) && containsNode(editorNode, _selection.focusNode)) {
      _selection.removeAllRanges();
    }
  }
  var editorState = editor._latestEditorState;
  var currentSelection = editorState.getSelection();
  if (!currentSelection.getHasFocus()) {
    return;
  }
  var selection = currentSelection.set("hasFocus", false);
  editor.props.onBlur && editor.props.onBlur(e);
  editor.update(EditorState$k.acceptSelection(editorState, selection));
}
var editOnBlur_1 = editOnBlur;
var EditorState$j = EditorState_1;
function editOnCompositionStart(editor, e) {
  editor.setMode("composite");
  editor.update(EditorState$j.set(editor._latestEditorState, {
    inCompositionMode: true
  }));
  editor._onCompositionStart(e);
}
var editOnCompositionStart_1 = editOnCompositionStart;
var getContentStateFragment$2 = getContentStateFragment_1;
function getFragmentFromSelection$2(editorState) {
  var selectionState = editorState.getSelection();
  if (selectionState.isCollapsed()) {
    return null;
  }
  return getContentStateFragment$2(editorState.getCurrentContent(), selectionState);
}
var getFragmentFromSelection_1 = getFragmentFromSelection$2;
var getFragmentFromSelection$1 = getFragmentFromSelection_1;
function editOnCopy(editor, e) {
  var editorState = editor._latestEditorState;
  var selection = editorState.getSelection();
  if (selection.isCollapsed()) {
    e.preventDefault();
    return;
  }
  editor.setClipboard(getFragmentFromSelection$1(editor._latestEditorState));
}
var editOnCopy_1 = editOnCopy;
function isInstanceOfNode(target) {
  if (!target || !("ownerDocument" in target)) {
    return false;
  }
  if ("ownerDocument" in target) {
    var node = target;
    if (!node.ownerDocument.defaultView) {
      return node instanceof Node;
    }
    if (node instanceof node.ownerDocument.defaultView.Node) {
      return true;
    }
  }
  return false;
}
var isInstanceOfNode_1 = isInstanceOfNode;
var DraftModifier$9 = DraftModifier_1;
var EditorState$i = EditorState_1;
var Style$1 = Style_1;
var getFragmentFromSelection = getFragmentFromSelection_1;
var getScrollPosition$1 = getScrollPosition_1;
var isNode = isInstanceOfNode_1;
function editOnCut(editor, e) {
  var editorState = editor._latestEditorState;
  var selection = editorState.getSelection();
  var element = e.target;
  var scrollPosition;
  if (selection.isCollapsed()) {
    e.preventDefault();
    return;
  }
  if (isNode(element)) {
    var node = element;
    scrollPosition = getScrollPosition$1(Style$1.getScrollParent(node));
  }
  var fragment = getFragmentFromSelection(editorState);
  editor.setClipboard(fragment);
  editor.setMode("cut");
  setTimeout(function() {
    editor.restoreEditorDOM(scrollPosition);
    editor.exitCurrentMode();
    editor.update(removeFragment(editorState));
  }, 0);
}
function removeFragment(editorState) {
  var newContent = DraftModifier$9.removeRange(editorState.getCurrentContent(), editorState.getSelection(), "forward");
  return EditorState$i.push(editorState, newContent, "remove-range");
}
var editOnCut_1 = editOnCut;
function editOnDragOver(editor, e) {
  editor.setMode("drag");
  e.preventDefault();
}
var editOnDragOver_1 = editOnDragOver;
function editOnDragStart(editor) {
  editor._internalDrag = true;
  editor.setMode("drag");
}
var editOnDragStart_1 = editOnDragStart;
var EditorState$h = EditorState_1;
var UserAgent$8 = UserAgent_1;
function editOnFocus(editor, e) {
  var editorState = editor._latestEditorState;
  var currentSelection = editorState.getSelection();
  if (currentSelection.getHasFocus()) {
    return;
  }
  var selection = currentSelection.set("hasFocus", true);
  editor.props.onFocus && editor.props.onFocus(e);
  if (UserAgent$8.isBrowser("Chrome < 60.0.3081.0")) {
    editor.update(EditorState$h.forceSelection(editorState, selection));
  } else {
    editor.update(EditorState$h.acceptSelection(editorState, selection));
  }
}
var editOnFocus_1 = editOnFocus;
var invariant$7 = invariant_1;
var SURROGATE_HIGH_START = 55296;
var SURROGATE_HIGH_END = 56319;
var SURROGATE_LOW_START = 56320;
var SURROGATE_LOW_END = 57343;
var SURROGATE_UNITS_REGEX = /[\uD800-\uDFFF]/;
function isCodeUnitInSurrogateRange(codeUnit) {
  return SURROGATE_HIGH_START <= codeUnit && codeUnit <= SURROGATE_LOW_END;
}
function isSurrogatePair(str, index) {
  !(0 <= index && index < str.length) ? invariant$7(false) : void 0;
  if (index + 1 === str.length) {
    return false;
  }
  var first = str.charCodeAt(index);
  var second = str.charCodeAt(index + 1);
  return SURROGATE_HIGH_START <= first && first <= SURROGATE_HIGH_END && SURROGATE_LOW_START <= second && second <= SURROGATE_LOW_END;
}
function hasSurrogateUnit(str) {
  return SURROGATE_UNITS_REGEX.test(str);
}
function getUTF16Length(str, pos) {
  return 1 + isCodeUnitInSurrogateRange(str.charCodeAt(pos));
}
function strlen$1(str) {
  if (!hasSurrogateUnit(str)) {
    return str.length;
  }
  var len = 0;
  for (var pos = 0; pos < str.length; pos += getUTF16Length(str, pos)) {
    len++;
  }
  return len;
}
function substr$2(str, start, length) {
  start = start || 0;
  length = length === void 0 ? Infinity : length || 0;
  if (!hasSurrogateUnit(str)) {
    return str.substr(start, length);
  }
  var size = str.length;
  if (size <= 0 || start > size || length <= 0) {
    return "";
  }
  var posA = 0;
  if (start > 0) {
    for (; start > 0 && posA < size; start--) {
      posA += getUTF16Length(str, posA);
    }
    if (posA >= size) {
      return "";
    }
  } else if (start < 0) {
    for (posA = size; start < 0 && 0 < posA; start++) {
      posA -= getUTF16Length(str, posA - 1);
    }
    if (posA < 0) {
      posA = 0;
    }
  }
  var posB = size;
  if (length < size) {
    for (posB = posA; length > 0 && posB < size; length--) {
      posB += getUTF16Length(str, posB);
    }
  }
  return str.substring(posA, posB);
}
function substring(str, start, end) {
  start = start || 0;
  end = end === void 0 ? Infinity : end || 0;
  if (start < 0) {
    start = 0;
  }
  if (end < 0) {
    end = 0;
  }
  var length = Math.abs(end - start);
  start = start < end ? start : end;
  return substr$2(str, start, length);
}
function getCodePoints(str) {
  var codePoints = [];
  for (var pos = 0; pos < str.length; pos += getUTF16Length(str, pos)) {
    codePoints.push(str.codePointAt(pos));
  }
  return codePoints;
}
var UnicodeUtils$7 = {
  getCodePoints,
  getUTF16Length,
  hasSurrogateUnit,
  isCodeUnitInSurrogateRange,
  isSurrogatePair,
  strlen: strlen$1,
  substring,
  substr: substr$2
};
var UnicodeUtils_1 = UnicodeUtils$7;
function moveSelectionBackward$3(editorState, maxDistance) {
  var selection = editorState.getSelection();
  var content = editorState.getCurrentContent();
  var key = selection.getStartKey();
  var offset = selection.getStartOffset();
  var focusKey = key;
  var focusOffset = 0;
  if (maxDistance > offset) {
    var keyBefore = content.getKeyBefore(key);
    if (keyBefore == null) {
      focusKey = key;
    } else {
      focusKey = keyBefore;
      var blockBefore = content.getBlockForKey(keyBefore);
      focusOffset = blockBefore.getText().length;
    }
  } else {
    focusOffset = offset - maxDistance;
  }
  return selection.merge({
    focusKey,
    focusOffset,
    isBackward: true
  });
}
var moveSelectionBackward_1 = moveSelectionBackward$3;
var DraftModifier$8 = DraftModifier_1;
var gkx$4 = gkx$8;
var experimentalTreeDataSupport$3 = gkx$4("draft_tree_data_support");
function removeTextWithStrategy$5(editorState, strategy, direction) {
  var selection = editorState.getSelection();
  var content = editorState.getCurrentContent();
  var target = selection;
  var anchorKey = selection.getAnchorKey();
  var focusKey = selection.getFocusKey();
  var anchorBlock = content.getBlockForKey(anchorKey);
  if (experimentalTreeDataSupport$3) {
    if (direction === "forward") {
      if (anchorKey !== focusKey) {
        return content;
      }
    }
  }
  if (selection.isCollapsed()) {
    if (direction === "forward") {
      if (editorState.isSelectionAtEndOfContent()) {
        return content;
      }
      if (experimentalTreeDataSupport$3) {
        var isAtEndOfBlock = selection.getAnchorOffset() === content.getBlockForKey(anchorKey).getLength();
        if (isAtEndOfBlock) {
          var anchorBlockSibling = content.getBlockForKey(anchorBlock.nextSibling);
          if (!anchorBlockSibling || anchorBlockSibling.getLength() === 0) {
            return content;
          }
        }
      }
    } else if (editorState.isSelectionAtStartOfContent()) {
      return content;
    }
    target = strategy(editorState);
    if (target === selection) {
      return content;
    }
  }
  return DraftModifier$8.removeRange(content, target, direction);
}
var removeTextWithStrategy_1 = removeTextWithStrategy$5;
var EditorState$g = EditorState_1;
var UnicodeUtils$6 = UnicodeUtils_1;
var moveSelectionBackward$2 = moveSelectionBackward_1;
var removeTextWithStrategy$4 = removeTextWithStrategy_1;
function keyCommandPlainBackspace$2(editorState) {
  var afterRemoval = removeTextWithStrategy$4(editorState, function(strategyState) {
    var selection2 = strategyState.getSelection();
    var content = strategyState.getCurrentContent();
    var key = selection2.getAnchorKey();
    var offset = selection2.getAnchorOffset();
    var charBehind = content.getBlockForKey(key).getText()[offset - 1];
    return moveSelectionBackward$2(strategyState, charBehind ? UnicodeUtils$6.getUTF16Length(charBehind, 0) : 1);
  }, "backward");
  if (afterRemoval === editorState.getCurrentContent()) {
    return editorState;
  }
  var selection = editorState.getSelection();
  return EditorState$g.push(editorState, afterRemoval.set("selectionBefore", selection), selection.isCollapsed() ? "backspace-character" : "remove-range");
}
var keyCommandPlainBackspace_1 = keyCommandPlainBackspace$2;
var DraftModifier$7 = DraftModifier_1;
var DraftOffsetKey = DraftOffsetKey_1;
var EditorState$f = EditorState_1;
var UserAgent$7 = UserAgent_1;
var _require$2 = draftKeyUtils, notEmptyKey = _require$2.notEmptyKey;
var findAncestorOffsetKey = findAncestorOffsetKey_1;
var keyCommandPlainBackspace$1 = keyCommandPlainBackspace_1;
var nullthrows$3 = nullthrows_1;
var isGecko = UserAgent$7.isEngine("Gecko");
var DOUBLE_NEWLINE = "\n\n";
function onInputType(inputType, editorState) {
  switch (inputType) {
    case "deleteContentBackward":
      return keyCommandPlainBackspace$1(editorState);
  }
  return editorState;
}
function editOnInput(editor, e) {
  if (editor._pendingStateFromBeforeInput !== void 0) {
    editor.update(editor._pendingStateFromBeforeInput);
    editor._pendingStateFromBeforeInput = void 0;
  }
  var castedEditorElement = editor.editor;
  var domSelection = castedEditorElement.ownerDocument.defaultView.getSelection();
  var anchorNode = domSelection.anchorNode, isCollapsed = domSelection.isCollapsed;
  var isNotTextOrElementNode = (anchorNode === null || anchorNode === void 0 ? void 0 : anchorNode.nodeType) !== Node.TEXT_NODE && (anchorNode === null || anchorNode === void 0 ? void 0 : anchorNode.nodeType) !== Node.ELEMENT_NODE;
  if (anchorNode == null || isNotTextOrElementNode) {
    return;
  }
  if (anchorNode.nodeType === Node.TEXT_NODE && (anchorNode.previousSibling !== null || anchorNode.nextSibling !== null)) {
    var span = anchorNode.parentNode;
    if (span == null) {
      return;
    }
    anchorNode.nodeValue = span.textContent;
    for (var child = span.firstChild; child != null; child = child.nextSibling) {
      if (child !== anchorNode) {
        span.removeChild(child);
      }
    }
  }
  var domText = anchorNode.textContent;
  var editorState = editor._latestEditorState;
  var offsetKey = nullthrows$3(findAncestorOffsetKey(anchorNode));
  var _DraftOffsetKey$decod = DraftOffsetKey.decode(offsetKey), blockKey = _DraftOffsetKey$decod.blockKey, decoratorKey = _DraftOffsetKey$decod.decoratorKey, leafKey = _DraftOffsetKey$decod.leafKey;
  var _editorState$getBlock = editorState.getBlockTree(blockKey).getIn([decoratorKey, "leaves", leafKey]), start = _editorState$getBlock.start, end = _editorState$getBlock.end;
  var content = editorState.getCurrentContent();
  var block = content.getBlockForKey(blockKey);
  var modelText = block.getText().slice(start, end);
  if (domText.endsWith(DOUBLE_NEWLINE)) {
    domText = domText.slice(0, -1);
  }
  if (domText === modelText) {
    var inputType = e.nativeEvent.inputType;
    if (inputType) {
      var newEditorState = onInputType(inputType, editorState);
      if (newEditorState !== editorState) {
        editor.restoreEditorDOM();
        editor.update(newEditorState);
        return;
      }
    }
    return;
  }
  var selection = editorState.getSelection();
  var targetRange = selection.merge({
    anchorOffset: start,
    focusOffset: end,
    isBackward: false
  });
  var entityKey = block.getEntityAt(start);
  var entity = notEmptyKey(entityKey) ? content.getEntity(entityKey) : null;
  var entityType = entity != null ? entity.getMutability() : null;
  var preserveEntity = entityType === "MUTABLE";
  var changeType = preserveEntity ? "spellcheck-change" : "apply-entity";
  var newContent = DraftModifier$7.replaceText(content, targetRange, domText, block.getInlineStyleAt(start), preserveEntity ? block.getEntityAt(start) : null);
  var anchorOffset, focusOffset, startOffset, endOffset;
  if (isGecko) {
    anchorOffset = domSelection.anchorOffset;
    focusOffset = domSelection.focusOffset;
    startOffset = start + Math.min(anchorOffset, focusOffset);
    endOffset = startOffset + Math.abs(anchorOffset - focusOffset);
    anchorOffset = startOffset;
    focusOffset = endOffset;
  } else {
    var charDelta = domText.length - modelText.length;
    startOffset = selection.getStartOffset();
    endOffset = selection.getEndOffset();
    anchorOffset = isCollapsed ? endOffset + charDelta : startOffset;
    focusOffset = endOffset + charDelta;
  }
  var contentWithAdjustedDOMSelection = newContent.merge({
    selectionBefore: content.getSelectionAfter(),
    selectionAfter: selection.merge({
      anchorOffset,
      focusOffset
    })
  });
  editor.update(EditorState$f.push(editorState, contentWithAdjustedDOMSelection, changeType));
}
var editOnInput_1 = editOnInput;
var Keys$2 = Keys$4;
function isSoftNewlineEvent$1(e) {
  return e.which === Keys$2.RETURN && (e.getModifierState("Shift") || e.getModifierState("Alt") || e.getModifierState("Control"));
}
var isSoftNewlineEvent_1 = isSoftNewlineEvent$1;
var UserAgent$6 = UserAgent_1;
var isSoftNewlineEvent = isSoftNewlineEvent_1;
var isOSX$1 = UserAgent$6.isPlatform("Mac OS X");
var KeyBindingUtil$3 = {
  isCtrlKeyCommand: function isCtrlKeyCommand(e) {
    return !!e.ctrlKey && !e.altKey;
  },
  isOptionKeyCommand: function isOptionKeyCommand(e) {
    return isOSX$1 && e.altKey;
  },
  usesMacOSHeuristics: function usesMacOSHeuristics() {
    return isOSX$1;
  },
  hasCommandModifier: function hasCommandModifier(e) {
    return isOSX$1 ? !!e.metaKey && !e.altKey : KeyBindingUtil$3.isCtrlKeyCommand(e);
  },
  isSoftNewlineEvent
};
var KeyBindingUtil_1 = KeyBindingUtil$3;
var DraftModifier$6 = DraftModifier_1;
var EditorState$e = EditorState_1;
var getContentStateFragment$1 = getContentStateFragment_1;
var nullthrows$2 = nullthrows_1;
var clipboard = null;
var SecondaryClipboard$1 = {
  cut: function cut(editorState) {
    var content = editorState.getCurrentContent();
    var selection = editorState.getSelection();
    var targetRange = null;
    if (selection.isCollapsed()) {
      var anchorKey = selection.getAnchorKey();
      var blockEnd = content.getBlockForKey(anchorKey).getLength();
      if (blockEnd === selection.getAnchorOffset()) {
        var keyAfter = content.getKeyAfter(anchorKey);
        if (keyAfter == null) {
          return editorState;
        }
        targetRange = selection.set("focusKey", keyAfter).set("focusOffset", 0);
      } else {
        targetRange = selection.set("focusOffset", blockEnd);
      }
    } else {
      targetRange = selection;
    }
    targetRange = nullthrows$2(targetRange);
    clipboard = getContentStateFragment$1(content, targetRange);
    var afterRemoval = DraftModifier$6.removeRange(content, targetRange, "forward");
    if (afterRemoval === content) {
      return editorState;
    }
    return EditorState$e.push(editorState, afterRemoval, "remove-range");
  },
  paste: function paste(editorState) {
    if (!clipboard) {
      return editorState;
    }
    var newContent = DraftModifier$6.replaceWithFragment(editorState.getCurrentContent(), editorState.getSelection(), clipboard);
    return EditorState$e.push(editorState, newContent, "insert-fragment");
  }
};
var SecondaryClipboard_1 = SecondaryClipboard$1;
var UserAgent$5 = UserAgent_1;
var invariant$6 = invariant_1;
var isChrome$2 = UserAgent$5.isBrowser("Chrome");
function getRangeClientRectsChrome(range) {
  var tempRange = range.cloneRange();
  var clientRects = [];
  for (var ancestor = range.endContainer; ancestor != null; ancestor = ancestor.parentNode) {
    var atCommonAncestor = ancestor === range.commonAncestorContainer;
    if (atCommonAncestor) {
      tempRange.setStart(range.startContainer, range.startOffset);
    } else {
      tempRange.setStart(tempRange.endContainer, 0);
    }
    var rects = Array.from(tempRange.getClientRects());
    clientRects.push(rects);
    if (atCommonAncestor) {
      var _ref;
      clientRects.reverse();
      return (_ref = []).concat.apply(_ref, clientRects);
    }
    tempRange.setEndBefore(ancestor);
  }
  invariant$6(false);
}
var getRangeClientRects$2 = isChrome$2 ? getRangeClientRectsChrome : function(range) {
  return Array.from(range.getClientRects());
};
var getRangeClientRects_1 = getRangeClientRects$2;
var UnicodeUtils$5 = UnicodeUtils_1;
var getCorrectDocumentFromNode = getCorrectDocumentFromNode_1;
var getRangeClientRects$1 = getRangeClientRects_1;
var invariant$5 = invariant_1;
function getLineHeightPx(element) {
  var computed = getComputedStyle(element);
  var correctDocument = getCorrectDocumentFromNode(element);
  var div = correctDocument.createElement("div");
  div.style.fontFamily = computed.fontFamily;
  div.style.fontSize = computed.fontSize;
  div.style.fontStyle = computed.fontStyle;
  div.style.fontWeight = computed.fontWeight;
  div.style.lineHeight = computed.lineHeight;
  div.style.position = "absolute";
  div.textContent = "M";
  var documentBody = correctDocument.body;
  !documentBody ? invariant$5(false) : void 0;
  documentBody.appendChild(div);
  var rect = div.getBoundingClientRect();
  documentBody.removeChild(div);
  return rect.height;
}
function areRectsOnOneLine(rects, lineHeight) {
  var minTop = Infinity;
  var minBottom = Infinity;
  var maxTop = -Infinity;
  var maxBottom = -Infinity;
  for (var ii2 = 0; ii2 < rects.length; ii2++) {
    var rect = rects[ii2];
    if (rect.width === 0 || rect.width === 1) {
      continue;
    }
    minTop = Math.min(minTop, rect.top);
    minBottom = Math.min(minBottom, rect.bottom);
    maxTop = Math.max(maxTop, rect.top);
    maxBottom = Math.max(maxBottom, rect.bottom);
  }
  return maxTop <= minBottom && maxTop - minTop < lineHeight && maxBottom - minBottom < lineHeight;
}
function getNodeLength(node) {
  switch (node.nodeType) {
    case Node.DOCUMENT_TYPE_NODE:
      return 0;
    case Node.TEXT_NODE:
    case Node.PROCESSING_INSTRUCTION_NODE:
    case Node.COMMENT_NODE:
      return node.length;
    default:
      return node.childNodes.length;
  }
}
function expandRangeToStartOfLine$1(range) {
  !range.collapsed ? invariant$5(false) : void 0;
  range = range.cloneRange();
  var containingElement = range.startContainer;
  if (containingElement.nodeType !== 1) {
    containingElement = containingElement.parentNode;
  }
  var lineHeight = getLineHeightPx(containingElement);
  var bestContainer = range.endContainer;
  var bestOffset = range.endOffset;
  range.setStart(range.startContainer, 0);
  while (areRectsOnOneLine(getRangeClientRects$1(range), lineHeight)) {
    bestContainer = range.startContainer;
    bestOffset = range.startOffset;
    !bestContainer.parentNode ? invariant$5(false) : void 0;
    range.setStartBefore(bestContainer);
    if (bestContainer.nodeType === 1 && getComputedStyle(bestContainer).display !== "inline") {
      break;
    }
  }
  var currentContainer = bestContainer;
  var maxIndexToConsider = bestOffset - 1;
  do {
    var nodeValue = currentContainer.nodeValue;
    var ii2 = maxIndexToConsider;
    for (; ii2 >= 0; ii2--) {
      if (nodeValue != null && ii2 > 0 && UnicodeUtils$5.isSurrogatePair(nodeValue, ii2 - 1)) {
        continue;
      }
      range.setStart(currentContainer, ii2);
      if (areRectsOnOneLine(getRangeClientRects$1(range), lineHeight)) {
        bestContainer = currentContainer;
        bestOffset = ii2;
      } else {
        break;
      }
    }
    if (ii2 === -1 || currentContainer.childNodes.length === 0) {
      break;
    }
    currentContainer = currentContainer.childNodes[ii2];
    maxIndexToConsider = getNodeLength(currentContainer);
  } while (true);
  range.setStart(bestContainer, bestOffset);
  return range;
}
var expandRangeToStartOfLine_1 = expandRangeToStartOfLine$1;
var EditorState$d = EditorState_1;
var expandRangeToStartOfLine = expandRangeToStartOfLine_1;
var getDraftEditorSelectionWithNodes = getDraftEditorSelectionWithNodes_1;
var moveSelectionBackward$1 = moveSelectionBackward_1;
var removeTextWithStrategy$3 = removeTextWithStrategy_1;
function keyCommandBackspaceToStartOfLine$1(editorState, e) {
  var afterRemoval = removeTextWithStrategy$3(editorState, function(strategyState) {
    var selection = strategyState.getSelection();
    if (selection.isCollapsed() && selection.getAnchorOffset() === 0) {
      return moveSelectionBackward$1(strategyState, 1);
    }
    var ownerDocument = e.currentTarget.ownerDocument;
    var domSelection = ownerDocument.defaultView.getSelection();
    var range = domSelection.getRangeAt(0);
    range = expandRangeToStartOfLine(range);
    return getDraftEditorSelectionWithNodes(strategyState, null, range.endContainer, range.endOffset, range.startContainer, range.startOffset).selectionState;
  }, "backward");
  if (afterRemoval === editorState.getCurrentContent()) {
    return editorState;
  }
  return EditorState$d.push(editorState, afterRemoval, "remove-range");
}
var keyCommandBackspaceToStartOfLine_1 = keyCommandBackspaceToStartOfLine$1;
var PUNCTUATION = `[.,+*?$|#{}()'\\^\\-\\[\\]\\\\\\/!@%"~=<>_:;\u30FB\u3001\u3002\u3008-\u3011\u3014-\u301F\uFF1A-\uFF1F\uFF01-\uFF0F\uFF3B-\uFF40\uFF5B-\uFF65\u2E2E\u061F\u066A-\u066C\u061B\u060C\u060D\uFD3E\uFD3F\u1801\u0964\u104A\u104B\u2010-\u2027\u2030-\u205E\xA1-\xB1\xB4-\xB8\xBA\xBB\xBF]`;
var TokenizeUtil$1 = {
  getPunctuation: function getPunctuation() {
    return PUNCTUATION;
  }
};
var TokenizeUtil = TokenizeUtil$1;
var punctuation = TokenizeUtil.getPunctuation();
var CHAMELEON_CHARS = "['\u2018\u2019]";
var WHITESPACE_AND_PUNCTUATION = "\\s|(?![_])" + punctuation;
var DELETE_STRING = "^(?:" + WHITESPACE_AND_PUNCTUATION + ")*(?:" + CHAMELEON_CHARS + "|(?!" + WHITESPACE_AND_PUNCTUATION + ").)*(?:(?!" + WHITESPACE_AND_PUNCTUATION + ").)";
var DELETE_REGEX = new RegExp(DELETE_STRING);
var BACKSPACE_STRING = "(?:(?!" + WHITESPACE_AND_PUNCTUATION + ").)(?:" + CHAMELEON_CHARS + "|(?!" + WHITESPACE_AND_PUNCTUATION + ").)*(?:" + WHITESPACE_AND_PUNCTUATION + ")*$";
var BACKSPACE_REGEX = new RegExp(BACKSPACE_STRING);
function getRemovableWord(text, isBackward) {
  var matches = isBackward ? BACKSPACE_REGEX.exec(text) : DELETE_REGEX.exec(text);
  return matches ? matches[0] : text;
}
var DraftRemovableWord$2 = {
  getBackward: function getBackward(text) {
    return getRemovableWord(text, true);
  },
  getForward: function getForward(text) {
    return getRemovableWord(text, false);
  }
};
var DraftRemovableWord_1 = DraftRemovableWord$2;
var DraftRemovableWord$1 = DraftRemovableWord_1;
var EditorState$c = EditorState_1;
var moveSelectionBackward = moveSelectionBackward_1;
var removeTextWithStrategy$2 = removeTextWithStrategy_1;
function keyCommandBackspaceWord$1(editorState) {
  var afterRemoval = removeTextWithStrategy$2(editorState, function(strategyState) {
    var selection = strategyState.getSelection();
    var offset = selection.getStartOffset();
    if (offset === 0) {
      return moveSelectionBackward(strategyState, 1);
    }
    var key = selection.getStartKey();
    var content = strategyState.getCurrentContent();
    var text = content.getBlockForKey(key).getText().slice(0, offset);
    var toRemove = DraftRemovableWord$1.getBackward(text);
    return moveSelectionBackward(strategyState, toRemove.length || 1);
  }, "backward");
  if (afterRemoval === editorState.getCurrentContent()) {
    return editorState;
  }
  return EditorState$c.push(editorState, afterRemoval, "remove-range");
}
var keyCommandBackspaceWord_1 = keyCommandBackspaceWord$1;
function moveSelectionForward$2(editorState, maxDistance) {
  var selection = editorState.getSelection();
  var key = selection.getStartKey();
  var offset = selection.getStartOffset();
  var content = editorState.getCurrentContent();
  var focusKey = key;
  var focusOffset;
  var block = content.getBlockForKey(key);
  if (maxDistance > block.getText().length - offset) {
    focusKey = content.getKeyAfter(key);
    focusOffset = 0;
  } else {
    focusOffset = offset + maxDistance;
  }
  return selection.merge({
    focusKey,
    focusOffset
  });
}
var moveSelectionForward_1 = moveSelectionForward$2;
var DraftRemovableWord = DraftRemovableWord_1;
var EditorState$b = EditorState_1;
var moveSelectionForward$1 = moveSelectionForward_1;
var removeTextWithStrategy$1 = removeTextWithStrategy_1;
function keyCommandDeleteWord$1(editorState) {
  var afterRemoval = removeTextWithStrategy$1(editorState, function(strategyState) {
    var selection = strategyState.getSelection();
    var offset = selection.getStartOffset();
    var key = selection.getStartKey();
    var content = strategyState.getCurrentContent();
    var text = content.getBlockForKey(key).getText().slice(offset);
    var toRemove = DraftRemovableWord.getForward(text);
    return moveSelectionForward$1(strategyState, toRemove.length || 1);
  }, "forward");
  if (afterRemoval === editorState.getCurrentContent()) {
    return editorState;
  }
  return EditorState$b.push(editorState, afterRemoval, "remove-range");
}
var keyCommandDeleteWord_1 = keyCommandDeleteWord$1;
var DraftModifier$5 = DraftModifier_1;
var EditorState$a = EditorState_1;
function keyCommandInsertNewline$1(editorState) {
  var contentState = DraftModifier$5.splitBlock(editorState.getCurrentContent(), editorState.getSelection());
  return EditorState$a.push(editorState, contentState, "split-block");
}
var keyCommandInsertNewline_1 = keyCommandInsertNewline$1;
var EditorState$9 = EditorState_1;
function keyCommandMoveSelectionToEndOfBlock$1(editorState) {
  var selection = editorState.getSelection();
  var endKey = selection.getEndKey();
  var content = editorState.getCurrentContent();
  var textLength = content.getBlockForKey(endKey).getLength();
  return EditorState$9.set(editorState, {
    selection: selection.merge({
      anchorKey: endKey,
      anchorOffset: textLength,
      focusKey: endKey,
      focusOffset: textLength,
      isBackward: false
    }),
    forceSelection: true
  });
}
var keyCommandMoveSelectionToEndOfBlock_1 = keyCommandMoveSelectionToEndOfBlock$1;
var EditorState$8 = EditorState_1;
function keyCommandMoveSelectionToStartOfBlock$1(editorState) {
  var selection = editorState.getSelection();
  var startKey = selection.getStartKey();
  return EditorState$8.set(editorState, {
    selection: selection.merge({
      anchorKey: startKey,
      anchorOffset: 0,
      focusKey: startKey,
      focusOffset: 0,
      isBackward: false
    }),
    forceSelection: true
  });
}
var keyCommandMoveSelectionToStartOfBlock_1 = keyCommandMoveSelectionToStartOfBlock$1;
var EditorState$7 = EditorState_1;
var UnicodeUtils$4 = UnicodeUtils_1;
var moveSelectionForward = moveSelectionForward_1;
var removeTextWithStrategy = removeTextWithStrategy_1;
function keyCommandPlainDelete$1(editorState) {
  var afterRemoval = removeTextWithStrategy(editorState, function(strategyState) {
    var selection2 = strategyState.getSelection();
    var content = strategyState.getCurrentContent();
    var key = selection2.getAnchorKey();
    var offset = selection2.getAnchorOffset();
    var charAhead = content.getBlockForKey(key).getText()[offset];
    return moveSelectionForward(strategyState, charAhead ? UnicodeUtils$4.getUTF16Length(charAhead, 0) : 1);
  }, "forward");
  if (afterRemoval === editorState.getCurrentContent()) {
    return editorState;
  }
  var selection = editorState.getSelection();
  return EditorState$7.push(editorState, afterRemoval.set("selectionBefore", selection), selection.isCollapsed() ? "delete-character" : "remove-range");
}
var keyCommandPlainDelete_1 = keyCommandPlainDelete$1;
var DraftModifier$4 = DraftModifier_1;
var EditorState$6 = EditorState_1;
var getContentStateFragment2 = getContentStateFragment_1;
function keyCommandTransposeCharacters$1(editorState) {
  var selection = editorState.getSelection();
  if (!selection.isCollapsed()) {
    return editorState;
  }
  var offset = selection.getAnchorOffset();
  if (offset === 0) {
    return editorState;
  }
  var blockKey = selection.getAnchorKey();
  var content = editorState.getCurrentContent();
  var block = content.getBlockForKey(blockKey);
  var length = block.getLength();
  if (length <= 1) {
    return editorState;
  }
  var removalRange;
  var finalSelection;
  if (offset === length) {
    removalRange = selection.set("anchorOffset", offset - 1);
    finalSelection = selection;
  } else {
    removalRange = selection.set("focusOffset", offset + 1);
    finalSelection = removalRange.set("anchorOffset", offset + 1);
  }
  var movedFragment = getContentStateFragment2(content, removalRange);
  var afterRemoval = DraftModifier$4.removeRange(content, removalRange, "backward");
  var selectionAfter = afterRemoval.getSelectionAfter();
  var targetOffset = selectionAfter.getAnchorOffset() - 1;
  var targetRange = selectionAfter.merge({
    anchorOffset: targetOffset,
    focusOffset: targetOffset
  });
  var afterInsert = DraftModifier$4.replaceWithFragment(afterRemoval, targetRange, movedFragment);
  var newEditorState = EditorState$6.push(editorState, afterInsert, "insert-fragment");
  return EditorState$6.acceptSelection(newEditorState, finalSelection);
}
var keyCommandTransposeCharacters_1 = keyCommandTransposeCharacters$1;
var EditorState$5 = EditorState_1;
function keyCommandUndo$1(e, editorState, updateFn) {
  var undoneState = EditorState$5.undo(editorState);
  if (editorState.getLastChangeType() === "spellcheck-change") {
    var nativelyRenderedContent = undoneState.getCurrentContent();
    updateFn(EditorState$5.set(undoneState, {
      nativelyRenderedContent
    }));
    return;
  }
  e.preventDefault();
  if (!editorState.getNativelyRenderedContent()) {
    updateFn(undoneState);
    return;
  }
  updateFn(EditorState$5.set(editorState, {
    nativelyRenderedContent: null
  }));
  setTimeout(function() {
    updateFn(undoneState);
  }, 0);
}
var keyCommandUndo_1 = keyCommandUndo$1;
var DraftModifier$3 = DraftModifier_1;
var EditorState$4 = EditorState_1;
var KeyBindingUtil$2 = KeyBindingUtil_1;
var Keys$1 = Keys$4;
var SecondaryClipboard = SecondaryClipboard_1;
var UserAgent$4 = UserAgent_1;
var isEventHandled$1 = isEventHandled_1;
var keyCommandBackspaceToStartOfLine = keyCommandBackspaceToStartOfLine_1;
var keyCommandBackspaceWord = keyCommandBackspaceWord_1;
var keyCommandDeleteWord = keyCommandDeleteWord_1;
var keyCommandInsertNewline = keyCommandInsertNewline_1;
var keyCommandMoveSelectionToEndOfBlock = keyCommandMoveSelectionToEndOfBlock_1;
var keyCommandMoveSelectionToStartOfBlock = keyCommandMoveSelectionToStartOfBlock_1;
var keyCommandPlainBackspace = keyCommandPlainBackspace_1;
var keyCommandPlainDelete = keyCommandPlainDelete_1;
var keyCommandTransposeCharacters = keyCommandTransposeCharacters_1;
var keyCommandUndo = keyCommandUndo_1;
var isOptionKeyCommand2 = KeyBindingUtil$2.isOptionKeyCommand;
var isChrome$1 = UserAgent$4.isBrowser("Chrome");
function onKeyCommand(command, editorState, e) {
  switch (command) {
    case "redo":
      return EditorState$4.redo(editorState);
    case "delete":
      return keyCommandPlainDelete(editorState);
    case "delete-word":
      return keyCommandDeleteWord(editorState);
    case "backspace":
      return keyCommandPlainBackspace(editorState);
    case "backspace-word":
      return keyCommandBackspaceWord(editorState);
    case "backspace-to-start-of-line":
      return keyCommandBackspaceToStartOfLine(editorState, e);
    case "split-block":
      return keyCommandInsertNewline(editorState);
    case "transpose-characters":
      return keyCommandTransposeCharacters(editorState);
    case "move-selection-to-start-of-block":
      return keyCommandMoveSelectionToStartOfBlock(editorState);
    case "move-selection-to-end-of-block":
      return keyCommandMoveSelectionToEndOfBlock(editorState);
    case "secondary-cut":
      return SecondaryClipboard.cut(editorState);
    case "secondary-paste":
      return SecondaryClipboard.paste(editorState);
    default:
      return editorState;
  }
}
function editOnKeyDown(editor, e) {
  var keyCode = e.which;
  var editorState = editor._latestEditorState;
  function callDeprecatedHandler(handlerName) {
    var deprecatedHandler = editor.props[handlerName];
    if (deprecatedHandler) {
      deprecatedHandler(e);
      return true;
    } else {
      return false;
    }
  }
  switch (keyCode) {
    case Keys$1.RETURN:
      e.preventDefault();
      if (editor.props.handleReturn && isEventHandled$1(editor.props.handleReturn(e, editorState))) {
        return;
      }
      break;
    case Keys$1.ESC:
      e.preventDefault();
      if (callDeprecatedHandler("onEscape")) {
        return;
      }
      break;
    case Keys$1.TAB:
      if (callDeprecatedHandler("onTab")) {
        return;
      }
      break;
    case Keys$1.UP:
      if (callDeprecatedHandler("onUpArrow")) {
        return;
      }
      break;
    case Keys$1.RIGHT:
      if (callDeprecatedHandler("onRightArrow")) {
        return;
      }
      break;
    case Keys$1.DOWN:
      if (callDeprecatedHandler("onDownArrow")) {
        return;
      }
      break;
    case Keys$1.LEFT:
      if (callDeprecatedHandler("onLeftArrow")) {
        return;
      }
      break;
    case Keys$1.SPACE:
      if (isChrome$1 && isOptionKeyCommand2(e)) {
        e.preventDefault();
      }
  }
  var command = editor.props.keyBindingFn(e);
  if (command == null || command === "") {
    if (keyCode === Keys$1.SPACE && isChrome$1 && isOptionKeyCommand2(e)) {
      var contentState = DraftModifier$3.replaceText(editorState.getCurrentContent(), editorState.getSelection(), "\xA0");
      editor.update(EditorState$4.push(editorState, contentState, "insert-characters"));
    }
    return;
  }
  if (command === "undo") {
    keyCommandUndo(e, editorState, editor.update);
    return;
  }
  e.preventDefault();
  if (editor.props.handleKeyCommand && isEventHandled$1(editor.props.handleKeyCommand(command, editorState, e.timeStamp))) {
    return;
  }
  var newState = onKeyCommand(command, editorState, e);
  if (newState !== editorState) {
    editor.update(newState);
  }
}
var editOnKeyDown_1 = editOnKeyDown;
function _defineProperty$6(obj, key, value) {
  if (key in obj) {
    Object.defineProperty(obj, key, { value, enumerable: true, configurable: true, writable: true });
  } else {
    obj[key] = value;
  }
  return obj;
}
var URI$1 = /* @__PURE__ */ function() {
  function URI2(uri) {
    _defineProperty$6(this, "_uri", void 0);
    this._uri = uri;
  }
  var _proto = URI2.prototype;
  _proto.toString = function toString2() {
    return this._uri;
  };
  return URI2;
}();
var URI_1 = URI$1;
var UserAgent$3 = UserAgent_1;
var invariant$4 = invariant_1;
var isOldIE = UserAgent$3.isBrowser("IE <= 9");
function getSafeBodyFromHTML$2(html) {
  var doc;
  var root2 = null;
  if (!isOldIE && document.implementation && document.implementation.createHTMLDocument) {
    doc = document.implementation.createHTMLDocument("foo");
    !doc.documentElement ? invariant$4(false) : void 0;
    doc.documentElement.innerHTML = html;
    root2 = doc.getElementsByTagName("body")[0];
  }
  return root2;
}
var getSafeBodyFromHTML_1 = getSafeBodyFromHTML$2;
var isElement$1 = isElement_1;
function isHTMLAnchorElement$1(node) {
  if (!node || !node.ownerDocument) {
    return false;
  }
  return isElement$1(node) && node.nodeName === "A";
}
var isHTMLAnchorElement_1 = isHTMLAnchorElement$1;
var isElement = isElement_1;
function isHTMLImageElement$1(node) {
  if (!node || !node.ownerDocument) {
    return false;
  }
  return isElement(node) && node.nodeName === "IMG";
}
var isHTMLImageElement_1 = isHTMLImageElement$1;
var _knownListItemDepthCl;
function _objectSpread$5(target) {
  for (var i = 1; i < arguments.length; i++) {
    var source = arguments[i] != null ? arguments[i] : {};
    var ownKeys = Object.keys(source);
    if (typeof Object.getOwnPropertySymbols === "function") {
      ownKeys = ownKeys.concat(Object.getOwnPropertySymbols(source).filter(function(sym) {
        return Object.getOwnPropertyDescriptor(source, sym).enumerable;
      }));
    }
    ownKeys.forEach(function(key) {
      _defineProperty$5(target, key, source[key]);
    });
  }
  return target;
}
function _defineProperty$5(obj, key, value) {
  if (key in obj) {
    Object.defineProperty(obj, key, { value, enumerable: true, configurable: true, writable: true });
  } else {
    obj[key] = value;
  }
  return obj;
}
var CharacterMetadata$3 = CharacterMetadata_1;
var ContentBlock$4 = ContentBlock_1;
var ContentBlockNode$3 = ContentBlockNode_1;
var DefaultDraftBlockRenderMap$2 = DefaultDraftBlockRenderMap_1;
var DraftEntity$2 = DraftEntity_1;
var URI = URI_1;
var cx$2 = cx_1;
var generateRandomKey$5 = generateRandomKey_1;
var getSafeBodyFromHTML$1 = getSafeBodyFromHTML_1;
var gkx$3 = gkx$8;
var _require$1 = immutable.exports, List$3 = _require$1.List, Map$2 = _require$1.Map, OrderedSet$1 = _require$1.OrderedSet;
var isHTMLAnchorElement = isHTMLAnchorElement_1;
var isHTMLBRElement = isHTMLBRElement_1;
var isHTMLElement$1 = isHTMLElement_1;
var isHTMLImageElement = isHTMLImageElement_1;
var experimentalTreeDataSupport$2 = gkx$3("draft_tree_data_support");
var NBSP = "&nbsp;";
var SPACE = " ";
var REGEX_CR = new RegExp("\r", "g");
var REGEX_LF = new RegExp("\n", "g");
var REGEX_LEADING_LF = new RegExp("^\n", "g");
var REGEX_NBSP = new RegExp(NBSP, "g");
var REGEX_CARRIAGE = new RegExp("&#13;?", "g");
var REGEX_ZWS = new RegExp("&#8203;?", "g");
var boldValues = ["bold", "bolder", "500", "600", "700", "800", "900"];
var notBoldValues = ["light", "lighter", "normal", "100", "200", "300", "400"];
var anchorAttr = ["className", "href", "rel", "target", "title"];
var imgAttr = ["alt", "className", "height", "src", "width"];
var knownListItemDepthClasses = (_knownListItemDepthCl = {}, _defineProperty$5(_knownListItemDepthCl, cx$2("public/DraftStyleDefault/depth0"), 0), _defineProperty$5(_knownListItemDepthCl, cx$2("public/DraftStyleDefault/depth1"), 1), _defineProperty$5(_knownListItemDepthCl, cx$2("public/DraftStyleDefault/depth2"), 2), _defineProperty$5(_knownListItemDepthCl, cx$2("public/DraftStyleDefault/depth3"), 3), _defineProperty$5(_knownListItemDepthCl, cx$2("public/DraftStyleDefault/depth4"), 4), _knownListItemDepthCl);
var HTMLTagToRawInlineStyleMap = Map$2({
  b: "BOLD",
  code: "CODE",
  del: "STRIKETHROUGH",
  em: "ITALIC",
  i: "ITALIC",
  s: "STRIKETHROUGH",
  strike: "STRIKETHROUGH",
  strong: "BOLD",
  u: "UNDERLINE",
  mark: "HIGHLIGHT"
});
var buildBlockTypeMap = function buildBlockTypeMap2(blockRenderMap) {
  var blockTypeMap = {};
  blockRenderMap.mapKeys(function(blockType, desc) {
    var elements = [desc.element];
    if (desc.aliasedElements !== void 0) {
      elements.push.apply(elements, desc.aliasedElements);
    }
    elements.forEach(function(element) {
      if (blockTypeMap[element] === void 0) {
        blockTypeMap[element] = blockType;
      } else if (typeof blockTypeMap[element] === "string") {
        blockTypeMap[element] = [blockTypeMap[element], blockType];
      } else {
        blockTypeMap[element].push(blockType);
      }
    });
  });
  return Map$2(blockTypeMap);
};
var detectInlineStyle = function detectInlineStyle2(node) {
  if (isHTMLElement$1(node)) {
    var element = node;
    if (element.style.fontFamily.includes("monospace")) {
      return "CODE";
    }
  }
  return null;
};
var getListItemDepth = function getListItemDepth2(node) {
  var depth = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : 0;
  Object.keys(knownListItemDepthClasses).some(function(depthClass) {
    if (node.classList.contains(depthClass)) {
      depth = knownListItemDepthClasses[depthClass];
    }
  });
  return depth;
};
var isValidAnchor = function isValidAnchor2(node) {
  if (!isHTMLAnchorElement(node)) {
    return false;
  }
  var anchorNode = node;
  if (!anchorNode.href || anchorNode.protocol !== "http:" && anchorNode.protocol !== "https:" && anchorNode.protocol !== "mailto:" && anchorNode.protocol !== "tel:") {
    return false;
  }
  try {
    var _ = new URI(anchorNode.href);
    return true;
  } catch (_2) {
    return false;
  }
};
var isValidImage = function isValidImage2(node) {
  if (!isHTMLImageElement(node)) {
    return false;
  }
  var imageNode = node;
  return !!(imageNode.attributes.getNamedItem("src") && imageNode.attributes.getNamedItem("src").value);
};
var styleFromNodeAttributes = function styleFromNodeAttributes2(node, style) {
  if (!isHTMLElement$1(node)) {
    return style;
  }
  var htmlElement = node;
  var fontWeight = htmlElement.style.fontWeight;
  var fontStyle = htmlElement.style.fontStyle;
  var textDecoration = htmlElement.style.textDecoration;
  return style.withMutations(function(style2) {
    if (boldValues.indexOf(fontWeight) >= 0) {
      style2.add("BOLD");
    } else if (notBoldValues.indexOf(fontWeight) >= 0) {
      style2.remove("BOLD");
    }
    if (fontStyle === "italic") {
      style2.add("ITALIC");
    } else if (fontStyle === "normal") {
      style2.remove("ITALIC");
    }
    if (textDecoration === "underline") {
      style2.add("UNDERLINE");
    }
    if (textDecoration === "line-through") {
      style2.add("STRIKETHROUGH");
    }
    if (textDecoration === "none") {
      style2.remove("UNDERLINE");
      style2.remove("STRIKETHROUGH");
    }
  });
};
var isListNode = function isListNode2(nodeName) {
  return nodeName === "ul" || nodeName === "ol";
};
var ContentBlocksBuilder = /* @__PURE__ */ function() {
  function ContentBlocksBuilder2(blockTypeMap, disambiguate) {
    _defineProperty$5(this, "characterList", List$3());
    _defineProperty$5(this, "currentBlockType", "unstyled");
    _defineProperty$5(this, "currentDepth", 0);
    _defineProperty$5(this, "currentEntity", null);
    _defineProperty$5(this, "currentText", "");
    _defineProperty$5(this, "wrapper", null);
    _defineProperty$5(this, "blockConfigs", []);
    _defineProperty$5(this, "contentBlocks", []);
    _defineProperty$5(this, "entityMap", DraftEntity$2);
    _defineProperty$5(this, "blockTypeMap", void 0);
    _defineProperty$5(this, "disambiguate", void 0);
    this.clear();
    this.blockTypeMap = blockTypeMap;
    this.disambiguate = disambiguate;
  }
  var _proto = ContentBlocksBuilder2.prototype;
  _proto.clear = function clear() {
    this.characterList = List$3();
    this.blockConfigs = [];
    this.currentBlockType = "unstyled";
    this.currentDepth = 0;
    this.currentEntity = null;
    this.currentText = "";
    this.entityMap = DraftEntity$2;
    this.wrapper = null;
    this.contentBlocks = [];
  };
  _proto.addDOMNode = function addDOMNode(node) {
    var _this$blockConfigs;
    this.contentBlocks = [];
    this.currentDepth = 0;
    (_this$blockConfigs = this.blockConfigs).push.apply(_this$blockConfigs, this._toBlockConfigs([node], OrderedSet$1()));
    this._trimCurrentText();
    if (this.currentText !== "") {
      this.blockConfigs.push(this._makeBlockConfig());
    }
    return this;
  };
  _proto.getContentBlocks = function getContentBlocks() {
    if (this.contentBlocks.length === 0) {
      if (experimentalTreeDataSupport$2) {
        this._toContentBlocks(this.blockConfigs);
      } else {
        this._toFlatContentBlocks(this.blockConfigs);
      }
    }
    return {
      contentBlocks: this.contentBlocks,
      entityMap: this.entityMap
    };
  };
  _proto._makeBlockConfig = function _makeBlockConfig() {
    var config = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {};
    var key = config.key || generateRandomKey$5();
    var block = _objectSpread$5({
      key,
      type: this.currentBlockType,
      text: this.currentText,
      characterList: this.characterList,
      depth: this.currentDepth,
      parent: null,
      children: List$3(),
      prevSibling: null,
      nextSibling: null,
      childConfigs: []
    }, config);
    this.characterList = List$3();
    this.currentBlockType = "unstyled";
    this.currentText = "";
    return block;
  };
  _proto._toBlockConfigs = function _toBlockConfigs(nodes, style) {
    var blockConfigs = [];
    for (var i = 0; i < nodes.length; i++) {
      var node = nodes[i];
      var nodeName = node.nodeName.toLowerCase();
      if (nodeName === "body" || isListNode(nodeName)) {
        this._trimCurrentText();
        if (this.currentText !== "") {
          blockConfigs.push(this._makeBlockConfig());
        }
        var wasCurrentDepth = this.currentDepth;
        var wasWrapper = this.wrapper;
        if (isListNode(nodeName)) {
          this.wrapper = nodeName;
          if (isListNode(wasWrapper)) {
            this.currentDepth++;
          }
        }
        blockConfigs.push.apply(blockConfigs, this._toBlockConfigs(Array.from(node.childNodes), style));
        this.currentDepth = wasCurrentDepth;
        this.wrapper = wasWrapper;
        continue;
      }
      var blockType = this.blockTypeMap.get(nodeName);
      if (blockType !== void 0) {
        this._trimCurrentText();
        if (this.currentText !== "") {
          blockConfigs.push(this._makeBlockConfig());
        }
        var _wasCurrentDepth = this.currentDepth;
        var _wasWrapper = this.wrapper;
        this.wrapper = nodeName === "pre" ? "pre" : this.wrapper;
        if (typeof blockType !== "string") {
          blockType = this.disambiguate(nodeName, this.wrapper) || blockType[0] || "unstyled";
        }
        if (!experimentalTreeDataSupport$2 && isHTMLElement$1(node) && (blockType === "unordered-list-item" || blockType === "ordered-list-item")) {
          var htmlElement = node;
          this.currentDepth = getListItemDepth(htmlElement, this.currentDepth);
        }
        var key = generateRandomKey$5();
        var childConfigs = this._toBlockConfigs(Array.from(node.childNodes), style);
        this._trimCurrentText();
        blockConfigs.push(this._makeBlockConfig({
          key,
          childConfigs,
          type: blockType
        }));
        this.currentDepth = _wasCurrentDepth;
        this.wrapper = _wasWrapper;
        continue;
      }
      if (nodeName === "#text") {
        this._addTextNode(node, style);
        continue;
      }
      if (nodeName === "br") {
        this._addBreakNode(node, style);
        continue;
      }
      if (isValidImage(node)) {
        this._addImgNode(node, style);
        continue;
      }
      if (isValidAnchor(node)) {
        this._addAnchorNode(node, blockConfigs, style);
        continue;
      }
      var newStyle = style;
      if (HTMLTagToRawInlineStyleMap.has(nodeName)) {
        newStyle = newStyle.add(HTMLTagToRawInlineStyleMap.get(nodeName));
      }
      newStyle = styleFromNodeAttributes(node, newStyle);
      var inlineStyle = detectInlineStyle(node);
      if (inlineStyle != null) {
        newStyle = newStyle.add(inlineStyle);
      }
      blockConfigs.push.apply(blockConfigs, this._toBlockConfigs(Array.from(node.childNodes), newStyle));
    }
    return blockConfigs;
  };
  _proto._appendText = function _appendText(text, style) {
    var _this$characterList;
    this.currentText += text;
    var characterMetadata = CharacterMetadata$3.create({
      style,
      entity: this.currentEntity
    });
    this.characterList = (_this$characterList = this.characterList).push.apply(_this$characterList, Array(text.length).fill(characterMetadata));
  };
  _proto._trimCurrentText = function _trimCurrentText() {
    var l = this.currentText.length;
    var begin = l - this.currentText.trimLeft().length;
    var end = this.currentText.trimRight().length;
    var entity = this.characterList.findEntry(function(characterMetadata) {
      return characterMetadata.getEntity() !== null;
    });
    begin = entity !== void 0 ? Math.min(begin, entity[0]) : begin;
    entity = this.characterList.reverse().findEntry(function(characterMetadata) {
      return characterMetadata.getEntity() !== null;
    });
    end = entity !== void 0 ? Math.max(end, l - entity[0]) : end;
    if (begin > end) {
      this.currentText = "";
      this.characterList = List$3();
    } else {
      this.currentText = this.currentText.slice(begin, end);
      this.characterList = this.characterList.slice(begin, end);
    }
  };
  _proto._addTextNode = function _addTextNode(node, style) {
    var text = node.textContent;
    var trimmedText = text.trim();
    if (trimmedText === "" && this.wrapper !== "pre") {
      text = " ";
    }
    if (this.wrapper !== "pre") {
      text = text.replace(REGEX_LEADING_LF, "");
      text = text.replace(REGEX_LF, SPACE);
    }
    this._appendText(text, style);
  };
  _proto._addBreakNode = function _addBreakNode(node, style) {
    if (!isHTMLBRElement(node)) {
      return;
    }
    this._appendText("\n", style);
  };
  _proto._addImgNode = function _addImgNode(node, style) {
    if (!isHTMLImageElement(node)) {
      return;
    }
    var image = node;
    var entityConfig = {};
    imgAttr.forEach(function(attr) {
      var imageAttribute = image.getAttribute(attr);
      if (imageAttribute) {
        entityConfig[attr] = imageAttribute;
      }
    });
    this.currentEntity = this.entityMap.__create("IMAGE", "IMMUTABLE", entityConfig);
    if (gkx$3("draftjs_fix_paste_for_img")) {
      if (image.getAttribute("role") !== "presentation") {
        this._appendText("\u{1F4F7}", style);
      }
    } else {
      this._appendText("\u{1F4F7}", style);
    }
    this.currentEntity = null;
  };
  _proto._addAnchorNode = function _addAnchorNode(node, blockConfigs, style) {
    if (!isHTMLAnchorElement(node)) {
      return;
    }
    var anchor = node;
    var entityConfig = {};
    anchorAttr.forEach(function(attr) {
      var anchorAttribute = anchor.getAttribute(attr);
      if (anchorAttribute) {
        entityConfig[attr] = anchorAttribute;
      }
    });
    entityConfig.url = new URI(anchor.href).toString();
    this.currentEntity = this.entityMap.__create("LINK", "MUTABLE", entityConfig || {});
    blockConfigs.push.apply(blockConfigs, this._toBlockConfigs(Array.from(node.childNodes), style));
    this.currentEntity = null;
  };
  _proto._toContentBlocks = function _toContentBlocks(blockConfigs) {
    var parent = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : null;
    var l = blockConfigs.length - 1;
    for (var i = 0; i <= l; i++) {
      var config = blockConfigs[i];
      config.parent = parent;
      config.prevSibling = i > 0 ? blockConfigs[i - 1].key : null;
      config.nextSibling = i < l ? blockConfigs[i + 1].key : null;
      config.children = List$3(config.childConfigs.map(function(child) {
        return child.key;
      }));
      this.contentBlocks.push(new ContentBlockNode$3(_objectSpread$5({}, config)));
      this._toContentBlocks(config.childConfigs, config.key);
    }
  };
  _proto._hoistContainersInBlockConfigs = function _hoistContainersInBlockConfigs(blockConfigs) {
    var _this = this;
    var hoisted = List$3(blockConfigs).flatMap(function(blockConfig) {
      if (blockConfig.type !== "unstyled" || blockConfig.text !== "") {
        return [blockConfig];
      }
      return _this._hoistContainersInBlockConfigs(blockConfig.childConfigs);
    });
    return hoisted;
  };
  _proto._toFlatContentBlocks = function _toFlatContentBlocks(blockConfigs) {
    var _this2 = this;
    var cleanConfigs = this._hoistContainersInBlockConfigs(blockConfigs);
    cleanConfigs.forEach(function(config) {
      var _this2$_extractTextFr = _this2._extractTextFromBlockConfigs(config.childConfigs), text = _this2$_extractTextFr.text, characterList = _this2$_extractTextFr.characterList;
      _this2.contentBlocks.push(new ContentBlock$4(_objectSpread$5({}, config, {
        text: config.text + text,
        characterList: config.characterList.concat(characterList)
      })));
    });
  };
  _proto._extractTextFromBlockConfigs = function _extractTextFromBlockConfigs(blockConfigs) {
    var l = blockConfigs.length - 1;
    var text = "";
    var characterList = List$3();
    for (var i = 0; i <= l; i++) {
      var config = blockConfigs[i];
      text += config.text;
      characterList = characterList.concat(config.characterList);
      if (text !== "" && config.type !== "unstyled") {
        text += "\n";
        characterList = characterList.push(characterList.last());
      }
      var children = this._extractTextFromBlockConfigs(config.childConfigs);
      text += children.text;
      characterList = characterList.concat(children.characterList);
    }
    return {
      text,
      characterList
    };
  };
  return ContentBlocksBuilder2;
}();
var convertFromHTMLToContentBlocks$1 = function convertFromHTMLToContentBlocks(html) {
  var DOMBuilder = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : getSafeBodyFromHTML$1;
  var blockRenderMap = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : DefaultDraftBlockRenderMap$2;
  html = html.trim().replace(REGEX_CR, "").replace(REGEX_NBSP, SPACE).replace(REGEX_CARRIAGE, "").replace(REGEX_ZWS, "");
  var safeBody = DOMBuilder(html);
  if (!safeBody) {
    return null;
  }
  var blockTypeMap = buildBlockTypeMap(blockRenderMap);
  var disambiguate = function disambiguate2(tag, wrapper) {
    if (tag === "li") {
      return wrapper === "ol" ? "ordered-list-item" : "unordered-list-item";
    }
    return null;
  };
  return new ContentBlocksBuilder(blockTypeMap, disambiguate).addDOMNode(safeBody).getContentBlocks();
};
var convertFromHTMLToContentBlocks_1 = convertFromHTMLToContentBlocks$1;
function _objectSpread$4(target) {
  for (var i = 1; i < arguments.length; i++) {
    var source = arguments[i] != null ? arguments[i] : {};
    var ownKeys = Object.keys(source);
    if (typeof Object.getOwnPropertySymbols === "function") {
      ownKeys = ownKeys.concat(Object.getOwnPropertySymbols(source).filter(function(sym) {
        return Object.getOwnPropertyDescriptor(source, sym).enumerable;
      }));
    }
    ownKeys.forEach(function(key) {
      _defineProperty$4(target, key, source[key]);
    });
  }
  return target;
}
function _defineProperty$4(obj, key, value) {
  if (key in obj) {
    Object.defineProperty(obj, key, { value, enumerable: true, configurable: true, writable: true });
  } else {
    obj[key] = value;
  }
  return obj;
}
var ContentBlock$3 = ContentBlock_1;
var ContentBlockNode$2 = ContentBlockNode_1;
var convertFromHTMLToContentBlocks2 = convertFromHTMLToContentBlocks_1;
var generateRandomKey$4 = generateRandomKey_1;
var getSafeBodyFromHTML = getSafeBodyFromHTML_1;
var gkx$2 = gkx$8;
var Immutable$2 = immutable.exports;
var sanitizeDraftText = sanitizeDraftText_1;
var List$2 = Immutable$2.List, Repeat = Immutable$2.Repeat;
var experimentalTreeDataSupport$1 = gkx$2("draft_tree_data_support");
var ContentBlockRecord = experimentalTreeDataSupport$1 ? ContentBlockNode$2 : ContentBlock$3;
var DraftPasteProcessor$1 = {
  processHTML: function processHTML(html, blockRenderMap) {
    return convertFromHTMLToContentBlocks2(html, getSafeBodyFromHTML, blockRenderMap);
  },
  processText: function processText(textBlocks, character, type) {
    return textBlocks.reduce(function(acc, textLine, index) {
      textLine = sanitizeDraftText(textLine);
      var key = generateRandomKey$4();
      var blockNodeConfig = {
        key,
        type,
        text: textLine,
        characterList: List$2(Repeat(character, textLine.length))
      };
      if (experimentalTreeDataSupport$1 && index !== 0) {
        var prevSiblingIndex = index - 1;
        var previousBlock = acc[prevSiblingIndex] = acc[prevSiblingIndex].merge({
          nextSibling: key
        });
        blockNodeConfig = _objectSpread$4({}, blockNodeConfig, {
          prevSibling: previousBlock.getKey()
        });
      }
      acc.push(new ContentBlockRecord(blockNodeConfig));
      return acc;
    }, []);
  }
};
var DraftPasteProcessor_1 = DraftPasteProcessor$1;
function adjustBlockDepthForContentState$1(contentState, selectionState, adjustment, maxDepth) {
  var startKey = selectionState.getStartKey();
  var endKey = selectionState.getEndKey();
  var blockMap = contentState.getBlockMap();
  var blocks = blockMap.toSeq().skipUntil(function(_, k) {
    return k === startKey;
  }).takeUntil(function(_, k) {
    return k === endKey;
  }).concat([[endKey, blockMap.get(endKey)]]).map(function(block) {
    var depth = block.getDepth() + adjustment;
    depth = Math.max(0, Math.min(depth, maxDepth));
    return block.set("depth", depth);
  });
  blockMap = blockMap.merge(blocks);
  return contentState.merge({
    blockMap,
    selectionBefore: selectionState,
    selectionAfter: selectionState
  });
}
var adjustBlockDepthForContentState_1 = adjustBlockDepthForContentState$1;
var DraftModifier$2 = DraftModifier_1;
var EditorState$3 = EditorState_1;
var adjustBlockDepthForContentState = adjustBlockDepthForContentState_1;
var nullthrows$1 = nullthrows_1;
var RichTextEditorUtil$2 = {
  currentBlockContainsLink: function currentBlockContainsLink(editorState) {
    var selection = editorState.getSelection();
    var contentState = editorState.getCurrentContent();
    var entityMap = contentState.getEntityMap();
    return contentState.getBlockForKey(selection.getAnchorKey()).getCharacterList().slice(selection.getStartOffset(), selection.getEndOffset()).some(function(v) {
      var entity = v.getEntity();
      return !!entity && entityMap.__get(entity).getType() === "LINK";
    });
  },
  getCurrentBlockType: function getCurrentBlockType(editorState) {
    var selection = editorState.getSelection();
    return editorState.getCurrentContent().getBlockForKey(selection.getStartKey()).getType();
  },
  getDataObjectForLinkURL: function getDataObjectForLinkURL(uri) {
    return {
      url: uri.toString()
    };
  },
  handleKeyCommand: function handleKeyCommand(editorState, command, eventTimeStamp) {
    switch (command) {
      case "bold":
        return RichTextEditorUtil$2.toggleInlineStyle(editorState, "BOLD");
      case "italic":
        return RichTextEditorUtil$2.toggleInlineStyle(editorState, "ITALIC");
      case "underline":
        return RichTextEditorUtil$2.toggleInlineStyle(editorState, "UNDERLINE");
      case "code":
        return RichTextEditorUtil$2.toggleCode(editorState);
      case "backspace":
      case "backspace-word":
      case "backspace-to-start-of-line":
        return RichTextEditorUtil$2.onBackspace(editorState);
      case "delete":
      case "delete-word":
      case "delete-to-end-of-block":
        return RichTextEditorUtil$2.onDelete(editorState);
      default:
        return null;
    }
  },
  insertSoftNewline: function insertSoftNewline(editorState) {
    var contentState = DraftModifier$2.insertText(editorState.getCurrentContent(), editorState.getSelection(), "\n", editorState.getCurrentInlineStyle(), null);
    var newEditorState = EditorState$3.push(editorState, contentState, "insert-characters");
    return EditorState$3.forceSelection(newEditorState, contentState.getSelectionAfter());
  },
  onBackspace: function onBackspace(editorState) {
    var selection = editorState.getSelection();
    if (!selection.isCollapsed() || selection.getAnchorOffset() || selection.getFocusOffset()) {
      return null;
    }
    var content = editorState.getCurrentContent();
    var startKey = selection.getStartKey();
    var blockBefore = content.getBlockBefore(startKey);
    if (blockBefore && blockBefore.getType() === "atomic") {
      var blockMap = content.getBlockMap()["delete"](blockBefore.getKey());
      var withoutAtomicBlock = content.merge({
        blockMap,
        selectionAfter: selection
      });
      if (withoutAtomicBlock !== content) {
        return EditorState$3.push(editorState, withoutAtomicBlock, "remove-range");
      }
    }
    var withoutBlockStyle = RichTextEditorUtil$2.tryToRemoveBlockStyle(editorState);
    if (withoutBlockStyle) {
      return EditorState$3.push(editorState, withoutBlockStyle, "change-block-type");
    }
    return null;
  },
  onDelete: function onDelete(editorState) {
    var selection = editorState.getSelection();
    if (!selection.isCollapsed()) {
      return null;
    }
    var content = editorState.getCurrentContent();
    var startKey = selection.getStartKey();
    var block = content.getBlockForKey(startKey);
    var length = block.getLength();
    if (selection.getStartOffset() < length) {
      return null;
    }
    var blockAfter = content.getBlockAfter(startKey);
    if (!blockAfter || blockAfter.getType() !== "atomic") {
      return null;
    }
    var atomicBlockTarget = selection.merge({
      focusKey: blockAfter.getKey(),
      focusOffset: blockAfter.getLength()
    });
    var withoutAtomicBlock = DraftModifier$2.removeRange(content, atomicBlockTarget, "forward");
    if (withoutAtomicBlock !== content) {
      return EditorState$3.push(editorState, withoutAtomicBlock, "remove-range");
    }
    return null;
  },
  onTab: function onTab(event, editorState, maxDepth) {
    var selection = editorState.getSelection();
    var key = selection.getAnchorKey();
    if (key !== selection.getFocusKey()) {
      return editorState;
    }
    var content = editorState.getCurrentContent();
    var block = content.getBlockForKey(key);
    var type = block.getType();
    if (type !== "unordered-list-item" && type !== "ordered-list-item") {
      return editorState;
    }
    event.preventDefault();
    var depth = block.getDepth();
    if (!event.shiftKey && depth === maxDepth) {
      return editorState;
    }
    var withAdjustment = adjustBlockDepthForContentState(content, selection, event.shiftKey ? -1 : 1, maxDepth);
    return EditorState$3.push(editorState, withAdjustment, "adjust-depth");
  },
  toggleBlockType: function toggleBlockType(editorState, blockType) {
    var selection = editorState.getSelection();
    var startKey = selection.getStartKey();
    var endKey = selection.getEndKey();
    var content = editorState.getCurrentContent();
    var target = selection;
    if (startKey !== endKey && selection.getEndOffset() === 0) {
      var blockBefore = nullthrows$1(content.getBlockBefore(endKey));
      endKey = blockBefore.getKey();
      target = target.merge({
        anchorKey: startKey,
        anchorOffset: selection.getStartOffset(),
        focusKey: endKey,
        focusOffset: blockBefore.getLength(),
        isBackward: false
      });
    }
    var hasAtomicBlock = content.getBlockMap().skipWhile(function(_, k) {
      return k !== startKey;
    }).reverse().skipWhile(function(_, k) {
      return k !== endKey;
    }).some(function(v) {
      return v.getType() === "atomic";
    });
    if (hasAtomicBlock) {
      return editorState;
    }
    var typeToSet = content.getBlockForKey(startKey).getType() === blockType ? "unstyled" : blockType;
    return EditorState$3.push(editorState, DraftModifier$2.setBlockType(content, target, typeToSet), "change-block-type");
  },
  toggleCode: function toggleCode(editorState) {
    var selection = editorState.getSelection();
    var anchorKey = selection.getAnchorKey();
    var focusKey = selection.getFocusKey();
    if (selection.isCollapsed() || anchorKey !== focusKey) {
      return RichTextEditorUtil$2.toggleBlockType(editorState, "code-block");
    }
    return RichTextEditorUtil$2.toggleInlineStyle(editorState, "CODE");
  },
  toggleInlineStyle: function toggleInlineStyle(editorState, inlineStyle) {
    var selection = editorState.getSelection();
    var currentStyle = editorState.getCurrentInlineStyle();
    if (selection.isCollapsed()) {
      return EditorState$3.setInlineStyleOverride(editorState, currentStyle.has(inlineStyle) ? currentStyle.remove(inlineStyle) : currentStyle.add(inlineStyle));
    }
    var content = editorState.getCurrentContent();
    var newContent;
    if (currentStyle.has(inlineStyle)) {
      newContent = DraftModifier$2.removeInlineStyle(content, selection, inlineStyle);
    } else {
      newContent = DraftModifier$2.applyInlineStyle(content, selection, inlineStyle);
    }
    return EditorState$3.push(editorState, newContent, "change-inline-style");
  },
  toggleLink: function toggleLink(editorState, targetSelection, entityKey) {
    var withoutLink = DraftModifier$2.applyEntity(editorState.getCurrentContent(), targetSelection, entityKey);
    return EditorState$3.push(editorState, withoutLink, "apply-entity");
  },
  tryToRemoveBlockStyle: function tryToRemoveBlockStyle(editorState) {
    var selection = editorState.getSelection();
    var offset = selection.getAnchorOffset();
    if (selection.isCollapsed() && offset === 0) {
      var key = selection.getAnchorKey();
      var content = editorState.getCurrentContent();
      var block = content.getBlockForKey(key);
      var type = block.getType();
      var blockBefore = content.getBlockBefore(key);
      if (type === "code-block" && blockBefore && blockBefore.getType() === "code-block" && blockBefore.getLength() !== 0) {
        return null;
      }
      if (type !== "unstyled") {
        return DraftModifier$2.setBlockType(content, selection, "unstyled");
      }
    }
    return null;
  }
};
var RichTextEditorUtil_1 = RichTextEditorUtil$2;
var NEWLINE_REGEX = /\r\n?|\n/g;
function splitTextIntoTextBlocks$1(text) {
  return text.split(NEWLINE_REGEX);
}
var splitTextIntoTextBlocks_1 = splitTextIntoTextBlocks$1;
var BlockMapBuilder$1 = BlockMapBuilder_1;
var CharacterMetadata$2 = CharacterMetadata_1;
var DataTransfer = DataTransfer_1;
var DraftModifier$1 = DraftModifier_1;
var DraftPasteProcessor = DraftPasteProcessor_1;
var EditorState$2 = EditorState_1;
var RichTextEditorUtil$1 = RichTextEditorUtil_1;
var getEntityKeyForSelection = getEntityKeyForSelection_1;
var getTextContentFromFiles = getTextContentFromFiles_1;
var isEventHandled = isEventHandled_1;
var splitTextIntoTextBlocks = splitTextIntoTextBlocks_1;
function editOnPaste(editor, e) {
  e.preventDefault();
  var data = new DataTransfer(e.clipboardData);
  if (!data.isRichText()) {
    var files = data.getFiles();
    var defaultFileText = data.getText();
    if (files.length > 0) {
      if (editor.props.handlePastedFiles && isEventHandled(editor.props.handlePastedFiles(files))) {
        return;
      }
      getTextContentFromFiles(files, function(fileText) {
        fileText = fileText || defaultFileText;
        if (!fileText) {
          return;
        }
        var editorState2 = editor._latestEditorState;
        var blocks = splitTextIntoTextBlocks(fileText);
        var character2 = CharacterMetadata$2.create({
          style: editorState2.getCurrentInlineStyle(),
          entity: getEntityKeyForSelection(editorState2.getCurrentContent(), editorState2.getSelection())
        });
        var currentBlockType2 = RichTextEditorUtil$1.getCurrentBlockType(editorState2);
        var text2 = DraftPasteProcessor.processText(blocks, character2, currentBlockType2);
        var fragment = BlockMapBuilder$1.createFromArray(text2);
        var withInsertedText = DraftModifier$1.replaceWithFragment(editorState2.getCurrentContent(), editorState2.getSelection(), fragment);
        editor.update(EditorState$2.push(editorState2, withInsertedText, "insert-fragment"));
      });
      return;
    }
  }
  var textBlocks = [];
  var text = data.getText();
  var html = data.getHTML();
  var editorState = editor._latestEditorState;
  if (editor.props.formatPastedText) {
    var _editor$props$formatP = editor.props.formatPastedText(text, html), formattedText = _editor$props$formatP.text, formattedHtml = _editor$props$formatP.html;
    text = formattedText;
    html = formattedHtml;
  }
  if (editor.props.handlePastedText && isEventHandled(editor.props.handlePastedText(text, html, editorState))) {
    return;
  }
  if (text) {
    textBlocks = splitTextIntoTextBlocks(text);
  }
  if (!editor.props.stripPastedStyles) {
    var internalClipboard = editor.getClipboard();
    if (!editor.props.formatPastedText && data.isRichText() && internalClipboard) {
      var _html;
      if (((_html = html) === null || _html === void 0 ? void 0 : _html.indexOf(editor.getEditorKey())) !== -1 || textBlocks.length === 1 && internalClipboard.size === 1 && internalClipboard.first().getText() === text) {
        editor.update(insertFragment2(editor._latestEditorState, internalClipboard));
        return;
      }
    } else if (internalClipboard && data.types.includes("com.apple.webarchive") && !data.types.includes("text/html") && areTextBlocksAndClipboardEqual(textBlocks, internalClipboard)) {
      editor.update(insertFragment2(editor._latestEditorState, internalClipboard));
      return;
    }
    if (html) {
      var htmlFragment = DraftPasteProcessor.processHTML(html, editor.props.blockRenderMap);
      if (htmlFragment) {
        var contentBlocks = htmlFragment.contentBlocks, entityMap = htmlFragment.entityMap;
        if (contentBlocks) {
          var htmlMap = BlockMapBuilder$1.createFromArray(contentBlocks);
          editor.update(insertFragment2(editor._latestEditorState, htmlMap, entityMap));
          return;
        }
      }
    }
    editor.setClipboard(null);
  }
  if (textBlocks.length) {
    var character = CharacterMetadata$2.create({
      style: editorState.getCurrentInlineStyle(),
      entity: getEntityKeyForSelection(editorState.getCurrentContent(), editorState.getSelection())
    });
    var currentBlockType = RichTextEditorUtil$1.getCurrentBlockType(editorState);
    var textFragment = DraftPasteProcessor.processText(textBlocks, character, currentBlockType);
    var textMap = BlockMapBuilder$1.createFromArray(textFragment);
    editor.update(insertFragment2(editor._latestEditorState, textMap));
  }
}
function insertFragment2(editorState, fragment, entityMap) {
  var newContent = DraftModifier$1.replaceWithFragment(editorState.getCurrentContent(), editorState.getSelection(), fragment);
  return EditorState$2.push(editorState, newContent.set("entityMap", entityMap), "insert-fragment");
}
function areTextBlocksAndClipboardEqual(textBlocks, blockMap) {
  return textBlocks.length === blockMap.size && blockMap.valueSeq().every(function(block, ii2) {
    return block.getText() === textBlocks[ii2];
  });
}
var editOnPaste_1 = editOnPaste;
var UserAgent$2 = UserAgent_1;
var onBeforeInput = editOnBeforeInput_1;
var onBlur = editOnBlur_1;
var onCompositionStart2 = editOnCompositionStart_1;
var onCopy = editOnCopy_1;
var onCut = editOnCut_1;
var onDragOver = editOnDragOver_1;
var onDragStart = editOnDragStart_1;
var onFocus = editOnFocus_1;
var onInput = editOnInput_1;
var onKeyDown2 = editOnKeyDown_1;
var onPaste = editOnPaste_1;
var onSelect = editOnSelect_1;
var isChrome = UserAgent$2.isBrowser("Chrome");
var isFirefox = UserAgent$2.isBrowser("Firefox");
var selectionHandler = isChrome || isFirefox ? onSelect : function(e) {
};
var DraftEditorEditHandler$1 = {
  onBeforeInput,
  onBlur,
  onCompositionStart: onCompositionStart2,
  onCopy,
  onCut,
  onDragOver,
  onDragStart,
  onFocus,
  onInput,
  onKeyDown: onKeyDown2,
  onPaste,
  onSelect,
  onMouseUp: selectionHandler,
  onKeyUp: selectionHandler
};
var DraftEditorEditHandler_1 = DraftEditorEditHandler$1;
var reactDom = { exports: {} };
var reactDom_production_min = {};
var scheduler = { exports: {} };
var scheduler_production_min = {};
/** @license React v0.20.2
 * scheduler.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
(function(exports2) {
  var f, g, h, k;
  if (typeof performance === "object" && typeof performance.now === "function") {
    var l = performance;
    exports2.unstable_now = function() {
      return l.now();
    };
  } else {
    var p = Date, q = p.now();
    exports2.unstable_now = function() {
      return p.now() - q;
    };
  }
  if (typeof window === "undefined" || typeof MessageChannel !== "function") {
    var t = null, u = null, w = function() {
      if (t !== null)
        try {
          var a = exports2.unstable_now();
          t(true, a);
          t = null;
        } catch (b) {
          throw setTimeout(w, 0), b;
        }
    };
    f = function(a) {
      t !== null ? setTimeout(f, 0, a) : (t = a, setTimeout(w, 0));
    };
    g = function(a, b) {
      u = setTimeout(a, b);
    };
    h = function() {
      clearTimeout(u);
    };
    exports2.unstable_shouldYield = function() {
      return false;
    };
    k = exports2.unstable_forceFrameRate = function() {
    };
  } else {
    var x = window.setTimeout, y2 = window.clearTimeout;
    if (typeof console !== "undefined") {
      var z = window.cancelAnimationFrame;
      typeof window.requestAnimationFrame !== "function" && console.error("This browser doesn't support requestAnimationFrame. Make sure that you load a polyfill in older browsers. https://reactjs.org/link/react-polyfills");
      typeof z !== "function" && console.error("This browser doesn't support cancelAnimationFrame. Make sure that you load a polyfill in older browsers. https://reactjs.org/link/react-polyfills");
    }
    var A = false, B2 = null, C = -1, D2 = 5, E = 0;
    exports2.unstable_shouldYield = function() {
      return exports2.unstable_now() >= E;
    };
    k = function() {
    };
    exports2.unstable_forceFrameRate = function(a) {
      0 > a || 125 < a ? console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported") : D2 = 0 < a ? Math.floor(1e3 / a) : 5;
    };
    var F2 = new MessageChannel(), G2 = F2.port2;
    F2.port1.onmessage = function() {
      if (B2 !== null) {
        var a = exports2.unstable_now();
        E = a + D2;
        try {
          B2(true, a) ? G2.postMessage(null) : (A = false, B2 = null);
        } catch (b) {
          throw G2.postMessage(null), b;
        }
      } else
        A = false;
    };
    f = function(a) {
      B2 = a;
      A || (A = true, G2.postMessage(null));
    };
    g = function(a, b) {
      C = x(function() {
        a(exports2.unstable_now());
      }, b);
    };
    h = function() {
      y2(C);
      C = -1;
    };
  }
  function H2(a, b) {
    var c = a.length;
    a.push(b);
    a:
      for (; ; ) {
        var d = c - 1 >>> 1, e = a[d];
        if (e !== void 0 && 0 < I2(e, b))
          a[d] = b, a[c] = e, c = d;
        else
          break a;
      }
  }
  function J(a) {
    a = a[0];
    return a === void 0 ? null : a;
  }
  function K(a) {
    var b = a[0];
    if (b !== void 0) {
      var c = a.pop();
      if (c !== b) {
        a[0] = c;
        a:
          for (var d = 0, e = a.length; d < e; ) {
            var m2 = 2 * (d + 1) - 1, n = a[m2], v = m2 + 1, r2 = a[v];
            if (n !== void 0 && 0 > I2(n, c))
              r2 !== void 0 && 0 > I2(r2, n) ? (a[d] = r2, a[v] = c, d = v) : (a[d] = n, a[m2] = c, d = m2);
            else if (r2 !== void 0 && 0 > I2(r2, c))
              a[d] = r2, a[v] = c, d = v;
            else
              break a;
          }
      }
      return b;
    }
    return null;
  }
  function I2(a, b) {
    var c = a.sortIndex - b.sortIndex;
    return c !== 0 ? c : a.id - b.id;
  }
  var L = [], M2 = [], N2 = 1, O2 = null, P2 = 3, Q = false, R2 = false, S2 = false;
  function T2(a) {
    for (var b = J(M2); b !== null; ) {
      if (b.callback === null)
        K(M2);
      else if (b.startTime <= a)
        K(M2), b.sortIndex = b.expirationTime, H2(L, b);
      else
        break;
      b = J(M2);
    }
  }
  function U2(a) {
    S2 = false;
    T2(a);
    if (!R2)
      if (J(L) !== null)
        R2 = true, f(V2);
      else {
        var b = J(M2);
        b !== null && g(U2, b.startTime - a);
      }
  }
  function V2(a, b) {
    R2 = false;
    S2 && (S2 = false, h());
    Q = true;
    var c = P2;
    try {
      T2(b);
      for (O2 = J(L); O2 !== null && (!(O2.expirationTime > b) || a && !exports2.unstable_shouldYield()); ) {
        var d = O2.callback;
        if (typeof d === "function") {
          O2.callback = null;
          P2 = O2.priorityLevel;
          var e = d(O2.expirationTime <= b);
          b = exports2.unstable_now();
          typeof e === "function" ? O2.callback = e : O2 === J(L) && K(L);
          T2(b);
        } else
          K(L);
        O2 = J(L);
      }
      if (O2 !== null)
        var m2 = true;
      else {
        var n = J(M2);
        n !== null && g(U2, n.startTime - b);
        m2 = false;
      }
      return m2;
    } finally {
      O2 = null, P2 = c, Q = false;
    }
  }
  var W2 = k;
  exports2.unstable_IdlePriority = 5;
  exports2.unstable_ImmediatePriority = 1;
  exports2.unstable_LowPriority = 4;
  exports2.unstable_NormalPriority = 3;
  exports2.unstable_Profiling = null;
  exports2.unstable_UserBlockingPriority = 2;
  exports2.unstable_cancelCallback = function(a) {
    a.callback = null;
  };
  exports2.unstable_continueExecution = function() {
    R2 || Q || (R2 = true, f(V2));
  };
  exports2.unstable_getCurrentPriorityLevel = function() {
    return P2;
  };
  exports2.unstable_getFirstCallbackNode = function() {
    return J(L);
  };
  exports2.unstable_next = function(a) {
    switch (P2) {
      case 1:
      case 2:
      case 3:
        var b = 3;
        break;
      default:
        b = P2;
    }
    var c = P2;
    P2 = b;
    try {
      return a();
    } finally {
      P2 = c;
    }
  };
  exports2.unstable_pauseExecution = function() {
  };
  exports2.unstable_requestPaint = W2;
  exports2.unstable_runWithPriority = function(a, b) {
    switch (a) {
      case 1:
      case 2:
      case 3:
      case 4:
      case 5:
        break;
      default:
        a = 3;
    }
    var c = P2;
    P2 = a;
    try {
      return b();
    } finally {
      P2 = c;
    }
  };
  exports2.unstable_scheduleCallback = function(a, b, c) {
    var d = exports2.unstable_now();
    typeof c === "object" && c !== null ? (c = c.delay, c = typeof c === "number" && 0 < c ? d + c : d) : c = d;
    switch (a) {
      case 1:
        var e = -1;
        break;
      case 2:
        e = 250;
        break;
      case 5:
        e = 1073741823;
        break;
      case 4:
        e = 1e4;
        break;
      default:
        e = 5e3;
    }
    e = c + e;
    a = { id: N2++, callback: b, priorityLevel: a, startTime: c, expirationTime: e, sortIndex: -1 };
    c > d ? (a.sortIndex = c, H2(M2, a), J(L) === null && a === J(M2) && (S2 ? h() : S2 = true, g(U2, c - d))) : (a.sortIndex = e, H2(L, a), R2 || Q || (R2 = true, f(V2)));
    return a;
  };
  exports2.unstable_wrapCallback = function(a) {
    var b = P2;
    return function() {
      var c = P2;
      P2 = b;
      try {
        return a.apply(this, arguments);
      } finally {
        P2 = c;
      }
    };
  };
})(scheduler_production_min);
{
  scheduler.exports = scheduler_production_min;
}
/** @license React v17.0.2
 * react-dom.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var aa = React__default, m = objectAssign, r = scheduler.exports;
function y(a) {
  for (var b = "https://reactjs.org/docs/error-decoder.html?invariant=" + a, c = 1; c < arguments.length; c++)
    b += "&args[]=" + encodeURIComponent(arguments[c]);
  return "Minified React error #" + a + "; visit " + b + " for the full message or use the non-minified dev environment for full errors and additional helpful warnings.";
}
if (!aa)
  throw Error(y(227));
var ba = /* @__PURE__ */ new Set(), ca = {};
function da(a, b) {
  ea(a, b);
  ea(a + "Capture", b);
}
function ea(a, b) {
  ca[a] = b;
  for (a = 0; a < b.length; a++)
    ba.add(b[a]);
}
var fa = !(typeof window === "undefined" || typeof window.document === "undefined" || typeof window.document.createElement === "undefined"), ha = /^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/, ia = Object.prototype.hasOwnProperty, ja = {}, ka = {};
function la(a) {
  if (ia.call(ka, a))
    return true;
  if (ia.call(ja, a))
    return false;
  if (ha.test(a))
    return ka[a] = true;
  ja[a] = true;
  return false;
}
function ma(a, b, c, d) {
  if (c !== null && c.type === 0)
    return false;
  switch (typeof b) {
    case "function":
    case "symbol":
      return true;
    case "boolean":
      if (d)
        return false;
      if (c !== null)
        return !c.acceptsBooleans;
      a = a.toLowerCase().slice(0, 5);
      return a !== "data-" && a !== "aria-";
    default:
      return false;
  }
}
function na(a, b, c, d) {
  if (b === null || typeof b === "undefined" || ma(a, b, c, d))
    return true;
  if (d)
    return false;
  if (c !== null)
    switch (c.type) {
      case 3:
        return !b;
      case 4:
        return b === false;
      case 5:
        return isNaN(b);
      case 6:
        return isNaN(b) || 1 > b;
    }
  return false;
}
function B(a, b, c, d, e, f, g) {
  this.acceptsBooleans = b === 2 || b === 3 || b === 4;
  this.attributeName = d;
  this.attributeNamespace = e;
  this.mustUseProperty = c;
  this.propertyName = a;
  this.type = b;
  this.sanitizeURL = f;
  this.removeEmptyString = g;
}
var D = {};
"children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style".split(" ").forEach(function(a) {
  D[a] = new B(a, 0, false, a, null, false, false);
});
[["acceptCharset", "accept-charset"], ["className", "class"], ["htmlFor", "for"], ["httpEquiv", "http-equiv"]].forEach(function(a) {
  var b = a[0];
  D[b] = new B(b, 1, false, a[1], null, false, false);
});
["contentEditable", "draggable", "spellCheck", "value"].forEach(function(a) {
  D[a] = new B(a, 2, false, a.toLowerCase(), null, false, false);
});
["autoReverse", "externalResourcesRequired", "focusable", "preserveAlpha"].forEach(function(a) {
  D[a] = new B(a, 2, false, a, null, false, false);
});
"allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope".split(" ").forEach(function(a) {
  D[a] = new B(a, 3, false, a.toLowerCase(), null, false, false);
});
["checked", "multiple", "muted", "selected"].forEach(function(a) {
  D[a] = new B(a, 3, true, a, null, false, false);
});
["capture", "download"].forEach(function(a) {
  D[a] = new B(a, 4, false, a, null, false, false);
});
["cols", "rows", "size", "span"].forEach(function(a) {
  D[a] = new B(a, 6, false, a, null, false, false);
});
["rowSpan", "start"].forEach(function(a) {
  D[a] = new B(a, 5, false, a.toLowerCase(), null, false, false);
});
var oa = /[\-:]([a-z])/g;
function pa(a) {
  return a[1].toUpperCase();
}
"accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height".split(" ").forEach(function(a) {
  var b = a.replace(oa, pa);
  D[b] = new B(b, 1, false, a, null, false, false);
});
"xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type".split(" ").forEach(function(a) {
  var b = a.replace(oa, pa);
  D[b] = new B(b, 1, false, a, "http://www.w3.org/1999/xlink", false, false);
});
["xml:base", "xml:lang", "xml:space"].forEach(function(a) {
  var b = a.replace(oa, pa);
  D[b] = new B(b, 1, false, a, "http://www.w3.org/XML/1998/namespace", false, false);
});
["tabIndex", "crossOrigin"].forEach(function(a) {
  D[a] = new B(a, 1, false, a.toLowerCase(), null, false, false);
});
D.xlinkHref = new B("xlinkHref", 1, false, "xlink:href", "http://www.w3.org/1999/xlink", true, false);
["src", "href", "action", "formAction"].forEach(function(a) {
  D[a] = new B(a, 1, false, a.toLowerCase(), null, true, true);
});
function qa(a, b, c, d) {
  var e = D.hasOwnProperty(b) ? D[b] : null;
  var f = e !== null ? e.type === 0 : d ? false : !(2 < b.length) || b[0] !== "o" && b[0] !== "O" || b[1] !== "n" && b[1] !== "N" ? false : true;
  f || (na(b, c, e, d) && (c = null), d || e === null ? la(b) && (c === null ? a.removeAttribute(b) : a.setAttribute(b, "" + c)) : e.mustUseProperty ? a[e.propertyName] = c === null ? e.type === 3 ? false : "" : c : (b = e.attributeName, d = e.attributeNamespace, c === null ? a.removeAttribute(b) : (e = e.type, c = e === 3 || e === 4 && c === true ? "" : "" + c, d ? a.setAttributeNS(d, b, c) : a.setAttribute(b, c))));
}
var ra = aa.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED, sa = 60103, ta = 60106, ua = 60107, wa = 60108, xa = 60114, ya = 60109, za = 60110, Aa = 60112, Ba = 60113, Ca = 60120, Da = 60115, Ea = 60116, Fa = 60121, Ga = 60128, Ha = 60129, Ia = 60130, Ja = 60131;
if (typeof Symbol === "function" && Symbol.for) {
  var E = Symbol.for;
  sa = E("react.element");
  ta = E("react.portal");
  ua = E("react.fragment");
  wa = E("react.strict_mode");
  xa = E("react.profiler");
  ya = E("react.provider");
  za = E("react.context");
  Aa = E("react.forward_ref");
  Ba = E("react.suspense");
  Ca = E("react.suspense_list");
  Da = E("react.memo");
  Ea = E("react.lazy");
  Fa = E("react.block");
  E("react.scope");
  Ga = E("react.opaque.id");
  Ha = E("react.debug_trace_mode");
  Ia = E("react.offscreen");
  Ja = E("react.legacy_hidden");
}
var Ka = typeof Symbol === "function" && Symbol.iterator;
function La(a) {
  if (a === null || typeof a !== "object")
    return null;
  a = Ka && a[Ka] || a["@@iterator"];
  return typeof a === "function" ? a : null;
}
var Ma;
function Na(a) {
  if (Ma === void 0)
    try {
      throw Error();
    } catch (c) {
      var b = c.stack.trim().match(/\n( *(at )?)/);
      Ma = b && b[1] || "";
    }
  return "\n" + Ma + a;
}
var Oa = false;
function Pa(a, b) {
  if (!a || Oa)
    return "";
  Oa = true;
  var c = Error.prepareStackTrace;
  Error.prepareStackTrace = void 0;
  try {
    if (b)
      if (b = function() {
        throw Error();
      }, Object.defineProperty(b.prototype, "props", { set: function() {
        throw Error();
      } }), typeof Reflect === "object" && Reflect.construct) {
        try {
          Reflect.construct(b, []);
        } catch (k) {
          var d = k;
        }
        Reflect.construct(a, [], b);
      } else {
        try {
          b.call();
        } catch (k) {
          d = k;
        }
        a.call(b.prototype);
      }
    else {
      try {
        throw Error();
      } catch (k) {
        d = k;
      }
      a();
    }
  } catch (k) {
    if (k && d && typeof k.stack === "string") {
      for (var e = k.stack.split("\n"), f = d.stack.split("\n"), g = e.length - 1, h = f.length - 1; 1 <= g && 0 <= h && e[g] !== f[h]; )
        h--;
      for (; 1 <= g && 0 <= h; g--, h--)
        if (e[g] !== f[h]) {
          if (g !== 1 || h !== 1) {
            do
              if (g--, h--, 0 > h || e[g] !== f[h])
                return "\n" + e[g].replace(" at new ", " at ");
            while (1 <= g && 0 <= h);
          }
          break;
        }
    }
  } finally {
    Oa = false, Error.prepareStackTrace = c;
  }
  return (a = a ? a.displayName || a.name : "") ? Na(a) : "";
}
function Qa(a) {
  switch (a.tag) {
    case 5:
      return Na(a.type);
    case 16:
      return Na("Lazy");
    case 13:
      return Na("Suspense");
    case 19:
      return Na("SuspenseList");
    case 0:
    case 2:
    case 15:
      return a = Pa(a.type, false), a;
    case 11:
      return a = Pa(a.type.render, false), a;
    case 22:
      return a = Pa(a.type._render, false), a;
    case 1:
      return a = Pa(a.type, true), a;
    default:
      return "";
  }
}
function Ra(a) {
  if (a == null)
    return null;
  if (typeof a === "function")
    return a.displayName || a.name || null;
  if (typeof a === "string")
    return a;
  switch (a) {
    case ua:
      return "Fragment";
    case ta:
      return "Portal";
    case xa:
      return "Profiler";
    case wa:
      return "StrictMode";
    case Ba:
      return "Suspense";
    case Ca:
      return "SuspenseList";
  }
  if (typeof a === "object")
    switch (a.$$typeof) {
      case za:
        return (a.displayName || "Context") + ".Consumer";
      case ya:
        return (a._context.displayName || "Context") + ".Provider";
      case Aa:
        var b = a.render;
        b = b.displayName || b.name || "";
        return a.displayName || (b !== "" ? "ForwardRef(" + b + ")" : "ForwardRef");
      case Da:
        return Ra(a.type);
      case Fa:
        return Ra(a._render);
      case Ea:
        b = a._payload;
        a = a._init;
        try {
          return Ra(a(b));
        } catch (c) {
        }
    }
  return null;
}
function Sa(a) {
  switch (typeof a) {
    case "boolean":
    case "number":
    case "object":
    case "string":
    case "undefined":
      return a;
    default:
      return "";
  }
}
function Ta(a) {
  var b = a.type;
  return (a = a.nodeName) && a.toLowerCase() === "input" && (b === "checkbox" || b === "radio");
}
function Ua(a) {
  var b = Ta(a) ? "checked" : "value", c = Object.getOwnPropertyDescriptor(a.constructor.prototype, b), d = "" + a[b];
  if (!a.hasOwnProperty(b) && typeof c !== "undefined" && typeof c.get === "function" && typeof c.set === "function") {
    var e = c.get, f = c.set;
    Object.defineProperty(a, b, { configurable: true, get: function() {
      return e.call(this);
    }, set: function(a2) {
      d = "" + a2;
      f.call(this, a2);
    } });
    Object.defineProperty(a, b, { enumerable: c.enumerable });
    return { getValue: function() {
      return d;
    }, setValue: function(a2) {
      d = "" + a2;
    }, stopTracking: function() {
      a._valueTracker = null;
      delete a[b];
    } };
  }
}
function Va(a) {
  a._valueTracker || (a._valueTracker = Ua(a));
}
function Wa(a) {
  if (!a)
    return false;
  var b = a._valueTracker;
  if (!b)
    return true;
  var c = b.getValue();
  var d = "";
  a && (d = Ta(a) ? a.checked ? "true" : "false" : a.value);
  a = d;
  return a !== c ? (b.setValue(a), true) : false;
}
function Xa(a) {
  a = a || (typeof document !== "undefined" ? document : void 0);
  if (typeof a === "undefined")
    return null;
  try {
    return a.activeElement || a.body;
  } catch (b) {
    return a.body;
  }
}
function Ya(a, b) {
  var c = b.checked;
  return m({}, b, { defaultChecked: void 0, defaultValue: void 0, value: void 0, checked: c != null ? c : a._wrapperState.initialChecked });
}
function Za(a, b) {
  var c = b.defaultValue == null ? "" : b.defaultValue, d = b.checked != null ? b.checked : b.defaultChecked;
  c = Sa(b.value != null ? b.value : c);
  a._wrapperState = { initialChecked: d, initialValue: c, controlled: b.type === "checkbox" || b.type === "radio" ? b.checked != null : b.value != null };
}
function $a(a, b) {
  b = b.checked;
  b != null && qa(a, "checked", b, false);
}
function ab(a, b) {
  $a(a, b);
  var c = Sa(b.value), d = b.type;
  if (c != null)
    if (d === "number") {
      if (c === 0 && a.value === "" || a.value != c)
        a.value = "" + c;
    } else
      a.value !== "" + c && (a.value = "" + c);
  else if (d === "submit" || d === "reset") {
    a.removeAttribute("value");
    return;
  }
  b.hasOwnProperty("value") ? bb(a, b.type, c) : b.hasOwnProperty("defaultValue") && bb(a, b.type, Sa(b.defaultValue));
  b.checked == null && b.defaultChecked != null && (a.defaultChecked = !!b.defaultChecked);
}
function cb(a, b, c) {
  if (b.hasOwnProperty("value") || b.hasOwnProperty("defaultValue")) {
    var d = b.type;
    if (!(d !== "submit" && d !== "reset" || b.value !== void 0 && b.value !== null))
      return;
    b = "" + a._wrapperState.initialValue;
    c || b === a.value || (a.value = b);
    a.defaultValue = b;
  }
  c = a.name;
  c !== "" && (a.name = "");
  a.defaultChecked = !!a._wrapperState.initialChecked;
  c !== "" && (a.name = c);
}
function bb(a, b, c) {
  if (b !== "number" || Xa(a.ownerDocument) !== a)
    c == null ? a.defaultValue = "" + a._wrapperState.initialValue : a.defaultValue !== "" + c && (a.defaultValue = "" + c);
}
function db(a) {
  var b = "";
  aa.Children.forEach(a, function(a2) {
    a2 != null && (b += a2);
  });
  return b;
}
function eb(a, b) {
  a = m({ children: void 0 }, b);
  if (b = db(b.children))
    a.children = b;
  return a;
}
function fb(a, b, c, d) {
  a = a.options;
  if (b) {
    b = {};
    for (var e = 0; e < c.length; e++)
      b["$" + c[e]] = true;
    for (c = 0; c < a.length; c++)
      e = b.hasOwnProperty("$" + a[c].value), a[c].selected !== e && (a[c].selected = e), e && d && (a[c].defaultSelected = true);
  } else {
    c = "" + Sa(c);
    b = null;
    for (e = 0; e < a.length; e++) {
      if (a[e].value === c) {
        a[e].selected = true;
        d && (a[e].defaultSelected = true);
        return;
      }
      b !== null || a[e].disabled || (b = a[e]);
    }
    b !== null && (b.selected = true);
  }
}
function gb(a, b) {
  if (b.dangerouslySetInnerHTML != null)
    throw Error(y(91));
  return m({}, b, { value: void 0, defaultValue: void 0, children: "" + a._wrapperState.initialValue });
}
function hb(a, b) {
  var c = b.value;
  if (c == null) {
    c = b.children;
    b = b.defaultValue;
    if (c != null) {
      if (b != null)
        throw Error(y(92));
      if (Array.isArray(c)) {
        if (!(1 >= c.length))
          throw Error(y(93));
        c = c[0];
      }
      b = c;
    }
    b == null && (b = "");
    c = b;
  }
  a._wrapperState = { initialValue: Sa(c) };
}
function ib(a, b) {
  var c = Sa(b.value), d = Sa(b.defaultValue);
  c != null && (c = "" + c, c !== a.value && (a.value = c), b.defaultValue == null && a.defaultValue !== c && (a.defaultValue = c));
  d != null && (a.defaultValue = "" + d);
}
function jb(a) {
  var b = a.textContent;
  b === a._wrapperState.initialValue && b !== "" && b !== null && (a.value = b);
}
var kb = { html: "http://www.w3.org/1999/xhtml", mathml: "http://www.w3.org/1998/Math/MathML", svg: "http://www.w3.org/2000/svg" };
function lb(a) {
  switch (a) {
    case "svg":
      return "http://www.w3.org/2000/svg";
    case "math":
      return "http://www.w3.org/1998/Math/MathML";
    default:
      return "http://www.w3.org/1999/xhtml";
  }
}
function mb(a, b) {
  return a == null || a === "http://www.w3.org/1999/xhtml" ? lb(b) : a === "http://www.w3.org/2000/svg" && b === "foreignObject" ? "http://www.w3.org/1999/xhtml" : a;
}
var nb, ob = function(a) {
  return typeof MSApp !== "undefined" && MSApp.execUnsafeLocalFunction ? function(b, c, d, e) {
    MSApp.execUnsafeLocalFunction(function() {
      return a(b, c, d, e);
    });
  } : a;
}(function(a, b) {
  if (a.namespaceURI !== kb.svg || "innerHTML" in a)
    a.innerHTML = b;
  else {
    nb = nb || document.createElement("div");
    nb.innerHTML = "<svg>" + b.valueOf().toString() + "</svg>";
    for (b = nb.firstChild; a.firstChild; )
      a.removeChild(a.firstChild);
    for (; b.firstChild; )
      a.appendChild(b.firstChild);
  }
});
function pb(a, b) {
  if (b) {
    var c = a.firstChild;
    if (c && c === a.lastChild && c.nodeType === 3) {
      c.nodeValue = b;
      return;
    }
  }
  a.textContent = b;
}
var qb = {
  animationIterationCount: true,
  borderImageOutset: true,
  borderImageSlice: true,
  borderImageWidth: true,
  boxFlex: true,
  boxFlexGroup: true,
  boxOrdinalGroup: true,
  columnCount: true,
  columns: true,
  flex: true,
  flexGrow: true,
  flexPositive: true,
  flexShrink: true,
  flexNegative: true,
  flexOrder: true,
  gridArea: true,
  gridRow: true,
  gridRowEnd: true,
  gridRowSpan: true,
  gridRowStart: true,
  gridColumn: true,
  gridColumnEnd: true,
  gridColumnSpan: true,
  gridColumnStart: true,
  fontWeight: true,
  lineClamp: true,
  lineHeight: true,
  opacity: true,
  order: true,
  orphans: true,
  tabSize: true,
  widows: true,
  zIndex: true,
  zoom: true,
  fillOpacity: true,
  floodOpacity: true,
  stopOpacity: true,
  strokeDasharray: true,
  strokeDashoffset: true,
  strokeMiterlimit: true,
  strokeOpacity: true,
  strokeWidth: true
}, rb = ["Webkit", "ms", "Moz", "O"];
Object.keys(qb).forEach(function(a) {
  rb.forEach(function(b) {
    b = b + a.charAt(0).toUpperCase() + a.substring(1);
    qb[b] = qb[a];
  });
});
function sb(a, b, c) {
  return b == null || typeof b === "boolean" || b === "" ? "" : c || typeof b !== "number" || b === 0 || qb.hasOwnProperty(a) && qb[a] ? ("" + b).trim() : b + "px";
}
function tb(a, b) {
  a = a.style;
  for (var c in b)
    if (b.hasOwnProperty(c)) {
      var d = c.indexOf("--") === 0, e = sb(c, b[c], d);
      c === "float" && (c = "cssFloat");
      d ? a.setProperty(c, e) : a[c] = e;
    }
}
var ub = m({ menuitem: true }, { area: true, base: true, br: true, col: true, embed: true, hr: true, img: true, input: true, keygen: true, link: true, meta: true, param: true, source: true, track: true, wbr: true });
function vb(a, b) {
  if (b) {
    if (ub[a] && (b.children != null || b.dangerouslySetInnerHTML != null))
      throw Error(y(137, a));
    if (b.dangerouslySetInnerHTML != null) {
      if (b.children != null)
        throw Error(y(60));
      if (!(typeof b.dangerouslySetInnerHTML === "object" && "__html" in b.dangerouslySetInnerHTML))
        throw Error(y(61));
    }
    if (b.style != null && typeof b.style !== "object")
      throw Error(y(62));
  }
}
function wb(a, b) {
  if (a.indexOf("-") === -1)
    return typeof b.is === "string";
  switch (a) {
    case "annotation-xml":
    case "color-profile":
    case "font-face":
    case "font-face-src":
    case "font-face-uri":
    case "font-face-format":
    case "font-face-name":
    case "missing-glyph":
      return false;
    default:
      return true;
  }
}
function xb(a) {
  a = a.target || a.srcElement || window;
  a.correspondingUseElement && (a = a.correspondingUseElement);
  return a.nodeType === 3 ? a.parentNode : a;
}
var yb = null, zb = null, Ab = null;
function Bb(a) {
  if (a = Cb(a)) {
    if (typeof yb !== "function")
      throw Error(y(280));
    var b = a.stateNode;
    b && (b = Db(b), yb(a.stateNode, a.type, b));
  }
}
function Eb(a) {
  zb ? Ab ? Ab.push(a) : Ab = [a] : zb = a;
}
function Fb() {
  if (zb) {
    var a = zb, b = Ab;
    Ab = zb = null;
    Bb(a);
    if (b)
      for (a = 0; a < b.length; a++)
        Bb(b[a]);
  }
}
function Gb(a, b) {
  return a(b);
}
function Hb(a, b, c, d, e) {
  return a(b, c, d, e);
}
function Ib() {
}
var Jb = Gb, Kb = false, Lb = false;
function Mb() {
  if (zb !== null || Ab !== null)
    Ib(), Fb();
}
function Nb(a, b, c) {
  if (Lb)
    return a(b, c);
  Lb = true;
  try {
    return Jb(a, b, c);
  } finally {
    Lb = false, Mb();
  }
}
function Ob(a, b) {
  var c = a.stateNode;
  if (c === null)
    return null;
  var d = Db(c);
  if (d === null)
    return null;
  c = d[b];
  a:
    switch (b) {
      case "onClick":
      case "onClickCapture":
      case "onDoubleClick":
      case "onDoubleClickCapture":
      case "onMouseDown":
      case "onMouseDownCapture":
      case "onMouseMove":
      case "onMouseMoveCapture":
      case "onMouseUp":
      case "onMouseUpCapture":
      case "onMouseEnter":
        (d = !d.disabled) || (a = a.type, d = !(a === "button" || a === "input" || a === "select" || a === "textarea"));
        a = !d;
        break a;
      default:
        a = false;
    }
  if (a)
    return null;
  if (c && typeof c !== "function")
    throw Error(y(231, b, typeof c));
  return c;
}
var Pb = false;
if (fa)
  try {
    var Qb = {};
    Object.defineProperty(Qb, "passive", { get: function() {
      Pb = true;
    } });
    window.addEventListener("test", Qb, Qb);
    window.removeEventListener("test", Qb, Qb);
  } catch (a) {
    Pb = false;
  }
function Rb(a, b, c, d, e, f, g, h, k) {
  var l = Array.prototype.slice.call(arguments, 3);
  try {
    b.apply(c, l);
  } catch (n) {
    this.onError(n);
  }
}
var Sb = false, Tb = null, Ub = false, Vb = null, Wb = { onError: function(a) {
  Sb = true;
  Tb = a;
} };
function Xb(a, b, c, d, e, f, g, h, k) {
  Sb = false;
  Tb = null;
  Rb.apply(Wb, arguments);
}
function Yb(a, b, c, d, e, f, g, h, k) {
  Xb.apply(this, arguments);
  if (Sb) {
    if (Sb) {
      var l = Tb;
      Sb = false;
      Tb = null;
    } else
      throw Error(y(198));
    Ub || (Ub = true, Vb = l);
  }
}
function Zb(a) {
  var b = a, c = a;
  if (a.alternate)
    for (; b.return; )
      b = b.return;
  else {
    a = b;
    do
      b = a, (b.flags & 1026) !== 0 && (c = b.return), a = b.return;
    while (a);
  }
  return b.tag === 3 ? c : null;
}
function $b(a) {
  if (a.tag === 13) {
    var b = a.memoizedState;
    b === null && (a = a.alternate, a !== null && (b = a.memoizedState));
    if (b !== null)
      return b.dehydrated;
  }
  return null;
}
function ac(a) {
  if (Zb(a) !== a)
    throw Error(y(188));
}
function bc(a) {
  var b = a.alternate;
  if (!b) {
    b = Zb(a);
    if (b === null)
      throw Error(y(188));
    return b !== a ? null : a;
  }
  for (var c = a, d = b; ; ) {
    var e = c.return;
    if (e === null)
      break;
    var f = e.alternate;
    if (f === null) {
      d = e.return;
      if (d !== null) {
        c = d;
        continue;
      }
      break;
    }
    if (e.child === f.child) {
      for (f = e.child; f; ) {
        if (f === c)
          return ac(e), a;
        if (f === d)
          return ac(e), b;
        f = f.sibling;
      }
      throw Error(y(188));
    }
    if (c.return !== d.return)
      c = e, d = f;
    else {
      for (var g = false, h = e.child; h; ) {
        if (h === c) {
          g = true;
          c = e;
          d = f;
          break;
        }
        if (h === d) {
          g = true;
          d = e;
          c = f;
          break;
        }
        h = h.sibling;
      }
      if (!g) {
        for (h = f.child; h; ) {
          if (h === c) {
            g = true;
            c = f;
            d = e;
            break;
          }
          if (h === d) {
            g = true;
            d = f;
            c = e;
            break;
          }
          h = h.sibling;
        }
        if (!g)
          throw Error(y(189));
      }
    }
    if (c.alternate !== d)
      throw Error(y(190));
  }
  if (c.tag !== 3)
    throw Error(y(188));
  return c.stateNode.current === c ? a : b;
}
function cc(a) {
  a = bc(a);
  if (!a)
    return null;
  for (var b = a; ; ) {
    if (b.tag === 5 || b.tag === 6)
      return b;
    if (b.child)
      b.child.return = b, b = b.child;
    else {
      if (b === a)
        break;
      for (; !b.sibling; ) {
        if (!b.return || b.return === a)
          return null;
        b = b.return;
      }
      b.sibling.return = b.return;
      b = b.sibling;
    }
  }
  return null;
}
function dc(a, b) {
  for (var c = a.alternate; b !== null; ) {
    if (b === a || b === c)
      return true;
    b = b.return;
  }
  return false;
}
var ec, fc, gc, hc, ic = false, jc = [], kc = null, lc = null, mc = null, nc = /* @__PURE__ */ new Map(), oc = /* @__PURE__ */ new Map(), pc = [], qc = "mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(" ");
function rc(a, b, c, d, e) {
  return { blockedOn: a, domEventName: b, eventSystemFlags: c | 16, nativeEvent: e, targetContainers: [d] };
}
function sc(a, b) {
  switch (a) {
    case "focusin":
    case "focusout":
      kc = null;
      break;
    case "dragenter":
    case "dragleave":
      lc = null;
      break;
    case "mouseover":
    case "mouseout":
      mc = null;
      break;
    case "pointerover":
    case "pointerout":
      nc.delete(b.pointerId);
      break;
    case "gotpointercapture":
    case "lostpointercapture":
      oc.delete(b.pointerId);
  }
}
function tc(a, b, c, d, e, f) {
  if (a === null || a.nativeEvent !== f)
    return a = rc(b, c, d, e, f), b !== null && (b = Cb(b), b !== null && fc(b)), a;
  a.eventSystemFlags |= d;
  b = a.targetContainers;
  e !== null && b.indexOf(e) === -1 && b.push(e);
  return a;
}
function uc(a, b, c, d, e) {
  switch (b) {
    case "focusin":
      return kc = tc(kc, a, b, c, d, e), true;
    case "dragenter":
      return lc = tc(lc, a, b, c, d, e), true;
    case "mouseover":
      return mc = tc(mc, a, b, c, d, e), true;
    case "pointerover":
      var f = e.pointerId;
      nc.set(f, tc(nc.get(f) || null, a, b, c, d, e));
      return true;
    case "gotpointercapture":
      return f = e.pointerId, oc.set(f, tc(oc.get(f) || null, a, b, c, d, e)), true;
  }
  return false;
}
function vc(a) {
  var b = wc(a.target);
  if (b !== null) {
    var c = Zb(b);
    if (c !== null) {
      if (b = c.tag, b === 13) {
        if (b = $b(c), b !== null) {
          a.blockedOn = b;
          hc(a.lanePriority, function() {
            r.unstable_runWithPriority(a.priority, function() {
              gc(c);
            });
          });
          return;
        }
      } else if (b === 3 && c.stateNode.hydrate) {
        a.blockedOn = c.tag === 3 ? c.stateNode.containerInfo : null;
        return;
      }
    }
  }
  a.blockedOn = null;
}
function xc(a) {
  if (a.blockedOn !== null)
    return false;
  for (var b = a.targetContainers; 0 < b.length; ) {
    var c = yc(a.domEventName, a.eventSystemFlags, b[0], a.nativeEvent);
    if (c !== null)
      return b = Cb(c), b !== null && fc(b), a.blockedOn = c, false;
    b.shift();
  }
  return true;
}
function zc(a, b, c) {
  xc(a) && c.delete(b);
}
function Ac() {
  for (ic = false; 0 < jc.length; ) {
    var a = jc[0];
    if (a.blockedOn !== null) {
      a = Cb(a.blockedOn);
      a !== null && ec(a);
      break;
    }
    for (var b = a.targetContainers; 0 < b.length; ) {
      var c = yc(a.domEventName, a.eventSystemFlags, b[0], a.nativeEvent);
      if (c !== null) {
        a.blockedOn = c;
        break;
      }
      b.shift();
    }
    a.blockedOn === null && jc.shift();
  }
  kc !== null && xc(kc) && (kc = null);
  lc !== null && xc(lc) && (lc = null);
  mc !== null && xc(mc) && (mc = null);
  nc.forEach(zc);
  oc.forEach(zc);
}
function Bc(a, b) {
  a.blockedOn === b && (a.blockedOn = null, ic || (ic = true, r.unstable_scheduleCallback(r.unstable_NormalPriority, Ac)));
}
function Cc(a) {
  function b(b2) {
    return Bc(b2, a);
  }
  if (0 < jc.length) {
    Bc(jc[0], a);
    for (var c = 1; c < jc.length; c++) {
      var d = jc[c];
      d.blockedOn === a && (d.blockedOn = null);
    }
  }
  kc !== null && Bc(kc, a);
  lc !== null && Bc(lc, a);
  mc !== null && Bc(mc, a);
  nc.forEach(b);
  oc.forEach(b);
  for (c = 0; c < pc.length; c++)
    d = pc[c], d.blockedOn === a && (d.blockedOn = null);
  for (; 0 < pc.length && (c = pc[0], c.blockedOn === null); )
    vc(c), c.blockedOn === null && pc.shift();
}
function Dc(a, b) {
  var c = {};
  c[a.toLowerCase()] = b.toLowerCase();
  c["Webkit" + a] = "webkit" + b;
  c["Moz" + a] = "moz" + b;
  return c;
}
var Ec = { animationend: Dc("Animation", "AnimationEnd"), animationiteration: Dc("Animation", "AnimationIteration"), animationstart: Dc("Animation", "AnimationStart"), transitionend: Dc("Transition", "TransitionEnd") }, Fc = {}, Gc = {};
fa && (Gc = document.createElement("div").style, "AnimationEvent" in window || (delete Ec.animationend.animation, delete Ec.animationiteration.animation, delete Ec.animationstart.animation), "TransitionEvent" in window || delete Ec.transitionend.transition);
function Hc(a) {
  if (Fc[a])
    return Fc[a];
  if (!Ec[a])
    return a;
  var b = Ec[a], c;
  for (c in b)
    if (b.hasOwnProperty(c) && c in Gc)
      return Fc[a] = b[c];
  return a;
}
var Ic = Hc("animationend"), Jc = Hc("animationiteration"), Kc = Hc("animationstart"), Lc = Hc("transitionend"), Mc = /* @__PURE__ */ new Map(), Nc = /* @__PURE__ */ new Map(), Oc = [
  "abort",
  "abort",
  Ic,
  "animationEnd",
  Jc,
  "animationIteration",
  Kc,
  "animationStart",
  "canplay",
  "canPlay",
  "canplaythrough",
  "canPlayThrough",
  "durationchange",
  "durationChange",
  "emptied",
  "emptied",
  "encrypted",
  "encrypted",
  "ended",
  "ended",
  "error",
  "error",
  "gotpointercapture",
  "gotPointerCapture",
  "load",
  "load",
  "loadeddata",
  "loadedData",
  "loadedmetadata",
  "loadedMetadata",
  "loadstart",
  "loadStart",
  "lostpointercapture",
  "lostPointerCapture",
  "playing",
  "playing",
  "progress",
  "progress",
  "seeking",
  "seeking",
  "stalled",
  "stalled",
  "suspend",
  "suspend",
  "timeupdate",
  "timeUpdate",
  Lc,
  "transitionEnd",
  "waiting",
  "waiting"
];
function Pc(a, b) {
  for (var c = 0; c < a.length; c += 2) {
    var d = a[c], e = a[c + 1];
    e = "on" + (e[0].toUpperCase() + e.slice(1));
    Nc.set(d, b);
    Mc.set(d, e);
    da(e, [d]);
  }
}
var Qc = r.unstable_now;
Qc();
var F = 8;
function Rc(a) {
  if ((1 & a) !== 0)
    return F = 15, 1;
  if ((2 & a) !== 0)
    return F = 14, 2;
  if ((4 & a) !== 0)
    return F = 13, 4;
  var b = 24 & a;
  if (b !== 0)
    return F = 12, b;
  if ((a & 32) !== 0)
    return F = 11, 32;
  b = 192 & a;
  if (b !== 0)
    return F = 10, b;
  if ((a & 256) !== 0)
    return F = 9, 256;
  b = 3584 & a;
  if (b !== 0)
    return F = 8, b;
  if ((a & 4096) !== 0)
    return F = 7, 4096;
  b = 4186112 & a;
  if (b !== 0)
    return F = 6, b;
  b = 62914560 & a;
  if (b !== 0)
    return F = 5, b;
  if (a & 67108864)
    return F = 4, 67108864;
  if ((a & 134217728) !== 0)
    return F = 3, 134217728;
  b = 805306368 & a;
  if (b !== 0)
    return F = 2, b;
  if ((1073741824 & a) !== 0)
    return F = 1, 1073741824;
  F = 8;
  return a;
}
function Sc(a) {
  switch (a) {
    case 99:
      return 15;
    case 98:
      return 10;
    case 97:
    case 96:
      return 8;
    case 95:
      return 2;
    default:
      return 0;
  }
}
function Tc(a) {
  switch (a) {
    case 15:
    case 14:
      return 99;
    case 13:
    case 12:
    case 11:
    case 10:
      return 98;
    case 9:
    case 8:
    case 7:
    case 6:
    case 4:
    case 5:
      return 97;
    case 3:
    case 2:
    case 1:
      return 95;
    case 0:
      return 90;
    default:
      throw Error(y(358, a));
  }
}
function Uc(a, b) {
  var c = a.pendingLanes;
  if (c === 0)
    return F = 0;
  var d = 0, e = 0, f = a.expiredLanes, g = a.suspendedLanes, h = a.pingedLanes;
  if (f !== 0)
    d = f, e = F = 15;
  else if (f = c & 134217727, f !== 0) {
    var k = f & ~g;
    k !== 0 ? (d = Rc(k), e = F) : (h &= f, h !== 0 && (d = Rc(h), e = F));
  } else
    f = c & ~g, f !== 0 ? (d = Rc(f), e = F) : h !== 0 && (d = Rc(h), e = F);
  if (d === 0)
    return 0;
  d = 31 - Vc(d);
  d = c & ((0 > d ? 0 : 1 << d) << 1) - 1;
  if (b !== 0 && b !== d && (b & g) === 0) {
    Rc(b);
    if (e <= F)
      return b;
    F = e;
  }
  b = a.entangledLanes;
  if (b !== 0)
    for (a = a.entanglements, b &= d; 0 < b; )
      c = 31 - Vc(b), e = 1 << c, d |= a[c], b &= ~e;
  return d;
}
function Wc(a) {
  a = a.pendingLanes & -1073741825;
  return a !== 0 ? a : a & 1073741824 ? 1073741824 : 0;
}
function Xc(a, b) {
  switch (a) {
    case 15:
      return 1;
    case 14:
      return 2;
    case 12:
      return a = Yc(24 & ~b), a === 0 ? Xc(10, b) : a;
    case 10:
      return a = Yc(192 & ~b), a === 0 ? Xc(8, b) : a;
    case 8:
      return a = Yc(3584 & ~b), a === 0 && (a = Yc(4186112 & ~b), a === 0 && (a = 512)), a;
    case 2:
      return b = Yc(805306368 & ~b), b === 0 && (b = 268435456), b;
  }
  throw Error(y(358, a));
}
function Yc(a) {
  return a & -a;
}
function Zc(a) {
  for (var b = [], c = 0; 31 > c; c++)
    b.push(a);
  return b;
}
function $c(a, b, c) {
  a.pendingLanes |= b;
  var d = b - 1;
  a.suspendedLanes &= d;
  a.pingedLanes &= d;
  a = a.eventTimes;
  b = 31 - Vc(b);
  a[b] = c;
}
var Vc = Math.clz32 ? Math.clz32 : ad, bd = Math.log, cd = Math.LN2;
function ad(a) {
  return a === 0 ? 32 : 31 - (bd(a) / cd | 0) | 0;
}
var dd = r.unstable_UserBlockingPriority, ed = r.unstable_runWithPriority, fd = true;
function gd(a, b, c, d) {
  Kb || Ib();
  var e = hd, f = Kb;
  Kb = true;
  try {
    Hb(e, a, b, c, d);
  } finally {
    (Kb = f) || Mb();
  }
}
function id(a, b, c, d) {
  ed(dd, hd.bind(null, a, b, c, d));
}
function hd(a, b, c, d) {
  if (fd) {
    var e;
    if ((e = (b & 4) === 0) && 0 < jc.length && -1 < qc.indexOf(a))
      a = rc(null, a, b, c, d), jc.push(a);
    else {
      var f = yc(a, b, c, d);
      if (f === null)
        e && sc(a, d);
      else {
        if (e) {
          if (-1 < qc.indexOf(a)) {
            a = rc(f, a, b, c, d);
            jc.push(a);
            return;
          }
          if (uc(f, a, b, c, d))
            return;
          sc(a, d);
        }
        jd(a, b, d, null, c);
      }
    }
  }
}
function yc(a, b, c, d) {
  var e = xb(d);
  e = wc(e);
  if (e !== null) {
    var f = Zb(e);
    if (f === null)
      e = null;
    else {
      var g = f.tag;
      if (g === 13) {
        e = $b(f);
        if (e !== null)
          return e;
        e = null;
      } else if (g === 3) {
        if (f.stateNode.hydrate)
          return f.tag === 3 ? f.stateNode.containerInfo : null;
        e = null;
      } else
        f !== e && (e = null);
    }
  }
  jd(a, b, d, e, c);
  return null;
}
var kd = null, ld = null, md = null;
function nd() {
  if (md)
    return md;
  var a, b = ld, c = b.length, d, e = "value" in kd ? kd.value : kd.textContent, f = e.length;
  for (a = 0; a < c && b[a] === e[a]; a++)
    ;
  var g = c - a;
  for (d = 1; d <= g && b[c - d] === e[f - d]; d++)
    ;
  return md = e.slice(a, 1 < d ? 1 - d : void 0);
}
function od(a) {
  var b = a.keyCode;
  "charCode" in a ? (a = a.charCode, a === 0 && b === 13 && (a = 13)) : a = b;
  a === 10 && (a = 13);
  return 32 <= a || a === 13 ? a : 0;
}
function pd() {
  return true;
}
function qd() {
  return false;
}
function rd(a) {
  function b(b2, d, e, f, g) {
    this._reactName = b2;
    this._targetInst = e;
    this.type = d;
    this.nativeEvent = f;
    this.target = g;
    this.currentTarget = null;
    for (var c in a)
      a.hasOwnProperty(c) && (b2 = a[c], this[c] = b2 ? b2(f) : f[c]);
    this.isDefaultPrevented = (f.defaultPrevented != null ? f.defaultPrevented : f.returnValue === false) ? pd : qd;
    this.isPropagationStopped = qd;
    return this;
  }
  m(b.prototype, { preventDefault: function() {
    this.defaultPrevented = true;
    var a2 = this.nativeEvent;
    a2 && (a2.preventDefault ? a2.preventDefault() : typeof a2.returnValue !== "unknown" && (a2.returnValue = false), this.isDefaultPrevented = pd);
  }, stopPropagation: function() {
    var a2 = this.nativeEvent;
    a2 && (a2.stopPropagation ? a2.stopPropagation() : typeof a2.cancelBubble !== "unknown" && (a2.cancelBubble = true), this.isPropagationStopped = pd);
  }, persist: function() {
  }, isPersistent: pd });
  return b;
}
var sd = { eventPhase: 0, bubbles: 0, cancelable: 0, timeStamp: function(a) {
  return a.timeStamp || Date.now();
}, defaultPrevented: 0, isTrusted: 0 }, td = rd(sd), ud = m({}, sd, { view: 0, detail: 0 }), vd = rd(ud), wd, xd, yd, Ad = m({}, ud, { screenX: 0, screenY: 0, clientX: 0, clientY: 0, pageX: 0, pageY: 0, ctrlKey: 0, shiftKey: 0, altKey: 0, metaKey: 0, getModifierState: zd, button: 0, buttons: 0, relatedTarget: function(a) {
  return a.relatedTarget === void 0 ? a.fromElement === a.srcElement ? a.toElement : a.fromElement : a.relatedTarget;
}, movementX: function(a) {
  if ("movementX" in a)
    return a.movementX;
  a !== yd && (yd && a.type === "mousemove" ? (wd = a.screenX - yd.screenX, xd = a.screenY - yd.screenY) : xd = wd = 0, yd = a);
  return wd;
}, movementY: function(a) {
  return "movementY" in a ? a.movementY : xd;
} }), Bd = rd(Ad), Cd = m({}, Ad, { dataTransfer: 0 }), Dd = rd(Cd), Ed = m({}, ud, { relatedTarget: 0 }), Fd = rd(Ed), Gd = m({}, sd, { animationName: 0, elapsedTime: 0, pseudoElement: 0 }), Hd = rd(Gd), Id = m({}, sd, { clipboardData: function(a) {
  return "clipboardData" in a ? a.clipboardData : window.clipboardData;
} }), Jd = rd(Id), Kd = m({}, sd, { data: 0 }), Ld = rd(Kd), Md = {
  Esc: "Escape",
  Spacebar: " ",
  Left: "ArrowLeft",
  Up: "ArrowUp",
  Right: "ArrowRight",
  Down: "ArrowDown",
  Del: "Delete",
  Win: "OS",
  Menu: "ContextMenu",
  Apps: "ContextMenu",
  Scroll: "ScrollLock",
  MozPrintableKey: "Unidentified"
}, Nd = {
  8: "Backspace",
  9: "Tab",
  12: "Clear",
  13: "Enter",
  16: "Shift",
  17: "Control",
  18: "Alt",
  19: "Pause",
  20: "CapsLock",
  27: "Escape",
  32: " ",
  33: "PageUp",
  34: "PageDown",
  35: "End",
  36: "Home",
  37: "ArrowLeft",
  38: "ArrowUp",
  39: "ArrowRight",
  40: "ArrowDown",
  45: "Insert",
  46: "Delete",
  112: "F1",
  113: "F2",
  114: "F3",
  115: "F4",
  116: "F5",
  117: "F6",
  118: "F7",
  119: "F8",
  120: "F9",
  121: "F10",
  122: "F11",
  123: "F12",
  144: "NumLock",
  145: "ScrollLock",
  224: "Meta"
}, Od = { Alt: "altKey", Control: "ctrlKey", Meta: "metaKey", Shift: "shiftKey" };
function Pd(a) {
  var b = this.nativeEvent;
  return b.getModifierState ? b.getModifierState(a) : (a = Od[a]) ? !!b[a] : false;
}
function zd() {
  return Pd;
}
var Qd = m({}, ud, { key: function(a) {
  if (a.key) {
    var b = Md[a.key] || a.key;
    if (b !== "Unidentified")
      return b;
  }
  return a.type === "keypress" ? (a = od(a), a === 13 ? "Enter" : String.fromCharCode(a)) : a.type === "keydown" || a.type === "keyup" ? Nd[a.keyCode] || "Unidentified" : "";
}, code: 0, location: 0, ctrlKey: 0, shiftKey: 0, altKey: 0, metaKey: 0, repeat: 0, locale: 0, getModifierState: zd, charCode: function(a) {
  return a.type === "keypress" ? od(a) : 0;
}, keyCode: function(a) {
  return a.type === "keydown" || a.type === "keyup" ? a.keyCode : 0;
}, which: function(a) {
  return a.type === "keypress" ? od(a) : a.type === "keydown" || a.type === "keyup" ? a.keyCode : 0;
} }), Rd = rd(Qd), Sd = m({}, Ad, { pointerId: 0, width: 0, height: 0, pressure: 0, tangentialPressure: 0, tiltX: 0, tiltY: 0, twist: 0, pointerType: 0, isPrimary: 0 }), Td = rd(Sd), Ud = m({}, ud, { touches: 0, targetTouches: 0, changedTouches: 0, altKey: 0, metaKey: 0, ctrlKey: 0, shiftKey: 0, getModifierState: zd }), Vd = rd(Ud), Wd = m({}, sd, { propertyName: 0, elapsedTime: 0, pseudoElement: 0 }), Xd = rd(Wd), Yd = m({}, Ad, {
  deltaX: function(a) {
    return "deltaX" in a ? a.deltaX : "wheelDeltaX" in a ? -a.wheelDeltaX : 0;
  },
  deltaY: function(a) {
    return "deltaY" in a ? a.deltaY : "wheelDeltaY" in a ? -a.wheelDeltaY : "wheelDelta" in a ? -a.wheelDelta : 0;
  },
  deltaZ: 0,
  deltaMode: 0
}), Zd = rd(Yd), $d = [9, 13, 27, 32], ae = fa && "CompositionEvent" in window, be = null;
fa && "documentMode" in document && (be = document.documentMode);
var ce = fa && "TextEvent" in window && !be, de = fa && (!ae || be && 8 < be && 11 >= be), ee = String.fromCharCode(32), fe = false;
function ge(a, b) {
  switch (a) {
    case "keyup":
      return $d.indexOf(b.keyCode) !== -1;
    case "keydown":
      return b.keyCode !== 229;
    case "keypress":
    case "mousedown":
    case "focusout":
      return true;
    default:
      return false;
  }
}
function he(a) {
  a = a.detail;
  return typeof a === "object" && "data" in a ? a.data : null;
}
var ie = false;
function je(a, b) {
  switch (a) {
    case "compositionend":
      return he(b);
    case "keypress":
      if (b.which !== 32)
        return null;
      fe = true;
      return ee;
    case "textInput":
      return a = b.data, a === ee && fe ? null : a;
    default:
      return null;
  }
}
function ke(a, b) {
  if (ie)
    return a === "compositionend" || !ae && ge(a, b) ? (a = nd(), md = ld = kd = null, ie = false, a) : null;
  switch (a) {
    case "paste":
      return null;
    case "keypress":
      if (!(b.ctrlKey || b.altKey || b.metaKey) || b.ctrlKey && b.altKey) {
        if (b.char && 1 < b.char.length)
          return b.char;
        if (b.which)
          return String.fromCharCode(b.which);
      }
      return null;
    case "compositionend":
      return de && b.locale !== "ko" ? null : b.data;
    default:
      return null;
  }
}
var le = { color: true, date: true, datetime: true, "datetime-local": true, email: true, month: true, number: true, password: true, range: true, search: true, tel: true, text: true, time: true, url: true, week: true };
function me(a) {
  var b = a && a.nodeName && a.nodeName.toLowerCase();
  return b === "input" ? !!le[a.type] : b === "textarea" ? true : false;
}
function ne(a, b, c, d) {
  Eb(d);
  b = oe(b, "onChange");
  0 < b.length && (c = new td("onChange", "change", null, c, d), a.push({ event: c, listeners: b }));
}
var pe = null, qe = null;
function re(a) {
  se(a, 0);
}
function te(a) {
  var b = ue(a);
  if (Wa(b))
    return a;
}
function ve(a, b) {
  if (a === "change")
    return b;
}
var we = false;
if (fa) {
  var xe;
  if (fa) {
    var ye = "oninput" in document;
    if (!ye) {
      var ze = document.createElement("div");
      ze.setAttribute("oninput", "return;");
      ye = typeof ze.oninput === "function";
    }
    xe = ye;
  } else
    xe = false;
  we = xe && (!document.documentMode || 9 < document.documentMode);
}
function Ae() {
  pe && (pe.detachEvent("onpropertychange", Be), qe = pe = null);
}
function Be(a) {
  if (a.propertyName === "value" && te(qe)) {
    var b = [];
    ne(b, qe, a, xb(a));
    a = re;
    if (Kb)
      a(b);
    else {
      Kb = true;
      try {
        Gb(a, b);
      } finally {
        Kb = false, Mb();
      }
    }
  }
}
function Ce(a, b, c) {
  a === "focusin" ? (Ae(), pe = b, qe = c, pe.attachEvent("onpropertychange", Be)) : a === "focusout" && Ae();
}
function De(a) {
  if (a === "selectionchange" || a === "keyup" || a === "keydown")
    return te(qe);
}
function Ee(a, b) {
  if (a === "click")
    return te(b);
}
function Fe(a, b) {
  if (a === "input" || a === "change")
    return te(b);
}
function Ge(a, b) {
  return a === b && (a !== 0 || 1 / a === 1 / b) || a !== a && b !== b;
}
var He = typeof Object.is === "function" ? Object.is : Ge, Ie = Object.prototype.hasOwnProperty;
function Je(a, b) {
  if (He(a, b))
    return true;
  if (typeof a !== "object" || a === null || typeof b !== "object" || b === null)
    return false;
  var c = Object.keys(a), d = Object.keys(b);
  if (c.length !== d.length)
    return false;
  for (d = 0; d < c.length; d++)
    if (!Ie.call(b, c[d]) || !He(a[c[d]], b[c[d]]))
      return false;
  return true;
}
function Ke(a) {
  for (; a && a.firstChild; )
    a = a.firstChild;
  return a;
}
function Le(a, b) {
  var c = Ke(a);
  a = 0;
  for (var d; c; ) {
    if (c.nodeType === 3) {
      d = a + c.textContent.length;
      if (a <= b && d >= b)
        return { node: c, offset: b - a };
      a = d;
    }
    a: {
      for (; c; ) {
        if (c.nextSibling) {
          c = c.nextSibling;
          break a;
        }
        c = c.parentNode;
      }
      c = void 0;
    }
    c = Ke(c);
  }
}
function Me(a, b) {
  return a && b ? a === b ? true : a && a.nodeType === 3 ? false : b && b.nodeType === 3 ? Me(a, b.parentNode) : "contains" in a ? a.contains(b) : a.compareDocumentPosition ? !!(a.compareDocumentPosition(b) & 16) : false : false;
}
function Ne() {
  for (var a = window, b = Xa(); b instanceof a.HTMLIFrameElement; ) {
    try {
      var c = typeof b.contentWindow.location.href === "string";
    } catch (d) {
      c = false;
    }
    if (c)
      a = b.contentWindow;
    else
      break;
    b = Xa(a.document);
  }
  return b;
}
function Oe(a) {
  var b = a && a.nodeName && a.nodeName.toLowerCase();
  return b && (b === "input" && (a.type === "text" || a.type === "search" || a.type === "tel" || a.type === "url" || a.type === "password") || b === "textarea" || a.contentEditable === "true");
}
var Pe = fa && "documentMode" in document && 11 >= document.documentMode, Qe = null, Re = null, Se = null, Te = false;
function Ue(a, b, c) {
  var d = c.window === c ? c.document : c.nodeType === 9 ? c : c.ownerDocument;
  Te || Qe == null || Qe !== Xa(d) || (d = Qe, "selectionStart" in d && Oe(d) ? d = { start: d.selectionStart, end: d.selectionEnd } : (d = (d.ownerDocument && d.ownerDocument.defaultView || window).getSelection(), d = { anchorNode: d.anchorNode, anchorOffset: d.anchorOffset, focusNode: d.focusNode, focusOffset: d.focusOffset }), Se && Je(Se, d) || (Se = d, d = oe(Re, "onSelect"), 0 < d.length && (b = new td("onSelect", "select", null, b, c), a.push({ event: b, listeners: d }), b.target = Qe)));
}
Pc("cancel cancel click click close close contextmenu contextMenu copy copy cut cut auxclick auxClick dblclick doubleClick dragend dragEnd dragstart dragStart drop drop focusin focus focusout blur input input invalid invalid keydown keyDown keypress keyPress keyup keyUp mousedown mouseDown mouseup mouseUp paste paste pause pause play play pointercancel pointerCancel pointerdown pointerDown pointerup pointerUp ratechange rateChange reset reset seeked seeked submit submit touchcancel touchCancel touchend touchEnd touchstart touchStart volumechange volumeChange".split(" "), 0);
Pc("drag drag dragenter dragEnter dragexit dragExit dragleave dragLeave dragover dragOver mousemove mouseMove mouseout mouseOut mouseover mouseOver pointermove pointerMove pointerout pointerOut pointerover pointerOver scroll scroll toggle toggle touchmove touchMove wheel wheel".split(" "), 1);
Pc(Oc, 2);
for (var Ve = "change selectionchange textInput compositionstart compositionend compositionupdate".split(" "), We = 0; We < Ve.length; We++)
  Nc.set(Ve[We], 0);
ea("onMouseEnter", ["mouseout", "mouseover"]);
ea("onMouseLeave", ["mouseout", "mouseover"]);
ea("onPointerEnter", ["pointerout", "pointerover"]);
ea("onPointerLeave", ["pointerout", "pointerover"]);
da("onChange", "change click focusin focusout input keydown keyup selectionchange".split(" "));
da("onSelect", "focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" "));
da("onBeforeInput", ["compositionend", "keypress", "textInput", "paste"]);
da("onCompositionEnd", "compositionend focusout keydown keypress keyup mousedown".split(" "));
da("onCompositionStart", "compositionstart focusout keydown keypress keyup mousedown".split(" "));
da("onCompositionUpdate", "compositionupdate focusout keydown keypress keyup mousedown".split(" "));
var Xe = "abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange seeked seeking stalled suspend timeupdate volumechange waiting".split(" "), Ye = new Set("cancel close invalid load scroll toggle".split(" ").concat(Xe));
function Ze(a, b, c) {
  var d = a.type || "unknown-event";
  a.currentTarget = c;
  Yb(d, b, void 0, a);
  a.currentTarget = null;
}
function se(a, b) {
  b = (b & 4) !== 0;
  for (var c = 0; c < a.length; c++) {
    var d = a[c], e = d.event;
    d = d.listeners;
    a: {
      var f = void 0;
      if (b)
        for (var g = d.length - 1; 0 <= g; g--) {
          var h = d[g], k = h.instance, l = h.currentTarget;
          h = h.listener;
          if (k !== f && e.isPropagationStopped())
            break a;
          Ze(e, h, l);
          f = k;
        }
      else
        for (g = 0; g < d.length; g++) {
          h = d[g];
          k = h.instance;
          l = h.currentTarget;
          h = h.listener;
          if (k !== f && e.isPropagationStopped())
            break a;
          Ze(e, h, l);
          f = k;
        }
    }
  }
  if (Ub)
    throw a = Vb, Ub = false, Vb = null, a;
}
function G(a, b) {
  var c = $e(b), d = a + "__bubble";
  c.has(d) || (af(b, a, 2, false), c.add(d));
}
var bf = "_reactListening" + Math.random().toString(36).slice(2);
function cf(a) {
  a[bf] || (a[bf] = true, ba.forEach(function(b) {
    Ye.has(b) || df(b, false, a, null);
    df(b, true, a, null);
  }));
}
function df(a, b, c, d) {
  var e = 4 < arguments.length && arguments[4] !== void 0 ? arguments[4] : 0, f = c;
  a === "selectionchange" && c.nodeType !== 9 && (f = c.ownerDocument);
  if (d !== null && !b && Ye.has(a)) {
    if (a !== "scroll")
      return;
    e |= 2;
    f = d;
  }
  var g = $e(f), h = a + "__" + (b ? "capture" : "bubble");
  g.has(h) || (b && (e |= 4), af(f, a, e, b), g.add(h));
}
function af(a, b, c, d) {
  var e = Nc.get(b);
  switch (e === void 0 ? 2 : e) {
    case 0:
      e = gd;
      break;
    case 1:
      e = id;
      break;
    default:
      e = hd;
  }
  c = e.bind(null, b, c, a);
  e = void 0;
  !Pb || b !== "touchstart" && b !== "touchmove" && b !== "wheel" || (e = true);
  d ? e !== void 0 ? a.addEventListener(b, c, { capture: true, passive: e }) : a.addEventListener(b, c, true) : e !== void 0 ? a.addEventListener(b, c, { passive: e }) : a.addEventListener(b, c, false);
}
function jd(a, b, c, d, e) {
  var f = d;
  if ((b & 1) === 0 && (b & 2) === 0 && d !== null)
    a:
      for (; ; ) {
        if (d === null)
          return;
        var g = d.tag;
        if (g === 3 || g === 4) {
          var h = d.stateNode.containerInfo;
          if (h === e || h.nodeType === 8 && h.parentNode === e)
            break;
          if (g === 4)
            for (g = d.return; g !== null; ) {
              var k = g.tag;
              if (k === 3 || k === 4) {
                if (k = g.stateNode.containerInfo, k === e || k.nodeType === 8 && k.parentNode === e)
                  return;
              }
              g = g.return;
            }
          for (; h !== null; ) {
            g = wc(h);
            if (g === null)
              return;
            k = g.tag;
            if (k === 5 || k === 6) {
              d = f = g;
              continue a;
            }
            h = h.parentNode;
          }
        }
        d = d.return;
      }
  Nb(function() {
    var d2 = f, e2 = xb(c), g2 = [];
    a: {
      var h2 = Mc.get(a);
      if (h2 !== void 0) {
        var k2 = td, x = a;
        switch (a) {
          case "keypress":
            if (od(c) === 0)
              break a;
          case "keydown":
          case "keyup":
            k2 = Rd;
            break;
          case "focusin":
            x = "focus";
            k2 = Fd;
            break;
          case "focusout":
            x = "blur";
            k2 = Fd;
            break;
          case "beforeblur":
          case "afterblur":
            k2 = Fd;
            break;
          case "click":
            if (c.button === 2)
              break a;
          case "auxclick":
          case "dblclick":
          case "mousedown":
          case "mousemove":
          case "mouseup":
          case "mouseout":
          case "mouseover":
          case "contextmenu":
            k2 = Bd;
            break;
          case "drag":
          case "dragend":
          case "dragenter":
          case "dragexit":
          case "dragleave":
          case "dragover":
          case "dragstart":
          case "drop":
            k2 = Dd;
            break;
          case "touchcancel":
          case "touchend":
          case "touchmove":
          case "touchstart":
            k2 = Vd;
            break;
          case Ic:
          case Jc:
          case Kc:
            k2 = Hd;
            break;
          case Lc:
            k2 = Xd;
            break;
          case "scroll":
            k2 = vd;
            break;
          case "wheel":
            k2 = Zd;
            break;
          case "copy":
          case "cut":
          case "paste":
            k2 = Jd;
            break;
          case "gotpointercapture":
          case "lostpointercapture":
          case "pointercancel":
          case "pointerdown":
          case "pointermove":
          case "pointerout":
          case "pointerover":
          case "pointerup":
            k2 = Td;
        }
        var w = (b & 4) !== 0, z = !w && a === "scroll", u = w ? h2 !== null ? h2 + "Capture" : null : h2;
        w = [];
        for (var t = d2, q; t !== null; ) {
          q = t;
          var v = q.stateNode;
          q.tag === 5 && v !== null && (q = v, u !== null && (v = Ob(t, u), v != null && w.push(ef(t, v, q))));
          if (z)
            break;
          t = t.return;
        }
        0 < w.length && (h2 = new k2(h2, x, null, c, e2), g2.push({ event: h2, listeners: w }));
      }
    }
    if ((b & 7) === 0) {
      a: {
        h2 = a === "mouseover" || a === "pointerover";
        k2 = a === "mouseout" || a === "pointerout";
        if (h2 && (b & 16) === 0 && (x = c.relatedTarget || c.fromElement) && (wc(x) || x[ff]))
          break a;
        if (k2 || h2) {
          h2 = e2.window === e2 ? e2 : (h2 = e2.ownerDocument) ? h2.defaultView || h2.parentWindow : window;
          if (k2) {
            if (x = c.relatedTarget || c.toElement, k2 = d2, x = x ? wc(x) : null, x !== null && (z = Zb(x), x !== z || x.tag !== 5 && x.tag !== 6))
              x = null;
          } else
            k2 = null, x = d2;
          if (k2 !== x) {
            w = Bd;
            v = "onMouseLeave";
            u = "onMouseEnter";
            t = "mouse";
            if (a === "pointerout" || a === "pointerover")
              w = Td, v = "onPointerLeave", u = "onPointerEnter", t = "pointer";
            z = k2 == null ? h2 : ue(k2);
            q = x == null ? h2 : ue(x);
            h2 = new w(v, t + "leave", k2, c, e2);
            h2.target = z;
            h2.relatedTarget = q;
            v = null;
            wc(e2) === d2 && (w = new w(u, t + "enter", x, c, e2), w.target = q, w.relatedTarget = z, v = w);
            z = v;
            if (k2 && x)
              b: {
                w = k2;
                u = x;
                t = 0;
                for (q = w; q; q = gf(q))
                  t++;
                q = 0;
                for (v = u; v; v = gf(v))
                  q++;
                for (; 0 < t - q; )
                  w = gf(w), t--;
                for (; 0 < q - t; )
                  u = gf(u), q--;
                for (; t--; ) {
                  if (w === u || u !== null && w === u.alternate)
                    break b;
                  w = gf(w);
                  u = gf(u);
                }
                w = null;
              }
            else
              w = null;
            k2 !== null && hf(g2, h2, k2, w, false);
            x !== null && z !== null && hf(g2, z, x, w, true);
          }
        }
      }
      a: {
        h2 = d2 ? ue(d2) : window;
        k2 = h2.nodeName && h2.nodeName.toLowerCase();
        if (k2 === "select" || k2 === "input" && h2.type === "file")
          var J = ve;
        else if (me(h2))
          if (we)
            J = Fe;
          else {
            J = De;
            var K = Ce;
          }
        else
          (k2 = h2.nodeName) && k2.toLowerCase() === "input" && (h2.type === "checkbox" || h2.type === "radio") && (J = Ee);
        if (J && (J = J(a, d2))) {
          ne(g2, J, c, e2);
          break a;
        }
        K && K(a, h2, d2);
        a === "focusout" && (K = h2._wrapperState) && K.controlled && h2.type === "number" && bb(h2, "number", h2.value);
      }
      K = d2 ? ue(d2) : window;
      switch (a) {
        case "focusin":
          if (me(K) || K.contentEditable === "true")
            Qe = K, Re = d2, Se = null;
          break;
        case "focusout":
          Se = Re = Qe = null;
          break;
        case "mousedown":
          Te = true;
          break;
        case "contextmenu":
        case "mouseup":
        case "dragend":
          Te = false;
          Ue(g2, c, e2);
          break;
        case "selectionchange":
          if (Pe)
            break;
        case "keydown":
        case "keyup":
          Ue(g2, c, e2);
      }
      var Q;
      if (ae)
        b: {
          switch (a) {
            case "compositionstart":
              var L = "onCompositionStart";
              break b;
            case "compositionend":
              L = "onCompositionEnd";
              break b;
            case "compositionupdate":
              L = "onCompositionUpdate";
              break b;
          }
          L = void 0;
        }
      else
        ie ? ge(a, c) && (L = "onCompositionEnd") : a === "keydown" && c.keyCode === 229 && (L = "onCompositionStart");
      L && (de && c.locale !== "ko" && (ie || L !== "onCompositionStart" ? L === "onCompositionEnd" && ie && (Q = nd()) : (kd = e2, ld = "value" in kd ? kd.value : kd.textContent, ie = true)), K = oe(d2, L), 0 < K.length && (L = new Ld(L, a, null, c, e2), g2.push({ event: L, listeners: K }), Q ? L.data = Q : (Q = he(c), Q !== null && (L.data = Q))));
      if (Q = ce ? je(a, c) : ke(a, c))
        d2 = oe(d2, "onBeforeInput"), 0 < d2.length && (e2 = new Ld("onBeforeInput", "beforeinput", null, c, e2), g2.push({ event: e2, listeners: d2 }), e2.data = Q);
    }
    se(g2, b);
  });
}
function ef(a, b, c) {
  return { instance: a, listener: b, currentTarget: c };
}
function oe(a, b) {
  for (var c = b + "Capture", d = []; a !== null; ) {
    var e = a, f = e.stateNode;
    e.tag === 5 && f !== null && (e = f, f = Ob(a, c), f != null && d.unshift(ef(a, f, e)), f = Ob(a, b), f != null && d.push(ef(a, f, e)));
    a = a.return;
  }
  return d;
}
function gf(a) {
  if (a === null)
    return null;
  do
    a = a.return;
  while (a && a.tag !== 5);
  return a ? a : null;
}
function hf(a, b, c, d, e) {
  for (var f = b._reactName, g = []; c !== null && c !== d; ) {
    var h = c, k = h.alternate, l = h.stateNode;
    if (k !== null && k === d)
      break;
    h.tag === 5 && l !== null && (h = l, e ? (k = Ob(c, f), k != null && g.unshift(ef(c, k, h))) : e || (k = Ob(c, f), k != null && g.push(ef(c, k, h))));
    c = c.return;
  }
  g.length !== 0 && a.push({ event: b, listeners: g });
}
function jf() {
}
var kf = null, lf = null;
function mf(a, b) {
  switch (a) {
    case "button":
    case "input":
    case "select":
    case "textarea":
      return !!b.autoFocus;
  }
  return false;
}
function nf(a, b) {
  return a === "textarea" || a === "option" || a === "noscript" || typeof b.children === "string" || typeof b.children === "number" || typeof b.dangerouslySetInnerHTML === "object" && b.dangerouslySetInnerHTML !== null && b.dangerouslySetInnerHTML.__html != null;
}
var of = typeof setTimeout === "function" ? setTimeout : void 0, pf = typeof clearTimeout === "function" ? clearTimeout : void 0;
function qf(a) {
  a.nodeType === 1 ? a.textContent = "" : a.nodeType === 9 && (a = a.body, a != null && (a.textContent = ""));
}
function rf(a) {
  for (; a != null; a = a.nextSibling) {
    var b = a.nodeType;
    if (b === 1 || b === 3)
      break;
  }
  return a;
}
function sf(a) {
  a = a.previousSibling;
  for (var b = 0; a; ) {
    if (a.nodeType === 8) {
      var c = a.data;
      if (c === "$" || c === "$!" || c === "$?") {
        if (b === 0)
          return a;
        b--;
      } else
        c === "/$" && b++;
    }
    a = a.previousSibling;
  }
  return null;
}
var tf = 0;
function uf(a) {
  return { $$typeof: Ga, toString: a, valueOf: a };
}
var vf = Math.random().toString(36).slice(2), wf = "__reactFiber$" + vf, xf = "__reactProps$" + vf, ff = "__reactContainer$" + vf, yf = "__reactEvents$" + vf;
function wc(a) {
  var b = a[wf];
  if (b)
    return b;
  for (var c = a.parentNode; c; ) {
    if (b = c[ff] || c[wf]) {
      c = b.alternate;
      if (b.child !== null || c !== null && c.child !== null)
        for (a = sf(a); a !== null; ) {
          if (c = a[wf])
            return c;
          a = sf(a);
        }
      return b;
    }
    a = c;
    c = a.parentNode;
  }
  return null;
}
function Cb(a) {
  a = a[wf] || a[ff];
  return !a || a.tag !== 5 && a.tag !== 6 && a.tag !== 13 && a.tag !== 3 ? null : a;
}
function ue(a) {
  if (a.tag === 5 || a.tag === 6)
    return a.stateNode;
  throw Error(y(33));
}
function Db(a) {
  return a[xf] || null;
}
function $e(a) {
  var b = a[yf];
  b === void 0 && (b = a[yf] = /* @__PURE__ */ new Set());
  return b;
}
var zf = [], Af = -1;
function Bf(a) {
  return { current: a };
}
function H(a) {
  0 > Af || (a.current = zf[Af], zf[Af] = null, Af--);
}
function I(a, b) {
  Af++;
  zf[Af] = a.current;
  a.current = b;
}
var Cf = {}, M = Bf(Cf), N = Bf(false), Df = Cf;
function Ef(a, b) {
  var c = a.type.contextTypes;
  if (!c)
    return Cf;
  var d = a.stateNode;
  if (d && d.__reactInternalMemoizedUnmaskedChildContext === b)
    return d.__reactInternalMemoizedMaskedChildContext;
  var e = {}, f;
  for (f in c)
    e[f] = b[f];
  d && (a = a.stateNode, a.__reactInternalMemoizedUnmaskedChildContext = b, a.__reactInternalMemoizedMaskedChildContext = e);
  return e;
}
function Ff(a) {
  a = a.childContextTypes;
  return a !== null && a !== void 0;
}
function Gf() {
  H(N);
  H(M);
}
function Hf(a, b, c) {
  if (M.current !== Cf)
    throw Error(y(168));
  I(M, b);
  I(N, c);
}
function If(a, b, c) {
  var d = a.stateNode;
  a = b.childContextTypes;
  if (typeof d.getChildContext !== "function")
    return c;
  d = d.getChildContext();
  for (var e in d)
    if (!(e in a))
      throw Error(y(108, Ra(b) || "Unknown", e));
  return m({}, c, d);
}
function Jf(a) {
  a = (a = a.stateNode) && a.__reactInternalMemoizedMergedChildContext || Cf;
  Df = M.current;
  I(M, a);
  I(N, N.current);
  return true;
}
function Kf(a, b, c) {
  var d = a.stateNode;
  if (!d)
    throw Error(y(169));
  c ? (a = If(a, b, Df), d.__reactInternalMemoizedMergedChildContext = a, H(N), H(M), I(M, a)) : H(N);
  I(N, c);
}
var Lf = null, Mf = null, Nf = r.unstable_runWithPriority, Of = r.unstable_scheduleCallback, Pf = r.unstable_cancelCallback, Qf = r.unstable_shouldYield, Rf = r.unstable_requestPaint, Sf = r.unstable_now, Tf = r.unstable_getCurrentPriorityLevel, Uf = r.unstable_ImmediatePriority, Vf = r.unstable_UserBlockingPriority, Wf = r.unstable_NormalPriority, Xf = r.unstable_LowPriority, Yf = r.unstable_IdlePriority, Zf = {}, $f = Rf !== void 0 ? Rf : function() {
}, ag = null, bg = null, cg = false, dg = Sf(), O = 1e4 > dg ? Sf : function() {
  return Sf() - dg;
};
function eg() {
  switch (Tf()) {
    case Uf:
      return 99;
    case Vf:
      return 98;
    case Wf:
      return 97;
    case Xf:
      return 96;
    case Yf:
      return 95;
    default:
      throw Error(y(332));
  }
}
function fg(a) {
  switch (a) {
    case 99:
      return Uf;
    case 98:
      return Vf;
    case 97:
      return Wf;
    case 96:
      return Xf;
    case 95:
      return Yf;
    default:
      throw Error(y(332));
  }
}
function gg(a, b) {
  a = fg(a);
  return Nf(a, b);
}
function hg(a, b, c) {
  a = fg(a);
  return Of(a, b, c);
}
function ig() {
  if (bg !== null) {
    var a = bg;
    bg = null;
    Pf(a);
  }
  jg();
}
function jg() {
  if (!cg && ag !== null) {
    cg = true;
    var a = 0;
    try {
      var b = ag;
      gg(99, function() {
        for (; a < b.length; a++) {
          var c = b[a];
          do
            c = c(true);
          while (c !== null);
        }
      });
      ag = null;
    } catch (c) {
      throw ag !== null && (ag = ag.slice(a + 1)), Of(Uf, ig), c;
    } finally {
      cg = false;
    }
  }
}
var kg = ra.ReactCurrentBatchConfig;
function lg(a, b) {
  if (a && a.defaultProps) {
    b = m({}, b);
    a = a.defaultProps;
    for (var c in a)
      b[c] === void 0 && (b[c] = a[c]);
    return b;
  }
  return b;
}
var mg = Bf(null), ng = null, og = null, pg = null;
function qg() {
  pg = og = ng = null;
}
function rg(a) {
  var b = mg.current;
  H(mg);
  a.type._context._currentValue = b;
}
function sg(a, b) {
  for (; a !== null; ) {
    var c = a.alternate;
    if ((a.childLanes & b) === b)
      if (c === null || (c.childLanes & b) === b)
        break;
      else
        c.childLanes |= b;
    else
      a.childLanes |= b, c !== null && (c.childLanes |= b);
    a = a.return;
  }
}
function tg(a, b) {
  ng = a;
  pg = og = null;
  a = a.dependencies;
  a !== null && a.firstContext !== null && ((a.lanes & b) !== 0 && (ug = true), a.firstContext = null);
}
function vg(a, b) {
  if (pg !== a && b !== false && b !== 0) {
    if (typeof b !== "number" || b === 1073741823)
      pg = a, b = 1073741823;
    b = { context: a, observedBits: b, next: null };
    if (og === null) {
      if (ng === null)
        throw Error(y(308));
      og = b;
      ng.dependencies = { lanes: 0, firstContext: b, responders: null };
    } else
      og = og.next = b;
  }
  return a._currentValue;
}
var wg = false;
function xg(a) {
  a.updateQueue = { baseState: a.memoizedState, firstBaseUpdate: null, lastBaseUpdate: null, shared: { pending: null }, effects: null };
}
function yg(a, b) {
  a = a.updateQueue;
  b.updateQueue === a && (b.updateQueue = { baseState: a.baseState, firstBaseUpdate: a.firstBaseUpdate, lastBaseUpdate: a.lastBaseUpdate, shared: a.shared, effects: a.effects });
}
function zg(a, b) {
  return { eventTime: a, lane: b, tag: 0, payload: null, callback: null, next: null };
}
function Ag(a, b) {
  a = a.updateQueue;
  if (a !== null) {
    a = a.shared;
    var c = a.pending;
    c === null ? b.next = b : (b.next = c.next, c.next = b);
    a.pending = b;
  }
}
function Bg(a, b) {
  var c = a.updateQueue, d = a.alternate;
  if (d !== null && (d = d.updateQueue, c === d)) {
    var e = null, f = null;
    c = c.firstBaseUpdate;
    if (c !== null) {
      do {
        var g = { eventTime: c.eventTime, lane: c.lane, tag: c.tag, payload: c.payload, callback: c.callback, next: null };
        f === null ? e = f = g : f = f.next = g;
        c = c.next;
      } while (c !== null);
      f === null ? e = f = b : f = f.next = b;
    } else
      e = f = b;
    c = { baseState: d.baseState, firstBaseUpdate: e, lastBaseUpdate: f, shared: d.shared, effects: d.effects };
    a.updateQueue = c;
    return;
  }
  a = c.lastBaseUpdate;
  a === null ? c.firstBaseUpdate = b : a.next = b;
  c.lastBaseUpdate = b;
}
function Cg(a, b, c, d) {
  var e = a.updateQueue;
  wg = false;
  var f = e.firstBaseUpdate, g = e.lastBaseUpdate, h = e.shared.pending;
  if (h !== null) {
    e.shared.pending = null;
    var k = h, l = k.next;
    k.next = null;
    g === null ? f = l : g.next = l;
    g = k;
    var n = a.alternate;
    if (n !== null) {
      n = n.updateQueue;
      var A = n.lastBaseUpdate;
      A !== g && (A === null ? n.firstBaseUpdate = l : A.next = l, n.lastBaseUpdate = k);
    }
  }
  if (f !== null) {
    A = e.baseState;
    g = 0;
    n = l = k = null;
    do {
      h = f.lane;
      var p = f.eventTime;
      if ((d & h) === h) {
        n !== null && (n = n.next = {
          eventTime: p,
          lane: 0,
          tag: f.tag,
          payload: f.payload,
          callback: f.callback,
          next: null
        });
        a: {
          var C = a, x = f;
          h = b;
          p = c;
          switch (x.tag) {
            case 1:
              C = x.payload;
              if (typeof C === "function") {
                A = C.call(p, A, h);
                break a;
              }
              A = C;
              break a;
            case 3:
              C.flags = C.flags & -4097 | 64;
            case 0:
              C = x.payload;
              h = typeof C === "function" ? C.call(p, A, h) : C;
              if (h === null || h === void 0)
                break a;
              A = m({}, A, h);
              break a;
            case 2:
              wg = true;
          }
        }
        f.callback !== null && (a.flags |= 32, h = e.effects, h === null ? e.effects = [f] : h.push(f));
      } else
        p = { eventTime: p, lane: h, tag: f.tag, payload: f.payload, callback: f.callback, next: null }, n === null ? (l = n = p, k = A) : n = n.next = p, g |= h;
      f = f.next;
      if (f === null)
        if (h = e.shared.pending, h === null)
          break;
        else
          f = h.next, h.next = null, e.lastBaseUpdate = h, e.shared.pending = null;
    } while (1);
    n === null && (k = A);
    e.baseState = k;
    e.firstBaseUpdate = l;
    e.lastBaseUpdate = n;
    Dg |= g;
    a.lanes = g;
    a.memoizedState = A;
  }
}
function Eg(a, b, c) {
  a = b.effects;
  b.effects = null;
  if (a !== null)
    for (b = 0; b < a.length; b++) {
      var d = a[b], e = d.callback;
      if (e !== null) {
        d.callback = null;
        d = c;
        if (typeof e !== "function")
          throw Error(y(191, e));
        e.call(d);
      }
    }
}
var Fg = new aa.Component().refs;
function Gg(a, b, c, d) {
  b = a.memoizedState;
  c = c(d, b);
  c = c === null || c === void 0 ? b : m({}, b, c);
  a.memoizedState = c;
  a.lanes === 0 && (a.updateQueue.baseState = c);
}
var Kg = { isMounted: function(a) {
  return (a = a._reactInternals) ? Zb(a) === a : false;
}, enqueueSetState: function(a, b, c) {
  a = a._reactInternals;
  var d = Hg(), e = Ig(a), f = zg(d, e);
  f.payload = b;
  c !== void 0 && c !== null && (f.callback = c);
  Ag(a, f);
  Jg(a, e, d);
}, enqueueReplaceState: function(a, b, c) {
  a = a._reactInternals;
  var d = Hg(), e = Ig(a), f = zg(d, e);
  f.tag = 1;
  f.payload = b;
  c !== void 0 && c !== null && (f.callback = c);
  Ag(a, f);
  Jg(a, e, d);
}, enqueueForceUpdate: function(a, b) {
  a = a._reactInternals;
  var c = Hg(), d = Ig(a), e = zg(c, d);
  e.tag = 2;
  b !== void 0 && b !== null && (e.callback = b);
  Ag(a, e);
  Jg(a, d, c);
} };
function Lg(a, b, c, d, e, f, g) {
  a = a.stateNode;
  return typeof a.shouldComponentUpdate === "function" ? a.shouldComponentUpdate(d, f, g) : b.prototype && b.prototype.isPureReactComponent ? !Je(c, d) || !Je(e, f) : true;
}
function Mg(a, b, c) {
  var d = false, e = Cf;
  var f = b.contextType;
  typeof f === "object" && f !== null ? f = vg(f) : (e = Ff(b) ? Df : M.current, d = b.contextTypes, f = (d = d !== null && d !== void 0) ? Ef(a, e) : Cf);
  b = new b(c, f);
  a.memoizedState = b.state !== null && b.state !== void 0 ? b.state : null;
  b.updater = Kg;
  a.stateNode = b;
  b._reactInternals = a;
  d && (a = a.stateNode, a.__reactInternalMemoizedUnmaskedChildContext = e, a.__reactInternalMemoizedMaskedChildContext = f);
  return b;
}
function Ng(a, b, c, d) {
  a = b.state;
  typeof b.componentWillReceiveProps === "function" && b.componentWillReceiveProps(c, d);
  typeof b.UNSAFE_componentWillReceiveProps === "function" && b.UNSAFE_componentWillReceiveProps(c, d);
  b.state !== a && Kg.enqueueReplaceState(b, b.state, null);
}
function Og(a, b, c, d) {
  var e = a.stateNode;
  e.props = c;
  e.state = a.memoizedState;
  e.refs = Fg;
  xg(a);
  var f = b.contextType;
  typeof f === "object" && f !== null ? e.context = vg(f) : (f = Ff(b) ? Df : M.current, e.context = Ef(a, f));
  Cg(a, c, e, d);
  e.state = a.memoizedState;
  f = b.getDerivedStateFromProps;
  typeof f === "function" && (Gg(a, b, f, c), e.state = a.memoizedState);
  typeof b.getDerivedStateFromProps === "function" || typeof e.getSnapshotBeforeUpdate === "function" || typeof e.UNSAFE_componentWillMount !== "function" && typeof e.componentWillMount !== "function" || (b = e.state, typeof e.componentWillMount === "function" && e.componentWillMount(), typeof e.UNSAFE_componentWillMount === "function" && e.UNSAFE_componentWillMount(), b !== e.state && Kg.enqueueReplaceState(e, e.state, null), Cg(a, c, e, d), e.state = a.memoizedState);
  typeof e.componentDidMount === "function" && (a.flags |= 4);
}
var Pg = Array.isArray;
function Qg(a, b, c) {
  a = c.ref;
  if (a !== null && typeof a !== "function" && typeof a !== "object") {
    if (c._owner) {
      c = c._owner;
      if (c) {
        if (c.tag !== 1)
          throw Error(y(309));
        var d = c.stateNode;
      }
      if (!d)
        throw Error(y(147, a));
      var e = "" + a;
      if (b !== null && b.ref !== null && typeof b.ref === "function" && b.ref._stringRef === e)
        return b.ref;
      b = function(a2) {
        var b2 = d.refs;
        b2 === Fg && (b2 = d.refs = {});
        a2 === null ? delete b2[e] : b2[e] = a2;
      };
      b._stringRef = e;
      return b;
    }
    if (typeof a !== "string")
      throw Error(y(284));
    if (!c._owner)
      throw Error(y(290, a));
  }
  return a;
}
function Rg(a, b) {
  if (a.type !== "textarea")
    throw Error(y(31, Object.prototype.toString.call(b) === "[object Object]" ? "object with keys {" + Object.keys(b).join(", ") + "}" : b));
}
function Sg(a) {
  function b(b2, c2) {
    if (a) {
      var d2 = b2.lastEffect;
      d2 !== null ? (d2.nextEffect = c2, b2.lastEffect = c2) : b2.firstEffect = b2.lastEffect = c2;
      c2.nextEffect = null;
      c2.flags = 8;
    }
  }
  function c(c2, d2) {
    if (!a)
      return null;
    for (; d2 !== null; )
      b(c2, d2), d2 = d2.sibling;
    return null;
  }
  function d(a2, b2) {
    for (a2 = /* @__PURE__ */ new Map(); b2 !== null; )
      b2.key !== null ? a2.set(b2.key, b2) : a2.set(b2.index, b2), b2 = b2.sibling;
    return a2;
  }
  function e(a2, b2) {
    a2 = Tg(a2, b2);
    a2.index = 0;
    a2.sibling = null;
    return a2;
  }
  function f(b2, c2, d2) {
    b2.index = d2;
    if (!a)
      return c2;
    d2 = b2.alternate;
    if (d2 !== null)
      return d2 = d2.index, d2 < c2 ? (b2.flags = 2, c2) : d2;
    b2.flags = 2;
    return c2;
  }
  function g(b2) {
    a && b2.alternate === null && (b2.flags = 2);
    return b2;
  }
  function h(a2, b2, c2, d2) {
    if (b2 === null || b2.tag !== 6)
      return b2 = Ug(c2, a2.mode, d2), b2.return = a2, b2;
    b2 = e(b2, c2);
    b2.return = a2;
    return b2;
  }
  function k(a2, b2, c2, d2) {
    if (b2 !== null && b2.elementType === c2.type)
      return d2 = e(b2, c2.props), d2.ref = Qg(a2, b2, c2), d2.return = a2, d2;
    d2 = Vg(c2.type, c2.key, c2.props, null, a2.mode, d2);
    d2.ref = Qg(a2, b2, c2);
    d2.return = a2;
    return d2;
  }
  function l(a2, b2, c2, d2) {
    if (b2 === null || b2.tag !== 4 || b2.stateNode.containerInfo !== c2.containerInfo || b2.stateNode.implementation !== c2.implementation)
      return b2 = Wg(c2, a2.mode, d2), b2.return = a2, b2;
    b2 = e(b2, c2.children || []);
    b2.return = a2;
    return b2;
  }
  function n(a2, b2, c2, d2, f2) {
    if (b2 === null || b2.tag !== 7)
      return b2 = Xg(c2, a2.mode, d2, f2), b2.return = a2, b2;
    b2 = e(b2, c2);
    b2.return = a2;
    return b2;
  }
  function A(a2, b2, c2) {
    if (typeof b2 === "string" || typeof b2 === "number")
      return b2 = Ug("" + b2, a2.mode, c2), b2.return = a2, b2;
    if (typeof b2 === "object" && b2 !== null) {
      switch (b2.$$typeof) {
        case sa:
          return c2 = Vg(b2.type, b2.key, b2.props, null, a2.mode, c2), c2.ref = Qg(a2, null, b2), c2.return = a2, c2;
        case ta:
          return b2 = Wg(b2, a2.mode, c2), b2.return = a2, b2;
      }
      if (Pg(b2) || La(b2))
        return b2 = Xg(b2, a2.mode, c2, null), b2.return = a2, b2;
      Rg(a2, b2);
    }
    return null;
  }
  function p(a2, b2, c2, d2) {
    var e2 = b2 !== null ? b2.key : null;
    if (typeof c2 === "string" || typeof c2 === "number")
      return e2 !== null ? null : h(a2, b2, "" + c2, d2);
    if (typeof c2 === "object" && c2 !== null) {
      switch (c2.$$typeof) {
        case sa:
          return c2.key === e2 ? c2.type === ua ? n(a2, b2, c2.props.children, d2, e2) : k(a2, b2, c2, d2) : null;
        case ta:
          return c2.key === e2 ? l(a2, b2, c2, d2) : null;
      }
      if (Pg(c2) || La(c2))
        return e2 !== null ? null : n(a2, b2, c2, d2, null);
      Rg(a2, c2);
    }
    return null;
  }
  function C(a2, b2, c2, d2, e2) {
    if (typeof d2 === "string" || typeof d2 === "number")
      return a2 = a2.get(c2) || null, h(b2, a2, "" + d2, e2);
    if (typeof d2 === "object" && d2 !== null) {
      switch (d2.$$typeof) {
        case sa:
          return a2 = a2.get(d2.key === null ? c2 : d2.key) || null, d2.type === ua ? n(b2, a2, d2.props.children, e2, d2.key) : k(b2, a2, d2, e2);
        case ta:
          return a2 = a2.get(d2.key === null ? c2 : d2.key) || null, l(b2, a2, d2, e2);
      }
      if (Pg(d2) || La(d2))
        return a2 = a2.get(c2) || null, n(b2, a2, d2, e2, null);
      Rg(b2, d2);
    }
    return null;
  }
  function x(e2, g2, h2, k2) {
    for (var l2 = null, t = null, u = g2, z = g2 = 0, q = null; u !== null && z < h2.length; z++) {
      u.index > z ? (q = u, u = null) : q = u.sibling;
      var n2 = p(e2, u, h2[z], k2);
      if (n2 === null) {
        u === null && (u = q);
        break;
      }
      a && u && n2.alternate === null && b(e2, u);
      g2 = f(n2, g2, z);
      t === null ? l2 = n2 : t.sibling = n2;
      t = n2;
      u = q;
    }
    if (z === h2.length)
      return c(e2, u), l2;
    if (u === null) {
      for (; z < h2.length; z++)
        u = A(e2, h2[z], k2), u !== null && (g2 = f(u, g2, z), t === null ? l2 = u : t.sibling = u, t = u);
      return l2;
    }
    for (u = d(e2, u); z < h2.length; z++)
      q = C(u, e2, z, h2[z], k2), q !== null && (a && q.alternate !== null && u.delete(q.key === null ? z : q.key), g2 = f(q, g2, z), t === null ? l2 = q : t.sibling = q, t = q);
    a && u.forEach(function(a2) {
      return b(e2, a2);
    });
    return l2;
  }
  function w(e2, g2, h2, k2) {
    var l2 = La(h2);
    if (typeof l2 !== "function")
      throw Error(y(150));
    h2 = l2.call(h2);
    if (h2 == null)
      throw Error(y(151));
    for (var t = l2 = null, u = g2, z = g2 = 0, q = null, n2 = h2.next(); u !== null && !n2.done; z++, n2 = h2.next()) {
      u.index > z ? (q = u, u = null) : q = u.sibling;
      var w2 = p(e2, u, n2.value, k2);
      if (w2 === null) {
        u === null && (u = q);
        break;
      }
      a && u && w2.alternate === null && b(e2, u);
      g2 = f(w2, g2, z);
      t === null ? l2 = w2 : t.sibling = w2;
      t = w2;
      u = q;
    }
    if (n2.done)
      return c(e2, u), l2;
    if (u === null) {
      for (; !n2.done; z++, n2 = h2.next())
        n2 = A(e2, n2.value, k2), n2 !== null && (g2 = f(n2, g2, z), t === null ? l2 = n2 : t.sibling = n2, t = n2);
      return l2;
    }
    for (u = d(e2, u); !n2.done; z++, n2 = h2.next())
      n2 = C(u, e2, z, n2.value, k2), n2 !== null && (a && n2.alternate !== null && u.delete(n2.key === null ? z : n2.key), g2 = f(n2, g2, z), t === null ? l2 = n2 : t.sibling = n2, t = n2);
    a && u.forEach(function(a2) {
      return b(e2, a2);
    });
    return l2;
  }
  return function(a2, d2, f2, h2) {
    var k2 = typeof f2 === "object" && f2 !== null && f2.type === ua && f2.key === null;
    k2 && (f2 = f2.props.children);
    var l2 = typeof f2 === "object" && f2 !== null;
    if (l2)
      switch (f2.$$typeof) {
        case sa:
          a: {
            l2 = f2.key;
            for (k2 = d2; k2 !== null; ) {
              if (k2.key === l2) {
                switch (k2.tag) {
                  case 7:
                    if (f2.type === ua) {
                      c(a2, k2.sibling);
                      d2 = e(k2, f2.props.children);
                      d2.return = a2;
                      a2 = d2;
                      break a;
                    }
                    break;
                  default:
                    if (k2.elementType === f2.type) {
                      c(a2, k2.sibling);
                      d2 = e(k2, f2.props);
                      d2.ref = Qg(a2, k2, f2);
                      d2.return = a2;
                      a2 = d2;
                      break a;
                    }
                }
                c(a2, k2);
                break;
              } else
                b(a2, k2);
              k2 = k2.sibling;
            }
            f2.type === ua ? (d2 = Xg(f2.props.children, a2.mode, h2, f2.key), d2.return = a2, a2 = d2) : (h2 = Vg(f2.type, f2.key, f2.props, null, a2.mode, h2), h2.ref = Qg(a2, d2, f2), h2.return = a2, a2 = h2);
          }
          return g(a2);
        case ta:
          a: {
            for (k2 = f2.key; d2 !== null; ) {
              if (d2.key === k2)
                if (d2.tag === 4 && d2.stateNode.containerInfo === f2.containerInfo && d2.stateNode.implementation === f2.implementation) {
                  c(a2, d2.sibling);
                  d2 = e(d2, f2.children || []);
                  d2.return = a2;
                  a2 = d2;
                  break a;
                } else {
                  c(a2, d2);
                  break;
                }
              else
                b(a2, d2);
              d2 = d2.sibling;
            }
            d2 = Wg(f2, a2.mode, h2);
            d2.return = a2;
            a2 = d2;
          }
          return g(a2);
      }
    if (typeof f2 === "string" || typeof f2 === "number")
      return f2 = "" + f2, d2 !== null && d2.tag === 6 ? (c(a2, d2.sibling), d2 = e(d2, f2), d2.return = a2, a2 = d2) : (c(a2, d2), d2 = Ug(f2, a2.mode, h2), d2.return = a2, a2 = d2), g(a2);
    if (Pg(f2))
      return x(a2, d2, f2, h2);
    if (La(f2))
      return w(a2, d2, f2, h2);
    l2 && Rg(a2, f2);
    if (typeof f2 === "undefined" && !k2)
      switch (a2.tag) {
        case 1:
        case 22:
        case 0:
        case 11:
        case 15:
          throw Error(y(152, Ra(a2.type) || "Component"));
      }
    return c(a2, d2);
  };
}
var Yg = Sg(true), Zg = Sg(false), $g = {}, ah = Bf($g), bh = Bf($g), ch = Bf($g);
function dh(a) {
  if (a === $g)
    throw Error(y(174));
  return a;
}
function eh(a, b) {
  I(ch, b);
  I(bh, a);
  I(ah, $g);
  a = b.nodeType;
  switch (a) {
    case 9:
    case 11:
      b = (b = b.documentElement) ? b.namespaceURI : mb(null, "");
      break;
    default:
      a = a === 8 ? b.parentNode : b, b = a.namespaceURI || null, a = a.tagName, b = mb(b, a);
  }
  H(ah);
  I(ah, b);
}
function fh() {
  H(ah);
  H(bh);
  H(ch);
}
function gh(a) {
  dh(ch.current);
  var b = dh(ah.current);
  var c = mb(b, a.type);
  b !== c && (I(bh, a), I(ah, c));
}
function hh(a) {
  bh.current === a && (H(ah), H(bh));
}
var P = Bf(0);
function ih(a) {
  for (var b = a; b !== null; ) {
    if (b.tag === 13) {
      var c = b.memoizedState;
      if (c !== null && (c = c.dehydrated, c === null || c.data === "$?" || c.data === "$!"))
        return b;
    } else if (b.tag === 19 && b.memoizedProps.revealOrder !== void 0) {
      if ((b.flags & 64) !== 0)
        return b;
    } else if (b.child !== null) {
      b.child.return = b;
      b = b.child;
      continue;
    }
    if (b === a)
      break;
    for (; b.sibling === null; ) {
      if (b.return === null || b.return === a)
        return null;
      b = b.return;
    }
    b.sibling.return = b.return;
    b = b.sibling;
  }
  return null;
}
var jh = null, kh = null, lh = false;
function mh(a, b) {
  var c = nh(5, null, null, 0);
  c.elementType = "DELETED";
  c.type = "DELETED";
  c.stateNode = b;
  c.return = a;
  c.flags = 8;
  a.lastEffect !== null ? (a.lastEffect.nextEffect = c, a.lastEffect = c) : a.firstEffect = a.lastEffect = c;
}
function oh(a, b) {
  switch (a.tag) {
    case 5:
      var c = a.type;
      b = b.nodeType !== 1 || c.toLowerCase() !== b.nodeName.toLowerCase() ? null : b;
      return b !== null ? (a.stateNode = b, true) : false;
    case 6:
      return b = a.pendingProps === "" || b.nodeType !== 3 ? null : b, b !== null ? (a.stateNode = b, true) : false;
    case 13:
      return false;
    default:
      return false;
  }
}
function ph(a) {
  if (lh) {
    var b = kh;
    if (b) {
      var c = b;
      if (!oh(a, b)) {
        b = rf(c.nextSibling);
        if (!b || !oh(a, b)) {
          a.flags = a.flags & -1025 | 2;
          lh = false;
          jh = a;
          return;
        }
        mh(jh, c);
      }
      jh = a;
      kh = rf(b.firstChild);
    } else
      a.flags = a.flags & -1025 | 2, lh = false, jh = a;
  }
}
function qh(a) {
  for (a = a.return; a !== null && a.tag !== 5 && a.tag !== 3 && a.tag !== 13; )
    a = a.return;
  jh = a;
}
function rh(a) {
  if (a !== jh)
    return false;
  if (!lh)
    return qh(a), lh = true, false;
  var b = a.type;
  if (a.tag !== 5 || b !== "head" && b !== "body" && !nf(b, a.memoizedProps))
    for (b = kh; b; )
      mh(a, b), b = rf(b.nextSibling);
  qh(a);
  if (a.tag === 13) {
    a = a.memoizedState;
    a = a !== null ? a.dehydrated : null;
    if (!a)
      throw Error(y(317));
    a: {
      a = a.nextSibling;
      for (b = 0; a; ) {
        if (a.nodeType === 8) {
          var c = a.data;
          if (c === "/$") {
            if (b === 0) {
              kh = rf(a.nextSibling);
              break a;
            }
            b--;
          } else
            c !== "$" && c !== "$!" && c !== "$?" || b++;
        }
        a = a.nextSibling;
      }
      kh = null;
    }
  } else
    kh = jh ? rf(a.stateNode.nextSibling) : null;
  return true;
}
function sh() {
  kh = jh = null;
  lh = false;
}
var th = [];
function uh() {
  for (var a = 0; a < th.length; a++)
    th[a]._workInProgressVersionPrimary = null;
  th.length = 0;
}
var vh = ra.ReactCurrentDispatcher, wh = ra.ReactCurrentBatchConfig, xh = 0, R = null, S = null, T = null, yh = false, zh = false;
function Ah() {
  throw Error(y(321));
}
function Bh(a, b) {
  if (b === null)
    return false;
  for (var c = 0; c < b.length && c < a.length; c++)
    if (!He(a[c], b[c]))
      return false;
  return true;
}
function Ch(a, b, c, d, e, f) {
  xh = f;
  R = b;
  b.memoizedState = null;
  b.updateQueue = null;
  b.lanes = 0;
  vh.current = a === null || a.memoizedState === null ? Dh : Eh;
  a = c(d, e);
  if (zh) {
    f = 0;
    do {
      zh = false;
      if (!(25 > f))
        throw Error(y(301));
      f += 1;
      T = S = null;
      b.updateQueue = null;
      vh.current = Fh;
      a = c(d, e);
    } while (zh);
  }
  vh.current = Gh;
  b = S !== null && S.next !== null;
  xh = 0;
  T = S = R = null;
  yh = false;
  if (b)
    throw Error(y(300));
  return a;
}
function Hh() {
  var a = { memoizedState: null, baseState: null, baseQueue: null, queue: null, next: null };
  T === null ? R.memoizedState = T = a : T = T.next = a;
  return T;
}
function Ih() {
  if (S === null) {
    var a = R.alternate;
    a = a !== null ? a.memoizedState : null;
  } else
    a = S.next;
  var b = T === null ? R.memoizedState : T.next;
  if (b !== null)
    T = b, S = a;
  else {
    if (a === null)
      throw Error(y(310));
    S = a;
    a = { memoizedState: S.memoizedState, baseState: S.baseState, baseQueue: S.baseQueue, queue: S.queue, next: null };
    T === null ? R.memoizedState = T = a : T = T.next = a;
  }
  return T;
}
function Jh(a, b) {
  return typeof b === "function" ? b(a) : b;
}
function Kh(a) {
  var b = Ih(), c = b.queue;
  if (c === null)
    throw Error(y(311));
  c.lastRenderedReducer = a;
  var d = S, e = d.baseQueue, f = c.pending;
  if (f !== null) {
    if (e !== null) {
      var g = e.next;
      e.next = f.next;
      f.next = g;
    }
    d.baseQueue = e = f;
    c.pending = null;
  }
  if (e !== null) {
    e = e.next;
    d = d.baseState;
    var h = g = f = null, k = e;
    do {
      var l = k.lane;
      if ((xh & l) === l)
        h !== null && (h = h.next = { lane: 0, action: k.action, eagerReducer: k.eagerReducer, eagerState: k.eagerState, next: null }), d = k.eagerReducer === a ? k.eagerState : a(d, k.action);
      else {
        var n = {
          lane: l,
          action: k.action,
          eagerReducer: k.eagerReducer,
          eagerState: k.eagerState,
          next: null
        };
        h === null ? (g = h = n, f = d) : h = h.next = n;
        R.lanes |= l;
        Dg |= l;
      }
      k = k.next;
    } while (k !== null && k !== e);
    h === null ? f = d : h.next = g;
    He(d, b.memoizedState) || (ug = true);
    b.memoizedState = d;
    b.baseState = f;
    b.baseQueue = h;
    c.lastRenderedState = d;
  }
  return [b.memoizedState, c.dispatch];
}
function Lh(a) {
  var b = Ih(), c = b.queue;
  if (c === null)
    throw Error(y(311));
  c.lastRenderedReducer = a;
  var d = c.dispatch, e = c.pending, f = b.memoizedState;
  if (e !== null) {
    c.pending = null;
    var g = e = e.next;
    do
      f = a(f, g.action), g = g.next;
    while (g !== e);
    He(f, b.memoizedState) || (ug = true);
    b.memoizedState = f;
    b.baseQueue === null && (b.baseState = f);
    c.lastRenderedState = f;
  }
  return [f, d];
}
function Mh(a, b, c) {
  var d = b._getVersion;
  d = d(b._source);
  var e = b._workInProgressVersionPrimary;
  if (e !== null)
    a = e === d;
  else if (a = a.mutableReadLanes, a = (xh & a) === a)
    b._workInProgressVersionPrimary = d, th.push(b);
  if (a)
    return c(b._source);
  th.push(b);
  throw Error(y(350));
}
function Nh(a, b, c, d) {
  var e = U;
  if (e === null)
    throw Error(y(349));
  var f = b._getVersion, g = f(b._source), h = vh.current, k = h.useState(function() {
    return Mh(e, b, c);
  }), l = k[1], n = k[0];
  k = T;
  var A = a.memoizedState, p = A.refs, C = p.getSnapshot, x = A.source;
  A = A.subscribe;
  var w = R;
  a.memoizedState = { refs: p, source: b, subscribe: d };
  h.useEffect(function() {
    p.getSnapshot = c;
    p.setSnapshot = l;
    var a2 = f(b._source);
    if (!He(g, a2)) {
      a2 = c(b._source);
      He(n, a2) || (l(a2), a2 = Ig(w), e.mutableReadLanes |= a2 & e.pendingLanes);
      a2 = e.mutableReadLanes;
      e.entangledLanes |= a2;
      for (var d2 = e.entanglements, h2 = a2; 0 < h2; ) {
        var k2 = 31 - Vc(h2), v = 1 << k2;
        d2[k2] |= a2;
        h2 &= ~v;
      }
    }
  }, [c, b, d]);
  h.useEffect(function() {
    return d(b._source, function() {
      var a2 = p.getSnapshot, c2 = p.setSnapshot;
      try {
        c2(a2(b._source));
        var d2 = Ig(w);
        e.mutableReadLanes |= d2 & e.pendingLanes;
      } catch (q) {
        c2(function() {
          throw q;
        });
      }
    });
  }, [b, d]);
  He(C, c) && He(x, b) && He(A, d) || (a = { pending: null, dispatch: null, lastRenderedReducer: Jh, lastRenderedState: n }, a.dispatch = l = Oh.bind(null, R, a), k.queue = a, k.baseQueue = null, n = Mh(e, b, c), k.memoizedState = k.baseState = n);
  return n;
}
function Ph(a, b, c) {
  var d = Ih();
  return Nh(d, a, b, c);
}
function Qh(a) {
  var b = Hh();
  typeof a === "function" && (a = a());
  b.memoizedState = b.baseState = a;
  a = b.queue = { pending: null, dispatch: null, lastRenderedReducer: Jh, lastRenderedState: a };
  a = a.dispatch = Oh.bind(null, R, a);
  return [b.memoizedState, a];
}
function Rh(a, b, c, d) {
  a = { tag: a, create: b, destroy: c, deps: d, next: null };
  b = R.updateQueue;
  b === null ? (b = { lastEffect: null }, R.updateQueue = b, b.lastEffect = a.next = a) : (c = b.lastEffect, c === null ? b.lastEffect = a.next = a : (d = c.next, c.next = a, a.next = d, b.lastEffect = a));
  return a;
}
function Sh(a) {
  var b = Hh();
  a = { current: a };
  return b.memoizedState = a;
}
function Th() {
  return Ih().memoizedState;
}
function Uh(a, b, c, d) {
  var e = Hh();
  R.flags |= a;
  e.memoizedState = Rh(1 | b, c, void 0, d === void 0 ? null : d);
}
function Vh(a, b, c, d) {
  var e = Ih();
  d = d === void 0 ? null : d;
  var f = void 0;
  if (S !== null) {
    var g = S.memoizedState;
    f = g.destroy;
    if (d !== null && Bh(d, g.deps)) {
      Rh(b, c, f, d);
      return;
    }
  }
  R.flags |= a;
  e.memoizedState = Rh(1 | b, c, f, d);
}
function Wh(a, b) {
  return Uh(516, 4, a, b);
}
function Xh(a, b) {
  return Vh(516, 4, a, b);
}
function Yh(a, b) {
  return Vh(4, 2, a, b);
}
function Zh(a, b) {
  if (typeof b === "function")
    return a = a(), b(a), function() {
      b(null);
    };
  if (b !== null && b !== void 0)
    return a = a(), b.current = a, function() {
      b.current = null;
    };
}
function $h(a, b, c) {
  c = c !== null && c !== void 0 ? c.concat([a]) : null;
  return Vh(4, 2, Zh.bind(null, b, a), c);
}
function ai() {
}
function bi(a, b) {
  var c = Ih();
  b = b === void 0 ? null : b;
  var d = c.memoizedState;
  if (d !== null && b !== null && Bh(b, d[1]))
    return d[0];
  c.memoizedState = [a, b];
  return a;
}
function ci(a, b) {
  var c = Ih();
  b = b === void 0 ? null : b;
  var d = c.memoizedState;
  if (d !== null && b !== null && Bh(b, d[1]))
    return d[0];
  a = a();
  c.memoizedState = [a, b];
  return a;
}
function di(a, b) {
  var c = eg();
  gg(98 > c ? 98 : c, function() {
    a(true);
  });
  gg(97 < c ? 97 : c, function() {
    var c2 = wh.transition;
    wh.transition = 1;
    try {
      a(false), b();
    } finally {
      wh.transition = c2;
    }
  });
}
function Oh(a, b, c) {
  var d = Hg(), e = Ig(a), f = { lane: e, action: c, eagerReducer: null, eagerState: null, next: null }, g = b.pending;
  g === null ? f.next = f : (f.next = g.next, g.next = f);
  b.pending = f;
  g = a.alternate;
  if (a === R || g !== null && g === R)
    zh = yh = true;
  else {
    if (a.lanes === 0 && (g === null || g.lanes === 0) && (g = b.lastRenderedReducer, g !== null))
      try {
        var h = b.lastRenderedState, k = g(h, c);
        f.eagerReducer = g;
        f.eagerState = k;
        if (He(k, h))
          return;
      } catch (l) {
      } finally {
      }
    Jg(a, e, d);
  }
}
var Gh = { readContext: vg, useCallback: Ah, useContext: Ah, useEffect: Ah, useImperativeHandle: Ah, useLayoutEffect: Ah, useMemo: Ah, useReducer: Ah, useRef: Ah, useState: Ah, useDebugValue: Ah, useDeferredValue: Ah, useTransition: Ah, useMutableSource: Ah, useOpaqueIdentifier: Ah, unstable_isNewReconciler: false }, Dh = { readContext: vg, useCallback: function(a, b) {
  Hh().memoizedState = [a, b === void 0 ? null : b];
  return a;
}, useContext: vg, useEffect: Wh, useImperativeHandle: function(a, b, c) {
  c = c !== null && c !== void 0 ? c.concat([a]) : null;
  return Uh(4, 2, Zh.bind(null, b, a), c);
}, useLayoutEffect: function(a, b) {
  return Uh(4, 2, a, b);
}, useMemo: function(a, b) {
  var c = Hh();
  b = b === void 0 ? null : b;
  a = a();
  c.memoizedState = [a, b];
  return a;
}, useReducer: function(a, b, c) {
  var d = Hh();
  b = c !== void 0 ? c(b) : b;
  d.memoizedState = d.baseState = b;
  a = d.queue = { pending: null, dispatch: null, lastRenderedReducer: a, lastRenderedState: b };
  a = a.dispatch = Oh.bind(null, R, a);
  return [d.memoizedState, a];
}, useRef: Sh, useState: Qh, useDebugValue: ai, useDeferredValue: function(a) {
  var b = Qh(a), c = b[0], d = b[1];
  Wh(function() {
    var b2 = wh.transition;
    wh.transition = 1;
    try {
      d(a);
    } finally {
      wh.transition = b2;
    }
  }, [a]);
  return c;
}, useTransition: function() {
  var a = Qh(false), b = a[0];
  a = di.bind(null, a[1]);
  Sh(a);
  return [a, b];
}, useMutableSource: function(a, b, c) {
  var d = Hh();
  d.memoizedState = { refs: { getSnapshot: b, setSnapshot: null }, source: a, subscribe: c };
  return Nh(d, a, b, c);
}, useOpaqueIdentifier: function() {
  if (lh) {
    var a = false, b = uf(function() {
      a || (a = true, c("r:" + (tf++).toString(36)));
      throw Error(y(355));
    }), c = Qh(b)[1];
    (R.mode & 2) === 0 && (R.flags |= 516, Rh(5, function() {
      c("r:" + (tf++).toString(36));
    }, void 0, null));
    return b;
  }
  b = "r:" + (tf++).toString(36);
  Qh(b);
  return b;
}, unstable_isNewReconciler: false }, Eh = { readContext: vg, useCallback: bi, useContext: vg, useEffect: Xh, useImperativeHandle: $h, useLayoutEffect: Yh, useMemo: ci, useReducer: Kh, useRef: Th, useState: function() {
  return Kh(Jh);
}, useDebugValue: ai, useDeferredValue: function(a) {
  var b = Kh(Jh), c = b[0], d = b[1];
  Xh(function() {
    var b2 = wh.transition;
    wh.transition = 1;
    try {
      d(a);
    } finally {
      wh.transition = b2;
    }
  }, [a]);
  return c;
}, useTransition: function() {
  var a = Kh(Jh)[0];
  return [
    Th().current,
    a
  ];
}, useMutableSource: Ph, useOpaqueIdentifier: function() {
  return Kh(Jh)[0];
}, unstable_isNewReconciler: false }, Fh = { readContext: vg, useCallback: bi, useContext: vg, useEffect: Xh, useImperativeHandle: $h, useLayoutEffect: Yh, useMemo: ci, useReducer: Lh, useRef: Th, useState: function() {
  return Lh(Jh);
}, useDebugValue: ai, useDeferredValue: function(a) {
  var b = Lh(Jh), c = b[0], d = b[1];
  Xh(function() {
    var b2 = wh.transition;
    wh.transition = 1;
    try {
      d(a);
    } finally {
      wh.transition = b2;
    }
  }, [a]);
  return c;
}, useTransition: function() {
  var a = Lh(Jh)[0];
  return [
    Th().current,
    a
  ];
}, useMutableSource: Ph, useOpaqueIdentifier: function() {
  return Lh(Jh)[0];
}, unstable_isNewReconciler: false }, ei = ra.ReactCurrentOwner, ug = false;
function fi(a, b, c, d) {
  b.child = a === null ? Zg(b, null, c, d) : Yg(b, a.child, c, d);
}
function gi(a, b, c, d, e) {
  c = c.render;
  var f = b.ref;
  tg(b, e);
  d = Ch(a, b, c, d, f, e);
  if (a !== null && !ug)
    return b.updateQueue = a.updateQueue, b.flags &= -517, a.lanes &= ~e, hi(a, b, e);
  b.flags |= 1;
  fi(a, b, d, e);
  return b.child;
}
function ii(a, b, c, d, e, f) {
  if (a === null) {
    var g = c.type;
    if (typeof g === "function" && !ji(g) && g.defaultProps === void 0 && c.compare === null && c.defaultProps === void 0)
      return b.tag = 15, b.type = g, ki(a, b, g, d, e, f);
    a = Vg(c.type, null, d, b, b.mode, f);
    a.ref = b.ref;
    a.return = b;
    return b.child = a;
  }
  g = a.child;
  if ((e & f) === 0 && (e = g.memoizedProps, c = c.compare, c = c !== null ? c : Je, c(e, d) && a.ref === b.ref))
    return hi(a, b, f);
  b.flags |= 1;
  a = Tg(g, d);
  a.ref = b.ref;
  a.return = b;
  return b.child = a;
}
function ki(a, b, c, d, e, f) {
  if (a !== null && Je(a.memoizedProps, d) && a.ref === b.ref)
    if (ug = false, (f & e) !== 0)
      (a.flags & 16384) !== 0 && (ug = true);
    else
      return b.lanes = a.lanes, hi(a, b, f);
  return li(a, b, c, d, f);
}
function mi(a, b, c) {
  var d = b.pendingProps, e = d.children, f = a !== null ? a.memoizedState : null;
  if (d.mode === "hidden" || d.mode === "unstable-defer-without-hiding")
    if ((b.mode & 4) === 0)
      b.memoizedState = { baseLanes: 0 }, ni(b, c);
    else if ((c & 1073741824) !== 0)
      b.memoizedState = { baseLanes: 0 }, ni(b, f !== null ? f.baseLanes : c);
    else
      return a = f !== null ? f.baseLanes | c : c, b.lanes = b.childLanes = 1073741824, b.memoizedState = { baseLanes: a }, ni(b, a), null;
  else
    f !== null ? (d = f.baseLanes | c, b.memoizedState = null) : d = c, ni(b, d);
  fi(a, b, e, c);
  return b.child;
}
function oi(a, b) {
  var c = b.ref;
  if (a === null && c !== null || a !== null && a.ref !== c)
    b.flags |= 128;
}
function li(a, b, c, d, e) {
  var f = Ff(c) ? Df : M.current;
  f = Ef(b, f);
  tg(b, e);
  c = Ch(a, b, c, d, f, e);
  if (a !== null && !ug)
    return b.updateQueue = a.updateQueue, b.flags &= -517, a.lanes &= ~e, hi(a, b, e);
  b.flags |= 1;
  fi(a, b, c, e);
  return b.child;
}
function pi(a, b, c, d, e) {
  if (Ff(c)) {
    var f = true;
    Jf(b);
  } else
    f = false;
  tg(b, e);
  if (b.stateNode === null)
    a !== null && (a.alternate = null, b.alternate = null, b.flags |= 2), Mg(b, c, d), Og(b, c, d, e), d = true;
  else if (a === null) {
    var g = b.stateNode, h = b.memoizedProps;
    g.props = h;
    var k = g.context, l = c.contextType;
    typeof l === "object" && l !== null ? l = vg(l) : (l = Ff(c) ? Df : M.current, l = Ef(b, l));
    var n = c.getDerivedStateFromProps, A = typeof n === "function" || typeof g.getSnapshotBeforeUpdate === "function";
    A || typeof g.UNSAFE_componentWillReceiveProps !== "function" && typeof g.componentWillReceiveProps !== "function" || (h !== d || k !== l) && Ng(b, g, d, l);
    wg = false;
    var p = b.memoizedState;
    g.state = p;
    Cg(b, d, g, e);
    k = b.memoizedState;
    h !== d || p !== k || N.current || wg ? (typeof n === "function" && (Gg(b, c, n, d), k = b.memoizedState), (h = wg || Lg(b, c, h, d, p, k, l)) ? (A || typeof g.UNSAFE_componentWillMount !== "function" && typeof g.componentWillMount !== "function" || (typeof g.componentWillMount === "function" && g.componentWillMount(), typeof g.UNSAFE_componentWillMount === "function" && g.UNSAFE_componentWillMount()), typeof g.componentDidMount === "function" && (b.flags |= 4)) : (typeof g.componentDidMount === "function" && (b.flags |= 4), b.memoizedProps = d, b.memoizedState = k), g.props = d, g.state = k, g.context = l, d = h) : (typeof g.componentDidMount === "function" && (b.flags |= 4), d = false);
  } else {
    g = b.stateNode;
    yg(a, b);
    h = b.memoizedProps;
    l = b.type === b.elementType ? h : lg(b.type, h);
    g.props = l;
    A = b.pendingProps;
    p = g.context;
    k = c.contextType;
    typeof k === "object" && k !== null ? k = vg(k) : (k = Ff(c) ? Df : M.current, k = Ef(b, k));
    var C = c.getDerivedStateFromProps;
    (n = typeof C === "function" || typeof g.getSnapshotBeforeUpdate === "function") || typeof g.UNSAFE_componentWillReceiveProps !== "function" && typeof g.componentWillReceiveProps !== "function" || (h !== A || p !== k) && Ng(b, g, d, k);
    wg = false;
    p = b.memoizedState;
    g.state = p;
    Cg(b, d, g, e);
    var x = b.memoizedState;
    h !== A || p !== x || N.current || wg ? (typeof C === "function" && (Gg(b, c, C, d), x = b.memoizedState), (l = wg || Lg(b, c, l, d, p, x, k)) ? (n || typeof g.UNSAFE_componentWillUpdate !== "function" && typeof g.componentWillUpdate !== "function" || (typeof g.componentWillUpdate === "function" && g.componentWillUpdate(d, x, k), typeof g.UNSAFE_componentWillUpdate === "function" && g.UNSAFE_componentWillUpdate(d, x, k)), typeof g.componentDidUpdate === "function" && (b.flags |= 4), typeof g.getSnapshotBeforeUpdate === "function" && (b.flags |= 256)) : (typeof g.componentDidUpdate !== "function" || h === a.memoizedProps && p === a.memoizedState || (b.flags |= 4), typeof g.getSnapshotBeforeUpdate !== "function" || h === a.memoizedProps && p === a.memoizedState || (b.flags |= 256), b.memoizedProps = d, b.memoizedState = x), g.props = d, g.state = x, g.context = k, d = l) : (typeof g.componentDidUpdate !== "function" || h === a.memoizedProps && p === a.memoizedState || (b.flags |= 4), typeof g.getSnapshotBeforeUpdate !== "function" || h === a.memoizedProps && p === a.memoizedState || (b.flags |= 256), d = false);
  }
  return qi(a, b, c, d, f, e);
}
function qi(a, b, c, d, e, f) {
  oi(a, b);
  var g = (b.flags & 64) !== 0;
  if (!d && !g)
    return e && Kf(b, c, false), hi(a, b, f);
  d = b.stateNode;
  ei.current = b;
  var h = g && typeof c.getDerivedStateFromError !== "function" ? null : d.render();
  b.flags |= 1;
  a !== null && g ? (b.child = Yg(b, a.child, null, f), b.child = Yg(b, null, h, f)) : fi(a, b, h, f);
  b.memoizedState = d.state;
  e && Kf(b, c, true);
  return b.child;
}
function ri(a) {
  var b = a.stateNode;
  b.pendingContext ? Hf(a, b.pendingContext, b.pendingContext !== b.context) : b.context && Hf(a, b.context, false);
  eh(a, b.containerInfo);
}
var si = { dehydrated: null, retryLane: 0 };
function ti(a, b, c) {
  var d = b.pendingProps, e = P.current, f = false, g;
  (g = (b.flags & 64) !== 0) || (g = a !== null && a.memoizedState === null ? false : (e & 2) !== 0);
  g ? (f = true, b.flags &= -65) : a !== null && a.memoizedState === null || d.fallback === void 0 || d.unstable_avoidThisFallback === true || (e |= 1);
  I(P, e & 1);
  if (a === null) {
    d.fallback !== void 0 && ph(b);
    a = d.children;
    e = d.fallback;
    if (f)
      return a = ui(b, a, e, c), b.child.memoizedState = { baseLanes: c }, b.memoizedState = si, a;
    if (typeof d.unstable_expectedLoadTime === "number")
      return a = ui(b, a, e, c), b.child.memoizedState = { baseLanes: c }, b.memoizedState = si, b.lanes = 33554432, a;
    c = vi({ mode: "visible", children: a }, b.mode, c, null);
    c.return = b;
    return b.child = c;
  }
  if (a.memoizedState !== null) {
    if (f)
      return d = wi(a, b, d.children, d.fallback, c), f = b.child, e = a.child.memoizedState, f.memoizedState = e === null ? { baseLanes: c } : { baseLanes: e.baseLanes | c }, f.childLanes = a.childLanes & ~c, b.memoizedState = si, d;
    c = xi(a, b, d.children, c);
    b.memoizedState = null;
    return c;
  }
  if (f)
    return d = wi(a, b, d.children, d.fallback, c), f = b.child, e = a.child.memoizedState, f.memoizedState = e === null ? { baseLanes: c } : { baseLanes: e.baseLanes | c }, f.childLanes = a.childLanes & ~c, b.memoizedState = si, d;
  c = xi(a, b, d.children, c);
  b.memoizedState = null;
  return c;
}
function ui(a, b, c, d) {
  var e = a.mode, f = a.child;
  b = { mode: "hidden", children: b };
  (e & 2) === 0 && f !== null ? (f.childLanes = 0, f.pendingProps = b) : f = vi(b, e, 0, null);
  c = Xg(c, e, d, null);
  f.return = a;
  c.return = a;
  f.sibling = c;
  a.child = f;
  return c;
}
function xi(a, b, c, d) {
  var e = a.child;
  a = e.sibling;
  c = Tg(e, { mode: "visible", children: c });
  (b.mode & 2) === 0 && (c.lanes = d);
  c.return = b;
  c.sibling = null;
  a !== null && (a.nextEffect = null, a.flags = 8, b.firstEffect = b.lastEffect = a);
  return b.child = c;
}
function wi(a, b, c, d, e) {
  var f = b.mode, g = a.child;
  a = g.sibling;
  var h = { mode: "hidden", children: c };
  (f & 2) === 0 && b.child !== g ? (c = b.child, c.childLanes = 0, c.pendingProps = h, g = c.lastEffect, g !== null ? (b.firstEffect = c.firstEffect, b.lastEffect = g, g.nextEffect = null) : b.firstEffect = b.lastEffect = null) : c = Tg(g, h);
  a !== null ? d = Tg(a, d) : (d = Xg(d, f, e, null), d.flags |= 2);
  d.return = b;
  c.return = b;
  c.sibling = d;
  b.child = c;
  return d;
}
function yi(a, b) {
  a.lanes |= b;
  var c = a.alternate;
  c !== null && (c.lanes |= b);
  sg(a.return, b);
}
function zi(a, b, c, d, e, f) {
  var g = a.memoizedState;
  g === null ? a.memoizedState = { isBackwards: b, rendering: null, renderingStartTime: 0, last: d, tail: c, tailMode: e, lastEffect: f } : (g.isBackwards = b, g.rendering = null, g.renderingStartTime = 0, g.last = d, g.tail = c, g.tailMode = e, g.lastEffect = f);
}
function Ai(a, b, c) {
  var d = b.pendingProps, e = d.revealOrder, f = d.tail;
  fi(a, b, d.children, c);
  d = P.current;
  if ((d & 2) !== 0)
    d = d & 1 | 2, b.flags |= 64;
  else {
    if (a !== null && (a.flags & 64) !== 0)
      a:
        for (a = b.child; a !== null; ) {
          if (a.tag === 13)
            a.memoizedState !== null && yi(a, c);
          else if (a.tag === 19)
            yi(a, c);
          else if (a.child !== null) {
            a.child.return = a;
            a = a.child;
            continue;
          }
          if (a === b)
            break a;
          for (; a.sibling === null; ) {
            if (a.return === null || a.return === b)
              break a;
            a = a.return;
          }
          a.sibling.return = a.return;
          a = a.sibling;
        }
    d &= 1;
  }
  I(P, d);
  if ((b.mode & 2) === 0)
    b.memoizedState = null;
  else
    switch (e) {
      case "forwards":
        c = b.child;
        for (e = null; c !== null; )
          a = c.alternate, a !== null && ih(a) === null && (e = c), c = c.sibling;
        c = e;
        c === null ? (e = b.child, b.child = null) : (e = c.sibling, c.sibling = null);
        zi(b, false, e, c, f, b.lastEffect);
        break;
      case "backwards":
        c = null;
        e = b.child;
        for (b.child = null; e !== null; ) {
          a = e.alternate;
          if (a !== null && ih(a) === null) {
            b.child = e;
            break;
          }
          a = e.sibling;
          e.sibling = c;
          c = e;
          e = a;
        }
        zi(b, true, c, null, f, b.lastEffect);
        break;
      case "together":
        zi(b, false, null, null, void 0, b.lastEffect);
        break;
      default:
        b.memoizedState = null;
    }
  return b.child;
}
function hi(a, b, c) {
  a !== null && (b.dependencies = a.dependencies);
  Dg |= b.lanes;
  if ((c & b.childLanes) !== 0) {
    if (a !== null && b.child !== a.child)
      throw Error(y(153));
    if (b.child !== null) {
      a = b.child;
      c = Tg(a, a.pendingProps);
      b.child = c;
      for (c.return = b; a.sibling !== null; )
        a = a.sibling, c = c.sibling = Tg(a, a.pendingProps), c.return = b;
      c.sibling = null;
    }
    return b.child;
  }
  return null;
}
var Bi, Ci, Di, Ei;
Bi = function(a, b) {
  for (var c = b.child; c !== null; ) {
    if (c.tag === 5 || c.tag === 6)
      a.appendChild(c.stateNode);
    else if (c.tag !== 4 && c.child !== null) {
      c.child.return = c;
      c = c.child;
      continue;
    }
    if (c === b)
      break;
    for (; c.sibling === null; ) {
      if (c.return === null || c.return === b)
        return;
      c = c.return;
    }
    c.sibling.return = c.return;
    c = c.sibling;
  }
};
Ci = function() {
};
Di = function(a, b, c, d) {
  var e = a.memoizedProps;
  if (e !== d) {
    a = b.stateNode;
    dh(ah.current);
    var f = null;
    switch (c) {
      case "input":
        e = Ya(a, e);
        d = Ya(a, d);
        f = [];
        break;
      case "option":
        e = eb(a, e);
        d = eb(a, d);
        f = [];
        break;
      case "select":
        e = m({}, e, { value: void 0 });
        d = m({}, d, { value: void 0 });
        f = [];
        break;
      case "textarea":
        e = gb(a, e);
        d = gb(a, d);
        f = [];
        break;
      default:
        typeof e.onClick !== "function" && typeof d.onClick === "function" && (a.onclick = jf);
    }
    vb(c, d);
    var g;
    c = null;
    for (l in e)
      if (!d.hasOwnProperty(l) && e.hasOwnProperty(l) && e[l] != null)
        if (l === "style") {
          var h = e[l];
          for (g in h)
            h.hasOwnProperty(g) && (c || (c = {}), c[g] = "");
        } else
          l !== "dangerouslySetInnerHTML" && l !== "children" && l !== "suppressContentEditableWarning" && l !== "suppressHydrationWarning" && l !== "autoFocus" && (ca.hasOwnProperty(l) ? f || (f = []) : (f = f || []).push(l, null));
    for (l in d) {
      var k = d[l];
      h = e != null ? e[l] : void 0;
      if (d.hasOwnProperty(l) && k !== h && (k != null || h != null))
        if (l === "style")
          if (h) {
            for (g in h)
              !h.hasOwnProperty(g) || k && k.hasOwnProperty(g) || (c || (c = {}), c[g] = "");
            for (g in k)
              k.hasOwnProperty(g) && h[g] !== k[g] && (c || (c = {}), c[g] = k[g]);
          } else
            c || (f || (f = []), f.push(l, c)), c = k;
        else
          l === "dangerouslySetInnerHTML" ? (k = k ? k.__html : void 0, h = h ? h.__html : void 0, k != null && h !== k && (f = f || []).push(l, k)) : l === "children" ? typeof k !== "string" && typeof k !== "number" || (f = f || []).push(l, "" + k) : l !== "suppressContentEditableWarning" && l !== "suppressHydrationWarning" && (ca.hasOwnProperty(l) ? (k != null && l === "onScroll" && G("scroll", a), f || h === k || (f = [])) : typeof k === "object" && k !== null && k.$$typeof === Ga ? k.toString() : (f = f || []).push(l, k));
    }
    c && (f = f || []).push("style", c);
    var l = f;
    if (b.updateQueue = l)
      b.flags |= 4;
  }
};
Ei = function(a, b, c, d) {
  c !== d && (b.flags |= 4);
};
function Fi(a, b) {
  if (!lh)
    switch (a.tailMode) {
      case "hidden":
        b = a.tail;
        for (var c = null; b !== null; )
          b.alternate !== null && (c = b), b = b.sibling;
        c === null ? a.tail = null : c.sibling = null;
        break;
      case "collapsed":
        c = a.tail;
        for (var d = null; c !== null; )
          c.alternate !== null && (d = c), c = c.sibling;
        d === null ? b || a.tail === null ? a.tail = null : a.tail.sibling = null : d.sibling = null;
    }
}
function Gi(a, b, c) {
  var d = b.pendingProps;
  switch (b.tag) {
    case 2:
    case 16:
    case 15:
    case 0:
    case 11:
    case 7:
    case 8:
    case 12:
    case 9:
    case 14:
      return null;
    case 1:
      return Ff(b.type) && Gf(), null;
    case 3:
      fh();
      H(N);
      H(M);
      uh();
      d = b.stateNode;
      d.pendingContext && (d.context = d.pendingContext, d.pendingContext = null);
      if (a === null || a.child === null)
        rh(b) ? b.flags |= 4 : d.hydrate || (b.flags |= 256);
      Ci(b);
      return null;
    case 5:
      hh(b);
      var e = dh(ch.current);
      c = b.type;
      if (a !== null && b.stateNode != null)
        Di(a, b, c, d, e), a.ref !== b.ref && (b.flags |= 128);
      else {
        if (!d) {
          if (b.stateNode === null)
            throw Error(y(166));
          return null;
        }
        a = dh(ah.current);
        if (rh(b)) {
          d = b.stateNode;
          c = b.type;
          var f = b.memoizedProps;
          d[wf] = b;
          d[xf] = f;
          switch (c) {
            case "dialog":
              G("cancel", d);
              G("close", d);
              break;
            case "iframe":
            case "object":
            case "embed":
              G("load", d);
              break;
            case "video":
            case "audio":
              for (a = 0; a < Xe.length; a++)
                G(Xe[a], d);
              break;
            case "source":
              G("error", d);
              break;
            case "img":
            case "image":
            case "link":
              G("error", d);
              G("load", d);
              break;
            case "details":
              G("toggle", d);
              break;
            case "input":
              Za(d, f);
              G("invalid", d);
              break;
            case "select":
              d._wrapperState = { wasMultiple: !!f.multiple };
              G("invalid", d);
              break;
            case "textarea":
              hb(d, f), G("invalid", d);
          }
          vb(c, f);
          a = null;
          for (var g in f)
            f.hasOwnProperty(g) && (e = f[g], g === "children" ? typeof e === "string" ? d.textContent !== e && (a = ["children", e]) : typeof e === "number" && d.textContent !== "" + e && (a = ["children", "" + e]) : ca.hasOwnProperty(g) && e != null && g === "onScroll" && G("scroll", d));
          switch (c) {
            case "input":
              Va(d);
              cb(d, f, true);
              break;
            case "textarea":
              Va(d);
              jb(d);
              break;
            case "select":
            case "option":
              break;
            default:
              typeof f.onClick === "function" && (d.onclick = jf);
          }
          d = a;
          b.updateQueue = d;
          d !== null && (b.flags |= 4);
        } else {
          g = e.nodeType === 9 ? e : e.ownerDocument;
          a === kb.html && (a = lb(c));
          a === kb.html ? c === "script" ? (a = g.createElement("div"), a.innerHTML = "<script><\/script>", a = a.removeChild(a.firstChild)) : typeof d.is === "string" ? a = g.createElement(c, { is: d.is }) : (a = g.createElement(c), c === "select" && (g = a, d.multiple ? g.multiple = true : d.size && (g.size = d.size))) : a = g.createElementNS(a, c);
          a[wf] = b;
          a[xf] = d;
          Bi(a, b, false, false);
          b.stateNode = a;
          g = wb(c, d);
          switch (c) {
            case "dialog":
              G("cancel", a);
              G("close", a);
              e = d;
              break;
            case "iframe":
            case "object":
            case "embed":
              G("load", a);
              e = d;
              break;
            case "video":
            case "audio":
              for (e = 0; e < Xe.length; e++)
                G(Xe[e], a);
              e = d;
              break;
            case "source":
              G("error", a);
              e = d;
              break;
            case "img":
            case "image":
            case "link":
              G("error", a);
              G("load", a);
              e = d;
              break;
            case "details":
              G("toggle", a);
              e = d;
              break;
            case "input":
              Za(a, d);
              e = Ya(a, d);
              G("invalid", a);
              break;
            case "option":
              e = eb(a, d);
              break;
            case "select":
              a._wrapperState = { wasMultiple: !!d.multiple };
              e = m({}, d, { value: void 0 });
              G("invalid", a);
              break;
            case "textarea":
              hb(a, d);
              e = gb(a, d);
              G("invalid", a);
              break;
            default:
              e = d;
          }
          vb(c, e);
          var h = e;
          for (f in h)
            if (h.hasOwnProperty(f)) {
              var k = h[f];
              f === "style" ? tb(a, k) : f === "dangerouslySetInnerHTML" ? (k = k ? k.__html : void 0, k != null && ob(a, k)) : f === "children" ? typeof k === "string" ? (c !== "textarea" || k !== "") && pb(a, k) : typeof k === "number" && pb(a, "" + k) : f !== "suppressContentEditableWarning" && f !== "suppressHydrationWarning" && f !== "autoFocus" && (ca.hasOwnProperty(f) ? k != null && f === "onScroll" && G("scroll", a) : k != null && qa(a, f, k, g));
            }
          switch (c) {
            case "input":
              Va(a);
              cb(a, d, false);
              break;
            case "textarea":
              Va(a);
              jb(a);
              break;
            case "option":
              d.value != null && a.setAttribute("value", "" + Sa(d.value));
              break;
            case "select":
              a.multiple = !!d.multiple;
              f = d.value;
              f != null ? fb(a, !!d.multiple, f, false) : d.defaultValue != null && fb(a, !!d.multiple, d.defaultValue, true);
              break;
            default:
              typeof e.onClick === "function" && (a.onclick = jf);
          }
          mf(c, d) && (b.flags |= 4);
        }
        b.ref !== null && (b.flags |= 128);
      }
      return null;
    case 6:
      if (a && b.stateNode != null)
        Ei(a, b, a.memoizedProps, d);
      else {
        if (typeof d !== "string" && b.stateNode === null)
          throw Error(y(166));
        c = dh(ch.current);
        dh(ah.current);
        rh(b) ? (d = b.stateNode, c = b.memoizedProps, d[wf] = b, d.nodeValue !== c && (b.flags |= 4)) : (d = (c.nodeType === 9 ? c : c.ownerDocument).createTextNode(d), d[wf] = b, b.stateNode = d);
      }
      return null;
    case 13:
      H(P);
      d = b.memoizedState;
      if ((b.flags & 64) !== 0)
        return b.lanes = c, b;
      d = d !== null;
      c = false;
      a === null ? b.memoizedProps.fallback !== void 0 && rh(b) : c = a.memoizedState !== null;
      if (d && !c && (b.mode & 2) !== 0)
        if (a === null && b.memoizedProps.unstable_avoidThisFallback !== true || (P.current & 1) !== 0)
          V === 0 && (V = 3);
        else {
          if (V === 0 || V === 3)
            V = 4;
          U === null || (Dg & 134217727) === 0 && (Hi & 134217727) === 0 || Ii(U, W);
        }
      if (d || c)
        b.flags |= 4;
      return null;
    case 4:
      return fh(), Ci(b), a === null && cf(b.stateNode.containerInfo), null;
    case 10:
      return rg(b), null;
    case 17:
      return Ff(b.type) && Gf(), null;
    case 19:
      H(P);
      d = b.memoizedState;
      if (d === null)
        return null;
      f = (b.flags & 64) !== 0;
      g = d.rendering;
      if (g === null)
        if (f)
          Fi(d, false);
        else {
          if (V !== 0 || a !== null && (a.flags & 64) !== 0)
            for (a = b.child; a !== null; ) {
              g = ih(a);
              if (g !== null) {
                b.flags |= 64;
                Fi(d, false);
                f = g.updateQueue;
                f !== null && (b.updateQueue = f, b.flags |= 4);
                d.lastEffect === null && (b.firstEffect = null);
                b.lastEffect = d.lastEffect;
                d = c;
                for (c = b.child; c !== null; )
                  f = c, a = d, f.flags &= 2, f.nextEffect = null, f.firstEffect = null, f.lastEffect = null, g = f.alternate, g === null ? (f.childLanes = 0, f.lanes = a, f.child = null, f.memoizedProps = null, f.memoizedState = null, f.updateQueue = null, f.dependencies = null, f.stateNode = null) : (f.childLanes = g.childLanes, f.lanes = g.lanes, f.child = g.child, f.memoizedProps = g.memoizedProps, f.memoizedState = g.memoizedState, f.updateQueue = g.updateQueue, f.type = g.type, a = g.dependencies, f.dependencies = a === null ? null : { lanes: a.lanes, firstContext: a.firstContext }), c = c.sibling;
                I(P, P.current & 1 | 2);
                return b.child;
              }
              a = a.sibling;
            }
          d.tail !== null && O() > Ji && (b.flags |= 64, f = true, Fi(d, false), b.lanes = 33554432);
        }
      else {
        if (!f)
          if (a = ih(g), a !== null) {
            if (b.flags |= 64, f = true, c = a.updateQueue, c !== null && (b.updateQueue = c, b.flags |= 4), Fi(d, true), d.tail === null && d.tailMode === "hidden" && !g.alternate && !lh)
              return b = b.lastEffect = d.lastEffect, b !== null && (b.nextEffect = null), null;
          } else
            2 * O() - d.renderingStartTime > Ji && c !== 1073741824 && (b.flags |= 64, f = true, Fi(d, false), b.lanes = 33554432);
        d.isBackwards ? (g.sibling = b.child, b.child = g) : (c = d.last, c !== null ? c.sibling = g : b.child = g, d.last = g);
      }
      return d.tail !== null ? (c = d.tail, d.rendering = c, d.tail = c.sibling, d.lastEffect = b.lastEffect, d.renderingStartTime = O(), c.sibling = null, b = P.current, I(P, f ? b & 1 | 2 : b & 1), c) : null;
    case 23:
    case 24:
      return Ki(), a !== null && a.memoizedState !== null !== (b.memoizedState !== null) && d.mode !== "unstable-defer-without-hiding" && (b.flags |= 4), null;
  }
  throw Error(y(156, b.tag));
}
function Li(a) {
  switch (a.tag) {
    case 1:
      Ff(a.type) && Gf();
      var b = a.flags;
      return b & 4096 ? (a.flags = b & -4097 | 64, a) : null;
    case 3:
      fh();
      H(N);
      H(M);
      uh();
      b = a.flags;
      if ((b & 64) !== 0)
        throw Error(y(285));
      a.flags = b & -4097 | 64;
      return a;
    case 5:
      return hh(a), null;
    case 13:
      return H(P), b = a.flags, b & 4096 ? (a.flags = b & -4097 | 64, a) : null;
    case 19:
      return H(P), null;
    case 4:
      return fh(), null;
    case 10:
      return rg(a), null;
    case 23:
    case 24:
      return Ki(), null;
    default:
      return null;
  }
}
function Mi(a, b) {
  try {
    var c = "", d = b;
    do
      c += Qa(d), d = d.return;
    while (d);
    var e = c;
  } catch (f) {
    e = "\nError generating stack: " + f.message + "\n" + f.stack;
  }
  return { value: a, source: b, stack: e };
}
function Ni(a, b) {
  try {
    console.error(b.value);
  } catch (c) {
    setTimeout(function() {
      throw c;
    });
  }
}
var Oi = typeof WeakMap === "function" ? WeakMap : Map;
function Pi(a, b, c) {
  c = zg(-1, c);
  c.tag = 3;
  c.payload = { element: null };
  var d = b.value;
  c.callback = function() {
    Qi || (Qi = true, Ri = d);
    Ni(a, b);
  };
  return c;
}
function Si(a, b, c) {
  c = zg(-1, c);
  c.tag = 3;
  var d = a.type.getDerivedStateFromError;
  if (typeof d === "function") {
    var e = b.value;
    c.payload = function() {
      Ni(a, b);
      return d(e);
    };
  }
  var f = a.stateNode;
  f !== null && typeof f.componentDidCatch === "function" && (c.callback = function() {
    typeof d !== "function" && (Ti === null ? Ti = /* @__PURE__ */ new Set([this]) : Ti.add(this), Ni(a, b));
    var c2 = b.stack;
    this.componentDidCatch(b.value, { componentStack: c2 !== null ? c2 : "" });
  });
  return c;
}
var Ui = typeof WeakSet === "function" ? WeakSet : Set;
function Vi(a) {
  var b = a.ref;
  if (b !== null)
    if (typeof b === "function")
      try {
        b(null);
      } catch (c) {
        Wi(a, c);
      }
    else
      b.current = null;
}
function Xi(a, b) {
  switch (b.tag) {
    case 0:
    case 11:
    case 15:
    case 22:
      return;
    case 1:
      if (b.flags & 256 && a !== null) {
        var c = a.memoizedProps, d = a.memoizedState;
        a = b.stateNode;
        b = a.getSnapshotBeforeUpdate(b.elementType === b.type ? c : lg(b.type, c), d);
        a.__reactInternalSnapshotBeforeUpdate = b;
      }
      return;
    case 3:
      b.flags & 256 && qf(b.stateNode.containerInfo);
      return;
    case 5:
    case 6:
    case 4:
    case 17:
      return;
  }
  throw Error(y(163));
}
function Yi(a, b, c) {
  switch (c.tag) {
    case 0:
    case 11:
    case 15:
    case 22:
      b = c.updateQueue;
      b = b !== null ? b.lastEffect : null;
      if (b !== null) {
        a = b = b.next;
        do {
          if ((a.tag & 3) === 3) {
            var d = a.create;
            a.destroy = d();
          }
          a = a.next;
        } while (a !== b);
      }
      b = c.updateQueue;
      b = b !== null ? b.lastEffect : null;
      if (b !== null) {
        a = b = b.next;
        do {
          var e = a;
          d = e.next;
          e = e.tag;
          (e & 4) !== 0 && (e & 1) !== 0 && (Zi(c, a), $i(c, a));
          a = d;
        } while (a !== b);
      }
      return;
    case 1:
      a = c.stateNode;
      c.flags & 4 && (b === null ? a.componentDidMount() : (d = c.elementType === c.type ? b.memoizedProps : lg(c.type, b.memoizedProps), a.componentDidUpdate(d, b.memoizedState, a.__reactInternalSnapshotBeforeUpdate)));
      b = c.updateQueue;
      b !== null && Eg(c, b, a);
      return;
    case 3:
      b = c.updateQueue;
      if (b !== null) {
        a = null;
        if (c.child !== null)
          switch (c.child.tag) {
            case 5:
              a = c.child.stateNode;
              break;
            case 1:
              a = c.child.stateNode;
          }
        Eg(c, b, a);
      }
      return;
    case 5:
      a = c.stateNode;
      b === null && c.flags & 4 && mf(c.type, c.memoizedProps) && a.focus();
      return;
    case 6:
      return;
    case 4:
      return;
    case 12:
      return;
    case 13:
      c.memoizedState === null && (c = c.alternate, c !== null && (c = c.memoizedState, c !== null && (c = c.dehydrated, c !== null && Cc(c))));
      return;
    case 19:
    case 17:
    case 20:
    case 21:
    case 23:
    case 24:
      return;
  }
  throw Error(y(163));
}
function aj(a, b) {
  for (var c = a; ; ) {
    if (c.tag === 5) {
      var d = c.stateNode;
      if (b)
        d = d.style, typeof d.setProperty === "function" ? d.setProperty("display", "none", "important") : d.display = "none";
      else {
        d = c.stateNode;
        var e = c.memoizedProps.style;
        e = e !== void 0 && e !== null && e.hasOwnProperty("display") ? e.display : null;
        d.style.display = sb("display", e);
      }
    } else if (c.tag === 6)
      c.stateNode.nodeValue = b ? "" : c.memoizedProps;
    else if ((c.tag !== 23 && c.tag !== 24 || c.memoizedState === null || c === a) && c.child !== null) {
      c.child.return = c;
      c = c.child;
      continue;
    }
    if (c === a)
      break;
    for (; c.sibling === null; ) {
      if (c.return === null || c.return === a)
        return;
      c = c.return;
    }
    c.sibling.return = c.return;
    c = c.sibling;
  }
}
function bj(a, b) {
  if (Mf && typeof Mf.onCommitFiberUnmount === "function")
    try {
      Mf.onCommitFiberUnmount(Lf, b);
    } catch (f) {
    }
  switch (b.tag) {
    case 0:
    case 11:
    case 14:
    case 15:
    case 22:
      a = b.updateQueue;
      if (a !== null && (a = a.lastEffect, a !== null)) {
        var c = a = a.next;
        do {
          var d = c, e = d.destroy;
          d = d.tag;
          if (e !== void 0)
            if ((d & 4) !== 0)
              Zi(b, c);
            else {
              d = b;
              try {
                e();
              } catch (f) {
                Wi(d, f);
              }
            }
          c = c.next;
        } while (c !== a);
      }
      break;
    case 1:
      Vi(b);
      a = b.stateNode;
      if (typeof a.componentWillUnmount === "function")
        try {
          a.props = b.memoizedProps, a.state = b.memoizedState, a.componentWillUnmount();
        } catch (f) {
          Wi(b, f);
        }
      break;
    case 5:
      Vi(b);
      break;
    case 4:
      cj(a, b);
  }
}
function dj(a) {
  a.alternate = null;
  a.child = null;
  a.dependencies = null;
  a.firstEffect = null;
  a.lastEffect = null;
  a.memoizedProps = null;
  a.memoizedState = null;
  a.pendingProps = null;
  a.return = null;
  a.updateQueue = null;
}
function ej(a) {
  return a.tag === 5 || a.tag === 3 || a.tag === 4;
}
function fj(a) {
  a: {
    for (var b = a.return; b !== null; ) {
      if (ej(b))
        break a;
      b = b.return;
    }
    throw Error(y(160));
  }
  var c = b;
  b = c.stateNode;
  switch (c.tag) {
    case 5:
      var d = false;
      break;
    case 3:
      b = b.containerInfo;
      d = true;
      break;
    case 4:
      b = b.containerInfo;
      d = true;
      break;
    default:
      throw Error(y(161));
  }
  c.flags & 16 && (pb(b, ""), c.flags &= -17);
  a:
    b:
      for (c = a; ; ) {
        for (; c.sibling === null; ) {
          if (c.return === null || ej(c.return)) {
            c = null;
            break a;
          }
          c = c.return;
        }
        c.sibling.return = c.return;
        for (c = c.sibling; c.tag !== 5 && c.tag !== 6 && c.tag !== 18; ) {
          if (c.flags & 2)
            continue b;
          if (c.child === null || c.tag === 4)
            continue b;
          else
            c.child.return = c, c = c.child;
        }
        if (!(c.flags & 2)) {
          c = c.stateNode;
          break a;
        }
      }
  d ? gj(a, c, b) : hj(a, c, b);
}
function gj(a, b, c) {
  var d = a.tag, e = d === 5 || d === 6;
  if (e)
    a = e ? a.stateNode : a.stateNode.instance, b ? c.nodeType === 8 ? c.parentNode.insertBefore(a, b) : c.insertBefore(a, b) : (c.nodeType === 8 ? (b = c.parentNode, b.insertBefore(a, c)) : (b = c, b.appendChild(a)), c = c._reactRootContainer, c !== null && c !== void 0 || b.onclick !== null || (b.onclick = jf));
  else if (d !== 4 && (a = a.child, a !== null))
    for (gj(a, b, c), a = a.sibling; a !== null; )
      gj(a, b, c), a = a.sibling;
}
function hj(a, b, c) {
  var d = a.tag, e = d === 5 || d === 6;
  if (e)
    a = e ? a.stateNode : a.stateNode.instance, b ? c.insertBefore(a, b) : c.appendChild(a);
  else if (d !== 4 && (a = a.child, a !== null))
    for (hj(a, b, c), a = a.sibling; a !== null; )
      hj(a, b, c), a = a.sibling;
}
function cj(a, b) {
  for (var c = b, d = false, e, f; ; ) {
    if (!d) {
      d = c.return;
      a:
        for (; ; ) {
          if (d === null)
            throw Error(y(160));
          e = d.stateNode;
          switch (d.tag) {
            case 5:
              f = false;
              break a;
            case 3:
              e = e.containerInfo;
              f = true;
              break a;
            case 4:
              e = e.containerInfo;
              f = true;
              break a;
          }
          d = d.return;
        }
      d = true;
    }
    if (c.tag === 5 || c.tag === 6) {
      a:
        for (var g = a, h = c, k = h; ; )
          if (bj(g, k), k.child !== null && k.tag !== 4)
            k.child.return = k, k = k.child;
          else {
            if (k === h)
              break a;
            for (; k.sibling === null; ) {
              if (k.return === null || k.return === h)
                break a;
              k = k.return;
            }
            k.sibling.return = k.return;
            k = k.sibling;
          }
      f ? (g = e, h = c.stateNode, g.nodeType === 8 ? g.parentNode.removeChild(h) : g.removeChild(h)) : e.removeChild(c.stateNode);
    } else if (c.tag === 4) {
      if (c.child !== null) {
        e = c.stateNode.containerInfo;
        f = true;
        c.child.return = c;
        c = c.child;
        continue;
      }
    } else if (bj(a, c), c.child !== null) {
      c.child.return = c;
      c = c.child;
      continue;
    }
    if (c === b)
      break;
    for (; c.sibling === null; ) {
      if (c.return === null || c.return === b)
        return;
      c = c.return;
      c.tag === 4 && (d = false);
    }
    c.sibling.return = c.return;
    c = c.sibling;
  }
}
function ij(a, b) {
  switch (b.tag) {
    case 0:
    case 11:
    case 14:
    case 15:
    case 22:
      var c = b.updateQueue;
      c = c !== null ? c.lastEffect : null;
      if (c !== null) {
        var d = c = c.next;
        do
          (d.tag & 3) === 3 && (a = d.destroy, d.destroy = void 0, a !== void 0 && a()), d = d.next;
        while (d !== c);
      }
      return;
    case 1:
      return;
    case 5:
      c = b.stateNode;
      if (c != null) {
        d = b.memoizedProps;
        var e = a !== null ? a.memoizedProps : d;
        a = b.type;
        var f = b.updateQueue;
        b.updateQueue = null;
        if (f !== null) {
          c[xf] = d;
          a === "input" && d.type === "radio" && d.name != null && $a(c, d);
          wb(a, e);
          b = wb(a, d);
          for (e = 0; e < f.length; e += 2) {
            var g = f[e], h = f[e + 1];
            g === "style" ? tb(c, h) : g === "dangerouslySetInnerHTML" ? ob(c, h) : g === "children" ? pb(c, h) : qa(c, g, h, b);
          }
          switch (a) {
            case "input":
              ab(c, d);
              break;
            case "textarea":
              ib(c, d);
              break;
            case "select":
              a = c._wrapperState.wasMultiple, c._wrapperState.wasMultiple = !!d.multiple, f = d.value, f != null ? fb(c, !!d.multiple, f, false) : a !== !!d.multiple && (d.defaultValue != null ? fb(c, !!d.multiple, d.defaultValue, true) : fb(c, !!d.multiple, d.multiple ? [] : "", false));
          }
        }
      }
      return;
    case 6:
      if (b.stateNode === null)
        throw Error(y(162));
      b.stateNode.nodeValue = b.memoizedProps;
      return;
    case 3:
      c = b.stateNode;
      c.hydrate && (c.hydrate = false, Cc(c.containerInfo));
      return;
    case 12:
      return;
    case 13:
      b.memoizedState !== null && (jj = O(), aj(b.child, true));
      kj(b);
      return;
    case 19:
      kj(b);
      return;
    case 17:
      return;
    case 23:
    case 24:
      aj(b, b.memoizedState !== null);
      return;
  }
  throw Error(y(163));
}
function kj(a) {
  var b = a.updateQueue;
  if (b !== null) {
    a.updateQueue = null;
    var c = a.stateNode;
    c === null && (c = a.stateNode = new Ui());
    b.forEach(function(b2) {
      var d = lj.bind(null, a, b2);
      c.has(b2) || (c.add(b2), b2.then(d, d));
    });
  }
}
function mj(a, b) {
  return a !== null && (a = a.memoizedState, a === null || a.dehydrated !== null) ? (b = b.memoizedState, b !== null && b.dehydrated === null) : false;
}
var nj = Math.ceil, oj = ra.ReactCurrentDispatcher, pj = ra.ReactCurrentOwner, X = 0, U = null, Y = null, W = 0, qj = 0, rj = Bf(0), V = 0, sj = null, tj = 0, Dg = 0, Hi = 0, uj = 0, vj = null, jj = 0, Ji = Infinity;
function wj() {
  Ji = O() + 500;
}
var Z = null, Qi = false, Ri = null, Ti = null, xj = false, yj = null, zj = 90, Aj = [], Bj = [], Cj = null, Dj = 0, Ej = null, Fj = -1, Gj = 0, Hj = 0, Ij = null, Jj = false;
function Hg() {
  return (X & 48) !== 0 ? O() : Fj !== -1 ? Fj : Fj = O();
}
function Ig(a) {
  a = a.mode;
  if ((a & 2) === 0)
    return 1;
  if ((a & 4) === 0)
    return eg() === 99 ? 1 : 2;
  Gj === 0 && (Gj = tj);
  if (kg.transition !== 0) {
    Hj !== 0 && (Hj = vj !== null ? vj.pendingLanes : 0);
    a = Gj;
    var b = 4186112 & ~Hj;
    b &= -b;
    b === 0 && (a = 4186112 & ~a, b = a & -a, b === 0 && (b = 8192));
    return b;
  }
  a = eg();
  (X & 4) !== 0 && a === 98 ? a = Xc(12, Gj) : (a = Sc(a), a = Xc(a, Gj));
  return a;
}
function Jg(a, b, c) {
  if (50 < Dj)
    throw Dj = 0, Ej = null, Error(y(185));
  a = Kj(a, b);
  if (a === null)
    return null;
  $c(a, b, c);
  a === U && (Hi |= b, V === 4 && Ii(a, W));
  var d = eg();
  b === 1 ? (X & 8) !== 0 && (X & 48) === 0 ? Lj(a) : (Mj(a, c), X === 0 && (wj(), ig())) : ((X & 4) === 0 || d !== 98 && d !== 99 || (Cj === null ? Cj = /* @__PURE__ */ new Set([a]) : Cj.add(a)), Mj(a, c));
  vj = a;
}
function Kj(a, b) {
  a.lanes |= b;
  var c = a.alternate;
  c !== null && (c.lanes |= b);
  c = a;
  for (a = a.return; a !== null; )
    a.childLanes |= b, c = a.alternate, c !== null && (c.childLanes |= b), c = a, a = a.return;
  return c.tag === 3 ? c.stateNode : null;
}
function Mj(a, b) {
  for (var c = a.callbackNode, d = a.suspendedLanes, e = a.pingedLanes, f = a.expirationTimes, g = a.pendingLanes; 0 < g; ) {
    var h = 31 - Vc(g), k = 1 << h, l = f[h];
    if (l === -1) {
      if ((k & d) === 0 || (k & e) !== 0) {
        l = b;
        Rc(k);
        var n = F;
        f[h] = 10 <= n ? l + 250 : 6 <= n ? l + 5e3 : -1;
      }
    } else
      l <= b && (a.expiredLanes |= k);
    g &= ~k;
  }
  d = Uc(a, a === U ? W : 0);
  b = F;
  if (d === 0)
    c !== null && (c !== Zf && Pf(c), a.callbackNode = null, a.callbackPriority = 0);
  else {
    if (c !== null) {
      if (a.callbackPriority === b)
        return;
      c !== Zf && Pf(c);
    }
    b === 15 ? (c = Lj.bind(null, a), ag === null ? (ag = [c], bg = Of(Uf, jg)) : ag.push(c), c = Zf) : b === 14 ? c = hg(99, Lj.bind(null, a)) : (c = Tc(b), c = hg(c, Nj.bind(null, a)));
    a.callbackPriority = b;
    a.callbackNode = c;
  }
}
function Nj(a) {
  Fj = -1;
  Hj = Gj = 0;
  if ((X & 48) !== 0)
    throw Error(y(327));
  var b = a.callbackNode;
  if (Oj() && a.callbackNode !== b)
    return null;
  var c = Uc(a, a === U ? W : 0);
  if (c === 0)
    return null;
  var d = c;
  var e = X;
  X |= 16;
  var f = Pj();
  if (U !== a || W !== d)
    wj(), Qj(a, d);
  do
    try {
      Rj();
      break;
    } catch (h) {
      Sj(a, h);
    }
  while (1);
  qg();
  oj.current = f;
  X = e;
  Y !== null ? d = 0 : (U = null, W = 0, d = V);
  if ((tj & Hi) !== 0)
    Qj(a, 0);
  else if (d !== 0) {
    d === 2 && (X |= 64, a.hydrate && (a.hydrate = false, qf(a.containerInfo)), c = Wc(a), c !== 0 && (d = Tj(a, c)));
    if (d === 1)
      throw b = sj, Qj(a, 0), Ii(a, c), Mj(a, O()), b;
    a.finishedWork = a.current.alternate;
    a.finishedLanes = c;
    switch (d) {
      case 0:
      case 1:
        throw Error(y(345));
      case 2:
        Uj(a);
        break;
      case 3:
        Ii(a, c);
        if ((c & 62914560) === c && (d = jj + 500 - O(), 10 < d)) {
          if (Uc(a, 0) !== 0)
            break;
          e = a.suspendedLanes;
          if ((e & c) !== c) {
            Hg();
            a.pingedLanes |= a.suspendedLanes & e;
            break;
          }
          a.timeoutHandle = of(Uj.bind(null, a), d);
          break;
        }
        Uj(a);
        break;
      case 4:
        Ii(a, c);
        if ((c & 4186112) === c)
          break;
        d = a.eventTimes;
        for (e = -1; 0 < c; ) {
          var g = 31 - Vc(c);
          f = 1 << g;
          g = d[g];
          g > e && (e = g);
          c &= ~f;
        }
        c = e;
        c = O() - c;
        c = (120 > c ? 120 : 480 > c ? 480 : 1080 > c ? 1080 : 1920 > c ? 1920 : 3e3 > c ? 3e3 : 4320 > c ? 4320 : 1960 * nj(c / 1960)) - c;
        if (10 < c) {
          a.timeoutHandle = of(Uj.bind(null, a), c);
          break;
        }
        Uj(a);
        break;
      case 5:
        Uj(a);
        break;
      default:
        throw Error(y(329));
    }
  }
  Mj(a, O());
  return a.callbackNode === b ? Nj.bind(null, a) : null;
}
function Ii(a, b) {
  b &= ~uj;
  b &= ~Hi;
  a.suspendedLanes |= b;
  a.pingedLanes &= ~b;
  for (a = a.expirationTimes; 0 < b; ) {
    var c = 31 - Vc(b), d = 1 << c;
    a[c] = -1;
    b &= ~d;
  }
}
function Lj(a) {
  if ((X & 48) !== 0)
    throw Error(y(327));
  Oj();
  if (a === U && (a.expiredLanes & W) !== 0) {
    var b = W;
    var c = Tj(a, b);
    (tj & Hi) !== 0 && (b = Uc(a, b), c = Tj(a, b));
  } else
    b = Uc(a, 0), c = Tj(a, b);
  a.tag !== 0 && c === 2 && (X |= 64, a.hydrate && (a.hydrate = false, qf(a.containerInfo)), b = Wc(a), b !== 0 && (c = Tj(a, b)));
  if (c === 1)
    throw c = sj, Qj(a, 0), Ii(a, b), Mj(a, O()), c;
  a.finishedWork = a.current.alternate;
  a.finishedLanes = b;
  Uj(a);
  Mj(a, O());
  return null;
}
function Vj() {
  if (Cj !== null) {
    var a = Cj;
    Cj = null;
    a.forEach(function(a2) {
      a2.expiredLanes |= 24 & a2.pendingLanes;
      Mj(a2, O());
    });
  }
  ig();
}
function Wj(a, b) {
  var c = X;
  X |= 1;
  try {
    return a(b);
  } finally {
    X = c, X === 0 && (wj(), ig());
  }
}
function Xj(a, b) {
  var c = X;
  X &= -2;
  X |= 8;
  try {
    return a(b);
  } finally {
    X = c, X === 0 && (wj(), ig());
  }
}
function ni(a, b) {
  I(rj, qj);
  qj |= b;
  tj |= b;
}
function Ki() {
  qj = rj.current;
  H(rj);
}
function Qj(a, b) {
  a.finishedWork = null;
  a.finishedLanes = 0;
  var c = a.timeoutHandle;
  c !== -1 && (a.timeoutHandle = -1, pf(c));
  if (Y !== null)
    for (c = Y.return; c !== null; ) {
      var d = c;
      switch (d.tag) {
        case 1:
          d = d.type.childContextTypes;
          d !== null && d !== void 0 && Gf();
          break;
        case 3:
          fh();
          H(N);
          H(M);
          uh();
          break;
        case 5:
          hh(d);
          break;
        case 4:
          fh();
          break;
        case 13:
          H(P);
          break;
        case 19:
          H(P);
          break;
        case 10:
          rg(d);
          break;
        case 23:
        case 24:
          Ki();
      }
      c = c.return;
    }
  U = a;
  Y = Tg(a.current, null);
  W = qj = tj = b;
  V = 0;
  sj = null;
  uj = Hi = Dg = 0;
}
function Sj(a, b) {
  do {
    var c = Y;
    try {
      qg();
      vh.current = Gh;
      if (yh) {
        for (var d = R.memoizedState; d !== null; ) {
          var e = d.queue;
          e !== null && (e.pending = null);
          d = d.next;
        }
        yh = false;
      }
      xh = 0;
      T = S = R = null;
      zh = false;
      pj.current = null;
      if (c === null || c.return === null) {
        V = 1;
        sj = b;
        Y = null;
        break;
      }
      a: {
        var f = a, g = c.return, h = c, k = b;
        b = W;
        h.flags |= 2048;
        h.firstEffect = h.lastEffect = null;
        if (k !== null && typeof k === "object" && typeof k.then === "function") {
          var l = k;
          if ((h.mode & 2) === 0) {
            var n = h.alternate;
            n ? (h.updateQueue = n.updateQueue, h.memoizedState = n.memoizedState, h.lanes = n.lanes) : (h.updateQueue = null, h.memoizedState = null);
          }
          var A = (P.current & 1) !== 0, p = g;
          do {
            var C;
            if (C = p.tag === 13) {
              var x = p.memoizedState;
              if (x !== null)
                C = x.dehydrated !== null ? true : false;
              else {
                var w = p.memoizedProps;
                C = w.fallback === void 0 ? false : w.unstable_avoidThisFallback !== true ? true : A ? false : true;
              }
            }
            if (C) {
              var z = p.updateQueue;
              if (z === null) {
                var u = /* @__PURE__ */ new Set();
                u.add(l);
                p.updateQueue = u;
              } else
                z.add(l);
              if ((p.mode & 2) === 0) {
                p.flags |= 64;
                h.flags |= 16384;
                h.flags &= -2981;
                if (h.tag === 1)
                  if (h.alternate === null)
                    h.tag = 17;
                  else {
                    var t = zg(-1, 1);
                    t.tag = 2;
                    Ag(h, t);
                  }
                h.lanes |= 1;
                break a;
              }
              k = void 0;
              h = b;
              var q = f.pingCache;
              q === null ? (q = f.pingCache = new Oi(), k = /* @__PURE__ */ new Set(), q.set(l, k)) : (k = q.get(l), k === void 0 && (k = /* @__PURE__ */ new Set(), q.set(l, k)));
              if (!k.has(h)) {
                k.add(h);
                var v = Yj.bind(null, f, l, h);
                l.then(v, v);
              }
              p.flags |= 4096;
              p.lanes = b;
              break a;
            }
            p = p.return;
          } while (p !== null);
          k = Error((Ra(h.type) || "A React component") + " suspended while rendering, but no fallback UI was specified.\n\nAdd a <Suspense fallback=...> component higher in the tree to provide a loading indicator or placeholder to display.");
        }
        V !== 5 && (V = 2);
        k = Mi(k, h);
        p = g;
        do {
          switch (p.tag) {
            case 3:
              f = k;
              p.flags |= 4096;
              b &= -b;
              p.lanes |= b;
              var J = Pi(p, f, b);
              Bg(p, J);
              break a;
            case 1:
              f = k;
              var K = p.type, Q = p.stateNode;
              if ((p.flags & 64) === 0 && (typeof K.getDerivedStateFromError === "function" || Q !== null && typeof Q.componentDidCatch === "function" && (Ti === null || !Ti.has(Q)))) {
                p.flags |= 4096;
                b &= -b;
                p.lanes |= b;
                var L = Si(p, f, b);
                Bg(p, L);
                break a;
              }
          }
          p = p.return;
        } while (p !== null);
      }
      Zj(c);
    } catch (va) {
      b = va;
      Y === c && c !== null && (Y = c = c.return);
      continue;
    }
    break;
  } while (1);
}
function Pj() {
  var a = oj.current;
  oj.current = Gh;
  return a === null ? Gh : a;
}
function Tj(a, b) {
  var c = X;
  X |= 16;
  var d = Pj();
  U === a && W === b || Qj(a, b);
  do
    try {
      ak();
      break;
    } catch (e) {
      Sj(a, e);
    }
  while (1);
  qg();
  X = c;
  oj.current = d;
  if (Y !== null)
    throw Error(y(261));
  U = null;
  W = 0;
  return V;
}
function ak() {
  for (; Y !== null; )
    bk(Y);
}
function Rj() {
  for (; Y !== null && !Qf(); )
    bk(Y);
}
function bk(a) {
  var b = ck(a.alternate, a, qj);
  a.memoizedProps = a.pendingProps;
  b === null ? Zj(a) : Y = b;
  pj.current = null;
}
function Zj(a) {
  var b = a;
  do {
    var c = b.alternate;
    a = b.return;
    if ((b.flags & 2048) === 0) {
      c = Gi(c, b, qj);
      if (c !== null) {
        Y = c;
        return;
      }
      c = b;
      if (c.tag !== 24 && c.tag !== 23 || c.memoizedState === null || (qj & 1073741824) !== 0 || (c.mode & 4) === 0) {
        for (var d = 0, e = c.child; e !== null; )
          d |= e.lanes | e.childLanes, e = e.sibling;
        c.childLanes = d;
      }
      a !== null && (a.flags & 2048) === 0 && (a.firstEffect === null && (a.firstEffect = b.firstEffect), b.lastEffect !== null && (a.lastEffect !== null && (a.lastEffect.nextEffect = b.firstEffect), a.lastEffect = b.lastEffect), 1 < b.flags && (a.lastEffect !== null ? a.lastEffect.nextEffect = b : a.firstEffect = b, a.lastEffect = b));
    } else {
      c = Li(b);
      if (c !== null) {
        c.flags &= 2047;
        Y = c;
        return;
      }
      a !== null && (a.firstEffect = a.lastEffect = null, a.flags |= 2048);
    }
    b = b.sibling;
    if (b !== null) {
      Y = b;
      return;
    }
    Y = b = a;
  } while (b !== null);
  V === 0 && (V = 5);
}
function Uj(a) {
  var b = eg();
  gg(99, dk.bind(null, a, b));
  return null;
}
function dk(a, b) {
  do
    Oj();
  while (yj !== null);
  if ((X & 48) !== 0)
    throw Error(y(327));
  var c = a.finishedWork;
  if (c === null)
    return null;
  a.finishedWork = null;
  a.finishedLanes = 0;
  if (c === a.current)
    throw Error(y(177));
  a.callbackNode = null;
  var d = c.lanes | c.childLanes, e = d, f = a.pendingLanes & ~e;
  a.pendingLanes = e;
  a.suspendedLanes = 0;
  a.pingedLanes = 0;
  a.expiredLanes &= e;
  a.mutableReadLanes &= e;
  a.entangledLanes &= e;
  e = a.entanglements;
  for (var g = a.eventTimes, h = a.expirationTimes; 0 < f; ) {
    var k = 31 - Vc(f), l = 1 << k;
    e[k] = 0;
    g[k] = -1;
    h[k] = -1;
    f &= ~l;
  }
  Cj !== null && (d & 24) === 0 && Cj.has(a) && Cj.delete(a);
  a === U && (Y = U = null, W = 0);
  1 < c.flags ? c.lastEffect !== null ? (c.lastEffect.nextEffect = c, d = c.firstEffect) : d = c : d = c.firstEffect;
  if (d !== null) {
    e = X;
    X |= 32;
    pj.current = null;
    kf = fd;
    g = Ne();
    if (Oe(g)) {
      if ("selectionStart" in g)
        h = { start: g.selectionStart, end: g.selectionEnd };
      else
        a:
          if (h = (h = g.ownerDocument) && h.defaultView || window, (l = h.getSelection && h.getSelection()) && l.rangeCount !== 0) {
            h = l.anchorNode;
            f = l.anchorOffset;
            k = l.focusNode;
            l = l.focusOffset;
            try {
              h.nodeType, k.nodeType;
            } catch (va) {
              h = null;
              break a;
            }
            var n = 0, A = -1, p = -1, C = 0, x = 0, w = g, z = null;
            b:
              for (; ; ) {
                for (var u; ; ) {
                  w !== h || f !== 0 && w.nodeType !== 3 || (A = n + f);
                  w !== k || l !== 0 && w.nodeType !== 3 || (p = n + l);
                  w.nodeType === 3 && (n += w.nodeValue.length);
                  if ((u = w.firstChild) === null)
                    break;
                  z = w;
                  w = u;
                }
                for (; ; ) {
                  if (w === g)
                    break b;
                  z === h && ++C === f && (A = n);
                  z === k && ++x === l && (p = n);
                  if ((u = w.nextSibling) !== null)
                    break;
                  w = z;
                  z = w.parentNode;
                }
                w = u;
              }
            h = A === -1 || p === -1 ? null : { start: A, end: p };
          } else
            h = null;
      h = h || { start: 0, end: 0 };
    } else
      h = null;
    lf = { focusedElem: g, selectionRange: h };
    fd = false;
    Ij = null;
    Jj = false;
    Z = d;
    do
      try {
        ek();
      } catch (va) {
        if (Z === null)
          throw Error(y(330));
        Wi(Z, va);
        Z = Z.nextEffect;
      }
    while (Z !== null);
    Ij = null;
    Z = d;
    do
      try {
        for (g = a; Z !== null; ) {
          var t = Z.flags;
          t & 16 && pb(Z.stateNode, "");
          if (t & 128) {
            var q = Z.alternate;
            if (q !== null) {
              var v = q.ref;
              v !== null && (typeof v === "function" ? v(null) : v.current = null);
            }
          }
          switch (t & 1038) {
            case 2:
              fj(Z);
              Z.flags &= -3;
              break;
            case 6:
              fj(Z);
              Z.flags &= -3;
              ij(Z.alternate, Z);
              break;
            case 1024:
              Z.flags &= -1025;
              break;
            case 1028:
              Z.flags &= -1025;
              ij(Z.alternate, Z);
              break;
            case 4:
              ij(Z.alternate, Z);
              break;
            case 8:
              h = Z;
              cj(g, h);
              var J = h.alternate;
              dj(h);
              J !== null && dj(J);
          }
          Z = Z.nextEffect;
        }
      } catch (va) {
        if (Z === null)
          throw Error(y(330));
        Wi(Z, va);
        Z = Z.nextEffect;
      }
    while (Z !== null);
    v = lf;
    q = Ne();
    t = v.focusedElem;
    g = v.selectionRange;
    if (q !== t && t && t.ownerDocument && Me(t.ownerDocument.documentElement, t)) {
      g !== null && Oe(t) && (q = g.start, v = g.end, v === void 0 && (v = q), "selectionStart" in t ? (t.selectionStart = q, t.selectionEnd = Math.min(v, t.value.length)) : (v = (q = t.ownerDocument || document) && q.defaultView || window, v.getSelection && (v = v.getSelection(), h = t.textContent.length, J = Math.min(g.start, h), g = g.end === void 0 ? J : Math.min(g.end, h), !v.extend && J > g && (h = g, g = J, J = h), h = Le(t, J), f = Le(t, g), h && f && (v.rangeCount !== 1 || v.anchorNode !== h.node || v.anchorOffset !== h.offset || v.focusNode !== f.node || v.focusOffset !== f.offset) && (q = q.createRange(), q.setStart(h.node, h.offset), v.removeAllRanges(), J > g ? (v.addRange(q), v.extend(f.node, f.offset)) : (q.setEnd(f.node, f.offset), v.addRange(q))))));
      q = [];
      for (v = t; v = v.parentNode; )
        v.nodeType === 1 && q.push({ element: v, left: v.scrollLeft, top: v.scrollTop });
      typeof t.focus === "function" && t.focus();
      for (t = 0; t < q.length; t++)
        v = q[t], v.element.scrollLeft = v.left, v.element.scrollTop = v.top;
    }
    fd = !!kf;
    lf = kf = null;
    a.current = c;
    Z = d;
    do
      try {
        for (t = a; Z !== null; ) {
          var K = Z.flags;
          K & 36 && Yi(t, Z.alternate, Z);
          if (K & 128) {
            q = void 0;
            var Q = Z.ref;
            if (Q !== null) {
              var L = Z.stateNode;
              switch (Z.tag) {
                case 5:
                  q = L;
                  break;
                default:
                  q = L;
              }
              typeof Q === "function" ? Q(q) : Q.current = q;
            }
          }
          Z = Z.nextEffect;
        }
      } catch (va) {
        if (Z === null)
          throw Error(y(330));
        Wi(Z, va);
        Z = Z.nextEffect;
      }
    while (Z !== null);
    Z = null;
    $f();
    X = e;
  } else
    a.current = c;
  if (xj)
    xj = false, yj = a, zj = b;
  else
    for (Z = d; Z !== null; )
      b = Z.nextEffect, Z.nextEffect = null, Z.flags & 8 && (K = Z, K.sibling = null, K.stateNode = null), Z = b;
  d = a.pendingLanes;
  d === 0 && (Ti = null);
  d === 1 ? a === Ej ? Dj++ : (Dj = 0, Ej = a) : Dj = 0;
  c = c.stateNode;
  if (Mf && typeof Mf.onCommitFiberRoot === "function")
    try {
      Mf.onCommitFiberRoot(Lf, c, void 0, (c.current.flags & 64) === 64);
    } catch (va) {
    }
  Mj(a, O());
  if (Qi)
    throw Qi = false, a = Ri, Ri = null, a;
  if ((X & 8) !== 0)
    return null;
  ig();
  return null;
}
function ek() {
  for (; Z !== null; ) {
    var a = Z.alternate;
    Jj || Ij === null || ((Z.flags & 8) !== 0 ? dc(Z, Ij) && (Jj = true) : Z.tag === 13 && mj(a, Z) && dc(Z, Ij) && (Jj = true));
    var b = Z.flags;
    (b & 256) !== 0 && Xi(a, Z);
    (b & 512) === 0 || xj || (xj = true, hg(97, function() {
      Oj();
      return null;
    }));
    Z = Z.nextEffect;
  }
}
function Oj() {
  if (zj !== 90) {
    var a = 97 < zj ? 97 : zj;
    zj = 90;
    return gg(a, fk);
  }
  return false;
}
function $i(a, b) {
  Aj.push(b, a);
  xj || (xj = true, hg(97, function() {
    Oj();
    return null;
  }));
}
function Zi(a, b) {
  Bj.push(b, a);
  xj || (xj = true, hg(97, function() {
    Oj();
    return null;
  }));
}
function fk() {
  if (yj === null)
    return false;
  var a = yj;
  yj = null;
  if ((X & 48) !== 0)
    throw Error(y(331));
  var b = X;
  X |= 32;
  var c = Bj;
  Bj = [];
  for (var d = 0; d < c.length; d += 2) {
    var e = c[d], f = c[d + 1], g = e.destroy;
    e.destroy = void 0;
    if (typeof g === "function")
      try {
        g();
      } catch (k) {
        if (f === null)
          throw Error(y(330));
        Wi(f, k);
      }
  }
  c = Aj;
  Aj = [];
  for (d = 0; d < c.length; d += 2) {
    e = c[d];
    f = c[d + 1];
    try {
      var h = e.create;
      e.destroy = h();
    } catch (k) {
      if (f === null)
        throw Error(y(330));
      Wi(f, k);
    }
  }
  for (h = a.current.firstEffect; h !== null; )
    a = h.nextEffect, h.nextEffect = null, h.flags & 8 && (h.sibling = null, h.stateNode = null), h = a;
  X = b;
  ig();
  return true;
}
function gk(a, b, c) {
  b = Mi(c, b);
  b = Pi(a, b, 1);
  Ag(a, b);
  b = Hg();
  a = Kj(a, 1);
  a !== null && ($c(a, 1, b), Mj(a, b));
}
function Wi(a, b) {
  if (a.tag === 3)
    gk(a, a, b);
  else
    for (var c = a.return; c !== null; ) {
      if (c.tag === 3) {
        gk(c, a, b);
        break;
      } else if (c.tag === 1) {
        var d = c.stateNode;
        if (typeof c.type.getDerivedStateFromError === "function" || typeof d.componentDidCatch === "function" && (Ti === null || !Ti.has(d))) {
          a = Mi(b, a);
          var e = Si(c, a, 1);
          Ag(c, e);
          e = Hg();
          c = Kj(c, 1);
          if (c !== null)
            $c(c, 1, e), Mj(c, e);
          else if (typeof d.componentDidCatch === "function" && (Ti === null || !Ti.has(d)))
            try {
              d.componentDidCatch(b, a);
            } catch (f) {
            }
          break;
        }
      }
      c = c.return;
    }
}
function Yj(a, b, c) {
  var d = a.pingCache;
  d !== null && d.delete(b);
  b = Hg();
  a.pingedLanes |= a.suspendedLanes & c;
  U === a && (W & c) === c && (V === 4 || V === 3 && (W & 62914560) === W && 500 > O() - jj ? Qj(a, 0) : uj |= c);
  Mj(a, b);
}
function lj(a, b) {
  var c = a.stateNode;
  c !== null && c.delete(b);
  b = 0;
  b === 0 && (b = a.mode, (b & 2) === 0 ? b = 1 : (b & 4) === 0 ? b = eg() === 99 ? 1 : 2 : (Gj === 0 && (Gj = tj), b = Yc(62914560 & ~Gj), b === 0 && (b = 4194304)));
  c = Hg();
  a = Kj(a, b);
  a !== null && ($c(a, b, c), Mj(a, c));
}
var ck;
ck = function(a, b, c) {
  var d = b.lanes;
  if (a !== null)
    if (a.memoizedProps !== b.pendingProps || N.current)
      ug = true;
    else if ((c & d) !== 0)
      ug = (a.flags & 16384) !== 0 ? true : false;
    else {
      ug = false;
      switch (b.tag) {
        case 3:
          ri(b);
          sh();
          break;
        case 5:
          gh(b);
          break;
        case 1:
          Ff(b.type) && Jf(b);
          break;
        case 4:
          eh(b, b.stateNode.containerInfo);
          break;
        case 10:
          d = b.memoizedProps.value;
          var e = b.type._context;
          I(mg, e._currentValue);
          e._currentValue = d;
          break;
        case 13:
          if (b.memoizedState !== null) {
            if ((c & b.child.childLanes) !== 0)
              return ti(a, b, c);
            I(P, P.current & 1);
            b = hi(a, b, c);
            return b !== null ? b.sibling : null;
          }
          I(P, P.current & 1);
          break;
        case 19:
          d = (c & b.childLanes) !== 0;
          if ((a.flags & 64) !== 0) {
            if (d)
              return Ai(a, b, c);
            b.flags |= 64;
          }
          e = b.memoizedState;
          e !== null && (e.rendering = null, e.tail = null, e.lastEffect = null);
          I(P, P.current);
          if (d)
            break;
          else
            return null;
        case 23:
        case 24:
          return b.lanes = 0, mi(a, b, c);
      }
      return hi(a, b, c);
    }
  else
    ug = false;
  b.lanes = 0;
  switch (b.tag) {
    case 2:
      d = b.type;
      a !== null && (a.alternate = null, b.alternate = null, b.flags |= 2);
      a = b.pendingProps;
      e = Ef(b, M.current);
      tg(b, c);
      e = Ch(null, b, d, a, e, c);
      b.flags |= 1;
      if (typeof e === "object" && e !== null && typeof e.render === "function" && e.$$typeof === void 0) {
        b.tag = 1;
        b.memoizedState = null;
        b.updateQueue = null;
        if (Ff(d)) {
          var f = true;
          Jf(b);
        } else
          f = false;
        b.memoizedState = e.state !== null && e.state !== void 0 ? e.state : null;
        xg(b);
        var g = d.getDerivedStateFromProps;
        typeof g === "function" && Gg(b, d, g, a);
        e.updater = Kg;
        b.stateNode = e;
        e._reactInternals = b;
        Og(b, d, a, c);
        b = qi(null, b, d, true, f, c);
      } else
        b.tag = 0, fi(null, b, e, c), b = b.child;
      return b;
    case 16:
      e = b.elementType;
      a: {
        a !== null && (a.alternate = null, b.alternate = null, b.flags |= 2);
        a = b.pendingProps;
        f = e._init;
        e = f(e._payload);
        b.type = e;
        f = b.tag = hk(e);
        a = lg(e, a);
        switch (f) {
          case 0:
            b = li(null, b, e, a, c);
            break a;
          case 1:
            b = pi(null, b, e, a, c);
            break a;
          case 11:
            b = gi(null, b, e, a, c);
            break a;
          case 14:
            b = ii(null, b, e, lg(e.type, a), d, c);
            break a;
        }
        throw Error(y(306, e, ""));
      }
      return b;
    case 0:
      return d = b.type, e = b.pendingProps, e = b.elementType === d ? e : lg(d, e), li(a, b, d, e, c);
    case 1:
      return d = b.type, e = b.pendingProps, e = b.elementType === d ? e : lg(d, e), pi(a, b, d, e, c);
    case 3:
      ri(b);
      d = b.updateQueue;
      if (a === null || d === null)
        throw Error(y(282));
      d = b.pendingProps;
      e = b.memoizedState;
      e = e !== null ? e.element : null;
      yg(a, b);
      Cg(b, d, null, c);
      d = b.memoizedState.element;
      if (d === e)
        sh(), b = hi(a, b, c);
      else {
        e = b.stateNode;
        if (f = e.hydrate)
          kh = rf(b.stateNode.containerInfo.firstChild), jh = b, f = lh = true;
        if (f) {
          a = e.mutableSourceEagerHydrationData;
          if (a != null)
            for (e = 0; e < a.length; e += 2)
              f = a[e], f._workInProgressVersionPrimary = a[e + 1], th.push(f);
          c = Zg(b, null, d, c);
          for (b.child = c; c; )
            c.flags = c.flags & -3 | 1024, c = c.sibling;
        } else
          fi(a, b, d, c), sh();
        b = b.child;
      }
      return b;
    case 5:
      return gh(b), a === null && ph(b), d = b.type, e = b.pendingProps, f = a !== null ? a.memoizedProps : null, g = e.children, nf(d, e) ? g = null : f !== null && nf(d, f) && (b.flags |= 16), oi(a, b), fi(a, b, g, c), b.child;
    case 6:
      return a === null && ph(b), null;
    case 13:
      return ti(a, b, c);
    case 4:
      return eh(b, b.stateNode.containerInfo), d = b.pendingProps, a === null ? b.child = Yg(b, null, d, c) : fi(a, b, d, c), b.child;
    case 11:
      return d = b.type, e = b.pendingProps, e = b.elementType === d ? e : lg(d, e), gi(a, b, d, e, c);
    case 7:
      return fi(a, b, b.pendingProps, c), b.child;
    case 8:
      return fi(a, b, b.pendingProps.children, c), b.child;
    case 12:
      return fi(a, b, b.pendingProps.children, c), b.child;
    case 10:
      a: {
        d = b.type._context;
        e = b.pendingProps;
        g = b.memoizedProps;
        f = e.value;
        var h = b.type._context;
        I(mg, h._currentValue);
        h._currentValue = f;
        if (g !== null)
          if (h = g.value, f = He(h, f) ? 0 : (typeof d._calculateChangedBits === "function" ? d._calculateChangedBits(h, f) : 1073741823) | 0, f === 0) {
            if (g.children === e.children && !N.current) {
              b = hi(a, b, c);
              break a;
            }
          } else
            for (h = b.child, h !== null && (h.return = b); h !== null; ) {
              var k = h.dependencies;
              if (k !== null) {
                g = h.child;
                for (var l = k.firstContext; l !== null; ) {
                  if (l.context === d && (l.observedBits & f) !== 0) {
                    h.tag === 1 && (l = zg(-1, c & -c), l.tag = 2, Ag(h, l));
                    h.lanes |= c;
                    l = h.alternate;
                    l !== null && (l.lanes |= c);
                    sg(h.return, c);
                    k.lanes |= c;
                    break;
                  }
                  l = l.next;
                }
              } else
                g = h.tag === 10 ? h.type === b.type ? null : h.child : h.child;
              if (g !== null)
                g.return = h;
              else
                for (g = h; g !== null; ) {
                  if (g === b) {
                    g = null;
                    break;
                  }
                  h = g.sibling;
                  if (h !== null) {
                    h.return = g.return;
                    g = h;
                    break;
                  }
                  g = g.return;
                }
              h = g;
            }
        fi(a, b, e.children, c);
        b = b.child;
      }
      return b;
    case 9:
      return e = b.type, f = b.pendingProps, d = f.children, tg(b, c), e = vg(e, f.unstable_observedBits), d = d(e), b.flags |= 1, fi(a, b, d, c), b.child;
    case 14:
      return e = b.type, f = lg(e, b.pendingProps), f = lg(e.type, f), ii(a, b, e, f, d, c);
    case 15:
      return ki(a, b, b.type, b.pendingProps, d, c);
    case 17:
      return d = b.type, e = b.pendingProps, e = b.elementType === d ? e : lg(d, e), a !== null && (a.alternate = null, b.alternate = null, b.flags |= 2), b.tag = 1, Ff(d) ? (a = true, Jf(b)) : a = false, tg(b, c), Mg(b, d, e), Og(b, d, e, c), qi(null, b, d, true, a, c);
    case 19:
      return Ai(a, b, c);
    case 23:
      return mi(a, b, c);
    case 24:
      return mi(a, b, c);
  }
  throw Error(y(156, b.tag));
};
function ik(a, b, c, d) {
  this.tag = a;
  this.key = c;
  this.sibling = this.child = this.return = this.stateNode = this.type = this.elementType = null;
  this.index = 0;
  this.ref = null;
  this.pendingProps = b;
  this.dependencies = this.memoizedState = this.updateQueue = this.memoizedProps = null;
  this.mode = d;
  this.flags = 0;
  this.lastEffect = this.firstEffect = this.nextEffect = null;
  this.childLanes = this.lanes = 0;
  this.alternate = null;
}
function nh(a, b, c, d) {
  return new ik(a, b, c, d);
}
function ji(a) {
  a = a.prototype;
  return !(!a || !a.isReactComponent);
}
function hk(a) {
  if (typeof a === "function")
    return ji(a) ? 1 : 0;
  if (a !== void 0 && a !== null) {
    a = a.$$typeof;
    if (a === Aa)
      return 11;
    if (a === Da)
      return 14;
  }
  return 2;
}
function Tg(a, b) {
  var c = a.alternate;
  c === null ? (c = nh(a.tag, b, a.key, a.mode), c.elementType = a.elementType, c.type = a.type, c.stateNode = a.stateNode, c.alternate = a, a.alternate = c) : (c.pendingProps = b, c.type = a.type, c.flags = 0, c.nextEffect = null, c.firstEffect = null, c.lastEffect = null);
  c.childLanes = a.childLanes;
  c.lanes = a.lanes;
  c.child = a.child;
  c.memoizedProps = a.memoizedProps;
  c.memoizedState = a.memoizedState;
  c.updateQueue = a.updateQueue;
  b = a.dependencies;
  c.dependencies = b === null ? null : { lanes: b.lanes, firstContext: b.firstContext };
  c.sibling = a.sibling;
  c.index = a.index;
  c.ref = a.ref;
  return c;
}
function Vg(a, b, c, d, e, f) {
  var g = 2;
  d = a;
  if (typeof a === "function")
    ji(a) && (g = 1);
  else if (typeof a === "string")
    g = 5;
  else
    a:
      switch (a) {
        case ua:
          return Xg(c.children, e, f, b);
        case Ha:
          g = 8;
          e |= 16;
          break;
        case wa:
          g = 8;
          e |= 1;
          break;
        case xa:
          return a = nh(12, c, b, e | 8), a.elementType = xa, a.type = xa, a.lanes = f, a;
        case Ba:
          return a = nh(13, c, b, e), a.type = Ba, a.elementType = Ba, a.lanes = f, a;
        case Ca:
          return a = nh(19, c, b, e), a.elementType = Ca, a.lanes = f, a;
        case Ia:
          return vi(c, e, f, b);
        case Ja:
          return a = nh(24, c, b, e), a.elementType = Ja, a.lanes = f, a;
        default:
          if (typeof a === "object" && a !== null)
            switch (a.$$typeof) {
              case ya:
                g = 10;
                break a;
              case za:
                g = 9;
                break a;
              case Aa:
                g = 11;
                break a;
              case Da:
                g = 14;
                break a;
              case Ea:
                g = 16;
                d = null;
                break a;
              case Fa:
                g = 22;
                break a;
            }
          throw Error(y(130, a == null ? a : typeof a, ""));
      }
  b = nh(g, c, b, e);
  b.elementType = a;
  b.type = d;
  b.lanes = f;
  return b;
}
function Xg(a, b, c, d) {
  a = nh(7, a, d, b);
  a.lanes = c;
  return a;
}
function vi(a, b, c, d) {
  a = nh(23, a, d, b);
  a.elementType = Ia;
  a.lanes = c;
  return a;
}
function Ug(a, b, c) {
  a = nh(6, a, null, b);
  a.lanes = c;
  return a;
}
function Wg(a, b, c) {
  b = nh(4, a.children !== null ? a.children : [], a.key, b);
  b.lanes = c;
  b.stateNode = { containerInfo: a.containerInfo, pendingChildren: null, implementation: a.implementation };
  return b;
}
function jk(a, b, c) {
  this.tag = b;
  this.containerInfo = a;
  this.finishedWork = this.pingCache = this.current = this.pendingChildren = null;
  this.timeoutHandle = -1;
  this.pendingContext = this.context = null;
  this.hydrate = c;
  this.callbackNode = null;
  this.callbackPriority = 0;
  this.eventTimes = Zc(0);
  this.expirationTimes = Zc(-1);
  this.entangledLanes = this.finishedLanes = this.mutableReadLanes = this.expiredLanes = this.pingedLanes = this.suspendedLanes = this.pendingLanes = 0;
  this.entanglements = Zc(0);
  this.mutableSourceEagerHydrationData = null;
}
function kk(a, b, c) {
  var d = 3 < arguments.length && arguments[3] !== void 0 ? arguments[3] : null;
  return { $$typeof: ta, key: d == null ? null : "" + d, children: a, containerInfo: b, implementation: c };
}
function lk(a, b, c, d) {
  var e = b.current, f = Hg(), g = Ig(e);
  a:
    if (c) {
      c = c._reactInternals;
      b: {
        if (Zb(c) !== c || c.tag !== 1)
          throw Error(y(170));
        var h = c;
        do {
          switch (h.tag) {
            case 3:
              h = h.stateNode.context;
              break b;
            case 1:
              if (Ff(h.type)) {
                h = h.stateNode.__reactInternalMemoizedMergedChildContext;
                break b;
              }
          }
          h = h.return;
        } while (h !== null);
        throw Error(y(171));
      }
      if (c.tag === 1) {
        var k = c.type;
        if (Ff(k)) {
          c = If(c, k, h);
          break a;
        }
      }
      c = h;
    } else
      c = Cf;
  b.context === null ? b.context = c : b.pendingContext = c;
  b = zg(f, g);
  b.payload = { element: a };
  d = d === void 0 ? null : d;
  d !== null && (b.callback = d);
  Ag(e, b);
  Jg(e, g, f);
  return g;
}
function mk(a) {
  a = a.current;
  if (!a.child)
    return null;
  switch (a.child.tag) {
    case 5:
      return a.child.stateNode;
    default:
      return a.child.stateNode;
  }
}
function nk(a, b) {
  a = a.memoizedState;
  if (a !== null && a.dehydrated !== null) {
    var c = a.retryLane;
    a.retryLane = c !== 0 && c < b ? c : b;
  }
}
function ok(a, b) {
  nk(a, b);
  (a = a.alternate) && nk(a, b);
}
function pk() {
  return null;
}
function qk(a, b, c) {
  var d = c != null && c.hydrationOptions != null && c.hydrationOptions.mutableSources || null;
  c = new jk(a, b, c != null && c.hydrate === true);
  b = nh(3, null, null, b === 2 ? 7 : b === 1 ? 3 : 0);
  c.current = b;
  b.stateNode = c;
  xg(b);
  a[ff] = c.current;
  cf(a.nodeType === 8 ? a.parentNode : a);
  if (d)
    for (a = 0; a < d.length; a++) {
      b = d[a];
      var e = b._getVersion;
      e = e(b._source);
      c.mutableSourceEagerHydrationData == null ? c.mutableSourceEagerHydrationData = [b, e] : c.mutableSourceEagerHydrationData.push(b, e);
    }
  this._internalRoot = c;
}
qk.prototype.render = function(a) {
  lk(a, this._internalRoot, null, null);
};
qk.prototype.unmount = function() {
  var a = this._internalRoot, b = a.containerInfo;
  lk(null, a, null, function() {
    b[ff] = null;
  });
};
function rk(a) {
  return !(!a || a.nodeType !== 1 && a.nodeType !== 9 && a.nodeType !== 11 && (a.nodeType !== 8 || a.nodeValue !== " react-mount-point-unstable "));
}
function sk(a, b) {
  b || (b = a ? a.nodeType === 9 ? a.documentElement : a.firstChild : null, b = !(!b || b.nodeType !== 1 || !b.hasAttribute("data-reactroot")));
  if (!b)
    for (var c; c = a.lastChild; )
      a.removeChild(c);
  return new qk(a, 0, b ? { hydrate: true } : void 0);
}
function tk(a, b, c, d, e) {
  var f = c._reactRootContainer;
  if (f) {
    var g = f._internalRoot;
    if (typeof e === "function") {
      var h = e;
      e = function() {
        var a2 = mk(g);
        h.call(a2);
      };
    }
    lk(b, g, a, e);
  } else {
    f = c._reactRootContainer = sk(c, d);
    g = f._internalRoot;
    if (typeof e === "function") {
      var k = e;
      e = function() {
        var a2 = mk(g);
        k.call(a2);
      };
    }
    Xj(function() {
      lk(b, g, a, e);
    });
  }
  return mk(g);
}
ec = function(a) {
  if (a.tag === 13) {
    var b = Hg();
    Jg(a, 4, b);
    ok(a, 4);
  }
};
fc = function(a) {
  if (a.tag === 13) {
    var b = Hg();
    Jg(a, 67108864, b);
    ok(a, 67108864);
  }
};
gc = function(a) {
  if (a.tag === 13) {
    var b = Hg(), c = Ig(a);
    Jg(a, c, b);
    ok(a, c);
  }
};
hc = function(a, b) {
  return b();
};
yb = function(a, b, c) {
  switch (b) {
    case "input":
      ab(a, c);
      b = c.name;
      if (c.type === "radio" && b != null) {
        for (c = a; c.parentNode; )
          c = c.parentNode;
        c = c.querySelectorAll("input[name=" + JSON.stringify("" + b) + '][type="radio"]');
        for (b = 0; b < c.length; b++) {
          var d = c[b];
          if (d !== a && d.form === a.form) {
            var e = Db(d);
            if (!e)
              throw Error(y(90));
            Wa(d);
            ab(d, e);
          }
        }
      }
      break;
    case "textarea":
      ib(a, c);
      break;
    case "select":
      b = c.value, b != null && fb(a, !!c.multiple, b, false);
  }
};
Gb = Wj;
Hb = function(a, b, c, d, e) {
  var f = X;
  X |= 4;
  try {
    return gg(98, a.bind(null, b, c, d, e));
  } finally {
    X = f, X === 0 && (wj(), ig());
  }
};
Ib = function() {
  (X & 49) === 0 && (Vj(), Oj());
};
Jb = function(a, b) {
  var c = X;
  X |= 2;
  try {
    return a(b);
  } finally {
    X = c, X === 0 && (wj(), ig());
  }
};
function uk(a, b) {
  var c = 2 < arguments.length && arguments[2] !== void 0 ? arguments[2] : null;
  if (!rk(b))
    throw Error(y(200));
  return kk(a, b, null, c);
}
var vk = { Events: [Cb, ue, Db, Eb, Fb, Oj, { current: false }] }, wk = { findFiberByHostInstance: wc, bundleType: 0, version: "17.0.2", rendererPackageName: "react-dom" };
var xk = { bundleType: wk.bundleType, version: wk.version, rendererPackageName: wk.rendererPackageName, rendererConfig: wk.rendererConfig, overrideHookState: null, overrideHookStateDeletePath: null, overrideHookStateRenamePath: null, overrideProps: null, overridePropsDeletePath: null, overridePropsRenamePath: null, setSuspenseHandler: null, scheduleUpdate: null, currentDispatcherRef: ra.ReactCurrentDispatcher, findHostInstanceByFiber: function(a) {
  a = cc(a);
  return a === null ? null : a.stateNode;
}, findFiberByHostInstance: wk.findFiberByHostInstance || pk, findHostInstancesForRefresh: null, scheduleRefresh: null, scheduleRoot: null, setRefreshHandler: null, getCurrentFiber: null };
if (typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ !== "undefined") {
  var yk = __REACT_DEVTOOLS_GLOBAL_HOOK__;
  if (!yk.isDisabled && yk.supportsFiber)
    try {
      Lf = yk.inject(xk), Mf = yk;
    } catch (a) {
    }
}
reactDom_production_min.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED = vk;
reactDom_production_min.createPortal = uk;
reactDom_production_min.findDOMNode = function(a) {
  if (a == null)
    return null;
  if (a.nodeType === 1)
    return a;
  var b = a._reactInternals;
  if (b === void 0) {
    if (typeof a.render === "function")
      throw Error(y(188));
    throw Error(y(268, Object.keys(a)));
  }
  a = cc(b);
  a = a === null ? null : a.stateNode;
  return a;
};
reactDom_production_min.flushSync = function(a, b) {
  var c = X;
  if ((c & 48) !== 0)
    return a(b);
  X |= 1;
  try {
    if (a)
      return gg(99, a.bind(null, b));
  } finally {
    X = c, ig();
  }
};
reactDom_production_min.hydrate = function(a, b, c) {
  if (!rk(b))
    throw Error(y(200));
  return tk(null, a, b, true, c);
};
reactDom_production_min.render = function(a, b, c) {
  if (!rk(b))
    throw Error(y(200));
  return tk(null, a, b, false, c);
};
reactDom_production_min.unmountComponentAtNode = function(a) {
  if (!rk(a))
    throw Error(y(40));
  return a._reactRootContainer ? (Xj(function() {
    tk(null, null, a, false, function() {
      a._reactRootContainer = null;
      a[ff] = null;
    });
  }), true) : false;
};
reactDom_production_min.unstable_batchedUpdates = Wj;
reactDom_production_min.unstable_createPortal = function(a, b) {
  return uk(a, b, 2 < arguments.length && arguments[2] !== void 0 ? arguments[2] : null);
};
reactDom_production_min.unstable_renderSubtreeIntoContainer = function(a, b, c, d) {
  if (!rk(c))
    throw Error(y(200));
  if (a == null || a._reactInternals === void 0)
    throw Error(y(38));
  return tk(a, b, c, false, d);
};
reactDom_production_min.version = "17.0.2";
function checkDCE() {
  if (typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ === "undefined" || typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE !== "function") {
    return;
  }
  try {
    __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(checkDCE);
  } catch (err) {
    console.error(err);
  }
}
{
  checkDCE();
  reactDom.exports = reactDom_production_min;
}
var ReactDOMComet = reactDom.exports;
var flushControlled$1 = ReactDOMComet.unstable_flushControlled;
var DraftEditorFlushControlled = flushControlled$1;
function _inheritsLoose$1(subClass, superClass) {
  subClass.prototype = Object.create(superClass.prototype);
  subClass.prototype.constructor = subClass;
  subClass.__proto__ = superClass;
}
var React$2 = React__default;
var cx$1 = cx_1;
var DraftEditorPlaceholder$1 = /* @__PURE__ */ function(_React$Component) {
  _inheritsLoose$1(DraftEditorPlaceholder2, _React$Component);
  function DraftEditorPlaceholder2() {
    return _React$Component.apply(this, arguments) || this;
  }
  var _proto = DraftEditorPlaceholder2.prototype;
  _proto.shouldComponentUpdate = function shouldComponentUpdate(nextProps) {
    return this.props.text !== nextProps.text || this.props.editorState.getSelection().getHasFocus() !== nextProps.editorState.getSelection().getHasFocus();
  };
  _proto.render = function render3() {
    var hasFocus = this.props.editorState.getSelection().getHasFocus();
    var className = cx$1({
      "public/DraftEditorPlaceholder/root": true,
      "public/DraftEditorPlaceholder/hasFocus": hasFocus
    });
    var contentStyle = {
      whiteSpace: "pre-wrap"
    };
    return React$2.createElement("div", {
      className
    }, React$2.createElement("div", {
      className: cx$1("public/DraftEditorPlaceholder/inner"),
      id: this.props.accessibilityID,
      style: contentStyle
    }, this.props.text));
  };
  return DraftEditorPlaceholder2;
}(React$2.Component);
var DraftEditorPlaceholder_react = DraftEditorPlaceholder$1;
var KeyBindingUtil$1 = KeyBindingUtil_1;
var Keys = Keys$4;
var UserAgent$1 = UserAgent_1;
var isOSX = UserAgent$1.isPlatform("Mac OS X");
var shouldFixFirefoxMovement = isOSX && UserAgent$1.isBrowser("Firefox < 29");
var hasCommandModifier2 = KeyBindingUtil$1.hasCommandModifier, isCtrlKeyCommand2 = KeyBindingUtil$1.isCtrlKeyCommand;
function shouldRemoveWord(e) {
  return isOSX && e.altKey || isCtrlKeyCommand2(e);
}
function getZCommand(e) {
  if (!hasCommandModifier2(e)) {
    return null;
  }
  return e.shiftKey ? "redo" : "undo";
}
function getDeleteCommand(e) {
  if (!isOSX && e.shiftKey) {
    return null;
  }
  return shouldRemoveWord(e) ? "delete-word" : "delete";
}
function getBackspaceCommand(e) {
  if (hasCommandModifier2(e) && isOSX) {
    return "backspace-to-start-of-line";
  }
  return shouldRemoveWord(e) ? "backspace-word" : "backspace";
}
function getDefaultKeyBinding$2(e) {
  switch (e.keyCode) {
    case 66:
      return hasCommandModifier2(e) ? "bold" : null;
    case 68:
      return isCtrlKeyCommand2(e) ? "delete" : null;
    case 72:
      return isCtrlKeyCommand2(e) ? "backspace" : null;
    case 73:
      return hasCommandModifier2(e) ? "italic" : null;
    case 74:
      return hasCommandModifier2(e) ? "code" : null;
    case 75:
      return isOSX && isCtrlKeyCommand2(e) ? "secondary-cut" : null;
    case 77:
      return isCtrlKeyCommand2(e) ? "split-block" : null;
    case 79:
      return isCtrlKeyCommand2(e) ? "split-block" : null;
    case 84:
      return isOSX && isCtrlKeyCommand2(e) ? "transpose-characters" : null;
    case 85:
      return hasCommandModifier2(e) ? "underline" : null;
    case 87:
      return isOSX && isCtrlKeyCommand2(e) ? "backspace-word" : null;
    case 89:
      if (isCtrlKeyCommand2(e)) {
        return isOSX ? "secondary-paste" : "redo";
      }
      return null;
    case 90:
      return getZCommand(e) || null;
    case Keys.RETURN:
      return "split-block";
    case Keys.DELETE:
      return getDeleteCommand(e);
    case Keys.BACKSPACE:
      return getBackspaceCommand(e);
    case Keys.LEFT:
      return shouldFixFirefoxMovement && hasCommandModifier2(e) ? "move-selection-to-start-of-block" : null;
    case Keys.RIGHT:
      return shouldFixFirefoxMovement && hasCommandModifier2(e) ? "move-selection-to-end-of-block" : null;
    default:
      return null;
  }
}
var getDefaultKeyBinding_1 = getDefaultKeyBinding$2;
var _assign = objectAssign;
function _extends() {
  _extends = _assign || function(target) {
    for (var i = 1; i < arguments.length; i++) {
      var source = arguments[i];
      for (var key in source) {
        if (Object.prototype.hasOwnProperty.call(source, key)) {
          target[key] = source[key];
        }
      }
    }
    return target;
  };
  return _extends.apply(this, arguments);
}
function _objectSpread$3(target) {
  for (var i = 1; i < arguments.length; i++) {
    var source = arguments[i] != null ? arguments[i] : {};
    var ownKeys = Object.keys(source);
    if (typeof Object.getOwnPropertySymbols === "function") {
      ownKeys = ownKeys.concat(Object.getOwnPropertySymbols(source).filter(function(sym) {
        return Object.getOwnPropertyDescriptor(source, sym).enumerable;
      }));
    }
    ownKeys.forEach(function(key) {
      _defineProperty$3(target, key, source[key]);
    });
  }
  return target;
}
function _assertThisInitialized(self2) {
  if (self2 === void 0) {
    throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
  }
  return self2;
}
function _defineProperty$3(obj, key, value) {
  if (key in obj) {
    Object.defineProperty(obj, key, { value, enumerable: true, configurable: true, writable: true });
  } else {
    obj[key] = value;
  }
  return obj;
}
function _inheritsLoose(subClass, superClass) {
  subClass.prototype = Object.create(superClass.prototype);
  subClass.prototype.constructor = subClass;
  subClass.__proto__ = superClass;
}
var DefaultDraftBlockRenderMap$1 = DefaultDraftBlockRenderMap_1;
var DefaultDraftInlineStyle$1 = DefaultDraftInlineStyle$2;
var DraftEditorCompositionHandler = DraftEditorCompositionHandler_1;
var DraftEditorContents = DraftEditorContents_react;
var DraftEditorDragHandler = DraftEditorDragHandler_1;
var DraftEditorEditHandler = DraftEditorEditHandler_1;
var flushControlled = DraftEditorFlushControlled;
var DraftEditorPlaceholder = DraftEditorPlaceholder_react;
var EditorState$1 = EditorState_1;
var React$1 = React__default;
var Scroll = Scroll_1;
var Style = Style_1;
var UserAgent = UserAgent_1;
var cx = cx_1;
var generateRandomKey$3 = generateRandomKey_1;
var getDefaultKeyBinding$1 = getDefaultKeyBinding_1;
var getScrollPosition = getScrollPosition_1;
var gkx$1 = gkx$8;
var invariant$3 = invariant_1;
var isHTMLElement = isHTMLElement_1;
var nullthrows2 = nullthrows_1;
var isIE = UserAgent.isBrowser("IE");
var allowSpellCheck = !isIE;
var handlerMap = {
  edit: DraftEditorEditHandler,
  composite: DraftEditorCompositionHandler,
  drag: DraftEditorDragHandler,
  cut: null,
  render: null
};
var didInitODS = false;
var UpdateDraftEditorFlags = /* @__PURE__ */ function(_React$Component) {
  _inheritsLoose(UpdateDraftEditorFlags2, _React$Component);
  function UpdateDraftEditorFlags2() {
    return _React$Component.apply(this, arguments) || this;
  }
  var _proto = UpdateDraftEditorFlags2.prototype;
  _proto.render = function render3() {
    return null;
  };
  _proto.componentDidMount = function componentDidMount() {
    this._update();
  };
  _proto.componentDidUpdate = function componentDidUpdate() {
    this._update();
  };
  _proto._update = function _update() {
    var editor = this.props.editor;
    editor._latestEditorState = this.props.editorState;
    editor._blockSelectEvents = true;
  };
  return UpdateDraftEditorFlags2;
}(React$1.Component);
var DraftEditor$1 = /* @__PURE__ */ function(_React$Component2) {
  _inheritsLoose(DraftEditor2, _React$Component2);
  function DraftEditor2(props) {
    var _this;
    _this = _React$Component2.call(this, props) || this;
    _defineProperty$3(_assertThisInitialized(_this), "_blockSelectEvents", void 0);
    _defineProperty$3(_assertThisInitialized(_this), "_clipboard", void 0);
    _defineProperty$3(_assertThisInitialized(_this), "_handler", void 0);
    _defineProperty$3(_assertThisInitialized(_this), "_dragCount", void 0);
    _defineProperty$3(_assertThisInitialized(_this), "_internalDrag", void 0);
    _defineProperty$3(_assertThisInitialized(_this), "_editorKey", void 0);
    _defineProperty$3(_assertThisInitialized(_this), "_placeholderAccessibilityID", void 0);
    _defineProperty$3(_assertThisInitialized(_this), "_latestEditorState", void 0);
    _defineProperty$3(_assertThisInitialized(_this), "_latestCommittedEditorState", void 0);
    _defineProperty$3(_assertThisInitialized(_this), "_pendingStateFromBeforeInput", void 0);
    _defineProperty$3(_assertThisInitialized(_this), "_onBeforeInput", void 0);
    _defineProperty$3(_assertThisInitialized(_this), "_onBlur", void 0);
    _defineProperty$3(_assertThisInitialized(_this), "_onCharacterData", void 0);
    _defineProperty$3(_assertThisInitialized(_this), "_onCompositionEnd", void 0);
    _defineProperty$3(_assertThisInitialized(_this), "_onCompositionStart", void 0);
    _defineProperty$3(_assertThisInitialized(_this), "_onCopy", void 0);
    _defineProperty$3(_assertThisInitialized(_this), "_onCut", void 0);
    _defineProperty$3(_assertThisInitialized(_this), "_onDragEnd", void 0);
    _defineProperty$3(_assertThisInitialized(_this), "_onDragOver", void 0);
    _defineProperty$3(_assertThisInitialized(_this), "_onDragStart", void 0);
    _defineProperty$3(_assertThisInitialized(_this), "_onDrop", void 0);
    _defineProperty$3(_assertThisInitialized(_this), "_onInput", void 0);
    _defineProperty$3(_assertThisInitialized(_this), "_onFocus", void 0);
    _defineProperty$3(_assertThisInitialized(_this), "_onKeyDown", void 0);
    _defineProperty$3(_assertThisInitialized(_this), "_onKeyPress", void 0);
    _defineProperty$3(_assertThisInitialized(_this), "_onKeyUp", void 0);
    _defineProperty$3(_assertThisInitialized(_this), "_onMouseDown", void 0);
    _defineProperty$3(_assertThisInitialized(_this), "_onMouseUp", void 0);
    _defineProperty$3(_assertThisInitialized(_this), "_onPaste", void 0);
    _defineProperty$3(_assertThisInitialized(_this), "_onSelect", void 0);
    _defineProperty$3(_assertThisInitialized(_this), "editor", void 0);
    _defineProperty$3(_assertThisInitialized(_this), "editorContainer", void 0);
    _defineProperty$3(_assertThisInitialized(_this), "focus", void 0);
    _defineProperty$3(_assertThisInitialized(_this), "blur", void 0);
    _defineProperty$3(_assertThisInitialized(_this), "setMode", void 0);
    _defineProperty$3(_assertThisInitialized(_this), "exitCurrentMode", void 0);
    _defineProperty$3(_assertThisInitialized(_this), "restoreEditorDOM", void 0);
    _defineProperty$3(_assertThisInitialized(_this), "setClipboard", void 0);
    _defineProperty$3(_assertThisInitialized(_this), "getClipboard", void 0);
    _defineProperty$3(_assertThisInitialized(_this), "getEditorKey", void 0);
    _defineProperty$3(_assertThisInitialized(_this), "update", void 0);
    _defineProperty$3(_assertThisInitialized(_this), "onDragEnter", void 0);
    _defineProperty$3(_assertThisInitialized(_this), "onDragLeave", void 0);
    _defineProperty$3(_assertThisInitialized(_this), "_handleEditorContainerRef", function(node) {
      _this.editorContainer = node;
      _this.editor = node !== null ? node.firstChild : null;
    });
    _defineProperty$3(_assertThisInitialized(_this), "focus", function(scrollPosition) {
      var editorState = _this.props.editorState;
      var alreadyHasFocus = editorState.getSelection().getHasFocus();
      var editorNode = _this.editor;
      if (!editorNode) {
        return;
      }
      var scrollParent = Style.getScrollParent(editorNode);
      var _ref = scrollPosition || getScrollPosition(scrollParent), x = _ref.x, y2 = _ref.y;
      !isHTMLElement(editorNode) ? invariant$3(false) : void 0;
      editorNode.focus();
      if (scrollParent === window) {
        window.scrollTo(x, y2);
      } else {
        Scroll.setTop(scrollParent, y2);
      }
      if (!alreadyHasFocus) {
        _this.update(EditorState$1.forceSelection(editorState, editorState.getSelection()));
      }
    });
    _defineProperty$3(_assertThisInitialized(_this), "blur", function() {
      var editorNode = _this.editor;
      if (!editorNode) {
        return;
      }
      !isHTMLElement(editorNode) ? invariant$3(false) : void 0;
      editorNode.blur();
    });
    _defineProperty$3(_assertThisInitialized(_this), "setMode", function(mode) {
      var _this$props = _this.props, onPaste2 = _this$props.onPaste, onCut2 = _this$props.onCut, onCopy2 = _this$props.onCopy;
      var editHandler = _objectSpread$3({}, handlerMap.edit);
      if (onPaste2) {
        editHandler.onPaste = onPaste2;
      }
      if (onCut2) {
        editHandler.onCut = onCut2;
      }
      if (onCopy2) {
        editHandler.onCopy = onCopy2;
      }
      var handler = _objectSpread$3({}, handlerMap, {
        edit: editHandler
      });
      _this._handler = handler[mode];
    });
    _defineProperty$3(_assertThisInitialized(_this), "exitCurrentMode", function() {
      _this.setMode("edit");
    });
    _defineProperty$3(_assertThisInitialized(_this), "restoreEditorDOM", function(scrollPosition) {
      _this.setState({
        contentsKey: _this.state.contentsKey + 1
      }, function() {
        _this.focus(scrollPosition);
      });
    });
    _defineProperty$3(_assertThisInitialized(_this), "setClipboard", function(clipboard2) {
      _this._clipboard = clipboard2;
    });
    _defineProperty$3(_assertThisInitialized(_this), "getClipboard", function() {
      return _this._clipboard;
    });
    _defineProperty$3(_assertThisInitialized(_this), "update", function(editorState) {
      _this._latestEditorState = editorState;
      _this.props.onChange(editorState);
    });
    _defineProperty$3(_assertThisInitialized(_this), "onDragEnter", function() {
      _this._dragCount++;
    });
    _defineProperty$3(_assertThisInitialized(_this), "onDragLeave", function() {
      _this._dragCount--;
      if (_this._dragCount === 0) {
        _this.exitCurrentMode();
      }
    });
    _this._blockSelectEvents = false;
    _this._clipboard = null;
    _this._handler = null;
    _this._dragCount = 0;
    _this._editorKey = props.editorKey || generateRandomKey$3();
    _this._placeholderAccessibilityID = "placeholder-" + _this._editorKey;
    _this._latestEditorState = props.editorState;
    _this._latestCommittedEditorState = props.editorState;
    _this._onBeforeInput = _this._buildHandler("onBeforeInput");
    _this._onBlur = _this._buildHandler("onBlur");
    _this._onCharacterData = _this._buildHandler("onCharacterData");
    _this._onCompositionEnd = _this._buildHandler("onCompositionEnd");
    _this._onCompositionStart = _this._buildHandler("onCompositionStart");
    _this._onCopy = _this._buildHandler("onCopy");
    _this._onCut = _this._buildHandler("onCut");
    _this._onDragEnd = _this._buildHandler("onDragEnd");
    _this._onDragOver = _this._buildHandler("onDragOver");
    _this._onDragStart = _this._buildHandler("onDragStart");
    _this._onDrop = _this._buildHandler("onDrop");
    _this._onInput = _this._buildHandler("onInput");
    _this._onFocus = _this._buildHandler("onFocus");
    _this._onKeyDown = _this._buildHandler("onKeyDown");
    _this._onKeyPress = _this._buildHandler("onKeyPress");
    _this._onKeyUp = _this._buildHandler("onKeyUp");
    _this._onMouseDown = _this._buildHandler("onMouseDown");
    _this._onMouseUp = _this._buildHandler("onMouseUp");
    _this._onPaste = _this._buildHandler("onPaste");
    _this._onSelect = _this._buildHandler("onSelect");
    _this.getEditorKey = function() {
      return _this._editorKey;
    };
    _this.state = {
      contentsKey: 0
    };
    return _this;
  }
  var _proto2 = DraftEditor2.prototype;
  _proto2._buildHandler = function _buildHandler(eventName) {
    var _this2 = this;
    return function(e) {
      if (!_this2.props.readOnly) {
        var method = _this2._handler && _this2._handler[eventName];
        if (method) {
          if (flushControlled) {
            flushControlled(function() {
              return method(_this2, e);
            });
          } else {
            method(_this2, e);
          }
        }
      }
    };
  };
  _proto2._showPlaceholder = function _showPlaceholder() {
    return !!this.props.placeholder && !this.props.editorState.isInCompositionMode() && !this.props.editorState.getCurrentContent().hasText();
  };
  _proto2._renderPlaceholder = function _renderPlaceholder() {
    if (this._showPlaceholder()) {
      var placeHolderProps = {
        text: nullthrows2(this.props.placeholder),
        editorState: this.props.editorState,
        textAlignment: this.props.textAlignment,
        accessibilityID: this._placeholderAccessibilityID
      };
      return React$1.createElement(DraftEditorPlaceholder, placeHolderProps);
    }
    return null;
  };
  _proto2._renderARIADescribedBy = function _renderARIADescribedBy() {
    var describedBy = this.props.ariaDescribedBy || "";
    var placeholderID = this._showPlaceholder() ? this._placeholderAccessibilityID : "";
    return describedBy.replace("{{editor_id_placeholder}}", placeholderID) || void 0;
  };
  _proto2.render = function render3() {
    var _this$props2 = this.props, blockRenderMap = _this$props2.blockRenderMap, blockRendererFn2 = _this$props2.blockRendererFn, blockStyleFn2 = _this$props2.blockStyleFn, customStyleFn = _this$props2.customStyleFn, customStyleMap = _this$props2.customStyleMap, editorState = _this$props2.editorState, preventScroll = _this$props2.preventScroll, readOnly = _this$props2.readOnly, textAlignment = _this$props2.textAlignment, textDirectionality = _this$props2.textDirectionality;
    var rootClass = cx({
      "DraftEditor/root": true,
      "DraftEditor/alignLeft": textAlignment === "left",
      "DraftEditor/alignRight": textAlignment === "right",
      "DraftEditor/alignCenter": textAlignment === "center"
    });
    var contentStyle = {
      outline: "none",
      userSelect: "text",
      WebkitUserSelect: "text",
      whiteSpace: "pre-wrap",
      wordWrap: "break-word"
    };
    var ariaRole = this.props.role || "textbox";
    var ariaExpanded = ariaRole === "combobox" ? !!this.props.ariaExpanded : null;
    var editorContentsProps = {
      blockRenderMap,
      blockRendererFn: blockRendererFn2,
      blockStyleFn: blockStyleFn2,
      customStyleMap: _objectSpread$3({}, DefaultDraftInlineStyle$1, customStyleMap),
      customStyleFn,
      editorKey: this._editorKey,
      editorState,
      preventScroll,
      textDirectionality
    };
    return React$1.createElement("div", {
      className: rootClass
    }, this._renderPlaceholder(), React$1.createElement("div", {
      className: cx("DraftEditor/editorContainer"),
      ref: this._handleEditorContainerRef
    }, React$1.createElement("div", {
      "aria-activedescendant": readOnly ? null : this.props.ariaActiveDescendantID,
      "aria-autocomplete": readOnly ? null : this.props.ariaAutoComplete,
      "aria-controls": readOnly ? null : this.props.ariaControls,
      "aria-describedby": this._renderARIADescribedBy(),
      "aria-expanded": readOnly ? null : ariaExpanded,
      "aria-label": this.props.ariaLabel,
      "aria-labelledby": this.props.ariaLabelledBy,
      "aria-multiline": this.props.ariaMultiline,
      "aria-owns": readOnly ? null : this.props.ariaOwneeID,
      autoCapitalize: this.props.autoCapitalize,
      autoComplete: this.props.autoComplete,
      autoCorrect: this.props.autoCorrect,
      className: cx({
        notranslate: !readOnly,
        "public/DraftEditor/content": true
      }),
      contentEditable: !readOnly,
      "data-testid": this.props.webDriverTestID,
      onBeforeInput: this._onBeforeInput,
      onBlur: this._onBlur,
      onCompositionEnd: this._onCompositionEnd,
      onCompositionStart: this._onCompositionStart,
      onCopy: this._onCopy,
      onCut: this._onCut,
      onDragEnd: this._onDragEnd,
      onDragEnter: this.onDragEnter,
      onDragLeave: this.onDragLeave,
      onDragOver: this._onDragOver,
      onDragStart: this._onDragStart,
      onDrop: this._onDrop,
      onFocus: this._onFocus,
      onInput: this._onInput,
      onKeyDown: this._onKeyDown,
      onKeyPress: this._onKeyPress,
      onKeyUp: this._onKeyUp,
      onMouseUp: this._onMouseUp,
      onPaste: this._onPaste,
      onSelect: this._onSelect,
      ref: this.props.editorRef,
      role: readOnly ? null : ariaRole,
      spellCheck: allowSpellCheck && this.props.spellCheck,
      style: contentStyle,
      suppressContentEditableWarning: true,
      tabIndex: this.props.tabIndex
    }, React$1.createElement(UpdateDraftEditorFlags, {
      editor: this,
      editorState
    }), React$1.createElement(DraftEditorContents, _extends({}, editorContentsProps, {
      key: "contents" + this.state.contentsKey
    })))));
  };
  _proto2.componentDidMount = function componentDidMount() {
    this._blockSelectEvents = false;
    if (!didInitODS && gkx$1("draft_ods_enabled")) {
      didInitODS = true;
    }
    this.setMode("edit");
    if (isIE) {
      if (!this.editor) {
        commonjsGlobal.execCommand("AutoUrlDetect", false, false);
      } else {
        this.editor.ownerDocument.execCommand("AutoUrlDetect", false, false);
      }
    }
  };
  _proto2.componentDidUpdate = function componentDidUpdate() {
    this._blockSelectEvents = false;
    this._latestEditorState = this.props.editorState;
    this._latestCommittedEditorState = this.props.editorState;
  };
  return DraftEditor2;
}(React$1.Component);
_defineProperty$3(DraftEditor$1, "defaultProps", {
  ariaDescribedBy: "{{editor_id_placeholder}}",
  blockRenderMap: DefaultDraftBlockRenderMap$1,
  blockRendererFn: function blockRendererFn() {
    return null;
  },
  blockStyleFn: function blockStyleFn() {
    return "";
  },
  keyBindingFn: getDefaultKeyBinding$1,
  readOnly: false,
  spellCheck: false,
  stripPastedStyles: false
});
var DraftEditor_react = DraftEditor$1;
var RawDraftContentState$1 = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null
}, Symbol.toStringTag, { value: "Module" }));
var require$$15 = /* @__PURE__ */ getAugmentedNamespace(RawDraftContentState$1);
var DraftStringKey$2 = {
  stringify: function stringify(key) {
    return "_" + String(key);
  },
  unstringify: function unstringify(key) {
    return key.slice(1);
  }
};
var DraftStringKey_1 = DraftStringKey$2;
var DraftStringKey$1 = DraftStringKey_1;
var UnicodeUtils$3 = UnicodeUtils_1;
var strlen = UnicodeUtils$3.strlen;
function encodeEntityRanges$1(block, storageMap) {
  var encoded = [];
  block.findEntityRanges(function(character) {
    return !!character.getEntity();
  }, function(start, end) {
    var text = block.getText();
    var key = block.getEntityAt(start);
    encoded.push({
      offset: strlen(text.slice(0, start)),
      length: strlen(text.slice(start, end)),
      key: Number(storageMap[DraftStringKey$1.stringify(key)])
    });
  });
  return encoded;
}
var encodeEntityRanges_1 = encodeEntityRanges$1;
var UnicodeUtils$2 = UnicodeUtils_1;
var findRangesImmutable = findRangesImmutable_1;
var areEqual = function areEqual2(a, b) {
  return a === b;
};
var isTruthy = function isTruthy2(a) {
  return !!a;
};
var EMPTY_ARRAY = [];
function getEncodedInlinesForType(block, styleList, styleToEncode) {
  var ranges = [];
  var filteredInlines = styleList.map(function(style) {
    return style.has(styleToEncode);
  }).toList();
  findRangesImmutable(filteredInlines, areEqual, isTruthy, function(start, end) {
    var text = block.getText();
    ranges.push({
      offset: UnicodeUtils$2.strlen(text.slice(0, start)),
      length: UnicodeUtils$2.strlen(text.slice(start, end)),
      style: styleToEncode
    });
  });
  return ranges;
}
function encodeInlineStyleRanges$1(block) {
  var styleList = block.getCharacterList().map(function(c) {
    return c.getStyle();
  }).toList();
  var ranges = styleList.flatten().toSet().map(function(style) {
    return getEncodedInlinesForType(block, styleList, style);
  });
  return Array.prototype.concat.apply(EMPTY_ARRAY, ranges.toJS());
}
var encodeInlineStyleRanges_1 = encodeInlineStyleRanges$1;
function _objectSpread$2(target) {
  for (var i = 1; i < arguments.length; i++) {
    var source = arguments[i] != null ? arguments[i] : {};
    var ownKeys = Object.keys(source);
    if (typeof Object.getOwnPropertySymbols === "function") {
      ownKeys = ownKeys.concat(Object.getOwnPropertySymbols(source).filter(function(sym) {
        return Object.getOwnPropertyDescriptor(source, sym).enumerable;
      }));
    }
    ownKeys.forEach(function(key) {
      _defineProperty$2(target, key, source[key]);
    });
  }
  return target;
}
function _defineProperty$2(obj, key, value) {
  if (key in obj) {
    Object.defineProperty(obj, key, { value, enumerable: true, configurable: true, writable: true });
  } else {
    obj[key] = value;
  }
  return obj;
}
var ContentBlock$2 = ContentBlock_1;
var ContentBlockNode$1 = ContentBlockNode_1;
var DraftStringKey = DraftStringKey_1;
var encodeEntityRanges = encodeEntityRanges_1;
var encodeInlineStyleRanges = encodeInlineStyleRanges_1;
var invariant$2 = invariant_1;
var createRawBlock = function createRawBlock2(block, entityStorageMap) {
  return {
    key: block.getKey(),
    text: block.getText(),
    type: block.getType(),
    depth: block.getDepth(),
    inlineStyleRanges: encodeInlineStyleRanges(block),
    entityRanges: encodeEntityRanges(block, entityStorageMap),
    data: block.getData().toObject()
  };
};
var insertRawBlock = function insertRawBlock2(block, entityMap, rawBlocks, blockCacheRef) {
  if (block instanceof ContentBlock$2) {
    rawBlocks.push(createRawBlock(block, entityMap));
    return;
  }
  !(block instanceof ContentBlockNode$1) ? invariant$2(false) : void 0;
  var parentKey = block.getParentKey();
  var rawBlock = blockCacheRef[block.getKey()] = _objectSpread$2({}, createRawBlock(block, entityMap), {
    children: []
  });
  if (parentKey) {
    blockCacheRef[parentKey].children.push(rawBlock);
    return;
  }
  rawBlocks.push(rawBlock);
};
var encodeRawBlocks = function encodeRawBlocks2(contentState, rawState) {
  var entityMap = rawState.entityMap;
  var rawBlocks = [];
  var blockCacheRef = {};
  var entityCacheRef = {};
  var entityStorageKey = 0;
  contentState.getBlockMap().forEach(function(block) {
    block.findEntityRanges(function(character) {
      return character.getEntity() !== null;
    }, function(start) {
      var entityKey = block.getEntityAt(start);
      var stringifiedEntityKey = DraftStringKey.stringify(entityKey);
      if (entityCacheRef[stringifiedEntityKey]) {
        return;
      }
      entityCacheRef[stringifiedEntityKey] = entityKey;
      entityMap[stringifiedEntityKey] = "".concat(entityStorageKey);
      entityStorageKey++;
    });
    insertRawBlock(block, entityMap, rawBlocks, blockCacheRef);
  });
  return {
    blocks: rawBlocks,
    entityMap
  };
};
var encodeRawEntityMap = function encodeRawEntityMap2(contentState, rawState) {
  var blocks = rawState.blocks, entityMap = rawState.entityMap;
  var rawEntityMap = {};
  Object.keys(entityMap).forEach(function(key, index) {
    var entity = contentState.getEntity(DraftStringKey.unstringify(key));
    rawEntityMap[index] = {
      type: entity.getType(),
      mutability: entity.getMutability(),
      data: entity.getData()
    };
  });
  return {
    blocks,
    entityMap: rawEntityMap
  };
};
var convertFromDraftStateToRaw$1 = function convertFromDraftStateToRaw(contentState) {
  var rawDraftContentState = {
    entityMap: {},
    blocks: []
  };
  rawDraftContentState = encodeRawBlocks(contentState, rawDraftContentState);
  rawDraftContentState = encodeRawEntityMap(contentState, rawDraftContentState);
  return rawDraftContentState;
};
var convertFromDraftStateToRaw_1 = convertFromDraftStateToRaw$1;
function _objectSpread$1(target) {
  for (var i = 1; i < arguments.length; i++) {
    var source = arguments[i] != null ? arguments[i] : {};
    var ownKeys = Object.keys(source);
    if (typeof Object.getOwnPropertySymbols === "function") {
      ownKeys = ownKeys.concat(Object.getOwnPropertySymbols(source).filter(function(sym) {
        return Object.getOwnPropertyDescriptor(source, sym).enumerable;
      }));
    }
    ownKeys.forEach(function(key) {
      _defineProperty$1(target, key, source[key]);
    });
  }
  return target;
}
function _defineProperty$1(obj, key, value) {
  if (key in obj) {
    Object.defineProperty(obj, key, { value, enumerable: true, configurable: true, writable: true });
  } else {
    obj[key] = value;
  }
  return obj;
}
var generateRandomKey$2 = generateRandomKey_1;
var invariant$1 = invariant_1;
var traverseInDepthOrder = function traverseInDepthOrder2(blocks, fn) {
  var stack = [].concat(blocks).reverse();
  while (stack.length) {
    var _block = stack.pop();
    fn(_block);
    var children = _block.children;
    !Array.isArray(children) ? invariant$1(false) : void 0;
    stack = stack.concat([].concat(children.reverse()));
  }
};
var isListBlock = function isListBlock2(block) {
  if (!(block && block.type)) {
    return false;
  }
  var type = block.type;
  return type === "unordered-list-item" || type === "ordered-list-item";
};
var addDepthToChildren = function addDepthToChildren2(block) {
  if (Array.isArray(block.children)) {
    block.children = block.children.map(function(child) {
      return child.type === block.type ? _objectSpread$1({}, child, {
        depth: (block.depth || 0) + 1
      }) : child;
    });
  }
};
var DraftTreeAdapter$1 = {
  fromRawTreeStateToRawState: function fromRawTreeStateToRawState(draftTreeState) {
    var blocks = draftTreeState.blocks;
    var transformedBlocks = [];
    !Array.isArray(blocks) ? invariant$1(false) : void 0;
    if (!Array.isArray(blocks) || !blocks.length) {
      return draftTreeState;
    }
    traverseInDepthOrder(blocks, function(block) {
      var newBlock = _objectSpread$1({}, block);
      if (isListBlock(block)) {
        newBlock.depth = newBlock.depth || 0;
        addDepthToChildren(block);
        if (block.children != null && block.children.length > 0) {
          return;
        }
      }
      delete newBlock.children;
      transformedBlocks.push(newBlock);
    });
    draftTreeState.blocks = transformedBlocks;
    return _objectSpread$1({}, draftTreeState, {
      blocks: transformedBlocks
    });
  },
  fromRawStateToRawTreeState: function fromRawStateToRawTreeState(draftState) {
    var transformedBlocks = [];
    var parentStack = [];
    draftState.blocks.forEach(function(block) {
      var isList = isListBlock(block);
      var depth = block.depth || 0;
      var treeBlock = _objectSpread$1({}, block, {
        children: []
      });
      if (!isList) {
        transformedBlocks.push(treeBlock);
        return;
      }
      var lastParent = parentStack[0];
      if (lastParent == null && depth === 0) {
        transformedBlocks.push(treeBlock);
      } else if (lastParent == null || lastParent.depth < depth - 1) {
        var newParent = {
          key: generateRandomKey$2(),
          text: "",
          depth: depth - 1,
          type: block.type,
          children: [],
          entityRanges: [],
          inlineStyleRanges: []
        };
        parentStack.unshift(newParent);
        if (depth === 1) {
          transformedBlocks.push(newParent);
        } else if (lastParent != null) {
          lastParent.children.push(newParent);
        }
        newParent.children.push(treeBlock);
      } else if (lastParent.depth === depth - 1) {
        lastParent.children.push(treeBlock);
      } else {
        while (lastParent != null && lastParent.depth >= depth) {
          parentStack.shift();
          lastParent = parentStack[0];
        }
        if (depth > 0) {
          lastParent.children.push(treeBlock);
        } else {
          transformedBlocks.push(treeBlock);
        }
      }
    });
    return _objectSpread$1({}, draftState, {
      blocks: transformedBlocks
    });
  }
};
var DraftTreeAdapter_1 = DraftTreeAdapter$1;
var CharacterMetadata$1 = CharacterMetadata_1;
var Immutable$1 = immutable.exports;
var List$1 = Immutable$1.List;
function createCharacterList$1(inlineStyles, entities) {
  var characterArray = inlineStyles.map(function(style, ii2) {
    var entity = entities[ii2];
    return CharacterMetadata$1.create({
      style,
      entity
    });
  });
  return List$1(characterArray);
}
var createCharacterList_1 = createCharacterList$1;
var UnicodeUtils$1 = UnicodeUtils_1;
var substr$1 = UnicodeUtils$1.substr;
function decodeEntityRanges$1(text, ranges) {
  var entities = Array(text.length).fill(null);
  if (ranges) {
    ranges.forEach(function(range) {
      var start = substr$1(text, 0, range.offset).length;
      var end = start + substr$1(text, range.offset, range.length).length;
      for (var ii2 = start; ii2 < end; ii2++) {
        entities[ii2] = range.key;
      }
    });
  }
  return entities;
}
var decodeEntityRanges_1 = decodeEntityRanges$1;
var UnicodeUtils = UnicodeUtils_1;
var _require = immutable.exports, OrderedSet = _require.OrderedSet;
var substr = UnicodeUtils.substr;
var EMPTY_SET = OrderedSet();
function decodeInlineStyleRanges$1(text, ranges) {
  var styles = Array(text.length).fill(EMPTY_SET);
  if (ranges) {
    ranges.forEach(function(range) {
      var cursor = substr(text, 0, range.offset).length;
      var end = cursor + substr(text, range.offset, range.length).length;
      while (cursor < end) {
        styles[cursor] = styles[cursor].add(range.style);
        cursor++;
      }
    });
  }
  return styles;
}
var decodeInlineStyleRanges_1 = decodeInlineStyleRanges$1;
function _objectSpread(target) {
  for (var i = 1; i < arguments.length; i++) {
    var source = arguments[i] != null ? arguments[i] : {};
    var ownKeys = Object.keys(source);
    if (typeof Object.getOwnPropertySymbols === "function") {
      ownKeys = ownKeys.concat(Object.getOwnPropertySymbols(source).filter(function(sym) {
        return Object.getOwnPropertyDescriptor(source, sym).enumerable;
      }));
    }
    ownKeys.forEach(function(key) {
      _defineProperty(target, key, source[key]);
    });
  }
  return target;
}
function _defineProperty(obj, key, value) {
  if (key in obj) {
    Object.defineProperty(obj, key, { value, enumerable: true, configurable: true, writable: true });
  } else {
    obj[key] = value;
  }
  return obj;
}
var ContentBlock$1 = ContentBlock_1;
var ContentBlockNode = ContentBlockNode_1;
var ContentState$1 = ContentState_1;
var DraftEntity$1 = DraftEntity_1;
var DraftTreeAdapter = DraftTreeAdapter_1;
var SelectionState$1 = SelectionState_1;
var createCharacterList = createCharacterList_1;
var decodeEntityRanges = decodeEntityRanges_1;
var decodeInlineStyleRanges = decodeInlineStyleRanges_1;
var generateRandomKey$1 = generateRandomKey_1;
var gkx = gkx$8;
var Immutable = immutable.exports;
var invariant = invariant_1;
var experimentalTreeDataSupport = gkx("draft_tree_data_support");
var List = Immutable.List, Map$1 = Immutable.Map, OrderedMap = Immutable.OrderedMap;
var decodeBlockNodeConfig = function decodeBlockNodeConfig2(block, entityMap) {
  var key = block.key, type = block.type, data = block.data, text = block.text, depth = block.depth;
  var blockNodeConfig = {
    text,
    depth: depth || 0,
    type: type || "unstyled",
    key: key || generateRandomKey$1(),
    data: Map$1(data),
    characterList: decodeCharacterList(block, entityMap)
  };
  return blockNodeConfig;
};
var decodeCharacterList = function decodeCharacterList2(block, entityMap) {
  var text = block.text, rawEntityRanges = block.entityRanges, rawInlineStyleRanges = block.inlineStyleRanges;
  var entityRanges = rawEntityRanges || [];
  var inlineStyleRanges = rawInlineStyleRanges || [];
  return createCharacterList(decodeInlineStyleRanges(text, inlineStyleRanges), decodeEntityRanges(text, entityRanges.filter(function(range) {
    return entityMap.hasOwnProperty(range.key);
  }).map(function(range) {
    return _objectSpread({}, range, {
      key: entityMap[range.key]
    });
  })));
};
var addKeyIfMissing = function addKeyIfMissing2(block) {
  return _objectSpread({}, block, {
    key: block.key || generateRandomKey$1()
  });
};
var updateNodeStack = function updateNodeStack2(stack, nodes, parentRef) {
  var nodesWithParentRef = nodes.map(function(block) {
    return _objectSpread({}, block, {
      parentRef
    });
  });
  return stack.concat(nodesWithParentRef.reverse());
};
var decodeContentBlockNodes = function decodeContentBlockNodes2(blocks, entityMap) {
  return blocks.map(addKeyIfMissing).reduce(function(blockMap, block, index) {
    !Array.isArray(block.children) ? invariant(false) : void 0;
    var children = block.children.map(addKeyIfMissing);
    var contentBlockNode = new ContentBlockNode(_objectSpread({}, decodeBlockNodeConfig(block, entityMap), {
      prevSibling: index === 0 ? null : blocks[index - 1].key,
      nextSibling: index === blocks.length - 1 ? null : blocks[index + 1].key,
      children: List(children.map(function(child) {
        return child.key;
      }))
    }));
    blockMap = blockMap.set(contentBlockNode.getKey(), contentBlockNode);
    var stack = updateNodeStack([], children, contentBlockNode);
    while (stack.length > 0) {
      var node = stack.pop();
      var parentRef = node.parentRef;
      var siblings = parentRef.getChildKeys();
      var _index = siblings.indexOf(node.key);
      var isValidBlock = Array.isArray(node.children);
      if (!isValidBlock) {
        !isValidBlock ? invariant(false) : void 0;
        break;
      }
      var _children = node.children.map(addKeyIfMissing);
      var _contentBlockNode = new ContentBlockNode(_objectSpread({}, decodeBlockNodeConfig(node, entityMap), {
        parent: parentRef.getKey(),
        children: List(_children.map(function(child) {
          return child.key;
        })),
        prevSibling: _index === 0 ? null : siblings.get(_index - 1),
        nextSibling: _index === siblings.size - 1 ? null : siblings.get(_index + 1)
      }));
      blockMap = blockMap.set(_contentBlockNode.getKey(), _contentBlockNode);
      stack = updateNodeStack(stack, _children, _contentBlockNode);
    }
    return blockMap;
  }, OrderedMap());
};
var decodeContentBlocks = function decodeContentBlocks2(blocks, entityMap) {
  return OrderedMap(blocks.map(function(block) {
    var contentBlock = new ContentBlock$1(decodeBlockNodeConfig(block, entityMap));
    return [contentBlock.getKey(), contentBlock];
  }));
};
var decodeRawBlocks = function decodeRawBlocks2(rawState, entityMap) {
  var isTreeRawBlock = rawState.blocks.find(function(block) {
    return Array.isArray(block.children) && block.children.length > 0;
  });
  var rawBlocks = experimentalTreeDataSupport && !isTreeRawBlock ? DraftTreeAdapter.fromRawStateToRawTreeState(rawState).blocks : rawState.blocks;
  if (!experimentalTreeDataSupport) {
    return decodeContentBlocks(isTreeRawBlock ? DraftTreeAdapter.fromRawTreeStateToRawState(rawState).blocks : rawBlocks, entityMap);
  }
  var blockMap = decodeContentBlockNodes(rawBlocks, entityMap);
  return blockMap;
};
var decodeRawEntityMap = function decodeRawEntityMap2(rawState) {
  var rawEntityMap = rawState.entityMap;
  var entityMap = {};
  Object.keys(rawEntityMap).forEach(function(rawEntityKey) {
    var _rawEntityMap$rawEnti = rawEntityMap[rawEntityKey], type = _rawEntityMap$rawEnti.type, mutability = _rawEntityMap$rawEnti.mutability, data = _rawEntityMap$rawEnti.data;
    entityMap[rawEntityKey] = DraftEntity$1.__create(type, mutability, data || {});
  });
  return entityMap;
};
var convertFromRawToDraftState$1 = function convertFromRawToDraftState(rawState) {
  !Array.isArray(rawState.blocks) ? invariant(false) : void 0;
  var entityMap = decodeRawEntityMap(rawState);
  var blockMap = decodeRawBlocks(rawState, entityMap);
  var selectionState = blockMap.isEmpty() ? new SelectionState$1() : SelectionState$1.createEmpty(blockMap.first().getKey());
  return new ContentState$1({
    blockMap,
    entityMap,
    selectionBefore: selectionState,
    selectionAfter: selectionState
  });
};
var convertFromRawToDraftState_1 = convertFromRawToDraftState$1;
var getRangeClientRects = getRangeClientRects_1;
function getRangeBoundingClientRect$1(range) {
  var rects = getRangeClientRects(range);
  var top = 0;
  var right = 0;
  var bottom = 0;
  var left = 0;
  if (rects.length) {
    if (rects.length > 1 && rects[0].width === 0) {
      var _rects$ = rects[1];
      top = _rects$.top;
      right = _rects$.right;
      bottom = _rects$.bottom;
      left = _rects$.left;
    } else {
      var _rects$2 = rects[0];
      top = _rects$2.top;
      right = _rects$2.right;
      bottom = _rects$2.bottom;
      left = _rects$2.left;
    }
    for (var ii2 = 1; ii2 < rects.length; ii2++) {
      var rect = rects[ii2];
      if (rect.height !== 0 && rect.width !== 0) {
        top = Math.min(top, rect.top);
        right = Math.max(right, rect.right);
        bottom = Math.max(bottom, rect.bottom);
        left = Math.min(left, rect.left);
      }
    }
  }
  return {
    top,
    right,
    bottom,
    left,
    width: right - left,
    height: bottom - top
  };
}
var getRangeBoundingClientRect_1 = getRangeBoundingClientRect$1;
var getRangeBoundingClientRect = getRangeBoundingClientRect_1;
function getVisibleSelectionRect$1(global2) {
  var selection = global2.getSelection();
  if (!selection.rangeCount) {
    return null;
  }
  var range = selection.getRangeAt(0);
  var boundingRect = getRangeBoundingClientRect(range);
  var top = boundingRect.top, right = boundingRect.right, bottom = boundingRect.bottom, left = boundingRect.left;
  if (top === 0 && right === 0 && bottom === 0 && left === 0) {
    return null;
  }
  return boundingRect;
}
var getVisibleSelectionRect_1 = getVisibleSelectionRect$1;
var AtomicBlockUtils = AtomicBlockUtils_1;
var BlockMapBuilder = BlockMapBuilder_1;
var CharacterMetadata = CharacterMetadata_1;
var CompositeDraftDecorator = CompositeDraftDecorator_1;
var ContentBlock = ContentBlock_1;
var ContentState = ContentState_1;
var DefaultDraftBlockRenderMap = DefaultDraftBlockRenderMap_1;
var DefaultDraftInlineStyle = DefaultDraftInlineStyle$2;
var DraftEditor = DraftEditor_react;
var DraftEditorBlock = DraftEditorBlock_react;
var DraftEntity = DraftEntity_1;
var DraftModifier = DraftModifier_1;
var DraftEntityInstance = DraftEntityInstance_1;
var EditorState = EditorState_1;
var KeyBindingUtil = KeyBindingUtil_1;
var RawDraftContentState = require$$15;
var RichTextEditorUtil = RichTextEditorUtil_1;
var SelectionState = SelectionState_1;
var convertFromDraftStateToRaw2 = convertFromDraftStateToRaw_1;
var convertFromRawToDraftState2 = convertFromRawToDraftState_1;
var generateRandomKey = generateRandomKey_1;
var getDefaultKeyBinding = getDefaultKeyBinding_1;
var getVisibleSelectionRect = getVisibleSelectionRect_1;
var convertFromHTML = convertFromHTMLToContentBlocks_1;
var DraftPublic = {
  Editor: DraftEditor,
  EditorBlock: DraftEditorBlock,
  EditorState,
  CompositeDecorator: CompositeDraftDecorator,
  Entity: DraftEntity,
  EntityInstance: DraftEntityInstance,
  BlockMapBuilder,
  CharacterMetadata,
  ContentBlock,
  ContentState,
  RawDraftContentState,
  SelectionState,
  AtomicBlockUtils,
  KeyBindingUtil,
  Modifier: DraftModifier,
  RichUtils: RichTextEditorUtil,
  DefaultDraftBlockRenderMap,
  DefaultDraftInlineStyle,
  convertFromHTML,
  convertFromRaw: convertFromRawToDraftState2,
  convertToRaw: convertFromDraftStateToRaw2,
  genKey: generateRandomKey,
  getDefaultKeyBinding,
  getVisibleSelectionRect
};
var Draft$1 = DraftPublic;
var Draft = "";
const StyledHuePointer = () => /* @__PURE__ */ React.createElement("div", null);
const ColorPicker = (_a) => {
  var _b = _a, {
    rgb,
    hex,
    onChangeComplete,
    onInputChange
  } = _b, props = __objRest(_b, [
    "rgb",
    "hex",
    "onChangeComplete",
    "onInputChange"
  ]);
  React$c.createContext();
  return /* @__PURE__ */ React.createElement("div", null, /* @__PURE__ */ React.createElement("div", null, /* @__PURE__ */ React.createElement(Saturation, __spreadValues({
    onInputChange,
    onChangeComplete
  }, props))), /* @__PURE__ */ React.createElement("div", null, /* @__PURE__ */ React.createElement("div", null, /* @__PURE__ */ React.createElement(Hue, __spreadProps(__spreadValues({}, props), {
    pointer: StyledHuePointer
  })))));
};
const ColorPickerComponent = ColorWrap(ColorPicker);
const svgSource = `<svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" preserveAspectRatio="xMidYMid" width="48" height="48" viewBox="0 0 48 48">
  <g id="artboard-1">
    <path d="m-115.8,119.6c-12.8-22-3.2,33.6-3.2,33.6,8.8,34.4,145.6-17.6,145.6-17.6s168.8-30.4,180-34.4,96.8,1.6,96.8,1.6l-4.8-22.4c-64.8-46.4-75.2-16.8-88.8-20.8s-11.2,5.6-14.4,6.4-42.4-24-48.8-23.2-31.62-23.007-16.8,8.8c22.23,47.707-60.759,37.627-75.2,28-16.8-11.2,7.2,18.4,7.2,18.4,18.4,20-16,3.2-16,3.2-34.4-12.8-58.4,12.8-61.6,13.6s-8,4-8.8-2.4-6.865-21.256-40,3.2c-33.6,24.8-44,8.8-44,8.8l-7.2-4.8z" class="cls-1"/>
  </g>
</svg>`;
const UpperCaseInnerComponent = () => /* @__PURE__ */ React.createElement("div", null);
const UpperCaseComponent = () => /* @__PURE__ */ React.createElement(UpperCaseInnerComponent, null);
const DraftComponent = () => /* @__PURE__ */ React.createElement("div", null, /* @__PURE__ */ React.createElement(Draft$1.Editor, null), /* @__PURE__ */ React.createElement(Draft$1.EditorState, null));
var LibraryComponent = () => /* @__PURE__ */ React.createElement(_default$3, {
  src: svgSource
});
export { ColorPickerComponent, DraftComponent, UpperCaseComponent, LibraryComponent as default };
//# sourceMappingURL=library.es.js.map
