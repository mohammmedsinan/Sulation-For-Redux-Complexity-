import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import { store } from '../utilities/Store';
import { Api_Base_URl } from 'Config';
import axios from 'axios';

const api = axios.create({
  baseURL: `${Api_Base_URl}`,
});

//Dispatch any reducer and any type of reducers
export function Dispatch(spaceName, prefix, reqMethod, body) {
  if (reqMethod === 'GET') {
    return store.dispatch(AsyncReducer(spaceName, prefix).GET());
  } else if (reqMethod === 'POST') {
    return store.dispatch(AsyncReducer(spaceName, prefix, body).POST());
  } else if (reqMethod === 'PUT') {
    return store.dispatch(AsyncReducer(spaceName, prefix, body).PUT());
  } else if (reqMethod === 'DELETE') {
    return store.dispatch(AsyncReducer(spaceName, prefix, body).DELETE());
  }
}

//Api AsyncThunk creator
function AsyncReducer(spaceName = 'SPACE/Name', preFix = '/', PostParams = {}) {
  const AsyncReducers = {
    GET: createAsyncThunk(spaceName, async () => {
      const data = await api.get(preFix);
      return data?.data;
    }),
    POST: createAsyncThunk(spaceName, async () => {
      const data = await api.post(preFix, PostParams);
      return data?.data;
    }),
    DELETE: createAsyncThunk(spaceName, async () => {
      const data = await api.delete(preFix, { data: PostParams });
      return data?.data;
    }),
    PUT: createAsyncThunk(spaceName, async () => {
      const data = await api.put(preFix, PostParams);
      return data?.data;
    }),
    PATCH: createAsyncThunk(spaceName, async () => {
      const data = await api.patch(preFix, PostParams);
      return data?.data;
    }),
    all: createAsyncThunk(spaceName, async () => {
      const data = await api.get(preFix);
      return data?.data;
    }),
  };
  return AsyncReducers;
}

//Slice creator
export function slice(sliceName, initialState, ExtraReducers = [], reducers) {
  const model = createSlice({
    name: sliceName,
    initialState,
    reducers,
    extraReducers: {
      ...ExtraReducers.map((data) => ({
        [AsyncReducer(data.SpaceName).all.pending]: (state, { payload }) => {
          state.status = 'loading';
        },
        [AsyncReducer(data.SpaceName).all.rejected]: (state, { payload }) => {
          state.status = 'failed';
        },
        [AsyncReducer(data.SpaceName).all.fulfilled]: (state, { payload }) => {
          state.status = 'success';
          state[data.data] = payload;
        },
      }))[0],
      ...ExtraReducers.map((data) => ({
        [AsyncReducer(data.SpaceName).all.pending]: (state, { payload }) => {
          state.status = 'loading';
        },
        [AsyncReducer(data.SpaceName).all.rejected]: (state, { payload }) => {
          state.status = 'failed';
        },
        [AsyncReducer(data.SpaceName).all.fulfilled]: (state, { payload }) => {
          state.status = 'success';
          state[data.data] = payload;
        },
      }))[1],
      ...ExtraReducers.map((data) => ({
        [AsyncReducer(data.SpaceName).all.pending]: (state, { payload }) => {
          state.status = 'loading';
        },
        [AsyncReducer(data.SpaceName).all.rejected]: (state, { payload }) => {
          state.status = 'failed';
        },
        [AsyncReducer(data.SpaceName).all.fulfilled]: (state, { payload }) => {
          state.status = 'success';
          state[data.data] = payload;
        },
      }))[2],
      ...ExtraReducers.map((data) => ({
        [AsyncReducer(data.SpaceName).all.pending]: (state, { payload }) => {
          state.status = 'loading';
        },
        [AsyncReducer(data.SpaceName).all.rejected]: (state, { payload }) => {
          state.status = 'failed';
        },
        [AsyncReducer(data.SpaceName).all.fulfilled]: (state, { payload }) => {
          state.status = 'success';
          state[data.data] = payload;
        },
      }))[3],
      ...ExtraReducers.map((data) => ({
        [AsyncReducer(data.SpaceName).all.pending]: (state, { payload }) => {
          state.status = 'loading';
        },
        [AsyncReducer(data.SpaceName).all.rejected]: (state, { payload }) => {
          state.status = 'failed';
        },
        [AsyncReducer(data.SpaceName).all.fulfilled]: (state, { payload }) => {
          state.status = 'success';
          state[data.data] = payload;
        },
      }))[4],
      ...ExtraReducers.map((data) => ({
        [AsyncReducer(data.SpaceName).all.pending]: (state, { payload }) => {
          state.status = 'loading';
        },
        [AsyncReducer(data.SpaceName).all.rejected]: (state, { payload }) => {
          state.status = 'failed';
        },
        [AsyncReducer(data.SpaceName).all.fulfilled]: (state, { payload }) => {
          state.status = 'success';
          state[data.data] = payload;
        },
      }))[5],
      ...ExtraReducers.map((data) => ({
        [AsyncReducer(data.SpaceName).all.pending]: (state, { payload }) => {
          state.status = 'loading';
        },
        [AsyncReducer(data.SpaceName).all.rejected]: (state, { payload }) => {
          state.status = 'failed';
        },
        [AsyncReducer(data.SpaceName).all.fulfilled]: (state, { payload }) => {
          state.status = 'success';
          state[data.data] = payload;
        },
      }))[6],
      ...ExtraReducers.map((data) => ({
        [AsyncReducer(data.SpaceName).all.pending]: (state, { payload }) => {
          state.status = 'loading';
        },
        [AsyncReducer(data.SpaceName).all.rejected]: (state, { payload }) => {
          state.status = 'failed';
        },
        [AsyncReducer(data.SpaceName).all.fulfilled]: (state, { payload }) => {
          state.status = 'success';
          state[data.data] = payload;
        },
      }))[7],
      ...ExtraReducers.map((data) => ({
        [AsyncReducer(data.SpaceName).all.pending]: (state, { payload }) => {
          state.status = 'loading';
        },
        [AsyncReducer(data.SpaceName).all.rejected]: (state, { payload }) => {
          state.status = 'failed';
        },
        [AsyncReducer(data.SpaceName).all.fulfilled]: (state, { payload }) => {
          state.status = 'success';
          state[data.data] = payload;
        },
      }))[8],
      ...ExtraReducers.map((data) => ({
        [AsyncReducer(data.SpaceName).all.pending]: (state, { payload }) => {
          state.status = 'loading';
        },
        [AsyncReducer(data.SpaceName).all.rejected]: (state, { payload }) => {
          state.status = 'failed';
        },
        [AsyncReducer(data.SpaceName).all.fulfilled]: (state, { payload }) => {
          state.status = 'success';
          state[data.data] = payload;
        },
      }))[9],
    },
  });
  return model.reducer;
}
