import React, { useCallback, useEffect, useRef } from 'react'
import { FcGoogle } from 'react-icons/fc'
import styled from 'styled-components'
import openColor from '../../lib/openColor'

export type GoogleLoginButtonProps = {}

function GoogleLoginButton({}: GoogleLoginButtonProps) {
  const buttonRef = useRef<HTMLButtonElement>(null)

  const onSuccess = useCallback((googleUser: any) => {
    console.log(googleUser)
  }, [])

  const onFailure = useCallback((e: any) => {}, [])

  useEffect(() => {
    window.gapi.load('auth2', function () {
      const auth2 = window.gapi.auth2.init({
        client_id:
          '776507555025-pmue89ta15dvgre537u1ge9l2ee450g1.apps.googleusercontent.com',
        cookiepolicy: 'single_host_origin',
        // ux_mode: 'redirect',
        // redirect_uri: 'http://localhost:3000',
      })
      auth2.attachClickHandler(buttonRef.current, {}, (googleUser: any) => {
        onSuccess(googleUser)
      })
    })
  }, [onSuccess])

  return (
    <GoogleStyle ref={buttonRef} id="google-login-button">
      <FcGoogle />
      Sign in with Google
    </GoogleStyle>
  )
}

export default GoogleLoginButton

const GoogleStyle = styled.button`
  border: none;
  outline: none;
  background: none;
  padding: 0;
  width: 100%;
  display: inline-flex;
  height: 54px;
  background: white;
  align-items: center;
  justify-content: center;
  padding: 12px 16px;
  font-size: 16px;
  cursor: pointer;
  transition: all ease-in 0.125s;
  border-radius: 7px;
  border: 1px solid ${openColor.gray[3]};
  svg {
    font-size: 24px;
    margin-right: 8px;
  }
  &:hover {
    box-shadow: 0px 0.25rem 0.5rem rgb(0 0 0 / 11%);
  }
`
