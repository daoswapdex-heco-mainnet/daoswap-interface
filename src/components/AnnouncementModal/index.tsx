import React from 'react'
import styled from 'styled-components'
import Modal from '../Modal'
import { Text } from 'rebass'
import { CloseIcon } from '../../theme/components'
import { RowBetween } from '../Row'
import { AutoColumn } from '../Column'
import { useAnnouncementInfoToggle, useAnnouncementInfoVisible } from '../../state/announcement/hooks'
import { useTranslation } from 'react-i18next'

const Wrapper = styled.div`
  width: 100%;
  max-width: 420px;
  overflow-y: auto;
`
const Section = styled(AutoColumn)`
  padding: 24px;
`

const StyledLink = styled.a`
  text-decoration: none;
  cursor: pointer;
  color: ${({ theme }) => theme.primary1};
  font-weight: 500;

  :hover {
    text-decoration: underline;
  }

  :focus {
    outline: none;
    text-decoration: underline;
  }

  :active {
    text-decoration: none;
  }
`

function ConfirmationContent({ onDismiss }: { onDismiss: () => void }) {
  const { t } = useTranslation()

  return (
    <Wrapper>
      <Section>
        <RowBetween>
          <Text fontWeight={500} fontSize={16}>
            {t('Announcement')}
          </Text>
          <CloseIcon onClick={onDismiss} />
        </RowBetween>
        <AutoColumn gap="auto" justify={'start'}>
          <Text fontWeight={500} fontSize={14} margin={10}>
            {t('1, Hash and Competition Mining.')}
            <Text fontWeight={500} fontSize={14} margin={10}>
              {t('The 4th period of Arithmetic and Competitive Mining has ended on January 7, 2022 at 11#58;00.')}
            </Text>
            <Text fontWeight={500} fontSize={14} margin={10}>
              {t('Statistical period#58; December 24, 2021 11#58;00 to January 7, 2022 11#58;00.')}
            </Text>
            <Text fontWeight={500} fontSize={14} margin={10}>
              {t('Statistics#58; Liquidity mining pool, number of single coin pledges (60%).')}
            </Text>
            <Text fontWeight={500} fontSize={14} margin={10}>
              {t('The reward has been issued on January 9th, 2022, please visit the official website to check.')}
            </Text>
            <Text fontWeight={500} fontSize={14} margin={10}>
              {t(
                'The 5th period of counting and competitive mining has started on January 7, 2022 at 11#58;00 and will end on January 21, 2022 at 11#58;00.'
              )}
            </Text>
            <Text fontWeight={500} fontSize={14} margin={10}>
              {t('empty info for cn 1')}
            </Text>
            <Text fontWeight={500} fontSize={14} margin={10}>
              {t('empty info for cn 2')}
            </Text>
          </Text>
          <Text fontWeight={500} fontSize={14} margin={10}>
            {t('2, Fee share')}
            <Text fontWeight={500} fontSize={14} margin={10}>
              {t('For the first fee share, the rewarded pairs are#58;')}
              <Text fontWeight={500} fontSize={14} margin={10}>
                {t('USDT/DAO')}
              </Text>
              <Text fontWeight={500} fontSize={14} margin={10}>
                {t('USDT/HFIL')}
              </Text>
              <Text fontWeight={500} fontSize={14} margin={10}>
                {t('USDT/ETH')}
              </Text>
            </Text>
            <Text fontWeight={500} fontSize={14} margin={10}>
              {t(
                'The total value of USDT is 23,798, which will be distributed to all current pledged one-year planetary/stellar nodes.'
              )}
            </Text>
            <Text fontWeight={500} fontSize={14} margin={10}>
              {t('empty info for cn 3')}
            </Text>
            <Text fontWeight={500} fontSize={14} margin={10}>
              {t('Pick up address#58;')}{' '}
              <StyledLink href={'https://fee.heco.daoswap.cc'}>https://fee.heco.daoswap.cc</StyledLink>
            </Text>
          </Text>
          {/* <Text fontWeight={500} fontSize={14} margin={10}>
            {t(
              '3, Phase 3 liquidity mining officially starts&#58; Time&#58; December 27, 2021, 11&#58;00 am to January 10, 2022, 11&#58;00 am'
            )}
            <Text fontWeight={500} fontSize={14} margin={10}>
              {t(
                'Mining pools&#58; USDT-DAO, USDT-ETH, USDT-HFIL, USDT-HT, USDT-UNI, USDT-MDX, USDT-HBCH, USDT-HLTC, USDT-MANA, USDT-DOT, USDT-LINK'
              )}
            </Text>
            <Text fontWeight={500} fontSize={14} margin={10}>
              {t(
                'Note&#58; If you have not yet submitted your LPs for historical mining, you can submit them on the "Closed" page and then transfer them to the new liquidity mining pool.'
              )}
            </Text>
          </Text> */}
          {/* <Text fontWeight={500} fontSize={14} margin={10}>
            {t('2, About the node description&#58;')}
            <Text fontWeight={500} fontSize={14} margin={10}>
              {t(
                '1, The status of planetary and stellar nodes will be determined by the number of DAO/USDT pool liquidity certificates (LPs) held.'
              )}
            </Text>
            <Text fontWeight={500} fontSize={14} margin={10}>
              {t('2, Planetary nodes need >=1000 LP and Stellar nodes need >=10000 LP.')}
            </Text>
            <Text fontWeight={500} fontSize={14} margin={10}>
              {t(
                '3, the above criteria is valid within DAO price <= 30U, when >= 30U after the community vote to decide (whether to consider reducing the LP value criteria).'
              )}
            </Text>
          </Text> */}
          {/* <Text fontWeight={500} fontSize={14} margin={10}>
            {t('4, Hash and competitive mining.')}
            <Text fontWeight={500} fontSize={14} margin={10}>
              {t('The 3rd period of Hash and Competitive Mining has ended on December 24, 2021 at 11#58;00.')}
            </Text>
            <Text fontWeight={500} fontSize={14} margin={10}>
              {t('The statistical period is#58; December 10, 2021 11#58;00 to December 24, 2021 11#58;00.')}
            </Text>
            <Text fontWeight={500} fontSize={14} margin={10}>
              {t('The reward has been issued on Dec 26th, 2021, please visit the official website to check.')}
            </Text>
          </Text>
          <Text fontWeight={500} fontSize={14} margin={10}>
            {t(
              'The 4th period of hash power and competitive mining has started on December 24, 2021 11#58;00 and will end on January 7, 2022 11#58;00.'
            )}
          </Text>
          <Text fontWeight={500} fontSize={14} margin={10}>
            {t(
              'The added part of the arithmetic value is calculated at 200%, and the unincreased or reduced arithmetic power is still counted at 100% unchanged.'
            )}
          </Text> */}
        </AutoColumn>
      </Section>
    </Wrapper>
  )
}

export default function AnnouncementModal() {
  const toggleAnnouncementInfo = useAnnouncementInfoToggle()
  const showAnnouncementInfo = useAnnouncementInfoVisible()

  return (
    <Modal isOpen={!showAnnouncementInfo} onDismiss={toggleAnnouncementInfo} maxHeight={90}>
      <ConfirmationContent onDismiss={toggleAnnouncementInfo} />
    </Modal>
  )
}
