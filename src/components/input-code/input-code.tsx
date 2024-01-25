import { InputCodeProps, InputWrapper, StyledPatternFormat } from '.'

export const InputCode = (props: InputCodeProps) => {
  function createPattern(length: number, value: string) {
    const realLength = length * 2 - 1
    const patternArray: (string | number)[] = Array.from(
      { length: realLength },
      (_, index) => (index % 2 === 0 ? value : ' ')
    )
    return patternArray.join('')
  }
  return (
    <InputWrapper>
      <StyledPatternFormat
        value={props.value}
        onValueChange={({ floatValue }) => props.onChange(floatValue ?? null)}
        format={createPattern(props.length, '#')}
        placeholder={createPattern(props.length, '_')}
        mask="_"
      />
    </InputWrapper>
  )
}
