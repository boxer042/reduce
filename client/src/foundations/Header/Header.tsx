import React from 'react'
import styled from 'styled-components'
import { BiX } from 'react-icons/bi'
import { useHistory } from 'react-router-dom'

export type HeaderProps = {
  title?: string
}

function Header({ title }: HeaderProps) {
  const history = useHistory()

  return (
    <Block>
      <Close onClick={() => history.goBack()}>
        <BiX />
      </Close>
      <Title>{title}</Title>
    </Block>
  )
}

export default Header

const Block = styled.div`
  position: fixed;
  max-width: 768px;
  width: 100%;
  height: 56px;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 0 16px;
  background: #fff;
  /* box-shadow: 0px 0px 16px rgba(0, 0, 0, 0.125); */
`
const Title = styled.h3``
const Close = styled.div`
  position: absolute;
  cursor: pointer;
  left: 16px;
  top: 16px;
  font-size: 24px;
`
