import Technology from '../../global/Technology';
import ScrollReveal from '../../transitions/ScrollReveal';
import DetailsInfoButton from './DetailsInfoButtons';

const ProjectSmallCard = () => {
  return (
    <div className="col-span-1 row-span-1">
      <ScrollReveal>
        <div className="bg-gray-100 dark:bg-palette-light-secondary dark:text-gray-300 p-6 rounded-sm hover:dark:shadow-gray-600 hover:shadow-gray-400 shadow-lg flex flex-col justify-between transition-shadow animate-ease-in">
          <div className="space-y-4">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            {/* <img className="w-full max-h-52 object-cover rounded-md" src="https://source.unsplash.com/random" alt="" srcSet="" /> */}
            <h4 className="text-2xl font-semibold">Project Title big</h4>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quidem.</p>
          </div>
          <div className="mt-6">
            <div className="flex gap-4 max-w-sm flex-wrap mb-3">
              {['1', '1', '1', '1', '1', '1', '1', '1'].map((tech, index) => (
                <Technology key={index} technology={tech} />
              ))}
            </div>
            <DetailsInfoButton viewCode="google.com" viewProject="facebook.com" />
          </div>
        </div>
      </ScrollReveal>
    </div>
  );
};
export default ProjectSmallCard;
