<template>
  <div>
    <PageHeader v-if="store.language == 'deutsch'">
      Informationen für den Schulbesuch
    </PageHeader>

    <LanguageTab></LanguageTab>

    <PageContent :pageLinks="pageLinks" v-if="store.language == 'deutsch'">

        <h2 id="wannSchule">Wann muss mein Kind in die Schule?</h2>

        <p>In Deutschland müssen Kinder von 6 - 16 Jahren in die Schule gehen. 
            Aber auch danach können Kinder die Schule weiter besuchen.</p>
        
        <p><b>Grundschule</b> 
            <br/>
            Die Kinder beginnen mit 6 Jahren in der Grundschule. Diese ist verpflichtend. 
            Die Kinder gehen in die Grundschule, bis sie 10 Jahre alt sind (1.-4. Klasse).</p>

        <p>
            <b>Weiterführende Schule</b>
            <br/>
            Die 5. Klasse beginnt auf einer weiterführenden Schule. Diese ist bis zur 9. Klasse verpflichtend.

        </p>
        <div>
            <ul>
                <li>
                    Die 9. Klasse endet mit dem ESA (Erster allgemeinbildender Schulabschluss)
                </li>
                <li>
                    Die 10. Klasse endet mit dem MSA (Mittlerer Schulabschluss)
                </li>
                <li>
                    Die 13. Klasse endet mit dem Abitur.
                </li>
            </ul>
        </div>

        <h2 id="keinDeutsch">Mein Kind kann noch kein Deutsch – Kann es trotzdem die Schule besuchen?</h2>

        <p>
            In den meisten Schulen gibt es DaZ-Klassen (DaZ = Deutsch als Zweitsprache). Wenn Kinder wenig oder kein 
            Deutsch sprechen, gehen sie zuerst nur in die DaZ-Klasse. Wenn die Kinder dann 
            etwas Deutsch gelernt haben, besuchen sie immer mehr den regulären Unterricht.
        </p>

        <h2 id="ganztag">Offener Ganztag und Hort</h2>

        <p>
            Offener Ganztag und Hort bedeutet, dass Kinder nach dem Unterricht in der Schule bleiben können. 
            Dort werden sie betreut und können zum Beispiel: Mittag essen, Hilfe bei den Hausaufgaben 
            bekommen, Sport oder Musik machen, malen und spielen. Dafür müssen Eltern ihre Kinder anmelden. 
            Für Menschen mit wenig Geld, gibt es die Möglichkeit weniger zu bezahlen. Alle Flensburger 
            Grundschulen haben einen offenen Ganztag. Ähnliche Angebote gibt es auch in den 
            weiterführenden Schulen.
        </p>

        <h2 id="masernimpfung">Hinweis zur Masernimpfung</h2>
        <p>
            Wenn Kinder in die Schule gehen, sollten sie gegen Masern geimpft sein. Für eine 
            Betreuung in der KiTa (Kindertagesstätte) ist dies Pflicht. Auch für den offenen Ganztag 
            und im Hort ist dies Pflicht. Eine Impfung ist bei einem Arzt möglich und schützt ihr 
            eigenes Kind und andere Kinder.
        </p>

        <h2 id="anmelden">Wie kann ich mein Kind in der Schule anmelden?</h2>
        <p>
            Eltern können aussuchen, welche Schule ihr Kind besuchen soll. Sie können z.B. zur 
            Schule gehen, die bei Ihnen in der Nähe ist. Dort kann die Schulleitung Sie 
            beraten. Sie besprechen, ob die Schule, die Richtige für Ihr Kind ist. Ansonsten kann 
            die Schule einen anderen passenden Vorschlag machen.
        </p>

      
        <h2 id="schulen">Welche Schulen gibt es in Flensburg?</h2>
        <p>
            In Flensburg gibt es mehrere Grundschulen und weiterführende Schulen.
            Eine Liste aller Schulen gibt es unter:
            <a href="https://www.flensburg.de/Leben-Soziales/Kinderbetreuung-Schulen/" target="_blank">
                    https://www.flensburg.de/Leben-Soziales/Kinderbetreuung-Schulen/
            </a>
        </p>

      <template v-slot:information>
        <p>
          <p><b>Dokumente</b></p>
          <br/>
          <a href="https://www.flensburg.de/loadDocument.phtml?ObjSvrID=2306&ObjID=13708&ObjLa=1&Ext=PDF" target="_blank">
             Flyer: Schulbesuch (Deutsch, Українська, English, русский) (PDF, 652 kB)
          </a>
          <br/>
          <br/>
          <a href="https://www.flensburg.de/loadDocument.phtml?ObjSvrID=2306&ObjID=13709&ObjLa=1&Ext=DOCX" target="_blank">
            Лист прийому учнів (Schüleraufnahmebogen ukrainische Version) (DOCX, 30 kB)
          </a>
          <br/>
          <br/>
          <a href="https://www.flensburg.de/loadDocument.phtml?ObjSvrID=2306&ObjID=13710&ObjLa=1&Ext=DOCX" target="_blank">
            Schüleraufnahmebogen (deutsche Version) (DOCX, 26 kB)
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
                              name: 'Wann muss mein Kind in die Schule?',
                              id: 'wannSchule',
                            },
                            {
                              name: 'Mein Kind kann noch kein Deutsch – Kann es trotzdem die Schule besuchen?',
                              id: 'keinDeutsch',
                            },
                            {
                              name: 'Offener Ganztag und Hort',
                              id: 'ganztag',
                            },
                            {
                              name: 'Hinweis zur Masernimpfung:',
                              id: 'masernimpfung',
                            },
                            {
                              name: 'Wie kann ich mein Kind in der Schule anmelden?',
                              id: 'anmelden',
                            },
                            {
                              name: 'Welche Schulen gibt es in Flensburg?',
                              id: 'schulen',
                            },
                          ]
    return { store, pageLinks }
  },
})
</script>
<style lang=""></style>
