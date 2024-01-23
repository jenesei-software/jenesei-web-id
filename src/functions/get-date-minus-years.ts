export function getDateMinusYears(years: number): Date | null {
  if (years <= 0) {
    console.error('Please provide a positive number of years.')
    return null
  }

  const currentDate = new Date()
  const resultDate = new Date(
    currentDate.getFullYear() - years,
    currentDate.getMonth(),
    currentDate.getDate()
  )

  return resultDate
}
