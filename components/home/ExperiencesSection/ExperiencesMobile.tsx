import useExperiences from '../../../content/_experiences';
import ScrollReveal from '../../transitions/ScrollReveal';
import TextBlock from './TextBlock';

const ExperiencesMobile = () => {
  const experiences = useExperiences();

  return (
    <div className="xl:hidden block ">
      <div className="flex flex-col items-center justify-center space-y-8">
        {experiences.map(({ image, jobTitle, companyName, details, duration, technologies, projectsWorkedOn }) => (
          <ScrollReveal viewFactor={0} key={jobTitle}>
            <div className="bg-white dark:bg-palette-light-secondary sm:w-2/3 flex flex-col justify-center items-center p-4 rounded-md">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img className={'object-cover w-28 h-28 rounded-xl border-[6px] border-palette-light-primary dark:border-palette-dark-primary'} src={image} alt={companyName} />
              <TextBlock title={jobTitle} duration={duration} jobTitle={companyName} text={details} technologies={technologies} centerElements projects={projectsWorkedOn} />
            </div>
          </ScrollReveal>
        ))}
      </div>
    </div>
  );
};
export default ExperiencesMobile;
