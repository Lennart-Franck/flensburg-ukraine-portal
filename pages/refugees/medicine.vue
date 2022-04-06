<template>
  <div>
    <div class="flex flex-row justify-between p-4">
      <div class="text-center">
        <button class="btn btn-sm btn-ghost bg-gray-300 text-black">
          Zur Startseite
        </button>
      </div>
      <div>
        <h3 class="text-3xl font-semibold">Medizinische Hilfe</h3>
      </div>
      <div>
        <!--Icons-->
        <h5>Icons hier</h5>
      </div>
    </div>

    <LanguageTab></LanguageTab>

    <div class="grid grid-cols-6 gap-2 py-8 px-2">
      <div class="">
        <!--Navigation-->
        <h6>Navigation</h6>
      </div>
      <article class="col-span-4 prose max-w-none">
        <!-- Content -->
        <h3>Akuter Notfall</h3>

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

        <h3>Frühe Hilfen</h3>

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
      <div class="">
        <!-- Quick Information -->
        <h6>Quick Information</h6>
      </div>
    </div>
  </div>
</template>
<script>
import LanguageTab from '~~/components/LanguageTab.vue'
definePageMeta({
  layout: 'custom',
})
</script>
<style lang=""></style>
