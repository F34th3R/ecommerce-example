import React from 'react'

import { LinkComponent } from '../../../shared'
import { MenuLRContainer, MenuItem } from '../style/NavigationStyled'
import { AuthRoutes } from '../../../../routes/auth.routes'
export const MenuRigth = () => {
  return (
    <MenuLRContainer>
      <MenuItem>
        <LinkComponent to={AuthRoutes.signin.path}>Sign In</LinkComponent>
      </MenuItem>
      <MenuItem>
        <LinkComponent>Sign Up</LinkComponent>
      </MenuItem>
    </MenuLRContainer>
  )
}
