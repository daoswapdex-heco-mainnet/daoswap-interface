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
`
const Section = styled(AutoColumn)`
  padding: 24px;
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
          {/* <Text fontWeight={500} fontSize={14} margin={10}>
            {t(
              '1, The first liquidity mining will end on November 23, 2021 at 11&#58;00 am, the following pools will be moved to "Closed", please take out your liquidity LP in time to participate in the second liquidity mining. The second phase of liquidity mining will start on November 26, 2021 at 11&#58;00 am.'
            )}
            <br />
            USDT/DAO，USDT/ETH，USDT/HFIL，USDT/HT。
          </Text> */}
          <Text fontWeight={500} fontSize={14} margin={10}>
            {t(
              '1, The first liquidity mining will end on November 23, 2021 at 11&#58;00 am, after which the pool will be moved to the "Closed" page.'
            )}
            <Text fontWeight={500} fontSize={14} margin={10}>
              {t('(1), Please withdraw your liquidity LP in time to participate in the second liquidity mining.')}
            </Text>
            <Text fontWeight={500} fontSize={14} margin={10}>
              {t(
                '(2), The first phase of liquidity mining (5k-10k DAO) and competitive mining (50k-100k DST) will be opened at the same time as the first mining session ends.'
              )}
            </Text>
            <Text fontWeight={500} fontSize={14} margin={10}>
              {t('(3), The second phase of liquidity mining will start on November 26, 2021 at 11am.')}
            </Text>
            <br />
            USDT/DAO，USDT/ETH，USDT/HFIL，USDT/HT。
          </Text>
          <Text fontWeight={500} fontSize={14} margin={10}>
            2, {t('About Node')}:
            <Text fontWeight={500} fontSize={14} margin={10}>
              {t(
                '1, Planet and Stellar node status will be determined by the number of DAO/USDT pool liquidity provider certificates (LP) held.'
              )}
            </Text>
            <Text fontWeight={500} fontSize={14} margin={10}>
              {t('2, Planet nodes need >=1000 LP and Stellar need >=10000 LP.')}
            </Text>
            <Text fontWeight={500} fontSize={14} margin={10}>
              {t(
                '3, The above criteria are valid within DAO price <= 30USDT, after >= 30USDT it will be decided by community vote (whether to consider lowering LP value criteria).'
              )}
            </Text>
          </Text>
          <Text fontWeight={500} fontSize={14} margin={10}>
            {t('Aurora CAC, effective on November 17, 2021.')}
          </Text>
          {/* <Text fontWeight={500} fontSize={14} margin={10}>
            {t('2, Hash mining and competitive mining open simultaneously with liquidity mining for.')}
            <br />
            {t(
              'Become a planetary/stellar node, invite more people to participate in liquidity mining to accumulate arithmetic power, and then participate in arithmetic mining when liquidity mining ends.'
            )}
            <br />
            {t(
              'Note&#58; Hash and competitive mining will be counted within 3 business days after the liquidity mining ends (after 11am on November 23rd). After the end of liquidity mining, liquidity LP needs to be taken out from the reward pool in order to be used as valid arithmetic. So please prompt the invited community members to take out the liquidity LP instantly to avoid missing the arithmetic mining.'
            )}
          </Text>
          <Text fontWeight={500} fontSize={14} margin={10}>
            {t(
              '3, DAOSWAP trading paris increased to&#58; DAO, ETH, UNI, FIL, HT, MDEX, DOGE, SHIB, ZEC, ZKS etc. Now you can buy the above tokens directly through USDT and DAO.'
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
