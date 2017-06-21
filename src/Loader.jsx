/* global $ */
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
        text: PropTypes.string,
        classes: PropTypes.string,
        animationDuration: PropTypes.number,
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
        text: 'Loading...',
        classes: '',
        animationDuration: 1.5,
        animation: true
    }

    /**
     * Creates an instance of Loader.
     * @param {any} props
     *
     * @memberOf Loader
     */
    constructor (props) {
        super(props);

        this.animationDuration = this.props.animationDuration;
    }

    /**
     * Animate the loader
     *
     * @memberOf Loader
     */
    animate = loader => {
        $(loader).fadeToggle(this.animationDuration, () => this.animate(loader))
    }

    /**
     * Render the component
     *
     * @returns {Object}
     *
     * @memberOf Loader
     */
    render () {
        let className = this.props.classes

        if (this.props.animation) {
            className += ' animate-flicker'
        }

        return (
            <span className={className} style={{ animationDuration: `${this.props.animationDuration}s` }}>{this.props.text}</span>
        )
    }
}