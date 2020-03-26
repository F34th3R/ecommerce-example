import React, { Suspense } from 'react'
import { Route, Switch } from 'react-router-dom'

import { GlobalStyle } from '../styles/GlobalStyle'

import Auth from '../hook/auth'

import { NavBar, Footer, LandingPage, LoginPage } from './layout'
import { SignupPage } from './layout/SignupPage/SignupPage'

export const App = () => {
  return (
    <Suspense fallback={<div>Loading...</div>}>
      <NavBar />
      <div style={{ paddingTop: '75px', minHeight: 'calc(100vh - 80px)' }}>
        <Switch>
          {/* <Route exact path="/" component={Auth(LandingPage, null)} /> */}
          <Route exact path="/login" component={Auth(LoginPage, false)} />
          <Route exact path="/signup" component={Auth(SignupPage, false)} />
          {/* <Route
            exact
            path="/product/upload"
            component={Auth(UploadProductPage, true)}
          /> */}
          {/* <Route
            exact
            path="/product/:productId"
            component={Auth(DetailProductPage, null)}
          /> */}
          {/* <Route exact path="/user/cart" component={Auth(CartPage, true)} /> */}
          {/* <Route exact path="/history" component={Auth(HistoryPage, true)} /> */}
        </Switch>
      </div>
      <Footer />
      <GlobalStyle />
    </Suspense>
  )
}
