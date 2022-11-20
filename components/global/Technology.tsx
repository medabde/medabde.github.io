type TechProp = {
  technology: string;
};
const Technology = ({ technology }: TechProp) => {
  return <span className="bg-palette-light-primary dark:bg-palette-dark-primary rounded-full px-3 py-1 text-sm text-gray-200 font-semibold">{technology}</span>;
};

export default Technology;
