import { ButtonBigWrapper, ButtonBigProps } from '.'
import { StyledInterSB16 } from '@styles/fonts/inter'
import { theme } from '@styles/theme'
import React, { FC } from 'react'
import ReactLoading from 'react-loading'
import { Ripple } from 'react-ripple-click'

export const ButtonBig: FC<ButtonBigProps> = React.memo(
  (props) => {
    return (
      <ButtonBigWrapper
        loading={props.loading}
        disabled={props.disabled}
        onClick={props.onClick}
        isIconColor={props.isIconColor}
        variant={props.variant}
        type={props.type}
      >
        <Ripple />
        {props.loading && (
          <ReactLoading
            color={
              props.variant == 'product'
                ? theme.colors.default.white
                : theme.colors.product[100]
            }
            type={'cylon'}
            height={'30px'}
            width={'30px'}
          />
        )}
        {!props.loading && props.icon && props.icon()}
        <StyledInterSB16>{props.title}</StyledInterSB16>
      </ButtonBigWrapper>
    )
  },
  (prevProps, nextProps) => {
    return (
      prevProps.title === nextProps.title &&
      prevProps.disabled === nextProps.disabled &&
      prevProps.loading === nextProps.loading
    )
  }
)
