<template>
  <div class="max-w-7xl mx-auto">
    <div class="text-center text-md md:text-lg py-4">
      Informationen zur Unterstützung von Menschen aus der Ukraine in Flensburg
      <br />
      Інформація щодо надання підтримки людям з України у Фленсбурзі
    </div>

    <div
      class="flex lg:flex-row flex-col mt-4 justify-center items-center lg:items-start"
    >
      <div class="bg-white max-w-lg md:max-w-md sm:max-w-sm p-4">
        <div class="">
          <div class="text-xl text-center">
            Informationen für Flüchtende
            <br />
            Information for refugees
            <br />
            Інформація для біженців
          </div>
        </div>
        <div class="mt-4">
          <LanguageTab />
        </div>
        <div>
          <ButtonGroupRef />
        </div>
      </div>
      <div class="divider divider-vertical lg:divider-horizontal"></div>
      <div class="bg-white max-w-lg md:max-w-md sm:max-w-sm shrink p-4">
        <div class="">
          <div class="text-xl text-center">Informationen für Helfende</div>
          <div>
            <ButtonGroupHelp />
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import LanguageTab from '~~/components/LanguageTab.vue'
</script>
<style lang=""></style>
