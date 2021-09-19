import React, { useState } from 'react'

export type useAutocompleteProps = {}

function useAutocomplete() {
  const [selectedIndex, setSelectedIndex] = useState(-1)
  const goUp = () => {
    setSelectedIndex(selectedIndex - 1)
  }
  const goDown = () => {
    setSelectedIndex(selectedIndex + 1)
  }
  return {
    selectedIndex,
    goUp,
    goDown,
  }
}

export default useAutocomplete
