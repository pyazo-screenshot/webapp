import Axios from 'axios'

const ENDPOINTS = {
  IMAGES: () => '/images',
}

export class ImagesApi {
  static fetchImages() {
    return Axios.get(ENDPOINTS.IMAGES())
  }
}
