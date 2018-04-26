import React, { Component } from 'react';
import PropTypes from 'prop-types';

const propTypes = {
    options: PropTypes.array,
    getDataFromForm: PropTypes.func
};


class Form extends Component {
    state = {
        range: '1',
        select: '',
    }

    getOptions = () =>{
        const opt = this.props.options.map((a,i) =>{
            return(
                <option key={i} value={a}>{a}</option>
            )
        })
        return opt    
    }

    onSelect = (e) =>{
        let val = e.target.value
        if(val.length > 3){
           val = ""; 
        }
        this.setState({select: val})
    }

    inputOnChange = (e) => {
        let val = parseInt(e.target.value, 10);
        if(val < 1){
            val = 1
        }
        this.setState({range: val.toString()})
    }

    buttonOnClick = (e) =>{
        e.preventDefault();
        const code = this.state.select;
        const range = this.state.range;
        return code.length < 3 ? null : this.props.getDataFromForm(code,range);
    }

    render() {
        return (
            <div className="mt-5">
                <form>
                    <div className="form-group">
                        <select 
                            onChange={this.onSelect}
                            className="custom-select select-currencies">
                            <option defaultValue={true}>Wybierz walutę</option>
                            {this.getOptions()}
                        </select>
                    </div>
                    <div className="form-group form-inline d-flex justify-content-between">    
                        <label
                            className="form-check-label mr-3"
                            htmlFor="range">
                            Wybierz zakres:
                        </label>
                        <input
                            id="range"
                            value={this.state.range}
                            onChange={this.inputOnChange}
                            className="form-control form-control-range mr-3 imput-num" type="number"/>
                        <button
                            onClick={this.buttonOnClick} 
                            type="submit"
                            className="btn btn-info fetch-list">
                            Sprawdź
                        </button>    
                    </div>

                </form>
                
            </div>
        );
    }
}


Form.propTypes = propTypes;
Form.defaultProps = {
    options: []
}

export default Form;
