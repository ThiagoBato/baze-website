import { ResidencialContainer, ResidencialTitle, ResidencialProjectsList } from './styles';
import { CardProjectsItem } from '../../components/CardProjectsItem';

const Residencial = () => {
  return (
    <ResidencialContainer>
      <ResidencialTitle>Residenciais</ResidencialTitle>

      <ResidencialProjectsList>
        <CardProjectsItem categoryId={4} />
      </ResidencialProjectsList>
    </ResidencialContainer>
  );
};

export default Residencial;
