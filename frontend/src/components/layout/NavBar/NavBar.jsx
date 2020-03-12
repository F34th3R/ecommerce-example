import React, { useState } from 'react'
import { LeftMenu } from './LeftMenu'
import { RightMenu } from './RightMenu'

import { Drawer, Button } from 'antd'
import { AlignRightOutlined } from '@ant-design/icons'
import {
  Menu,
  MenuLogo,
  MenuContainer,
  MenuLeft,
  MenuRigth
} from './NavBarStyles'
import './Navbar.scss'

export const NavBar = () => {
  const [visible, setVisible] = useState(false)

  const showDrawer = () => setVisible(true)
  const onClose = () => setVisible(false)

  return (
    <Menu position="fixed" zIndex="5" width="100%">
      <MenuLogo>
        <a href="#">LOGO</a>
      </MenuLogo>
      <MenuContainer>
        <MenuLeft className="menu_left">
          <LeftMenu mode="horizontal" />
        </MenuLeft>
        <MenuRigth className="menu_rigth">
          {/* <RightMenu mode="horizontal" /> */}
        </MenuRigth>
        <Button
          className="menu__mobile-button"
          type="primary"
          onClick={showDrawer}
        >
          <AlignRightOutlined />
        </Button>
        <Drawer
          title="Basic Drawer"
          placement="right"
          className="menu_drawer"
          closable={false}
          onClose={onClose}
          visible={visible}
        >
          <LeftMenu mode="inline" />
          {/* <RightMenu mode="inline" /> */}
        </Drawer>
      </MenuContainer>
    </Menu>
  )
}
