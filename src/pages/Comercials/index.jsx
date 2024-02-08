import { ComercialsContainer, ComercialsTitle, ComercialsProjectsList } from './styles';
import { CardProjectsItem } from '../../components/CardProjectsItem';

const Comercials = () => {
  return (
    <ComercialsContainer>
      <ComercialsTitle>Comerciais</ComercialsTitle>

      <ComercialsProjectsList>
        <CardProjectsItem categoryId={2} />
      </ComercialsProjectsList>
    </ComercialsContainer>
  );
};

export default Comercials;
