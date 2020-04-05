import React from 'react'

import { GlobalStyle } from '../styles/GlobalStyle'
import { Navigation } from './layout'
import { useThemeValues } from '../context/ThemeContext'
import { Button } from '@material-ui/core'
import { Container } from './shared'
import { RouterHelper } from '../helpers/RouterHelper'

export const App = () => {
  const { setDarkMode } = useThemeValues()
  return (
    <>
      <Navigation />
      <Container>
        <RouterHelper />
        <Button onClick={() => setDarkMode(prev => !prev)}>Change</Button>
      </Container>
      <GlobalStyle />
    </>
  )
}
