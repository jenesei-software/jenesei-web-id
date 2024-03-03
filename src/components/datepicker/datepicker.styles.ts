import {
  FontInterB14,
  FontInterM12,
  FontInterM14,
  ThemeCloudInputString,
} from 'jenesei-react-ui'
import DatePicker from 'react-datepicker'
import styled from 'styled-components'

export const DatePickerWrapper = styled.div`
  width: 100%;
  & .react-datepicker-wrapper {
    width: 100%;
  }
  &
    .react-datepicker-popper[data-placement^='bottom']
    .react-datepicker__triangle,
  &
    .react-datepicker-popper[data-placement^='top']
    .react-datepicker__triangle {
    &::after {
      left: -30px;
      border-bottom-color: ${(props) => props.theme.colors.white[100]};
      border-top-color: ${(props) => props.theme.colors.white[100]};
      box-shadow: ${(props) => props.theme.effects.input.default};
      bottom: 0px;
      display: none;
    }
    &::before {
      left: -30px;
      border-bottom-color: ${(props) => props.theme.colors.gray['d3d3d3']};
      box-shadow: ${(props) => props.theme.effects.input.default};
      bottom: 0px;
      display: none;
    }
  }
  & .react-datepicker__day--disabled {
    opacity: 0.4;
  }
  & .react-datepicker__day-names,
  & .react-datepicker__week {
    display: flex;
    justify-content: space-around;
  }
  & .react-datepicker {
    ${FontInterM14};
    border-radius: 24px;
    background: ${(props) => props.theme.colors.white[100]};
    border: 1px solid ${(props) => props.theme.colors.gray['d3d3d3']};
    box-shadow: ${(props) => props.theme.effects.input.default};
    color: ${(props) => props.theme.colors.gray['737373']};
  }
  & .react-datepicker__header {
    user-select: none;
    background-color: transparent;
  }
  & .react-datepicker__day,
  & .react-datepicker__day--keyboard-selected {
    ${FontInterM14};
    user-select: none;
    display: inline-flex;
    width: 34px;
    height: 34px;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    background: transparent;
    &:hover {
      border-radius: 100px;
      background: ${(props) => props.theme.colors.product['20']};
    }
  }
  & .react-datepicker__day--selected {
    ${FontInterB14};
    border-radius: 100px;
    color: ${(props) => props.theme.colors.white[100]};
    background: ${(props) => props.theme.colors.product['100']};
    &:hover {
      color: ${(props) => props.theme.colors.black['80']};
    }
  }
  & .react-datepicker__day--today {
    border-radius: 100px;
    background: ${(props) => props.theme.colors.product['20']};
  }
  & .react-datepicker__day-name {
    ${FontInterM12};
    display: inline-flex;
    width: 34px;
    height: 34px;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    color: ${(props) => props.theme.colors.black['80']};
  }
`

export const DatePickerHeaderWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  padding: 0px 8px;
  align-items: center;
  user-select: none;
  min-width: 300px;
  gap: 8px;
`
export const StyledDatePicker = styled(DatePicker)`
  ${ThemeCloudInputString};
  display: flex;
`
