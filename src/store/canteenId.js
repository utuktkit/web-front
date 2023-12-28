import { defineStore } from 'pinia';
import { ref } from 'vue'

export const canteenIdStore = defineStore(
    'canteenId',
    () => {
        const canteenId = ref('');

        const setCanteenId = (newCanteenId) => {
            canteenId.value = newCanteenId;
        }

        const removeCanteenId = () => {
            canteenId.value = '';
        }

        return {
            canteenId, setCanteenId, removeCanteenId
        }
    },
    {
        persist: true
    }
)