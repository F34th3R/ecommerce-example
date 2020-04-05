import { LandingPage } from '../components/pages'
export const GLOBAL_ROUTES = [
  {
    name: 'home',
    path: '/',
    component: LandingPage,
    auth: false
  },
  {
    name: 'blogs',
    path: '/blogs',
    component: '',
    auth: false
  }
]
