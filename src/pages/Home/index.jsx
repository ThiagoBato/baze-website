import { Hero } from '../../components/Hero';
import { HomeContainer, HomeDescriptionContainer, HomeDescriptionPrimary, HomeTitle, HomeDescriptionSecondary, HomeIcon, HomeSubtitle, HomeLatestProjects, HomeLatestProjectsList } from './styles';
import HomeLogoImg from '../../assets/img/pic07.jpg';
import HomeLogoIcon from '../../assets/img/home-icone.svg';
import { CardProjectsItem } from '../../components/CardProjectsItem';

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
          <CardProjectsItem />
        </HomeLatestProjectsList>
      </HomeLatestProjects>
    </HomeContainer>
  );
};

export default Home;
