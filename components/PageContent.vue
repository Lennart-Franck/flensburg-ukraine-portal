<template>
  <div>
    <div class="grid grid-flow-col auto-cols-auto py-8 px-4 gap-4">
      <div class="col-auto hidden lg:block">
        <!--Navigation-->
        <PageNavigation :links="pageLinks"></PageNavigation>
      </div>
      <!-- Content Deutsch-->
      <article class="prose max-w-none">
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
export default defineComponent({
  props: ['pageLinks', 'information'],
})
</script>
<style lang=""></style>
