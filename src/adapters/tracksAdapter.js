export const tracksAdapter = (data, topN = 10) => {
  const items = data.tracks.items.filter((_, index) => index < topN);

  const tracks = items.map((trackItem) => ({
    name: trackItem.track.name,
    href: trackItem.track.external_urls.spotify,
    artist: trackItem.track.album.artists[0].name,
    images: trackItem.track.album.images,
  }));

  return tracks;
};
