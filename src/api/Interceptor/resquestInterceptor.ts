import instance from "../axios";

instance.interceptors.request.use((config)=>{
    return config
}, (error)=>{
    return error
})