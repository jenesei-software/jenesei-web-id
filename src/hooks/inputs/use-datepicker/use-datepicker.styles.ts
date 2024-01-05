import styled from "styled-components";
import DatePicker from "react-datepicker";

export const UseDatePickerWrapper = styled.div`
  width: 100%;
  & .react-datepicker-wrapper {
    width: 100%;
  }
  & .react-datepicker-popper[data-placement^="top"] .react-datepicker__triangle::after,
  .react-datepicker-popper[data-placement^="bottom"] .react-datepicker__triangle::after {
    left: -30px;
    border-bottom-color: ${(props) => props.theme.colors.default.white};
    box-shadow: ${(props) => props.theme.inputs.default.effects.boxShadow};
  }
  & .react-datepicker-popper[data-placement^="bottom"] .react-datepicker__triangle::before {
    left: -30px;
    border-bottom-color: ${(props) => props.theme.colors.gray["d3d3d3"]};
    box-shadow: ${(props) => props.theme.inputs.default.effects.boxShadow};
  }
  & .react-datepicker__day-names,
  & .react-datepicker__week {
    display: flex;
    justify-content: space-around;
  }
  & .react-datepicker {
    border-radius: 24px;
    background: ${(props) => props.theme.colors.default.white};
    font-family: Inter;
    font-size: 14px;
    font-style: normal;
    font-weight: 500;
    line-height: normal;
    border: 1px solid ${(props) => props.theme.colors.gray["d3d3d3"]};
    box-shadow: ${(props) => props.theme.inputs.default.effects.boxShadow};
    color: ${(props) => (props.color ? props.color : props.theme.colors.gray["737373"])};
  }
  & .react-datepicker__header {
    user-select: none;
    background-color: transparent;
  }
  & .react-datepicker__day {
    user-select: none;
    display: inline-flex;
    width: 34px;
    height: 34px;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    &:hover {
      border-radius: 100px;
      background: ${(props) => props.theme.colors.product["20"]};
    }
  }
  & .react-datepicker__day--selected {
    border-radius: 100px;
    background: ${(props) => props.theme.colors.product["100"]};
  }
  & .react-datepicker__day--today,
  & .react-datepicker__day--keyboard-selected {
    border-radius: 100px;
    background: ${(props) => props.theme.colors.product["20"]};
  }
  & .react-datepicker__day-name {
    display: inline-flex;
    width: 34px;
    height: 34px;
    flex-direction: column;
    justify-content: center;
    align-items: center;

    font-family: Inter;
    font-size: 12px;
    font-style: normal;
    font-weight: 500;
    line-height: normal;
    color: #000000cc;

    font-family: Inter;
    font-size: 12px;
    font-style: normal;
    font-weight: 500;
    line-height: normal;

    color: ${(props) => (props.color ? props.color : props.theme.colors.black["80"])};
  }
`;

export const StyledDatePickerHeader = styled.div`
  display: flex;
  justify-content: space-between;
  padding: 0px 8px;
  align-items: center;
  user-select: none;
  min-width: 300px;
  gap: 8px;
`;

export const StyledDatePicker = styled(DatePicker)`
  display: flex;
  padding: 16px 20px;
  align-items: center;
  gap: 10px;
  align-self: stretch;

  resize: none;
  overflow: hidden;
  outline: none;
  height: 44px;
  min-height: 44px;
  max-height: 44px;
  font-family: Inter;
  font-size: 16px;
  font-style: normal;
  font-weight: 400;
  line-height: 12px;
  box-sizing: border-box;
  width: 100%;
  border-radius: 6px;
  border: none;

  outline: 1px solid ${(props) => props.theme.colors.black["60"]};
  background: ${(props) => props.theme.colors.default.white};
  color: ${(props) => props.theme.colors.black["80"]};
  box-shadow: ${(props) => props.theme.inputs.default.effects.boxShadow};

  &::placeholder {
    color: ${(props) => props.theme.colors.black["40"]};
    font-weight: 700;
    opacity: 1;
  }

  &::-ms-input-placeholder {
    font-weight: 700;
    color: ${(props) => props.theme.colors.black["40"]};
  }
  &:focus,
  &:active,
  &:focus-visible {
    outline: 1px solid ${(props) => props.theme.colors.black["100"]};
  }
  &*,
  &*::before,
  &*::after {
    box-sizing: border-box;
  }
`;
