import React from 'react';
import CurrencyApp from './CurrencyApp';
import {shallow, mount} from 'enzyme';
import { config } from '../enzyme_set_up';
import dataMock from '../api/nbp_tab';

 
describe('CurrencyApp',()=>{
  let currency = shallow(<CurrencyApp />);

  it('renders correctly', ()=>{
    expect(currency).toMatchSnapshot();
  })

  it('should have `state` list property', () => {
    expect(currency.state('list')).toBeTruthy();
  });

  describe('when component is mounted', () => {
      currency = mount(<CurrencyApp />);
    
      it('`state` list should have length of two after calling api and containd code USD', () => {

        expect(currency.state('list').length).toEqual(2);
        expect(currency.state('list')[0]['code']).toEqual('USD')
      });
  });
})
