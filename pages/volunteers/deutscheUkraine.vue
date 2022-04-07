<template>
  <div>
    <PageHeader v-if="store.language == 'deutsch'">
      Deutsche - Ausreise aus der Ukraine
    </PageHeader>

    <PageContent :pageLinks="pageLinks" v-if="store.language == 'deutsch'">
       <article
        class="col-span-4 prose max-w-none"
        v-if="store.language == 'deutsch'">

        <p id="deutsche">
            Das Auswärtige Amt aktualisiert laufend seine Informationen zur Situation 
            in der Ukraine unter:
            <a href="https://www.auswaertiges-amt.de/de/service/UKR" target="_blank">
                    https://www.auswaertiges-amt.de/de/service/UKR
            </a>
        </p>

        <p>
            Vor Reisen in die Ukraine wird gewarnt. Deutsche Staatsangehörige sind 
            dringend aufgefordert, das Land zu verlassen. In der Ukraine finden schwere 
            Kampfhandlungen und Raketenangriffe statt. Falls Sie das Land nicht auf 
            einem sicheren Weg verlassen können, bleiben Sie vorläufig an einem 
            geschützten Ort. Eine Evakuierung durch deutsche Behörden ist derzeit nicht 
            möglich.
            Das GK Donezk (in Dnipro) und die Botschaft Kiew sind vorübergehend geschlossen.
        </p>

        <div>
            <ul>
                <li>
                    Sie erreichen die <b>Krisenhotline</b> des Auswärtigen Amts unter +49 (0) 30 5000 3000
                </li>
                <li>
                    Tragen Sie sich in die
                    <a href="https://krisenvorsorgeliste.diplo.de/signin" target="_blank">
                    Krisenvorsorgeliste
                    </a>
                    des Auswärtigen Amts ein.  
                </li>
                <li>
                    Verfolgen Sie die internationalen und lokalen Medien und achten Sie auf lokale Bekanntmachungen.
                </li>
            </ul>
        </div>
        
        <p>
            Zusätzlich informiert das Auswärtige Amt über
            <a href="https://www.auswaertiges-amt.de/de/ReiseUndSicherheit/ukrainesicherheit/201946" target="_blank">
            Reise- und Sicherheitshinweise.
            </a>
        </p>
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
                              name: 'Deutsche - Ausreise aus der Ukraine',
                              id: 'deutsche',
                            },
                          ]
    return { store, pageLinks }
  },
})
</script>
<style lang=""></style>
