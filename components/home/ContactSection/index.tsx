import useSectionsInfo from '../../../content/_sectionsInfo';
import Container from '../../global/Container';

const ContactSection = () => {
  const { contact } = useSectionsInfo();

  return (
    <Container title={contact.title} id={contact.id}>
      <div className="pb-14">Contact me bro</div>
    </Container>
  );
};
export default ContactSection;
