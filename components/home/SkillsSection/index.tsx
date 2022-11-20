import useSectionsInfo from '../../../content/_sectionsInfo';
import useSkillsSection from '../../../content/_skillsSection';
import Container from '../../global/Container';

const SkillsSection = () => {
  const { skills } = useSectionsInfo();
  const skillsData = useSkillsSection();

  return (
    <Container title={skills.title} id={skills.id} mode="darker">
      <div className="pb-16">
        <div className="flex justify-center items-center">
          <div className="max-w-4xl flex gap-20 flex-wrap justify-center">
            {skillsData.featuredSkills.map(({ name, img }, key) => (
              <div key={key} className="space-y-2 flex flex-col items-center">
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img className="h-24 w-24" src={img} alt={name}></img>
                <span className="font-bold text-lg  text-white dark:text-gray-300">{name}</span>
              </div>
            ))}
          </div>
        </div>

        <div className="flex items-center justify-center">
          <div className="mt-12 text-center max-w-md">
            {skillsData.skills.map(({ title, skills }, key) => (
              <TechnologyExamples key={key} title={title} text={skills.join(', ')} />
            ))}
          </div>
        </div>
      </div>
    </Container>
  );
};

type TechnologyExamplesProps = {
  title: string;
  text: string;
};

const TechnologyExamples = ({ title, text }: TechnologyExamplesProps) => {
  return (
    <p className="text-white dark:text-gray-300 font-semibold text-base">
      <span className="text-lg mr-4 font-bold">{title} :</span> {text}
    </p>
  );
};
export default SkillsSection;
