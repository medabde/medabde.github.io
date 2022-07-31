import Container from '../global/Container';
import ScrollReveal from '../transitions/ScrollReveal';

const HeroSection = () => {
  return (
    <Container mode="darker" id="herosection">
      <section className="min-h-screen w-full flex items-center relative">
        <div className="text-palette-light-text text-lg space-y-3 max-w-xl">
          <ScrollReveal delay={500}>
            <span className="text-white">Hi, I&apos;m </span>
          </ScrollReveal>
          <ScrollReveal delay={800}>
            <h1 className="text-5xl font-bold text-white">Mohamed ABDELLAOUI</h1>
          </ScrollReveal>
          <ScrollReveal delay={1000}>
            <h3 className="text-2xl">I&apos;m a Software Engineer at Clearlink.</h3>
          </ScrollReveal>
          <ScrollReveal delay={1200}>
            <p>I&apos;m currently focused on expanding my experience designing and developing high performing websites.</p>
          </ScrollReveal>
        </div>
      </section>
    </Container>
  );
};

export default HeroSection;
