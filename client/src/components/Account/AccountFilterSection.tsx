import React from 'react'
import styled from 'styled-components'
import AccountFilterItem from './AccountFilterItem'

export type AccountFilterSectionProps = {
  filters: string[]
}

function AccountFilterSection({ filters }: AccountFilterSectionProps) {
  return (
    <Block>
      {filters.map((filter) => (
        <AccountFilterItem name={filter} />
      ))}
    </Block>
  )
}

export default AccountFilterSection

const Block = styled.div`
  padding: 0 16px 16px 16px;
  display: flex;
`
