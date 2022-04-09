<template>
  <div>
    <PageHeader v-if="store.language == 'deutsch'">
      Ihr Aufenthalt in Flensburg
    </PageHeader>
    <LanguageTab></LanguageTab>



    <PageContent :pageLinks="pageLinks" v-if="store.language == 'deutsch'">
       <article
        class="col-span-4 prose max-w-none"
        v-if="store.language == 'deutsch'">
        <p>Stand: 01.04.2022:</p>

        <h2 id="wasGilt">Was gilt für aus der Ukraine Geflüchtete?*</h2>
        <div>
          <ul>
            <li>
              Es muss kein <b>Asylverfahren</b> durchlaufen werden
            </li>
            <li>
              <b>Ukrainische Staatsangehörige</b>, die aus der Ukraine geflüchtet sind sowie ihre Familienangehörigen erhalten 
              <b>eine Aufenthaltserlaubnis nach § 24 AufenthG</b> zum vorübergehenden Schutz.
            </li>
            <li>
                Auch <b>Drittstaatsangehörige</b>, die aus der Ukraine geflüchtet sind, 
                erhalten unter bestimmten Voraussetzungen diese Aufenthaltserlaubnis 
            </li>
            <li>
                Diese Aufenthaltserlaubnis berechtigt zur <b>Aufnahme einer Erwerbstätigkeit</b>
            </li>
            <li>
                Wenn Sie hilfebedürftig sind, können Sie <b>Leistungen nach dem Asylbewerberleistungsgesetz</b> beantragen
            </li>
            <li>
                Sie erhalten die Aufenthaltserlaubnis <b>für 2 Jahre</b> (längstens bis zum 04.03.2024).
            </li>
          </ul>
        </div>

        <h2 id="fürWen">*Für wen gilt das? (Personengruppen)</h2>
        <p>Personengruppen, die <b>seit dem 24. Februar 2022</b> als Folge der militärischen Invasion durch Russland 
            aus der Ukraine vertrieben worden sind (Art. 2 Nr. 1):</p>

        <div>
          <ol>
            <li>
              <b>Ukrainische Staatsangehörige</b>, die vor dem 24. Februar 2022 ihren Aufenthalt in der Ukraine hatten,
            </li>
            <li>
              <b>Staatenlose und Staatsangehörige anderer Drittländer</b> als der Ukraine, die vor dem 24. Februar 2022 
              in der Ukraine internationalen Schutz oder einen gleichwertigen nationalen Schutz genossen haben,
            </li>
            <li>
                <b>Familienangehörige</b> der unter (a) und (b) genannten Personengruppen.
            </li>
          </ol>
        </div>

        <p>Dazu kommen Staatenlose und Staatsangehörige anderer Drittländer (Art. 2 Nr. 2), die nachweisen können, dass</p>

        <div>
          <ul>
            <li>
              sie sich vor dem 24. Februar 2022 auf der Grundlage eines nach ukrainischem Recht 
              erteilten <b>gültigen Aufenthaltstitels</b> rechtmäßig in der Ukraine aufgehalten haben, und
            </li>
            <li>
              <b>die nicht in der Lage sind, sicher und dauerhaft in ihr Herkunftsland oder ihre Herkunftsregion zurückzukehren.</b>
            </li>
          </ul>
        </div>

        <OnlineEmail></OnlineEmail>

        <Terminvergabe></Terminvergabe>

        
        <h2 id="beschluss">Beschluss des Europäischen Rats</h2>
        <p>Der europäische Rat hat am 4. März 2022 den erforderlichen Beschluss zur Feststellung des Bestehens eines Massenzustroms von Vertriebenen getroffen (nach Artikel 5 Abs. 1 der RL 2001/55/EG des Rates vom 20. Juli 2001 
            über Mindestnormen für die Gewährung vorübergehenden Schutzes).</p>
      </article>

      <template v-slot:information>
        <p>
          Ausländerrechtliche Angelegenheiten
          <br />
          Schleswiger Straße 66
          <br />
          24941 Flensburg
          <br />
        </p>
        <p>
          Telefon: 0461 85-4423
          <br />
          <a href="mailto:einwanderungsbuero@flensburg.de">
            einwanderungsbuero@flensburg.de
          </a>
        </p>

        <p>
          Öffnungszeiten
          <br/>
          Montag bis Freitag: 08:30 bis 12:00
          <br/>
          Montag bis Mittwoch: 13:30 bis 15:30
          <br/>
          Donnerstag: 14:00 bis 17:00
        </p>
      </template>
    </PageContent>
    
  </div>
</template>
<script>
import LanguageTab from '~~/components/LanguageTab.vue'
import { useLanguageStore } from '@/stores/language'
import PageContent from '~~/components/PageContent.vue'
definePageMeta({
  layout: 'custom',
})
export default defineComponent({
    setup() {
        const store = useLanguageStore();
        const pageLinks = [
                            {
                              name: 'Was gilt für aus der Ukraine Geflüchtete?*',
                              id: 'wasGilt',
                            },
                            {
                              name: '*Für wen gilt das? (Personengruppen)',
                              id: 'fürWen',
                            },
                            {
                              name: 'Online per E-Mail melden',
                              id: 'Email',
                            },
                            {
                              name: 'Terminvergabe',
                              id: 'termine',
                            },
                            {
                              name: 'Beschluss des Europäischen Rats',
                              id: 'beschluss',
                            },
                          ]
        return { store, pageLinks };
    },
    components: { PageContent }
})
</script>
<style lang=""></style>
