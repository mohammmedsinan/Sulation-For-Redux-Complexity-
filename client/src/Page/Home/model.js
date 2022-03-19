import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import { api, apiCaller } from '../../Api/index';

export const AsyncReducers = {
  change: createAsyncThunk('Dude/fetchApi', async () => {
    //   const res = await api.get('/Profile/test');
    //   return res.data;
    return apiCaller('GET', '/Profile/test');
  }),
};

const model = createSlice({
  name: 'Dude',
  initialState: {
    data: {},
    status: null,
    loading: '',
  },
  reducers: {},
  extraReducers: {
    [AsyncReducers.change.fulfilled]: (state, { payload }) => {
      state.data = payload;
      state.status = 'success';
      state.loading = false;
    },
    [AsyncReducers.change.pending]: (state) => {
      state.loading = true;
    },
    [AsyncReducers.change.rejected]: (state) => {
      state.status = 'Failed';
      state.loading = false;
    },
  },
});

export default model.reducer;
