<template>
  <div>
    <div class="grid grid-flow-col auto-cols-auto py-8 px-2 gap-4">
      <div class="col-auto">
        <!--Navigation-->
        <PageNavigation :links="pageLinks"></PageNavigation>
      </div>
      <!-- Content Deutsch-->
      <article class="prose max-w-none">
        <slot></slot>
      </article>
      <div class="col-auto">
        <!-- Quick Information -->
        <QuickInformation>
          <slot name="information"></slot>
        </QuickInformation>
      </div>
    </div>
  </div>
</template>
<script>
export default defineComponent({
  props: ['pageLinks'],
})
</script>
<style lang=""></style>
