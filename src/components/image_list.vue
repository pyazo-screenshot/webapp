<template>
  <div>
    <h1>Images</h1>
    <image-card
      v-for="image in images"
      :id="image.id"
      :key="image.id"
      :url="baseApiUrl + image.path"
      @copy="handleCopy(image.id)"
      @delete="handleDelete(image.id)"
      @heart="handleHeart(image.id)"
    />
  </div>
</template>

<script>
import {mapActions, mapGetters} from 'vuex'

import ImageCard from './image_card'
import {API_URL} from '../config'

export default {
  components: {
    ImageCard,
  },
  data() {
    return {
      baseApiUrl: API_URL,
    }
  },
  computed: {
    ...mapGetters(['images']),
  },
  created() {
    this.fetchImages()
  },
  methods: {
    ...mapActions(['fetchImages']),
    handleDelete(imageId) {
      console.log('handleDelete', imageId)
    },
    handleCopy(imageId) {
      console.log('handleCopy', imageId)
    },
    handleHeart(imageId) {
      console.log('handleHeart', imageId)
    },
  },
}
</script>
