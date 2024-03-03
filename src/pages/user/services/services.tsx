import {
  ServicesButtonsContainer,
  ServicesListContainer,
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
          <ServicesListItemContainer
            target="_blank"
            rel="noopener noreferrer"
            to={'https://task.jenesei.ru'}
          >
            <LogoServices.JeneseiTask.Default />
            <SpanInterSB14>{t('JeneseiTask.name')}</SpanInterSB14>
          </ServicesListItemContainer>
          <ServicesListItemContainer to={`/user/personal-info`}>
            <LogoServices.JeneseiID.Default />
            <SpanInterSB14>{t('JeneseiID.name')}</SpanInterSB14>
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
