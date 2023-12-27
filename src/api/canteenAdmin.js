import request from '@/utils/request'
import { useTokenStore } from '@/store/token.js'

export const requestAddCanteenAdmin = (params) => {
    const tokenStore = useTokenStore();
    const config = {
        headers: {
            'Authorization': tokenStore.token
        }
    };
    return request.post('/canteenAdmin/addCanteenAdmin', params, config);
}

export const requestDeleteCanteenAdmin = (params) => {
    const tokenStore = useTokenStore();
    return request.delete('/canteenAdmin/deleteCanteenAdmin', {
        params: params,
        headers: {
            'Authorization': tokenStore.token
        }
    });
}

export const requestListByCanteenId = (canteenId) => {
    const tokenStore = useTokenStore();
    return request.get('/canteenAdmin/listByCanteenId', {
        params: { canteenId },
        headers: {
            'Authorization': tokenStore.token
        }
    });
}

export const requestAddByCanteenName = (params) => {
    const tokenStore = useTokenStore();
    const config = {
        headers: {
            'Authorization': tokenStore.token
        }
    };
    return request.post('/canteenAdmin/addByCanteenName', params, config);
}
