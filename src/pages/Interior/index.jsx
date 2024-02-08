import { InteriorContainer, InteriorTitle, InteriorProjectsList } from './styles';
import { CardProjectsItem } from '../../components/CardProjectsItem';

const Interior = () => {
  return (
    <main>
      <InteriorContainer>
        <InteriorTitle>Interiores</InteriorTitle>
        <InteriorProjectsList>
          <CardProjectsItem categoryId={5} />
        </InteriorProjectsList>
      </InteriorContainer>
    </main>
  );
};

export default Interior;
