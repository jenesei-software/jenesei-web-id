import {
  ServicesButtonsContainer,
  ServicesListContainer,
  ServicesListItemButton,
  ServicesListItemContainer,
  ServicesProps,
  ServicesTitleContainer,
} from '.'
import { LogoServices } from '@assets/icons/logo-services'
import { ButtonBorderLong } from '@components/button-border/long'
import { useAxios } from '@providers/provider-axios'
import { FrameAuthorizationWrapper } from '@styles/components'
import { SpanInterB32, SpanInterR16, SpanInterSB14 } from 'jenesei-react-ui'
import { FC } from 'react'
import { useTranslation } from 'react-i18next'
import { Ripple } from 'react-ripple-click'

export const Services: FC<ServicesProps> = (props) => {
  const { t } = useTranslation('services')
  const { handleLogout } = useAxios()

  return (
    <FrameAuthorizationWrapper>
      <ServicesTitleContainer>
        <SpanInterB32>
          {t('pages.title-big') + props.dataProfile?.username}
        </SpanInterB32>
        <SpanInterR16>{t('pages.title-min')}</SpanInterR16>
      </ServicesTitleContainer>
      <ServicesListContainer>
        <ServicesListContainer>
          <ServicesListItemContainer to={`/user/personal-info`}>
            <ServicesListItemButton>
              <Ripple />
              <LogoServices.JeneseiID.Default />
              <SpanInterSB14>{t('JeneseiID.name')}</SpanInterSB14>
            </ServicesListItemButton>
          </ServicesListItemContainer>
          <ServicesListItemContainer
            target="_blank"
            rel="noopener noreferrer"
            to={'https://weather.jenesei.ru/home'}
          >
            <ServicesListItemButton>
              <Ripple />
              <LogoServices.JeneseiWeather.Default />
              <SpanInterSB14>{t('JeneseiWeather.name')}</SpanInterSB14>
            </ServicesListItemButton>
          </ServicesListItemContainer>
          <ServicesListItemContainer
            target="_blank"
            rel="noopener noreferrer"
            to={'https://task.jenesei.ru'}
          >
            <ServicesListItemButton>
              <Ripple />
              <LogoServices.JeneseiTask.Default />
              <SpanInterSB14>{t('JeneseiTask.name')}</SpanInterSB14>
            </ServicesListItemButton>
          </ServicesListItemContainer>
          <ServicesListItemContainer
            target="_blank"
            rel="noopener noreferrer"
            to={'https://businessroulette.ru/'}
          >
            <ServicesListItemButton>
              <Ripple />
              <LogoServices.BusinessRoulette.Default />
              <SpanInterSB14>{t('BusinessRoulette.name')}</SpanInterSB14>
            </ServicesListItemButton>
          </ServicesListItemContainer>
        </ServicesListContainer>
      </ServicesListContainer>
      <ServicesButtonsContainer>
        <ButtonBorderLong
          type="border"
          title={t('pages.logout')}
          onClick={handleLogout}
        />
      </ServicesButtonsContainer>
    </FrameAuthorizationWrapper>
  )
}
