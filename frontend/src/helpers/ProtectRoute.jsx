import React from 'react'
import { Route, Redirect } from 'react-router-dom'
import { useAuthValues } from '../context/AuthContext'

export const ProtectRoute = ({
  component: Component,
  auth: isAuth,
  ...rest
}) => {
  const { auth } = useAuthValues()

  const renderRoutes = (props, isAuth, isLoggin) => {
    if (isAuth && isLoggin) {
      return <Component {...props} />
    } else if (!isAuth) {
      return <Component {...props} />
    }
    return <Redirect to={{ pathname: '/', state: { from: props.location } }} />
  }

  return (
    <Route {...rest} render={props => renderRoutes(props, isAuth, auth.is)} />
  )
}
