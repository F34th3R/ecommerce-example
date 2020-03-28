import React from 'react'

import { GlobalStyle } from '../styles/GlobalStyle'
import { Navigation } from './layout'
import { useThemeValues } from '../context/ThemeContext'
import { Button } from '@material-ui/core'
import { Container } from './shared'

export const App = () => {
  const { setDarkMode } = useThemeValues()
  return (
    <>
      <Navigation />
      <Container>
        <h1>app</h1>
        <Button onClick={() => setDarkMode(prev => !prev)}>Change</Button>
      </Container>
      <GlobalStyle />
    </>
  )
}
