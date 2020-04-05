const USER_URL = '/api/users'
export const SERVER_URL = ''

export const API = {
  signup: {
    method: 'POST',
    url: `${USER_URL}/signup`
  },
  signin: {
    method: 'POST',
    url: `${USER_URL}/signin`
  },
  auth: {
    method: 'GET',
    url: `${USER_URL}/auth`
  },
  logout: {
    method: 'GET',
    url: `${USER_URL}/logout`
  }
}
