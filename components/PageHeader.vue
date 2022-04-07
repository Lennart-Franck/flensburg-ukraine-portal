<template>
  <div>
    <div class="flex flex-row justify-between p-4 items-center">
      <div class="">
        <BackButton />
      </div>
      <div class="text-center md:-ml-20 ml-0">
        <h3 class="text-xl md:text-3xl font-semibold"><slot /></h3>
      </div>
      <div class="">
        <!--Icons-->
        <PageIcons />
      </div>
    </div>
  </div>
</template>
<script>
export default {}
</script>
<style lang=""></style>
