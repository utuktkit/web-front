import request from '@/utils/request.js'
import { useTokenStore } from '@/store/token.js'

export const requestAddDish = (params) => {
    const tokenStore = useTokenStore();
    const config = {
        headers: {
            'Authorization': tokenStore.token
        }
    };
    return request.post('/dish/addDish', params, config);
}

export const requestUpdateDish = (params) => {
    const tokenStore = useTokenStore();
    const config = {
        headers: {
            'Authorization': tokenStore.token
        }
    };
    return request.put('/dish/updateDish', params, config);
}

export const requestGetDish = (dishId) => {
    const tokenStore = useTokenStore();
    return request.get('/dish/getDish', {
        params: { dishId },
        headers: {
            'Authorization': tokenStore.token
        }
    });
}

export const requestListDish = (name, canteenId, isPriceAsc, isRatingAsc) => {
    const tokenStore = useTokenStore();
    return request.get('/dish/listDish', {
        params: { name, canteenId, isPriceAsc, isRatingAsc },
        headers: {
            'Authorization': tokenStore.token
        }
    });
}