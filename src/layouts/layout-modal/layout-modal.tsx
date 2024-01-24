import { LayoutModalContainer, LayoutModalWrapper } from '.'
import { LayoutModalProps } from './layout-modal.types'
import { useModal } from '@ebay/nice-modal-react'
import { FC, ReactElement } from 'react'
import OutsideClickHandler from 'react-outside-click-handler'

export const LayoutModal: FC<LayoutModalProps> = (
  props
): ReactElement | null => {
  const { visible, hide } = useModal()

  return (
    <LayoutModalWrapper visible={visible}>
      <OutsideClickHandler onOutsideClick={() => hide()}>
        <LayoutModalContainer>{props.children}</LayoutModalContainer>
      </OutsideClickHandler>
    </LayoutModalWrapper>
  )
}
