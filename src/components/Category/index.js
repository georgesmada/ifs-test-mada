import React, { Component, PropTypes} from 'react';
import classnames from 'classnames';

import styles from './index.css';

import CategoryElem from '../CategoryElem';

export default class Category extends Component {
    static propTypes = {
        labels: PropTypes.shape({
            name: PropTypes.string,
            children: PropTypes.array
        }),
        str: PropTypes.string,
        txtSelect: PropTypes.func,
        rootStyle: PropTypes.string
    }

    filtering = (str, wordlist) => {
        const expr = new RegExp('^'+str, 'i');
        let filteredlist = wordlist.filter(w => expr.test(w.name));
        return filteredlist;
    }

    handleClick = (txt) => () => this.props.txtSelect(txt);

    renderName = (name, rootStyle) => {
        return <div className={ classnames(styles.name, rootStyle) }>
            {name}
        </div>
    }

    renderChildren = (filtered) => {
        return filtered.map((c) => <CategoryElem key={'elem-'+c.name} handleClick={this.handleClick(c.name)} label={c.name}/>)
    }

    render() {
        const { name, children } = this.props.labels;
        const { str, rootStyle } = this.props;

        const filtered = this.filtering(str, children);

        return (
            <div className={ classnames(styles.category, rootStyle) }>
                {filtered.length !== 0 ? this.renderName(name, rootStyle) : null}
                {this.renderChildren(filtered)}
            </div>
        )
    }
}
