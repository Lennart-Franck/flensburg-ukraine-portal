import { defineStore } from 'pinia'

export const useLanguageStore = defineStore('language', {
  state: () => {
    return {
      language: 'deutsch',
    }
  },
  actions: {
    changeLanguage(newLanguage) {
      this.language = newLanguage
    },
  },
})
