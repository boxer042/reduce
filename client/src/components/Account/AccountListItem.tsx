import React from 'react'
import { BiDetail } from 'react-icons/bi'
import styled from 'styled-components'
import openColor from '../../lib/openColor'
import AccountDivision from './AccountDivision'

export type AccountListItemProps = {
  avatar?: string
  name: string
  contact: string
  divisions: string[]
}

function AccountListItem({
  avatar,
  name,
  contact,
  divisions,
}: AccountListItemProps) {
  return (
    <Block>
      {avatar ? '' : <Avatar>{name.slice(-2)}</Avatar>}
      <ContentBlock>
        <Content>
          <Name>{name}</Name>
          <Contact>{contact}</Contact>
        </Content>
        <Addition>
          {divisions.map((division) => (
            <AccountDivision name={division} />
          ))}
        </Addition>
      </ContentBlock>
      <DetailButton>
        <BiDetail />
      </DetailButton>
    </Block>
  )
}

export default AccountListItem

const Block = styled.div`
  display: flex;
  position: relative;
  width: 100%;
  min-height: 80px;
  align-items: center;
  border-bottom: 1px solid ${openColor.gray[3]};
  padding: 8px 16px 8px 16px;

  &:last-of-type {
    border: none;
  }
`
const Avatar = styled.div`
  border-radius: 50%;
  min-height: 48px;
  min-width: 48px;
  background-color: ${openColor.blue[9]};
  color: #fff;
  font-size: 18px;
  display: flex;
  align-items: center;
  justify-content: center;
`
const ContentBlock = styled.div`
  margin-left: 16px;
`

const Content = styled.div`
  display: flex;
  line-height: 18px;
`

const Addition = styled.div`
  display: flex;
  margin-top: 10px;
`

const Name = styled.div`
  font-size: 18px;
  font-weight: bold;
`
const Contact = styled.div`
  font-size: 16px;
  margin-left: 16px;
`

const DetailButton = styled.button`
  position: absolute;
  right: 16px;
  height: 48px;
  width: 48px;
  border: none;
  outline: none;
  background: none;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  svg {
    font-size: 24px;
    color: ${openColor.gray[3]};
    &:hover {
      color: ${openColor.gray[7]};
    }
  }
`
