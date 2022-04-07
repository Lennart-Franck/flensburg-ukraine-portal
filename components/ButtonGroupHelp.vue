<template>
  <div>
    <div class="grid grid-cols-1 sm:grid-cols-2 gap-8 m-8">
      <BaseButton>Unterkunft anbieten</BaseButton>
      <BaseButton to="/refugees/medicine">Sachspenden</BaseButton>
      <BaseButton>Deutsche in der Ukraine</BaseButton>
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
