import ButtonBase from '../../global/ButtonBase';
import ScrollReveal from '../../transitions/ScrollReveal';
import ProjectSmallCard from './ProjectSmallCard';

const ProjectBigCard = () => {
  return (
    <>
      <ScrollReveal className="hidden md:block h-full col-span-2 row-span-2">
        <div className="h-full  bg-gray-100 dark:bg-gray-400 hover:dark:shadow-gray-600 p-6 rounded-sm hover:shadow-gray-400 shadow-lg flex flex-col justify-between transition-shadow animate-ease-in">
          <div className="space-y-4">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img className="w-full max-h-52 object-cover rounded-md" src="https://source.unsplash.com/random" alt="" srcSet="" />
            <h4 className="text-2xl font-semibold">Project Title big</h4>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quidem.</p>
          </div>
          <div className="mt-12">
            <div>java ....</div>
            <div className="flex space-x-3 rtl:space-x-reverse mt-4">
              <ButtonBase onClick={() => {}} type="primary">
                hlooo
              </ButtonBase>
              <ButtonBase onClick={() => {}} type="info">
                hlooo
              </ButtonBase>
            </div>
          </div>
        </div>
      </ScrollReveal>
      <div className="block md:hidden">
        <ProjectSmallCard />
      </div>
    </>
  );
};

export default ProjectBigCard;
