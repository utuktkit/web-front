import request from '@/utils/request.js'
import { useTokenStore } from '@/store/token.js'

export const uploadFile = (params) => {
    const tokenStore = useTokenStore();
        const config = {
            headers: {
                'Authorization': tokenStore.token
            }
        };
    return request.post('/file/uploadFile', params, config);
  }
