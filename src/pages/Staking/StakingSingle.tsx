import React from 'react'
import { AutoColumn } from '../../components/Column'
import styled from 'styled-components'
import { TYPE } from '../../theme'
import { RowBetween } from '../../components/Row'
import { CardSection, DataCard, CardNoise, CardBGImage } from '../../components/earnHistory/styled'
import { useTranslation } from 'react-i18next'
import PoolCard from '../../components/staking/PoolCardForSingle'
import { NodeTabs } from '../../components/NavigationTabs/node'
import { useActiveWeb3React } from '../../hooks'

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

export default function StakingSingle() {
  const { t } = useTranslation()
  const { account } = useActiveWeb3React()

  // TODO: is display staking rewards info list for specical address
  const whiteList = [
    '0x7d3dE024dEB70741c6Dfa0FaD57775A47C227AE2',
    '0x3DdcFc89B4DD2b33d9a8Ca0F60180527E9810D4B',
    '0x9b1d0c9c1aE96011776e6786b4Efe884665918D2',
    '0xa9bB710996d6ed61B83a5EAB583bAe683199c2de'
  ]
  const inWhiteList = whiteList.filter(item => item === account)

  const stakingList: any[] =
    inWhiteList.length <= 0
      ? []
      : [
          {
            period: 1,
            name: 'StakingDAOPeriod1',
            capAmount: 1000000,
            apr: 60,
            aprDAO: 30,
            aprDST: 30
          }
        ]

  return (
    <PageWrapper gap="lg" justify="center">
      <TopSection gap="md">
        <DataCard>
          <CardBGImage />
          <CardNoise />
          <CardSection>
            <AutoColumn gap="md">
              <RowBetween>
                <TYPE.white fontWeight={600}>{t('DAO Staking')}</TYPE.white>
              </RowBetween>
              <RowBetween>
                <TYPE.white fontSize={9}>{t('Stake DAO to get extra income.')}</TYPE.white>
              </RowBetween>
            </AutoColumn>
          </CardSection>
          <CardBGImage />
          <CardNoise />
        </DataCard>
      </TopSection>

      <NodeTabs active={'staking-single'} />

      <AutoColumn gap="lg" style={{ width: '100%', maxWidth: '720px' }}>
        <PoolSection>
          {stakingList?.length === 0
            ? t('No active staking')
            : stakingList?.map(stakingInfo => {
                return <PoolCard key={stakingInfo.period} stakingInfo={stakingInfo} />
              })}
        </PoolSection>
      </AutoColumn>
    </PageWrapper>
  )
}
