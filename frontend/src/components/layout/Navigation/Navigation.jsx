import React from 'react'
import styled from 'styled-components'

const Header = styled.header`
  width: 100%;
  height: 66px;
  margin-top: 40px;
  display: flex;
  flex-flow: row;
`

const NavigationContent = styled.div`
  background: ${props => props.theme.primary};
  border-radius: 5px;
  box-shadow: 0 4px 10px rgba(0, 0, 0, 0.07);
  color: ${props => props.theme.white};
`

export const Navigation = () => {
  return (
    <Header>
      <NavigationContent>hola</NavigationContent>
    </Header>
  )
}
