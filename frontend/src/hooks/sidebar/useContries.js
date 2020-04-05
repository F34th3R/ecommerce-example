import { useState } from 'react'

export const useContries = () => {
  const [contries, setContries] = useState([
    {
      id: 1,
      name: 'Africa',
      checked: false
    },
    {
      id: 2,
      name: 'Europe',
      checked: false
    },
    {
      id: 3,
      name: 'Asia',
      checked: false
    },
    {
      id: 4,
      name: 'North America',
      checked: false
    },
    {
      id: 5,
      name: 'South America',
      checked: false
    },
    {
      id: 6,
      name: 'Australia',
      checked: false
    },
    {
      id: 7,
      name: 'Antarctica',
      checked: false
    }
  ])
  return { contries, setContries }
}
