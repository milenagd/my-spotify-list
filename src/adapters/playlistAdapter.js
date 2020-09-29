export const playlistAdapter = (data) => {
  const items = data.items;

  const playlist = items.map((item) => ({
    name: item.name,
    href: item.external_urls.spotify,
    tracks: item.tracks.total,
    images: item.images,
  }));

  return playlist;
};
