import styled from 'styled-components'

export const NavigationContainer = styled.div`
  height: ${p => p.theme.c.navigation.h};
  width: 100%;
  background: ${p => p.theme.background};
  color: ${p => p.theme.text};
  box-shadow: ${p => p.theme.c.shadow.main};
`

export const Nav = styled.div`
  height: 100%;
  display: flex;
  align-items: center;
  max-width: ${p => p.theme.c.container.w};
  margin: 0 auto;
  padding: 0 ${p => p.theme.c.padding};
`

export const MenuLogo = styled.div`
  height: 100%;
  float: left;
  margin-right: 50px;
  display: flex;
  align-items: center;
  @media (max-width: 555px) {
    margin-right: 0;
  }
`

export const MenuContainer = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: space-between;
`

export const MenuLRContainer = styled.div`
  display: flex;
  flex-flow: row;
  height: 100%;
`

export const MenuItem = styled.div`
  height: 100%;
  padding: 0 20px;
  display: flex;
  flex-flow: row;
  align-items: center;

  cursor: pointer;
  &:hover {
    background: ${p => p.theme.grey};
    box-shadow: ${p => p.theme.c.shadow.main};
    a,
    span {
      color: ${p => p.theme.accent};
    }
  }

  @media (max-width: 555px) {
    display: none;
  }
`
