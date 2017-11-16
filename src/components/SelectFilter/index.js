import React, { Component, PropTypes } from 'react'
import classNames from 'classnames'

import styles from './index.css'

import TxtBar from '../TxtBar';
import Category from '../Category';

export default class SelectFilter extends Component {

    static propTypes = {
        filters: PropTypes.arrayOf(PropTypes.shape({
            name: PropTypes.string,
            children: PropTypes.array,
        })).isRequired,
        onChange: PropTypes.func,
        rootStyle: PropTypes.string
    }

    state = {
        txt : '',
        selection : '',
    }

    enterText = (txt) => {
        this.setState({txt : txt});
    }

    txtSelect = (txt) => {
        this.setState({selection : txt});
    }

    categories = (filters) => {
        if(!filters) return null;
        return filters.map((c,i) => <Category key={'cat-'+i} labels={c} txtSelect={this.txtSelect} str={this.state.txt}/>);
    }

    render() {
        const {
            rootStyle,
            filters
        } = this.props;

        return (
            <div className={ classNames(styles.selectfilter, rootStyle) }>
                <div className={classNames(styles.txtSelection)}>
                    {this.state.selection ? <span>{this.state.selection}</span> : null}
                </div>
                <TxtBar enterText={this.enterText}/>
                <div className={ classNames(styles.container, rootStyle) }>
                    {this.categories(filters)}
                </div>
            </div>
        )
    }
}
