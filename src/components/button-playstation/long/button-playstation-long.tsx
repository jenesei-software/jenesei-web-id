import React from 'react';
import { ButtonPlaystationLongProps, ButtonPlaystationLongWrapper } from '.';
import { FC, useReducer } from 'react';
import { StyledInterSB14 } from '@styles/fonts/inter';
import { theme } from '@styles/theme';

export const ButtonPlaystationLong: FC<ButtonPlaystationLongProps> = React.memo(
  (props) => {
    const [checked, toggle] = useReducer((checked) => !checked, props.checked);
    return (
      <ButtonPlaystationLongWrapper onClick={toggle} checked={checked}>
        {props.icon && props.icon()}
        {props.title && <StyledInterSB14 color={theme.colors.black[60]}>{props.title}</StyledInterSB14>}
      </ButtonPlaystationLongWrapper>
    );
  },
  (prevProps, nextProps) => {
    return prevProps.checked === nextProps.checked && prevProps.title === nextProps.title;
  }
);
