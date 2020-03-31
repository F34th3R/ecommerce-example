import React from 'react'
import styled from 'styled-components'

import { Field, ErrorMessage } from 'formik'
import { TextField, Typography } from '@material-ui/core'

const FieldConteiner = styled.div`
  margin: 16px 0;
`

export const FormikField = ({
  name,
  label,
  type = 'text',
  required = false
}) => {
  return (
    <FieldConteiner>
      <Field
        id={name}
        type={type}
        name={name}
        as={TextField}
        label={label}
        variant="outlined"
        size="small"
        error={false}
        helperText={<ErrorMessage name={name} />}
        fullWidth
        required={required}
        autoComplete="off"
      />
    </FieldConteiner>
  )
}
