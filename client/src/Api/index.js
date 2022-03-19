import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

const api = axios.create({
  baseURL: 'http://localhost:5000',
});

const apiCaller = async (reqType = 'GET', preFix = '/') => {
  if (reqType === 'DELETE') {
  }
  if (reqType === 'PUT') {
  }
};
export function AsyncReducer(spaceName = 'SPACE/Name', preFix = '/', PostParams) {
  const AsyncReducers = {
    GET: createAsyncThunk(spaceName, async () => {
      try {
        const data = await api.get(preFix);
        return data?.data;
      } catch (err) {
        console.log(err);
      }
    }),
  };
  return AsyncReducers;
}
// change: createAsyncThunk('Dude/fetchApi', async () => {
//   const res = await api.get('/Profile/test');
//   return res.data;
// }),
