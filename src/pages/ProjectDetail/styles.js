import styled from 'styled-components';

export const ProjectDetailContainer = styled.section`
  margin: 0 auto;
  max-width: 1360px;
  padding: 50px 20px;

  @media (max-width: 840px) {
    padding: 25px 20px;
  }
`;

export const ProjectDetailImg = styled.img`
  width: 100%;
`;

export const ProjectDetailTitle = styled.h2`
  margin: 20px auto;
  text-align: center;
`;
export const ProjectDetailSubtitle = styled.p`
  line-height: 1.5;
  margin: 20px auto;
`;
