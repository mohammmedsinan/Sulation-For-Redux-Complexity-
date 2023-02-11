import { slice } from 'API';

const initialState = { data: {}, details: {}, status: 'loading', loading: '' };
const requests = [
  { SpaceName: 'orders/get', data: 'data' },
  { SpaceName: 'orders/details', data: 'details' },
  { SpaceName: 'orders/submit' },
];
export default slice('users', initialState, requests);
