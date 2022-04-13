<template>
  <div>
    <PageHeader v-if="store.language == 'deutsch'">Notunterkunft</PageHeader>
    <PageHeader v-else-if="store.language == 'englisch'">
      Emergency Accommodation
    </PageHeader>
    <PageHeader v-else-if="store.language == 'ukrainisch'">
      Місце тимчасового перебування
    </PageHeader>

    <LanguageTab></LanguageTab>

    <PageContent :pageLinks="pageLinksDe" v-if="store.language == 'deutsch'">
      <h3 id="flensburg">Kann ich nach Flensburg kommen?</h3>

      <p>
        Momentan wird die Verteilung auf die Kommunen über die
        Erstaufnahmeeinrichtung des Landesamtes für Zuwanderung und Flüchtlinge
        (LaZuF) in Neumünster geregelt.
        <b>
          Wenn Sie in Flensburg keine eigene Unterkunftsmöglichkeit haben,
          werden Sie vorerst nach Neumünster verwiesen.
        </b>
        Neben der reinen Unterbringung und Verpflegung gibt es dort z.B. soziale
        und medizinische Angebote, welche durch das DRK (Deutsche Rote Kreuz)
        betreut werden.
        <br />
        (Mehr Informationen:
        <a ref="https://www.drk-nms.de/landesunterkunft-neumuenster.html">
          https://www.drk-nms.de/landesunterkunft-neumuenster.html
        </a>
        )
      </p>

      <p>
        Adresse:
        <br />
        Erstaufnahmeeinrichtung des Landesamtes für Zuwanderung und Flüchtlinge
        <br />
        Haart 148
        <br />
        24539 Neumünster
      </p>

      <h3 id="bereitsInFlensburg">Wenn ich bereits in Flensburg bin?</h3>

      <p>
        Sie können in einer kostenlosen, städtischen Unterkunft bleiben.
        <br />
        Rufen Sie dafür bei dieser Nummer an:
        <b>0049 170 9061389</b>
      </p>
    </PageContent>
    <PageContent :pageLinks="pageLinksEn" v-if="store.language == 'englisch'">
      <article
        class="col-span-4 prose max-w-none"
        v-if="store.language == 'englisch'"
      >
        <h3 id="flensburg">Accommodation: where can I stay?</h3>

        <p>
          The city provides you with free accommodation.
          <br />
          Please call this number for further information:
          <b>0049 170 9061389</b>
        </p>
      </article>
    </PageContent>
    <PageContent :pageLinks="pageLinksUk" v-if="store.language == 'ukrainisch'">
      <article
        class="col-span-4 prose max-w-none"
        v-if="store.language == 'ukrainisch'"
      >
        <h3 id="flensburg">
          Місце тимчасового перебування: де я можу зупинитись?
        </h3>

        <p>
          Ви можете зупинитись у безкоштовному, міському пункті тимчасового
          розміщення біженців.
          <br />
          Інформацію про наявні у місті місця тимчасового перебування для
          біженців можна отримати за телефоном:
          <b>0049 170 9061389</b>
        </p>
      </article>
    </PageContent>
  </div>
</template>
<script>
import LanguageTab from '~~/components/LanguageTab.vue'
import { useLanguageStore } from '@/stores/language'
definePageMeta({
  layout: 'custom',
})
export default defineComponent({
  setup() {
    const store = useLanguageStore()
    const pageLinksDe = [
      {
        name: 'Kann ich nach Flensburg kommen?',
        id: 'flensburg',
      },
      {
        name: 'Wenn ich bereits in Flensburg bin?',
        id: 'bereitsInFlensburg',
      },
    ]
    const pageLinksEn = [
      {
        name: 'Accommodation: where can I stay?',
        id: 'flensburg',
      },
    ]
    const pageLinksUk = [
      {
        name: 'Місце тимчасового перебування: де я можу зупинитись?',
        id: 'flensburg',
      },
    ]
    return { store, pageLinksDe, pageLinksEn, pageLinksUk }
  },
})
</script>
<style lang=""></style>
