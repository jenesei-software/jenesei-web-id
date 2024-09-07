import { Button, Stack, Typography, useAppContext } from '@jenesei-software/jenesei-ui-react'
import { queryKeys, useGetSSOLogout, useGetSSOProfile } from '@jenesei-software/jenesei-web-id-api'
import { useEffect } from 'react'

import { queryClient } from '@core/query'

export function UserProfile() {
  const { changeTitle, historyTitle } = useAppContext()
  const { data, isLoading } = useGetSSOProfile({ retry: false })
  const { mutate: mutateGetSSOLogout } = useGetSSOLogout({
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
    if (data?.nickname) changeTitle(data?.nickname)
    return () => historyTitle(0)
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [data, isLoading])
  return (
    <Stack gap="10px" alignItems="center" flexDirection="column">
      <Typography variant="h5">{data?.nickname.toString()}</Typography>
      <Button onClick={mutateGetSSOLogout} genre={'gray'} size={'small'}>
        Logout
      </Button>
    </Stack>
  )
}
