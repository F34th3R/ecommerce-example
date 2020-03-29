export const customConsole = (component, message) =>
  console.warn(
    `%cFEATHER DEBUG | %c${component} :: ${message}`,
    'color: cyan; font-size: 14px;',
    'color: currentColor; font-size: 14px;'
  )
