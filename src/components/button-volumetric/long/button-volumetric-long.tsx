import { FC } from "react";
import { IButtonVolumetricLong, ButtonVolumetricLongContainer, ButtonVolumetricLongWrapper } from ".";
import { StyledInterSB14 } from "@styles/fonts/inter";
import { theme } from "@styles/theme";
import React from "react";

export const ButtonVolumetricLong: FC<IButtonVolumetricLong> = React.memo(
  (props) => {
    return (
      <ButtonVolumetricLongWrapper>
        <ButtonVolumetricLongContainer onClick={props.onClick} checked={props.checked}>
          {props.icon && props.icon()}
          {props.title && <StyledInterSB14 color={theme.colors.black[60]}>{props.title}</StyledInterSB14>}
        </ButtonVolumetricLongContainer>
      </ButtonVolumetricLongWrapper>
    );
  },
  (prevProps, nextProps) => {
    return prevProps.checked === nextProps.checked && prevProps.title === nextProps.title;
  }
);
