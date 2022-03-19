import { createSlice } from '@reduxjs/toolkit';
import { ExtraREducer } from '../../Api/index';

const model = createSlice({
  name: 'Dude',
  initialState: {
    data: {},
    status: null,
    loading: '',
  },
  reducers: {},
  extraReducers: { ...ExtraREducer.ExtraReducerCreatorGET('Dude/API') },
});

export default model.reducer;
