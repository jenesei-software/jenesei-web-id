import React from "react";
import { ButtonBorderProps, ButtonBorderWrapper } from ".";
import { FC } from "react";
import { StyledInterSB16 } from "@styles/fonts/inter";

export const ButtonBorder: FC<ButtonBorderProps> = React.memo(
  (props) => {
    return (
      <ButtonBorderWrapper type={props.type}>
        <StyledInterSB16>{props.title}</StyledInterSB16>
      </ButtonBorderWrapper>
    );
  },
  (prevProps, nextProps) => {
    return prevProps.title === nextProps.title;
  }
);
