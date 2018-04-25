import React from 'react';
import CurrencyApp from './CurrencyApp';
import {shallow} from 'enzyme';
import { config } from '../enzyme_set_up';
import mockData from 'axios';

//why mount brakes it all? 
describe('CurrencyApp',()=>{
  let currency = shallow(<CurrencyApp />);
  describe('renders correctly and contain children components', () => {
      it('renders correctly', ()=>{
        expect(currency).toMatchSnapshot();
      })
      it('should contain `Table` component', () => {
        expect(currency.find('Table').exists()).toBe(true);
      });
  });
  
  describe('component `state` contain list and data after mock api call', () => {

      it('should have `state` list property', () => {
        expect(currency.state('list')).toBeTruthy();
      });
     
      it('`state` list should have length of two after calling api and containd code USD', () => {
        expect(currency.state('list').length).toEqual(2);
        expect(currency.state('list')[0]['code']).toEqual('USD')
      });

      it('`state` should have empty list on err', () => {
        //change return form mock call only once
        mockData.get.mockImplementationOnce(()=> Promise.reject({
          data: "error"
        })) 
        //renders again with new state
        let currency = shallow(<CurrencyApp />);
        expect(currency.state('list')).toEqual([])
        
      });
  });
})
