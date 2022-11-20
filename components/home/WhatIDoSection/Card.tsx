import { Disclosure } from '@headlessui/react';
import { ChevronUpIcon } from '@heroicons/react/outline';
import { classNames } from '../../../utils/helpers';
import ScrollReveal from '../../transitions/ScrollReveal';

type Props = {
  title: string;
  body: string;
  bulletPoints?: Array<string>;
};

const Card = ({ title, body, bulletPoints }: Props) => {
  return (
    <ScrollReveal className="h-min">
      <div className="w-full px-4 h-min">
        <Disclosure>
          {({ open }) => (
            <div className={classNames(!open ? '' : 'shadow-xl', 'mx-auto w-full max-w-xl rounded-2xl dark:bg-none p-2 h-min')}>
              <>
                <Disclosure.Button className="shadow-xl flex w-full justify-between rounded-lg bg-palette-light-primary dark:bg-palette-dark-primary hover:bg-opacity-90 p-6 text-left text-lg font-semibold text-gray-50 hover:bg-palette-light-primary focus:outline-none focus-visible:ring focus-visible:ring-purple-500 focus-visible:ring-opacity-75">
                  <span>{title}</span>
                  <ChevronUpIcon className={`${open ? 'rotate-180 transform' : ''} h-6 w-6 text-white`} />
                </Disclosure.Button>
                <Disclosure.Panel className="px-4 pt-4 pb-2 text-base text-gray-500 dark:text-gray-300 font-semibold">
                  {body}{' '}
                  <ul className="text-palette-light-primary dark:text-gray-100 mt-4">
                    {bulletPoints?.map((bulletPoint, i) => (
                      <li className="list-disc list-inside" key={i}>
                        {bulletPoint}
                      </li>
                    ))}
                  </ul>
                </Disclosure.Panel>
              </>
            </div>
          )}
        </Disclosure>
      </div>
    </ScrollReveal>
  );
};
export default Card;
