import React, { Component } from 'react'
import PropTypes from 'prop-types'
import './index.css'

/**
 * @export
 * @class Loader
 * @extends {Component}
 */
export default class Loader extends Component {
    /**
     * Props types checking
     *
     * @static
     *
     * @memberOf Loader
     */
    static propTypes = {
        children: PropTypes.any,
        className: PropTypes.string,
        animationDuration: PropTypes.string,
        animation: PropTypes.bool
    }

    /**
     * Default props values
     *
     * @static
     *
     * @memberOf Loader
     */
    static defaultProps = {
        children: 'loading...',
        className: '',
        animationDuration: '1.5s',
        animation: true
    }

    /**
     * Render the component
     *
     * @returns {any}
     *
     * @memberOf Loader
     */
    render () {
        let className = this.props.className

        if (this.props.animation) {
            className += ' animate-flicker'
        }

        return (
            <span className={className} style={{ animationDuration: this.props.animationDuration }}>{ this.props.children }</span>
        )
    }
}