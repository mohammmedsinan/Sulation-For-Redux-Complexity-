import { slice } from 'API';

export default slice('products', { data: {}, details: {}, status: 'loading' }, [
  { SpaceName: 'products/get', data: 'data' },
  { SpaceName: 'products/create' },
  { SpaceName: 'products/delete' },
  { SpaceName: 'products/details', data: 'details' },
]);
