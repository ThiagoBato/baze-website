import styled from 'styled-components';

export const HomeContainer = styled.main`
  padding: 0;
`;
export const HomeDescriptionContainer = styled.section`
  padding: 20px;
  max-width: 1360px;
  margin: 100px auto;

  @media (max-width: 840px) {
    margin: 25px auto;
  }
`;
export const HomeDescriptionPrimary = styled.div`
  align-items: center;
  display: flex;
  gap: 50px;
  justify-content: center;

  & img {
    max-width: 750px;
    width: 100%;
  }

  @media (max-width: 840px) {
    flex-direction: column;
    justify-content: center;
  }
`;
export const HomeTitle = styled.h1`
  margin-bottom: 25px;
  position: relative;
  text-transform: uppercase;

  &:after {
    content: '';
    background-color: #444444;
    bottom: -15px;
    height: 2px;
    left: 0;
    position: absolute;
    width: 100px;
  }
`;

export const HomeDescriptionSecondary = styled.div`
  display: flex;
  gap: 50px;
  margin: 100px 0 0;

  @media (max-width: 840px) {
    flex-direction: column;
    justify-content: center;
    margin: 50px auto 0;
  }
`;
export const HomeIcon = styled.img`
  max-width: 50px;
  width: 100%;
`;
export const HomeSubtitle = styled.h3`
  color: #ea5820;
  margin: 10px 0 25px;
  position: relative;
  text-transform: uppercase;

  &:after {
    content: '';
    background-color: #444444;
    bottom: -15px;
    height: 2px;
    left: 0;
    position: absolute;
    width: 100px;
  }
`;

export const HomeLatestProjects = styled.section`
  padding: 50px 20px;

  h2 {
    padding: 30px;
    text-align: center;
    text-transform: uppercase;

    @media (max-width: 840px) {
      margin-bottom: 25px;
      padding: 0;
    }
  }

  @media (max-width: 840px) {
    padding: 50px 20px;
  }
`;

export const HomeLatestProjectsList = styled.ul`
  display: flex;
  list-style: none;
  flex-wrap: wrap;
  gap: 25px;
  justify-content: center;
  margin: 0 auto;
  max-width: 1360px;

  @media (max-width: 840px) {
    flex-direction: column;
  }
`;
