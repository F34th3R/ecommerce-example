import React from 'react'
import { ROUTES } from '../routes'
import { ProtectRoute } from './ProtectRoute'

export const RouterHelper = () => {
  return (
    <>
      {ROUTES.map(({ path, auth, component: Component }) => (
        <ProtectRoute
          key={path}
          exact
          path={path}
          auth={auth}
          component={Component}
        />
      ))}
    </>
  )
}
