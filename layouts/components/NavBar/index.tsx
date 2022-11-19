import { Disclosure } from '@headlessui/react';
import { MenuIcon, XIcon } from '@heroicons/react/outline';
import { classNames, isRunningOnClientSide } from '../../../utils/helpers';
import { useScrollPosition } from '../../../hooks/scrollPosition';
import DarkLightToggle from './DarkLightToggle';
import LangChange from './LangChange';
import Logo from '../Logo';
import ScrollReveal from '../../../components/transitions/ScrollReveal';
import useSectionsInfo, { SectionInfo, SectionsInfo } from '../../../content/_sectionsInfo';
import ContactMobile from '../../../components/global/ContactMobile';

export default function NavBar() {
  const scrollPosition = useScrollPosition();

  return (
    <Disclosure as="nav" className={classNames(scrollPosition > 0 ? 'bg-white shadow-lg' : 'bg-white shadow-lg sm:bg-transparent sm:shadow-none', 'fixed top-0 right-0 left-0 z-50')}>
      {({ open }) => (
        <ScrollReveal origin="top" delay={10} disableAnimation>
          <Nav open={open} />
        </ScrollReveal>
      )}
    </Disclosure>
  );
}

type NavProps = {
  open: boolean;
};

const Nav = ({ open }: NavProps) => {
  const sectionsInfo = useSectionsInfo();
  const scrollPosition = useScrollPosition();
  const isScrollZero = scrollPosition === 0;

  const isSectionActive = (id: string): boolean => {
    if (isRunningOnClientSide) {
      const currentSectionHeight = document.getElementById(id)?.clientHeight || 0;

      let heightBeforeSection = document.getElementById('herosection')?.clientHeight || 0;
      let isBefore = true;
      Object.keys(sectionsInfo).map(key => {
        const { id: secId }: SectionInfo = sectionsInfo[key as keyof SectionsInfo];
        if (id === secId) isBefore = false;

        if (isBefore) heightBeforeSection += document.getElementById(secId)?.clientHeight || 0;
      });

      const offby = 100;
      return scrollPosition >= heightBeforeSection - offby && scrollPosition <= heightBeforeSection + currentSectionHeight - offby;
    }

    return false;
  };

  return (
    <>
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16">
          <div className={classNames(!isScrollZero ? 'text-palette-light-primary' : 'text-white', 'flex-shrink-0 flex items-center')}>
            <Logo />
          </div>
          <div className="flex">
            <div className="hidden sm:ml-6 sm:flex sm:space-x-8 rtl:space-x-reverse">
              {/* Current: "border-indigo-500 text-gray-900", Default: "border-transparent text-gray-500 hover:border-gray-300 hover:text-gray-700" */}

              {Object.keys(sectionsInfo).map(key => {
                const currentSection: SectionInfo = sectionsInfo[key as keyof SectionsInfo];
                return (
                  <a
                    key={key}
                    href={`#${currentSection.id}`}
                    className={classNames(isSectionActive(currentSection.id) ? 'border-palette-light-primary  text-palette-light-primary' : isScrollZero ? 'text-gray-50 border-transparent' : 'text-gray-600 border-transparent', 'inline-flex items-center px-1 pt-1 border-b-2 text-sm font-semibold')}
                  >
                    {currentSection.title}
                  </a>
                );
              })}
              {/* border-indigo-500  text-gray-900 */}
              {/* text-gray-500 border-transparent */}
            </div>
          </div>
          <div className="hidden sm:ml-6 sm:flex sm:items-center space-x-4 rtl:space-x-reverse">
            <DarkLightToggle />
            <LangChange />
          </div>
          <div className="-mr-2 flex items-center sm:hidden">
            {/* Mobile menu button */}
            <Disclosure.Button className="inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-gray-500 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-indigo-500">
              <span className="sr-only">Open main menu</span>
              {open ? <XIcon className="block h-6 w-6" aria-hidden="true" /> : <MenuIcon className="block h-6 w-6" aria-hidden="true" />}
            </Disclosure.Button>
          </div>
        </div>
      </div>

      <Disclosure.Panel className="sm:hidden">
        <div className="pt-2 pb-3 space-y-1">
          {Object.keys(sectionsInfo).map(key => {
            const currentSection: SectionInfo = sectionsInfo[key as keyof SectionsInfo];
            return (
              <a
                key={key}
                href={`#${currentSection.id}`}
                className={classNames(
                  isSectionActive(currentSection.id)
                    ? 'bg-indigo-50 border-indigo-500 text-indigo-700 block pl-3 pr-4 py-2 border-l-4 text-base font-medium'
                    : 'border-transparent text-gray-500 hover:bg-gray-50 hover:border-gray-300 hover:text-gray-700 block pl-3 pr-4 py-2 border-l-4 text-base font-medium',
                  'block pl-3 pr-4 py-2 border-l-4 text-base font-medium',
                )}
              >
                {currentSection.title}
              </a>
            );
          })}
        </div>
        <div className="pt-4 p-3 border-t text-palette-light-primary border-gray-200 space-x-5 rtl:space-x-reverse flex items-center">
          <ContactMobile />
        </div>
        <div className="pt-4 p-3 border-t border-gray-200 space-x-5 rtl:space-x-reverse flex items-center">
          <DarkLightToggle />
          <LangChange />
        </div>
      </Disclosure.Panel>
    </>
  );
};
