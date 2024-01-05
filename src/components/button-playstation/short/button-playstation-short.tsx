import React from 'react';
import { ButtonPlaystationShortProps, ButtonPlaystationShortWrapper } from '.';
import { FC } from 'react';

export const ButtonPlaystationShort: FC<ButtonPlaystationShortProps> = React.memo(
  (props) => {
    return <ButtonPlaystationShortWrapper checked={props.checked}>{props.icon()}</ButtonPlaystationShortWrapper>;
  },
  (prevProps, nextProps) => {
    return prevProps.checked === nextProps.checked;
  }
);
