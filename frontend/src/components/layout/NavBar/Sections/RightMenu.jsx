import React from 'react'
import axios from 'axios'
import { useHistory } from 'react-router-dom'
import { useSelector } from 'react-redux'

import { Menu, Badge } from 'antd'
import { ShoppingCartOutlined } from '@ant-design/icons'
import { API } from '../../../../constans/API.routes'

export const RightMenu = ({ mode }) => {
  const history = useHistory()
  const user = useSelector(state => state.user)

  const logoutHandler = async () => {
    try {
      const response = await axios({
        method: API.logout.method,
        url: API.logout.url
      })
      const { status } = response
      if (status === 200) history.push('/login')
    } catch (e) {
      alert('Log out Falied!!')
    }
  }

  if (user.userData && !user.userData.isAuth) {
    return (
      <Menu mode={mode}>
        <Menu.Item key="mail">
          <a href="/login">Signin</a>
        </Menu.Item>
        <Menu.Item key="app">
          <a href="/register">Signup</a>
        </Menu.Item>
      </Menu>
    )
  } else {
    return (
      <Menu mode={mode}>
        <Menu.Item key="history">
          <a href="/history">History</a>
        </Menu.Item>

        <Menu.Item key="upload">
          <a href="/product/upload">Upload</a>
        </Menu.Item>

        <Menu.Item key="cart" style={{ paddingBottom: 3 }}>
          <Badge count={user.userData && user.userData.cart.length}>
            <a href="/user/cart" style={{ marginRight: -22, color: '#667777' }}>
              <ShoppingCartOutlined />
            </a>
          </Badge>
        </Menu.Item>

        <Menu.Item key="logout">
          <a onClick={logoutHandler}>Logout</a>
        </Menu.Item>
      </Menu>
    )
  }
}
