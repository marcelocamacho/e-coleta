import  axios from 'axios';

const api = axios.create({
    baseURL:'http://10.192.168.2:3333'
})

export default api;