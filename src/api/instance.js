import axios from "axios";

const instance = axios.create({
    baseURL:'/api/auth',
    withCredentials: true,
    headers:{
        accept: 'application/json'
    }
})

export default instance