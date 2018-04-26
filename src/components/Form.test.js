import React from 'react';
import {shallow, mount, render} from 'enzyme';
import { config } from '../enzyme_set_up';
import Form from './Form';
import { mockData } from 'axios';

describe('Form', () => {
    const form = shallow(<Form />)
    it('renders properly', ()=>{
        expect(form).toMatchSnapshots();
    })
});