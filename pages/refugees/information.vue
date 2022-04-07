<template>
  <div>
    <div class="flex flex-row justify-between p-4">
      <div class="text-center">
        <button class="btn btn-sm btn-ghost bg-gray-300 text-black">
          Zur Startseite
        </button>
      </div>
      <div>
        <h3 class="text-3xl font-semibold">Weitere Informationen</h3>
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

       <h2>Landesinnenministerium SH</h2>
        <a href="https://www.schleswig-holstein.de/DE/Landesregierung/Themen/InneresSicherheit/Ukraine/_documents/faq_deutsch.html" target="_blank">
           Häufig gestellte Fragen für Betroffene der Ukraine-Krise
        </a>

        <div>
            <ul>
                <li>
                    Haben Sie Fragen zur Flucht aus der Ukraine und der Aufnahme in Deutschland? 
                    Das Innenministerium hat eine E-Mail-Adresse und Telefonnummer dafür:
                    <br/>
                    <br/>
                    <a href="mailto:flucht-ukraine@im.landsh.de">
                        flucht-ukraine@im.landsh.de
                   </a>
                   <br/>
                    0049 431 988 3369 (Sprechen Sie dort Ihre Nachricht auf den Anrufbeantworter. 
                    Die Nachrichten werden so schnell wie möglich beantwortet)
                    <br/>
                    <br/>
                    Der Link mit den Kontakten: 
                    <a href="https://www.schleswig-holstein.de/DE/Landesregierung/Themen/InneresSicherheit/Ukraine/kontakt/kontakt_node.html" target="_blank">
                       https://www.schleswig-holstein.de/DE/Landesregierung/Themen/InneresSicherheit/Ukraine/kontakt/kontakt_node.html
                    </a>
                </li>
            </ul>
        </div>

        <h2>Schleswig-Holsteinischer Landtag</h2>
        <a href="https://www.bmi.bund.de/SharedDocs/faqs/DE/themen/ministerium/ukraine-krieg/faq-ukraine-artikel.html" target="_blank">
           Der Beauftragte für Flüchtlings-, Asyl- und Zuwanderungsfragen: Hinweise zur Unterstützung von Geflüchteten aus der Ukraine
        </a>

        <h2>Bundesinnenministerium</h2>
        <a href="https://www.landtag.ltsh.de/beauftragte/fb/ukraine/" target="_blank">
           Bundesinnenministerium: Fragen und Antworten zur Einreise aus der Ukraine.
        </a>
        <p>Weitere Informationen finden Sie auch auf:
           <a href="https://www.germany4ukraine.de/hilfeportal-de" target="_blank">
           https://www.germany4ukraine.de
        </a>
        </p>

        <h2>Bundesamt für Migration und Flüchtlinge </h2>
        <a href="https://www.bamf.de/DE/Themen/AsylFluechtlingsschutz/ResettlementRelocation/InformationenEinreiseUkraine/informationen-einreise-ukraine-node.html" target="_blank">
           Fragen und Antworten zur Einreise aus der Ukraine und zum Aufenthalt in Deutschland (Stand: 04.03.2022)
        </a>

        <h2>Integrationsbeauftragte</h2>
        <a href="https://www.integrationsbeauftragte.de/ib-de/staatsministerin/krieg-in-der-ukraine" target="_blank">
           Fragen und Antworten zur Einreise aus der Ukraine und zum Aufenthalt in Deutschland
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
