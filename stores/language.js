import { defineStore } from 'pinia'

export const useLanguageStore = defineStore('language', {
  state: () => {
    return {
      language: 'deutsch',
    }
  },
  actions: {
    change(newLanguage) {
      this.language = newLanguage
    },
  },
})
