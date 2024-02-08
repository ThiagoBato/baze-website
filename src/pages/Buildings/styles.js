import styled from 'styled-components';

export const BuildingsContainer = styled.section`
  padding: 50px 20px;

  @media (max-width: 840px) {
    padding: 25px 20px;
  }
`;

export const BuildingsTitle = styled.h2`
  color: #2c3147;
  margin: 0 auto 50px;
  text-align: center;

  @media (max-width: 840px) {
    margin: 0 auto 25px;
  }
`;

export const BuildingsProjectsList = styled.ul`
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
