import { ImagesApi } from '../../api/images'

const state = {
  images: [],
}

const getters = {
  images: state => state.images,
}

const actions = {
  fetchImages: async ({ commit }) => {
    const response = await ImagesApi.fetchImages()
    commit('setImages', response)
  },
}

const mutations = {
  setImages(state, images) {
    state.images = [...images]
  },
}

export default {
  state,
  actions,
  getters,
  mutations,
}
