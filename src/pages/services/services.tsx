import {
  ServicesButtonsContainer,
  ServicesListContainer,
  ServicesListItemContainer,
  ServicesProps,
  ServicesTitleContainer,
  ServicesWrapper,
} from '.'
import { LogoServices } from '@assets/icons/logo-services'
import { ButtonBorder } from '@components/button-border'
import { useProfile } from '@providers/profile-provider'
import {
  StyledInterB32,
  StyledInterR16,
  StyledInterSB14,
} from '@styles/fonts/inter'
import { FC } from 'react'
import { useTranslation } from 'react-i18next'

export const Services: FC<ServicesProps> = () => {
  const { t } = useTranslation('services')
  const { setProfile } = useProfile()

  return (
    <ServicesWrapper>
      <ServicesTitleContainer>
        <StyledInterB32>
          {t('pages.title-big') + 'Stassie Strone'}
        </StyledInterB32>
        <StyledInterR16>{t('pages.title-min')}</StyledInterR16>
      </ServicesTitleContainer>
      <ServicesListContainer>
        <ServicesListContainer>
          <ServicesListItemContainer
            target="_blank"
            rel="noopener noreferrer"
            to={'https://task.jenesei.ru'}
          >
            <LogoServices.JeneseiTask.Default />
            <StyledInterSB14>{t('JeneseiTask.name')}</StyledInterSB14>
          </ServicesListItemContainer>
          <ServicesListItemContainer to={`/user`}>
            <LogoServices.JeneseiID.Default />
            <StyledInterSB14>{t('JeneseiID.name')}</StyledInterSB14>
          </ServicesListItemContainer>
        </ServicesListContainer>
      </ServicesListContainer>
      <ServicesButtonsContainer>
        <ButtonBorder
          type="border"
          title={t('pages.logout')}
          onClick={() => setProfile({ id: '' })}
        />
      </ServicesButtonsContainer>
    </ServicesWrapper>
  )
}
