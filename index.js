'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _propTypes = require('prop-types');

var _propTypes2 = _interopRequireDefault(_propTypes);

require('./index.css');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; } /* global $ */


/**
 * @export
 * @class Loader
 * @extends {Component}
 */
var Loader = function (_Component) {
    _inherits(Loader, _Component);

    /**
     * Creates an instance of Loader.
     * @param {any} props
     *
     * @memberOf Loader
     */

    /**
     * Props types checking
     *
     * @static
     *
     * @memberOf Loader
     */
    function Loader(props) {
        _classCallCheck(this, Loader);

        var _this = _possibleConstructorReturn(this, (Loader.__proto__ || Object.getPrototypeOf(Loader)).call(this, props));

        _this.animate = function (loader) {
            $(loader).fadeToggle(_this.animationDuration, function () {
                return _this.animate(loader);
            });
        };

        _this.animationDuration = _this.props.animationDuration;
        return _this;
    }

    /**
     * Animate the loader
     *
     * @memberOf Loader
     */


    /**
     * Default props values
     *
     * @static
     *
     * @memberOf Loader
     */


    _createClass(Loader, [{
        key: 'render',


        /**
         * Render the component
         *
         * @returns {Object}
         *
         * @memberOf Loader
         */
        value: function render() {
            var className = this.props.classes;

            if (this.props.animation) {
                className += ' animate-flicker';
            }

            return _react2.default.createElement(
                'span',
                { className: className, style: { animationDuration: this.props.animationDuration + 's' } },
                this.props.text
            );
        }
    }]);

    return Loader;
}(_react.Component);

Loader.propTypes = {
    text: _propTypes2.default.string,
    classes: _propTypes2.default.string,
    animationDuration: _propTypes2.default.number,
    animation: _propTypes2.default.bool };
Loader.defaultProps = {
    text: 'Loading...',
    classes: '',
    animationDuration: 1.5,
    animation: true };
exports.default = Loader;
