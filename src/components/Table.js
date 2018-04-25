import React, { Component } from 'react';
import PropTypes from 'prop-types';

const propTypes = {
    list: PropTypes.array
};


class Table extends Component {
    render() {
        const list = this.props.list.map((a,i) => {
            return (
                <li key={i}>{a.currency}</li>
            )
        })
        
        return (
            <div>
                <ul>{list}</ul>
            </div>
        );
    }
}


Table.propTypes = propTypes;
Table.defaultProps = {
    list: []
}

export default Table;
