<template>
  <div>
    <div
      class="grid grid-cols-2 sm:grid-cols-2 content-center gap-4 md:gap-8 m-2 md:m-8"
    >
      <BaseButton
        onclick="window.open('https://pdf.form-solutions.net/metaform/Form-Solutions/sid/assistant/62291643c2c1e375d4828c23', '_blank')"
      >
        Unterkunft anbieten
      </BaseButton>
      <BaseButton to="/volunteers/helfen">Helfen & Informieren</BaseButton>
      <BaseButton to="/volunteers/deutscheUkraine">
        Deutsche in der Ukraine
      </BaseButton>
      <BaseButton to="/volunteers/spenden">
        Spenden
      </BaseButton>
      <BaseButton to="/volunteers/aufenthalt">Aufenthalt in Flensburg</BaseButton>
      <SecondaryButton onclick="window.open('https://www.flensburg.de/', '_blank')">
        zur Flensburg.de
        </SecondaryButton>
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
<style lang=""></style>
