import React, { createContext, useContext } from 'react'
import { useContries, usePrices, useSidebar } from '../hooks/sidebar'

export const SidebarContext = createContext()

export const SidebarProvider = ({ children }) => {
  const { contries } = useContries()
  const { prices } = usePrices()
  const {
    contrySelected,
    setContrySelected,
    priceSelected,
    setPriceSelected
  } = useSidebar()

  return (
    <SidebarContext.Provider
      value={{
        contries,
        prices,
        contrySelected,
        setContrySelected,
        priceSelected,
        setPriceSelected
      }}
    >
      {children}
    </SidebarContext.Provider>
  )
}

export const useSidebarValues = () => useContext(SidebarContext)
