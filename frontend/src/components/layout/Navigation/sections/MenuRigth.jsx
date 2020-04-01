import React from 'react'

import { LinkComponent } from '../../../shared'
import { MenuLRContainer, MenuItem } from '../style/NavigationStyled'

export const MenuRigth = () => {
  return (
    <MenuLRContainer>
      <MenuItem>
        <LinkComponent to="sign in">Sign In</LinkComponent>
      </MenuItem>
      <MenuItem>
        <LinkComponent to="sign up">Sign Up</LinkComponent>
      </MenuItem>
    </MenuLRContainer>
  )
}
