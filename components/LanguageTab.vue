<template>
  <div>
    <div class="flex justify-center">
      <!--Tab Bar -->
      <div class="tabs">
        <a
          @click="changeLanguage('deutsch')"
          :class="
            language === 'deutsch'
              ? 'tab tab-bordered tab-active'
              : 'tab tab-bordered'
          "
        >
          Deutsch
        </a>
        <a
          @click="changeLanguage('englisch')"
          :class="
            language === 'englisch'
              ? 'tab tab-bordered tab-active'
              : 'tab tab-bordered'
          "
        >
          Englisch
        </a>
        <a
          @click="changeLanguage('ukrainisch')"
          :class="
            language === 'ukrainisch'
              ? 'tab tab-bordered tab-active'
              : 'tab tab-bordered'
          "
        >
          український
        </a>
      </div>
    </div>
  </div>
</template>
<script>
import { useLanguageStore } from '@/stores/language'

export default {
  setup() {
    const store = useLanguageStore
    const language = store.language

    return { language, store }
  },
  methods: {
    changeLanguage(newLanguage) {
      this.store.change(newLanguage)
    },
  },
}
</script>
<style lang=""></style>
