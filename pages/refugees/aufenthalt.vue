<template>
  <div>
    <div class="flex flex-row justify-between p-4">
      <div class="text-center">
        <button class="btn btn-sm btn-ghost bg-gray-300 text-black">
          Zur Startseite
        </button>
      </div>
      <div>
        <h3 class="text-3xl font-semibold">Ihr Aufenthalt in Flensburg</h3>
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
      <!-- Content Deutsch-->
      <article
        class="col-span-4 prose max-w-none"
        v-if="store.language == 'deutsch'">
        <p>Stand: 01.04.2022:</p>

        <h3>Was gilt für aus der Ukraine Geflüchtete?*</h3>
        <h3>*Für wen gilt das? (Personengruppen)</h3>

        <OnlineEmail></OnlineEmail>
        <Terminvergabe></Terminvergabe>

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
import { useLanguageStore } from '@/stores/language'
definePageMeta({
  layout: 'custom',
})
export default defineComponent({
  setup() {
    const store = useLanguageStore()

    return { store }
  },
})
</script>
<style lang=""></style>
