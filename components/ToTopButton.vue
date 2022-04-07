<template>
  <button
    id="pagetop"
    class="p-3 bg-primary text-white font-medium text-xs leading-tight uppercase rounded-full shadow-md hover:shadow-lg focus:shadow-lg focus:outline-none focus:ring-0active:shadow-lg transition duration-150 ease-in-out bottom-5 right-36 fixed"
    v-show="scY > 300"
    @click="toTop"
  >
    <svg
      focusable="false"
      data-prefix="fas"
      class="w-4 h-4"
      role="img"
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 448 512"
    >
      <path
        fill="currentColor"
        d="M34.9 289.5l-22.2-22.2c-9.4-9.4-9.4-24.6 0-33.9L207 39c9.4-9.4 24.6-9.4 33.9 0l194.3 194.3c9.4 9.4 9.4 24.6 0 33.9L413 289.4c-9.5 9.5-25 9.3-34.3-.4L264 168.6V456c0 13.3-10.7 24-24 24h-32c-13.3 0-24-10.7-24-24V168.6L69.2 289.1c-9.3 9.8-24.8 10-34.3.4z"
      ></path>
    </svg>
  </button>
</template>
<script>
export default {
  data() {
    return {
      scTimer: 0,
      scY: 0,
    }
  },
  mounted() {
    window.addEventListener('scroll', this.handleScroll)
  },
  methods: {
    handleScroll: function () {
      if (this.scTimer) return
      this.scTimer = setTimeout(() => {
        this.scY = window.scrollY
        clearTimeout(this.scTimer)
        this.scTimer = 0
      }, 100)
    },
    toTop: function () {
      window.scrollTo({
        top: 0,
        behavior: 'smooth',
      })
    },
  },
}
</script>
<style lang=""></style>
