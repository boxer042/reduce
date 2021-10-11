import styled from 'styled-components'
import openColor from './../../lib/openColor'
import AccountDivision from './AccountDivision'
import AccountListItem from './AccountListItem'

export type AccountListSectionProps = {}

function AccountListSection({}: AccountListSectionProps) {
  const renderItem = (number: number) => {
    const render = number
    const result = []
    for (let i = 0; i < render; i++) {
      result.push(
        <AccountListItem
          name="이재우"
          contact="010-5553-4367"
          divisions={['개인', '구매']}
        />
      )
    }
    return result
  }

  return <Container>{renderItem(20)}</Container>
}

export default AccountListSection

const Container = styled.div``
