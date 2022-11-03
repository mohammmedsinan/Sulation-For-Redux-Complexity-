import { createSlice } from '@reduxjs/toolkit';
import { AsyncReducer } from 'API';

const initialState = { data: {}, status: null, loading: '' };

const model = createSlice({
  name: 'About',
  initialState,
  reducers: {},
  extraReducers: {
    [AsyncReducer('About/Api').all]: (state, { payload }) => {
      state.data = payload;
      state.status = 'success';
    },
  },
});

export default model.reducer;
