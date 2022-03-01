import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';
import { api } from '../../Api/index';

export const fetchApi = createAsyncThunk('Dude/fetchApi', async () => {
  const res = await api.get('/Tweets');
  return res.data;
});

const model = createSlice({
  name: 'Dude',
  initialState: {
    data: {},
    status: null,
    loading: '',
  },
  reducers: {
    Handler: (state, actions) => {},
  },
  extraReducers: {
    [fetchApi.fulfilled]: (state, { payload }) => {
      state.data = payload;
      state.status = 'success';
    },
    [fetchApi.pending]: (state) => {
      state.loading = true;
    },
    [fetchApi.rejected]: (state) => {
      state.status = 'Failed';
    },
  },
});

export const { Handler } = model.actions;
export default model.reducer;
