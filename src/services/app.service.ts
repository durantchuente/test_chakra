import axios from 'axios';
import { UserModel } from '../models/user.model';

const URL_BASE = 'https://jsonplaceholder.typicode.com'


export const getUsers = async (): Promise<UserModel[]> => {
    const response = await axios.get(`${URL_BASE}/users`);
    return response.data;
}