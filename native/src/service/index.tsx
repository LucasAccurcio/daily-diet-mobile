import axios from 'axios';
import { IUser } from '../interfaces/IUser';

const API_URL = 'http://192.168.0.111:3001/api';

export const api = axios.create({
  baseURL: API_URL,
});


export const registerUser = async (user: IUser) => {
  const { data } = await api.post('/users/create', user);
  return data;
};

export const loginUser = async (user: IUser) => {
  const { data } = await api.post('/users/login', user);
  return data;
};