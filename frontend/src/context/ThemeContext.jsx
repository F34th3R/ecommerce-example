import React, { createContext, useContext } from 'react'
import { ThemeProvider as ThemeProviderStyled } from 'styled-components'
import { MuiThemeProvider } from '@material-ui/core/styles'

import { useTheme } from '../hooks/useTheme'

export const ThemeContext = createContext()

export const ThemeProvider = ({ children }) => {
  const { darkMode, setDarkMode, colors, material } = useTheme()

  return (
    <ThemeContext.Provider
      value={{
        darkMode,
        setDarkMode
      }}
    >
      <ThemeProviderStyled theme={colors}>
        <MuiThemeProvider theme={material}>{children}</MuiThemeProvider>
      </ThemeProviderStyled>
    </ThemeContext.Provider>
  )
}

export const useThemeValues = () => useContext(ThemeContext)
