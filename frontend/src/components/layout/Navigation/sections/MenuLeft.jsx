import React from 'react'

import { MenuLRContainer, MenuItem } from '../style/NavigationStyled'

export const MenuLeft = () => {
  return (
    <MenuLRContainer>
      <MenuItem>
        <span>Home</span>
      </MenuItem>
      <MenuItem>
        <span>Blogs</span>
      </MenuItem>
    </MenuLRContainer>
  )
}
