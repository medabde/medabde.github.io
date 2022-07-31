const ExperiencesMobile = () => {
  return (
    <div className="xl:hidden block ">
      <div className="flex flex-col items-center justify-center">
        <div className="bg-white">
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
