import { HeroContainer, SliderContainer, SliderItem, SliderCaption, HeroImage } from './styles';

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
