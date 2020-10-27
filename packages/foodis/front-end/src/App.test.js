import App from './App';
import { mount } from 'enzyme';
import React from 'react';
import '../../../library/setupUnitTests'

describe('App', () => {
  let component;

   beforeEach(() => {
     component = mount(<App />);
   });

  it('renders', () => {
    expect(component).toMatchSnapshot();
  });
});

