import { createGlobalStyle, css } from 'styled-components'
// import { reset } from 'styled-reset'
import openColor from '../lib/openColor'

const GlobalStyles = createGlobalStyle`${css`
  html,
  body,
  #root {
    height: 100%;
  }
  html {
    box-sizing: border-box;

    * {
      box-sizing: inherit;
    }
  }
  body {
    font-family: -apple-system, BlinkMacSystemFont, 'Helvetica Neue',
      'Apple SD Gothic Neo', 'Malgun Gothic', '맑은 고딕', 나눔고딕,
      'Nanum Gothic', 'Noto Sans KR', 'Noto Sans CJK KR', arial, 돋움, Dotum,
      Tahoma, Geneva, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    margin: 0;
    padding: 0;
    background: ${openColor.gray[2]};
  }
`}`

export default GlobalStyles
