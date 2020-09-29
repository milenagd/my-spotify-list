import get from 'lodash/get';

export const profileAdapter = (data) => ({
  birthdate: get(data, 'birthdate', ''),
  country: get(data, 'country', ''),
  email: get(data, 'email', ''),
  id: data.id || 12144189624,
  name: get(data, 'display_name', ''),
  userImage: get(data, 'images[0]', []),
});
