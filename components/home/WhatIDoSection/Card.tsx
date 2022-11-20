import { Disclosure } from '@headlessui/react';
import { ChevronUpIcon } from '@heroicons/react/outline';
import { classNames } from '../../../utils/helpers';
import ScrollReveal from '../../transitions/ScrollReveal';

const Card = () => {
  return (
    <ScrollReveal className="h-min">
      <div className="w-full px-4 h-min">
        <Disclosure>
          {({ open }) => (
            <div className={classNames(!open ? '' : 'shadow-xl', 'mx-auto w-full max-w-xl rounded-2xl dark:bg-none p-2 h-min')}>
              <>
                <Disclosure.Button className="shadow-xl flex w-full justify-between rounded-lg bg-palette-light-primary dark:bg-palette-dark-primary hover:bg-opacity-90 p-6 text-left text-lg font-semibold text-gray-50 hover:bg-palette-light-primary focus:outline-none focus-visible:ring focus-visible:ring-purple-500 focus-visible:ring-opacity-75">
                  <span>What is your refunf policy?</span>
                  <ChevronUpIcon className={`${open ? 'rotate-180 transform' : ''} h-6 w-6 text-white`} />
                </Disclosure.Button>
                <Disclosure.Panel className="px-4 pt-4 pb-2 text-base text-gray-500 dark:text-gray-300 font-semibold">If e unhappy with your purchase for any reason, email us within 90 days and refund you in full, no questions asked.</Disclosure.Panel>
              </>
            </div>
          )}
        </Disclosure>
      </div>
    </ScrollReveal>
  );
};
export default Card;
