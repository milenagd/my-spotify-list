import React from 'react';

import Favorites from '../scenes/Favorites';
import Playlists from '../scenes/Playlists';
import Profile from '../scenes/Profile';
import TopTracks from '../scenes/TopTracks';

export const allRoutes = [
  {
    label: 'Profile',
    title: 'Your profile',
    path: '/profile',
    component: Profile,
  },
  {
    label: 'Favorites',
    title: 'Your favorites songs',
    path: '/favorites',
    component: Favorites,
  },
  {
    label: 'Playlists',
    path: '/playlists',
    title: 'Your playlists',
    component: Playlists,
  },
  {
    label: 'Top 10',
    path: '/top-10',
    title: 'Top 10 songs in #country#',
    component: TopTracks,
  },
];
