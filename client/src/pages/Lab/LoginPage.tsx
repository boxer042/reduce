import React, { useCallback, useEffect } from 'react'
import GoogleLoginButton from '../../components/GoogleLoginButton/GoogleLoginButton'
import Modal from '../../foundations/Modal/Modal'
import styled from 'styled-components'
import RouteModal from '../../foundations/RouteModal/RouteModal'
import { useHistory } from 'react-router'
import useModal from '../../hooks/useModal'

export type LoginPageProps = {}

function LoginPage({}: LoginPageProps) {
  const { isOpenModal, setIsOpenModal, onClose } = useModal()
  const history = useHistory()
  // const onClose = (e: any) => {
  //   e.preventDefault()
  //   window.setTimeout(() => {
  //     history.goBack()
  //   }, 500)
  // }
  return (
    <RouteModal onClose={onClose}>
      <LoginBlock>
        <h3>Hello, Manager</h3>
        <div className="button-block">
          <GoogleLoginButton />
        </div>
      </LoginBlock>
    </RouteModal>
  )
}

export default LoginPage

const LoginBlock = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
  h3 {
    font-size: 24px;
    text-align: center;
  }
  .button-block {
    width: 100%;
  }
`
