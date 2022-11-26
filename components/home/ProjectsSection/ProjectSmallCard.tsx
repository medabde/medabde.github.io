import { Project } from '../../../content/_projects';
import Technology from '../../global/Technology';
import ScrollReveal from '../../transitions/ScrollReveal';
import DetailsInfoButton from './DetailsInfoButtons';

const ProjectSmallCard = ({ name, details, technologies, github, website }: Project) => {
  return (
    <div className="col-span-2 row-span-2 sm:col-span-1 sm:row-span-1">
      <ScrollReveal viewFactor={0} className="h-full">
        <div className="h-full bg-gray-100 dark:bg-palette-dark-primary dark:text-gray-300 p-6 rounded-sm hover:dark:shadow-gray-800 hover:shadow-gray-400 shadow-lg flex flex-col justify-between transition-shadow animate-ease-in">
          <div className="space-y-4">
            <h4 className="text-2xl font-semibold">{name}</h4>
            <p>{details}</p>
          </div>
          <div className="mt-6">
            <div className="flex gap-4 max-w-sm flex-wrap mb-3">
              {technologies?.map((tech, index) => (
                <Technology lighten key={index} technology={tech} />
              ))}
            </div>
            <DetailsInfoButton viewCode={github} viewProject={website} />
          </div>
        </div>
      </ScrollReveal>
    </div>
  );
};
export default ProjectSmallCard;
