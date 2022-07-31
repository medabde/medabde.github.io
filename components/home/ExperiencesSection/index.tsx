import useSectionsInfo from '../../../content/_sectionsInfo';
import Container from '../../global/Container';
import ExperiencesDesktop from './ExperiencesDesktop';
import ExperiencesMobile from './ExperiencesMobile';

const ExperiencesSection = () => {
  const { experiences } = useSectionsInfo();

  return (
    <Container title={experiences.title} id={experiences.id}>
      <ExperiencesDesktop />
      <ExperiencesMobile />
    </Container>
  );
};

export default ExperiencesSection;
