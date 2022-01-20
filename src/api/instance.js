import axios from "axios";

const instance = axios.create({
    baseURL:'/api',
    withCredentials: true,
    headers:{
        accept: 'application/json',
    }
})

export default instance