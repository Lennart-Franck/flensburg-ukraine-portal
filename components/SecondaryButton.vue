<template>
  <div>
    <button @click="$router.push(to)" class="btn btn-outline btn-primary w-40">
      <slot />
    </button>
  </div>
</template>
<script>
export default {}
</script>
<style lang=""></style>
