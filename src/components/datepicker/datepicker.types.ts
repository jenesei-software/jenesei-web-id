export interface DatePickerProps {
  value: Date | null
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  onChange?: (...event: any[]) => void
  placeholder?: string
  maxDate?: Date | null
}
