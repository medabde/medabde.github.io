import { Project } from '../../../content/_projects';
import Technology from '../../global/Technology';
import ScrollReveal from '../../transitions/ScrollReveal';
import DetailsInfoButton from './DetailsInfoButtons';
import ProjectSmallCard from './ProjectSmallCard';

const ProjectBigCard = ({ img, name, details, technologies, github, website }: Project) => {
  return (
    <div className="col-span-2 row-span-2">
      <ScrollReveal viewFactor={0} className="hidden md:block h-full">
        <div className="h-full  bg-gray-100 dark:bg-palette-dark-primary dark:text-gray-300 hover:dark:shadow-gray-800 p-6 rounded-sm hover:shadow-gray-400 shadow-lg flex flex-col justify-between transition-shadow animate-ease-in">
          <div className="space-y-4">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img className="w-full max-h-52 object-cover rounded-md" src={img} alt="" srcSet="" />
            <h4 className="text-2xl font-semibold">{name}</h4>
            <p>{details}</p>
          </div>
          <div className="mt-12">
            <div className="flex gap-4 max-w-sm flex-wrap mb-8">
              {technologies?.map((tech, index) => (
                <Technology key={index} technology={tech} lighten />
              ))}
            </div>
            <DetailsInfoButton viewCode={github} viewProject={website} />
          </div>
        </div>
      </ScrollReveal>
      <div className="block md:hidden">
        <ProjectSmallCard img={img} name={name} details={details} technologies={technologies} github={github} website={website} />
      </div>
    </div>
  );
};

export default ProjectBigCard;
