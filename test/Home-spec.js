import React from 'react';
import { expect } from 'chai';
import { mount } from 'enzyme';
import Home from './../components/Home.js';
describe('Home Component', () => {
  const wrapper = mount(<Home />);
  it('contains Header component', () => {
    expect(wrapper.find('Header')).to.have.length(1);
  });

  it('contains Navbar component', () => {
    expect(wrapper.find('Navbar')).to.have.length(1);
  });

  it('contains APIForm component', () => {
    expect(wrapper.find('APIForm')).to.have.length(1);
  });

});
