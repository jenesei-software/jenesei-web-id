import React from "react";
import { ButtonBigWrapper, ButtonBigProps } from ".";
import { FC } from "react";
import { Ripple } from "react-ripple-click";
import { StyledInterSB16 } from "@styles/fonts/inter";

export const ButtonBig: FC<ButtonBigProps> = React.memo(
  (props) => {
    return (
      <ButtonBigWrapper isIconColor={props.isIconColor} type={props.type}>
        <Ripple />
        {props.icon && props.icon()}
        <StyledInterSB16>{props.title}</StyledInterSB16>
      </ButtonBigWrapper>
    );
  },
  (prevProps, nextProps) => {
    return prevProps.title === nextProps.title;
  }
);
