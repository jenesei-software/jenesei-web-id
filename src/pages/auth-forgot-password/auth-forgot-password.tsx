import { FormForgotPassword } from '@jenesei-software/jenesei-ui-react'
import { useNavigate } from '@tanstack/react-router'

export function AuthForgotPassword() {
  const navigate = useNavigate()

  return (
    <>
      <FormForgotPassword
        width="500px"
        onSubmit={async (props) => {
          console.log(props)
        }}
        onBack={() => navigate({ to: '/auth/sign-in' })}
        isError={false}
        isLoading={false}
        onRestore={() => {}}
      />
    </>
  )
}
