import { createAsyncThunk } from '@reduxjs/toolkit';
import { store } from './Store';
import { Api_Base_URl } from './config';
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
      const data = await api.get(preFix);
      return data?.data;
    }),
    PUT: createAsyncThunk(spaceName, async () => {
      const data = await api.get(preFix);
      return data?.data;
    }),
    PATCH: createAsyncThunk(spaceName, async () => {
      const data = await api.get(preFix);
      return data?.data;
    }),
    all: createAsyncThunk(spaceName, async () => {
      const data = await api.get(preFix);
      return data?.data;
    }),
  };
  return AsyncReducers;
}
export function slice(sliceName, initialState, extraReducers, reducers) {
  const model = createSlice({
    name: sliceName,
    initialState,
    reducers,
    extraReducers,
  });

  return model.reducer;
}
//-----------------------------------------------------------------------------------
// export const ExtraREducer = {
//   ExtraReducerCreatorGET: (spaceName, fulfilled, pending, rejected) => {
//     const Reducers = {
//       [AsyncReducer(spaceName).GET.fulfilled]: (state, { payload }) => {
//         fulfilled(state, payload);
//       },
//       [AsyncReducer(spaceName).GET.pending]: (state) => {
//         pending(state);
//       },
//       [AsyncReducer(spaceName).GET.rejected]: (state) => {
//         rejected(state);
//       },
//     };
//     return Reducers;
//   },
//   ExtraReducerCreatorPOST: (spaceName) => {
//     const Reducers = {
//       [AsyncReducer(spaceName).POST.fulfilled]: (state, { payload }) => {
//         state.data = payload;
//         state.status = 'success';
//         state.loading = false;
//       },
//       [AsyncReducer(spaceName).POST.pending]: (state) => {
//         state.loading = true;
//       },
//       [AsyncReducer(spaceName).POST.rejected]: (state) => {
//         state.status = 'Failed';
//         state.loading = false;
//       },
//     };
//     return Reducers;
//   },
//   ExtraReducerCreatorPUT: (spaceName) => {
//     const Reducers = {
//       [AsyncReducer(spaceName).PUT.fulfilled]: (state, { payload }) => {
//         state.data = payload;
//         state.status = 'success';
//         state.loading = false;
//       },
//       [AsyncReducer(spaceName).PUT.pending]: (state) => {
//         state.loading = true;
//       },
//       [AsyncReducer(spaceName).PUT.rejected]: (state) => {
//         state.status = 'Failed';
//         state.loading = false;
//       },
//     };
//     return Reducers;
//   },
//   ExtraReducerCreatorDELETE: (spaceName) => {
//     const Reducers = {
//       [AsyncReducer(spaceName).DELETE.fulfilled]: (state, { payload }) => {
//         state.data = payload;
//         state.status = 'success';
//         state.loading = false;
//       },
//       [AsyncReducer(spaceName).DELETE.pending]: (state) => {
//         state.loading = true;
//       },
//       [AsyncReducer(spaceName).DELETE.rejected]: (state) => {
//         state.status = 'Failed';
//         state.loading = false;
//       },
//     };

//     return Reducers;
//   },
//   ExtraReducerCreatorPATCH: (spaceName) => {
//     const Reducers = {
//       [AsyncReducer(spaceName).PATCH.fulfilled]: (state, { payload }) => {
//         state.data = payload;
//         state.status = 'success';
//         state.loading = false;
//       },
//       [AsyncReducer(spaceName).PATCH.pending]: (state) => {
//         state.loading = true;
//       },
//       [AsyncReducer(spaceName).PATCH.rejected]: (state) => {
//         state.status = 'Failed';
//         state.loading = false;
//       },
//     };

//     return Reducers;
//   },
// };
// change: createAsyncThunk('Dude/fetchApi', async () => {
//   const res = await api.get('/Profile/test');
//   return res.data;
// }),
