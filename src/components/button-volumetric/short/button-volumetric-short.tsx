import { FC } from "react";
import { IButtonVolumetricShort, ButtonVolumetricShortContainer, ButtonVolumetricShortWrapper } from ".";
import React from "react";

export const ButtonVolumetricShort: FC<IButtonVolumetricShort> = React.memo(
  (props) => {
    return (
      <ButtonVolumetricShortWrapper>
        <ButtonVolumetricShortContainer onClick={props.onClick} checked={props.checked}>
          {props.icon()}
        </ButtonVolumetricShortContainer>
      </ButtonVolumetricShortWrapper>
    );
  },
  (prevProps, nextProps) => {
    return prevProps.checked === nextProps.checked;
  }
);
