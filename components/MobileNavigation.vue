<template>
  <div
    tabindex="0"
    class="collapse collapse-arrow border border-base-300 bg-base-100 rounded-box mx-1 max-w-sm mt-2"
  >
    <input type="checkbox" class="peer" />
    <div class="collapse-title font-medium">
      <div class="text-lg text-left">Navigation</div>
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
