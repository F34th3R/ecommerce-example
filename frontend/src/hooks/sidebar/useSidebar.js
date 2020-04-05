import { useState } from 'react'

export const useSidebar = () => {
  const [contrySelected, setContrySelected] = useState()
  const [priceSelected, setPriceSelected] = useState()

  return {
    contrySelected,
    setContrySelected,
    priceSelected,
    setPriceSelected
  }
}
