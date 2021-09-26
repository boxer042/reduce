import React from 'react'
import {
  BiCalculator,
  BiJoystick,
  BiLineChart,
  BiPackage,
  BiUser,
  BiWon,
  BiWorld,
} from 'react-icons/bi'
import { NavLink } from 'react-router-dom'
import styled from 'styled-components'
import Header from '../../foundations/Header/Header'
import Template from '../../foundations/Template/Template'
import openColor from './../../lib/openColor'

export type WorkspacesProps = {}

function Workspaces({}: WorkspacesProps) {
  return (
    <Template header={<Header title="Workspaces" />}>
      <Menu>
        <Main>
          <div className="icon">
            <BiWorld />
          </div>
          <div className="label">Dashboard</div>
        </Main>
      </Menu>
      <Menu>
        <Main>
          <div className="icon">
            <BiLineChart />
          </div>
          <div className="label">Reports</div>
        </Main>
      </Menu>
      <Menu>
        <Main>
          <div className="icon">
            <BiPackage />
          </div>
          <div className="label">Goods</div>
        </Main>
        <Sub to="">
          <div className="label">Create Sale Goods</div>
        </Sub>
        <Sub to="">
          <div className="label">Sale Goods</div>
        </Sub>
        <Sub to="">
          <div className="label">Inventroy</div>
        </Sub>
      </Menu>
      <Menu>
        <Main>
          <div className="icon">
            <BiWon />
          </div>
          <div className="label">Sale</div>
        </Main>
      </Menu>
      <Menu>
        <Main>
          <div className="icon">
            <BiCalculator />
          </div>
          <div className="label">Purchase</div>
        </Main>
      </Menu>
      <Menu>
        <Main>
          <div className="icon">
            <BiUser />
          </div>
          <div className="label">Account</div>
        </Main>
        <Sub to="">
          <div className="label">Account List</div>
        </Sub>
        <Sub to="/workspaces/create/individual">
          <div className="label">Create Individual</div>
        </Sub>
        <Sub to="" onClick={(e) => e.preventDefault()}>
          <div className="label">Create Company</div>
        </Sub>
      </Menu>
      <Menu>
        <Main>
          <div className="icon">
            <BiJoystick />
          </div>
          <div className="label">Log</div>
        </Main>
      </Menu>
      <Menu>
        <Main>
          <div className="icon">
            <BiUser />
          </div>
          <div className="label">Settings</div>
        </Main>
        <Sub to="/settings/locations">
          <div className="label">Locations</div>
        </Sub>
      </Menu>
    </Template>
  )
}

export default Workspaces

const Menu = styled.div`
  & + & {
    margin-top: 16px;
  }
`
const Main = styled.div`
  height: 32px;
  padding: 0 16px;
  display: flex;
  align-items: center;
  cursor: pointer;
  &:hover {
    background: ${openColor.gray[2]};
  }
  .icon {
    font-size: 24px;
    padding-top: 6px;
    margin-right: 16px;
  }
  .label {
    font-weight: bold;
    font-size: 18px;
  }
`
const Sub = styled(NavLink)`
  text-decoration: none;
  height: 32px;
  display: flex;
  color: ${openColor.gray[9]};
  &:hover {
    background: ${openColor.gray[2]};
  }
  .label {
    line-height: 32px;
    height: 32px;
    font-size: 18px;
    padding-left: 56px;
  }
`
