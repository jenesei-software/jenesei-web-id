export interface UseInputCardsProps {
  value: CardProps[]
}

export interface CardProps {
  cardIssuer: string
  cardIcon: JSX.Element
  cardNumberLast4: string
  cardNetwork: JSX.Element
  expirationDate: string
  colorBackground?: string
  colorFont?: string
}
