export interface InputCodeProps {
  value: number | null
  length: number
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  onChange: (...event: any[]) => void
}
