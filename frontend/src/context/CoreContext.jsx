import React from 'react'
import { ThemeProvider } from './ThemeContext'
import { SidebarProvider } from './SidebarContext'

export const CoreProvider = ({ children }) => {
  return (
    <ThemeProvider>
      <SidebarProvider>{children}</SidebarProvider>
    </ThemeProvider>
  )
}
