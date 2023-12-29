import { VolumetricButtonShort } from "@components/volumetric-button/short";
import { HeaderWrapper } from ".";
import { IconCurved } from "@assets/icons/icon-curved/icon-curved";

export const Header: React.FC = () => {
  return (
    <HeaderWrapper>
      <VolumetricButtonShort isActive={false} icon={IconCurved.Search} />
      <VolumetricButtonShort isActive={true} icon={IconCurved.Search} />

    </HeaderWrapper>
  );
};
