<template>
  <div
    tabindex="0"
    class="collapse collapse-arrow rounded-md bg-gray-100 mx-1 h-14 max-w-none"
  >
    <input type="checkbox" class="peer" />
    <div class="collapse-title">
      <div class="text-left">Navigation</div>
    </div>
    <div class="collapse-content">
      <nav class="">
        <ul class="">
          <li v-for="link of links" :key="link.id">
            <a role="button" :href="`#${link.id}`">
              {{ link.name }}
            </a>
          </li>
        </ul>
      </nav>
    </div>
  </div>
</template>
<script>
export default defineComponent({
  props: ['links'],
})
</script>
<style lang=""></style>
