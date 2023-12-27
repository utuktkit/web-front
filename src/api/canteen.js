import request from '@/utils/request.js'
import { useTokenStore } from '@/store/token.js'

export const requestAddCanteen = (params) => {
    const tokenStore = useTokenStore();
    const config = {
        headers: {
            'Authorization': tokenStore.token
        }
    };
    return request.post('/canteen/addCanteen', params, config);
}

export const requestUpdateCanteen = (params) => {
    const tokenStore = useTokenStore();
    const config = {
        headers: {
            'Authorization': tokenStore.token
        }
    };
    return request.put('/canteen/updateCanteen', params, config);
}

export const requestGetCanteen = (canteenId) => {
    const tokenStore = useTokenStore();
    return request.get('/canteen/getCanteen', {
        params: { canteenId },
        headers: {
            'Authorization': tokenStore.token
        }
    });
}

export const requestListCanteen = (name) => {
    const tokenStore = useTokenStore();
    return request.get('/canteen/listCanteen', {
        params: { name },
        headers: {
            'Authorization': tokenStore.token
        }
    });
}

export const requestDeleteCanteen = (canteenId) => {
    const tokenStore = useTokenStore();
    return request.delete('/canteen/deleteCanteen', {
        params: { canteenId },
        headers: {
            'Authorization': tokenStore.token
        }
    });
}