<template>
  <div>
    <div
      class="grid grid-cols-2 sm:grid-cols-2 content-center gap-4 md:gap-8 m-2 md:m-8"
    >
      <BaseButton
        onclick="window.open('https://pdf.form-solutions.net/administrationCenter/Form-Solutions/01001000-0001/consent?redirectId=0a77f17a-f399-4d0e-a17b-db9ffea6eab1&releaseCacheId=5ed2cbeb-e900-46ac-baac-910f84cd74f3', '_blank')"
      >
        Unterkunft anbieten
      </BaseButton>
      <BaseButton to="/volunteers/helfen">Helfen & Informieren</BaseButton>
      <BaseButton to="/volunteers/deutscheUkraine">
        Deutsche in der Ukraine
      </BaseButton>
      <SecondaryButton>Weiter Informationen</SecondaryButton>
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
