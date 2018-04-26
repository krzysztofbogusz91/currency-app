import React, { Component } from 'react';
import PropTypes from 'prop-types';

const propTypes = {
    list: PropTypes.array
};

class Table extends Component {
    constructor() {
        super();
        this.state ={
            searchValue: ''
        }
    }
    
    searchCurrency = (e) => {
        this.setState({searchValue: e.target.value})
    }

    getList = () =>{
        const list = this.props.list;
        //filter list on input change, and change all to same case
        const listFilterd = list.filter(a => {
              const check = a.code.toLowerCase();
              const match = this.state.searchValue.toLowerCase();
              return check.indexOf(match) >= 0; 
        })
        //gets end view result
        const listEnd = listFilterd.map((a, i) => {
            return (
                <tr key={i}>
                    <td>{a.currency}</td>
                    <td>{a.code}</td>
                    <td>{a.bid}</td>
                    <td>{a.ask}</td>
                </tr>
            )
        })
        return listEnd;
    }

    render() {
        return (
            <div className="mt-4">
                <form 
                    className="form-group form-inline d-flex justify-content-between">
                    <label 
                        htmlFor="search-currency" 
                        className='search-text'>
                        szukaj po kodzie waluty:
                    </label>
                    <input 
                        value={this.state.value}
                        onChange={this.searchCurrency} 
                        className="form-control input-filter" 
                        id="search-currency" 
                        type="text"/>
                </form>
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
                        {this.getList()}
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
