import axios, { AxiosInstance } from 'axios';
import AsyncStorage from "@react-native-async-storage/async-storage";

const onRequest = async (config) => {
    const token = await AsyncStorage.getItem('@TOKEN_KEY');
    if (token) {
        config.headers.Authorization = `Bearer ${token}`;
    }
    return config;
}

const setupInterceptorsTO = (axiosInstance) => {
    axiosInstance.interceptors.request.use(onRequest);
    return axiosInstance;
}

const API = axios.create();
setupInterceptorsTO(API);

export default API;
