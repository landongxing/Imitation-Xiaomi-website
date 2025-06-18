import axios from '../utils/http.js';
export function fetchLogin({ LoginUsername, LoginPassword }) {
    return axios.post('/api/login', {
        LoginUsername,
        LoginPassword
    })
}
export function fetchRegister({ RegisterUsername, RegisterPassword, phone }){
    return axios.post('/api/register',{
        RegisterUsername,
        RegisterPassword,
        phone
    })
}