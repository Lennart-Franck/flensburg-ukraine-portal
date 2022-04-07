<template>
  <div>
    <div class="flex justify-center">
      <!--Tab Bar -->
      <div class="tabs">
        <a
          @click="store.changeLanguage('deutsch')"
          :class="
            store.language == 'deutsch'
              ? 'tab tab-bordered tab-active'
              : 'tab tab-bordered'
          "
          class="tab-xs sm:tab"
        >
          Deutsch
        </a>
        <a
          @click="store.changeLanguage('englisch')"
          :class="
            store.language == 'englisch'
              ? 'tab tab-bordered tab-active'
              : 'tab tab-bordered'
          "
          class="tab-xs sm:tab"
        >
          Englisch
        </a>
        <a
          @click="store.changeLanguage('ukrainisch')"
          :class="
            store.language == 'ukrainisch'
              ? 'tab tab-bordered tab-active'
              : 'tab tab-bordered'
          "
          class="tab-xs sm:tab"
        >
          український
        </a>
      </div>
    </div>
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
<style></style>
