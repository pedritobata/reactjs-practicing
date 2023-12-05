import axios from 'axios';
import { User } from './types';
import { NETWORK_ERROR } from './constants';
// https://random-data-api.com/documentation
const axiosInstance = axios.create({
    baseURL: 'https://random-data-api.com/api/v2/' //random data api
});

export const getUsers = async (size = 0): Promise<User[]> => {
    const response = await axiosInstance.get<User[]>(`users${size ? '?size=' + size : ''}`);
    if(response.status !== 200) throw new Error(NETWORK_ERROR);

    console.log('data =>', response.data);
    return response.data;
}