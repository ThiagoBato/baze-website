import styled from 'styled-components';

export const PostLoading = styled.div`
  display: flex;
  width: 100%;
  height: 100%;
  justify-content: center;
  align-items: center;
  min-height: calc(100vh - 400px);

  @media (max-width: 840px) {
    min-height: calc(100vh - 110px);
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

export const ProjectListContainer = styled.section`
  padding: 50px 20px;

  @media (max-width: 840px) {
    padding: 25px 20px;
  }

  &.containerClass {
    display: block;
  }
`;

export const ProjectListTitle = styled.h2`
  color: #2c3147;
  margin: 0 auto 50px;
  text-align: center;

  @media (max-width: 840px) {
    margin: 0 auto 25px;
  }
`;

export const ProjectsList = styled.ul`
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
