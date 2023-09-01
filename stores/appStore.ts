import { defineStore } from 'pinia'

export const useAppStore = defineStore('app', () => {
    const name = ref('LiPost App')
    const nameAndVersion = computed(() => `${name.value} v1.0.0`)

    const changeName = (newName: string) => {
        name.value = newName
    }

    return { name, nameAndVersion, changeName }
}, { persist: true })
