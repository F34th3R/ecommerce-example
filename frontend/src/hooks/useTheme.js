import { useState, useMemo, useEffect } from 'react'
import { createMuiTheme } from '@material-ui/core'

const paletteColors = {
  blackPearl: '#222831',
  blackRock: '#2D333D',
  arsenic: '#3D424A',
  manate: '#929aab',
  gainsboro: '#D9D9D9',
  solitude: '#EDEEF0',
  whiteSmoke: '#f7f7f7',
  java: '#29a19c',
  cerise: '#d7385e'
}

const c = {
  padding: '18px',
  container: {
    w: '1200px'
  },
  navigation: {
    h: '66px'
  },
  shadow: {
    main: '0 4px 10px rgba(0, 0, 0, 0.07)'
  }
}

const light = {
  common: {
    white: paletteColors.whiteSmoke,
    black: paletteColors.blackPearl
  },
  text: {
    main: paletteColors.blackPearl,
    grey: paletteColors.manate,
    error: paletteColors.cerise
  },
  primary: {
    main: paletteColors.java,
    text: paletteColors.whiteSmoke
  },
  disable: {
    main: paletteColors.gainsboro,
    text: paletteColors.manate
  },
  background: paletteColors.whiteSmoke,
  accent: paletteColors.java,
  grey: paletteColors.solitude,
  c
}
const dark = {
  common: {
    white: paletteColors.blackPearl,
    black: paletteColors.whiteSmoke
  },
  text: {
    main: paletteColors.whiteSmoke,
    grey: paletteColors.manate,
    error: paletteColors.gainsboro
  },
  primary: {
    main: paletteColors.java,
    text: paletteColors.whiteSmoke
  },
  disable: {
    main: paletteColors.arsenic,
    text: paletteColors.manate
  },
  background: paletteColors.blackPearl,
  accent: paletteColors.java,
  grey: paletteColors.blackRock,
  c
}

export const useTheme = () => {
  const [darkMode, setDarkMode] = useState(true)
  const [colors, setColors] = useState(light)
  const material = useMemo(
    () =>
      createMuiTheme({
        palette: {
          type: darkMode ? 'dark' : 'light',
          primary: {
            main: colors.accent
          },
          text: {
            primary: colors.text.main
          },
          common: {
            white: colors.common.white,
            black: colors.common.black
          }
        }
      }),
    [
      colors.accent,
      colors.common.black,
      colors.common.white,
      colors.text.main,
      darkMode
    ]
  )

  useEffect(() => {
    setColors(darkMode ? dark : light)
  }, [darkMode])

  return {
    darkMode,
    setDarkMode,
    material,
    colors
  }
}
