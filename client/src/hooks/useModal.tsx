import React, { useCallback, useState } from 'react'
import { useHistory } from 'react-router'

export type useModalProps = {}

function useModal() {
  const history = useHistory()
  const [isOpenModal, setIsOpenModal] = useState(false)

  const onClose = useCallback(() => {
    // history.goBack()
    setIsOpenModal(false)
  }, [])

  return {
    isOpenModal,
    setIsOpenModal,
    onClose,
  }
}

export default useModal
