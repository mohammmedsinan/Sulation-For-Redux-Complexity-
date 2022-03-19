import { createSlice } from '@reduxjs/toolkit';
import { AsyncReducer } from '../../Api/index';

const model = createSlice({
  name: 'Dude',
  initialState: {
    data: {},
    status: null,
    loading: '',
  },
  reducers: {},
  extraReducers: {
    [AsyncReducer('Dude/APi').GET.fulfilled]: (state, { payload }) => {
      state.data = payload;
      state.status = 'success';
      state.loading = false;
    },
    [AsyncReducer('Dude/APi').GET.pending]: (state) => {
      state.loading = true;
    },
    [AsyncReducer('Dude/APi').GET.rejected]: (state) => {
      state.status = 'Failed';
      state.loading = false;
    },
  },
});

export default model.reducer;
