import axios from 'axios'

var instance = axios.create({
    baseURL: 'http://api.duyiedu.com/api'
})

instance.interceptors.request.use(function (config) {
    config.params = {
        ...config.params,
        //个人密钥
        appkey: 'loveyou_1557411022711'
    }
    // 在发送请求之前做些什么
    return config
}, function (error) {
    // 对请求错误做些什么
    return Promise.reject(error)
})

export default instance
