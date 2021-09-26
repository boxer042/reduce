import React, { useState } from 'react'
import { NavLink } from 'react-router-dom'
import styled from 'styled-components'
import openColor from './../../lib/openColor'
import { BiStore, BiBrush, BiUser } from 'react-icons/bi'
import { FcGoogle } from 'react-icons/fc'
import SignInMadal from '../SignInModal/SignInMadal'

/**
 * TODO
 * 1. 구글 로그인 버튼, 구글 로그인시 유저 현재 정보 담은 아이콘 나오기
 * 2.
 */

export type NavigationProps = {}

function Navigation({}: NavigationProps) {
  const [signInModalVisible, setSignInModalVisible] = useState(false)
  const onClickLogin = () => {
    setSignInModalVisible(true)
  }
  return (
    <>
      <Block>
        <Nav>
          <Item to="/workspaces">
            <Icon>
              <BiBrush />
            </Icon>
            <Label>Workspaces</Label>
          </Item>
          <Item
            to="/login"
            onClick={(e) => {
              e.preventDefault()
              onClickLogin()
            }}
          >
            <Icon>
              <BiUser />
            </Icon>
            <Label>Sign In</Label>
          </Item>
          <Item to="/sales">
            <Icon>
              <BiStore />
            </Icon>
            <Label>Sales</Label>
          </Item>
        </Nav>
      </Block>
      {signInModalVisible && (
        <SignInMadal onClose={() => setSignInModalVisible(false)} />
      )}
    </>
  )
}

export default Navigation

const Block = styled.div`
  position: fixed;
  left: 0;
  bottom: 0;
  height: 56px;
  display: flex;
  justify-content: center;
  width: 100%;
  z-index: 30;
`
const Nav = styled.div`
  max-width: 768px;
  width: 100%;
  height: 100%;
  background: #fff;
  border-top: 1px solid ${openColor.gray[3]};
  border-bottom: 1px solid ${openColor.gray[3]};
  display: flex;
  align-items: center;
  justify-content: space-around;
  padding: 0 16px;
`
const Item = styled(NavLink)`
  text-decoration: none;
  cursor: pointer;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 100px;
  height: 100%;
  color: ${openColor.gray[7]};

  &:hover,
  &.active {
    color: ${openColor.blue[9]};
  }
`

const Icon = styled.div`
  font-size: 24px;
  margin-bottom: -5px;
`
const Label = styled.div`
  font-size: 12px;
`
