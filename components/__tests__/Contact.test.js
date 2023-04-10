import React from 'react';
import { shallow } from 'enzyme';
import Contact from '../Contact';

describe('Contact component', () => {
  let wrapper;

  beforeEach(() => {
    wrapper = shallow(<Contact />);
  });

  it('shows modal when form is submitted', () => {
    const form = wrapper.find('#contact-form');
    form.simulate('submit', { preventDefault: () => {} });
    expect(wrapper.find('.modal')).toHaveLength(1);
  });

  it('hides modal when close button is clicked', () => {
    const form = wrapper.find('#contact-form');
    form.simulate('submit', { preventDefault: () => {} });
    const closeButton = wrapper.find('.close');
    closeButton.simulate('click');
    expect(wrapper.find('.modal')).toHaveLength(0);
  });
});
