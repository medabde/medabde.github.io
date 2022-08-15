import ScrollReveal from '../../transitions/ScrollReveal';

const Card = () => {
  return (
    <ScrollReveal>
      <div className="bg-gray-50 grid gap-4 sm:grid-cols-2 p-10 w-full border-separate border-2 border-palette-light-primary rounded-3xl">
        <div className="flex flex-col justify-center space-y-2">
          <h3 className="text-2xl text-palette-light-primary font-semibold">title here</h3>
          <p className="font-meduim">Lorem ipsum dolor sit amet consectetur adipisicing elit. Rem voluptas neque in architecto quod sapiente voluptatem incidunt dicta? Ad, sapiente</p>
        </div>
        <div className="flex justify-center items-center">
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img className="h-48 w-48" src="https://source.unsplash.com/random" alt="" srcSet="" />
        </div>
      </div>
    </ScrollReveal>
  );
};
export default Card;
