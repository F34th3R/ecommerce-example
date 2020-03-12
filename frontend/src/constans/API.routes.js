const BASE_URL = ''

export const API = {
  register: {
    method: 'POST',
    url: `${BASE_URL}/register`
  },
  login: {
    method: 'POST',
    url: `${BASE_URL}/login`
  },
  auth: {
    method: 'GET',
    url: `${BASE_URL}/auth`
  },
  logout: {
    method: 'GET',
    url: `${BASE_URL}/logout`
  }
}
