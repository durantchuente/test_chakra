import { useQuery } from '@tanstack/react-query';
import { getUsers } from '../services/app.service';


const key = 'users'

export const useGetUsers = () => {
    return useQuery([key], getUsers);
}