import styled from 'styled-components';
import Slider from 'react-slick';
import HeroImage01 from '../../assets/img/slide01.jpg';
import HeroImage02 from '../../assets/img/slide02.jpg';
import HeroImage03 from '../../assets/img/slide03.jpg';

//Slick Slider Settings
const settings = {
  autoplay: true,
  dots: false,
  infinite: true,
  pauseOnHover: true,
  speed: 1000,
  slidesToShow: 1,
  slidesToScroll: 1,
  initialSlide: 0,
};

const HeroContainer = styled.section`
  width: 100%;
`;

const SliderContainer = styled(Slider)`
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
const SliderItem = styled.div`
  position: relative;
`;
const SliderCaption = styled.div`
  position: absolute;
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  z-index: 9;

  & h3 {
    color: #fff;
    font-size: 2rem;
    font-weight: bold;
    text-transform: uppercase;

    @media (max-width: 840px) {
      font-size: 1.25rem;
    }
  }

  & p {
    color: #fff;
    font-weight: 300;
  }
`;
const HeroImage = styled.img`
  max-width: 100%;
  width: 100%;
`;

export const Hero = () => {
  return (
    <HeroContainer>
      <SliderContainer {...settings}>
        <SliderItem>
          <SliderCaption>
            <h3>Nome do Projeto</h3>
            <p>Bairro | Cidade | Estado</p>
          </SliderCaption>
          <HeroImage src={HeroImage01} alt="" />
        </SliderItem>
        <SliderItem>
          <SliderCaption>
            <h3>Nome do Projeto</h3>
            <p>Bairro | Cidade | Estado</p>
          </SliderCaption>
          <HeroImage src={HeroImage02} alt="" />
        </SliderItem>
        <SliderItem>
          <SliderCaption>
            <h3>Nome do Projeto</h3>
            <p>Bairro | Cidade | Estado</p>
          </SliderCaption>
          <HeroImage src={HeroImage03} alt="" />
        </SliderItem>
      </SliderContainer>
    </HeroContainer>
  );
};
