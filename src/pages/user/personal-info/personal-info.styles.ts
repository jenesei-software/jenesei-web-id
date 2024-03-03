import Avatar from 'react-avatar'
import styled from 'styled-components'

export const StyledAvatar = styled(Avatar)`
  @media (max-width: ${(props) => props.theme.screens.tablet.width}) {
  }
`
StyledAvatar.defaultProps = {
  size: '140px',
  round: '140px',
  email: 'cyrilstrone@gmail.com',
  githubHandle: 'cyrilstrone',
}
