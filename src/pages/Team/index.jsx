import { TeamContainer, TeamTitle, TeamList, TeamListItem, TeamListImg, TeamSubtitle, TeamDescription } from './styles';
import TeamImg from '../../assets/img/equipe/img01.jpg';

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
