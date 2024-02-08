import { Link } from 'react-router-dom';
import styled from 'styled-components';

export const CardProjectsItemContainer = styled.li`
  display: flex;
  flex-direction: column;
  flex-wrap: wrap;
  width: 100%;
  max-width: 350px;
  padding: 10px;
  border: 1px solid #c7c7c7;
  border-radius: 4px;

  @media (max-width: 840px) {
    max-width: 100%;
    width: 100%;
  }

  picture {
    height: 200px;
    overflow: hidden;
    width: 100%;

    @media (max-width: 840px) {
      height: 150px;
    }
  }

  img {
    margin-bottom: 20px;
    max-width: 550px;
    width: auto;
    min-width: 100%;
  }
  h3 {
    color: #2c3147;
    margin: 20px auto;
  }
  p {
    margin: 10px auto 20px;
  }
`;

export const CardLink = styled(Link)`
  background-color: #2c3147;
  border: 2px solid #2c3147;
  color: #fff;
  cursor: pointer;
  padding: 10px 20px;
  text-align: center;
  text-decoration: none;
  transition: 0.5s ease-in-out;

  &:hover {
    background-color: #fff;
    border-color: #000;
    color: #000;
  }
`;
