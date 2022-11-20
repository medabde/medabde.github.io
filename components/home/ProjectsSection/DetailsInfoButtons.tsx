import ButtonBase from '../../global/ButtonBase';

type Props = {
  viewCode?: string;
  viewProject?: string;
};

const DetailsInfoButton = ({ viewCode, viewProject }: Props) => {
  return (
    <div className="flex space-x-3 rtl:space-x-reverse mt-4">
      {viewCode && (
        <ButtonBase link={viewCode} type="info">
          hlooo
        </ButtonBase>
      )}
      {viewProject && (
        <ButtonBase link={viewProject} type="info">
          hlooo
        </ButtonBase>
      )}
    </div>
  );
};
export default DetailsInfoButton;
