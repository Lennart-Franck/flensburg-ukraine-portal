<template>
  <div class="sticky top-16 mx-4 w-48">
    <div
      class="outline rounded-md outline-gray-200 outline-1 prose prose-a:font-normal prose-sm p-4"
    >
      <h4>Navigation</h4>
      <nav class="mt-4">
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
