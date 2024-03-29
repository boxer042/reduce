import React from 'react'
import styled from 'styled-components'

export type TemplateProps = {
  children: React.ReactNode
  header?: React.ReactNode
}

function Template({ children, header }: TemplateProps) {
  return (
    <Block>
      {header}
      <Contents header={header}>{children}</Contents>
    </Block>
  )
}

export default Template

const Block = styled.div`
  height: 100%;
  width: 100%;
  overflow-y: auto;
`

const Contents = styled.div<{ header?: React.ReactNode }>`
  height: 100%;
  padding-top: ${(props) => (props.header ? '72px' : '16px')};
`
