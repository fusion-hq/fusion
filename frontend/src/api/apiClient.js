import axios from 'axios';

const axiosClient = axios.create({
    baseURL: process.env.REACT_APP_SERVER_URL,
    // baseURL: `http://localhost:8001`,
    headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json'
    }
});

axiosClient.interceptors.request.use((config) => {
    config.headers['Authorization'] = `Bearer ` + sessionStorage.getItem('JWT');
    return config;
});

export default axiosClient;