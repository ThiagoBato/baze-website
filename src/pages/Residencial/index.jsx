import { ResidencialContainer, ResidencialTitle, ResidencialProjectsList } from './styles';
import { CardProjectsItem } from '../../components/CardProjectsItem';

const Residencial = () => {
  return (
    <main>
      <ResidencialContainer>
        <ResidencialTitle>Residenciais</ResidencialTitle>

        <ResidencialProjectsList>
          <CardProjectsItem categoryId={4} />
        </ResidencialProjectsList>
      </ResidencialContainer>
    </main>
  );
};

export default Residencial;
