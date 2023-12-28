import axios from "axios";

const instance = axios.create({
    baseURL: 'http://192.168.1.109:8080'
    // baseURL: 'http://10.42.177.186:8080'
});

instance.interceptors.response.use(
    result => {
        return result.data;
    },
    err => {
        alert('服务异常');
        return Promise.reject(err);
    }
)

export default instance;