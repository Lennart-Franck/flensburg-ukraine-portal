<template>
  <div>
    <AppHeader />
    <div class="bg-gray-200 min-h-screen">
      <slot />
    </div>

    <AppFooter />
  </div>
</template>
<script>
import AppFooter from './AppFooter.vue'
export default { components: { AppFooter } }
</script>
<style lang=""></style>
