import { useTranslation } from 'react-i18next';
import ContactMobile from '../../components/global/ContactMobile';
import Container from '../../components/global/Container';
import useMe from '../../content/_me';

const Footer = () => {
  const { t } = useTranslation();
  const { email } = useMe();
  return (
    <Container mode="darker">
      <div className="text-white flex-col sm:flex xl:hidden items-center justify-center pt-2 hidden">
        <ContactMobile />
        <span>{email}</span>
      </div>
      <p className="py-4 text-center text-white font-semibold text-sm">
        {t('copyright')}{' '}
        <a className="underline" href="https://github.com/medabde/medabde.github.io/tree/v2.0" target="_blank" rel="noreferrer">
          {t('github')}
        </a>
      </p>
    </Container>
  );
};

export default Footer;
