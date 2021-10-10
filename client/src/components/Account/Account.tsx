import React from 'react'
import styled from 'styled-components'
import AccountListSection from './AccountListSection'
import AccountSearchSection from './AccountSearchSection'

export type AccountProps = {}

function Account({}: AccountProps) {
  return (
    <Container>
      <AccountSearchSection />
      <div className="List-Section">
        <AccountListSection />
      </div>
    </Container>
  )
}

export default Account

const Container = styled.div`
  height: 100%;
  .List-Section {
    padding-top: 148px;

    padding-bottom: 8px;
  }
`
