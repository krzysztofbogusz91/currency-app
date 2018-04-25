import React from 'react';
import CurrencyApp from './CurrencyApp';
import {shallow} from 'enzyme';
import { config } from '../enzyme_set_up';
import mockData from '../__mocks__/mockData';
import axios from 'axios'; 

jest.mock('../request');

describe('CurrencyApp',()=>{
  const currency = shallow(<CurrencyApp />);

  it('renders correctly', ()=>{
    expect(currency).toMatchSnapshot();
  })

  describe('Test api call', () => {
    

  });
})
