import { getSSOProfile } from '@jenesei-software/jenesei-web-id-api'
import { useQuery } from '@tanstack/react-query'

export function UserProfile() {
  const { data } = useQuery({
    ...getSSOProfile(),
  })
  return <>{(data as any)?.nickname}</>
}
