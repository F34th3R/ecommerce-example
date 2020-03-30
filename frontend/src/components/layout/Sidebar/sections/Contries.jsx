import React, { useState } from 'react'
import {
  Box,
  FormControl,
  FormLabel,
  FormGroup,
  Checkbox,
  FormControlLabel
} from '@material-ui/core'
import { useSidebarValues } from '../../../../context/SidebarContext'

export const Contries = ({ list }) => {
  // TODO: use REDUX HERE!! 🎯
  const { setContrySelected } = useSidebarValues()
  const [check, setCheck] = useState([])

  const handleChange = id => {
    const currentIndex = check.indexOf(id)
    const newCheck = [...check]
    if (currentIndex === -1) {
      newCheck.push(id)
    } else {
      newCheck.splice(currentIndex, 1)
    }
    setCheck(newCheck)
    setContrySelected(newCheck)
  }

  return (
    <>
      <Box height="30px" />
      <FormControl>
        <FormLabel component="legend">Countries</FormLabel>
        <FormGroup>
          {list &&
            list.map(({ id, name }) => (
              <FormControlLabel
                key={id}
                control={
                  <Checkbox
                    checked={check.indexOf(id) === -1 ? false : true}
                    onChange={() => handleChange(id)}
                    name={name}
                    color="primary"
                    size="small"
                  />
                }
                label={name}
              />
            ))}
        </FormGroup>
      </FormControl>
    </>
  )
}
