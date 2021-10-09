import { css } from 'styled-components'

export const fade = (timeout?: number) => css`
  &.fade-enter {
    opacity: 0;
  }
  &.fade-enter-active {
    opacity: 1;
    transition: opacity 250ms;
  }
  &.fade-exit {
    opacity: 1;
  }
  &.fade-exit-active {
    opacity: 0;
    transition: opacity 200ms;
  }
`
export const slide = (timeout?: number) => css`
  &.bottom-enter {
    transform: translateY(100%);
  }
  &.bottom-enter-active {
    transform: translateY(0%);
    transition: transform 250ms;
  }
  &.bottom-exit {
    transform: translateY(0%);
  }
  &.bottom-exit-active {
    transform: translateY(100%);
    transition: transform 200ms;
  }
`
