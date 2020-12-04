<template>
    <footer class="mx-auto text-center">
        <h3 class="text-3xl font-headings font-black mb-6">Find me here:</h3>
        <SocialIcons />
    </footer>
</template>

<script lang="ts">
import Vue from 'vue'
import SocialIcons from "@/components/SocialIcons.vue"
export default Vue.extend({
    components: {
        SocialIcons
    }
})
</script>