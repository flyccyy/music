//封装axios请求
import axios from 'axios'
const myrequest = axios.create({
    baseURL:'https://autumnfish.cn/'
})
export default myrequest