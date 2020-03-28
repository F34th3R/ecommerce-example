import React from 'react'

import { MenuLeft } from './sections/MenuLeft'
import { MenuRigth } from './sections/MenuRigth'
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
