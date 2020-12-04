<template>
    <div class="prose w-full sm:w-11/12 md:w-9/12 lg:w-7/12 xl:5/12 text-left bg-white dark:bg-gray-800 mb-8 rounded-md p-5">
        <h1>{{ post.title }}</h1>
        <nuxt-content :document="post" />
    </div>
</template>

<script lang="ts">
import Vue from 'vue'
export default Vue.extend({
    async asyncData({ $content, params }) {
      const post = await $content('blog', params.slug).fetch()

      return { post }
    }
})
</script>