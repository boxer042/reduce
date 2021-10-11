import React, { useCallback, useEffect, useState } from 'react'
import { BiPlus, BiX } from 'react-icons/bi'
import { Link } from 'react-router-dom'
import { SetterOrUpdater } from 'recoil'
import styled from 'styled-components'
import openColor from '../../lib/openColor'

export type AccountCreateSectionProps = {
  keyword: string
  setKeyword: SetterOrUpdater<string>
  onClick?(): void
}

function AccountCreateSection({
  keyword,
  setKeyword,
  onClick,
}: AccountCreateSectionProps) {
  const [filter, setFilter] = useState('')
  useEffect(() => {
    if (isNaN(parseInt(keyword))) {
      console.log('숫자')
      return
    }
  }, [keyword])

  return (
    <Block>
      <CreateIcon to="" onClick={onClick}>
        <BiPlus />
      </CreateIcon>
      <KeywordBlock
        to={`/workspaces/account/create?${filter}=${keyword}`}
        onClick={onClick}
      >
        "{keyword}" 연락처 만들기
      </KeywordBlock>
      <ClearButton onClick={() => setKeyword('')}>
        <BiX />
      </ClearButton>
    </Block>
  )
}

export default AccountCreateSection

const Block = styled.div`
  position: relative;
  padding: 8px 16px;
  background-color: ${openColor.gray[1]};
  /* border-bottom: 1px solid ${openColor.gray[2]}; */
  display: flex;
  align-items: center;
  line-height: 16px;
  position: fixed;
  width: 100%;
  max-width: 768px;
  z-index: 50;
`
const CreateIcon = styled(Link)`
  min-width: 28px;
  min-height: 28px;
  border-radius: 50%;
  border: 1px solid ${openColor.gray[6]};
  display: flex;
  justify-content: center;
  align-items: center;
  margin-left: 10px;
  background-color: #fff;
  cursor: pointer;
  svg {
    color: ${openColor.gray[6]};
    font-size: 18px;
  }
`
const KeywordBlock = styled(Link)`
  margin-left: 24px;
  text-decoration: none;
  color: ${openColor.gray[9]};
  cursor: pointer;
`
const ClearButton = styled.button`
  border: none;
  outline: none;
  background: none;
  cursor: pointer;
  display: flex;
  justify-content: center;
  align-items: center;
  position: absolute;
  right: 39px;

  svg {
    color: ${openColor.gray[6]};
    font-size: 22px;
    &:hover {
      color: ${openColor.gray[9]};
    }
  }
`
