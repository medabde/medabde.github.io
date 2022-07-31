import useSectionsInfo from '../../../content/_sectionsInfo';
import Container from '../../global/Container';
// import Project from './Project';
import ProjectBigCard from './ProjectBigCard';
import ProjectSmallCard from './ProjectSmallCard';

const ProjectsSection = () => {
  const { projects } = useSectionsInfo();
  return (
    <Container title={projects.title} id={projects.id}>
      <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-8 grid-rows-4 pb-14">
        <ProjectBigCard />
        <ProjectSmallCard />
        <ProjectSmallCard />
        <ProjectSmallCard />
        <ProjectBigCard />
        <ProjectSmallCard />
      </div>
    </Container>
  );
};

export default ProjectsSection;
