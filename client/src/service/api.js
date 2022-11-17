import { createAsyncThunk } from '@reduxjs/toolkit';
import { store } from '../utilities/Store';
import { Api_Base_URl } from 'Config';
import { createSlice } from '@reduxjs/toolkit';
import axios from 'axios';

const api = axios.create({
  baseURL: `${Api_Base_URl}`,
});

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
export function AsyncReducer(spaceName = 'SPACE/Name', preFix = '/', PostParams = {}) {
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
      const data = await api.delete(preFix, PostParams);
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
export function slice(sliceName, initialState, ExtraReducers = [], reducers) {
  console.log();
  const model = createSlice({
    name: sliceName,
    initialState,
    reducers,
    extraReducers: {
      ...ExtraReducers.map((data) => ({
        [AsyncReducer(data.SpaceName).all.pending]: (state, { payload }) => {
          state.status = 'loading';
          data.pending && data?.pending();
        },
        [AsyncReducer(data.SpaceName).all.rejected]: (state, { payload }) => {
          state.status = 'failed';
          data.rejected && data?.rejected();
        },
        [AsyncReducer(data.SpaceName).all.fulfilled]: (state, { payload }) => {
          state.status = 'success';
          state[data.data] = payload;
          data.fulfilled && data?.fulfilled();
        },
      }))[0],
      ...ExtraReducers.map((data) => ({
        [AsyncReducer(data.SpaceName).all.pending]: (state, { payload }) => {
          state.status = 'loading';
          data.pending && data?.pending();
        },
        [AsyncReducer(data.SpaceName).all.rejected]: (state, { payload }) => {
          state.status = 'failed';
          data.rejected && data?.rejected();
        },
        [AsyncReducer(data.SpaceName).all.fulfilled]: (state, { payload }) => {
          state.status = 'success';
          state[data.data] = payload;
          data.fulfilled && data?.fulfilled();
        },
      }))[1],
      ...ExtraReducers.map((data) => ({
        [AsyncReducer(data.SpaceName).all.pending]: (state, { payload }) => {
          state.status = 'loading';
          data.pending && data?.pending();
        },
        [AsyncReducer(data.SpaceName).all.rejected]: (state, { payload }) => {
          state.status = 'failed';
          data.rejected && data?.rejected();
        },
        [AsyncReducer(data.SpaceName).all.fulfilled]: (state, { payload }) => {
          state.status = 'success';
          state[data.data] = payload;
          data.fulfilled && data?.fulfilled();
        },
      }))[2],
      ...ExtraReducers.map((data) => ({
        [AsyncReducer(data.SpaceName).all.pending]: (state, { payload }) => {
          state.status = 'loading';
          data.pending && data?.pending();
        },
        [AsyncReducer(data.SpaceName).all.rejected]: (state, { payload }) => {
          state.status = 'failed';
          data.rejected && data?.rejected();
        },
        [AsyncReducer(data.SpaceName).all.fulfilled]: (state, { payload }) => {
          state.status = 'success';
          state[data.data] = payload;
          data.fulfilled && data?.fulfilled();
        },
      }))[3],
      ...ExtraReducers.map((data) => ({
        [AsyncReducer(data.SpaceName).all.pending]: (state, { payload }) => {
          state.status = 'loading';
          data.pending && data?.pending();
        },
        [AsyncReducer(data.SpaceName).all.rejected]: (state, { payload }) => {
          state.status = 'failed';
          data.rejected && data?.rejected();
        },
        [AsyncReducer(data.SpaceName).all.fulfilled]: (state, { payload }) => {
          state.status = 'success';
          state[data.data] = payload;
          data.fulfilled && data?.fulfilled();
        },
      }))[4],
      ...ExtraReducers.map((data) => ({
        [AsyncReducer(data.SpaceName).all.pending]: (state, { payload }) => {
          state.status = 'loading';
          data.pending && data?.pending();
        },
        [AsyncReducer(data.SpaceName).all.rejected]: (state, { payload }) => {
          state.status = 'failed';
          data.rejected && data?.rejected();
        },
        [AsyncReducer(data.SpaceName).all.fulfilled]: (state, { payload }) => {
          state.status = 'success';
          state[data.data] = payload;
          data.fulfilled && data?.fulfilled();
        },
      }))[5],
      ...ExtraReducers.map((data) => ({
        [AsyncReducer(data.SpaceName).all.pending]: (state, { payload }) => {
          state.status = 'loading';
          data.pending && data?.pending();
        },
        [AsyncReducer(data.SpaceName).all.rejected]: (state, { payload }) => {
          state.status = 'failed';
          data.rejected && data?.rejected();
        },
        [AsyncReducer(data.SpaceName).all.fulfilled]: (state, { payload }) => {
          state.status = 'success';
          state[data.data] = payload;
          data.fulfilled && data?.fulfilled();
        },
      }))[6],
      ...ExtraReducers.map((data) => ({
        [AsyncReducer(data.SpaceName).all.pending]: (state, { payload }) => {
          state.status = 'loading';
          data.pending && data?.pending();
        },
        [AsyncReducer(data.SpaceName).all.rejected]: (state, { payload }) => {
          state.status = 'failed';
          data.rejected && data?.rejected();
        },
        [AsyncReducer(data.SpaceName).all.fulfilled]: (state, { payload }) => {
          state.status = 'success';
          state[data.data] = payload;
          data.fulfilled && data?.fulfilled();
        },
      }))[7],
      ...ExtraReducers.map((data) => ({
        [AsyncReducer(data.SpaceName).all.pending]: (state, { payload }) => {
          state.status = 'loading';
          data.pending && data?.pending();
        },
        [AsyncReducer(data.SpaceName).all.rejected]: (state, { payload }) => {
          state.status = 'failed';
          data.rejected && data?.rejected();
        },
        [AsyncReducer(data.SpaceName).all.fulfilled]: (state, { payload }) => {
          state.status = 'success';
          state[data.data] = payload;
          data.fulfilled && data?.fulfilled();
        },
      }))[8],
      ...ExtraReducers.map((data) => ({
        [AsyncReducer(data.SpaceName).all.pending]: (state, { payload }) => {
          state.status = 'loading';
          data.pending && data?.pending();
        },
        [AsyncReducer(data.SpaceName).all.rejected]: (state, { payload }) => {
          state.status = 'failed';
          data.rejected && data?.rejected();
        },
        [AsyncReducer(data.SpaceName).all.fulfilled]: (state, { payload }) => {
          state.status = 'success';
          state[data.data] = payload;
          data.fulfilled && data?.fulfilled();
        },
      }))[9],
    },
  });
  return model.reducer;
}
