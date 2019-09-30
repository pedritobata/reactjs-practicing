import axios from 'axios';

const instance = axios.create({
    baseURL: "https://jsonplaceholder.typicode.com"
});

instance.defaults.headers.common['Authorization'] = "AUTH TOKEN FROM INSTANCE";

axios.interceptors.request.use(req => {
    console.log('Interceptor request:', req);
    return req;
}, error => {
    console.log(error);
    return Promise.reject(error);
});

export default instance;