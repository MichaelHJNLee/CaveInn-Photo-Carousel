import React from 'react';
import styled from 'styled-components';
import CarouselItem from './CarouselItem.jsx';
// width: 386.53px;
const CarouselWrapper = styled.div`
  position: relative;
  top: 22%;
  left: 0;
  width: 350px;
  height: 84px;
  overflow: hidden;
`;

const CarouselSliderWrapper = styled.div`
  display: flex;
  position: absolute;
  transition: transform 300ms cubic-bezier(0.455, 0.03, 0.515, 0.955);
`;

const CarouselSlider = styled.div`
  position: relative;
  left: 18%;
  max-width: 226px;
  margin: 0 auto;
`;

const Carousel = (props) => (
  <div>
    <CarouselWrapper>
      <CarouselSlider>
        <CarouselSliderWrapper style={{ transform: `translateX(-${props.currentIndex * (100 / props.photos.length)}%)` }}>
          {props.photos.map((photo, index) => <CarouselItem key={index} index={index} photo={photo} current={props.currentIndex} clickPhoto={props.clickPhoto} />)}
        </CarouselSliderWrapper>
      </CarouselSlider>
    </CarouselWrapper>
  </div>
);

export default Carousel;