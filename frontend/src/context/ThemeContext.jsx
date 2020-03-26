import React, { createContext, useContext } from 'react'
import { ThemeProvider as ThemeProviderStyled } from 'styled-components'
import { MuiThemeProvider, createMuiTheme } from '@material-ui/core/styles'

import { useTheme } from '../hooks/useTheme'

export const ThemeContext = createContext()

export const ThemeProvider = ({ children }) => {
  const { darkMode, setDarkMode, colors } = useTheme()

  const MaterialTheme = createMuiTheme({
    palette: {
      primary: {
        main: colors.primary
      },
      secondary: {
        main: colors.secondary
      },
      action: {
        main: colors.light
      },
      common: {
        white: colors.white,
        black: colors.dark
      }
    }
  })

  return (
    <ThemeContext.Provider
      value={{
        darkMode,
        setDarkMode,
        colors
      }}
    >
      <ThemeProviderStyled theme={colors}>
        <MuiThemeProvider theme={MaterialTheme}>{children}</MuiThemeProvider>
      </ThemeProviderStyled>
    </ThemeContext.Provider>
  )
}

export const useThemeValues = () => useContext(ThemeContext)
