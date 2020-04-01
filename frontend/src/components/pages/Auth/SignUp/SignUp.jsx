import React from 'react'
import { Formik, Form } from 'formik'
import * as Yup from 'yup'
import { FormikField, Button } from '../../../shared'
import { AuthContainer } from '../style'
import { Typography } from '@material-ui/core'

const initialValues = {
  name: '',
  lastName: '',
  email: '',
  password: '',
  confirmPassword: ''
}

const signUpSchema = Yup.object().shape({
  name: Yup.string()
    .min(3, 'Name must be at least 3 characters.')
    .required('Name is required.'),
  lastName: Yup.string()
    .min(2, 'Last name must be at least 2 characters.')
    .required('Last name is required.'),
  email: Yup.string()
    .email('The email given is invalid.')
    .required('Email is required'),
  password: Yup.string()
    .min(6, 'Password must be at least 6 characters.')
    .required('Password is required.'),
  confirmPassword: Yup.string()
    .oneOf([Yup.ref('password'), null], 'Password must match.')
    .required('Confirm password is required.')
})

export const SignUp = () => {
  return (
    <AuthContainer>
      <Typography variant="h5" align="center">
        Sign Up
      </Typography>
      <Formik initialValues={initialValues} validationSchema={signUpSchema}>
        {({ dirty, isValid }) => (
          <Form>
            <FormikField name="name" label="Name" />
            <FormikField name="lastName" label="Last Name" />
            <FormikField name="email" type="email" label="Email" />
            <FormikField name="password" type="password" label="Password" />
            <FormikField
              name="confirmPassword"
              type="password"
              label="Confirm Password"
            />
            <Button disabled={!dirty || !isValid} type="submit" fullWidth>
              Sign Up
            </Button>
          </Form>
        )}
      </Formik>
    </AuthContainer>
  )
}
