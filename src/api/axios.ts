import axios from 'axios';


const instance = axios.create({
    baseURL:'',
    timeout: 0,
    headers: {}
})

export default instance;