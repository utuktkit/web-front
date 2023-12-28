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

export const requestListComment = (name, dishId, userId) => {
    const tokenStore = useTokenStore();
    return request.get('/comment/listComment', {
        params: { name, dishId, userId },
        headers: {
            'Authorization': tokenStore.token
        }
    });
}

export const requestListByCanteen = (canteenId) => {
    const tokenStore = useTokenStore();
    return request.get('/comment/listByCanteen', {
        params: { canteenId },
        headers: {
            'Authorization': tokenStore.token
        }
    });
}
export const requestUpdateComment = (params) => {
    const tokenStore = useTokenStore();
    const config = {
        headers: {
            'Authorization': tokenStore.token
        }
    };
    return request.post('/comment/updateComment', params, config);
}

export const requestDeleteComment = (commentId) => {
    const tokenStore = useTokenStore();
    return request.delete('/comment/deleteComment', {
        params: { commentId },
        headers: {
            'Authorization': tokenStore.token
        }
    });
}