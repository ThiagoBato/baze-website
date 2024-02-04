import styled from 'styled-components';
import { Link } from 'react-router-dom';

const CardProjectsItemContainer = styled.li`
  display: flex;
  flex-direction: column;
  flex-wrap: wrap;
  width: 33%;
  max-width: 350px;
  padding: 20px;

  @media (max-width: 840px) {
    max-width: 100%;
    padding: 0;
    width: 100%;
  }

  & img {
    margin-bottom: 20px;
    max-width: 550px;
    width: 100%;
  }
  & h3 {
  }
  & p {
    margin: 10px auto 20px;
  }
`;

const CardLink = styled(Link)`
  background-color: transparent;
  border: 2px solid #ea5820;
  color: #ea5820;
  cursor: pointer;
  padding: 10px 20px;
  text-align: center;
  text-decoration: none;
  transition: 0.5s ease-in-out;

  &:hover {
    background-color: #fff;
    color: #000;
  }
`;

export const CardProjectsItem = ({ cardImg = '', title = '', description = '' }) => {
  return (
    <>
      <CardProjectsItemContainer>
        <img src={cardImg} alt={title} />
        <h3>{title}</h3>
        <p>{description}</p>
        <CardLink to="/projeto-detalhe">Veja Mais</CardLink>
      </CardProjectsItemContainer>
    </>
  );
};
