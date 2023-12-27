import { defineStore } from 'pinia';
import { ref } from 'vue'

export const useTypeStore = defineStore(
    'type',
    () => {
        const type = ref('');

        const setType = (newType) => {
            type.value = newType;
        }

        const removeType = () => {
            type.value = '';
        }

        return {
            type, setType, removeType
        }
    },
    {
        persist: true
    }
)