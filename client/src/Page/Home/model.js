import { createSlice } from '@reduxjs/toolkit';
import { AsyncReducer } from 'API';

const model = createSlice({
  name: 'Dude',
  initialState: {
    data: {},
    data2: {},
    status: null,
    loading: '',
  },
  reducers: {},
  extraReducers: {
    [AsyncReducer('Dude/API').GET.fulfilled]: (state, { payload }) => {
      state.data = payload;
      state.status = 'success';
    },
  },
});
export default model.reducer;
