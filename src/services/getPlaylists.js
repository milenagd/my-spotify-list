import { GET_USER_PLAYLISTS_URL } from './servicesUrl';
import { makeRequest } from './makeRequest';
import { playlistAdapter } from '../adapters/playlistAdapter';

export const getPlaylists = async () => {
  const userID = sessionStorage.getItem('userID');

  const response = await makeRequest(GET_USER_PLAYLISTS_URL(userID));
  if (response.status !== 200) {
    console.log('error');
  }
  return playlistAdapter(response.data);
};
