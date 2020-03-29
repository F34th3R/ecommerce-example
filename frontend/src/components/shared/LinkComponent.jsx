import React, { useEffect, useState, useCallback } from 'react'
import styled from 'styled-components'
import { Link } from 'react-router-dom'

import { ROUTES } from '../../routes/index'
import { customConsole } from '../../helpers/customConsole'

const LinkStyled = styled.div`
  a {
    color: ${p => p.theme.text.main};
    text-decoration: none;
  }
`

export const LinkComponent = ({ children, to }) => {
  const [result, setResult] = useState({ path: '/' })

  const searchHandler = useCallback(() => {
    return (
      ROUTES.filter(route => {
        return route['name'].toLowerCase().indexOf(to.toLowerCase()) !== -1
      })[0] || false
    )
  }, [to])

  useEffect(() => {
    if (searchHandler()) {
      setResult(searchHandler())
    } else {
      customConsole('LinkComponent', `this route '${to}' is not founded!!`)
    }
  }, [searchHandler, to])

  return (
    <LinkStyled>
      <Link to={result.path}>{children}</Link>
    </LinkStyled>
  )
}
