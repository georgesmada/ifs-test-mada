import React, { Component, PropTypes } from 'react';
import classnames from 'classnames';

import styles from './index.css';

export default class TxtBar extends Component {

    static propTypes = {
        enterText: PropTypes.func,
        rootStyle: PropTypes.string
    }

    state = {
        val : ''
    }

    handleChange = (e) => {
        this.setState({val:e.target.value});
        this.props.enterText(e.target.value);
    }

    render() {
        const { rootStyle } = this.props;

        return (
            <div className={ classnames(styles.txtBar, rootStyle) }>
                <input type='text'
                    value={this.state.val}
                    onChange = {this.handleChange}/>
            </div>
        )
    }
}
