import axios from 'axios'

const http = axios.create({
    baseURL: process.env.REACT_APP_API_BASE_URL || 'http://localhost:3001/api',
    withCredentials: true
})

http.interceptors.response.use(function(response) {
    return response.data;
}, function(error) {
    const status = error?.response?.status;
    switch (status) {
        case 403:
            window.location.replace('/403');
            break;
        case 404:
            window.location.replace('/404')        
        break;
        default:
        break;
    }
    return Promise.reject(error)
});
export default http;