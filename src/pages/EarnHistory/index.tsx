import React from 'react'
import { AutoColumn } from '../../components/Column'
import styled from 'styled-components'
import { TYPE, StyledInternalLink } from '../../theme'
import { ButtonPrimary } from '../../components/Button'
import { RowBetween } from '../../components/Row'
import { CardSection, DataCard, CardNoise, CardBGImage } from './styled'
import { useTranslation } from 'react-i18next'
import { StakeTabs } from '../../components/NavigationTabs/stake'

const PageWrapper = styled(AutoColumn)`
  max-width: 640px;
  width: 100%;
`

const TopSection = styled(AutoColumn)`
  max-width: 720px;
  width: 100%;
`

const PoolSection = styled.div`
  display: grid;
  grid-template-columns: 1fr;
  column-gap: 10px;
  row-gap: 15px;
  width: 100%;
  justify-self: center;
`

export default function Earn() {
  const { t } = useTranslation()

  const DataRow = styled(RowBetween)`
    ${({ theme }) => theme.mediaWidth.upToSmall`
    flex-direction: column;
  `};
  `

  return (
    <PageWrapper gap="lg" justify="center">
      <TopSection gap="md">
        <DataCard>
          <CardBGImage />
          <CardNoise />
          <CardSection>
            <AutoColumn gap="md">
              <RowBetween>
                <TYPE.white fontWeight={600}>Daoswap {t('liquidity mining')}</TYPE.white>
              </RowBetween>
              <RowBetween>
                <TYPE.white fontSize={14}>
                  {t('Deposit your Liquidity Provider tokens to receive DAO, the Daoswap protocol governance token.')}
                </TYPE.white>
              </RowBetween>
            </AutoColumn>
          </CardSection>
          <CardBGImage />
          <CardNoise />
        </DataCard>
      </TopSection>

      <StakeTabs active={'dao-history'} />

      <AutoColumn gap="lg" style={{ width: '100%', maxWidth: '720px' }}>
        <DataRow style={{ alignItems: 'baseline' }}>
          <TYPE.mediumHeader style={{ marginTop: '0.5rem' }}>{t('History Pool')}</TYPE.mediumHeader>
          {/* <TYPE.black fontWeight={400}>按期数倒序</TYPE.black> */}
        </DataRow>

        <PoolSection>
          <StyledInternalLink to={`/dao-history-2`} style={{ width: '100%' }}>
            <ButtonPrimary padding="8px" borderRadius="8px">
              {t('DAO Stake Period')} 2
            </ButtonPrimary>
          </StyledInternalLink>
          <StyledInternalLink to={`/dao-history-1`} style={{ width: '100%' }}>
            <ButtonPrimary padding="8px" borderRadius="8px">
              {t('DAO Stake Period')} 1
            </ButtonPrimary>
          </StyledInternalLink>
        </PoolSection>
      </AutoColumn>
    </PageWrapper>
  )
}
