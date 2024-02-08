import { ProjectDetailContainer, ProjectDetailImg, ProjectDetailTitle, ProjectDetailSubtitle } from './styles';
import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';

const ProjectDetail = () => {
  const { postId } = useParams();
  const [postDetails, setPostDetails] = useState(null);
  const [contentLoaded, setContentLoaded] = useState(false);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(`https://api.bazearquitetura.com/wp-json/wp/v2/posts/${postId}`);

        const imageURLResponse = await axios.get(`https://api.bazearquitetura.com/wp-json/wp/v2/media/${response.data.acf.imagem_do_projeto}`);
        const imageURL = imageURLResponse.data.source_url;

        setPostDetails({
          ...response.data,
          acf: {
            ...response.data.acf,
            imagem_do_projeto: imageURL,
          },
        });
      } catch (error) {
        console.error('Erro ao obter detalhes do post:', error);
      }
    };

    fetchData();
  }, [postId]);

  if (!postDetails) {
    return <p>Carregando...</p>;
  }

  return (
    <ProjectDetailContainer style={{ display: contentLoaded ? 'block' : 'none' }}>
      <ProjectDetailImg src={postDetails.acf.imagem_do_projeto} alt="" onLoad={() => setContentLoaded(true)} />
      <ProjectDetailTitle>{postDetails.title.rendered}</ProjectDetailTitle>
      <ProjectDetailSubtitle>{postDetails.acf.descricao_do_projeto}</ProjectDetailSubtitle>
    </ProjectDetailContainer>
  );
};

export default ProjectDetail;
