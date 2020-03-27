import React from 'react'
import styled from 'styled-components'

const Header = styled.header`
  width: 100%;
  height: 66px;
  display: flex;
  flex-flow: row;
`

const NavigationContent = styled.div`
  width: 100%;
  background: ${props => props.theme.white};
  color: ${props => props.theme.text};
  box-shadow: 0 4px 10px rgba(0, 0, 0, 0.07);
  padding: 20px;
`

const LogoContainer = styled.div`
  span:first-child {
    color: ${props => props.theme.text};
  }
  span:last-child {
    color: ${props => props.theme.secondary};
  }
`

export const Navigation = () => {
  return (
    <Header>
      <NavigationContent>
        <LogoContainer>
          <span>Logo</span>
          <span>Here</span>
        </LogoContainer>
      </NavigationContent>
    </Header>
  )
}
