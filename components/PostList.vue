<template>
    <div class="w-full sm:w-11/12 md:w-9/12 lg:w-7/12 xl:5/12 text-left">
      <div v-for="post in posts" :key="post.slug" class="bg-white dark:bg-gray-800 mb-8 rounded-md p-5">
        <h2 class="font-headings text-gray-700 dark:text-gray-400 text-4xl mb-6"><NuxtLink :to="post.path">{{post.title}}</NuxtLink></h2>
        <p>{{post.description}}</p>
      </div>
    </div>
</template>

<script lang="ts">
import Vue from 'vue'
export default Vue.extend({
    props: ['posts']
})
</script>
