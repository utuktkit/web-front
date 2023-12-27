import request from '@/utils/request'
import { useTokenStore } from '@/store/token.js'

export const requestAddComment = (params) => {
    const tokenStore = useTokenStore();
    const config = {
        headers: {
            'Authorization': tokenStore.token
        }
    };
    return request.post('/comment/addComment', params, config);
}

export const requestListComment = (dishId, userId) => {
    const tokenStore = useTokenStore();
    return request.get('/comment/listComment', {
        params: { dishId, userId },
        headers: {
            'Authorization': tokenStore.token
        }
    });
}