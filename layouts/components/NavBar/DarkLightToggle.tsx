import { useContext } from 'react';
import { Switch } from '@headlessui/react';
import { SunIcon, MoonIcon } from '@heroicons/react/outline';
import { classNames } from '../../../utils/helpers';
import AppContext from '../../../utils/AppContext';

export default function DarkLightToggle() {
  const { isDark, toggleDark } = useContext(AppContext);

  return (
    <Switch checked={isDark} onChange={() => toggleDark()} className={classNames(isDark ? 'bg-gray-500' : 'bg-gray-200', 'relative inline-flex flex-shrink-0 h-6 w-11 border-2 border-transparent rounded-full cursor-pointer transition-colors ease-in-out duration-200 ')}>
      <span className="sr-only">Use setting</span>
      <span className={classNames(isDark ? 'translate-x-5 rtl:-translate-x-5' : 'translate-x-0', 'pointer-events-none relative inline-block h-5 w-5 rounded-full bg-white shadow transform ring-0 transition ease-in-out duration-200')}>
        <span className={classNames(isDark ? 'opacity-0 ease-out duration-100' : 'opacity-100 ease-in duration-200', 'absolute inset-0 h-full w-full flex items-center justify-center transition-opacity')} aria-hidden="true">
          <SunIcon className="w-4 h-4 text-yellow-500" />
        </span>
        <span className={classNames(isDark ? 'opacity-100 ease-in duration-200' : 'opacity-0 ease-out duration-100', 'absolute inset-0 h-full w-full flex items-center justify-center transition-opacity')} aria-hidden="true">
          <MoonIcon className="w-4 h-4 text-gray-800" />
        </span>
      </span>
    </Switch>
  );
}
