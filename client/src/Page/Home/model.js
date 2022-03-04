import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';
import { api } from '../../Api/index';

export const AsyncReducers = {
  change: createAsyncThunk('Dude/fetchApi', async () => {
    const res = await api.get('/Tweets');
    return res.data;
  }),
};

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
    [AsyncReducers.change.fulfilled]: (state, { payload }) => {
      state.data = payload;
      state.status = 'success';
    },
    [AsyncReducers.change.pending]: (state) => {
      state.loading = true;
    },
    [AsyncReducers.change.rejected]: (state) => {
      state.status = 'Failed';
    },
  },
});

export const { Handler } = model.actions;
export default model.reducer;
