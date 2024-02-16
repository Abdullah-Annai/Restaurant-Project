import axios from 'axios'

export default axios.create({
    baseURL: "http://192.168.244.221:8000/api"
})