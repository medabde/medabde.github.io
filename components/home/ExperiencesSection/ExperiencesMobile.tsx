import TextBlock from './TextBlock';

const ExperiencesMobile = () => {
  return (
    <div className="xl:hidden block ">
      <div className="flex flex-col items-center justify-center space-y-8">
        <div className="bg-white w-2/3 sm:w-1/3 flex flex-col justify-center items-center p-4 rounded-md">
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img className={'object-cover w-28 h-28 rounded-xl border-[6px] border-palette-light-primary'} src="https://source.unsplash.com/random" alt="" srcSet="" />
          <TextBlock centerElements title="hellooo" duration="chahriin" jobTitle="mohandiss" text="hh" technologies={[]} />
        </div>
        <div className="bg-white w-2/3 sm:w-1/3 flex flex-col justify-center items-center p-4 rounded-md">
          <div className="rounded-2xl border-4 p-2 border-gray-500">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img className="w-24 h-24 rounded-md" src="https://source.unsplash.com/random" alt="" srcSet="" />
          </div>
          <h4>title</h4>
          <p>company name</p>
          <p>duration</p>
          <p>description</p>

          <div className="mt-10">tech ...</div>
        </div>
      </div>
    </div>
  );
};
export default ExperiencesMobile;
