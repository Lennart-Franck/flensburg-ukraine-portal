<template>
  <div>
    <button
      @click="$router.push('/')"
      class="btn btn-sm btn-ghost text-gray-600"
    >
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="20"
        height="20"
        viewBox="0 0 24 24"
        class="fill-current mr-2"
      >
        <path
          d="M16.67 0l2.83 2.829-9.339 9.175 9.339 9.167-2.83 2.829-12.17-11.996z"
        />
      </svg>
      <div class="hidden md:block">
        <div v-if="store.language == 'deutsch'">Zur Startseite</div>
        <div v-if="store.language == 'englisch'">Back to Start</div>
        <div v-if="store.language == 'ukrainisch'">На домашню сторінку</div>
      </div>
    </button>
  </div>
</template>
<script>
import { useLanguageStore } from '@/stores/language'

export default defineComponent({
  setup() {
    const store = useLanguageStore()

    return { store }
  },
})
</script>
<style lang=""></style>
