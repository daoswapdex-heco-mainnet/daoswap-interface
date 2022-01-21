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
            {t('1, Invitation release#58;')}
            <Text fontWeight={500} fontSize={14} margin={10}>
              {t('Will be available on January 23rd, 2022 at 11#58;00 am.')}
            </Text>
            <Text fontWeight={500} fontSize={14} margin={10}>
              {t('Directly invite planetary stellar to get DST at 20% of pledged LP value.')}
            </Text>
            <Text fontWeight={500} fontSize={14} margin={10}>
              {t(
                'Directly invite single coin DAO pledge, according to 60% of the number of DAO pledge, and invite arithmetic unlock to get DST reward of 20% of LP value.'
              )}
            </Text>
            <Text fontWeight={500} fontSize={14} margin={10}>
              {t(
                "The DST reward for inviting unlocking will be transferred directly to the inviter's wallet address when pledged by the pledging party."
              )}
            </Text>
          </Text>
          <Text fontWeight={500} fontSize={14} margin={10}>
            {t('2, Hask and Competitive Mining#58;')}
            <Text fontWeight={500} fontSize={14} margin={10}>
              {t('Phase 5 of Hask & Competition Mining has ended on January 21, 2022 at 11#58;00.')}
            </Text>
            <Text fontWeight={500} fontSize={14} margin={10}>
              {t(
                'The 6th period of Arithmetic and Competition Mining has started on January 21, 2022 at 11#58;00 and will end on February 4, 2022 at 11#58;00.'
              )}
            </Text>
            <Text fontWeight={500} fontSize={14} margin={10}>
              {t(
                'The number of single coin pledges will also continue to count towards the count. The new part of the arithmetic value is calculated at 200%, and the unincreased or reduced arithmetic remains unchanged at 100% statistics.'
              )}
            </Text>
          </Text>
          <Text fontWeight={500} fontSize={14} margin={10}>
            {t('3, Task 6#58;')}
            <Text fontWeight={500} fontSize={14} margin={10}>
              {t(
                'Starting from the 5th arithmetic power and competition mining, perform task 6#58; reward the number of nodes added within the team according to the team of the node identity wallet address (this node must be pledged for 1 year, not pledged for 1 year will not be added as new. (Also existing Genesis and seed nodes are excluded). '
              )}
            </Text>
            <Text fontWeight={500} fontSize={14} margin={10}>
              {t('For more information, please check#58;')}{' '}
              <StyledLink href={'https://docs.daoswap.cc/jiguangxueyuan/'}>
                https://docs.daoswap.cc/jiguangxueyuan/
              </StyledLink>
            </Text>
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
