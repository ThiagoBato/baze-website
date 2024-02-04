import styled from 'styled-components';
import TeamImg from '../assets/img/equipe/img01.jpg';

const TeamContainer = styled.section`
  background-color: #fff;
  padding: 50px 20px;

  @media (max-width: 840px) {
    padding: 25px 20px;
  }
`;

const TeamTitle = styled.h2`
  margin: 0 auto 50px;
  text-align: center;
  text-transform: uppercase;

  @media (max-width: 840px) {
    margin: 0 auto 25px;
  }
`;

const TeamList = styled.ul`
  display: flex;
  gap: 50px;
  margin: 0 auto;
  max-width: 1360px;

  @media (max-width: 840px) {
    flex-direction: column;
    gap: 25px;
  }
`;
const TeamListItem = styled.li`
  display: flex;
  flex-direction: column;
`;

const TeamListImg = styled.img`
  max-width: 500px;
  width: 100%;
`;
const TeamSubtitle = styled.h3`
  margin: 20px auto 10px;
  text-align: center;
`;
const TeamDescription = styled.p`
  line-height: 1.5;
`;

const Team = () => {
  return (
    <TeamContainer>
      <TeamTitle>Equipe Baze Arquitetura</TeamTitle>
      <TeamList>
        <TeamListItem>
          <TeamListImg src={TeamImg} />
          <TeamSubtitle>Arq. Eliandro Santos | CAU A35796-0</TeamSubtitle>
          <TeamDescription>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis
            aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
          </TeamDescription>
        </TeamListItem>
        <TeamListItem>
          <TeamListImg src={TeamImg} />
          <TeamSubtitle>Arq. Eliandro Santos | CAU A35796-0</TeamSubtitle>
          <TeamDescription>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis
            aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
          </TeamDescription>
        </TeamListItem>
        <TeamListItem>
          <TeamListImg src={TeamImg} />
          <TeamSubtitle>Arq. Eliandro Santos | CAU A35796-0</TeamSubtitle>
          <TeamDescription>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis
            aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
          </TeamDescription>
        </TeamListItem>
      </TeamList>
    </TeamContainer>
  );
};

export default Team;
