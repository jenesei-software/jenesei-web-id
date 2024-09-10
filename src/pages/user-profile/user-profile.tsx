import {
  Button,
  ModuleProfile,
  ModuleResource,
  ModuleSession,
  Stack,
  useAppContext,
} from '@jenesei-software/jenesei-ui-react'
import {
  queryKeys,
  useDeleteSessionTerminate,
  useGetSSOLogout,
  useGetSSOProfile,
} from '@jenesei-software/jenesei-web-id-api'
import { useEffect } from 'react'

import { queryClient } from '@core/query'

export function UserProfile() {
  const { changeTitle, historyTitle, changePreview } = useAppContext()
  const { data: dataProfile } = useGetSSOProfile({ retry: false })

  const { mutate: mutateGetSSOLogout } = useGetSSOLogout({
    onMutate: () => {
      changePreview({ isShow: true })
    },
    onSuccess: () => {
      Promise.all([
        queryClient.invalidateQueries({
          queryKey: [queryKeys.sso.profile],
        }),
      ])
    },
    onError: () => {
      changePreview({ isShow: false })
      console.log('error')
    },
  })

  const { mutate: mutateDeleteSessionTerminate } = useDeleteSessionTerminate({
    onSuccess: () => {
      Promise.all([
        queryClient.invalidateQueries({
          queryKey: [queryKeys.sso.profile],
        }),
        queryClient.invalidateQueries({
          queryKey: [queryKeys.session.all],
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
    <Stack maxW="600px" w="100%" gap="50px" alignItems="stretch" flexDirection="column">
      <ModuleProfile />
      <ModuleResource />
      <ModuleSession
        onDeleteSession={(sessionId, isCurrent) =>
          isCurrent ? mutateGetSSOLogout({}) : mutateDeleteSessionTerminate({ path: { sessionId: sessionId } })
        }
      />
      <Button onClick={mutateGetSSOLogout} genre={'gray'} size={'small'}>
        Logout
      </Button>
    </Stack>
  )
}
