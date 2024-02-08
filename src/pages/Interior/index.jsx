import { InteriorContainer, InteriorTitle, InteriorProjectsList } from './styles';
import { CardProjectsItem } from '../../components/CardProjectsItem';

const Interior = () => {
  return (
    <InteriorContainer>
      <InteriorTitle>Interiores</InteriorTitle>
      <InteriorProjectsList>
        <CardProjectsItem categoryId={5} />
      </InteriorProjectsList>
    </InteriorContainer>
  );
};

export default Interior;
