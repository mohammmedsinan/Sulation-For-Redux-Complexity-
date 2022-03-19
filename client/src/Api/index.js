import axios from 'axios';
import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';

export const api = axios.create({
  baseURL: 'http://localhost:5000',
});

export const apiCaller = async (reqType = 'GET', preFix = '/') => {
  if (reqType === 'GET') {
    const data = await api.get(preFix);
    return data?.data;
  } else if (reqType === 'POST') {
  } else if (reqType === 'DELETE') {
  } else if (reqType === 'PUT') {
  }
};

// change: createAsyncThunk('Dude/fetchApi', async () => {
//   const res = await api.get('/Profile/test');
//   return res.data;
// }),
