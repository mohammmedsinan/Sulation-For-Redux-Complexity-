import { AsyncReducer, slice } from '../../utilities/api';

const initialState = { data: {}, status: null, loading: '' };
export default slice('about', initialState, {
  [AsyncReducer('about/Api').all.pending]: (state, { payload }) => {
    state.status = 'loading';
  },
  [AsyncReducer('about/Api').all.fulfilled]: (state, { payload }) => {
    state.status = 'success';
    state.data = payload;
  },
  [AsyncReducer('about/Api').all.rejected]: (state, { error: { message } }) => {
    console.log(message);
    state.status = 'field';
  },
});
