import React from 'react'
import styled from 'styled-components'
import openColor from './../../lib/openColor'

export type AccountFilterItemProps = {
  name: string
}

function AccountFilterItem({ name }: AccountFilterItemProps) {
  return <Block>{name}</Block>
}

export default AccountFilterItem

const Block = styled.div`
  padding: 8px 16px 8px 16px;
  border-radius: 32px;
  background-color: ${openColor.gray[2]};
  cursor: pointer;
  color: ${openColor.gray[6]};
  & + & {
    margin-left: 8px;
  }
`
