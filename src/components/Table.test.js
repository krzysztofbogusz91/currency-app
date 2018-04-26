import React from 'react';
import {shallow, mount, render} from 'enzyme';
import { config } from '../enzyme_set_up';
import Table from './Table';
import { mockData } from 'axios';

describe('Table', () => {
    const props = {list:[{currency: "dolar amerykański", code: "USD", bid: 3.4034, ask: 3.4722},{currency: "dolar australijski", code: "AUD", bid: 2.5905, ask: 2.6429}]}
    const tab = mount(<Table {...props} />);

    it('renders correctly', ()=>{
        expect(tab).toMatchSnapshot();
      })

    it('should have `state` key searchValue ', () => {
        expect(tab.state().searchValue).toEqual('');
    });  
    it('should have list props', () => {
        expect(tab.props().list.length).toEqual(2)
    });

    it('should have table with class .currency-tab', () => {
        expect(tab.find('.currency-tab').exists()).toBe(true)
    });
    it('tbody should have 2 children elements', () => {
        expect(tab.find('tbody').children().length).toEqual(2)
    });

    describe('there is an input field that filter trough list', () => {
        it('should have an input with class `input-filter`', () => {
            expect(tab.find('.input-filter').exists()).toBe(true);
        });
        it('should have label element with class .search-text with text `szukaj po kodzie waluty:`', () => {
            expect(tab.find('.search-text').text()).toEqual('szukaj po kodzie waluty:');
        });
        describe('update state and list when typing in input field also check if it is case insensitive', () => {
            
            beforeEach(() => {
                tab.find('.input-filter').simulate('change', {
                    target: { value: "Us"}
                })
            });
            afterEach(() => {
                tab.setState({
                    searchValue: ""
                })
            });
            it('should upadate `state` to be equal input value', () => {
                expect(tab.state().searchValue).toEqual('Us');
            });
            
    
            it('change list length to 1', () => {
                expect(tab.find('tbody').children().length).toEqual(1);
            });
            
        });
    });
});
