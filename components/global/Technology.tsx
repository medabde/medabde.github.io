import { classNames } from '../../utils/helpers';

type TechProp = {
  technology: string;
  lighten?: boolean;
};
const Technology = ({ technology, lighten }: TechProp) => {
  return <span className={classNames(lighten ? 'dark:bg-palette-dark-secondary' : 'dark:bg-palette-dark-primary', 'bg-palette-light-primary  rounded-full px-3 py-1 text-sm text-gray-200 font-semibold')}>{technology}</span>;
};

export default Technology;
