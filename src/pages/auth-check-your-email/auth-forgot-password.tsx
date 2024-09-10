import { FormCheckYourEmail } from '@jenesei-software/jenesei-ui-react'
import { useNavigate } from '@tanstack/react-router'

export function AuthCheckYourEmail() {
  const navigate = useNavigate()

  return (
    <>
      <FormCheckYourEmail
        width="500px"
        onBack={() => navigate({ to: '/auth/sign-in' })}
        isError={false}
        isLoading={false}
        onRestore={() => {}}
        email={'test@gmail.com'}
      />
    </>
  )
}
