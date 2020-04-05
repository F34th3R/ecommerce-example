import React from 'react'

import { MenuLeft, MenuRigth } from './sections'

import {
  Nav,
  MenuLogo,
  NavigationContainer,
  MenuContainer
} from './style/NavigationStyled'

export const Navigation = () => {
  return (
    <NavigationContainer>
      <Nav>
        <MenuLogo>LogoHere</MenuLogo>
        <MenuContainer>
          <MenuLeft />
          <MenuRigth />
        </MenuContainer>
      </Nav>
    </NavigationContainer>
  )
}
