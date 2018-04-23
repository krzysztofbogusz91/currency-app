import React from 'react';
import CurrencyApp from './CurrencyApp';
import {shallow} from 'enzyme';
import { config } from '../enzyme_set_up';

describe('CurrencyApp',()=>{
  const currency = shallow(<CurrencyApp />);

  it('renders correctly', ()=>{
    expect(currency).toMatchSnapshot();
  })

})
