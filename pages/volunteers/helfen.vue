<template>
  <div>
    <PageHeader v-if="store.language == 'deutsch'">
      Ehrenamtliche Helfer:in
    </PageHeader>

    <PageContent :pageLinks="pageLinks" v-if="store.language == 'deutsch'">

        <p>
         Sie möchten Menschen, die aus der Ukraine nach Flensburg kommen, 
         wirkungsvoll unterstützen? 
        </p>

        <p>
          Auf der <b>Webseite</b>
          <a href="https://flensburghilftderukraine.de/?fbclid=IwAR0k1B_2HFBbh-W7u9eshve_f2hj5kiwzyqGr2KfoT9YsVmhhu1G6XKW15Y" target="_blank">
            "Flensburg hilft der Ukraine"
          </a>
          (Flüchtlingshilfe/Flensburg sagt Moin/Stadt Flensburg) 
          werden alle <b>Hilfsmöglichkeiten/-angebote gebündelt</b>.
          <br/>
          Herzlichen Dank für Ihr Engagement!
        </p>

        <h2 id="helfen">Helfen</h2>
        <p>
          Wer ehrenamtlich helfen möchte, hat die Möglichkeit sich in das folgende Formular als Helfer:innen einzutragen: 
          <br>
          <br>
          <a href="https://forms.gle/FyjJhpXZ1gCPFBWm7?fbclid=IwAR1nxHAe-kI4SJ-T7WHZ8q-yQMCMS-MUETK4p6IFa719vLDd3KdvuUlMKno" target="_blank">
                Hilfsangebote aus Flensburg
            </a>
        </p>

        <h2 id="flensburgHilft">Sachspenden</h2>
        <p>
          Auf der folgenden Seite werden die Information für Sachspenden regelmäßig aktualisiert: 
        </p>
        <b>
            <a href="https://flensburghilftderukraine.de/?fbclid=IwAR0k1B_2HFBbh-W7u9eshve_f2hj5kiwzyqGr2KfoT9YsVmhhu1G6XKW15Y" target="_blank">
                Flensburg hilft der Ukraine
            </a>
        </b>

        <h2 id="news"> Newsletter der Stabstelle Integration</h2>
        <p>
            Newsletter für Ukraine-Helfer:innen
            <br/>
            <a href="https://www.flensburg.de/Aktuelles/Ukraine-Portal/Infos-f%C3%BCr-Ukraine-Helfer-innen/" target="_blank">
            "Verweis einbauen"
            </a>
        </p>

        <h2 id="hinweise">Hinweise zu Hilfsangeboten</h2>
        <h3>Sachspenden</h3>
        <p>
            Geben Sie im Formular bei Sachspenden gerne an, was Sie abgeben möchten. 
            Wir aktualisieren den aktuellen Bedarf an Sachspenden auf dieser Seite und 
            im Online-Formular. 
        </p>
        <h3>private Unterbringung/Beherbergung</h3>
        <p>
            Menschen, die <b>nicht</b> bei Angehörigen in Flensburg wohnen können, werden in 
            städtischen Unterkünften untergebracht. Wenn die Kapazitäten knapp werden, 
            kommt die Stadt Flensburg gern auf Angebote, die über das Formular eingereicht wurden zurück.
        </p>
        <h3>Transfer ab Grenze</h3>
        <p>
            Es ist derzeit <b>nicht</b> zu empfehlen mit Bussen an die ukrainische Grenze zu fahren, um dort Menschen 
            ohne vorherige Vereinbarung abzuholen. Viele Betroffene warten dort derzeit auf 
            Angehörige und möchten diese Angebote nicht wahrnehmen.
        </p>

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
                              name: 'Helfen',
                              id: 'helfen',
                            },
                            {
                              name: 'Sachen spenden',
                              id: 'flensburgHilft',
                            },
                            {
                              name: 'Newsletter der Stabstelle Integration',
                              id: 'news',
                            },
                            {
                              name: 'Hinweise zu Hilfsangeboten',
                              id: 'hinweise',
                            },
                          ]
    return { store, pageLinks }
  },
})
</script>
<style lang=""></style>
