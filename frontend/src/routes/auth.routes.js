import { SignIn, SignUp } from '../components/pages'

export const AUTH_ROUTES = [
  {
    name: 'sign in',
    path: '/sing_in',
    component: SignIn,
    auth: false
  },
  {
    name: 'sign up',
    path: '/sing_up',
    component: SignUp,
    auth: false
  },
  {
    name: 'forgot password',
    path: '/forgot_password',
    component: SignUp,
    auth: false
  }
]
