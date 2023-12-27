import { defineStore } from 'pinia';
import { ref } from 'vue'

export const userIdStore = defineStore(
    'userId',
    () => {
        const userId = ref('');

        const setUserId = (newUserId) => {
            userId.value = newUserId;
        }

        const removUserId = () => {
            userId.value = '';
        }

        return {
            userId, setUserId, removUserId
        }
    },
    {
        persist: true
    }
)