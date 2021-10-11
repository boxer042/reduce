import QueryString from 'qs'
import React from 'react'
import { useLocation } from 'react-router-dom'

export type AccountCreatePageProps = {}

function AccountCreatePage({}: AccountCreatePageProps) {
  const location = useLocation()
  const query = QueryString.parse(location.search, {
    ignoreQueryPrefix: true,
  })
  return <div>{query.name}</div>
}

export default AccountCreatePage
