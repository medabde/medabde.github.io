import classNames from 'classnames';
import { useTranslation } from 'react-i18next';
import { Project } from '../../../content/_experiences';
import Technology from '../../global/Technology';

type Props = {
  title: string;
  duration: string;
  jobTitle: string;
  text: Array<string>;
  technologies: Array<string>;
  centerElements?: boolean;
  projects?: Array<Project>;
};

const TextBlock = ({ projects, title, duration, jobTitle, text, technologies, centerElements }: Props) => {
  const { t } = useTranslation();
  return (
    <div className={classNames(centerElements ? 'text-center' : '', 'max-w-md p-8 space-y-6')}>
      <div>
        <h3 className="text-lg font-semibold mb-1 dark:text-gray-200">{title}</h3>
        <h4 className="text-gray-700 dark:text-gray-400">{jobTitle}</h4>
        <h5 className="text-gray-700 font-semibold dark:text-gray-300">{duration}</h5>
      </div>
      <p className="dark:text-gray-300">
        <ul className="list-disc list-inside">
          {text.map(t => (
            <li key={t}>{t}</li>
          ))}
        </ul>
      </p>
      {projects && (
        <div>
          <p className="dark:text-gray-300 text-palette-light-primary font-bold">{t('projects-worked-on')}</p>
          <ul className="list-decimal list-inside text-palette-light-primary dark:text-gray-300 font-bold">
            {projects.map(({ link, comment }) => (
              <li key={link}>
                <a target="_blank" rel="noreferrer" className="underline" href={link}>
                  {link}
                </a>
                {comment && ` ${comment}`}
              </li>
            ))}
          </ul>
        </div>
      )}
      <div className="flex flex-wrap gap-3">
        {technologies.map((technology, index) => (
          <Technology key={index} technology={technology} />
        ))}
      </div>
    </div>
  );
};

export default TextBlock;
