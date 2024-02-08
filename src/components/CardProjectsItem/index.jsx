import { useState, useEffect } from 'react';
import axios from 'axios';
import { CardProjectsItemContainer, CardLink } from './styles';

// eslint-disable-next-line react/prop-types
export const CardProjectsItem = ({ categoryId }) => {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        let response;

        if (!categoryId) {
          response = await axios.get('https://api.bazearquitetura.com/wp-json/wp/v2/posts', {
            params: {
              per_page: 6,
              _embed: true,
            },
          });
        } else {
          response = await axios.get(`https://api.bazearquitetura.com/wp-json/wp/v2/posts?categories=${categoryId}`);
        }

        const postsWithImageURL = await Promise.all(
          response.data.map(async (post) => {
            const imageSizesResponse = await axios.get(`https://api.bazearquitetura.com/wp-json/wp/v2/media/${post.acf.imagem_do_projeto}`);
            const imageSizes = imageSizesResponse.data.media_details.sizes;

            const selectedSize = imageSizes.medium || imageSizes.full;

            return {
              ...post,
              acf: {
                ...post.acf,
                imagem_do_projeto: selectedSize.source_url,
                selectedSize,
              },
            };
          })
        );

        setPosts(postsWithImageURL);
      } catch (error) {
        console.error('Erro ao obter dados da API:', error);
      }
    };

    fetchData();
  }, [categoryId]);

  return (
    <>
      {posts.map((post) => (
        <CardProjectsItemContainer key={post.id}>
          <picture>
            <img srcSet={`${post.acf.selectedSize.source_url} ${post.acf.selectedSize.width}w`} sizes="(max-width: 300px) 100vw, 300px" src={post.acf.selectedSize.source_url} alt={post.acf.titulo_do_projeto} loading="lazy" />
          </picture>
          <h3>{post.acf.titulo_do_projeto}</h3>
          <CardLink to={`/projeto-detalhe/${post.id}`}>Saiba Mais</CardLink>
        </CardProjectsItemContainer>
      ))}
    </>
  );
};
