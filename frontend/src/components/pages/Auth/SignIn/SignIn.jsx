import React from 'react'
import { Form, Formik } from 'formik'
import * as Yup from 'yup'

import { SignInContainer } from './style/SignInStyled'
import { FormikField, Button } from '../../../shared'
import { Typography } from '@material-ui/core'

const initialValues = {
  email: '',
  password: ''
}

const signUpSchema = Yup.object().shape({
  email: Yup.string()
    .email('The email given is invalid.')
    .required('Email is required.'),
  password: Yup.string()
    .min(6)
    .required('Name is required.')
})

export const SignIn = () => {
  return (
    <SignInContainer>
      <Typography variant="h5" align="center">
        Sign In
      </Typography>
      <Formik initialValues={initialValues} validationSchema={signUpSchema}>
        {({ dirty, isValid, values, errors }) => (
          <Form>
            <FormikField name="email" type="email" label="Email" />
            <FormikField name="password" type="password" label="Password" />
            <Button disabled={!dirty || !isValid} type="submit" fullWidth>
              Sign In
            </Button>
          </Form>
        )}
      </Formik>
    </SignInContainer>
  )
}
