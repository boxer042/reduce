import React, { useEffect, useState } from 'react'
import styled, { css } from 'styled-components'
import GoogleLoginButton from '../GoogleLoginButton/GoogleLoginButton'
import { BiX } from 'react-icons/bi'
import transitions from './../../lib/transitions/transitions'

export type SignInMadalProps = {
  onClose(): void
  visible: boolean
}

function SignInMadal({ onClose, visible }: SignInMadalProps) {
  const [animate, setAnimate] = useState(false)
  const [localVisible, setLocalVisible] = useState(visible)

  useEffect(() => {
    // visible 값이 true -> false 가 되는 것을 감지
    if (localVisible && !visible) {
      setAnimate(true)
      setTimeout(() => setAnimate(false), 250)
    }
    setLocalVisible(visible)
  }, [localVisible, visible])

  if (!animate && !localVisible) return null
  return (
    <>
      <Overlay />
      <CenterBlock>
        <WhiteBox visible={visible}>
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
  left: 100vw - 768px;
  top: 0;
  max-width: 768px;
  width: 100vw;
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
  justify-content: center;
  align-items: flex-end;
  display: flex;
  z-index: 40;
`
const WhiteBox = styled.div<{ visible: boolean }>`
  position: relative;
  max-width: 768px;
  width: 100vw;
  min-height: 40%;
  background: #fff;
  border-top-left-radius: 16px;
  border-top-right-radius: 16px;
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
  animation: ${transitions.slideUp} 0.3s forwards ease-out;
  ${(props) =>
    props.visible === false &&
    css`
      animation: ${transitions.slideDown} 0.2s forwards ease-out;
    `}
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
