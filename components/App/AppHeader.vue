<template>
  <div>
    <div class="navbar bg-gray-100 shadow-sm h-24">
      <div class="flex-1">
        <nuxt-link to="/">
          <img
            src="~/assets/images/logo.png"
            alt="Logo"
            class="object-contain w-60 h-16"
          />
        </nuxt-link>
      </div>
      <div class="flex-none mx-8 hidden md:flex">
        <HeaderIcons />

        <div class="mr-10 text-base-content">
          <a href="">Kontakt</a>
        </div>

        <div class="flex flex-row items-center">
          <input
            type="text"
            placeholder="Wonach Suchen Sie?"
            class="input input-ghost focus:outline-none -mr-8 bg-gray-50 placeholder:text-base-content"
          />
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="20"
            height="20"
            class="fill-base-content"
            viewBox="0 0 24 24"
          >
            <path
              d="M23.809 21.646l-6.205-6.205c1.167-1.605 1.857-3.579 1.857-5.711 0-5.365-4.365-9.73-9.731-9.73-5.365 0-9.73 4.365-9.73 9.73 0 5.366 4.365 9.73 9.73 9.73 2.034 0 3.923-.627 5.487-1.698l6.238 6.238 2.354-2.354zm-20.955-11.916c0-3.792 3.085-6.877 6.877-6.877s6.877 3.085 6.877 6.877-3.085 6.877-6.877 6.877c-3.793 0-6.877-3.085-6.877-6.877z"
            />
          </svg>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
export default {}
</script>
<style lang=""></style>
