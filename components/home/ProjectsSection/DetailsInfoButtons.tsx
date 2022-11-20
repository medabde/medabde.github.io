import { useTranslation } from 'react-i18next';
import ButtonBase from '../../global/ButtonBase';

type Props = {
  viewCode?: string;
  viewProject?: string;
};

const DetailsInfoButton = ({ viewCode, viewProject }: Props) => {
  const { t } = useTranslation();
  return (
    <div className="flex space-x-3 rtl:space-x-reverse mt-4">
      {viewCode && (
        <ButtonBase link={viewCode} type="info">
          {t('view-code')}
        </ButtonBase>
      )}
      {viewProject && (
        <ButtonBase link={viewProject} type="info">
          {t('view-website')}
        </ButtonBase>
      )}
    </div>
  );
};
export default DetailsInfoButton;
