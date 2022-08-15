import useSectionsInfo from '../../../content/_sectionsInfo';
import Container from '../../global/Container';
import Card from './Card';

const WhatIDoSection = () => {
  const { whatIDo } = useSectionsInfo();

  return (
    <Container title={whatIDo.title} id={whatIDo.id}>
      <div className="pb-16 space-y-9">
        <Card />
        <Card />
        <Card />
        <Card />
      </div>
    </Container>
  );
};

export default WhatIDoSection;
