import React from 'react';
import {shallow, mount, render} from 'enzyme';
import { config } from '../enzyme_set_up';
import Form from './Form';
import { mockDataList } from 'axios';

describe('Form', () => {
    //overide options pased in real component
    const options =  ["USD","EUR"];
    const list = [
        {
            "no": "074/C/NBP/2018",
            "effectiveDate": "2018-04-16",
            "bid": 3.3481,
            "ask": 3.4157
            }
    ]
    const getDataFromForm = jest.fn()
    const props = {getDataFromForm, options,list}
    

    const form = mount(<Form {...props} />)
    it('renders properly', ()=>{
        expect(form).toMatchSnapshot();
    })

    it('select has all values pass in list', ()=>{
        expect(form.find('.select-currencies').children().length).toEqual(3);
    })
    describe('imput works ok', ()=>{
        it('change `state` on input change', () => {
            form.find('.imput-num').simulate('change', {target: {value: "10"}})
            expect(form.state().range).toEqual('10')
        });
        it('if passing val < 1 change val to 1 ',()=>{
            form.find('.imput-num').simulate('change', {target: {value: "-10"}})
            expect(form.state().range).toEqual('1')
        })
    })
    
    describe('testing button and data flow in components',()=>{
        it('should return empty arr if passed wrogng arguments', () => {
            form.setState({range: "-1",select: ""})
            getDataFromForm.mockReturnValue([])
            console.log(form.props().getDataFromForm())
            //form.find('.fetch-list').simulate('click');
            //expect(form.props().list).toEqual([])
        });

        beforeEach(() => {
            form.find('.fetch-list').simulate('click');
        });

        it('should get list of data passed in props', () => {
            console.log(form.props().list)
            expect(form.props().list.length).toEqual(1);
        });
    })

});