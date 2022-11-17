import { AsyncReducer, slice } from 'API';

const initialState = {
  data: {},
  data1: {},
  status: null,
  loading: '',
};
export default slice('home', initialState, [
  { SpaceName: 'home/Api', data: 'data' },
  { SpaceName: 'home/Api1', data: 'data1' },
]);
