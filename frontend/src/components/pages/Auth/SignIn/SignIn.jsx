import React, { useState } from 'react'
import { Form, Formik } from 'formik'
import * as Yup from 'yup'

import { AuthContainer } from '../style'
import { SignInRow } from './style/SignInStyled'
import { FormikField, Button } from '../../../shared'
import { Typography, FormControlLabel, Checkbox } from '@material-ui/core'

const initialValues = {
  email: '',
  password: ''
}

const signUpSchema = Yup.object().shape({
  email: Yup.string()
    .email('The email given is invalid.')
    .required('Email is required.'),
  password: Yup.string()
    .min(6, 'Password must be at least 6 characters.')
    .required('Password is required.')
})

export const SignIn = () => {
  const [rememberMe, setRememberMe] = useState(false)

  return (
    <AuthContainer>
      <Typography variant="h5" align="center">
        Sign In
      </Typography>
      <Formik initialValues={initialValues} validationSchema={signUpSchema}>
        {({ dirty, isValid }) => (
          <Form>
            <FormikField name="email" type="email" label="Email" />
            <FormikField name="password" type="password" label="Password" />
            <SignInRow>
              <FormControlLabel
                control={
                  <Checkbox
                    checked={rememberMe}
                    onChange={() => setRememberMe(prev => !prev)}
                    name="rememberMe"
                    color="primary"
                    size="small"
                  />
                }
                label={<span style={{ fontSize: '14px' }}>Remember Me</span>}
              />
              {/* <LinkComponent to="forgot password">
                forgot password
              </LinkComponent> */}
            </SignInRow>
            <Button disabled={!dirty || !isValid} type="submit" fullWidth>
              Sign In
            </Button>
          </Form>
        )}
      </Formik>
    </AuthContainer>
  )
}
