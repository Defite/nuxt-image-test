<template>
  <p>
    <nuxt-image :src="imgSrc()" :alt="alt" />
    <img :src="imgSrc()" :alt="alt" />
  </p>
</template>

<script>
export default {
  props: {
    src: {
      type: String,
      required: true,
    },
    alt: {
      type: String,
      required: true,
    },
  },
  methods: {
    imgSrc() {
      try {
        return require(`~/assets/images/${this.src}`)
      } catch (error) {
        console.log(error)
        return null
      }
    },
  },
}
</script>
