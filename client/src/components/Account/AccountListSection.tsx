import styled from 'styled-components'
import openColor from './../../lib/openColor'

export type AccountListSectionProps = {}

function AccountListSection({}: AccountListSectionProps) {
  return (
    <Container>
      <AccountContentBlock>
        <First>
          <Avatar>재우</Avatar>
        </First>
        <Center>
          <div className="account-content">
            <div className="name">이재우</div>
            <div className="contact">010-5553-4367</div>
          </div>
          <div className="account-addition">
            <Division>개인</Division>
            <Division>구매</Division>
            <Division>판매</Division>
          </div>
        </Center>
        <Last></Last>
      </AccountContentBlock>
      <AccountContentBlock>
        <First>
          <Avatar>재우</Avatar>
        </First>
        <Center>
          <div className="account-content">
            <div className="name">이재우</div>
            <div className="contact">010-5553-4367</div>
          </div>
          <div className="account-addition">
            <Division>개인</Division>
            <Division>구매</Division>
            <Division>판매</Division>
          </div>
        </Center>
        <Last></Last>
      </AccountContentBlock>
      <AccountContentBlock>
        <First>
          <Avatar>재우</Avatar>
        </First>
        <Center>
          <div className="account-content">
            <div className="name">이재우</div>
            <div className="contact">010-5553-4367</div>
          </div>
          <div className="account-addition">
            <Division>개인</Division>
            <Division>구매</Division>
            <Division>판매</Division>
          </div>
        </Center>
        <Last></Last>
      </AccountContentBlock>
      <AccountContentBlock>
        <First>
          <Avatar>재우</Avatar>
        </First>
        <Center>
          <div className="account-content">
            <div className="name">이재우</div>
            <div className="contact">010-5553-4367</div>
          </div>
          <div className="account-addition">
            <Division>개인</Division>
            <Division>구매</Division>
            <Division>판매</Division>
          </div>
        </Center>
        <Last></Last>
      </AccountContentBlock>
    </Container>
  )
}

export default AccountListSection

const Container = styled.div``

const AccountContentBlock = styled.div`
  display: flex;
  width: 100%;
  min-height: 80px;
  align-items: center;
  border-bottom: 1px solid ${openColor.gray[3]};
  padding: 8px 16px 8px 16px;

  &:last-of-type {
    border: none;
  }
`
const First = styled.div``
const Center = styled.div`
  margin-left: 16px;

  .account-content {
    display: flex;
    line-height: 18px;
    .name {
      font-size: 18px;
      font-weight: bold;
    }

    .contact {
      font-size: 16px;
      margin-left: 16px;
    }
  }

  .account-addition {
    margin-top: 8px;
    display: flex;
  }
`
const Last = styled.div``

const Avatar = styled.div`
  border-radius: 50%;
  min-height: 48px;
  min-width: 48px;
  background-color: ${openColor.blue[9]};
  color: #fff;
  font-size: 18px;
  display: flex;
  align-items: center;
  justify-content: center;
`
const Division = styled.div`
  padding: 2px 8px;
  font-size: 14px;
  min-width: 48px;
  border-radius: 24px;
  color: ${openColor.grape[9]};
  background-color: ${openColor.grape[1]};
  border: 1px solid ${openColor.grape[9]};
  display: flex;
  justify-content: center;
  align-items: center;
  & + & {
    margin-left: 8px;
  }
`
