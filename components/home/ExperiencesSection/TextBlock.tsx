import classNames from 'classnames';

type Props = {
  title: string;
  duration: string;
  jobTitle: string;
  text: string;
  technologies: Array<string>;
  centerElements?: boolean;
};

const TextBlock = ({ title, duration, jobTitle, text, technologies, centerElements }: Props) => {
  return (
    <div className={classNames(centerElements ? 'text-center' : '', 'max-w-md p-8 space-y-6')}>
      <div>
        <h3 className="text-lg font-semibold mb-1 dark:text-gray-200">{title}</h3>
        <h4 className="text-gray-700 dark:text-gray-400">{jobTitle}</h4>
        <h5 className="text-gray-700 font-semibold dark:text-gray-300">{duration}</h5>
      </div>
      <p className="dark:text-gray-300">
        {text}
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellat, magnam illum molestias maiores atque exercitationem ipsa ducimus quaerat incidunt blanditiis?
      </p>
      <div className="flex flex-wrap gap-3">
        {['tec', 'technologies', 'technologies122333', 't', ...technologies].map((technology, index) => (
          <Technology key={index} technology={technology} />
        ))}
      </div>
    </div>
  );
};

type TechProp = {
  technology: string;
};
const Technology = ({ technology }: TechProp) => {
  return <span className="bg-palette-light-primary dark:bg-palette-dark-primary rounded-full px-3 py-1 text-sm text-gray-200 font-semibold">{technology}</span>;
};

export default TextBlock;
