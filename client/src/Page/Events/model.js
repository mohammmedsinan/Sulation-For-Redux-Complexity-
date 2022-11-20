import { slice } from 'API';

export default slice('events', { data: {}, details: {}, status: 'loading' }, [
  { SpaceName: 'events/get', data: 'data' },
  { SpaceName: 'events/create' },
  { SpaceName: 'events/details', data: 'details' },
  { SpaceName: 'events/delete' },
]);
