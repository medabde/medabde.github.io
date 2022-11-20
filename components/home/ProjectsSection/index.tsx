import useProjects from '../../../content/_projects';
import useSectionsInfo from '../../../content/_sectionsInfo';
import Container from '../../global/Container';
// import Project from './Project';
import ProjectBigCard from './ProjectBigCard';
import ProjectSmallCard from './ProjectSmallCard';

const ProjectsSection = () => {
  const { projects } = useSectionsInfo();
  const projectsDetails = useProjects();
  return (
    <Container title={projects.title} id={projects.id}>
      <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-8 grid-rows-2 pb-14">
        {projectsDetails.map(({ img, name, details, technologies, github, website }) => {
          if (img) return <ProjectBigCard key={name} img={img} name={name} details={details} technologies={technologies} github={github} website={website} />;
          return <ProjectSmallCard key={name} img={img} name={name} details={details} technologies={technologies} github={github} website={website} />;
        })}
      </div>
    </Container>
  );
};

export default ProjectsSection;
