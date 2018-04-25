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
    it('should have list props', () => {
        expect(tab.props().list.length).toEqual(2)
    });

    it('should have table with class .currency-tab', () => {
        expect(tab.find('.currency-tab').exists()).toBe(true)
    });
    it('tbody should have 2 children elements', () => {
        expect(tab.find('tbody').children().length).toEqual(2)
    });
});
