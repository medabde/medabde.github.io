import useSectionsInfo from '../../../content/_sectionsInfo';
import Container from '../../global/Container';

const SkillsSection = () => {
  const { skills } = useSectionsInfo();

  return (
    <Container title={skills.title} id={skills.id} mode="darker">
      <div className="pb-16">
        <div className="flex justify-center items-center">
          <div className="max-w-4xl flex gap-20 flex-wrap justify-center">
            {[1, 2, 3, 3, 3, 3, 3].map(key => (
              <div key={key} className="space-y-2 flex flex-col items-center">
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img className="object-cover w-24 h-24" src="https://source.unsplash.com/random" alt="" srcSet="" />
                <span className="font-bold text-lg  text-white dark:text-gray-300">Angular</span>
              </div>
            ))}
          </div>
        </div>

        <div className="flex items-center justify-center">
          <div className="mt-12 text-center max-w-md">
            <TechnologyExamples title="Language" text="fffffffffffffffffffffffJavaScript, TypeScript, C#" />
            <TechnologyExamples title="Language" text=", C#" />
            <TechnologyExamples title="Language" text=" fsdqqqqqqqqqsfqsdfq sdf qsd f qsdf qsdfqsdJavaScript, TypeScript, C#" />
            <TechnologyExamples title="Language" text="JavaScript, TypeScript, C#" />
            <TechnologyExamples title="Language" text="JavaScript, TypeScript, C#" />
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
