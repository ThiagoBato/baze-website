import styled from 'styled-components';
import ProjectDetailImgSrc from '../assets/img/slide01.jpg';

const ProjectDetailContainer = styled.section`
  margin: 0 auto;
  max-width: 1360px;
  padding: 50px 20px;

  @media (max-width: 840px) {
    padding: 25px 20px;
  }
`;

const ProjectDetailImg = styled.img`
  width: 100%;
`;

const ProjectDetailTitle = styled.h2`
  margin: 20px auto;
  text-align: center;
`;
const ProjectDetailSubtitle = styled.p`
  line-height: 1.5;
  margin: 20px auto;
`;

const ProjectDetail = () => {
  return (
    <ProjectDetailContainer>
      <ProjectDetailImg src={ProjectDetailImgSrc} alt="" />
      <ProjectDetailTitle>Nome do Projeto</ProjectDetailTitle>
      <ProjectDetailSubtitle>
        Lorem ipsum dolor sit, amet consectetur adipisicing elit. Tempore, similique autem aut nisi molestiae consectetur voluptatem, necessitatibus voluptates cupiditate harum unde nostrum veritatis! Recusandae asperiores vero quod nam pariatur
        aspernatur. Eius, inventore assumenda corporis magnam explicabo soluta. Aperiam, cupiditate? Ut fugit similique assumenda veniam aut non vero, velit blanditiis vitae! Incidunt adipisci illo possimus libero officiis sunt neque numquam
        provident. Nobis perspiciatis, quam tempora vero enim aut, ad dolor architecto eum ratione autem. Minus odio sunt nam officiis labore magni reprehenderit qui excepturi itaque. Id maxime dignissimos tempore sit animi. Modi nisi distinctio
        veniam consectetur nesciunt sit, facere est? Incidunt facilis cupiditate eveniet, velit voluptatem deserunt accusantium expedita, officiis, omnis accusamus magnam nisi eum? Id molestiae hic tempora ab libero. Impedit beatae id consequatur
        aspernatur ullam culpa eius. Ex inventore magni eaque omnis at unde, libero voluptatem ipsa voluptates ea ad. Corrupti adipisci sapiente magni porro, beatae nesciunt quo cupiditate?
      </ProjectDetailSubtitle>
    </ProjectDetailContainer>
  );
};

export default ProjectDetail;
