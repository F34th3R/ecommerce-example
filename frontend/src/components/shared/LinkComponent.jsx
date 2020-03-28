import React from 'react'
import styled from 'styled-components'
import { Link } from 'react-router-dom'

const LinkStyled = styled.div`
  a {
    color: ${p => p.theme.text.main};
    text-decoration: none;
  }
`

export const LinkComponent = ({ children, to }) => {
  return (
    <LinkStyled>
      <Link to={to}>{children}</Link>
    </LinkStyled>
  )
}
