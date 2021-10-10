import React from 'react'
import Account from '../../../components/Account/Account'
import Header from '../../../foundations/Header/Header'
import Template from '../../../foundations/Template/Template'

export type AccountPageProps = {}

function AccountPage({}: AccountPageProps) {
  return (
    <Template header={<Header title="고객 / 거래처" />}>
      <Account />
    </Template>
  )
}

export default AccountPage
