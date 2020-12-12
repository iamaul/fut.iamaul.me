import axios from 'axios';

const api = axios.create({
    baseURL: process.env.BASE_URL,
    headers: {
        'X-AUTH-TOKEN': process.env.API_TOKEN
    }
});

export default api;