import { useState } from 'react';
import { MdArchitecture } from 'react-icons/md';
import { ProjectListContainer, ProjectListTitle, ProjectsList, PostLoading } from './styles';
import { CardProjectsItem } from '../../components/CardProjectsItem';

// eslint-disable-next-line react/prop-types
const ProjecstList = ({ title, categoryId }) => {
  const [contentLoaded, setContentLoaded] = useState(false);
  const [containerClass, setContainerClass] = useState('');

  const onContentLoaded = () => {
    setContentLoaded(true);
    setContainerClass('containerClass');
  };

  return (
    <>
      <ProjectListContainer onLoad={() => onContentLoaded()} className={containerClass}>
        <PostLoading style={{ display: !contentLoaded ? 'flex' : 'none' }}>
          <MdArchitecture className="loading-icon" />
        </PostLoading>
        <ProjectListTitle style={{ display: contentLoaded ? 'block' : 'none' }}>{title}</ProjectListTitle>
        <ProjectsList>
          <CardProjectsItem categoryId={categoryId} />
        </ProjectsList>
      </ProjectListContainer>
    </>
  );
};

export default ProjecstList;
