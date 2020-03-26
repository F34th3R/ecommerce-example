import React from 'react'

import { GlobalStyle } from '../styles/GlobalStyle'
import { Navigation } from './layout'
import { useThemeValues } from '../context/ThemeContext'

export const App = () => {
  const { setDarkMode } = useThemeValues()
  return (
    <>
      <Navigation />
      <h1>app</h1>
      <button onClick={() => setDarkMode(prev => !prev)}>Change</button>
      <GlobalStyle />
    </>
  )
}
