<template>
  <div>
    <div class="sticky top-16">
      <h2 class="uppercase text-black font-h2 text-lg lg:mt-16 tracking-wider">
        Table of contents
      </h2>
      <nav class="mt-4">
        <ul>
          <li
            :class="{
              'pl-4': link.depth === 3,
            }"
            class="toc-list"
            v-for="link of article.toc"
            :key="link.id"
          >
            <a
              role="button"
              class="transition-colors duration-75 text-base mb-2 block"
              :href="`#${link.id}`"
            >
              {{ link.text }}
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
