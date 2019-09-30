import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';

import axios from 'axios';



//primero puedo setear parametros para axios
axios.defaults.baseURL = "https://jsonplaceholder.typicode.com";
axios.defaults.headers.common['Authorization'] = "PLEASE LET ME IN";
//axios.defaults.headers.POST['Content-Type'] = 'application/json';
//Uso de Interceptors
//para todos los request
const myInterceptor = axios.interceptors.request.use(req => {
    console.log('**Request interceptor', req);
    return req;//esto es como el next()  de express
},
error => {
    console.log(error);
    return Promise.reject(error);
}
)

//si quiero puedo eliminar el interceptor
//axios.interceptors.request.eject(myInterceptor);

//para el response es similar
axios.interceptors.response.use(resp => {
    console.log('**Response interceptor', resp);
    return resp;
}, error => {
    console.log(error);
    return Promise.reject(error);
});





ReactDOM.render(<App />, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
