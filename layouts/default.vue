<template>
  <div class="container container-start p-10 sm:px-0 flex-col ">
    <ColorMode />
    <Nuxt />
    <Footer />
  </div>
</template>

<script lang="ts">
import Vue from 'vue';
import ColorMode from "@/components/ColorMode.vue";
import Footer from "@/components/Footer.vue";
export default Vue.extend({
  components: {
    ColorMode,
    Footer,
  },
  head() {
    return {
      bodyAttrs: {
        class: 'font-body bg-gray-100 dark:bg-dark-background text-gray-700 dark:text-gray-400'
      }
    }
  }
})
</script>

<style>
html {
  -ms-text-size-adjust: 100%;
  -webkit-text-size-adjust: 100%;
  -moz-osx-font-smoothing: grayscale;
  -webkit-font-smoothing: antialiased;
  box-sizing: border-box;
}

.container {
  margin: 0 auto;
  min-height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
}

.container.container-start {
  justify-content: flex-start;
}

.prose {
  max-width: initial;
}

*,
*::before,
*::after {
  box-sizing: border-box;
  margin: 0;
}
</style>
