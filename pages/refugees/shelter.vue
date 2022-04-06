<template>
  <div>
    <div class="flex flex-row justify-between p-4">
      <div class="text-center">
        <button class="btn btn-sm btn-ghost bg-gray-300 text-black">
          Zur Startseite
        </button>
      </div>
      <div>
        <h3 class="text-3xl font-semibold">Notunterkunft</h3>
      </div>
      <div>
        <!--Icons-->
        <h5>Icons hier</h5>
      </div>
    </div>

    <LanguageTab></LanguageTab>

    <div class="grid grid-cols-6 gap-2 py-8 px-2">
      <div class="">
        <!--Navigation-->
        <h6>Navigation</h6>
      </div>
      <!-- Content Deutsch-->
      <article
        class="col-span-4 prose max-w-none"
        v-if="store.language == 'deutsch'">

        <h3>Kann ich nach Flensburg kommen?</h3>

        <p>
          Momentan wird die Verteilung auf die Kommunen über die Erstaufnahmeeinrichtung des Landesamtes für Zuwanderung und Flüchtlinge (LaZuF) 
          in Neumünster geregelt. 
          <b>
            Wenn Sie in Flensburg keine eigene Unterkunftsmöglichkeit haben, werden Sie 
            vorerst nach Neumünster verwiesen. 
          </b>
          Neben der reinen Unterbringung und Verpflegung gibt es dort z.B. soziale 
          und medizinische Angebote, welche durch das DRK (Deutsche Rote Kreuz) 
          betreut werden. 
          <br/>
          (Mehr Informationen: <a ref="https://www.drk-nms.de/landesunterkunft-neumuenster.html">https://www.drk-nms.de/landesunterkunft-neumuenster.html</a>)
        </p>

        <p>
            Adresse:
            <br/>
            Erstaufnahmeeinrichtung des Landesamtes für Zuwanderung und Flüchtlinge
            <br />
            Haart 148
            <br />
            24539 Neumünster
        </p>

        <h3>Wenn ich bereits in Flensburg bin?</h3>

        <p>
          Sie können in einer kostenlosen, städtischen Unterkunft bleiben.
          <br/>
          Rufen Sie dafür bei dieser Nummer an: <b>0049 170 9061389</b>
        </p>
      </article>
      <!-- Content englisch-->
      <article
        class="col-span-4 prose max-w-none"
        v-if="store.language == 'englisch'">

        <h3>Accommodation: where can I stay?</h3>

        <p>
          The city provides you with free accommodation.
          <br/>
          Please call this number for further information: <b>0049 170 9061389</b>
        </p>
      </article>
      <!-- Content ukrainisch-->
      <article
        class="col-span-4 prose max-w-none"
        v-if="store.language == 'ukrainisch'">

        <h3>Місце тимчасового перебування: де я можу зупинитись?</h3>

        <p>
          Ви можете зупинитись у безкоштовному, міському пункті тимчасового розміщення біженців.
          <br/>
          Інформацію про наявні у місті місця тимчасового перебування для біженців можна отримати за телефоном: <b>0049 170 9061389</b>
        </p>
      </article>


      <div class="">
        <!-- Quick Information -->
        <h6>Quick Information</h6>
      </div>
    </div>
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

    return { store }
  },
})
</script>
<style lang=""></style>
