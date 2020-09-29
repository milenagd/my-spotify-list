import get from 'lodash/get';
import { makeRequest } from './makeRequest';
import {
  GET_CATEGORIES_BY_COUNTRY_URL,
  GET_PLAYLIST_BY_CATEGORY_ID_URL,
  GET_USER_TRACKS_BY_PLAYLIST_ID_URL,
} from './servicesUrl';
import { tracksAdapter } from '../adapters/tracksAdapter';

export const getTopTracks = async () => {
  const country = sessionStorage.getItem('userMarket');

  const categoriesByCountry = await makeRequest(
    GET_CATEGORIES_BY_COUNTRY_URL(country)
  );

  const categoryID = get(categoriesByCountry, 'data.categories.items[0].id');

  const topPlaylist = await makeRequest(
    GET_PLAYLIST_BY_CATEGORY_ID_URL(categoryID)
  );

  const { id, owner } = topPlaylist.data.playlists.items[0];
  const response = await makeRequest(
    GET_USER_TRACKS_BY_PLAYLIST_ID_URL(owner.id, id)
  );
  if (response.status !== 200) {
    console.log('error');
  }
  return tracksAdapter(response.data);
};
