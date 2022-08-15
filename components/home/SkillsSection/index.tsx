import useSectionsInfo from '../../../content/_sectionsInfo';
import Container from '../../global/Container';

const SkillsSection = () => {
  const { skills } = useSectionsInfo();

  return (
    <Container title={skills.title} id={skills.id} mode="darker">
      <div className="pb-16">
        <div className="flex justify-center items-center">
          <div className="max-w-4xl flex gap-24 flex-wrap justify-center">
            {[1, 2, 3, 3, 3, 3, 3].map(key => (
              <div key={key} className="space-y-2 flex flex-col items-center">
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img className="object-cover w-28 h-28" src="https://source.unsplash.com/random" alt="" srcSet="" />
                <span className="font-semibold text-lg">Angular</span>
              </div>
            ))}
          </div>
        </div>
        <div className="mt-12 text-center">
          <p>Language: JavaScript, TypeScrifsqdfqsdfqsdfqdfqsdfqdfpt, C#</p>
          <p>Language: JavaScript, TypeScfqsdfqsdript, C#</p>
          <p>Language: JavaScript, TypeScript,fdqsfqsdfqsdf C#</p>
          <p>Language: JavaScript, TypeScript,qfsdfqd C#</p>
          <p>Language: JavaScript, TypeSfqscript, C#</p>
        </div>
      </div>
    </Container>
  );
};
export default SkillsSection;
