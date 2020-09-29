import { GET_PROFILE_URL } from './servicesUrl';
import { makeRequest } from './makeRequest';
import { profileAdapter } from '../adapters/';

export const getProfile = async () => {
  const response = await makeRequest(GET_PROFILE_URL);
  if (response.status !== 200) {
    console.log('error');
  }
  return profileAdapter(response.data);
};
