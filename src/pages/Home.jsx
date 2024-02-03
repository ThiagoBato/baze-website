import { Hero } from '../components/Hero';
import styled from 'styled-components';
import HomeLogoImg from '../assets/img/pic07.jpg';
import HomeLogoIcon from '../assets/img/home-icone.svg';
import HomeLatestProjectsImg from '../assets/img/img02.jpg';

const HomeContainer = styled.main`
  padding: 0;
`;
const HomeDescriptionContainer = styled.section`
  padding: 20px;
  max-width: 1360px;
  margin: 100px auto;

  @media (max-width: 840px) {
    margin: 25px auto;
  }
`;
const HomeDescriptionPrimary = styled.div`
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
const HomeTitle = styled.h1`
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

const HomeDescriptionSecondary = styled.div`
  display: flex;
  gap: 50px;
  margin: 100px 0 0;

  @media (max-width: 840px) {
    flex-direction: column;
    justify-content: center;
    margin: 50px auto 0;
  }
`;
const HomeIcon = styled.img`
  max-width: 50px;
  width: 100%;
`;
const HomeSubtitle = styled.h3`
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

const HomeLatestProjects = styled.section`
  background-color: #cecece;
  padding: 50px 20px;

  & h2 {
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

const HomeLatestProjectsList = styled.ul`
  display: flex;
  list-style: none;
  flex-wrap: wrap;
  gap: 25px;
  justify-content: center;
  @media (max-width: 840px) {
    flex-direction: column;
  }
`;
const HomeLatestProjectsItem = styled.li`
  display: flex;
  flex-direction: column;
  flex-wrap: wrap;
  width: 33%;
  max-width: 350px;
  padding: 20px;

  @media (max-width: 840px) {
    max-width: 100%;
    padding: 0;
    width: 100%;
  }

  & img {
    margin-bottom: 20px;
    max-width: 550px;
    width: 100%;
  }
  & h3 {
  }
  & p {
    margin: 10px auto 20px;
  }

  & button {
    padding: 10px 20px;
    background-color: transparent;
    border: 2px solid #ea5820;
    color: #ea5820;
    cursor: pointer;
    transition: 0.5s ease-in-out;

    &:hover {
      background-color: #fff;
      color: #000;
    }
  }
`;

const Home = () => {
  return (
    <HomeContainer>
      <Hero />
      <HomeDescriptionContainer>
        <HomeDescriptionPrimary>
          <div>
            <HomeTitle>Escritório de Arquitetura Baze</HomeTitle>
            <p>Desde 2008, o escritório de arquitetura Baze trabalha com criação e execução de projetos de arquitetura de interiores, residencial, comercial e industrial.</p>
          </div>

          <img src={HomeLogoImg} alt="Baze arquitetura e construção" />
        </HomeDescriptionPrimary>

        <HomeDescriptionSecondary>
          <div>
            <HomeIcon src={HomeLogoIcon} alt="" />
            <HomeSubtitle>Criatividade e Responsabilidade</HomeSubtitle>
            <p>Desenvolvemos os projetos arquitetonicos aliando funcionalidade e forma, a fim de melhorar a vida das pessoas por meio da organização dos espaços, prezando pelo conforto ambiental e bom gosto nas suas obras.</p>
          </div>
          <div>
            <HomeIcon src={HomeLogoIcon} alt="" />
            <HomeSubtitle>Tendência e Inovação</HomeSubtitle>
            <p>
              Nossos projetos baseiam-se na pesquisa de materiais, otimização de custos, novas tecnologias e tendências de mercado, promovendo exclusividade e flexibilidade, sem abrir mão da personalidade e o traço característicos dos profissionais.{' '}
            </p>
          </div>
          <div>
            <HomeIcon src={HomeLogoIcon} alt="" />
            <HomeSubtitle>Otimização e Resultados</HomeSubtitle>
            <p>Nossos profissionais atuam nas mais diversas áreas da arquitetura , sempre buscando novos métodos e melhores ferramentas que aperfeiçoem a cada dia seus projetos, em busca de melhores resultados.</p>
          </div>
        </HomeDescriptionSecondary>
      </HomeDescriptionContainer>

      <HomeLatestProjects>
        <h2>Projetos Recentes</h2>
        <HomeLatestProjectsList>
          <HomeLatestProjectsItem>
            <img src={HomeLatestProjectsImg} alt="Projeto 1" />
            <h3>NOME DO PROJETO</h3>
            <p>Aenean ultricies magna non sapien rhoncus, ac ullamcorper lorem convallis. Quisque at venenatis nisi, amet finibus mauris. Sed sodales ultricies eros, sit amet sodales sapien.</p>
            <button>Veja Mais</button>
          </HomeLatestProjectsItem>
          <HomeLatestProjectsItem>
            <img src={HomeLatestProjectsImg} alt="Projeto 2" />
            <h3>NOME DO PROJETO</h3>
            <p>Aenean ultricies magna non sapien rhoncus, ac ullamcorper lorem convallis. Quisque at venenatis nisi, amet finibus mauris. Sed sodales ultricies eros, sit amet sodales sapien.</p>
            <button>Veja Mais</button>
          </HomeLatestProjectsItem>
          <HomeLatestProjectsItem>
            <img src={HomeLatestProjectsImg} alt="Projeto 3" />
            <h3>NOME DO PROJETO</h3>
            <p>Aenean ultricies magna non sapien rhoncus, ac ullamcorper lorem convallis. Quisque at venenatis nisi, amet finibus mauris. Sed sodales ultricies eros, sit amet sodales sapien.</p>
            <button>Veja Mais</button>
          </HomeLatestProjectsItem>
          <HomeLatestProjectsItem>
            <img src={HomeLatestProjectsImg} alt="Projeto 4" />
            <h3>NOME DO PROJETO</h3>
            <p>Aenean ultricies magna non sapien rhoncus, ac ullamcorper lorem convallis. Quisque at venenatis nisi, amet finibus mauris. Sed sodales ultricies eros, sit amet sodales sapien.</p>
            <button>Veja Mais</button>
          </HomeLatestProjectsItem>
          <HomeLatestProjectsItem>
            <img src={HomeLatestProjectsImg} alt="Projeto 5" />
            <h3>NOME DO PROJETO</h3>
            <p>Aenean ultricies magna non sapien rhoncus, ac ullamcorper lorem convallis. Quisque at venenatis nisi, amet finibus mauris. Sed sodales ultricies eros, sit amet sodales sapien.</p>
            <button>Veja Mais</button>
          </HomeLatestProjectsItem>
          <HomeLatestProjectsItem>
            <img src={HomeLatestProjectsImg} alt="Projeto 6" />
            <h3>NOME DO PROJETO</h3>
            <p>Aenean ultricies magna non sapien rhoncus, ac ullamcorper lorem convallis. Quisque at venenatis nisi, amet finibus mauris. Sed sodales ultricies eros, sit amet sodales sapien.</p>
            <button>Veja Mais</button>
          </HomeLatestProjectsItem>
        </HomeLatestProjectsList>
      </HomeLatestProjects>
    </HomeContainer>
  );
};

export default Home;
