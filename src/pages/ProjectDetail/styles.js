import styled from 'styled-components';

export const PostLoading = styled.div`
  display: flex;
  width: 100%;
  height: 100%;
  justify-content: center;
  align-items: center;
  min-height: calc(100vh - 400px);

  @media (max-width: 840px) {
    min-height: calc(100vh - 60px);
  }

  .loading-icon {
    animation: animate 4s infinite;
    font-size: 2rem;
    @keyframes animate {
      0% {
        transform: rotate(0deg);
      }
      100% {
        transform: rotate(720deg);
      }
    }
  }
`;

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
