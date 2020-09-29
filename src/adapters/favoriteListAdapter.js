export const favoriteListAdapter = (data) => {
  const items = data.items;

  const favoriteList = items.map((item) => {
    const track = item.track;

    return {
      name: track.name,
      href: track.external_urls.spotify,
      artist: track.album.artists[0].name,
      images: track.album.images,
    };
  });

  return favoriteList;
};
