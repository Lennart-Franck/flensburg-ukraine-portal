<template>
  <div>
    <PageHeader v-if="store.language == 'deutsch'">
      Einreise mit Heim- und Haustieren (Ukraine)
    </PageHeader>
    <PageHeader v-else-if="store.language == 'englisch'">
      I have arrived in Germany with a pet
    </PageHeader>
    <PageHeader v-else-if="store.language == 'ukrainisch'">
      Я привіз/-везла з собою домашніх тварин 
    </PageHeader>

    <LanguageTab></LanguageTab>

    <PageContent :pageLinks="pageLinks" v-if="store.language == 'deutsch'">

        <h2 id="registrieren">Registrieren Sie Ihr Heim-/Haustier!</h2>
        <p>
            Im Moment werden keine Papiere von Tieren an der Grenze kontrolliert. 
            Daher ist es wichtig, dass Sie Ihre Haus- und Heimtiere registrieren.
        </p>
        <p>Dies gilt für: </p>

        <div>
            <ul>
                <li>
                    Hunde, Katzen, Frettchen
                </li>
                <li>
                    Vögel (außer Geflügel)
                </li>
                <li>
                    Hauskaninchen und Nagetiere
                </li>
                <li>
                    Reptilien und Amphibien
                </li>
                <li>
                    Zierwassertiere
                </li>
            </ul>
        </div>
        
        <p>Nutzen Sie dafür bitte unseren</p>
        <div>
            <ul>
                <li>
                    Online-Dienst:  
                    <a href="https://pdf.form-solutions.net/metaform/Form-Solutions/sid/assistant/6230984a20afae743ddc25a4" target="_blank">
                        “Heim-/Haustiere registrieren“.
                    </a>
                </li>
            </ul>
        </div>

        <p>
            Wenn Sie Schwierigkeiten mit dem Online-Dienst haben, 
            wenden Sie sich an unsere Veterinärdienste: 
            <a href="mailto:veterinaer@flensburg.de">
               veterinaer@flensburg.de
            </a>
             oder 0049 461 85 2777 - Vielen Dank!
        </p>

        <h2 id="anforderungen">Besondere Anforderungen für Hund, Katze und Frettchen</h2>
        <h3>Tollwut-Risiko</h3>
        <p>Die Ukraine ist ein Risikoland für <b>Tollwut</b>. Hunde, Katzen und Frettchen können Tollwut 
            in sich tragen und müssen daher besondere Anforderungen erfüllen:
        </p>
        <div>
            <ul>
                <li>
                    Das Tier muss einem Mikrochip haben. Dieser muss vor der Tollwutimpfung eingesetzt sein.
                </li>
                <li>
                    Das Tier muss bei der Tollwut-Impfung mindestens 12 Wochen alt sein und mit einem Impfstoff geimpft werden, welcher bestimmte Anforderung erfüllt (Anhang III der Verordnung 2013/576)
                </li>
                <li>
                    Bei Einreise aus der Ukraine: Das Tier hat einen Test (Antikörpertitrationstest) gemacht. Dieser muss mindestens 30 Tage nach einer vollständigen 
                    Tollwutimpfung und mindestens 3 Monate vor der Ausreise aus der Ukraine gemacht worden sein. Der Test musste in einem EU zugelassenen Labor analysiert sein und ein Ergebnis von mindestens 0,5 I.E./ml haben.
                </li>
            </ul>
        </div>

        <h2 id="ankunft">Ankunft in Flensburg und Zeit nach der Impfung</h2>

        <p>
          <b>Nach Ihrer Ankunft in Flensburg</b> ist es wichtig, dass Sie Ihr Haustier (Hund, Katze, Frettchen) 
          für die ersten 21 Tage isoliert halten. Das gleiche gilt für 21 Tage <b>nach der Impfung</b> (Quarantäne).  
        </p>
        <p>Dies bedeutet konkret:</p>

        <div>
            <ul>
                <li>
                    Das Haustier hat keinen Kontakt mit anderen Tieren und Menschen, die nicht Teil Ihrer Familie sind.
                </li>
                <li>
                    Hunde dürfen Sie nur an der kurzen Leine führen. Katzen und Frettchen müssen jederzeit im Haus gehalten werden.
                </li>
                <li>
                    Die Tiere müssen in einem Haushalt sein, in denen andere Haustiere (Hund, Katze, Frettchen) mit einer wirksamen Tollwutschutzimpfung untergebracht sind.
                </li>
            </ul>
        </div>

        <h2 id="rechtsgrundlagen">Rechtsgrundlagen</h2>
        <p>Verordnung (EU) 2016/429 des Europäischen Parlaments und des Rates vom 9. März 2016 zu Tierseuchen 
            und zur Änderung und Aufhebung einiger Rechtsakte im Bereich der Tiergesundheit 
            („Tiergesundheitsrecht“) (ABl. L 84, 31.3.2016, S. 1–208) in der derzeit geltenden Fassung VERORDNUNG (EU) 
            Nr. 576/2013 DES EUROPÄISCHEN PARLAMENTS UND DES RATES vom 12. Juni 2013 über die Verbringung 
            von Heimtieren zu anderen als Handelszwecken und zur Aufhebung der Verordnung (EG) Nr. 998/2003 
            (ABl. L 178 vom 28.6.2013, S. 1) 
        </p>

      <template v-slot:information>
        <p><b>Veterinärdienste</b></p>
        <p>
          Rathausplatz 1
          <br />
          24937 Flensburg
        </p>
        <p>
          Telefon: 0461 85-2912
          <br/>
          <a href="mailto:veterinaer@flensburg.de">
             veterinaer@flensburg.de
          </a>
        </p>

        <p>
          <p><b>Öffnungszeiten</b></p>
          <br/>
          Nur nach Terminvereinbarung.
        </p>

        <p>
          <p><b>Links</b></p>
          <a href="https://pdf.form-solutions.net/metaform/Form-Solutions/sid/assistant/6230984a20afae743ddc25a4" target="_blank">
             Tiere registrieren (Online-Dienst)
          </a>
        </p>
      </template>
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
                              name: 'Registrieren Sie Ihr Heim-/Haustier!',
                              id: 'registrieren',
                            },
                            {
                              name: 'Besondere Anforderungen für Hund, Katze und Frettchen',
                              id: 'anforderungen',
                            },
                            {
                              name: 'Ankunft in Flensburg und Zeit nach der Impfung',
                              id: 'ankunft',
                            },
                            {
                              name: 'Rechtsgrundlagen',
                              id: 'rechtsgrundlagen',
                            },
                          ]
    return { store, pageLinks }
  },
})
</script>
<style lang=""></style>
