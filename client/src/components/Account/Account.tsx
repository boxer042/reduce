import React, { useCallback, useState } from 'react'
import styled from 'styled-components'
import openColor from '../../lib/openColor'
import AccountCreateSection from './AccountCreateSection'
import AccountFilterSection from './AccountFilterSection'
import AccountListSection from './AccountListSection'
import AccountSearchSection from './AccountSearchSection'

export type AccountProps = {}

function Account({}: AccountProps) {
  const [keyword, setKeyword] = useState('')
  const handleCreateKeyword = useCallback(() => {
    console.log('Create Click!')
  }, [])
  return (
    <Container>
      <div className="List-Header">
        <AccountSearchSection
          value={keyword}
          onChange={(e) => setKeyword(e.target.value)}
        />
        <AccountFilterSection filters={['전체', '개인', '기업']} />
      </div>
      <Content>
        {keyword && (
          <AccountCreateSection
            keyword={keyword}
            setKeyword={setKeyword}
            onClick={handleCreateKeyword}
          />
        )}
        <List creatable={keyword}>
          <AccountListSection />
        </List>
      </Content>
    </Container>
  )
}

export default Account

const Container = styled.div`
  height: 100%;

  .List-Header {
    position: fixed;
    top: 56px;
    width: 100%;
    max-width: 768px;
    border-bottom: 1px solid ${openColor.gray[2]};
    background-color: #fff;
    z-index: 40;
  }
`
const Content = styled.div`
  padding-top: 119px; // 66px
`
const List = styled.div<{ creatable: string }>`
  margin-top: ${(props) => (props.creatable ? '44px' : 0)};
`
