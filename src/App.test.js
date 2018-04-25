import React from 'react';
import App from './App';
import {shallow} from 'enzyme';
import { config } from './enzyme_set_up';

describe('App',()=>{
  const app = shallow(<App />);

  it('renders correctly', ()=>{
    expect(app).toMatchSnapshot();
  })

  it('should contain CurrencyApp component', () => {
    expect(app.find('CurrencyApp').exists()).toBe(true);
  });
})
