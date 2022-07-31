import ContactSticky from '../components/global/ContactSticky';
import ContactSection from '../components/home/ContactSection';
import ExperiencesSection from '../components/home/ExperiencesSection';
import HeroSection from '../components/home/HeroSection';
import ProjectsSection from '../components/home/ProjectsSection';
import SkillsSection from '../components/home/SkillsSection';
import WhatIDoSection from '../components/home/WhatIDoSection';

const home = () => {
  return (
    <section className="relative">
      <ContactSticky />
      <HeroSection />
      <WhatIDoSection />
      <ExperiencesSection />
      <ProjectsSection />
      <SkillsSection />
      <ContactSection />
    </section>
  );
};

export default home;
