import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

export const fetchApi = createAsyncThunk('Dude/fetchApi', async () => {
  const res = await axios.get('https://jsonplaceholder.typicode.com/todos');
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
    [fetchApi.pending]: (state) => {},
    [fetchApi.rejected]: (state) => {},
  },
});

export const { Handler } = model.actions;

export default model.reducer;
