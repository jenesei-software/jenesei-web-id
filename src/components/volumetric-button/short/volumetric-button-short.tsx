import { FC } from "react";
import { IVolumetricButtonShort, VolumetricButtonShortContainer, VolumetricButtonShortWrapper } from ".";

export const VolumetricButtonShort: FC<IVolumetricButtonShort> = (props) => {
  return (
    <VolumetricButtonShortWrapper>
      <VolumetricButtonShortContainer isActive={props.isActive}>{props.icon()}</VolumetricButtonShortContainer>
    </VolumetricButtonShortWrapper>
  );
};
