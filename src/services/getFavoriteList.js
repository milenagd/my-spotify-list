import { GET_FAVORITES_TRACKS_URL } from './servicesUrl';
import { makeRequest } from './makeRequest';
import { favoriteListAdapter } from '../adapters';

export const getFavoriteList = async () => {
  const response = await makeRequest(GET_FAVORITES_TRACKS_URL);
  if (response.status !== 200) {
    console.log('error');
  }

  return favoriteListAdapter(response.data);
};
