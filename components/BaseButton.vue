<template>
  <div>
    <button @click="$router.push(to)" class="btn btn-primary text-white w-40">
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
