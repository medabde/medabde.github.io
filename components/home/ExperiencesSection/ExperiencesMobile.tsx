import TextBlock from './TextBlock';

const ExperiencesMobile = () => {
  return (
    <div className="xl:hidden block ">
      <div className="flex flex-col items-center justify-center space-y-8">
        <div className="bg-white dark:bg-palette-light-secondary sm:w-2/3 flex flex-col justify-center items-center p-4 rounded-md">
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img className={'object-cover w-28 h-28 rounded-xl border-[6px] border-palette-light-primary'} src="https://source.unsplash.com/random" alt="" srcSet="" />
          <TextBlock centerElements title="hellooo" duration="chahriin" jobTitle="mohandiss" text="hh" technologies={[]} />
        </div>
      </div>
    </div>
  );
};
export default ExperiencesMobile;
