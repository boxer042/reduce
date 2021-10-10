import React, { useEffect, useState } from 'react'
import { fade, slide } from '../../lib/transitions/transitionGroup'
import styled from 'styled-components'
import { CSSTransition } from 'react-transition-group'
import { useHistory } from 'react-router'
import { BiX } from 'react-icons/bi'

export type RouteModalProps = {
  children: React.ReactNode
  onClose?(e: any): void
  zIndex?: number
}

function RouteModal({ children, onClose, zIndex = 40 }: RouteModalProps) {
  const [visible, setVisible] = useState(false)
  const overlayRef = React.useRef(null)
  const bottomSheetRef = React.useRef(null)
  const history = useHistory()

  useEffect(() => {
    setVisible(true)
  }, [])

  const handleClose = (e: any) => {
    setVisible(false)
  }
  return (
    <>
      <CSSTransition
        in={visible}
        nodeRef={overlayRef}
        timeout={{ enter: 250, exit: 200 }}
        unmountOnExit
        classNames="fade"
        onExited={() => history.goBack()}
      >
        <Overlay ref={overlayRef} />
      </CSSTransition>
      <CSSTransition
        in={visible}
        nodeRef={bottomSheetRef}
        timeout={{ enter: 250, exit: 200 }}
        unmountOnExit
        classNames="bottom"
      >
        <BottomSheet zIndex={zIndex} ref={bottomSheetRef}>
          <Close onClick={handleClose}>
            <BiX />
          </Close>
          {children}
        </BottomSheet>
      </CSSTransition>
    </>
  )
}

export default RouteModal

const Overlay = styled.div`
  position: fixed;
  top: 0;
  left: 100vw - 768px;
  background: rgba(0, 0, 0, 0.5);
  width: 100vw;
  max-width: 768px;
  height: 100%;
  z-index: 10;
  ${fade()}
`
const BottomSheet = styled.div<{ zIndex: number }>`
  position: fixed;
  bottom: 0;
  background: #fff;
  max-width: 768px;
  width: 100vw;
  max-height: 70%;
  border-top-left-radius: 16px;
  border-top-right-radius: 16px;
  padding: 48px 24px 70px 24px;
  z-index: ${(props) => props.zIndex};
  ${slide()}
`

const Close = styled.div`
  position: absolute;
  cursor: pointer;
  top: 24px;
  right: 24px;
  font-size: 32px;
  display: inline-flex;
`
