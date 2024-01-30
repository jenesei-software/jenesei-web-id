import { AuthorizationBackgroundWrapper } from '.'
import background from './authorization-background.svg'

export const AuthorizationBackground: React.FC = () => {
  return (
    <AuthorizationBackgroundWrapper>
      <img className="background" alt="Background" src={background} />
    </AuthorizationBackgroundWrapper>
  )
}
