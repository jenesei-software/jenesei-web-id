export type LayoutRootRouteSearch = {
  pastResource?: 'jenesei_id'
}
export const validateLayoutRootRouteSearch = (
  search: Record<keyof LayoutRootRouteSearch, unknown>,
): LayoutRootRouteSearch => {
  const isPastResource = (
    value: unknown,
  ): value is LayoutRootRouteSearch['pastResource'] => value === 'jenesei_id'

  const searchParams: LayoutRootRouteSearch = {
    pastResource: isPastResource(search?.pastResource)
      ? search.pastResource
      : undefined,
  }

  return searchParams
}
