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
  }
]
