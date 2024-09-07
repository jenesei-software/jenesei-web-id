import { Button, Stack, Typography, useAppContext, useCookie } from '@jenesei-software/jenesei-ui-react'
import { queryKeys, useGetSSOLogout, useGetSSOProfile } from '@jenesei-software/jenesei-web-id-api'
import { useEffect } from 'react'

import { queryClient } from '@core/query'

export function UserProfile() {
  const { changePreview } = useAppContext()
  const { removeCookieValue } = useCookie()
  const { data, isLoading } = useGetSSOProfile({ retry: false })
  const { mutate: mutateGetSSOLogout } = useGetSSOLogout({
    onMutate: () => {
      removeCookieValue('auth_status')
    },
    onSuccess: () => {
      Promise.all([
        queryClient.invalidateQueries({
          queryKey: [queryKeys.sso.profile],
        }),
      ])
    },
    onError: () => {
      console.log('error')
    },
  })

  useEffect(() => {
    console.log(data)
    changePreview({ isShow: isLoading })
  }, [changePreview, data, isLoading])
  return (
    <Stack gap="10px" alignItems="center" flexDirection="column">
      <Typography variant="h5">{data?.nickname.toString()}</Typography>
      <Button onClick={mutateGetSSOLogout} genre={'gray'} size={'small'}>
        Logout
      </Button>
    </Stack>
  )
}
