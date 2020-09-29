export const BASE_SERVICE_URL =
  'https://any-api.com:8443/https://api.spotify.com/v1';

export const GET_PROFILE_URL = `/me`;

export const GET_FAVORITES_TRACKS_URL = `/me/tracks`;

export const GET_USER_PLAYLISTS_URL = (userID) => `/users/${userID}/playlists`;

export const GET_USER_TRACKS_BY_PLAYLIST_ID_URL = (userID, playlistID) =>
  `/users/${userID}/playlists/${playlistID}`;

export const GET_CATEGORIES_BY_COUNTRY_URL = (
  country = 'br',
  limit = '1',
  offset = '0'
) => `/browse/categories?country=${country}&limit=${limit}&offset=${offset}`;

export const GET_PLAYLIST_BY_CATEGORY_ID_URL = (
  categoryId,
  country = 'br',
  limit = '1',
  offset = '0'
) =>
  `/browse/categories/${categoryId}/playlists?country=${country}&limit=${limit}&offset=${offset}`;
