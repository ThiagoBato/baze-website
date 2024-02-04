import styled from 'styled-components';
import { CardProjectsItem } from '../components/CardProjectsItem';
import BuildingsProjectsImg from '../assets/img/img02.jpg';

const BuildingsContainer = styled.section`
  background-color: #0d0d0d;
  padding: 50px 20px;

  @media (max-width: 840px) {
    padding: 50px 20px;
  }
`;

const BuildingsTitle = styled.h2`
  color: #fef200;
  margin: 0 auto 50px;
  text-align: center;
`;

const BuildingsProjectsList = styled.ul`
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

const Buildings = () => {
  return (
    <BuildingsContainer>
      <BuildingsTitle>Edifícios</BuildingsTitle>

      <BuildingsProjectsList>
        <CardProjectsItem
          cardImg={BuildingsProjectsImg}
          title="Nome do Projeto"
          description="Aenean ultricies magna non sapien rhoncus, ac ullamcorper lorem convallis. Quisque at venenatis nisi, amet finibus mauris. Sed sodales ultricies eros, sit amet sodales sapien."
        />
        <CardProjectsItem
          cardImg={BuildingsProjectsImg}
          title="Nome do Projeto"
          description="Aenean ultricies magna non sapien rhoncus, ac ullamcorper lorem convallis. Quisque at venenatis nisi, amet finibus mauris. Sed sodales ultricies eros, sit amet sodales sapien."
        />
        <CardProjectsItem
          cardImg={BuildingsProjectsImg}
          title="Nome do Projeto"
          description="Aenean ultricies magna non sapien rhoncus, ac ullamcorper lorem convallis. Quisque at venenatis nisi, amet finibus mauris. Sed sodales ultricies eros, sit amet sodales sapien."
        />
        <CardProjectsItem
          cardImg={BuildingsProjectsImg}
          title="Nome do Projeto"
          description="Aenean ultricies magna non sapien rhoncus, ac ullamcorper lorem convallis. Quisque at venenatis nisi, amet finibus mauris. Sed sodales ultricies eros, sit amet sodales sapien."
        />
        <CardProjectsItem
          cardImg={BuildingsProjectsImg}
          title="Nome do Projeto"
          description="Aenean ultricies magna non sapien rhoncus, ac ullamcorper lorem convallis. Quisque at venenatis nisi, amet finibus mauris. Sed sodales ultricies eros, sit amet sodales sapien."
        />
        <CardProjectsItem
          cardImg={BuildingsProjectsImg}
          title="Nome do Projeto"
          description="Aenean ultricies magna non sapien rhoncus, ac ullamcorper lorem convallis. Quisque at venenatis nisi, amet finibus mauris. Sed sodales ultricies eros, sit amet sodales sapien."
        />
        <CardProjectsItem
          cardImg={BuildingsProjectsImg}
          title="Nome do Projeto"
          description="Aenean ultricies magna non sapien rhoncus, ac ullamcorper lorem convallis. Quisque at venenatis nisi, amet finibus mauris. Sed sodales ultricies eros, sit amet sodales sapien."
        />
      </BuildingsProjectsList>
    </BuildingsContainer>
  );
};

export default Buildings;
