import { slice } from '../../service/api';

const initialState = { data: {}, status: 'loading', loading: '' };
export default slice('users', initialState, [{ SpaceName: 'users/get', data: 'data' }]);
