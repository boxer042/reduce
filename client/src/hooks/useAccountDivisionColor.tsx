import React from 'react'
import { css } from 'styled-components'
import openColor from './../lib/openColor'

function useAccountDivisionColor(color: string) {
  switch (color) {
    case '개인':
      return css`
        background: ${openColor.indigo[2]};
        color: ${openColor.indigo[9]};
        border: 1px solid ${openColor.indigo[9]};
      `
    case '기업':
      return css``
    case '구매':
      return css`
        background: ${openColor.teal[2]};
        color: ${openColor.teal[9]};
        border: 1px solid ${openColor.teal[9]};
      `
    case '판매':
      return css``
    default:
      return css`
        background: ${openColor.gray[1]};
        color: ${openColor.gray[9]};
        border: 1px solid ${openColor.gray[9]};
      `
  }
}

export default useAccountDivisionColor
