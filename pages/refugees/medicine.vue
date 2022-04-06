<template>
  <div>
    <div class="flex flex-row justify-between p-4 items-center">
      <div class="">
        <BackButton />
      </div>
      <div class="text-center">
        <h3 class="text-3xl font-semibold">Medizinische Hilfe</h3>
      </div>
      <div class="">
        <!--Icons-->
        <PageIcons />
      </div>
    </div>

    <LanguageTab></LanguageTab>

    <div class="grid grid-flow-col auto-cols-auto py-8 px-2 gap-4">
      <div class="col-auto">
        <!--Navigation-->
        <PageNavigation :links="pageLinks"></PageNavigation>
      </div>
      <!-- Content Deutsch-->
      <article class="prose max-w-none" v-if="store.language == 'deutsch'">
        <h3 id="notfall">Akuter Notfall</h3>

        <p>
          Eine akute Notfallvorsorge ist durch die zwei Krankenhäuser gesichert
          (Diakonissenkrankenhaus/DIAKO Flensburg und Franziskuskrankenhaus). In
          akuten Notfällen rufen Sie die
          <b>112</b>
          an.
        </p>

        <h3>Praxis ohne Grenzen</h3>

        <p>
          Wenn Sie noch keine Krankenversicherung haben und eine Behandlung
          brauchen, können Sie die "Praxis ohne Grenzen" aufsuchen.
        </p>

        <p>
          Praxis ohne Grenzen
          <br />
          Johanniskirchhof 19a
          <br />
          24939 Flensburg
        </p>

        <p>Sprechstunde: dienstags 11-13 Uhr</p>

        <p>
          Es gibt einen mehrsprachigen Flyer der Praxis ohne Grenzen (Deutsch,
          Englisch und Arabisch) und weitere Informationen auf:
          <a href="https://www.diako.de/ueber-uns/praxis-ohne-grenzen">
            https://www.diako.de/ueber-uns/praxis-ohne-grenzen
          </a>
        </p>

        <h3>Psychische Gesundheit</h3>
        <div>
          <ul>
            <li>
              Psychologische Beratungsstelle: In einem Gespräch mit einer
              Psychologin können Sie über Sorgen, Belastungen oder Probleme
              sprechen und gemeinsam eine Lösung erarbeiten. Die Beratung ist
              kostenlos, vertraulich und auf Wunsch anonym. Termine sind mit
              Videodolmetschen möglich. Mehr Informationen gibt es im
              mehrsprachigen Flyer der psychologischen Beratungsstelle.
            </li>
            <li>
              Seelsorgeanliegen: Seelsorge von orthodoxen Christ:innen über
              Pastorin Lunde aus St. Petri
              <br />
              Pastorin Birgit Lunde
              <br />
              Kirchengemeinde St. Petri
              <br />
              Turnerberg 16, 24939 Flensburg
              <br />
              Tel: 0049 461 978 983 7
            </li>
          </ul>
        </div>

        <h3 id="hilfen">Frühe Hilfen</h3>

        <p>
          "Schutzengel" bietet Treffpunkte mit Aktionen für Familien und Kinder.
          Hebammen, Kinderkrankenschwestern und Familienhelferinnen unterstützen
          bei Schwangerschaft, Fragen zur Gesundheit und Alltagsfragen.
        </p>

        <p>
          <b>
            Schutzengel: 0049 175 58 47 77 5 (Montag bis Freitag von 8 bis 18
            Uhr)
          </b>
          <br />
          <b>
            Gesundheitshaus: 0461 85 45 45 (Montag bis Freitag von 9 bis 16 Uhr)
          </b>
          <br />
          Mehr Informationen im Flyer von Schutzengel und unter:
          www.schutzengel-flensburg.de
        </p>
      </article>
      <div class="col-auto">
        <!-- Quick Information -->
        <QuickInformation>
          <p>
            Asylbewerberleistungsgesetz
            <br />
            Schleswiger Straße 66
            <br />
            24941 Flensburg
            <br />
          </p>
          <p>
            Telefon:0461 85-4527
            <br />
            E-Mail: einwanderungsbuero@flensburg
          </p>
        </QuickInformation>
      </div>
    </div>
  </div>
</template>
<script>
import LanguageTab from '~~/components/LanguageTab.vue'
import { useLanguageStore } from '@/stores/language'
import QuickInformation1 from '~~/components/QuickInformation.vue'
definePageMeta({
  layout: 'custom',
})
export default defineComponent({
  setup() {
    const store = useLanguageStore()
    const pageLinks = [
      {
        name: 'Akuter Notfall',
        id: 'notfall',
      },
      {
        name: 'Psychische Gesundheit',
        id: 'hilfen',
      },
    ]
    return { store, pageLinks }
  },
  components: { QuickInformation1 },
})
</script>
<style lang=""></style>
