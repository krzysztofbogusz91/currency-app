import React, { Component } from 'react';
import data from '../api/nbp_tab';
import data_list from '../api/nbp_list'
import Table from './Table';
import { Header } from '../containers/header';
import Form from '../components/Form'

class CurrencyApp extends Component {
    constructor() {
       super()
       this.state = {
           list: [],
           dayList: []
       }
    }

    componentDidMount() {
        data()
            .then((result)=>{
                const list = result;
                this.setState ({ list }) 
            })
            .catch( err => {
                this.setState ({ list: [] })
            })
        // where to put reject in async/await
        // (async () => {
        //     const list = await data();
        //     this.setState ({ list })
        //     console.log(this.state.list)
        // })()
    }

    getDataFromForm = (code, count) =>{
        data_list(code,count)
            .then((result) =>{
                const dayList = result;
                this.setState ({ dayList })
                console.log(result)
                return result
            }).catch( err => {
                this.setState ({ dayList: [] })
            }) 
    }
    
    render() {
        return (
            <div>
                <Header />
                <div>
                    <Table list={this.state.list}/>
                    <Form
                        list={this.state.dayList}
                        options={this.state.list.map(a=>{
                           return a.code
                        })}
                        getDataFromForm={this.getDataFromForm} />
                </div>
                <footer>
                    <div className="text-right">timmer: 10:45:22</div>
                </footer>  
            </div>
        );
    }
}

export default CurrencyApp;
