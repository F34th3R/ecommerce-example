import axios from 'axios'

import {
  LOGIN_USER,
  REGISTER_USER,
  AUTH_USER,
  LOGOUT_USER,
  ADD_TO_CART_USER,
  GET_CART_ITEMS_USER,
  REMOVE_CART_ITEM_USER,
  ON_SUCCESS_BUY_USER
} from './types'

import { API } from '../../constans/API.routes'

export const registerUser = dataToSubmit => {
  try {
    const request = axios({
      method: API.register.method,
      url: API.register.url,
      data: dataToSubmit
    })

    return {
      type: REGISTER_USER,
      payload: request.data
    }
  } catch (e) {
    console.log(`registerUser: ${e}`)
  }
}

export const loginUser = dataToSubmit => {
  try {
    const request = axios({
      method: API.login.method,
      url: API.login.url,
      data: dataToSubmit
    })

    return {
      type: LOGIN_USER,
      payload: request.data
    }
  } catch (e) {
    console.log(`loginUser: ${e}`)
  }
}

export const auth = () => {
  try {
    const request = axios({
      method: API.auth.method,
      url: API.auth.url
    })

    return {
      type: AUTH_USER,
      payload: request.data
    }
  } catch (e) {
    console.log(`auth: ${e}`)
  }
}

export const logoutUser = () => {
  try {
    const request = axios({
      method: API.logout.method,
      url: API.logout.url
    })

    return {
      type: LOGOUT_USER,
      payload: request.data
    }
  } catch (e) {
    console.log(`logoutUser: ${e}`)
  }
}
