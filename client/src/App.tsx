import React from 'react'
import { Route, Switch } from 'react-router-dom'
import Navigation from './components/Navigation/Navigation'
import AppLayout from './foundations/AppLayout/AppLayout'
import Locations from './pages/Settings/Locations'
import CreateIndividual from './pages/Workspaces/CreateIndividual'
import Workspaces from './pages/Workspaces/Workspaces'
import GlobalStyles from './styles/GlobalStyles'

function App() {
  return (
    <>
      <GlobalStyles />
      <Switch>
        <AppLayout>
          <Route exact path="/">
            홈
          </Route>
          <Route exact path="/workspaces">
            <Workspaces />
          </Route>
          <Route exact path="/workspaces/create/individual">
            <CreateIndividual />
          </Route>
          <Route exact path="/settings/locations">
            <Locations />
          </Route>
          <Route exact path="/sales">
            Sales
          </Route>
        </AppLayout>
      </Switch>
      <Navigation />
    </>
  )
}

export default App
