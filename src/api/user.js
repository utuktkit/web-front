import request from "@/utils/request"
import { useTokenStore } from '@/store/token.js'

export const requestRegister = (params) => {
    return request.post('/user/register', params);
}

export const requestLogin = (params) => {
    return request.post('/user/login', params);
}

export const requestUpdatePwd = (params) => {
    const tokenStore = useTokenStore();
    const config = {
        headers: {
            'Authorization': tokenStore.token
        }
    };
    return request.post('/user/updatePwd', params, config);
}

export const requestUpdateInfo = (params) => {
    const tokenStore = useTokenStore();
    const config = {
        headers: {
            'Authorization': tokenStore.token
        }
    };
    return request.post('/user/updateInfo', params, config);
}

export const requestInfo = (userId) => {
    const tokenStore = useTokenStore();
    return request.get('/user/info', {
        params: { userId },
        headers: {
            'Authorization': tokenStore.token
        }
    });
}

export const requestListUser = (type) => {
    const tokenStore = useTokenStore();
    return request.get('/user/listUser', {
        params: { type },
        headers: {
            'Authorization': tokenStore.token
        }
    });
}