import axios from 'axios';
import { fetchApi } from '../Page/Home/model';

export const api = axios.create({
  baseURL: 'http://localhost:5000',
});
export { fetchApi };
