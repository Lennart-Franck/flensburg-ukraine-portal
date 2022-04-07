<template>
  <div>
    <div
      class="grid grid-cols-1 sm:grid-cols-2 content-center gap-8 m-8"
      v-if="store.language == 'deutsch'"
    >
      <BaseButton>Notunterkunft</BaseButton>
      <BaseButton to="/refugees/medicine">Medizinische Hilfe</BaseButton>
      <BaseButton>Leistung beantragen</BaseButton>
      <BaseButton>Aufenthalt in Flensburg</BaseButton>
      <BaseButton>Deutsch lernen</BaseButton>
      <BaseButton>Heim- und Haustiere registrieren</BaseButton>
      <BaseButton>Migrations beratung</BaseButton>
      <BaseButton>Spenden erhalten</BaseButton>
    </div>

    <div
      class="grid grid-cols-1 sm:grid-cols-2 gap-8 m-8"
      v-if="store.language == 'englisch'"
    >
      <BaseButton>Emergency Accommondation</BaseButton>
      <BaseButton to="/refugees/medicine">Medical care</BaseButton>
      <BaseButton>Apply for Benefits</BaseButton>
      <BaseButton>Stay in Flensburg</BaseButton>
      <BaseButton>Learning German</BaseButton>
      <BaseButton>Register Pets</BaseButton>
      <BaseButton>Migration counseling</BaseButton>
      <BaseButton>Receive Donations</BaseButton>
    </div>

    <div
      class="grid grid-cols-1 sm:grid-cols-2 gap-8 m-8"
      v-if="store.language == 'ukrainisch'"
    >
      <BaseButton>аварійний притулок</BaseButton>
      <BaseButton to="/refugees/medicine">Медична допомога</BaseButton>
      <BaseButton>подати заявку на отримання пільг</BaseButton>
      <BaseButton>Залишайтеся у Фленсбурзі</BaseButton>
      <BaseButton>вивчити німецьку</BaseButton>
      <BaseButton>Зареєструйте дім і домашні тварини</BaseButton>
      <BaseButton>Поради щодо міграції</BaseButton>
      <BaseButton>отримувати пожертви</BaseButton>
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
