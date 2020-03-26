import React from 'react'
import { useHistory } from 'react-router-dom'

import moment from 'moment'
import { Formik, Field } from 'formik'
import * as Yup from 'yup'

import { registerUser } from '../../../store/actions/user_actions'
import { useDispatch } from 'react-redux'

import { Form, Input, Button } from 'antd'

const formItemLayout = {
  labelCol: {
    xs: { span: 24 },
    sm: { span: 8 }
  },
  wrapperCol: {
    xs: { span: 24 },
    sm: { span: 16 }
  }
}

const tailFromItemLayout = {
  wrapperCol: {
    xs: { span: 24, offset: 0 },
    sm: { span: 16, offset: 8 }
  }
}

const signupSchema = Yup.object().shape({
  name: Yup.string().required('Name is required.'),
  lastName: Yup.string().required('Las Name is required.'),
  email: Yup.string()
    .email('The email is invalid!')
    .required('Email is required.'),
  password: Yup.string()
    .min(6, 'Password must be at least 6 characters')
    .required('Password is required'),
  confirmPassword: Yup.string()
    .oneOf([Yup.ref('password'), null], 'Passwords must match')
    .required('Confirm Password is required')
})

export const SignupPage = () => {
  const dispatch = useDispatch()
  const history = useHistory()

  const handleOnSubmit = async (values, { setSubmitting }) => {
    console.log(values)
    return
    let dataToSubmit = {
      name: values.name,
      lastName: values.lastName,
      email: values.email,
      password: values.password,
      image: `http://gravatar.com/avatar/${moment().unix()}?d=identicon`
    }
    const response = await dispatch(registerUser(dataToSubmit))
    if (response.payload.success) {
      history.push('/login')
    } else {
      alert(response.payload.err.errmsg)
    }
    setSubmitting(false)
  }

  return (
    <Formik
      initialValues={{
        name: '',
        email: '',
        lastName: '',
        password: '',
        confirmPassword: ''
      }}
      validationSchema={signupSchema}
      onSubmit={async (values, { setSubmitting }) => {
        console.log(values)
        return
        let dataToSubmit = {
          name: values.name,
          lastName: values.lastName,
          email: values.email,
          password: values.password,
          image: `http://gravatar.com/avatar/${moment().unix()}?d=identicon`
        }
        const response = await dispatch(registerUser(dataToSubmit))
        if (response.payload.success) {
          history.push('/login')
        } else {
          alert(response.payload.err.errmsg)
        }
        setSubmitting(false)
      }}
    >
      {props => (
        <div className="app">
          <h2>Sign up</h2>
          <Form
            style={{ minWidth: '375px' }}
            {...formItemLayout}
            onSubmit={props.handleSubmit}
          >
            <Form.Item required label="Name">
              <Field
                id="name"
                name="name"
                component={Input}
                type="text"
                placeholder="Enter your name"
                value={props.values.name}
                onChange={props.handleChange}
                onBlur={props.handleBlur}
                className={
                  props.errors.name && props.touched.name
                    ? 'text-input error'
                    : 'text-input'
                }
              />
              {props.errors.name && props.touched.name && (
                <div className="input-feedback">{props.errors.name}</div>
              )}
            </Form.Item>

            <Form.Item
              required
              label="Email"
              hasFeedback
              validateStatus={
                props.errors.email && props.touched ? 'error' : 'success'
              }
            >
              <Field
                id="email"
                name="email"
                component={Input}
                type="email"
                placeholder="Enter your Email"
                value={props.values.email}
                onChange={props.handleChange}
                onBlur={props.handleBlur}
                className={
                  props.errorsemail && props.touched.email
                    ? 'text-input error'
                    : 'text-input'
                }
              />
              {props.errorsemail && props.touched.email && (
                <div className="input-feedback">{props.errorsemail}</div>
              )}
            </Form.Item>

            <Form.Item
              required
              label="Password"
              hasFeedback
              validateStatus={
                props.errors.password && props.touched.password
                  ? 'error'
                  : 'success'
              }
            >
              <Field
                id="password"
                name="passwrord"
                component={Input}
                type="password"
                placeholder="Enter your Password"
                value={props.values.password}
                onChange={props.handleChange}
                onBlur={props.handleBlur}
                className={
                  props.errors.password && props.touched.password
                    ? 'text-input error'
                    : 'text-input'
                }
              />
              {props.errors.password && props.touched.password && (
                <div className="input-feedback">{props.errors.password}</div>
              )}
            </Form.Item>

            <Form.Item
              required
              label="Confirm"
              hasFeedback
              validateStatus={
                props.values.password === props.values.confirmPassword
                  ? 'success'
                  : 'error'
              }
            >
              <Field
                id="confirmPassword"
                name="confirmPassword"
                component={Input}
                type="password"
                placeholder="Enter your Confirm Password"
                value={props.values.confirmPassword}
                onChange={props.handleChange}
                onBlur={props.handleBlur}
                className={
                  props.errors.confirmPassword && props.touched.confirmPassword
                    ? 'text-input error'
                    : 'text-input'
                }
              />
              {props.errors.confirmPassword &&
                props.touched.confirmPassword && (
                  <div className="input-feedback">
                    {props.errors.confirmPassword}
                  </div>
                )}
            </Form.Item>

            <Form.Item {...tailFromItemLayout}>
              <Button
                onClick={props.handleSubmit}
                type="primary"
                htmlType="submit"
                disabled={props.isSubmitting}
              >
                Submit
              </Button>
            </Form.Item>
          </Form>
        </div>
      )}
    </Formik>
  )
}
