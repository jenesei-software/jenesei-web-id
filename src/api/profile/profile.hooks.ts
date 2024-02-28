import { getProfileUsernameRequest, profileApi } from '.'
import { queryKeys } from '@core/query'
import { queryOptions } from '@tanstack/react-query'

/****************************************** Profile API *************************************************/
/*
 * Получить профиль
 */
export const getProfileUsername = (props: getProfileUsernameRequest) =>
  queryOptions({
    queryKey: [queryKeys.profile.profile],
    queryFn: () => profileApi.getProfileUsername(props).then((res) => res.data),
  })
