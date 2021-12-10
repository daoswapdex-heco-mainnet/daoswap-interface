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
              '1, Phase 2 liquidity mining officially begins at Period&#58; November 26, 2021, 11&#58;00 am to December 24, 2021, 11&#58;00 am'
            )}
            <Text fontWeight={500} fontSize={14} margin={10}>
              {t('Mining Pools&#58; USDT-DAO, USDT-ETH, USDT-HFIL, USDT-HT, USDT-UNI, USDT-MDX, USDT-HBCH, USDT-HLTC')}
            </Text>
            <Text fontWeight={500} fontSize={14} margin={10}>
              {t(
                'Note&#58; If you have not yet submitted your historical LPs, you can do so on the "Ended" page and then transfer them to a new liquidity pool.'
              )}
            </Text>
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
            {t('3, Hash and Competitive Mining')}:
            <Text fontWeight={500} fontSize={14} margin={10}>
              {t('The 2nd period of Arithmetic and Competitive Mining has ended on December 10, 2021 at 11&#58;00.')}
              <Text fontWeight={500} fontSize={14} margin={10}>
                {t('The statistic period is&#58; November 26, 2021 11&#58;00 to December 10, 2021 11&#58;00.')}
              </Text>
              <Text fontWeight={500} fontSize={14} margin={10}>
                {t('The reward will be issued on December 12th, 2021, please visit the official website to check.')}
              </Text>
            </Text>
            <Text fontWeight={500} fontSize={14} margin={10}>
              {t(
                'The 3rd period of hash and Competition Mining has started on December 10, 2021 11&#58;00 and will end on December 24, 2021 11&#58;00.'
              )}
            </Text>
            <Text fontWeight={500} fontSize={14} margin={10}>
              {t(
                'Starting from the 2nd period of Arithmetic Mining, the Arithmetic value of the added part will be calculated at 200% according to the counted Arithmetic value, and the count of unchanged or decreased Arithmetic will remain unchanged at 100%.'
              )}
            </Text>
          </Text>
          <Text fontWeight={500} fontSize={14} margin={10}>
            {t('Aurora CAC, effective on November 17, 2021.')}
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
