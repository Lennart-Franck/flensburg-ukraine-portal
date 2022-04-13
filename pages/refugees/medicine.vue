<template>
  <div>
    <PageHeader v-if="store.language == 'deutsch'">
      Medizinische Hilfe
    </PageHeader>
    <PageHeader v-else-if="store.language == 'englisch'">
      Medical care
    </PageHeader>
    <PageHeader v-else-if="store.language == 'ukrainisch'">
      Медична допомога
    </PageHeader>

    <LanguageTab></LanguageTab>

    <PageContent :pageLinks="pageLinks" v-if="store.language == 'deutsch'">
      <h3 id="notfall">Akuter Notfall</h3>

      <p>
        Eine akute Notfallvorsorge ist durch die zwei Krankenhäuser gesichert
        (Diakonissenkrankenhaus/DIAKO Flensburg und Franziskuskrankenhaus). In
        akuten Notfällen rufen Sie die
        <b>112</b>
        an.
      </p>

      <h3 id="praxis">Praxis ohne Grenzen</h3>

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

      <h3 id="psychische">Psychische Gesundheit</h3>
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
          Schutzengel: 0049 175 58 47 77 5 (Montag bis Freitag von 8 bis 18 Uhr)
        </b>
        <br />
        <b>
          Gesundheitshaus: 0461 85 45 45 (Montag bis Freitag von 9 bis 16 Uhr)
        </b>
        <br />
        Mehr Informationen im Flyer von Schutzengel und unter:
        www.schutzengel-flensburg.de
      </p>

      <template v-slot:information>
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
      </template>
    </PageContent>
    <PageContent :pageLinks="pageLinksEn" v-if="store.language == 'englisch'">
      <h3 id="notfall">Emergency assistance</h3>

      <p>
        Emergency medical assistance is available at Flensburg’s two 
        hospitals (the DIAKO Hospital and the Franziskus hospital). 
        In an acute emergency phone <b>112</b>.
      </p>

      <h3 id="praxis">Doctor’s surgery without borders</h3>

      <p>
        You can receive medical care at the “Praxis ohne Grenzen” 
        if you do not have health insurance.
      </p>

      <p>
        Praxis ohne Grenzen
        <br />
        Johanniskirchhof 19a
        <br />
        24939 Flensburg
      </p>

      <p>The surgery is open Tuesdays 11:00 -13:00</p>

      <p>
        Click here for the
        <a href="https://www.flensburg.de/loadDocument.phtml?ObjSvrID=2306&ObjID=13472&ObjLa=1&Ext=PDF">
          surgery without borders flyer
        </a>
        (in German, English and Arabic).
      </p>

      <h3 id="psychische">Mental health</h3>
      <div>
        <ul>
          <li>
            Psychological Counselling: There are psychologists available if you want to 
            talk about problems and worries. The counselling is free, 
            confidential and, on request, anonymous. A video translator is available 
            if needed. Further information:
            <a href="https://www.flensburg.de/loadDocument.phtml?ObjSvrID=2306&ObjID=9604&ObjLa=1&Ext=PDF">
               psychological counselling centre flyer in several languages
            </a>
          </li>
          <li>
            Pastoral care concerns: Pastoral care of 
            Orthodox Christians through Pastor Lunde from St. Petri's.
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

      <h3 id="hilfen">Frühe Hilfen (Early Childhood)</h3>

      <p>
        Schutzengel ("Guardian Angel") offers meetings and activities for 
        families and children. Midwives, pediatric nurses and family 
        assistants provide support for pregnancy, health issues and 
        everyday questions.
      </p>

      <p>
        <b>
          Schutzengel: 0049 175 58 47 77 5 (Monday to Friday from 8 a.m. to 6 p.m.)
        </b>
        <br />
        <b>
          public health office: 0461 85 45 45 (Monday to Friday from 9 a.m. to 4 p.m.)
        </b>
        <br />
        More information in the
        <a href="https://www.flensburg.de/loadDocument.phtml?ObjSvrID=2306&ObjID=13593&ObjLa=1&Ext=PDF">
          Schutzengel flyer (German)
        </a>
        <br>
        and at:
         <a href="https://www.flensburg.de/loadDocument.phtml?ObjSvrID=2306&ObjID=13593&ObjLa=1&Ext=PDF">
          www.schutzengel-flensburg.de 
        </a>
      </p>

      <template v-slot:information>
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
      </template>
    </PageContent>
    <PageContent :pageLinks="pageLinksUk" v-if="store.language == 'ukrainisch'">
     <h3 id="notfall">Невідкладна медична допомога</h3>

      <p>
        <b>Невідкладна медична допомога</b> у Фленсбурзі надається двома лікарнями: 
        лікарнею Дьяко-Фленсбург (нім. Diakonissenkrankenhaus/DIAKO Flensburg) 
        талікарнею св. Франциска (нім.Franziskuskrankenhaus). Телефон швидкої 
        медичної допомоги - 112. 
      </p>

      <h3 id="praxis">Ініціатива «Медичні заклади без кордонів» (нім. Praxis ohne Grenzen)</h3>

      <p>
        Якщо у Вас поки що немає медичного страхування, Ви можете звернутись за медичною допомогою, що надається ініціативою «Медичні заклади без кордонів» (нім. Praxis ohne Grenzen) за адресою:
      </p>

      <p>
        Praxis ohne Grenzen
        <br />
        Johanniskirchhof 19a
        <br />
        24939 Flensburg
      </p>

      <p>Прийомні години: щовівторка 11-13</p>

      <p>
        Звертаємо Вашу увагу на багатомовний
        <a href="https://www.flensburg.de/loadDocument.phtml?ObjSvrID=2306&ObjID=13472&ObjLa=1&Ext=PDF">
          флаєр ініціативи «Медичні заклади без кордонів» (німецькою, англійською, арабською мовами)
        </a>
        (in German, English and Arabic).
      </p>

      <h3 id="psychische">Психічне здоров’я</h3>
      <div>
        <ul>
          <li>
            Центр надання психологічної допомоги: Під час розмови з психологом у Вас є 
            можливість поговорити про те, що Вас турбує та бентежить, а також спільно 
            пошукати можливі рішення. Психологічне консультування надається 
            безкоштовно, з дотриманням принципу конфіденційності та за бажанням 
            анонімно. На консультації можна скористатись мовним посередництвом та 
            залучити перекладача через відео-конференцію. 
            Більше інформації про цей вид допомоги можна знайти у
            <a href="https://www.flensburg.de/loadDocument.phtml?ObjSvrID=2306&ObjID=9604&ObjLa=1&Ext=PDF">
               багатомовному флаєрі центру надання психогічної допомоги.
            </a>
          </li>
          <li>
            Психологічна підтримка від церкви: Психологічна підтримка від православних 
            християн та християнок, записатись можна через пасторку Лунде 
            (нім. Pastorin Lunde) з 
            церковної громади святого Петра (нім. St. Petri)
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

      <h3 id="hilfen">"Schutzengel"</h3>

      <p>
        Ангел-охоронець пропонує зустрічі та інші дії для сімеѝ та дітеѝ. 
        Акушерки, медсестри та сімеѝні помічники підтримають вагітних жінок, 
        відповідять на ваші питання про здоров´я та повсякденні питання.
      </p>

      <p>
        <b>
          Телефон: 0049 175 58 47 77 5 / 0461 85 45 45 (Monday to Friday from 8 a.m. to 6 p.m.)
        </b>
        <br/>
        
        <br />
        Більше інформації в
        <a href="https://www.flensburg.de/loadDocument.phtml?ObjSvrID=2306&ObjID=13593&ObjLa=1&Ext=PDF">
          Schutzengel flyer (German)
        </a>
        <br>
        і на:
         <a href="https://www.flensburg.de/loadDocument.phtml?ObjSvrID=2306&ObjID=13593&ObjLa=1&Ext=PDF">
          www.schutzengel-flensburg.de 
        </a>
      </p>

      <template v-slot:information>
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
      </template>
    </PageContent>
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
        name: 'Praxis ohne Grenzen',
        id: 'praxis',
      },
      {
        name: 'Psychische Gesundheit',
        id: 'psychische',
      },
      {
        name: 'Frühe Hilfen',
        id: 'hilfen',
      },
    ]
    const pageLinksEn = [
      {
        name: 'Emergency assistance',
        id: 'notfall',
      },
      {
        name: 'Doctor’s surgery without borders',
        id: 'praxis',
      },
      {
        name: 'Mental health',
        id: 'psychische',
      },
      {
        name: 'Frühe Hilfen (Early Childhood)',
        id: 'hilfen',
      },
    ]
    const pageLinksUk = [
      {
        name: 'Невідкладна медична допомога',
        id: 'notfall',
      },
      {
        name: 'Ініціатива «Медичні заклади без кордонів»',
        id: 'praxis',
      },
      {
        name: 'Психічне здоров’я',
        id: 'psychische',
      },
      {
        name: '"Schutzengel"',
        id: 'hilfen',
      },
    ]
    return { store, pageLinks, pageLinksEn, pageLinksUk }
  },
  components: { QuickInformation1 },
})
</script>
<style lang=""></style>
