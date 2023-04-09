import React, { useState } from 'react';
import SliderData from './SliderData';
import "../styles/ImageSlider.css";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowAltCircleRight, faArrowAltCircleLeft } from '@fortawesome/free-solid-svg-icons';

const withImageSlider = (WrappedComponent) => {
  return () => {
    const [current, setCurrent] = useState(0);
    const length = SliderData.length;

    const nextSlide = () => {
      setCurrent(current === length - 1 ? 0 : current + 1);
    };

    const prevSlide = () => {
      setCurrent(current === 0 ? length - 1 : current - 1);
    };

    return (
      <WrappedComponent
        current={current}
        nextSlide={nextSlide}
        prevSlide={prevSlide}
      />
    );
  };
};

const ImageSlider = ({ current, nextSlide, prevSlide }) => {
  return (
    <section className="ImageSlider">
      <FontAwesomeIcon
        icon={faArrowAltCircleLeft}
        className='left-arrow'
        onClick={prevSlide}
      />
      <FontAwesomeIcon
        icon={faArrowAltCircleRight}
        className='right-arrow'
        onClick={nextSlide}
      />
      {SliderData.map((slide, index) => (
        <div
          className={index === current ? 'slide active' : 'slide'}
          key={index}
        >
          {index === current && (
            <img src={slide.url} alt={`Carousel Image ${index}`} className='SliderImage' />
          )}
        </div>
      ))}
    </section>
  );
};

const ImageSliderWithHOC = withImageSlider(ImageSlider);

export default ImageSliderWithHOC;
