import useSectionsInfo from '../../../content/_sectionsInfo';
import Container from '../../global/Container';
import ExperiencesDesktop from './ExperiencesDesktop';
import ExperiencesMobile from './ExperiencesMobile';

const ExperiencesSection = () => {
  const { experiences } = useSectionsInfo();

  return (
    <Container title={experiences.title} id={experiences.id} mode="darker">
      <div className="pb-16">
        <ExperiencesDesktop />
        <ExperiencesMobile />
      </div>
    </Container>
  );
};

export default ExperiencesSection;
