import { format } from 'date-fns'
import { Locale } from 'date-fns'

interface MonthsTranslationFunction {
  (language: Locale): { value: number; label: string }[]
}

export const getMonthsTranslation: MonthsTranslationFunction = (language) => {
  const allMonths = Array.from({ length: 12 }, (_, index) => index)
  const translatedMonths = allMonths.map((monthIndex) => ({
    value: monthIndex,
    label: format(new Date(2000, monthIndex, 1), 'LLLL', { locale: language }),
  }))

  return translatedMonths
}
