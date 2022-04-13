<template>
  <div>
    <PageHeader v-if="store.language == 'deutsch'">
      Kleidung, Dolmetscher... (kostenfrei)
    </PageHeader>

    <LanguageTab></LanguageTab>

    <PageContent :pageLinks="pageLinks" v-if="store.language == 'deutsch'">
      <h3 id="kleiderspenden">Kleiderspenden</h3>

      <div>
        <ul>
          <li>
            <b>Sonnenblumenhaus</b>
            2. Hand
            <br />
            Angelburger Str. 62
            <br />
            24937 Flensburg
            <br />
            <br />
            Donnerstag und Freitag 14 - 18 Uhr
          </li>
        </ul>
      </div>

      <h3 id="hygieneartikel">Hygieneartikel und weitere Sachspenden</h3>

      <div>
        <ul>
          <li>
            Flüchtlingshilfe Flensburg e.V.
            <br />
            Telefon: 0049 461 40 79 73 82
            <br />
            E-Mail:
            <a href="mailto:Ukrainehilfe@fluechtlingshilfeFlensburg.de">
              Ukrainehilfe@fluechtlingshilfeFlensburg.de
            </a>
          </li>
        </ul>
      </div>

      <h3 id="dolmetscher*innen">Dolmetscher*innen</h3>

      <div>
        <ul>
          <li>
            Stadt Flensburg,
            <br />
            Peter Rohrhuber
            <br />
            Telefon: 0049 461 85 11 88
            <br />
            E-Mail:
            <a href="mailto:rohrhuber.peter@flensburg.de">
              rohrhuber.peter@flensburg.de
            </a>
          </li>
          <li>
            Flüchtlingshilfe Flensburg e.V.
            <br />
            Telefon: 0049 461 40 79 73 82
            <br />
            E-Mail:
            <a href="mailto:Ukrainehilfe@fluechtlingshilfeFlensburg.de">
              Ukrainehilfe@fluechtlingshilfeFlensburg.de
            </a>
          </li>
        </ul>
      </div>

      <h3 id="fahrdienste">Fahrdienste</h3>

      <div>
        <ul>
          <li>
            Flüchtlingshilfe Flensburg e.V.
            <br />
            Telefon: 0049 461 40 79 73 82
            <br />
            E-Mail:
            <a href="mailto:Ukrainehilfe@fluechtlingshilfeFlensburg.de">
              Ukrainehilfe@fluechtlingshilfeFlensburg.de
            </a>
          </li>
        </ul>
      </div>

      <template v-slot:information>
        <p>
          <b>Flüchtlingshilfe Flensburg e.V.</b>
          <br />
          Schiffbrücke 45
          <br />
          24939 Flensburg
          <br />
        </p>
        <p>
          Telefon: 0461 - 407 973 82
          <br />
          <a href="mailto:info@fluechtlingshilfe-flensburg.de">
            info@fluechtlingshilfe-flensburg.de
          </a>
          <br />
          Web:
          <a href="https://www.fluechtlingshilfe-flensburg.de/" target="_blank">
            https://www.fluechtlingshilfe-flensburg.de/
          </a>
        </p>
      </template>
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
        name: 'Kleiderspenden',
        id: 'kleiderspenden',
      },
      {
        name: 'Hygieneartikel und weitere Sachspenden',
        id: 'hygieneartikel',
      },
      {
        name: 'Dolmetscher*innen',
        id: 'dolmetscher*innen',
      },
      {
        name: 'Fahrdienste',
        id: 'fahrdienste',
      },
    ]
    return { store, pageLinks }
  },
})
</script>
<style lang=""></style>
