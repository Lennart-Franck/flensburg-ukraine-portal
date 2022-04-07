<template>
  <div class="mx-auto sm:mx-0">
    <button
      @click="$router.push(to)"
      class="btn btn-primary text-white text-xs md:text-sm w-40 btn-md md:btn-lg"
    >
      <slot />
    </button>
  </div>
</template>
<script>
export default defineComponent({
  props: ['to'],
})
</script>
<style lang=""></style>
