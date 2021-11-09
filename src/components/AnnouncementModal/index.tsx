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
          <Text fontWeight={500} fontSize={14} margin={10}>
            {t(
              '1, The first liquidity mining will be opened from November 9, 2021 at 11&#58;00 AM to November 23, 2021 at 11&#58;00 AM for the following mining pools.'
            )}
            <br />
            USDT/DAO，USDT/ETH，USDT/HFIL，USDT/HT。
          </Text>
          <Text fontWeight={500} fontSize={14} margin={10}>
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
          </Text>
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
