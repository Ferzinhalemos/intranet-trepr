import { GET_CLIMA_DATA } from '../../constants/ActionTypes';

export function getClimaData(location) {
  const path = `/@clima?location=${location}`;
  return {
    type: GET_CLIMA_DATA,
    request: {
      op: 'get',
      path: path,
    },
  };
}
