import { FormResetPassword } from '@jenesei-software/jenesei-ui-react'
import { useNavigate } from '@tanstack/react-router'

export function AuthResetPassword() {
  const navigate = useNavigate()

  return (
    <>
      <FormResetPassword
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
