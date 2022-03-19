import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

const api = axios.create({
  baseURL: 'http://localhost:5000',
});

export function AsyncReducer(spaceName = 'SPACE/Name', preFix = '/', PostParams) {
  const AsyncReducers = {
    GET: createAsyncThunk(spaceName, async () => {
      try {
        const data = await api.get(preFix);
        return data?.data;
      } catch (err) {
        console.log(err);
      }
    }),
    POST: createAsyncThunk(spaceName, async () => {
      try {
        const data = await api.get(preFix);
        return data?.data;
      } catch (err) {
        console.log(err);
      }
    }),
  };

  return AsyncReducers;
}
export const ExtraREducer = {
  ExtraReducerCreatorGET: (spaceName) => {
    const Reducers = {
      [AsyncReducer(spaceName).GET.fulfilled]: (state, { payload }) => {
        state.data = payload;
        state.status = 'success';
        state.loading = false;
      },
      [AsyncReducer(spaceName).GET.pending]: (state) => {
        state.loading = true;
      },
      [AsyncReducer(spaceName).GET.rejected]: (state) => {
        state.status = 'Failed';
        state.loading = false;
      },
    };
    return Reducers;
  },
  ExtraReducerCreatorPOST: (spaceName) => {
    const Reducers = {
      [AsyncReducer(spaceName).POST.fulfilled]: (state, { payload }) => {
        state.data = payload;
        state.status = 'success';
        state.loading = false;
      },
      [AsyncReducer(spaceName).POST.pending]: (state) => {
        state.loading = true;
      },
      [AsyncReducer(spaceName).POST.rejected]: (state) => {
        state.status = 'Failed';
        state.loading = false;
      },
    };
    return Reducers;
  },
  ExtraReducerCreatorPUT: (spaceName) => {
    const Reducers = {
      [AsyncReducer(spaceName).PUT.fulfilled]: (state, { payload }) => {
        state.data = payload;
        state.status = 'success';
        state.loading = false;
      },
      [AsyncReducer(spaceName).PUT.pending]: (state) => {
        state.loading = true;
      },
      [AsyncReducer(spaceName).PUT.rejected]: (state) => {
        state.status = 'Failed';
        state.loading = false;
      },
    };
    return Reducers;
  },
  ExtraReducerCreatorDELETE: (spaceName) => {
    const Reducers = {
      [AsyncReducer(spaceName).DELETE.fulfilled]: (state, { payload }) => {
        state.data = payload;
        state.status = 'success';
        state.loading = false;
      },
      [AsyncReducer(spaceName).DELETE.pending]: (state) => {
        state.loading = true;
      },
      [AsyncReducer(spaceName).DELETE.rejected]: (state) => {
        state.status = 'Failed';
        state.loading = false;
      },
    };

    return Reducers;
  },
};
// change: createAsyncThunk('Dude/fetchApi', async () => {
//   const res = await api.get('/Profile/test');
//   return res.data;
// }),
