import React, { Component, PropTypes} from 'react';
import classnames from 'classnames';

import styles from './index.css';

export default class CategoryElem extends Component {
    static propTypes = {
        label: PropTypes.string,
        handleClick: PropTypes.func,
        rootStyle: PropTypes.string
    }

    render() {
        const { rootStyle } = this.props;

        return (
            <div className={ classnames(styles.categoryElem, rootStyle) }
                 onClick={this.props.handleClick}>

                {this.props.label}

            </div>
        )
    }
}
