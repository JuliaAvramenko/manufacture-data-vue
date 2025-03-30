import { defineStore } from 'pinia'

export const useFormStore = defineStore('form', {
  state: () => ({
    formData: {} as Record<string, any>,
  }),
  actions: {
    setFormData(data: Record<string, any>) {
      this.formData = data;
    },
    resetFormData() {
      this.formData = {
        city: '',
        department: '',
        employee: '',
        team: '',
        shift: '',
      };
    },
  }
})
