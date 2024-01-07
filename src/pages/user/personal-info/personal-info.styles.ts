import { theme } from '@styles/theme'
import Avatar from 'react-avatar'
import styled from 'styled-components'

export const StyledAvatar = styled(Avatar)`
  @media (max-width: ${theme.size.tablet}) {
  }
`
StyledAvatar.defaultProps = {
  size: '140px',
  round: '140px',
  email: 'cyrilstrone@gmail.com',
  githubHandle: 'cyrilstrone',
}
