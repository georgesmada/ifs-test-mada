import React, { Component } from 'react'
import request from 'superagent'

// import components
import SelectFilter from 'components/SelectFilter'

import styles from './index.css'


export default class Home extends Component {

    state = {
        data: null
    }

    componentDidMount() {

        // do your xhr request here (http://localhost:5000/category)
        request
            .get('http://localhost:5000/category')
            .end((err, res) => {
                if (res) {
                    console.log('res', res.body) // eslint-disable-line
                    this.setState({data : res.body});
                }
            });
    }

    render() {

        return (
            <div className={ styles.home }>
                <h1>ifs test react</h1>
                <SelectFilter
                    filters={this.state.data}
                    onChange={(currentFilter) => {
                        console.log('currentFilter', currentFilter) // eslint-disable-line
                    }}
                    rootStyle={ styles.filter }
                />
            </div>
        )
    }
}
