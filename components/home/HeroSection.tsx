import { useTranslation } from 'react-i18next';
import useMe from '../../content/_me';
import Container from '../global/Container';
import ScrollReveal from '../transitions/ScrollReveal';

const HeroSection = () => {
  const { t } = useTranslation();
  const { name, description, about, resume } = useMe();

  return (
    <Container mode="darker" id="herosection">
      <section className="min-h-screen w-full flex items-center relative">
        <div className="text-gray-300 text-lg space-y-3 max-w-3xl mt-16">
          <ScrollReveal delay={500}>
            <span className="text-white">{t('hi-im')}</span>
          </ScrollReveal>
          <ScrollReveal delay={800}>
            <h1 className="text-5xl font-bold text-white">{name}</h1>
          </ScrollReveal>
          <ScrollReveal delay={1000}>
            <h3 className="text-2xl">{description}</h3>
          </ScrollReveal>
          <ScrollReveal delay={1200}>
            <p dangerouslySetInnerHTML={{ __html: about }} />
          </ScrollReveal>
          <ScrollReveal delay={1400} className="mt-10">
            <a href={resume} target="_blank" rel="noreferrer" className="inline-block md:mt-16 my-10 hover:bg-gray-100 hover:bg-opacity-10 text-base bg-transparent border border-gray-400 rounded-full py-1.5 px-5 text-md font-medium">
              {t('view-resume')}
            </a>
          </ScrollReveal>
        </div>
      </section>
    </Container>
  );
};

export default HeroSection;
