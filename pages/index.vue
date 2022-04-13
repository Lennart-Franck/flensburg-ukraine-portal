<template>
  <div class="max-w-7xl mx-auto">
    <div class="text-center text-2xl font-semibold md:text-3xl p-4">
      Ukraine Portal
    </div>
    <div class="text-center text-sm md:text-lg p-2">
      Informationen zur Unterstützung von Menschen aus der Ukraine in Flensburg
      <br />
      Інформація щодо надання підтримки людям з України у Фленсбурзі
    </div>

    <div
      class="md:flex lg:flex-row flex-col mt-4 justify-center items-center lg:items-start hidden"
    >
      <div class="bg-gray-100 rounded-lg max-w-lg md:max-w-md sm:max-w-sm p-4">
        <div class="">
          <div class="text-xl text-center font-medium">
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
      <div
        class="bg-gray-100 rounded-lg max-w-lg md:max-w-md sm:max-w-sm shrink p-4"
      >
        <div class="">
          <div class="text-xl text-center font-medium">
            Informationen für Helfende
          </div>
          <div>
            <ButtonGroupHelp />
          </div>
        </div>
      </div>
    </div>

    <div class="flex flex-col items-center md:hidden">
      <div
        tabindex="0"
        class="collapse collapse-arrow border border-base-300 bg-gray-100 rounded-box mx-2 max-w-md mt-4"
      >
        <input type="checkbox" class="peer" />
        <div class="collapse-title text-xl font-medium">
          <div class="text-lg text-left">
            Informationen für Flüchtende
            <br />
            Information for refugees
            <br />
            Інформація для біженців
          </div>
        </div>
        <div class="collapse-content">
          <div class="mb-4">
            <LanguageTab />
          </div>

          <div>
            <ButtonGroupRef />
          </div>
        </div>
      </div>

      <div
        tabindex="0"
        class="collapse collapse-arrow border border-base-300 bg-gray-100 rounded-box mx-2 max-w-md mt-4"
      >
        <input type="checkbox" class="peer" />
        <div class="collapse-title text-xl font-medium">
          <div class="text-lg text-left">Informationen für Helfende</div>
        </div>
        <div class="collapse-content">
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
