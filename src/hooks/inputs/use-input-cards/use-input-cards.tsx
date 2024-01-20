import {
  UseInputCardsProps,
  CardProps,
  UseInputCard,
  UseInputCardTop,
  UseInputCardTopCardIssuerLogo,
  UseInputCardTopCardIssuerName,
  UseInputCardButton,
  UseInputCardButtonLeft,
  UseInputCardButtonLeftCardNumberLast4,
  UseInputCardButtonLeftExpirationDate,
  UseInputCardButtonRight,
  UseInputCardButtonRightCardNetwork,
} from '.'
import { useState, useMemo } from 'react'
import { Ripple } from 'react-ripple-click'

export const useInputCards = (props: UseInputCardsProps) => {
  const [value] = useState<CardProps[]>(props.value)

  const Cards = useMemo(
    () => (
      <>
        {value.map((e: CardProps, id: number) => (
          <UseInputCard {...e} key={id}>
            <Ripple />
            <UseInputCardTop>
              <UseInputCardTopCardIssuerLogo>
                {e.cardIcon}
              </UseInputCardTopCardIssuerLogo>
              <UseInputCardTopCardIssuerName>
                {e.cardIssuer}
              </UseInputCardTopCardIssuerName>
            </UseInputCardTop>
            <UseInputCardButton>
              <UseInputCardButtonLeft>
                <UseInputCardButtonLeftCardNumberLast4>
                  {'●●●● ' + e.cardNumberLast4}
                </UseInputCardButtonLeftCardNumberLast4>
                <UseInputCardButtonLeftExpirationDate>
                  {String(e.expirationDate)}
                </UseInputCardButtonLeftExpirationDate>
              </UseInputCardButtonLeft>
              <UseInputCardButtonRight>
                <UseInputCardButtonRightCardNetwork>
                  {e.cardNetwork}
                </UseInputCardButtonRightCardNetwork>
              </UseInputCardButtonRight>
            </UseInputCardButton>
          </UseInputCard>
        ))}
      </>
    ),
    [value]
  )

  return { Cards }
}
