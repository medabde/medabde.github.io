import useSectionsInfo from '../../../content/_sectionsInfo';
import Container from '../../global/Container';

const WhatIDoSection = () => {
  const { whatIDo } = useSectionsInfo();

  return (
    <Container title={whatIDo.title} id={whatIDo.id}>
      <div>hello this is what i do</div>
    </Container>
  );
};

export default WhatIDoSection;
