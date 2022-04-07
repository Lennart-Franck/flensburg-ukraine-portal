<template>
  <div>
    <div class="flex flex-row justify-between p-4 items-center">
      <div class="">
        <BackButton />
      </div>
      <div class="text-center">
        <h3 class="text-3xl font-semibold"><slot /></h3>
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
