import styled from 'styled-components'

export const Menu = styled.nav`
  padding: 0 20px;
  border-bottom: solid 1px #e8e8e8;
  overflow: auto;
  box-shadow: 0 0 30px #f3f1f1;
  background-color: white;
  display: flex;
  position: ${props => props.position};
  z-index: ${props => props.zIndex};
  width: ${props => props.width};
`

export const MenuLogo = styled.div`
  width: 150px;
  float: left;
  a {
    display: inline-block;
    font-size: 20px;
    padding: 19px 20px;
  }
  @media (max-width: 767px) {
    a {
      margin-left: -20px;
      padding: 10px 20px;
    }
  }
`

export const MenuContainer = styled.div`
  .ant-menu-item {
    padding: 0 5px;
  }

  .ant-menu-submenu-title {
    padding: 10px 20px;
  }

  .ant-menu-item a,
  ant-menu-submenu-title a {
    padding: 10px 15px;
  }

  .ant-menu-horizontal {
    border-bottom: none;
  }

  .menu_left {
    float: left;
  }

  .menu_rigth {
    float: right;
  }

  @media (max-width: 767px) {
    .ant-menu-item,
    .ant-menu-submenu-title {
      padding: 1px 20px;
    }
  }
`

export const MenuLeft = styled.div`
  float: left;
`

export const MenuRigth = styled.div`
  float: right;
`
