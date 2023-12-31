import { FC } from "react";
import { IButtonBorder, ButtonBorderWrapper } from ".";
import React from "react";
import { StyledInterSB16 } from "@styles/fonts/inter";

export const ButtonBorder: FC<IButtonBorder> = React.memo(
  (props) => {
    return (
      <ButtonBorderWrapper styles={props.styles}>
        <StyledInterSB16>{props.title}</StyledInterSB16>
      </ButtonBorderWrapper>
    );
  },
  (prevProps, nextProps) => {
    return prevProps.title === nextProps.title;
  }
);
