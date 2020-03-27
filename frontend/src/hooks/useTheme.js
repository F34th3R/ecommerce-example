import { useState, useEffect } from 'react'

export const useTheme = () => {
  const [defaultColors, _] = useState({
    astronautBlue: '#204051',
    ming: '#3b6978',
    ziggurat: '#84A9AC',
    grannyApple: '#CAE8D5',
    white: '#E1E1E1',
    dark: '#333333',
    superDark: '#212121'
  })
  const [colors, setColors] = useState({
    white: defaultColors.white,
    dark: defaultColors.dark,
    primary: defaultColors.ming,
    secondary: defaultColors.astronautBlue,
    light: defaultColors.grannyApple
  })
  const [darkMode, setDarkMode] = useState(false)

  useEffect(() => {
    if (darkMode) {
      setColors({
        white: defaultColors.superDark,
        dark: defaultColors.white,
        primary: defaultColors.ming,
        secondary: defaultColors.astronautBlue,
        light: defaultColors.grannyApple,
        text: defaultColors.white
      })
    } else {
      setColors({
        white: defaultColors.white,
        dark: defaultColors.dark,
        primary: defaultColors.ming,
        secondary: defaultColors.astronautBlue,
        light: defaultColors.grannyApple,
        text: defaultColors.dark
      })
    }
  }, [
    darkMode,
    defaultColors.astronautBlue,
    defaultColors.dark,
    defaultColors.grannyApple,
    defaultColors.ming,
    defaultColors.superDark,
    defaultColors.white
  ])

  return {
    darkMode,
    setDarkMode,
    colors
  }
}
