<template>
  <div>
    <div class="grid grid-flow-col auto-cols-auto pt-4 md:py-8 px-4 gap-4">
      <div class="col-auto hidden lg:block">
        <!--Navigation-->
        <PageNavigation :links="pageLinks"></PageNavigation>
      </div>
      <!-- Content Deutsch-->

      <article class="prose prose-sm md:prose-base max-w-none">
        <div class="block md:hidden">
          <MobileNavigation :links="pageLinks" />
        </div>
        <slot></slot>
      </article>
      <div class="col-auto hidden lg:block">
        <!-- Quick Information -->
        <QuickInformation :v-show="information">
          <slot name="information"></slot>
        </QuickInformation>
      </div>
    </div>
  </div>
</template>
<script>
import MobileNavigation from './MobileNavigation.vue'
export default defineComponent({
  props: ['pageLinks', 'information'],
  components: { MobileNavigation },
})
</script>
<style lang=""></style>
