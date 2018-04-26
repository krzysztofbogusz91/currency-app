import React from 'react';
import {shallow, mount, render} from 'enzyme';
import { config } from '../enzyme_set_up';
import Form from './Form';
import { mockDataList } from 'axios';

describe('Form', () => {
    //overide options pased in real component
    const options =  ["USD","EUR"];
    const getDataFromForm = jest.fn()
    const props = {getDataFromForm, options}
    

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
        beforeEach(() => {
            form.find('.fetch-list').simulate('click');
        });

        it('should get list of data passed in props', () => {
            
        });
    })

});