<template>
  <div>
    <PageHeader v-if="store.language == 'deutsch'">
      Migrationsberatung - Kontakte
    </PageHeader>
    <LanguageTab></LanguageTab>

    <PageContent :pageLinks="pageLinks" v-if="store.language == 'deutsch'">
        <article
        class="col-span-4 prose max-w-none"
        v-if="store.language == 'deutsch'">

        <p>Es wurden 3 Adressen gefunden</p>

        <div id="kontakte" class="overflow-x-auto">
            <table class="table table-zebra w-full">
                <!-- head -->
                <thead>
                <tr>
                    <th>
                        <a href="https://www.flensburg.de/Aktuelles/Ukraine-Portal/Ukrainer-innen-Neu-in-Flensburg/Migrationsberatung-Kontakte/index.php?ModID=9&object=tx%7c2306.1&FID=2306.561.1&NavID=2306.1407&La=1" target="_blank">
                            AWO Integrationscenter
                        </a>
                    </th>
                </tr>
                </thead>
                <tbody>
                <!-- row 1 -->
                <tr>
                    <td>
                        Schloßstraße 4
                        <br/>
                        24939 Flensburg
                        <br/>
                        <a href="http://maps.google.de/maps?t=m&hl=de&q=Schlo%C3%9Fstra%C3%9Fe+4%2C+24939+Flensburg" target="_blank">
                            Karte anzeigen
                        </a>
                    </td>
                    <td>
                        Telefon: 0049 1715680380 (Serhan Bilgic)
                        <br/>
                        E-Mail:
                        <a href="mailto:serhan.bilgic@awo-sh.de">
                           serhan.bilgic@awo-sh.de
                        </a>
                        <br/>
                        Telefon: 0461 24743 (Selina Hossain)
                        <br/>
                        E-Mail:
                        <a href="mailto:selina.hossain@awo-sh.de">
                           selina.hossain@awo-sh.de
                        </a>
                        <br/>
                        Telefon: 0151 54155156 (Pia Streit)
                        <br/>
                        E-Mail:
                        <a href="mailto:janin.petersen@awo-sh.de">
                           janin.petersen@awo-sh.de
                        </a>
                        <br/>
                    </td>
                </tr>
                </tbody>
            </table>
        </div>
        <div class="overflow-x-auto">
            <table class="table table-zebra w-full">
                <!-- head -->
                <thead>
                <tr>
                    <th>
                        <a href="https://www.flensburg.de/Aktuelles/Ukraine-Portal/Ukrainer-innen-Neu-in-Flensburg/Migrationsberatung-Kontakte/index.php?ModID=9&object=tx%7c2306.1&FID=2306.356.1&NavID=2306.1407&La=1" target="_blank">
                            Diakonisches Werk
                        </a>
                    </th>
                </tr>
                </thead>
                <tbody>
                <!-- row 1 -->
                <tr>
                    <td>
                        Johanniskirchhof 19/19a
                        <br/>
                        24937 Flensburg
                        <br/>
                        <a href="http://maps.google.de/maps?t=m&hl=de&q=Johanniskirchhof+19%2F19a%2C+24937+Flensburg" target="_blank">
                            Karte anzeigen
                        </a>
                    </td>
                    <td>
                        Telefon: 0461 48083-21
                        <br/>
                        Web:
                        <a href="https://www.kirchenkreis-schleswig-flensburg.de/diakonisches-werk/angebote-in-flensburg/beratungszentrum-fuer-erziehungs-familien-und-lebensfragen-beratungsstelle-zum-218-219.html" target="_blank">
                            Erziehungs- und Lebensfragen..
                        </a>
                        <br/>
                        Web: 
                        <a href="https://www.kirchenkreis-schleswig-flensburg.de/diakonisches-werk/angebote-in-flensburg/weitere-beratungsangebote/schuldner-und-verbraucherinsolvenzshyberatung.html" target="_blank">
                            Sozial- und Schuldnerberatung
                        </a>
                        <br/>
                            Web: 
                            <a href="https://www.kirchenkreis-schleswig-flensburg.de/diakonisches-werk/angebote-in-flensburg/beratungszentrum-fuer-erziehungs-familien-und-lebensfragen-beratungsstelle-zum-218-219/schwangerschaftskonfliktberatung.html" target="_blank">
                               Schwangerschaftskonflikt
                            </a>
                        <br/>
                            Web: 
                            <a href="https://www.kirchenkreis-schleswig-flensburg.de/diakonisches-werk/angebote-in-flensburg/weitere-beratungsangebote/kurberatung-fuer-muetter-und-vaeter.html" target="_blank">
                               Kurberatung
                            </a>
                        <br/>
                            Web: 
                            <a href="https://www.kirchenkreis-schleswig-flensburg.de/diakonisches-werk/angebote-in-flensburg/weitere-beratungsangebote/der-tagestreff.html" target="_blank">
                               Obdachlosigkeit (Männer)
                            </a>
                        <br/>
                        <br/>
                            Web: 
                            <a href="https://www.kirchenkreis-schleswig-flensburg.de/diakonisches-werk/angebote-in-flensburg/weitere-beratungsangebote/migrationsfachdienst.html" target="_blank">
                               Migrationsfachdienst
                            </a>
                        <br/>
                    </td>
                </tr>
                </tbody>
            </table>
        </div>
        <div class="overflow-x-auto">
            <table class="table table-zebra w-full">
                <!-- head -->
                <thead>
                <tr>
                    <th>
                        <a href="https://www.flensburg.de/Aktuelles/Ukraine-Portal/Ukrainer-innen-Neu-in-Flensburg/Migrationsberatung-Kontakte/index.php?ModID=9&object=tx%7c2306.1&FID=2306.445.1&NavID=2306.1407&La=1" target="_blank">
                            Jugendmigrationsdienst Flensburg (AWO)
                        </a>
                    </th>
                </tr>
                </thead>
                <tbody>
                <!-- row 1 -->
                <tr>
                    <td>
                        Schloßstr. 4
                        <br/>
                        24939 Flensburg
                        <br/>
                        <a href="http://maps.google.de/maps?t=m&hl=de&q=Schlo%C3%9Fstr.+4%2C+24939+Flensburg" target="_blank">
                            Karte anzeigen
                        </a>
                    </td>
                    <td>
                        Telefon: 0461-4902169 (12-27 Jahre)
                        <br/>
                        Web:
                        <a href="https://www.jugendmigrationsdienste.de/jmd/flensburg" target="_blank">
                        zur Website
                        </a>
                    </td>
                </tr>
                </tbody>
            </table>
        </div>
      </article>
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
                              name: 'Kontakte',
                              id: 'kontakte',
                            },
                          ]
    return { store, pageLinks}
  },
})
</script>
<style lang=""></style>
