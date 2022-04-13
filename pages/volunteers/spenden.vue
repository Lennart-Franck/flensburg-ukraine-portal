<template>
  <div>
    <PageHeader v-if="store.language == 'deutsch'">
      Spenden
    </PageHeader>

    <PageContent :pageLinks="pageLinks" v-if="store.language == 'deutsch'">


        <h2 id="sachSpenden">Sachen spenden</h2>
        <p>
          Auf der folgenden wird der Bedarf an Sachspenden regemäßig aktualisierte und gebündelt. Zudem finden Sie dort Information über Spendenmöglichkeiten. 
        </p>
        <b>
            <a href="https://flensburghilftderukraine.de/?fbclid=IwAR0k1B_2HFBbh-W7u9eshve_f2hj5kiwzyqGr2KfoT9YsVmhhu1G6XKW15Y" target="_blank">
                Flensburg hilft der Ukraine
            </a>
        </b>

        <h2 id="finanzielle">Finanzielle Spenden</h2>
        <p>
            Für finanzielle Spenden steht die folgenden Kontoverbindung zur Verfügung:
        </p>
        <p>
            <b>Spendenkonto:</b>
            <br>
            <br>
            Stichwort "Nothilfe Ukraine"
            <br>
            Flüchtlingshilfe Flensburg e.V.
            <br>
            Nord-Ostsee-Sparkasse
            <br>
            IBAN: DE36 2175 0000 0164 7341 88
            <br>
            BIC: NOLADE21NOS
            <br>
        </p>

        <h2 id="unterkunft">Unterkunft anbieten</h2>

        <p>
            Eine Unterkunft kann kostenpflichtig oder kostenfrei unter dem folgenden 
            Formular eingetragen und angeboten werden:
        </p>
        <a href="https://pdf.form-solutions.net/metaform/Form-Solutions/sid/assistant/62291643c2c1e375d4828c23" target="_blank">
                Unterkunft regestrieren
        </a>
    
      <template v-slot:information>
        <p><b>KONTAKT</b></p>
        <p>
          Flüchtlingshilfe  Flensburg e.V.
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
          <br/>
          Web: 
          <a href="https://www.fluechtlingshilfe-flensburg.de/" target="_blank">
            https://www.fluechtlingshilfe-flensburg.de/
          </a>
        </p>
        <p>
          <p><b>Links</b></p>
          <a href="https://www.flensburg.de/Aktuelles/Ukraine-Portal/Helfer-innen-Helfen-Informieren-/index.php?object=tx%7c2306.27492.1&NavID=2306.1375&La=1" target="_blank">
             Newsletter der Stabsstelle Integration zur Ukraine-Situation in Flensburg
          </a>
          <br/>
          <br/>
          <a href="https://flensburghilftderukraine.de/?fbclid=IwAR0k1B_2HFBbh-W7u9eshve_f2hj5kiwzyqGr2KfoT9YsVmhhu1G6XKW15Y" target="_blank">
             Flensburg hilft der Ukraine
          </a>
          <br/>
          <br/>
          <a href="https://docs.google.com/forms/d/e/1FAIpQLSfr1G3p6QMTms1nss5gNH9YCmE5mxTec3SRYrelfRiov0Pe8A/viewform" target="_blank">
             Online-Formular: Hilfsangebote anmelden
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
    store.changeLanguage("deutsch")
    const pageLinks = [
                            {
                              name: 'Sachen spenden',
                              id: 'sachSpenden',
                            },
                            {
                              name: 'Finanzielle Spenden',
                              id: 'finanzielle',
                            },
                            {
                              name: 'Unterkunft anbieten',
                              id: 'unterkunft',
                            },
                          ]
    return { store, pageLinks }
  },
})
</script>
<style lang=""></style>
