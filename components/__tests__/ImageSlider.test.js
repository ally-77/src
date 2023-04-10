import React from 'react';
import { shallow } from 'enzyme';
import ImageSlider from './ImageSlider';

describe('ImageSlider component', () => {
  it('clicking arrow buttons changes current slide', () => {
    const wrapper = shallow(<ImageSlider />);
    const leftArrow = wrapper.find('[data-testid="left-arrow"]');
    const rightArrow = wrapper.find('[data-testid="right-arrow"]');
    const sliderImages = wrapper.find('[data-testid="slider-image"]');

    expect(sliderImages.at(0)).toHaveClassName('active');

    rightArrow.simulate('click');
    expect(sliderImages.at(1)).toHaveClassName('active');

    leftArrow.simulate('click');
    expect(sliderImages.at(0)).toHaveClassName('active');
  });
});
