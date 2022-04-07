<template>
  <div>
    <div
      class="grid grid-cols-2 sm:grid-cols-2 content-center gap-4 md:gap-8 m-2 md:m-8"
      v-if="store.language == 'deutsch'"
    >
      <BaseButton to="/refugees/shelter">Notunterkunft</BaseButton>
      <BaseButton to="/refugees/medicine">Medizinische Hilfe</BaseButton>
      <BaseButton to="/refugees/benefits">Leistung beantragen</BaseButton>
      <BaseButton to="/refugees/aufenthalt">Aufenthalt in Flensburg</BaseButton>
      <BaseButton to="/refugees/deutschLernen">Deutsch lernen</BaseButton>
      <BaseButton to="/refugees/pets">
        Heim- und Haustiere registrieren
      </BaseButton>
      <BaseButton to="/refugees/migrationsberatung">
        Migrations beratung
      </BaseButton>
      <BaseButton to="/refugees/spendenDolmetscher">
        Spenden erhalten
      </BaseButton>
    </div>

    <div
      class="grid grid-cols-2 sm:grid-cols-2 content-center gap-4 md:gap-8 m-2 md:m-8"
      v-if="store.language == 'englisch'"
    >
      <BaseButton to="/refugees/shelter">Emergency Accommondation</BaseButton>
      <BaseButton to="/refugees/medicine">Medical care</BaseButton>
      <BaseButton to="/refugees/benefits">Apply for Benefits</BaseButton>
      <BaseButton to="/refugees/aufenthalt">Stay in Flensburg</BaseButton>
      <BaseButton to="/refugees/deutschLernen">Learning German</BaseButton>
      <BaseButton to="/refugees/pets">Register Pets</BaseButton>
      <BaseButton to="/refugees/migrationsberatung">
        Migration counseling
      </BaseButton>
      <BaseButton to="/refugees/spendenDolmetscher">
        Receive Donations
      </BaseButton>
    </div>

    <div
      class="grid grid-cols-2 sm:grid-cols-2 content-center gap-4 md:gap-8 m-2 md:m-8"
      v-if="store.language == 'ukrainisch'"
    >
      <BaseButton to="/refugees/shelter">аварійний притулок</BaseButton>
      <BaseButton to="/refugees/medicine">Медична допомога</BaseButton>
      <BaseButton to="/refugees/benefits">
        подати заявку на отримання пільг
      </BaseButton>
      <BaseButton to="/refugees/aufenthalt">
        Залишайтеся у Фленсбурзі
      </BaseButton>
      <BaseButton to="/refugees/deutschLernen">вивчити німецьку</BaseButton>
      <BaseButton to="/refugees/pets">
        Зареєструйте дім і домашні тварини
      </BaseButton>
      <BaseButton to="/refugees/migrationsberatung">
        Поради щодо міграції
      </BaseButton>
      <BaseButton to="/refugees/spendenDolmetscher">
        отримувати пожертви
      </BaseButton>
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
