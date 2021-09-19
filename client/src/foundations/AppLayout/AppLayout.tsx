import React from 'react'
import styled from 'styled-components'

export type AppLayoutProps = {
  children: React.ReactNode
}

function AppLayout({ children }: AppLayoutProps) {
  return (
    <Layout>
      <Main>{children}</Main>
    </Layout>
  )
}

export default AppLayout

const Layout = styled.div`
  display: flex;
  height: 100%;
  justify-content: center;
`
const Main = styled.div`
  background: #fff;
  max-width: 768px;
  width: 100%;
  height: 100%;
  overflow-y: auto;
`
