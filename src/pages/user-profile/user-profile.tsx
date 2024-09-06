import { Button, Stack, useCookie } from '@jenesei-software/jenesei-ui-react'
import {
  getSSOProfile,
  ssoApi,
  useAxiosWebId,
} from '@jenesei-software/jenesei-web-id-api'
import { useQuery } from '@tanstack/react-query'

export function UserProfile() {
  const { removeCookieValue } = useCookie()

  const { data, refetch } = useQuery({
    ...getSSOProfile(),
  })
  const { axiosInstance } = useAxiosWebId()
  return (
    <Stack gap="10px" alignItems="center" flexDirection="column">
      {(data as any)?.nickname}
      <Button
        onClick={() =>
          ssoApi(axiosInstance)
            .getSSOLogout()
            .then(() => {
              removeCookieValue('auth_status')
              refetch()
            })
        }
        genre={'gray'}
        size={'small'}
      >
        Logout
      </Button>
    </Stack>
  )
}
