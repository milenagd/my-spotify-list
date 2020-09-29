import { GET_FAVORITES_TRACKS_URL } from './servicesUrl';
import { makeRequest } from './makeRequest';
import { favoriteListAdapter } from '../adapters';

const mockedData = {
  href: 'https://api.spotify.com/v1/me/tracks?offset=0&limit=20&market=br',
  items: [
    {
      added_at: '2020-09-21T09:28:34Z',
      track: {
        album: {
          album_type: 'single',
          artists: [
            {
              external_urls: {
                spotify:
                  'https://open.spotify.com/artist/6Kz7MXIUFMtp5Ts91lagtR',
              },
              href: 'https://api.spotify.com/v1/artists/6Kz7MXIUFMtp5Ts91lagtR',
              id: '6Kz7MXIUFMtp5Ts91lagtR',
              name: 'Mikolas Josef',
              type: 'artist',
              uri: 'spotify:artist:6Kz7MXIUFMtp5Ts91lagtR',
            },
          ],
          external_urls: {
            spotify: 'https://open.spotify.com/album/6qL43GOEUyQea4iFaFupSK',
          },
          href: 'https://api.spotify.com/v1/albums/6qL43GOEUyQea4iFaFupSK',
          id: '6qL43GOEUyQea4iFaFupSK',
          images: [
            {
              height: 640,
              url:
                'https://i.scdn.co/image/ab67616d0000b2735fe41719a3a8ed0da3377908',
              width: 640,
            },
            {
              height: 300,
              url:
                'https://i.scdn.co/image/ab67616d00001e025fe41719a3a8ed0da3377908',
              width: 300,
            },
            {
              height: 64,
              url:
                'https://i.scdn.co/image/ab67616d000048515fe41719a3a8ed0da3377908',
              width: 64,
            },
          ],
          name: 'Colorado',
          release_date: '2019-11-29',
          release_date_precision: 'day',
          total_tracks: 1,
          type: 'album',
          uri: 'spotify:album:6qL43GOEUyQea4iFaFupSK',
        },
        artists: [
          {
            external_urls: {
              spotify: 'https://open.spotify.com/artist/6Kz7MXIUFMtp5Ts91lagtR',
            },
            href: 'https://api.spotify.com/v1/artists/6Kz7MXIUFMtp5Ts91lagtR',
            id: '6Kz7MXIUFMtp5Ts91lagtR',
            name: 'Mikolas Josef',
            type: 'artist',
            uri: 'spotify:artist:6Kz7MXIUFMtp5Ts91lagtR',
          },
        ],
        disc_number: 1,
        duration_ms: 151768,
        explicit: false,
        external_ids: {
          isrc: 'CZAV71900013',
        },
        external_urls: {
          spotify: 'https://open.spotify.com/track/1PcvkzcTfuRJD5yblGetBO',
        },
        href: 'https://api.spotify.com/v1/tracks/1PcvkzcTfuRJD5yblGetBO',
        id: '1PcvkzcTfuRJD5yblGetBO',
        is_local: false,
        is_playable: true,
        linked_from: {
          external_urls: {
            spotify: 'https://open.spotify.com/track/49ln9KYOP9buQzI37mAJa1',
          },
          href: 'https://api.spotify.com/v1/tracks/49ln9KYOP9buQzI37mAJa1',
          id: '49ln9KYOP9buQzI37mAJa1',
          type: 'track',
          uri: 'spotify:track:49ln9KYOP9buQzI37mAJa1',
        },
        name: 'Colorado',
        popularity: 58,
        preview_url:
          'https://p.scdn.co/mp3-preview/48a7218fafdc50a8d24fb583073b6b97ae1f98fd?cid=7c7de202e4df4600b614ed6890bf4cba',
        track_number: 1,
        type: 'track',
        uri: 'spotify:track:1PcvkzcTfuRJD5yblGetBO',
      },
    },
    {
      added_at: '2020-08-16T22:49:54Z',
      track: {
        album: {
          album_type: 'single',
          artists: [
            {
              external_urls: {
                spotify:
                  'https://open.spotify.com/artist/5o00VSNNjsdSmZ0YJwUSxi',
              },
              href: 'https://api.spotify.com/v1/artists/5o00VSNNjsdSmZ0YJwUSxi',
              id: '5o00VSNNjsdSmZ0YJwUSxi',
              name: 'Nossa Toca',
              type: 'artist',
              uri: 'spotify:artist:5o00VSNNjsdSmZ0YJwUSxi',
            },
          ],
          external_urls: {
            spotify: 'https://open.spotify.com/album/2X98cs8gYI94zRz871vvTj',
          },
          href: 'https://api.spotify.com/v1/albums/2X98cs8gYI94zRz871vvTj',
          id: '2X98cs8gYI94zRz871vvTj',
          images: [
            {
              height: 640,
              url:
                'https://i.scdn.co/image/ab67616d0000b273a16cb170410bcdc664ed8f1c',
              width: 640,
            },
            {
              height: 300,
              url:
                'https://i.scdn.co/image/ab67616d00001e02a16cb170410bcdc664ed8f1c',
              width: 300,
            },
            {
              height: 64,
              url:
                'https://i.scdn.co/image/ab67616d00004851a16cb170410bcdc664ed8f1c',
              width: 64,
            },
          ],
          name: 'Segundo Vento',
          release_date: '2019-12-16',
          release_date_precision: 'day',
          total_tracks: 1,
          type: 'album',
          uri: 'spotify:album:2X98cs8gYI94zRz871vvTj',
        },
        artists: [
          {
            external_urls: {
              spotify: 'https://open.spotify.com/artist/5o00VSNNjsdSmZ0YJwUSxi',
            },
            href: 'https://api.spotify.com/v1/artists/5o00VSNNjsdSmZ0YJwUSxi',
            id: '5o00VSNNjsdSmZ0YJwUSxi',
            name: 'Nossa Toca',
            type: 'artist',
            uri: 'spotify:artist:5o00VSNNjsdSmZ0YJwUSxi',
          },
          {
            external_urls: {
              spotify: 'https://open.spotify.com/artist/02nGZOh81jqa9Oh4VfMn9P',
            },
            href: 'https://api.spotify.com/v1/artists/02nGZOh81jqa9Oh4VfMn9P',
            id: '02nGZOh81jqa9Oh4VfMn9P',
            name: 'Pedro Schin',
            type: 'artist',
            uri: 'spotify:artist:02nGZOh81jqa9Oh4VfMn9P',
          },
          {
            external_urls: {
              spotify: 'https://open.spotify.com/artist/4oeqovhGT9Bj4wbDeaTqXn',
            },
            href: 'https://api.spotify.com/v1/artists/4oeqovhGT9Bj4wbDeaTqXn',
            id: '4oeqovhGT9Bj4wbDeaTqXn',
            name: 'Joana Castanheira',
            type: 'artist',
            uri: 'spotify:artist:4oeqovhGT9Bj4wbDeaTqXn',
          },
          {
            external_urls: {
              spotify: 'https://open.spotify.com/artist/1YC2sOHtayOjFp3hQ8GeSH',
            },
            href: 'https://api.spotify.com/v1/artists/1YC2sOHtayOjFp3hQ8GeSH',
            id: '1YC2sOHtayOjFp3hQ8GeSH',
            name: 'Benziê',
            type: 'artist',
            uri: 'spotify:artist:1YC2sOHtayOjFp3hQ8GeSH',
          },
        ],
        disc_number: 1,
        duration_ms: 228748,
        explicit: false,
        external_ids: {
          isrc: 'BXNO01900013',
        },
        external_urls: {
          spotify: 'https://open.spotify.com/track/6TSsYH0gVOaoFQKihdZFrd',
        },
        href: 'https://api.spotify.com/v1/tracks/6TSsYH0gVOaoFQKihdZFrd',
        id: '6TSsYH0gVOaoFQKihdZFrd',
        is_local: false,
        is_playable: true,
        name: 'Segundo Vento',
        popularity: 31,
        preview_url:
          'https://p.scdn.co/mp3-preview/4b03d5368c0b1bb4a4a3bb65e5cfb2bcc0b3662a?cid=7c7de202e4df4600b614ed6890bf4cba',
        track_number: 1,
        type: 'track',
        uri: 'spotify:track:6TSsYH0gVOaoFQKihdZFrd',
      },
    },
    {
      added_at: '2020-08-16T22:47:02Z',
      track: {
        album: {
          album_type: 'single',
          artists: [
            {
              external_urls: {
                spotify:
                  'https://open.spotify.com/artist/5o00VSNNjsdSmZ0YJwUSxi',
              },
              href: 'https://api.spotify.com/v1/artists/5o00VSNNjsdSmZ0YJwUSxi',
              id: '5o00VSNNjsdSmZ0YJwUSxi',
              name: 'Nossa Toca',
              type: 'artist',
              uri: 'spotify:artist:5o00VSNNjsdSmZ0YJwUSxi',
            },
            {
              external_urls: {
                spotify:
                  'https://open.spotify.com/artist/7q2HAGnWhT2b2C8BYZG2XT',
              },
              href: 'https://api.spotify.com/v1/artists/7q2HAGnWhT2b2C8BYZG2XT',
              id: '7q2HAGnWhT2b2C8BYZG2XT',
              name: 'Fabinho K',
              type: 'artist',
              uri: 'spotify:artist:7q2HAGnWhT2b2C8BYZG2XT',
            },
            {
              external_urls: {
                spotify:
                  'https://open.spotify.com/artist/4i61oiNj2OuvVp2wMvZxp8',
              },
              href: 'https://api.spotify.com/v1/artists/4i61oiNj2OuvVp2wMvZxp8',
              id: '4i61oiNj2OuvVp2wMvZxp8',
              name: 'Rê Gugli',
              type: 'artist',
              uri: 'spotify:artist:4i61oiNj2OuvVp2wMvZxp8',
            },
          ],
          external_urls: {
            spotify: 'https://open.spotify.com/album/69WSyfLfRYxQRflSNUAari',
          },
          href: 'https://api.spotify.com/v1/albums/69WSyfLfRYxQRflSNUAari',
          id: '69WSyfLfRYxQRflSNUAari',
          images: [
            {
              height: 640,
              url:
                'https://i.scdn.co/image/ab67616d0000b2738f18c4b6cafb5248fa3171e7',
              width: 640,
            },
            {
              height: 300,
              url:
                'https://i.scdn.co/image/ab67616d00001e028f18c4b6cafb5248fa3171e7',
              width: 300,
            },
            {
              height: 64,
              url:
                'https://i.scdn.co/image/ab67616d000048518f18c4b6cafb5248fa3171e7',
              width: 64,
            },
          ],
          name: 'Baixa a Guarda',
          release_date: '2019-10-31',
          release_date_precision: 'day',
          total_tracks: 1,
          type: 'album',
          uri: 'spotify:album:69WSyfLfRYxQRflSNUAari',
        },
        artists: [
          {
            external_urls: {
              spotify: 'https://open.spotify.com/artist/5o00VSNNjsdSmZ0YJwUSxi',
            },
            href: 'https://api.spotify.com/v1/artists/5o00VSNNjsdSmZ0YJwUSxi',
            id: '5o00VSNNjsdSmZ0YJwUSxi',
            name: 'Nossa Toca',
            type: 'artist',
            uri: 'spotify:artist:5o00VSNNjsdSmZ0YJwUSxi',
          },
          {
            external_urls: {
              spotify: 'https://open.spotify.com/artist/7q2HAGnWhT2b2C8BYZG2XT',
            },
            href: 'https://api.spotify.com/v1/artists/7q2HAGnWhT2b2C8BYZG2XT',
            id: '7q2HAGnWhT2b2C8BYZG2XT',
            name: 'Fabinho K',
            type: 'artist',
            uri: 'spotify:artist:7q2HAGnWhT2b2C8BYZG2XT',
          },
          {
            external_urls: {
              spotify: 'https://open.spotify.com/artist/4i61oiNj2OuvVp2wMvZxp8',
            },
            href: 'https://api.spotify.com/v1/artists/4i61oiNj2OuvVp2wMvZxp8',
            id: '4i61oiNj2OuvVp2wMvZxp8',
            name: 'Rê Gugli',
            type: 'artist',
            uri: 'spotify:artist:4i61oiNj2OuvVp2wMvZxp8',
          },
        ],
        disc_number: 1,
        duration_ms: 194817,
        explicit: false,
        external_ids: {
          isrc: 'QZHN91947950',
        },
        external_urls: {
          spotify: 'https://open.spotify.com/track/7iRqpW9zJS3gwnxmTUvvCv',
        },
        href: 'https://api.spotify.com/v1/tracks/7iRqpW9zJS3gwnxmTUvvCv',
        id: '7iRqpW9zJS3gwnxmTUvvCv',
        is_local: false,
        is_playable: true,
        name: 'Baixa a Guarda',
        popularity: 48,
        preview_url:
          'https://p.scdn.co/mp3-preview/71ca3e1467bc206206818379833a72dfa01c4d37?cid=7c7de202e4df4600b614ed6890bf4cba',
        track_number: 1,
        type: 'track',
        uri: 'spotify:track:7iRqpW9zJS3gwnxmTUvvCv',
      },
    },
    {
      added_at: '2020-08-13T14:47:01Z',
      track: {
        album: {
          album_type: 'album',
          artists: [
            {
              external_urls: {
                spotify:
                  'https://open.spotify.com/artist/0gt9nFdIsu03ipyhLajGvK',
              },
              href: 'https://api.spotify.com/v1/artists/0gt9nFdIsu03ipyhLajGvK',
              id: '0gt9nFdIsu03ipyhLajGvK',
              name: 'Collectif Métissé',
              type: 'artist',
              uri: 'spotify:artist:0gt9nFdIsu03ipyhLajGvK',
            },
          ],
          external_urls: {
            spotify: 'https://open.spotify.com/album/6b7Okc7AodYtjoAq7F7rRP',
          },
          href: 'https://api.spotify.com/v1/albums/6b7Okc7AodYtjoAq7F7rRP',
          id: '6b7Okc7AodYtjoAq7F7rRP',
          images: [
            {
              height: 640,
              url:
                'https://i.scdn.co/image/ab67616d0000b2731b2fab7e25e89fca41fc3a4c',
              width: 640,
            },
            {
              height: 300,
              url:
                'https://i.scdn.co/image/ab67616d00001e021b2fab7e25e89fca41fc3a4c',
              width: 300,
            },
            {
              height: 64,
              url:
                'https://i.scdn.co/image/ab67616d000048511b2fab7e25e89fca41fc3a4c',
              width: 64,
            },
          ],
          name: 'Rendez-vous au soleil',
          release_date: '2015-06-15',
          release_date_precision: 'day',
          total_tracks: 17,
          type: 'album',
          uri: 'spotify:album:6b7Okc7AodYtjoAq7F7rRP',
        },
        artists: [
          {
            external_urls: {
              spotify: 'https://open.spotify.com/artist/0gt9nFdIsu03ipyhLajGvK',
            },
            href: 'https://api.spotify.com/v1/artists/0gt9nFdIsu03ipyhLajGvK',
            id: '0gt9nFdIsu03ipyhLajGvK',
            name: 'Collectif Métissé',
            type: 'artist',
            uri: 'spotify:artist:0gt9nFdIsu03ipyhLajGvK',
          },
        ],
        disc_number: 1,
        duration_ms: 229013,
        explicit: false,
        external_ids: {
          isrc: 'FRPC21500230',
        },
        external_urls: {
          spotify: 'https://open.spotify.com/track/6Yvh8kAb95e5On64Mj0gdw',
        },
        href: 'https://api.spotify.com/v1/tracks/6Yvh8kAb95e5On64Mj0gdw',
        id: '6Yvh8kAb95e5On64Mj0gdw',
        is_local: false,
        is_playable: true,
        name: "C'est la vie",
        popularity: 46,
        preview_url:
          'https://p.scdn.co/mp3-preview/6dd62ef9e7ba18208b672e1d0e5fcee26b2acbaa?cid=7c7de202e4df4600b614ed6890bf4cba',
        track_number: 3,
        type: 'track',
        uri: 'spotify:track:6Yvh8kAb95e5On64Mj0gdw',
      },
    },
    {
      added_at: '2020-08-13T14:41:27Z',
      track: {
        album: {
          album_type: 'album',
          artists: [
            {
              external_urls: {
                spotify:
                  'https://open.spotify.com/artist/5KBbs98MK59UNMF1VTwMmz',
              },
              href: 'https://api.spotify.com/v1/artists/5KBbs98MK59UNMF1VTwMmz',
              id: '5KBbs98MK59UNMF1VTwMmz',
              name: 'Claudio Capéo',
              type: 'artist',
              uri: 'spotify:artist:5KBbs98MK59UNMF1VTwMmz',
            },
          ],
          external_urls: {
            spotify: 'https://open.spotify.com/album/5SU3cKcGIAmqZhNfI3qggZ',
          },
          href: 'https://api.spotify.com/v1/albums/5SU3cKcGIAmqZhNfI3qggZ',
          id: '5SU3cKcGIAmqZhNfI3qggZ',
          images: [
            {
              height: 640,
              url:
                'https://i.scdn.co/image/ab67616d0000b273fc423c28570fb3d07bd5b69a',
              width: 640,
            },
            {
              height: 300,
              url:
                'https://i.scdn.co/image/ab67616d00001e02fc423c28570fb3d07bd5b69a',
              width: 300,
            },
            {
              height: 64,
              url:
                'https://i.scdn.co/image/ab67616d00004851fc423c28570fb3d07bd5b69a',
              width: 64,
            },
          ],
          name: "Tant que rien ne m'arrête",
          release_date: '2018-12-07',
          release_date_precision: 'day',
          total_tracks: 13,
          type: 'album',
          uri: 'spotify:album:5SU3cKcGIAmqZhNfI3qggZ',
        },
        artists: [
          {
            external_urls: {
              spotify: 'https://open.spotify.com/artist/5KBbs98MK59UNMF1VTwMmz',
            },
            href: 'https://api.spotify.com/v1/artists/5KBbs98MK59UNMF1VTwMmz',
            id: '5KBbs98MK59UNMF1VTwMmz',
            name: 'Claudio Capéo',
            type: 'artist',
            uri: 'spotify:artist:5KBbs98MK59UNMF1VTwMmz',
          },
        ],
        disc_number: 1,
        duration_ms: 175906,
        explicit: false,
        external_ids: {
          isrc: 'FR7S01800490',
        },
        external_urls: {
          spotify: 'https://open.spotify.com/track/2M1EBFNZjVRJPp5OKEhzAo',
        },
        href: 'https://api.spotify.com/v1/tracks/2M1EBFNZjVRJPp5OKEhzAo',
        id: '2M1EBFNZjVRJPp5OKEhzAo',
        is_local: false,
        is_playable: true,
        linked_from: {
          external_urls: {
            spotify: 'https://open.spotify.com/track/64GT5b6M5tzqnWcgGlJHyu',
          },
          href: 'https://api.spotify.com/v1/tracks/64GT5b6M5tzqnWcgGlJHyu',
          id: '64GT5b6M5tzqnWcgGlJHyu',
          type: 'track',
          uri: 'spotify:track:64GT5b6M5tzqnWcgGlJHyu',
        },
        name: "C'est une chanson",
        popularity: 36,
        preview_url:
          'https://p.scdn.co/mp3-preview/f2318dc00c0127c2fee8ebbbfc03b49fb9de0ecb?cid=7c7de202e4df4600b614ed6890bf4cba',
        track_number: 1,
        type: 'track',
        uri: 'spotify:track:2M1EBFNZjVRJPp5OKEhzAo',
      },
    },
    {
      added_at: '2020-08-11T09:15:52Z',
      track: {
        album: {
          album_type: 'single',
          artists: [
            {
              external_urls: {
                spotify:
                  'https://open.spotify.com/artist/5nE8CAd519jLpwMX2YgFMK',
              },
              href: 'https://api.spotify.com/v1/artists/5nE8CAd519jLpwMX2YgFMK',
              id: '5nE8CAd519jLpwMX2YgFMK',
              name: 'BETSIE GØLD',
              type: 'artist',
              uri: 'spotify:artist:5nE8CAd519jLpwMX2YgFMK',
            },
          ],
          external_urls: {
            spotify: 'https://open.spotify.com/album/4vD7oQ99Nf1v4VqTkRGbxI',
          },
          href: 'https://api.spotify.com/v1/albums/4vD7oQ99Nf1v4VqTkRGbxI',
          id: '4vD7oQ99Nf1v4VqTkRGbxI',
          images: [
            {
              height: 640,
              url:
                'https://i.scdn.co/image/ab67616d0000b2735e46413166bfa003c5d8ff86',
              width: 640,
            },
            {
              height: 300,
              url:
                'https://i.scdn.co/image/ab67616d00001e025e46413166bfa003c5d8ff86',
              width: 300,
            },
            {
              height: 64,
              url:
                'https://i.scdn.co/image/ab67616d000048515e46413166bfa003c5d8ff86',
              width: 64,
            },
          ],
          name: 'Craving You',
          release_date: '2019-07-26',
          release_date_precision: 'day',
          total_tracks: 1,
          type: 'album',
          uri: 'spotify:album:4vD7oQ99Nf1v4VqTkRGbxI',
        },
        artists: [
          {
            external_urls: {
              spotify: 'https://open.spotify.com/artist/5nE8CAd519jLpwMX2YgFMK',
            },
            href: 'https://api.spotify.com/v1/artists/5nE8CAd519jLpwMX2YgFMK',
            id: '5nE8CAd519jLpwMX2YgFMK',
            name: 'BETSIE GØLD',
            type: 'artist',
            uri: 'spotify:artist:5nE8CAd519jLpwMX2YgFMK',
          },
        ],
        disc_number: 1,
        duration_ms: 176210,
        explicit: false,
        external_ids: {
          isrc: 'GBKPL1955261',
        },
        external_urls: {
          spotify: 'https://open.spotify.com/track/0AaqnTmwpC17JPNKNzjvSI',
        },
        href: 'https://api.spotify.com/v1/tracks/0AaqnTmwpC17JPNKNzjvSI',
        id: '0AaqnTmwpC17JPNKNzjvSI',
        is_local: false,
        is_playable: true,
        name: 'Craving You',
        popularity: 39,
        preview_url:
          'https://p.scdn.co/mp3-preview/e16c1b62b23761c1b8ace76634a03cdc2af9b8f5?cid=7c7de202e4df4600b614ed6890bf4cba',
        track_number: 1,
        type: 'track',
        uri: 'spotify:track:0AaqnTmwpC17JPNKNzjvSI',
      },
    },
    {
      added_at: '2020-08-03T08:27:07Z',
      track: {
        album: {
          album_type: 'single',
          artists: [
            {
              external_urls: {
                spotify:
                  'https://open.spotify.com/artist/3drSYIOsA3RKqUiMSX5bPK',
              },
              href: 'https://api.spotify.com/v1/artists/3drSYIOsA3RKqUiMSX5bPK',
              id: '3drSYIOsA3RKqUiMSX5bPK',
              name: 'Brett Altman',
              type: 'artist',
              uri: 'spotify:artist:3drSYIOsA3RKqUiMSX5bPK',
            },
          ],
          external_urls: {
            spotify: 'https://open.spotify.com/album/6jbqLTOroiGtr2OchpSj1S',
          },
          href: 'https://api.spotify.com/v1/albums/6jbqLTOroiGtr2OchpSj1S',
          id: '6jbqLTOroiGtr2OchpSj1S',
          images: [
            {
              height: 640,
              url:
                'https://i.scdn.co/image/ab67616d0000b273c6e559823ad44e473b9b6111',
              width: 640,
            },
            {
              height: 300,
              url:
                'https://i.scdn.co/image/ab67616d00001e02c6e559823ad44e473b9b6111',
              width: 300,
            },
            {
              height: 64,
              url:
                'https://i.scdn.co/image/ab67616d00004851c6e559823ad44e473b9b6111',
              width: 64,
            },
          ],
          name: 'Vacancy Signs',
          release_date: '2018-08-03',
          release_date_precision: 'day',
          total_tracks: 1,
          type: 'album',
          uri: 'spotify:album:6jbqLTOroiGtr2OchpSj1S',
        },
        artists: [
          {
            external_urls: {
              spotify: 'https://open.spotify.com/artist/3drSYIOsA3RKqUiMSX5bPK',
            },
            href: 'https://api.spotify.com/v1/artists/3drSYIOsA3RKqUiMSX5bPK',
            id: '3drSYIOsA3RKqUiMSX5bPK',
            name: 'Brett Altman',
            type: 'artist',
            uri: 'spotify:artist:3drSYIOsA3RKqUiMSX5bPK',
          },
        ],
        disc_number: 1,
        duration_ms: 189218,
        explicit: false,
        external_ids: {
          isrc: 'ushm81815654',
        },
        external_urls: {
          spotify: 'https://open.spotify.com/track/5GoX1ve8SRk8YQhlXrLbOK',
        },
        href: 'https://api.spotify.com/v1/tracks/5GoX1ve8SRk8YQhlXrLbOK',
        id: '5GoX1ve8SRk8YQhlXrLbOK',
        is_local: false,
        is_playable: true,
        linked_from: {
          external_urls: {
            spotify: 'https://open.spotify.com/track/5r7PHPD3irdE0Br2DPPE6b',
          },
          href: 'https://api.spotify.com/v1/tracks/5r7PHPD3irdE0Br2DPPE6b',
          id: '5r7PHPD3irdE0Br2DPPE6b',
          type: 'track',
          uri: 'spotify:track:5r7PHPD3irdE0Br2DPPE6b',
        },
        name: 'Vacancy Signs',
        popularity: 1,
        preview_url:
          'https://p.scdn.co/mp3-preview/8f2bb8a3b01afeef831bef2b992b4444ce1ddec8?cid=7c7de202e4df4600b614ed6890bf4cba',
        track_number: 1,
        type: 'track',
        uri: 'spotify:track:5GoX1ve8SRk8YQhlXrLbOK',
      },
    },
    {
      added_at: '2020-07-31T23:52:57Z',
      track: {
        album: {
          album_type: 'single',
          artists: [
            {
              external_urls: {
                spotify:
                  'https://open.spotify.com/artist/3t5xRXzsuZmMDkQzgOX35S',
              },
              href: 'https://api.spotify.com/v1/artists/3t5xRXzsuZmMDkQzgOX35S',
              id: '3t5xRXzsuZmMDkQzgOX35S',
              name: 'Robin Schulz',
              type: 'artist',
              uri: 'spotify:artist:3t5xRXzsuZmMDkQzgOX35S',
            },
            {
              external_urls: {
                spotify:
                  'https://open.spotify.com/artist/3tXUeiWOSod3mSQ2lOautf',
              },
              href: 'https://api.spotify.com/v1/artists/3tXUeiWOSod3mSQ2lOautf',
              id: '3tXUeiWOSod3mSQ2lOautf',
              name: 'Wes',
              type: 'artist',
              uri: 'spotify:artist:3tXUeiWOSod3mSQ2lOautf',
            },
          ],
          external_urls: {
            spotify: 'https://open.spotify.com/album/537cgkkJUqMb46JUSNh0n7',
          },
          href: 'https://api.spotify.com/v1/albums/537cgkkJUqMb46JUSNh0n7',
          id: '537cgkkJUqMb46JUSNh0n7',
          images: [
            {
              height: 640,
              url:
                'https://i.scdn.co/image/ab67616d0000b273fa19eaf3a6df7073f70a8d0a',
              width: 640,
            },
            {
              height: 300,
              url:
                'https://i.scdn.co/image/ab67616d00001e02fa19eaf3a6df7073f70a8d0a',
              width: 300,
            },
            {
              height: 64,
              url:
                'https://i.scdn.co/image/ab67616d00004851fa19eaf3a6df7073f70a8d0a',
              width: 64,
            },
          ],
          name: 'Alane',
          release_date: '2020-06-19',
          release_date_precision: 'day',
          total_tracks: 1,
          type: 'album',
          uri: 'spotify:album:537cgkkJUqMb46JUSNh0n7',
        },
        artists: [
          {
            external_urls: {
              spotify: 'https://open.spotify.com/artist/3t5xRXzsuZmMDkQzgOX35S',
            },
            href: 'https://api.spotify.com/v1/artists/3t5xRXzsuZmMDkQzgOX35S',
            id: '3t5xRXzsuZmMDkQzgOX35S',
            name: 'Robin Schulz',
            type: 'artist',
            uri: 'spotify:artist:3t5xRXzsuZmMDkQzgOX35S',
          },
          {
            external_urls: {
              spotify: 'https://open.spotify.com/artist/3tXUeiWOSod3mSQ2lOautf',
            },
            href: 'https://api.spotify.com/v1/artists/3tXUeiWOSod3mSQ2lOautf',
            id: '3tXUeiWOSod3mSQ2lOautf',
            name: 'Wes',
            type: 'artist',
            uri: 'spotify:artist:3tXUeiWOSod3mSQ2lOautf',
          },
        ],
        disc_number: 1,
        duration_ms: 175016,
        explicit: false,
        external_ids: {
          isrc: 'DEA622000699',
        },
        external_urls: {
          spotify: 'https://open.spotify.com/track/2u6Jm2klS4yvAlbSHlxUwI',
        },
        href: 'https://api.spotify.com/v1/tracks/2u6Jm2klS4yvAlbSHlxUwI',
        id: '2u6Jm2klS4yvAlbSHlxUwI',
        is_local: false,
        is_playable: true,
        name: 'Alane',
        popularity: 85,
        preview_url:
          'https://p.scdn.co/mp3-preview/45be0564cb0ab2c6b476ba635666b92037332e89?cid=7c7de202e4df4600b614ed6890bf4cba',
        track_number: 1,
        type: 'track',
        uri: 'spotify:track:2u6Jm2klS4yvAlbSHlxUwI',
      },
    },
    {
      added_at: '2020-06-10T15:29:12Z',
      track: {
        album: {
          album_type: 'album',
          artists: [
            {
              external_urls: {
                spotify:
                  'https://open.spotify.com/artist/6rl53MP8HSoiugpqzA50Zh',
              },
              href: 'https://api.spotify.com/v1/artists/6rl53MP8HSoiugpqzA50Zh',
              id: '6rl53MP8HSoiugpqzA50Zh',
              name: 'Amir',
              type: 'artist',
              uri: 'spotify:artist:6rl53MP8HSoiugpqzA50Zh',
            },
          ],
          external_urls: {
            spotify: 'https://open.spotify.com/album/2Qvew38NyZ03edl3Lfi9JB',
          },
          href: 'https://api.spotify.com/v1/albums/2Qvew38NyZ03edl3Lfi9JB',
          id: '2Qvew38NyZ03edl3Lfi9JB',
          images: [
            {
              height: 640,
              url:
                'https://i.scdn.co/image/ab67616d0000b273d356c7a786f07d22c7d129b4',
              width: 640,
            },
            {
              height: 300,
              url:
                'https://i.scdn.co/image/ab67616d00001e02d356c7a786f07d22c7d129b4',
              width: 300,
            },
            {
              height: 64,
              url:
                'https://i.scdn.co/image/ab67616d00004851d356c7a786f07d22c7d129b4',
              width: 64,
            },
          ],
          name: 'Addictions (Deluxe Edition)',
          release_date: '2018-11-09',
          release_date_precision: 'day',
          total_tracks: 32,
          type: 'album',
          uri: 'spotify:album:2Qvew38NyZ03edl3Lfi9JB',
        },
        artists: [
          {
            external_urls: {
              spotify: 'https://open.spotify.com/artist/6rl53MP8HSoiugpqzA50Zh',
            },
            href: 'https://api.spotify.com/v1/artists/6rl53MP8HSoiugpqzA50Zh',
            id: '6rl53MP8HSoiugpqzA50Zh',
            name: 'Amir',
            type: 'artist',
            uri: 'spotify:artist:6rl53MP8HSoiugpqzA50Zh',
          },
        ],
        disc_number: 1,
        duration_ms: 161546,
        explicit: false,
        external_ids: {
          isrc: 'FR9W11718990',
        },
        external_urls: {
          spotify: 'https://open.spotify.com/track/2jVN1W74PsOlTRA5ER8VrH',
        },
        href: 'https://api.spotify.com/v1/tracks/2jVN1W74PsOlTRA5ER8VrH',
        id: '2jVN1W74PsOlTRA5ER8VrH',
        is_local: false,
        is_playable: true,
        name: "L'impasse",
        popularity: 30,
        preview_url:
          'https://p.scdn.co/mp3-preview/518f63dc4a89a22661b62776e20d0a45f5b3dba0?cid=7c7de202e4df4600b614ed6890bf4cba',
        track_number: 17,
        type: 'track',
        uri: 'spotify:track:2jVN1W74PsOlTRA5ER8VrH',
      },
    },
    {
      added_at: '2020-06-06T01:12:20Z',
      track: {
        album: {
          album_type: 'album',
          artists: [
            {
              external_urls: {
                spotify:
                  'https://open.spotify.com/artist/6rl53MP8HSoiugpqzA50Zh',
              },
              href: 'https://api.spotify.com/v1/artists/6rl53MP8HSoiugpqzA50Zh',
              id: '6rl53MP8HSoiugpqzA50Zh',
              name: 'Amir',
              type: 'artist',
              uri: 'spotify:artist:6rl53MP8HSoiugpqzA50Zh',
            },
          ],
          external_urls: {
            spotify: 'https://open.spotify.com/album/7qmzJKB20IS9non9kBkPgF',
          },
          href: 'https://api.spotify.com/v1/albums/7qmzJKB20IS9non9kBkPgF',
          id: '7qmzJKB20IS9non9kBkPgF',
          images: [
            {
              height: 640,
              url:
                'https://i.scdn.co/image/ab67616d0000b2733b66edbe316a379490dcd82b',
              width: 640,
            },
            {
              height: 300,
              url:
                'https://i.scdn.co/image/ab67616d00001e023b66edbe316a379490dcd82b',
              width: 300,
            },
            {
              height: 64,
              url:
                'https://i.scdn.co/image/ab67616d000048513b66edbe316a379490dcd82b',
              width: 64,
            },
          ],
          name: 'Au coeur de moi',
          release_date: '2016-04-29',
          release_date_precision: 'day',
          total_tracks: 12,
          type: 'album',
          uri: 'spotify:album:7qmzJKB20IS9non9kBkPgF',
        },
        artists: [
          {
            external_urls: {
              spotify: 'https://open.spotify.com/artist/6rl53MP8HSoiugpqzA50Zh',
            },
            href: 'https://api.spotify.com/v1/artists/6rl53MP8HSoiugpqzA50Zh',
            id: '6rl53MP8HSoiugpqzA50Zh',
            name: 'Amir',
            type: 'artist',
            uri: 'spotify:artist:6rl53MP8HSoiugpqzA50Zh',
          },
        ],
        disc_number: 1,
        duration_ms: 212280,
        explicit: false,
        external_ids: {
          isrc: 'FR9W11520485',
        },
        external_urls: {
          spotify: 'https://open.spotify.com/track/1lzRxwbdl86iJlYMz48KoD',
        },
        href: 'https://api.spotify.com/v1/tracks/1lzRxwbdl86iJlYMz48KoD',
        id: '1lzRxwbdl86iJlYMz48KoD',
        is_local: false,
        is_playable: true,
        name: "J'ai cherché",
        popularity: 56,
        preview_url:
          'https://p.scdn.co/mp3-preview/76242f01933cdb1400d32db853db121409207506?cid=7c7de202e4df4600b614ed6890bf4cba',
        track_number: 1,
        type: 'track',
        uri: 'spotify:track:1lzRxwbdl86iJlYMz48KoD',
      },
    },
    {
      added_at: '2020-06-06T01:08:22Z',
      track: {
        album: {
          album_type: 'album',
          artists: [
            {
              external_urls: {
                spotify:
                  'https://open.spotify.com/artist/6rl53MP8HSoiugpqzA50Zh',
              },
              href: 'https://api.spotify.com/v1/artists/6rl53MP8HSoiugpqzA50Zh',
              id: '6rl53MP8HSoiugpqzA50Zh',
              name: 'Amir',
              type: 'artist',
              uri: 'spotify:artist:6rl53MP8HSoiugpqzA50Zh',
            },
          ],
          external_urls: {
            spotify: 'https://open.spotify.com/album/3Pn9nKN7m8MKBhAtRzuugW',
          },
          href: 'https://api.spotify.com/v1/albums/3Pn9nKN7m8MKBhAtRzuugW',
          id: '3Pn9nKN7m8MKBhAtRzuugW',
          images: [
            {
              height: 640,
              url:
                'https://i.scdn.co/image/ab67616d0000b2734e5cce95a98856c36e977f40',
              width: 640,
            },
            {
              height: 300,
              url:
                'https://i.scdn.co/image/ab67616d00001e024e5cce95a98856c36e977f40',
              width: 300,
            },
            {
              height: 64,
              url:
                'https://i.scdn.co/image/ab67616d000048514e5cce95a98856c36e977f40',
              width: 64,
            },
          ],
          name: 'Addictions (Ultimate Version)',
          release_date: '2017-10-27',
          release_date_precision: 'day',
          total_tracks: 22,
          type: 'album',
          uri: 'spotify:album:3Pn9nKN7m8MKBhAtRzuugW',
        },
        artists: [
          {
            external_urls: {
              spotify: 'https://open.spotify.com/artist/6rl53MP8HSoiugpqzA50Zh',
            },
            href: 'https://api.spotify.com/v1/artists/6rl53MP8HSoiugpqzA50Zh',
            id: '6rl53MP8HSoiugpqzA50Zh',
            name: 'Amir',
            type: 'artist',
            uri: 'spotify:artist:6rl53MP8HSoiugpqzA50Zh',
          },
        ],
        disc_number: 1,
        duration_ms: 219000,
        explicit: false,
        external_ids: {
          isrc: 'FR9W11815723',
        },
        external_urls: {
          spotify: 'https://open.spotify.com/track/73yB2HMz9zu0VcueZ4P1UU',
        },
        href: 'https://api.spotify.com/v1/tracks/73yB2HMz9zu0VcueZ4P1UU',
        id: '73yB2HMz9zu0VcueZ4P1UU',
        is_local: false,
        is_playable: true,
        name: 'Longtemps',
        popularity: 58,
        preview_url:
          'https://p.scdn.co/mp3-preview/75ae6945785e71c721710b76d1256d51caa2e0fe?cid=7c7de202e4df4600b614ed6890bf4cba',
        track_number: 1,
        type: 'track',
        uri: 'spotify:track:73yB2HMz9zu0VcueZ4P1UU',
      },
    },
    {
      added_at: '2020-06-06T01:06:31Z',
      track: {
        album: {
          album_type: 'single',
          artists: [
            {
              external_urls: {
                spotify:
                  'https://open.spotify.com/artist/6vEUS0O1mM4TPIWHSpuP7h',
              },
              href: 'https://api.spotify.com/v1/artists/6vEUS0O1mM4TPIWHSpuP7h',
              id: '6vEUS0O1mM4TPIWHSpuP7h',
              name: 'Christabelle',
              type: 'artist',
              uri: 'spotify:artist:6vEUS0O1mM4TPIWHSpuP7h',
            },
          ],
          external_urls: {
            spotify: 'https://open.spotify.com/album/0CyxQ5M5KB7YQSz6GPrt5q',
          },
          href: 'https://api.spotify.com/v1/albums/0CyxQ5M5KB7YQSz6GPrt5q',
          id: '0CyxQ5M5KB7YQSz6GPrt5q',
          images: [
            {
              height: 640,
              url:
                'https://i.scdn.co/image/ab67616d0000b27327cc8acd03631b94f64e1fe3',
              width: 640,
            },
            {
              height: 300,
              url:
                'https://i.scdn.co/image/ab67616d00001e0227cc8acd03631b94f64e1fe3',
              width: 300,
            },
            {
              height: 64,
              url:
                'https://i.scdn.co/image/ab67616d0000485127cc8acd03631b94f64e1fe3',
              width: 64,
            },
          ],
          name: 'Taboo',
          release_date: '2018-03-28',
          release_date_precision: 'day',
          total_tracks: 1,
          type: 'album',
          uri: 'spotify:album:0CyxQ5M5KB7YQSz6GPrt5q',
        },
        artists: [
          {
            external_urls: {
              spotify: 'https://open.spotify.com/artist/6vEUS0O1mM4TPIWHSpuP7h',
            },
            href: 'https://api.spotify.com/v1/artists/6vEUS0O1mM4TPIWHSpuP7h',
            id: '6vEUS0O1mM4TPIWHSpuP7h',
            name: 'Christabelle',
            type: 'artist',
            uri: 'spotify:artist:6vEUS0O1mM4TPIWHSpuP7h',
          },
        ],
        disc_number: 1,
        duration_ms: 181550,
        explicit: false,
        external_ids: {
          isrc: 'SE5OR1800101',
        },
        external_urls: {
          spotify: 'https://open.spotify.com/track/0peNaLeCABe70ovtFgGENP',
        },
        href: 'https://api.spotify.com/v1/tracks/0peNaLeCABe70ovtFgGENP',
        id: '0peNaLeCABe70ovtFgGENP',
        is_local: false,
        is_playable: true,
        name: 'Taboo',
        popularity: 33,
        preview_url:
          'https://p.scdn.co/mp3-preview/02215590433236f5d8adb118f7b9480f5757f899?cid=7c7de202e4df4600b614ed6890bf4cba',
        track_number: 1,
        type: 'track',
        uri: 'spotify:track:0peNaLeCABe70ovtFgGENP',
      },
    },
    {
      added_at: '2020-06-04T14:47:31Z',
      track: {
        album: {
          album_type: 'album',
          artists: [
            {
              external_urls: {
                spotify:
                  'https://open.spotify.com/artist/0GOx72r5AAEKRGQFn3xqXK',
              },
              href: 'https://api.spotify.com/v1/artists/0GOx72r5AAEKRGQFn3xqXK',
              id: '0GOx72r5AAEKRGQFn3xqXK',
              name: 'GIMS',
              type: 'artist',
              uri: 'spotify:artist:0GOx72r5AAEKRGQFn3xqXK',
            },
          ],
          external_urls: {
            spotify: 'https://open.spotify.com/album/2lHVp0TDnXIHUHwojpW6fN',
          },
          href: 'https://api.spotify.com/v1/albums/2lHVp0TDnXIHUHwojpW6fN',
          id: '2lHVp0TDnXIHUHwojpW6fN',
          images: [
            {
              height: 640,
              url:
                'https://i.scdn.co/image/ab67616d0000b27363e3c246585c5c1132c07008',
              width: 640,
            },
            {
              height: 300,
              url:
                'https://i.scdn.co/image/ab67616d00001e0263e3c246585c5c1132c07008',
              width: 300,
            },
            {
              height: 64,
              url:
                'https://i.scdn.co/image/ab67616d0000485163e3c246585c5c1132c07008',
              width: 64,
            },
          ],
          name: 'Ceinture noire (Transcendance)',
          release_date: '2019-04-26',
          release_date_precision: 'day',
          total_tracks: 50,
          type: 'album',
          uri: 'spotify:album:2lHVp0TDnXIHUHwojpW6fN',
        },
        artists: [
          {
            external_urls: {
              spotify: 'https://open.spotify.com/artist/0GOx72r5AAEKRGQFn3xqXK',
            },
            href: 'https://api.spotify.com/v1/artists/0GOx72r5AAEKRGQFn3xqXK',
            id: '0GOx72r5AAEKRGQFn3xqXK',
            name: 'GIMS',
            type: 'artist',
            uri: 'spotify:artist:0GOx72r5AAEKRGQFn3xqXK',
          },
          {
            external_urls: {
              spotify: 'https://open.spotify.com/artist/0Ntl0oWMPWfBOoi9Qcr9ht',
            },
            href: 'https://api.spotify.com/v1/artists/0Ntl0oWMPWfBOoi9Qcr9ht',
            id: '0Ntl0oWMPWfBOoi9Qcr9ht',
            name: 'Vitaa',
            type: 'artist',
            uri: 'spotify:artist:0Ntl0oWMPWfBOoi9Qcr9ht',
          },
        ],
        disc_number: 1,
        duration_ms: 191946,
        explicit: false,
        external_ids: {
          isrc: 'FR8FB1901330',
        },
        external_urls: {
          spotify: 'https://open.spotify.com/track/6KljnQGuCWzlMQ6oovwlbw',
        },
        href: 'https://api.spotify.com/v1/tracks/6KljnQGuCWzlMQ6oovwlbw',
        id: '6KljnQGuCWzlMQ6oovwlbw',
        is_local: false,
        is_playable: true,
        name: 'En secret',
        popularity: 31,
        preview_url:
          'https://p.scdn.co/mp3-preview/1f7203ab48c16298d53fafd51325aff05503d3de?cid=7c7de202e4df4600b614ed6890bf4cba',
        track_number: 1,
        type: 'track',
        uri: 'spotify:track:6KljnQGuCWzlMQ6oovwlbw',
      },
    },
    {
      added_at: '2020-05-27T13:49:16Z',
      track: {
        album: {
          album_type: 'album',
          artists: [
            {
              external_urls: {
                spotify:
                  'https://open.spotify.com/artist/2PNcNJDYJyoeJqUjgHz9Xa',
              },
              href: 'https://api.spotify.com/v1/artists/2PNcNJDYJyoeJqUjgHz9Xa',
              id: '2PNcNJDYJyoeJqUjgHz9Xa',
              name: 'Boostee',
              type: 'artist',
              uri: 'spotify:artist:2PNcNJDYJyoeJqUjgHz9Xa',
            },
          ],
          external_urls: {
            spotify: 'https://open.spotify.com/album/7fxz0ljcN2A9w0POxy5hCU',
          },
          href: 'https://api.spotify.com/v1/albums/7fxz0ljcN2A9w0POxy5hCU',
          id: '7fxz0ljcN2A9w0POxy5hCU',
          images: [
            {
              height: 640,
              url:
                'https://i.scdn.co/image/ab67616d0000b273e8503e6d356f7d5311261397',
              width: 640,
            },
            {
              height: 300,
              url:
                'https://i.scdn.co/image/ab67616d00001e02e8503e6d356f7d5311261397',
              width: 300,
            },
            {
              height: 64,
              url:
                'https://i.scdn.co/image/ab67616d00004851e8503e6d356f7d5311261397',
              width: 64,
            },
          ],
          name: 'Bluesky',
          release_date: '2017-03-17',
          release_date_precision: 'day',
          total_tracks: 13,
          type: 'album',
          uri: 'spotify:album:7fxz0ljcN2A9w0POxy5hCU',
        },
        artists: [
          {
            external_urls: {
              spotify: 'https://open.spotify.com/artist/2PNcNJDYJyoeJqUjgHz9Xa',
            },
            href: 'https://api.spotify.com/v1/artists/2PNcNJDYJyoeJqUjgHz9Xa',
            id: '2PNcNJDYJyoeJqUjgHz9Xa',
            name: 'Boostee',
            type: 'artist',
            uri: 'spotify:artist:2PNcNJDYJyoeJqUjgHz9Xa',
          },
        ],
        disc_number: 1,
        duration_ms: 178813,
        explicit: false,
        external_ids: {
          isrc: 'FR4LW1700001',
        },
        external_urls: {
          spotify: 'https://open.spotify.com/track/3LmiVrJmfxyy4yOfOdnfXZ',
        },
        href: 'https://api.spotify.com/v1/tracks/3LmiVrJmfxyy4yOfOdnfXZ',
        id: '3LmiVrJmfxyy4yOfOdnfXZ',
        is_local: false,
        is_playable: true,
        name: 'Regard',
        popularity: 36,
        preview_url:
          'https://p.scdn.co/mp3-preview/d28eb8fc979184523febe166ca181341cd48f0ce?cid=7c7de202e4df4600b614ed6890bf4cba',
        track_number: 9,
        type: 'track',
        uri: 'spotify:track:3LmiVrJmfxyy4yOfOdnfXZ',
      },
    },
    {
      added_at: '2020-05-25T20:56:53Z',
      track: {
        album: {
          album_type: 'single',
          artists: [
            {
              external_urls: {
                spotify:
                  'https://open.spotify.com/artist/49fgD6LHJUewc21tGBaOqV',
              },
              href: 'https://api.spotify.com/v1/artists/49fgD6LHJUewc21tGBaOqV',
              id: '49fgD6LHJUewc21tGBaOqV',
              name: 'Vala Capon',
              type: 'artist',
              uri: 'spotify:artist:49fgD6LHJUewc21tGBaOqV',
            },
          ],
          external_urls: {
            spotify: 'https://open.spotify.com/album/5WED43tdqslgKrB6s3fA8I',
          },
          href: 'https://api.spotify.com/v1/albums/5WED43tdqslgKrB6s3fA8I',
          id: '5WED43tdqslgKrB6s3fA8I',
          images: [
            {
              height: 640,
              url:
                'https://i.scdn.co/image/ab67616d0000b273dbdb2352776ab598b57d0221',
              width: 640,
            },
            {
              height: 300,
              url:
                'https://i.scdn.co/image/ab67616d00001e02dbdb2352776ab598b57d0221',
              width: 300,
            },
            {
              height: 64,
              url:
                'https://i.scdn.co/image/ab67616d00004851dbdb2352776ab598b57d0221',
              width: 64,
            },
          ],
          name: 'Quando sorridi',
          release_date: '2019-03-31',
          release_date_precision: 'day',
          total_tracks: 1,
          type: 'album',
          uri: 'spotify:album:5WED43tdqslgKrB6s3fA8I',
        },
        artists: [
          {
            external_urls: {
              spotify: 'https://open.spotify.com/artist/49fgD6LHJUewc21tGBaOqV',
            },
            href: 'https://api.spotify.com/v1/artists/49fgD6LHJUewc21tGBaOqV',
            id: '49fgD6LHJUewc21tGBaOqV',
            name: 'Vala Capon',
            type: 'artist',
            uri: 'spotify:artist:49fgD6LHJUewc21tGBaOqV',
          },
        ],
        disc_number: 1,
        duration_ms: 123000,
        explicit: false,
        external_ids: {
          isrc: 'SE5W31906501',
        },
        external_urls: {
          spotify: 'https://open.spotify.com/track/4tJLqa4zHZmoBrkdZu2IFY',
        },
        href: 'https://api.spotify.com/v1/tracks/4tJLqa4zHZmoBrkdZu2IFY',
        id: '4tJLqa4zHZmoBrkdZu2IFY',
        is_local: false,
        is_playable: true,
        name: 'Quando sorridi',
        popularity: 59,
        preview_url:
          'https://p.scdn.co/mp3-preview/8b4a42bffd6dd8053e2ddb357f693493cae5d240?cid=7c7de202e4df4600b614ed6890bf4cba',
        track_number: 1,
        type: 'track',
        uri: 'spotify:track:4tJLqa4zHZmoBrkdZu2IFY',
      },
    },
    {
      added_at: '2020-05-22T12:31:13Z',
      track: {
        album: {
          album_type: 'album',
          artists: [
            {
              external_urls: {
                spotify:
                  'https://open.spotify.com/artist/6VsU92soWFLtVsSP65rkrN',
              },
              href: 'https://api.spotify.com/v1/artists/6VsU92soWFLtVsSP65rkrN',
              id: '6VsU92soWFLtVsSP65rkrN',
              name: 'The Faim',
              type: 'artist',
              uri: 'spotify:artist:6VsU92soWFLtVsSP65rkrN',
            },
          ],
          external_urls: {
            spotify: 'https://open.spotify.com/album/0C8bAFI1POhzztBVShuzll',
          },
          href: 'https://api.spotify.com/v1/albums/0C8bAFI1POhzztBVShuzll',
          id: '0C8bAFI1POhzztBVShuzll',
          images: [
            {
              height: 640,
              url:
                'https://i.scdn.co/image/ab67616d0000b273ebf856ce6c34800888cc382c',
              width: 640,
            },
            {
              height: 300,
              url:
                'https://i.scdn.co/image/ab67616d00001e02ebf856ce6c34800888cc382c',
              width: 300,
            },
            {
              height: 64,
              url:
                'https://i.scdn.co/image/ab67616d00004851ebf856ce6c34800888cc382c',
              width: 64,
            },
          ],
          name: 'State of Mind',
          release_date: '2019-09-13',
          release_date_precision: 'day',
          total_tracks: 10,
          type: 'album',
          uri: 'spotify:album:0C8bAFI1POhzztBVShuzll',
        },
        artists: [
          {
            external_urls: {
              spotify: 'https://open.spotify.com/artist/6VsU92soWFLtVsSP65rkrN',
            },
            href: 'https://api.spotify.com/v1/artists/6VsU92soWFLtVsSP65rkrN',
            id: '6VsU92soWFLtVsSP65rkrN',
            name: 'The Faim',
            type: 'artist',
            uri: 'spotify:artist:6VsU92soWFLtVsSP65rkrN',
          },
        ],
        disc_number: 1,
        duration_ms: 181216,
        explicit: false,
        external_ids: {
          isrc: 'QMRSZ1800686',
        },
        external_urls: {
          spotify: 'https://open.spotify.com/track/5WzgYEfub2pFJAAZfrOult',
        },
        href: 'https://api.spotify.com/v1/tracks/5WzgYEfub2pFJAAZfrOult',
        id: '5WzgYEfub2pFJAAZfrOult',
        is_local: false,
        is_playable: true,
        name: 'Summer Is a Curse',
        popularity: 55,
        preview_url:
          'https://p.scdn.co/mp3-preview/9362178f7985e3430aecab91583fd5f853243ddc?cid=7c7de202e4df4600b614ed6890bf4cba',
        track_number: 3,
        type: 'track',
        uri: 'spotify:track:5WzgYEfub2pFJAAZfrOult',
      },
    },
    {
      added_at: '2020-05-13T18:17:34Z',
      track: {
        album: {
          album_type: 'single',
          artists: [
            {
              external_urls: {
                spotify:
                  'https://open.spotify.com/artist/77IW5ZK1smDQYYKDCQugXh',
              },
              href: 'https://api.spotify.com/v1/artists/77IW5ZK1smDQYYKDCQugXh',
              id: '77IW5ZK1smDQYYKDCQugXh',
              name: 'Suzan & Freek',
              type: 'artist',
              uri: 'spotify:artist:77IW5ZK1smDQYYKDCQugXh',
            },
          ],
          external_urls: {
            spotify: 'https://open.spotify.com/album/4R7RjbcoLWdZBdNlNB53ZS',
          },
          href: 'https://api.spotify.com/v1/albums/4R7RjbcoLWdZBdNlNB53ZS',
          id: '4R7RjbcoLWdZBdNlNB53ZS',
          images: [
            {
              height: 640,
              url:
                'https://i.scdn.co/image/ab67616d0000b27304d1dc1c07ae253dc56dd1cd',
              width: 640,
            },
            {
              height: 300,
              url:
                'https://i.scdn.co/image/ab67616d00001e0204d1dc1c07ae253dc56dd1cd',
              width: 300,
            },
            {
              height: 64,
              url:
                'https://i.scdn.co/image/ab67616d0000485104d1dc1c07ae253dc56dd1cd',
              width: 64,
            },
          ],
          name: 'Weg Van Jou',
          release_date: '2020-05-01',
          release_date_precision: 'day',
          total_tracks: 2,
          type: 'album',
          uri: 'spotify:album:4R7RjbcoLWdZBdNlNB53ZS',
        },
        artists: [
          {
            external_urls: {
              spotify: 'https://open.spotify.com/artist/77IW5ZK1smDQYYKDCQugXh',
            },
            href: 'https://api.spotify.com/v1/artists/77IW5ZK1smDQYYKDCQugXh',
            id: '77IW5ZK1smDQYYKDCQugXh',
            name: 'Suzan & Freek',
            type: 'artist',
            uri: 'spotify:artist:77IW5ZK1smDQYYKDCQugXh',
          },
        ],
        disc_number: 1,
        duration_ms: 146471,
        explicit: false,
        external_ids: {
          isrc: 'NL1CK2000001',
        },
        external_urls: {
          spotify: 'https://open.spotify.com/track/33wHYQYh10c3XmaAtGkTEn',
        },
        href: 'https://api.spotify.com/v1/tracks/33wHYQYh10c3XmaAtGkTEn',
        id: '33wHYQYh10c3XmaAtGkTEn',
        is_local: false,
        is_playable: true,
        name: 'Weg Van Jou',
        popularity: 67,
        preview_url:
          'https://p.scdn.co/mp3-preview/db3e39fbf1723d43e6b836cfa033b2b0f69ec374?cid=7c7de202e4df4600b614ed6890bf4cba',
        track_number: 1,
        type: 'track',
        uri: 'spotify:track:33wHYQYh10c3XmaAtGkTEn',
      },
    },
    {
      added_at: '2020-04-09T12:54:51Z',
      track: {
        album: {
          album_type: 'single',
          artists: [
            {
              external_urls: {
                spotify:
                  'https://open.spotify.com/artist/6Rq2lxtwkG1JwIg2d26IUa',
              },
              href: 'https://api.spotify.com/v1/artists/6Rq2lxtwkG1JwIg2d26IUa',
              id: '6Rq2lxtwkG1JwIg2d26IUa',
              name: 'Túlio Dek',
              type: 'artist',
              uri: 'spotify:artist:6Rq2lxtwkG1JwIg2d26IUa',
            },
            {
              external_urls: {
                spotify:
                  'https://open.spotify.com/artist/2aimTInXI8IgnUeEwu25mB',
              },
              href: 'https://api.spotify.com/v1/artists/2aimTInXI8IgnUeEwu25mB',
              id: '2aimTInXI8IgnUeEwu25mB',
              name: 'Di Ferrero',
              type: 'artist',
              uri: 'spotify:artist:2aimTInXI8IgnUeEwu25mB',
            },
          ],
          external_urls: {
            spotify: 'https://open.spotify.com/album/5H6BNAR0WF54OAr9wA1gOD',
          },
          href: 'https://api.spotify.com/v1/albums/5H6BNAR0WF54OAr9wA1gOD',
          id: '5H6BNAR0WF54OAr9wA1gOD',
          images: [
            {
              height: 640,
              url:
                'https://i.scdn.co/image/ab67616d0000b273a207acedbc7c82ab2f62c184',
              width: 640,
            },
            {
              height: 300,
              url:
                'https://i.scdn.co/image/ab67616d00001e02a207acedbc7c82ab2f62c184',
              width: 300,
            },
            {
              height: 64,
              url:
                'https://i.scdn.co/image/ab67616d00004851a207acedbc7c82ab2f62c184',
              width: 64,
            },
          ],
          name: 'Tudo Passa',
          release_date: '2008-01-02',
          release_date_precision: 'day',
          total_tracks: 1,
          type: 'album',
          uri: 'spotify:album:5H6BNAR0WF54OAr9wA1gOD',
        },
        artists: [
          {
            external_urls: {
              spotify: 'https://open.spotify.com/artist/6Rq2lxtwkG1JwIg2d26IUa',
            },
            href: 'https://api.spotify.com/v1/artists/6Rq2lxtwkG1JwIg2d26IUa',
            id: '6Rq2lxtwkG1JwIg2d26IUa',
            name: 'Túlio Dek',
            type: 'artist',
            uri: 'spotify:artist:6Rq2lxtwkG1JwIg2d26IUa',
          },
          {
            external_urls: {
              spotify: 'https://open.spotify.com/artist/2aimTInXI8IgnUeEwu25mB',
            },
            href: 'https://api.spotify.com/v1/artists/2aimTInXI8IgnUeEwu25mB',
            id: '2aimTInXI8IgnUeEwu25mB',
            name: 'Di Ferrero',
            type: 'artist',
            uri: 'spotify:artist:2aimTInXI8IgnUeEwu25mB',
          },
        ],
        disc_number: 1,
        duration_ms: 216133,
        explicit: false,
        external_ids: {
          isrc: 'BRMSU0800155',
        },
        external_urls: {
          spotify: 'https://open.spotify.com/track/4fTnYA69gGdaLjkfcKPjY4',
        },
        href: 'https://api.spotify.com/v1/tracks/4fTnYA69gGdaLjkfcKPjY4',
        id: '4fTnYA69gGdaLjkfcKPjY4',
        is_local: false,
        is_playable: true,
        name: 'Tudo Passa',
        popularity: 42,
        preview_url:
          'https://p.scdn.co/mp3-preview/78aa9b77aac60e700f2d509be4a6974ef685ece4?cid=7c7de202e4df4600b614ed6890bf4cba',
        track_number: 1,
        type: 'track',
        uri: 'spotify:track:4fTnYA69gGdaLjkfcKPjY4',
      },
    },
    {
      added_at: '2020-03-27T14:45:10Z',
      track: {
        album: {
          album_type: 'single',
          artists: [
            {
              external_urls: {
                spotify:
                  'https://open.spotify.com/artist/4M5Z3s7BTxyZuifI4YWp6v',
              },
              href: 'https://api.spotify.com/v1/artists/4M5Z3s7BTxyZuifI4YWp6v',
              id: '4M5Z3s7BTxyZuifI4YWp6v',
              name: 'Julyan Brynn',
              type: 'artist',
              uri: 'spotify:artist:4M5Z3s7BTxyZuifI4YWp6v',
            },
          ],
          external_urls: {
            spotify: 'https://open.spotify.com/album/5EoiOmTiADBanOUgtYbWSg',
          },
          href: 'https://api.spotify.com/v1/albums/5EoiOmTiADBanOUgtYbWSg',
          id: '5EoiOmTiADBanOUgtYbWSg',
          images: [
            {
              height: 640,
              url:
                'https://i.scdn.co/image/ab67616d0000b273efcba5d5fb99465a1d1c0ac0',
              width: 640,
            },
            {
              height: 300,
              url:
                'https://i.scdn.co/image/ab67616d00001e02efcba5d5fb99465a1d1c0ac0',
              width: 300,
            },
            {
              height: 64,
              url:
                'https://i.scdn.co/image/ab67616d00004851efcba5d5fb99465a1d1c0ac0',
              width: 64,
            },
          ],
          name: 'Floating Hearts',
          release_date: '2017-03-29',
          release_date_precision: 'day',
          total_tracks: 3,
          type: 'album',
          uri: 'spotify:album:5EoiOmTiADBanOUgtYbWSg',
        },
        artists: [
          {
            external_urls: {
              spotify: 'https://open.spotify.com/artist/4M5Z3s7BTxyZuifI4YWp6v',
            },
            href: 'https://api.spotify.com/v1/artists/4M5Z3s7BTxyZuifI4YWp6v',
            id: '4M5Z3s7BTxyZuifI4YWp6v',
            name: 'Julyan Brynn',
            type: 'artist',
            uri: 'spotify:artist:4M5Z3s7BTxyZuifI4YWp6v',
          },
        ],
        disc_number: 1,
        duration_ms: 199831,
        explicit: false,
        external_ids: {
          isrc: 'SE5Q51700908',
        },
        external_urls: {
          spotify: 'https://open.spotify.com/track/4JfiZjxURRSroTqETjK2za',
        },
        href: 'https://api.spotify.com/v1/tracks/4JfiZjxURRSroTqETjK2za',
        id: '4JfiZjxURRSroTqETjK2za',
        is_local: false,
        is_playable: true,
        linked_from: {
          external_urls: {
            spotify: 'https://open.spotify.com/track/6vc1ie7orjBJYeJVR4yh8r',
          },
          href: 'https://api.spotify.com/v1/tracks/6vc1ie7orjBJYeJVR4yh8r',
          id: '6vc1ie7orjBJYeJVR4yh8r',
          type: 'track',
          uri: 'spotify:track:6vc1ie7orjBJYeJVR4yh8r',
        },
        name: 'Svalbard',
        popularity: 52,
        preview_url:
          'https://p.scdn.co/mp3-preview/493a473743cf42faccb134feb11385fa86b684a6?cid=7c7de202e4df4600b614ed6890bf4cba',
        track_number: 2,
        type: 'track',
        uri: 'spotify:track:4JfiZjxURRSroTqETjK2za',
      },
    },
    {
      added_at: '2020-03-27T09:44:15Z',
      track: {
        album: {
          album_type: 'album',
          artists: [
            {
              external_urls: {
                spotify:
                  'https://open.spotify.com/artist/6eUKZXaKkcviH0Ku9w2n3V',
              },
              href: 'https://api.spotify.com/v1/artists/6eUKZXaKkcviH0Ku9w2n3V',
              id: '6eUKZXaKkcviH0Ku9w2n3V',
              name: 'Ed Sheeran',
              type: 'artist',
              uri: 'spotify:artist:6eUKZXaKkcviH0Ku9w2n3V',
            },
          ],
          external_urls: {
            spotify: 'https://open.spotify.com/album/3oIFxDIo2fwuk4lwCmFZCx',
          },
          href: 'https://api.spotify.com/v1/albums/3oIFxDIo2fwuk4lwCmFZCx',
          id: '3oIFxDIo2fwuk4lwCmFZCx',
          images: [
            {
              height: 640,
              url:
                'https://i.scdn.co/image/ab67616d0000b27373304ce0653c7758dd94b259',
              width: 640,
            },
            {
              height: 300,
              url:
                'https://i.scdn.co/image/ab67616d00001e0273304ce0653c7758dd94b259',
              width: 300,
            },
            {
              height: 64,
              url:
                'https://i.scdn.co/image/ab67616d0000485173304ce0653c7758dd94b259',
              width: 64,
            },
          ],
          name: 'No.6 Collaborations Project',
          release_date: '2019-07-12',
          release_date_precision: 'day',
          total_tracks: 15,
          type: 'album',
          uri: 'spotify:album:3oIFxDIo2fwuk4lwCmFZCx',
        },
        artists: [
          {
            external_urls: {
              spotify: 'https://open.spotify.com/artist/6eUKZXaKkcviH0Ku9w2n3V',
            },
            href: 'https://api.spotify.com/v1/artists/6eUKZXaKkcviH0Ku9w2n3V',
            id: '6eUKZXaKkcviH0Ku9w2n3V',
            name: 'Ed Sheeran',
            type: 'artist',
            uri: 'spotify:artist:6eUKZXaKkcviH0Ku9w2n3V',
          },
          {
            external_urls: {
              spotify: 'https://open.spotify.com/artist/4nDoRrQiYLoBzwC5BhVJzF',
            },
            href: 'https://api.spotify.com/v1/artists/4nDoRrQiYLoBzwC5BhVJzF',
            id: '4nDoRrQiYLoBzwC5BhVJzF',
            name: 'Camila Cabello',
            type: 'artist',
            uri: 'spotify:artist:4nDoRrQiYLoBzwC5BhVJzF',
          },
          {
            external_urls: {
              spotify: 'https://open.spotify.com/artist/4kYSro6naA4h99UJvo89HB',
            },
            href: 'https://api.spotify.com/v1/artists/4kYSro6naA4h99UJvo89HB',
            id: '4kYSro6naA4h99UJvo89HB',
            name: 'Cardi B',
            type: 'artist',
            uri: 'spotify:artist:4kYSro6naA4h99UJvo89HB',
          },
        ],
        disc_number: 1,
        duration_ms: 204466,
        explicit: false,
        external_ids: {
          isrc: 'GBAHS1900714',
        },
        external_urls: {
          spotify: 'https://open.spotify.com/track/4vUmTMuQqjdnvlZmAH61Qk',
        },
        href: 'https://api.spotify.com/v1/tracks/4vUmTMuQqjdnvlZmAH61Qk',
        id: '4vUmTMuQqjdnvlZmAH61Qk',
        is_local: false,
        is_playable: true,
        name: 'South of the Border (feat. Camila Cabello & Cardi B)',
        popularity: 82,
        preview_url:
          'https://p.scdn.co/mp3-preview/686f1dc5c92030c8e4b48f94098386a89df4b06d?cid=7c7de202e4df4600b614ed6890bf4cba',
        track_number: 2,
        type: 'track',
        uri: 'spotify:track:4vUmTMuQqjdnvlZmAH61Qk',
      },
    },
  ],
  limit: 20,
  next: 'https://api.spotify.com/v1/me/tracks?offset=20&limit=20&market=br',
  offset: 0,
  previous: null,
  total: 105,
};

export const getFavoriteList = async () => {
  const response = await makeRequest(GET_FAVORITES_TRACKS_URL);
  if (response.status !== 200) {
    console.log('error');
  }

  return favoriteListAdapter(response.data);
};
