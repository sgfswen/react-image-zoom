(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory(require("react"), require("js-image-zoom"));
	else if(typeof define === 'function' && define.amd)
		define("ReactImageZoom", ["react", "js-image-zoom"], factory);
	else if(typeof exports === 'object')
		exports["ReactImageZoom"] = factory(require("react"), require("js-image-zoom"));
	else
		root["ReactImageZoom"] = factory(root["React"], root["ImageZoom"]);
})(this, function(__WEBPACK_EXTERNAL_MODULE_1__, __WEBPACK_EXTERNAL_MODULE_2__) {
return /******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};

/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {

/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId])
/******/ 			return installedModules[moduleId].exports;

/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			exports: {},
/******/ 			id: moduleId,
/******/ 			loaded: false
/******/ 		};

/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);

/******/ 		// Flag the module as loaded
/******/ 		module.loaded = true;

/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}


/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;

/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;

/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";

/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	    value: true
	});

	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

	var _react = __webpack_require__(1);

	var _react2 = _interopRequireDefault(_react);

	var _jsImageZoom = __webpack_require__(2);

	var _jsImageZoom2 = _interopRequireDefault(_jsImageZoom);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

	var ReactImageZoom = function (_React$Component) {
	    _inherits(ReactImageZoom, _React$Component);

	    function ReactImageZoom(props) {
	        _classCallCheck(this, ReactImageZoom);

	        var _this = _possibleConstructorReturn(this, (ReactImageZoom.__proto__ || Object.getPrototypeOf(ReactImageZoom)).call(this, props));

	        _this.container = undefined;
	        _this.getRef = _this.getRef.bind(_this);
	        return _this;
	    }

	    _createClass(ReactImageZoom, [{
	        key: 'componentDidMount',
	        value: function componentDidMount() {
	            this.imageZoom = new _jsImageZoom2.default(this.container, this.props);
	        }
	    }, {
	        key: 'componentWillUnmount',
	        value: function componentWillUnmount() {
	            this.imageZoom.kill();
	            this.imageZoom = void 0;
	        }
	    }, {
	        key: 'componentWillReceiveProps',
	        value: function componentWillReceiveProps(nextProps) {
	            if (this.props.img !== nextProps.img) {
	                this.kill();
	                this.imageZoom = new _jsImageZoom2.default(this.container, nextProps);
	            }
	        }
	    }, {
	        key: 'setup',
	        value: function setup() {
	            this.imageZoom.setup();
	        }
	    }, {
	        key: 'kill',
	        value: function kill() {
	            this.imageZoom.kill();
	        }
	    }, {
	        key: 'getRef',
	        value: function getRef(ref) {
	            this.container = ref;
	        }
	    }, {
	        key: 'render',
	        value: function render() {
	            return _react2.default.createElement('div', { ref: this.getRef });
	        }
	    }]);

	    return ReactImageZoom;
	}(_react2.default.Component);

	ReactImageZoom.propTypes = {
	    img: _react.PropTypes.string.isRequired,
	    height: _react.PropTypes.number.isRequired,
	    width: _react.PropTypes.number.isRequired,
	    zoomWidth: _react.PropTypes.number,
	    scale: _react.PropTypes.number,
	    offset: _react.PropTypes.object,
	    zoomStyle: _react.PropTypes.string
	};
	exports.default = ReactImageZoom;
	module.exports = exports['default'];

/***/ },
/* 1 */
/***/ function(module, exports) {

	module.exports = __WEBPACK_EXTERNAL_MODULE_1__;

/***/ },
/* 2 */
/***/ function(module, exports) {

	module.exports = __WEBPACK_EXTERNAL_MODULE_2__;

/***/ }
/******/ ])
});
;