import { AsyncReducer, slice } from 'API';

const initialState = { data: {}, status: null, loading: '' };
export default slice('about', initialState, {
  [AsyncReducer('about/Api').all]: (state, { payload }) => {
    state.data = payload;
    state.status = 'success';
  },
});
