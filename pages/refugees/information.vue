<template>
  <div>
    <PageHeader v-if="store.language == 'deutsch'">
      Weitere Informationen
    </PageHeader>
    <PageHeader v-else-if="store.language == 'englisch'">
      Further Information
    </PageHeader>
    <PageHeader v-else-if="store.language == 'ukrainisch'">
      Додаткова інформація
    </PageHeader>

    <LanguageTab></LanguageTab>

    <PageContent :pageLinks="pageLinks" v-if="store.language == 'deutsch'">
      <h2 id="andesinnenministerium">Landesinnenministerium SH</h2>
      <a
        href="https://www.schleswig-holstein.de/DE/Landesregierung/Themen/InneresSicherheit/Ukraine/_documents/faq_deutsch.html"
        target="_blank"
      >
        Häufig gestellte Fragen für Betroffene der Ukraine-Krise
      </a>

      <div>
        <ul>
          <li>
            Haben Sie Fragen zur Flucht aus der Ukraine und der Aufnahme in
            Deutschland? Das Innenministerium hat eine E-Mail-Adresse und
            Telefonnummer dafür:
            <br />
            <br />
            <a href="mailto:flucht-ukraine@im.landsh.de">
              flucht-ukraine@im.landsh.de
            </a>
            <br />
            0049 431 988 3369 (Sprechen Sie dort Ihre Nachricht auf den
            Anrufbeantworter. Die Nachrichten werden so schnell wie möglich
            beantwortet)
            <br />
            <br />
            Der Link mit den Kontakten:
            <a
              href="https://www.schleswig-holstein.de/DE/Landesregierung/Themen/InneresSicherheit/Ukraine/kontakt/kontakt_node.html"
              target="_blank"
            >
              https://www.schleswig-holstein.de/DE/Landesregierung/Themen/InneresSicherheit/Ukraine/kontakt/kontakt_node.html
            </a>
          </li>
        </ul>
      </div>

      <h2 id="landtag">Schleswig-Holsteinischer Landtag</h2>
      <a
        href="https://www.bmi.bund.de/SharedDocs/faqs/DE/themen/ministerium/ukraine-krieg/faq-ukraine-artikel.html"
        target="_blank"
      >
        Der Beauftragte für Flüchtlings-, Asyl- und Zuwanderungsfragen: Hinweise
        zur Unterstützung von Geflüchteten aus der Ukraine
      </a>

      <h2 id="bundesinnenministerium">Bundesinnenministerium</h2>
      <a
        href="https://www.landtag.ltsh.de/beauftragte/fb/ukraine/"
        target="_blank"
      >
        Bundesinnenministerium: Fragen und Antworten zur Einreise aus der
        Ukraine.
      </a>
      <p>
        Weitere Informationen finden Sie auch auf:
        <a href="https://www.germany4ukraine.de/hilfeportal-de" target="_blank">
          https://www.germany4ukraine.de
        </a>
      </p>

      <h2 id="bundesamt">Bundesamt für Migration und Flüchtlinge</h2>
      <a
        href="https://www.bamf.de/DE/Themen/AsylFluechtlingsschutz/ResettlementRelocation/InformationenEinreiseUkraine/informationen-einreise-ukraine-node.html"
        target="_blank"
      >
        Fragen und Antworten zur Einreise aus der Ukraine und zum Aufenthalt in
        Deutschland (Stand: 04.03.2022)
      </a>

      <h2 id="integrationsbeauftragte">Integrationsbeauftragte</h2>
      <a
        href="https://www.integrationsbeauftragte.de/ib-de/staatsministerin/krieg-in-der-ukraine"
        target="_blank"
      >
        Fragen und Antworten zur Einreise aus der Ukraine und zum Aufenthalt in
        Deutschland
      </a>
    </PageContent>
    <PageContent v-if="store.language == 'englisch'">
    <p>
      Im Prototyp nicht vorhanden.
    </p>
    </PageContent>
    <PageContent v-if="store.language == 'ukrainisch'">
     Im Prototyp nicht vorhanden.
    </PageContent>
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
    const pageLinks = [
      {
        name: 'Landesinnenministerium SH',
        id: 'Landesinnenministerium',
      },
      {
        name: 'Schleswig-Holsteinischer Landtag',
        id: 'landtag',
      },
      {
        name: 'Bundesinnenministerium',
        id: 'bundesinnenministerium',
      },
      {
        name: 'Bundesamt für Migration und Flüchtlinge',
        id: 'bundesamt',
      },
      {
        name: 'Integrationsbeauftragte ',
        id: 'integrationsbeauftragte',
      },
    ]
    return { store, pageLinks }
  },
})
</script>
<style lang=""></style>
