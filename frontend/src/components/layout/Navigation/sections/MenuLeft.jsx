import React from 'react'

import { MenuLRContainer, MenuItem } from '../style/NavigationStyled'
import { LinkComponent } from '../../../shared'

export const MenuLeft = () => {
  return (
    <MenuLRContainer>
      <MenuItem>
        <LinkComponent to="home">Home</LinkComponent>
      </MenuItem>
      <MenuItem>
        <LinkComponent to="blogs">Blogs</LinkComponent>
      </MenuItem>
    </MenuLRContainer>
  )
}
