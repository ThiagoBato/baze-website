import { BuildingsContainer, BuildingsTitle, BuildingsProjectsList } from './styles';
import { CardProjectsItem } from '../../components/CardProjectsItem';

const Buildings = () => {
  return (
    <BuildingsContainer>
      <BuildingsTitle>Edifícios</BuildingsTitle>

      <BuildingsProjectsList>
        <CardProjectsItem categoryId={3} />
      </BuildingsProjectsList>
    </BuildingsContainer>
  );
};

export default Buildings;
