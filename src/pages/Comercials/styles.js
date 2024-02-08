import styled from 'styled-components';

export const ComercialsContainer = styled.section`
  padding: 50px 20px;

  @media (max-width: 840px) {
    padding: 25px 20px;
  }
`;

export const ComercialsTitle = styled.h2`
  color: #2c3147;
  margin: 0 auto 50px;
  text-align: center;

  @media (max-width: 840px) {
    margin: 0 auto 25px;
  }
`;

export const ComercialsProjectsList = styled.ul`
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
