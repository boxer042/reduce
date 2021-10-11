import React from 'react'
import { Route, Switch, useLocation } from 'react-router-dom'
import Navigation from './components/Navigation/Navigation'
import AppLayout from './foundations/AppLayout/AppLayout'
import LoginPage from './pages/Lab/LoginPage'
import Locations from './pages/Settings/Locations'
import AccountCreatePage from './pages/Workspaces/Account/AccountCreatePage'
import AccountPage from './pages/Workspaces/Account/AccountPage'
import CreateIndividual from './pages/Workspaces/CreateIndividual'
import Workspaces from './pages/Workspaces/Workspaces'
import GlobalStyles from './styles/GlobalStyles'

function App() {
  const location = useLocation<any>()
  const background = location.state && location.state.background
  // if (isMobile) {
  //   // 디바이스를 알고새롭게 리드렉트해줌
  //   window.location.href = 'https://google.com'
  //   return <div>리드렉트</div>
  // }
  return (
    <>
      <GlobalStyles />
      <AppLayout>
        <Switch location={background || location}>
          <Route exact path="/">
            홈
          </Route>
          <Route exact path="/workspaces">
            <Workspaces />
          </Route>
          <Route exact path="/workspaces/create/individual">
            <CreateIndividual />
          </Route>
          <Route exact path="/workspaces/AccountPage">
            <AccountPage />
          </Route>
          <Route exact path="/workspaces/account/create">
            <AccountCreatePage />
          </Route>
          <Route exact path="/settings/locations">
            <Locations />
          </Route>
          <Route exact path="/sales">
            Sales
          </Route>
        </Switch>
        {background && (
          // 만약 라우트로 모달을 띄우면 새로고침시 갈수 있는 라우트를 새로 만들어줘야 한다.
          <Route path="/login">
            <LoginPage />
          </Route>
        )}
        <Navigation />
      </AppLayout>
    </>
  )
}

export default App
