import styled from 'styled-components';
import { CardProjectsItem } from '../components/CardProjectsItem';
import ComercialsProjectsImg from '../assets/img/img02.jpg';

const ComercialsContainer = styled.section`
  background-color: #0d0d0d;
  padding: 50px 20px;

  @media (max-width: 840px) {
    padding: 50px 20px;
  }
`;

const ComercialsTitle = styled.h2`
  color: #fef200;
  margin: 0 auto 50px;
  text-align: center;
`;

const ComercialsProjectsList = styled.ul`
  display: flex;
  list-style: none;
  flex-wrap: wrap;
  gap: 25px;
  justify-content: center;
  @media (max-width: 840px) {
    flex-direction: column;
  }
  & li {
    background-color: #fff;
  }
`;

const Comercials = () => {
  return (
    <ComercialsContainer>
      <ComercialsTitle>Comerciais</ComercialsTitle>

      <ComercialsProjectsList>
        <CardProjectsItem
          cardImg={ComercialsProjectsImg}
          title="Nome do Projeto"
          description="Aenean ultricies magna non sapien rhoncus, ac ullamcorper lorem convallis. Quisque at venenatis nisi, amet finibus mauris. Sed sodales ultricies eros, sit amet sodales sapien."
        />
        <CardProjectsItem
          cardImg={ComercialsProjectsImg}
          title="Nome do Projeto"
          description="Aenean ultricies magna non sapien rhoncus, ac ullamcorper lorem convallis. Quisque at venenatis nisi, amet finibus mauris. Sed sodales ultricies eros, sit amet sodales sapien."
        />
        <CardProjectsItem
          cardImg={ComercialsProjectsImg}
          title="Nome do Projeto"
          description="Aenean ultricies magna non sapien rhoncus, ac ullamcorper lorem convallis. Quisque at venenatis nisi, amet finibus mauris. Sed sodales ultricies eros, sit amet sodales sapien."
        />
        <CardProjectsItem
          cardImg={ComercialsProjectsImg}
          title="Nome do Projeto"
          description="Aenean ultricies magna non sapien rhoncus, ac ullamcorper lorem convallis. Quisque at venenatis nisi, amet finibus mauris. Sed sodales ultricies eros, sit amet sodales sapien."
        />
        <CardProjectsItem
          cardImg={ComercialsProjectsImg}
          title="Nome do Projeto"
          description="Aenean ultricies magna non sapien rhoncus, ac ullamcorper lorem convallis. Quisque at venenatis nisi, amet finibus mauris. Sed sodales ultricies eros, sit amet sodales sapien."
        />
        <CardProjectsItem
          cardImg={ComercialsProjectsImg}
          title="Nome do Projeto"
          description="Aenean ultricies magna non sapien rhoncus, ac ullamcorper lorem convallis. Quisque at venenatis nisi, amet finibus mauris. Sed sodales ultricies eros, sit amet sodales sapien."
        />
      </ComercialsProjectsList>
    </ComercialsContainer>
  );
};

export default Comercials;
