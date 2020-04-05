import React, { useState } from 'react'
import {
  Box,
  FormControl,
  FormLabel,
  FormControlLabel,
  RadioGroup,
  Radio
} from '@material-ui/core'
import { useSidebarValues } from '../../../../context/SidebarContext'

export const Prices = ({ list }) => {
  // TODO: use REDUX HERE!! 🎯
  const { setPriceSelected } = useSidebarValues()
  const [selected, setSelected] = useState('0')

  const handleChange = e => {
    const { value } = e.target
    setSelected(value)
    setPriceSelected(list[value].price)
  }

  return (
    <>
      <Box height="30px" />
      <FormControl component="fieldset">
        <FormLabel component="legend">Prices</FormLabel>
        <RadioGroup
          aria-label="prices"
          name="prices"
          value={selected}
          onChange={handleChange}
        >
          {list &&
            list.map(({ id, name }) => (
              <FormControlLabel
                key={id}
                value={`${id}`}
                control={<Radio color="primary" size="small" />}
                label={name}
              />
            ))}
        </RadioGroup>
      </FormControl>
    </>
  )
}
