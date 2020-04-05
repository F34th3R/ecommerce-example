import React from 'react'
import { ThemeProvider } from './ThemeContext'
import { SidebarProvider } from './SidebarContext'
import { AuthProvider } from './AuthContext'

export const CoreProvider = ({ children }) => {
  return (
    <ThemeProvider>
      <AuthProvider>
        <SidebarProvider>{children}</SidebarProvider>
      </AuthProvider>
    </ThemeProvider>
  )
}
