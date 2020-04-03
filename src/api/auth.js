import Axios from 'axios'

const ENDPOINTS = {
  LOGIN: () => '/auth/login',
  REGISTER: () => '/auth/register',
  REFRESH: () => '/auth/refresh',
  ME: () => '/auth/me',
}

export class AuthApi {
  static setAuthHeader(token) {
    if (!token) {
      Reflect.deleteProperty(Axios.defaults.headers.common, 'Authorization')
      return
    }

    Axios.defaults.headers.common.Authorization = `Bearer ${token}`
  }

  static login(data) {
    return Axios.post('/auth/login', data)
  }

  static register(data) {
    return Axios.post(ENDPOINTS.REGISTER(), data)
  }
}
