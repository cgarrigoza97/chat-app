import axios from "axios";
import { AuthResponse } from "../interfaces/authResponse";

const axiosInstance = axios.create({
    baseURL: process.env.REACT_APP_BASE_URL,
    headers: {
        'Content-Type': 'application/json'
    }
});

const refreshAccessToken = async () => {

    const response = await axiosInstance.post<AuthResponse>('/auth/refresh', {
        refreshToken: localStorage.getItem('refreshToken')
    })

    localStorage.setItem('accessToken', response.data.accessToken);
    localStorage.setItem('refreshToken', response.data.refreshToken);

    return response.data.accessToken;

}

// Request interceptor for API calls
axiosInstance.interceptors.request.use(
    async config => {
        
        const accessToken = localStorage.getItem('accessToken');

        if (accessToken) {
            config.headers!.Authorization = `Bearer ${accessToken}`;
        }

        return config;
    },
    error => {
        Promise.reject(error)   
    }
);
  
// Response interceptor for API calls
axiosInstance.interceptors.response.use(
    (response) => response, 
    async function (error) {
        const originalRequest = error.config;
        if (error.response.status === 401 && !originalRequest._retry) {
            originalRequest._retry = true;

            const accessToken = await refreshAccessToken();            
            axios.defaults.headers.common.Authorization = `Bearer ${accessToken}`;

            return axiosInstance(originalRequest);
        }
        return Promise.reject(error);
    }
);


  export { axiosInstance };