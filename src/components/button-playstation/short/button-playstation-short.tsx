import { FC } from "react";
import { IButtonPlaystationShort, ButtonPlaystationShortWrapper } from ".";
import React from "react";

export const ButtonPlaystationShort: FC<IButtonPlaystationShort> = React.memo(
  (props) => {
    return <ButtonPlaystationShortWrapper checked={props.checked}>{props.icon()}</ButtonPlaystationShortWrapper>;
  },
  (prevProps, nextProps) => {
    return prevProps.checked === nextProps.checked;
  }
);
