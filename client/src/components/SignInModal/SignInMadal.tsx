import React from 'react'
import styled from 'styled-components'
import GoogleLoginButton from '../GoogleLoginButton/GoogleLoginButton'
import { BiX } from 'react-icons/bi'
import openColor from './../../lib/openColor'

export type SignInMadalProps = {
  onClose(): void
}

function SignInMadal({ onClose }: SignInMadalProps) {
  return (
    <>
      <Overlay />
      <CenterBlock>
        <WhiteBox>
          <Close onClick={onClose}>
            <BiX />
          </Close>
          <h3>Hello, Manager</h3>
          <div className="button-block" onClick={onClose}>
            <GoogleLoginButton />
          </div>
        </WhiteBox>
      </CenterBlock>
    </>
  )
}

export default SignInMadal

const Overlay = styled.div`
  position: fixed;
  left: 0;
  top: 0;
  width: 100%;
  height: 100%;
  background: rgba(0, 0, 0, 0.5);
  z-index: 10;
`
const CenterBlock = styled.div`
  position: fixed;
  width: 100%;
  height: 100%;
  left: 0;
  top: 0;
  align-items: center;
  justify-content: center;
  display: flex;
  z-index: 20;
`
const WhiteBox = styled.div`
  position: relative;
  width: 380px;
  max-width: calc(100vw - 16px);
  background: white;
  border-radius: 16px;
  box-shadow: 0px 1rem 1rem rgba(67, 67, 67, 0.03);
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 48px 24px;
  .button-block {
    width: 256px;
  }
  h3 {
    font-size: 24px;
    text-align: center;
  }
`
const Close = styled.div`
  position: absolute;
  cursor: pointer;
  top: 24px;
  left: 24px;
  font-size: 24px;
  display: flex;
  align-items: center;
  justify-content: center;
`
