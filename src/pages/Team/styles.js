import styled from 'styled-components';

export const TeamContainer = styled.section`
  background-color: #fff;
  padding: 50px 20px;

  @media (max-width: 840px) {
    padding: 25px 20px;
  }
`;

export const TeamTitle = styled.h2`
  margin: 0 auto 50px;
  text-align: center;
  text-transform: uppercase;

  @media (max-width: 840px) {
    margin: 0 auto 25px;
  }
`;

export const TeamList = styled.ul`
  display: flex;
  gap: 50px;
  margin: 0 auto;
  max-width: 1360px;

  @media (max-width: 840px) {
    flex-direction: column;
    gap: 25px;
  }
`;
export const TeamListItem = styled.li`
  display: flex;
  flex-direction: column;
`;

export const TeamListImg = styled.img`
  max-width: 500px;
  width: 100%;
`;
export const TeamSubtitle = styled.h3`
  margin: 20px auto 10px;
  text-align: center;

  @media (max-width: 840px) {
    font-size: 1rem;
    text-transform: uppercase;
  }
`;
export const TeamDescription = styled.p`
  line-height: 1.5;
`;
