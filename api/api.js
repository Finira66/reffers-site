import axios from 'axios';

axios.defaults.withCredentials = false

export const api = axios.create({
    headers: {
        'Access-Control-Allow-Origin': '*',
    }
});


export const login = (data) => api.post(`${useRuntimeConfig().public.apiUrl}/affiliate/check-login-credentials`, data).then(response => response.data);

export const register = (data) => api.post(`${useRuntimeConfig().public.apiUrl}/affiliate`, data).then(response => response.data);

export const resetPassword = (data) => api.post(`${useRuntimeConfig().public.apiUrl}/affiliate/reset-password`, data).then(response => response.data);

