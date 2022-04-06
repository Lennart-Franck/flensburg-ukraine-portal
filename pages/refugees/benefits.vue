<template>
  <div>
    <div class="flex flex-row justify-between p-4">
      <div class="text-center">
        <button class="btn btn-sm btn-ghost bg-gray-300 text-black">
          Zur Startseite
        </button>
      </div>
      <div>
        <h3 class="text-3xl font-semibold">Leistungen beantragen</h3>
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

        <p>
            Um zu prüfen, ob Sie einen Anspruch auf Leistungen nach dem Asylbewerberleistungsgesetz (AsylbLG) 
            haben - wie z.B. Geld für Lebensmittel, Krankenversicherung und Unterkunft, müssen Sie sich bei uns registrieren. 
        </p>

        <h2>Was muss ich tun?</h2>

        <div>
          <ol>
            <li>
              Sie müssen sich bei uns <b>online per E-Mail melden.</b>
            </li>
            <li>
              Sie bekommen dann von uns einen <b>Termin</b> für Ihre <b>Registrierung</b>, 
              bei dem auch geprüft wird, ob Sie einen <b>Anspruch auf Leistungen nach dem AsylbLG</b>  haben.
            </li>
          </ol>
        </div>

        <OnlineEmail></OnlineEmail>

        <Terminvergabe></Terminvergabe>
        

        <h2>Nähere Informationen zu Leistungen,  Ansprechpartner*innen...</h2>
        <a href="https://www.flensburg.de/Aktuelles/Ukraine-Portal/Ukrainer-innen-Neu-in-Flensburg/Leistungen-beantragen-/Asylbewerberleistungsgesetz.php?object=tx,2306.2&ModID=10&FID=2306.1502.1&NavID=2306.1402&La=1&ort=2306.1" target="_blank">
            Asylbewerberleistungsgesetz
        </a>

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
