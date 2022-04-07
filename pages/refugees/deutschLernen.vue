<template>
  <div>
    <PageHeader v-if="store.language == 'deutsch'">
      Deutsch lernen
    </PageHeader>

    <LanguageTab></LanguageTab>

    <PageContent :pageLinks="pageLinks" v-if="store.language == 'deutsch'">
      <article
        class="col-span-4 prose max-w-none"
        v-if="store.language == 'deutsch'">

        <p>
            In Flensburg gibt es vielfältige Angebote zur Sprachförderung, 
            von denen einige hier vorgestellt werden.
        </p>

        <h2 id="kurse">Kurs-Arten und Online-Suche</h2>
    
        <div class="overflow-x-auto">
            <table class="table table-zebra w-full">
                <!-- head -->
                <thead>
                <tr>
                    <th>Kurs-Art</th>
                    <th>Online-Suche</th>
                </tr>
                </thead>
                <tbody>
                <!-- row 1 -->
                <tr>
                    <td>Integrationskurs
                        (inkl. Deutsch-Zertifikat)
                        <br/>
                        finanziert durch das Bundesamt für Migration und Flüchtlinge
                    </td>
                    <th>
                        <a href="https://bamf-navi.bamf.de/de/Themen/Integrationskurse/?coord=528138.6070679" target="_blank">
                            BAMF-Navi
                        </a>
                    </th>
                </tr>
                <!-- row 2 -->
                <tr>
                    <td>Berufssprachkurse/DeuFöV
                        (inkl. Deutsch-Zertifikat)
                        <br/>
                        finanziert durch die Bundesagentur für Arbeit    
                    </td>
                    <td>
                        <a href="https://kursnet-finden.arbeitsagentur.de/kurs/kursDetail.do?seite=1&elearn=true&ue=25&bz=berufssprachkurs&rg=ro&us=J&anzahlGesamt=2&uo=9.4717%2354.8158&anzahlProSeite=200&doNext=detail&anzahlSeite=200&gv=MC+01+3&rs=Flensburg&gpBy=gbZiel&ae=7&out=gbZiel" target="_blank">
                         KURSNET
                        </a>
                    </td>
                </tr>
                </tbody>
            </table>
        </div>

        <h2>Kostenlose Angebote für Sprache in Flensburg</h2>
        <p>
            Darüber hinaus gibt es
            <a href="https://www.flensburg.de/loadDocument.phtml?ObjSvrID=2306&ObjID=11405&ObjLa=1&Ext=PDF" target="_blank">
                     kostenlose Angebote für Sprache und Treffen.
            </a>
        </p>

        <h2 id="onlineAngebote">Kostenlose Online-Angebote</h2>
        <ul>
            <li>
                <a href="https://deutsch.vhs-lernportal.de/wws/9.php#/wws/deutsch.php?sid=31282685853543903058615741574160S27a1d940" target="_blank">
                     vhs-Lernportal: Deutschkurse (ABC-Kurse bis B1/B2)
                </a>
            </li>
            <li>
                <a href="https://learngerman.dw.com/de/overview" target="_blank">
                     Deutsche Welle: Kostenlose Deutschkurse (A1 bis B1)
                </a>
            </li>
            <li>
                <a href="https://www.goethe.de/de/spr/ueb/dt1.html?wt_sc=deutschtrainer" target="_blank">
                     Goethe-Institut: Unterwegs Deutsch lernen (A1, App)
                </a>
            </li>
            <li>
                <a href="https://www.goethe.de/de/spr/ueb/led.html?wt_sc=lerndeutsch" target="_blank">
                     Goethe-Institut: Die Stadt der Wörter
                </a>
            </li>
        </ul>

        <h2 id="netzwerk">Netzwerk Sprachförderung für erwachsene Zugewanderte</h2>
        <p>Das Netzwerktreffen "Sprachförderung für erwachsene Zugewanderte" ist eine Zusammenarbeit mit dem Kreis Schleswig-Flensburg. Das Netzwerk vereint viele Akteure zum Spracherwerb für Migrant*innen und Geflüchtete, wie z.B. Sprachkursträger, Migrationsberatungen, 
            Ehrenamtler weitere Behörden wie das Jobcenter und die Agentur für Arbeit. 
            Das Netzwerk trifft sich drei bis viermal im Jahr. 
        </p>

      </article>
      <template v-slot:information>
        <p><b>Kontakt</b></p>
        <p>
          Melanie Gdanitz
          <br />
          Stabsstelle Integration
          <br />
          Koordinierungsstelle für Integration
          <br />
          <br />
          Rathausplatz 1
          <br/>
          24937 Flensburg
        </p>
        <p>
          Telefon: 0461 85-4554
          <br/>
          Raum: 1303
          <br/>
          <a href="mailto:gdanitz.melanie@flensburg.de">
            gdanitz.melanie@flensburg.de
          </a>
        </p>

        <p>
          <p><b>Dokumente</b></p>
          <br/>
          <a href="https://www.flensburg.de/loadDocument.phtml?ObjSvrID=2306&ObjID=13267&ObjLa=1&Ext=PDF" target="_blank">
            Sprachschulen in Flensburg (Stand: 01/2022) (PDF, 580 kB)
          </a>
          <br/>
          <br/>
          <a href="https://www.flensburg.de/loadDocument.phtml?ObjSvrID=2306&ObjID=11405&ObjLa=1&Ext=PDF" target="_blank">
            Kostenlose Angebote für Migrant*innen und Geflüchtete: Sprache und Treffen (PDF, 556 kB, (Stand: 02/2022))
          </a>
        </p>

        <p>
          <p><b>Links</b></p>
          <a href="https://www.deutschkurs-sh.de/allgemeine-bedarfsmeldung/" target="_blank">
             Bedarfsmeldung (EOK/STAFF)
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
                              name: 'Kurs-Arten und Online-Suche',
                              id: 'kurse',
                            },
                            {
                              name: 'Kostenlose Angebote für Sprache in Flensburg',
                              id: 'angebote',
                            },
                            {
                              name: 'Kostenlose Online-Angebote',
                              id: 'onlineAngebote',
                            },
                            {
                              name: 'Netzwerk Sprachförderung für erwachsene Zugewanderte',
                              id: 'netzwerk',
                            },
                          ]
    return { store, pageLinks }
  },
})
</script>
<style lang=""></style>
