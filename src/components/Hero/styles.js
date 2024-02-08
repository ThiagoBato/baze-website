import styled from 'styled-components';
import Slider from 'react-slick';

export const HeroContainer = styled.section`
  width: 100%;
`;

export const SliderContainer = styled(Slider)`
  max-width: 100%;

  & .slick-prev {
    left: 25px;
    z-index: 9;
  }
  & .slick-next {
    right: 25px;
    z-index: 9;
  }
`;
export const SliderItem = styled.div`
  position: relative;
`;
export const SliderCaption = styled.div`
  position: absolute;
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  z-index: 9;

  h3 {
    color: #fff;
    font-size: 2rem;
    font-weight: bold;
    text-transform: uppercase;

    @media (max-width: 840px) {
      font-size: 1.25rem;
    }
  }

  p {
    color: #fff;
    font-weight: 300;
  }
`;
export const HeroImage = styled.img`
  max-width: 100%;
  width: 100%;
`;
