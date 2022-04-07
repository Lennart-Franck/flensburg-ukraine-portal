<template>
  <div>
    <PageHeader v-if="store.language == 'deutsch'">
      Leistungen beantragen
    </PageHeader>

    <LanguageTab></LanguageTab>

    <PageContent :pageLinks="pageLinks" v-if="store.language == 'deutsch'">
       <article
        class="col-span-4 prose max-w-none"
        v-if="store.language == 'deutsch'">

        <p>
            Um zu prüfen, ob Sie einen Anspruch auf Leistungen nach dem Asylbewerberleistungsgesetz (AsylbLG) 
            haben - wie z.B. Geld für Lebensmittel, Krankenversicherung und Unterkunft, müssen Sie sich bei uns registrieren. 
        </p>

        <h2 id="wasTun">Was muss ich tun?</h2>

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
        

        <h2 id="info">Nähere Informationen zu Leistungen,  Ansprechpartner*innen...</h2>
        <a href="https://www.flensburg.de/Aktuelles/Ukraine-Portal/Ukrainer-innen-Neu-in-Flensburg/Leistungen-beantragen-/Asylbewerberleistungsgesetz.php?object=tx,2306.2&ModID=10&FID=2306.1502.1&NavID=2306.1402&La=1&ort=2306.1" target="_blank">
            Asylbewerberleistungsgesetz
        </a>
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
    const pageLinks = [
                            {
                              name: 'Was muss ich tun?',
                              id: 'wasTun',
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
                              name: 'Nähere Informationen zu Leistungen, Ansprechpartner*innen...',
                              id: 'info',
                            },
                          ]
    return { store, pageLinks }
  },
})
</script>
<style lang=""></style>
