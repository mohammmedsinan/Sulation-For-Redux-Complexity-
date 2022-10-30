import { createSlice } from '@reduxjs/toolkit';
import { AsyncReducer } from '../../Api/index';

const initialState = { data: {}, status: null, loading: '' };

const model = createSlice({
  name: 'Buy',
  initialState,
  reducers: {},
  extraReducers: {
    [AsyncReducer('Buy/Api').all]: (state, { payload }) => {
      state.data = payload;
      state.status = 'success';
    },
  },
});

export default model.reducer;
