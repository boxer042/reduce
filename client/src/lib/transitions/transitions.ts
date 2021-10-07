import { keyframes } from 'styled-components'

const slideUp = keyframes`
  from {
    transform: translateY(100%)
  }
  to {
    transform: translateY(0px)
  }
`

const slideDown = keyframes`
  from {
    transform: translateY(0px)
  }
  to {
    transform: translateY(100%)
  }
`

const fadeIn = keyframes`
  from {
    opacity: 0
  }
  to {
    opacity: 1
  }
`

const fadeOut = keyframes`
  from {
    opacity: 1
  }
  to {
    opacity: 0
  }
`

const transitions = {
  slideUp,
  slideDown,
  fadeIn,
  fadeOut,
}

export default transitions
