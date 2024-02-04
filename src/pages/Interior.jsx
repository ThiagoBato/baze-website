import styled from 'styled-components';
import { CardProjectsItem } from '../components/CardProjectsItem';
import InteriorProjectsImg from '../assets/img/img02.jpg';

const InteriorContainer = styled.section`
  background-color: #0d0d0d;
  padding: 50px 20px;

  @media (max-width: 840px) {
    padding: 50px 20px;
  }
`;

const InteriorTitle = styled.h2`
  color: #fef200;
  margin: 0 auto 50px;
  text-align: center;
`;

const InteriorProjectsList = styled.ul`
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

const Interior = () => {
  return (
    <InteriorContainer>
      <InteriorTitle>Interiores</InteriorTitle>

      <InteriorProjectsList>
        <CardProjectsItem
          cardImg={InteriorProjectsImg}
          title="Nome do Projeto"
          description="Aenean ultricies magna non sapien rhoncus, ac ullamcorper lorem convallis. Quisque at venenatis nisi, amet finibus mauris. Sed sodales ultricies eros, sit amet sodales sapien."
        />
        <CardProjectsItem
          cardImg={InteriorProjectsImg}
          title="Nome do Projeto"
          description="Aenean ultricies magna non sapien rhoncus, ac ullamcorper lorem convallis. Quisque at venenatis nisi, amet finibus mauris. Sed sodales ultricies eros, sit amet sodales sapien."
        />
        <CardProjectsItem
          cardImg={InteriorProjectsImg}
          title="Nome do Projeto"
          description="Aenean ultricies magna non sapien rhoncus, ac ullamcorper lorem convallis. Quisque at venenatis nisi, amet finibus mauris. Sed sodales ultricies eros, sit amet sodales sapien."
        />
        <CardProjectsItem
          cardImg={InteriorProjectsImg}
          title="Nome do Projeto"
          description="Aenean ultricies magna non sapien rhoncus, ac ullamcorper lorem convallis. Quisque at venenatis nisi, amet finibus mauris. Sed sodales ultricies eros, sit amet sodales sapien."
        />
        <CardProjectsItem
          cardImg={InteriorProjectsImg}
          title="Nome do Projeto"
          description="Aenean ultricies magna non sapien rhoncus, ac ullamcorper lorem convallis. Quisque at venenatis nisi, amet finibus mauris. Sed sodales ultricies eros, sit amet sodales sapien."
        />
        <CardProjectsItem
          cardImg={InteriorProjectsImg}
          title="Nome do Projeto"
          description="Aenean ultricies magna non sapien rhoncus, ac ullamcorper lorem convallis. Quisque at venenatis nisi, amet finibus mauris. Sed sodales ultricies eros, sit amet sodales sapien."
        />
      </InteriorProjectsList>
    </InteriorContainer>
  );
};

export default Interior;
