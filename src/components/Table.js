import React, { Component } from 'react';
import PropTypes from 'prop-types';

const propTypes = {
    list: PropTypes.array
};


class Table extends Component {
    render() {
        const list = this.props.list.map((a, i) => {
            return (
                <tr key={i}>
                    <td>{a.currency}</td>
                    <td>{a.code}</td>
                    <td>{a.bid}</td>
                    <td>{a.ask}</td>
                </tr>
            )
        })

        return (
            <div className="mt-4">
                <table className="table table-bordered table-striped currency-tab">
                    <thead>
                        <tr className="table-success">
                            <th scope="col">Waluta</th>
                            <th scope="col">Symbol</th>
                            <th scope="col">Sprzedaż</th>
                            <th scope="col">Kupno</th>
                        </tr>
                    </thead>
                    <tbody>
                        {list}
                    </tbody>
                </table>
            </div>
        );
    }
}


Table.propTypes = propTypes;
Table.defaultProps = {
    list: []
}

export default Table;
