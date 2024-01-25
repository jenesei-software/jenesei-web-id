import { StyledDefaultInput } from '@components/input'
import { PatternFormat } from 'react-number-format'
import styled from 'styled-components'

export const InputWrapper = styled.div`
  width: 100%;
  position: relative;
  display: flex;
  align-items: center;
`

export const StyledPatternFormat = styled(PatternFormat)`
  ${StyledDefaultInput};
`
