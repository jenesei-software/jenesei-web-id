import { Button, Icon, Stack, Typography, useAppContext } from '@jenesei-software/jenesei-ui-react'
import { queryKeys, useGetResourceAll, useGetSSOLogout, useGetSSOProfile } from '@jenesei-software/jenesei-web-id-api'
import { useEffect } from 'react'

import { queryClient } from '@core/query'

export function UserProfile() {
  const { changeTitle, historyTitle } = useAppContext()
  const { data: dataProfile } = useGetSSOProfile({ retry: false })
  const { data: dataResourceAll } = useGetResourceAll({ retry: false })

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
    if (dataProfile?.nickname) changeTitle(dataProfile?.nickname)
    return () => historyTitle(0)
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [dataProfile])
  return (
    <Stack gap="10px" alignItems="center" flexDirection="column">
      <Typography variant="h5">{dataProfile?.nickname.toString()}</Typography>
      <Stack flexDirection="column" alignItems="flex-start" gap="16px">
        {dataResourceAll?.map((e) => (
          <Stack flexDirection="row" alignItems="center" justifyContent="space-around" gap="10px">
            <Typography>{e.resourceName}</Typography>
            {e.isActive ? (
              <Icon type="curved" size="medium" primaryColor="green100" name="TickSquare" />
            ) : (
              <Icon type="curved" size="medium" primaryColor="black40" name="ArrowRightCircle" />
            )}
          </Stack>
        ))}
      </Stack>
      <Button onClick={mutateGetSSOLogout} genre={'gray'} size={'small'}>
        Logout
      </Button>
    </Stack>
  )
}
