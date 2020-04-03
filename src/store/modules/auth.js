import { AuthApi } from '@/api/auth'

const state = {
  status: false,
  errors: [],
}

const getters = {
  status: state => state.status,
  errors: state => state.errors,
}

const mutations = {
  login(state, access_token) {
    AuthApi.setAuthHeader(access_token)
    localStorage.setItem('access_token', access_token)
    state.status = true
  },

  logout(state) {
    localStorage.clear()
    state.status = false
  },

  addError(state, error) {
    state.errors.push(error)
  },
}

const actions = {
  async initialize({ commit }) {
    const token = localStorage.getItem('access_token')
    if (token) {
      commit('login', token)
    }
  },

  async logout({ commit }) {
    AuthApi.setAuthHeader(null)
    commit('logout')
  },

  async login({ commit }, data) {
    try {
      const response = await AuthApi.login(data)
      commit('login', response.access_token)
    } catch (error) {
      console.error('login', error)
    }
  },

  async register({ commit }, data) {
    try {
      const response = await AuthApi.register(data)
      commit('login', response)
    } catch (error) {
      console.error(error)
    }
  },

  async addError({ commit }, error) {
    commit('addError', error)
  },
}

export default {
  state,
  getters,
  mutations,
  actions,
}
