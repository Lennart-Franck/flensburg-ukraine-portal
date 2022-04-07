<template>
  <div>
    <div class="flex flex-row justify-between p-4">
      <div class="text-center">
        <button class="btn btn-sm btn-ghost bg-gray-300 text-black">
          Zur Startseite
        </button>
      </div>
      <div>
        <h3 class="text-3xl font-semibold">Kleidung, Dolmetscher...</h3>
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

        <h2>Kleidung, Dolmetscher... (kostenfrei)</h2>

        <h3>Kleiderspenden</h3>

        <div>
            <ul>
                <li>
                   <b>Sonnenblumenhaus</b> 2. Hand 
                   <br/>
                   Angelburger Str. 62
                   <br/>
                   24937 Flensburg
                   <br/>
                   <br/>
                   Donnerstag und Freitag 14 - 18 Uhr
                </li>
            </ul>
        </div>

        <h3>Hygieneartikel und weitere Sachspenden</h3>

        <div>
            <ul>
                <li>
                   Flüchtlingshilfe Flensburg e.V.
                   <br/>
                   Telefon: 0049 461 40 79 73 82
                   <br/>
                   E-Mail:
                   <a href="mailto:Ukrainehilfe@fluechtlingshilfeFlensburg.de">
                           Ukrainehilfe@fluechtlingshilfeFlensburg.de
                   </a>
                </li>
            </ul>
        </div>

        <h3>Dolmetscher*innen</h3>

        <div>
            <ul>
                <li>
                   Stadt Flensburg,
                   <br/>
                   Peter Rohrhuber
                   <br/>
                   Telefon: 0049 461 85 11 88
                   <br/>
                   E-Mail:
                   <a href="mailto:rohrhuber.peter@flensburg.de">
                           rohrhuber.peter@flensburg.de
                   </a>
                </li>
                <li>
                   Flüchtlingshilfe Flensburg e.V.
                   <br/>
                   Telefon: 0049 461 40 79 73 82
                   <br/>
                   E-Mail:
                   <a href="mailto:Ukrainehilfe@fluechtlingshilfeFlensburg.de">
                           Ukrainehilfe@fluechtlingshilfeFlensburg.de
                   </a>
                </li>
            </ul>
        </div>

        <h3>Fahrdienste</h3>

        <div>
            <ul>
                <li>
                   Flüchtlingshilfe Flensburg e.V.
                   <br/>
                   Telefon: 0049 461 40 79 73 82
                   <br/>
                   E-Mail:
                   <a href="mailto:Ukrainehilfe@fluechtlingshilfeFlensburg.de">
                           Ukrainehilfe@fluechtlingshilfeFlensburg.de
                   </a>
                </li>
            </ul>
        </div>

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
import OnlineEmail from '~~/components/OnlineEmail.vue'
import Terminvergabe from '~~/components/OnlineEmail.vue'
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
