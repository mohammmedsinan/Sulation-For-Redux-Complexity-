import { AsyncReducer, slice } from 'API';

const initialState = { data: {}, status: null, loading: '' };
const slicer = slice('home', initialState, {
  [AsyncReducer('home/Api').all.fulfilled]: (state, { payload }) => {
    state.data = payload;
    state.status = 'success';
  },
});
export default slicer;
