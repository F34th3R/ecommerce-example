import { useState } from 'react'

export const usePrices = () => {
  const [prices, setPrices] = useState([
    {
      id: 0,
      name: 'Any',
      price: []
    },
    {
      id: 1,
      name: '$0 to $199',
      price: [0, 199]
    },
    {
      id: 2,
      name: '$200 to $249',
      price: [200, 249]
    },
    {
      id: 3,
      name: '$250 to $279',
      price: [250, 279]
    },
    {
      id: 4,
      name: '$280 to $299',
      price: [280, 299]
    },
    {
      id: 5,
      name: 'More than $300',
      price: [300, 1500000]
    }
  ])
  return { prices, setPrices }
}
