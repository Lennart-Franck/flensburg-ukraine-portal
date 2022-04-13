<template>
  <div class="mx-auto sm:mx-0">
    <button
      @click="$router.push(to)"
      class="btn btn-outline btn-primary w-40 text-xs md:text-sm btn-md md:btn-lg"
    >
      <slot />
    </button>
  </div>
</template>
<script>
export default {}
</script>
<style lang=""></style>
