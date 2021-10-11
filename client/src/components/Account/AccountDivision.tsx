import React from 'react'
import styled, { FlattenSimpleInterpolation } from 'styled-components'
import useAccountDivisionColor from '../../hooks/useAccountDivisionColor'

export type AccountDivisionProps = {
  name: string
}

function AccountDivision({ name }: AccountDivisionProps) {
  const resultColor = useAccountDivisionColor(name)
  return <Block resultColor={resultColor}>{name}</Block>
}

export default AccountDivision

const Block = styled.div<{ resultColor: FlattenSimpleInterpolation | null }>`
  ${(props) => props.resultColor}
  padding: 1px 6px;
  min-width: 32px;
  border-radius: 16px;
  font-size: 12px;
  display: flex;
  justify-content: center;
  align-items: center;
  & + & {
    margin-left: 6px;
  }
`
