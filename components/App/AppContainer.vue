<template>
  <div class="flex flex-col min-h-screen">
    <header>
      <AppHeader />
    </header>
    <div class="flex-grow">
      <slot />
    </div>
    <div>
      <AppFooter />
    </div>
  </div>
</template>
<script>
import AppFooter from './AppFooter.vue'
export default { components: { AppFooter } }
</script>
<style lang=""></style>
