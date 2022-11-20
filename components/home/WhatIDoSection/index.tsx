import useSectionsInfo from '../../../content/_sectionsInfo';
import useWhatIDo from '../../../content/_whatIdo';
import { classNames } from '../../../utils/helpers';
import Container from '../../global/Container';
import Card from './Card';

const WhatIDoSection = () => {
  const { whatIDo } = useSectionsInfo();
  const whatIDoArray = useWhatIDo();

  return (
    <Container title={whatIDo.title} id={whatIDo.id}>
      <div className="pb-16 grid lg:grid-cols-2 gap-2">
        {whatIDoArray.map(({ whatIdo, explanation, bulletPoints }, i) => (
          <div key={i} className={classNames(whatIDoArray.length % 2 === 1 && i === whatIDoArray.length - 1 ? 'lg:col-span-2' : 'col-span-1')}>
            <Card title={whatIdo} body={explanation} bulletPoints={bulletPoints} />
          </div>
        ))}
      </div>
    </Container>
  );
};

export default WhatIDoSection;
