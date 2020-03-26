import React, { useState } from 'react'
import { useHistory } from 'react-router-dom'
import { loginUser } from '../../../store/actions/user_actions'

import { Formik } from 'formik'
import * as Yup from 'yup'

import { Form, Input, Button, Checkbox, Typography } from 'antd'

import { useDispatch } from 'react-redux'

const { Title } = Typography

export const LoginPage = ({ props }) => {
  const history = useHistory()
  const dispatch = useDispatch()
  const rememberMeChecked = localStorage.getItem('rememberMe') ? true : false

  const [formErrorMessage, setFormErrorMessage] = useState('')
  const [rememberMe, setRememberMe] = useState(rememberMeChecked)

  const handleRememberMe = () => {
    setRememberMe(!rememberMe)
  }

  const initialEmail = localStorage.getItem('rememberMe') || ''

  return (
    <Formik
      initialValues={{
        email: initialEmail,
        password: ''
      }}
      validationSchema={Yup.object().shape({
        email: Yup.string()
          .email('Email is invalid!')
          .required('Email is required.'),
        password: Yup.string()
          .min(6, 'Password must be at least 6 characters')
          .required('Password is required.')
      })}
      onSubmit={async (values, { setSubmitting }) => {
        let dataToSubmit = {
          email: values.email,
          password: values.password
        }
        try {
          const response = await dispatch(loginUser(dataToSubmit))

          if (response.payload.loginSuccess) {
            localStorage.setItem('userId', response.payload.userId)
            if (rememberMe == true) {
              localStorage.setItem('rememberMe', values.id)
            } else {
              localStorage.removeItem('rememberMe')
            }
            history.push('/')
          } else {
            setFormErrorMessage('Check out your Account or Password again')
          }
          setSubmitting(false)
        } catch (err) {
          setFormErrorMessage('Check out your Account or Password again')
          setSubmitting(false)
          setTimeout(() => {
            setFormErrorMessage('')
          }, 3000)
        }
      }}
    >
      {props => (
        <div className="app">
          <Title level={2}>Log In</Title>
          <form onSubmit={props.handleSubmit} style={{ width: '350px' }}>
            <Form.Item required>
              <Input
                id="email"
                placeholder="Enter your Email"
                type="email"
                value={props.values.email}
                onChange={props.handleChange}
                onBlur={props.handleBlur}
                className={
                  props.errors.email && props.touched.email
                    ? 'text-input error'
                    : 'text-input'
                }
              >
                {props.errors.email && props.touched.email && (
                  <div className="input-feedback">{props.errors.email}</div>
                )}
              </Input>
            </Form.Item>
            <Form.Item required>
              <Input
                id="password"
                placeholder="Enter your password"
                type="password"
                value={props.values.password}
                onChange={props.handleChange}
                onBlur={props.handleBlur}
                className={
                  props.errors.password && props.touched.password
                    ? 'text-input error'
                    : 'text-input'
                }
              >
                {props.errors.password && props.touched.password && (
                  <div className="input-feedback">{props.errors.password}</div>
                )}
              </Input>
            </Form.Item>
            {formErrorMessage && (
              <label>
                <p
                  style={{
                    color: '#ff0000bf',
                    fontSize: '.7rem',
                    border: '1px solid',
                    padding: '1rem',
                    borderRadius: '10px'
                  }}
                >
                  {formErrorMessage}
                </p>
              </label>
            )}
            <Form.Item>
              <Checkbox
                id="rememberMe"
                onChange={handleRememberMe}
                checked={rememberMe}
              >
                Remember Me
              </Checkbox>
              <a
                className="login-form-forgot"
                href="/reset_user"
                style={{ float: 'right' }}
              >
                forgot password
              </a>
              <div>
                <Button
                  type="primary"
                  htmlType="submitit"
                  className="login-form-button"
                  style={{ minWidth: '100%' }}
                  disabled={props.isSubmitting}
                  onSubmit={props.handleSubmit}
                >
                  Log In
                </Button>
              </div>
              <span>
                Or <a href="/signup">register now!</a>
              </span>
            </Form.Item>
          </form>
        </div>
      )}
    </Formik>
  )
}
