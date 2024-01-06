import { StyledAuthorizationBackgroundWrapper } from '.'
import background from './authorization-background.svg'

export const AuthorizationBackground: React.FC = () => {
  return (
    <StyledAuthorizationBackgroundWrapper>
      <img className="background" alt="Background" src={background} />
    </StyledAuthorizationBackgroundWrapper>
  )
}
