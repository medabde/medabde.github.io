import useMe from '../../content/_me';
import GithubIcon from './icons/GithubIcon';
import LinkedInIcon from './icons/LinkedInIcon';

const ContactMobile = () => {
  const { github, linkedIn } = useMe();
  return (
    <div className="flex space-x-4 rtl:flex-row-reverse">
      <a href={github} target="_blank" rel="noreferrer">
        <GithubIcon classNames="h-7 w-7" />
      </a>
      <a href={linkedIn} target="_blank" rel="noreferrer">
        <LinkedInIcon classNames="h-7 w-7" />
      </a>
    </div>
  );
};
export default ContactMobile;
