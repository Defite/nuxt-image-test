<template>
    <div class="flex items-center justify-center">
        <a href=""><Facebook class="h-6 mx-3" /></a>
        <a href=""><Github class="h-6 mx-3"/></a>
        <a href=""><Instagram class="h-6 mx-3" /></a>
        <a href=""><Lastfm class="h-6 mx-3" /></a>
        <a href=""><Twitter class="h-6 mx-3" /></a>
        <a href=""><Vimeo class="h-6 mx-3" /></a>
    </div>
</template>

<script lang="ts">
import Facebook from "@/assets/svg/facebook.svg?inline"
import Github from "@/assets/svg/github.svg?inline"
import Instagram from "@/assets/svg/instagram.svg?inline"
import Lastfm from "@/assets/svg/lastfm.svg?inline"
import Twitter from "@/assets/svg/twitter.svg?inline"
import Vimeo from "@/assets/svg/vimeo.svg?inline"

import Vue from 'vue'
export default Vue.extend({
    components: {
        Facebook,
        Github,
        Instagram,
        Lastfm,
        Twitter,
        Vimeo
    }
})
</script>