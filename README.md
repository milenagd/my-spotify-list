# my-spotify-list

The goal of this project is to show some list of interactions of an user with his/her spotify account.
This project contains information about:

- User profile
- List of favorite songs
- List of playlists
- List of the Top 10 songs in the user's country

## Getting started

### Requirements

First of all, be sure that you have [Node](https://nodejs.org/en/) installed in your machine.

In order to run this project, you will also need a [Spotify](https://www.spotify.com/) account. Be sure you had some few interactions, creating some playlists and adding some tracks to favorite list).

### Make it run

1. Go to https://any-api.com/spotify_com/spotify_com/console
2. Click on the lock logo next to “Console”
3. Select all checkboxes and click on “Authorize”
4. Copy the access token generated on step 3
5. Create a file called `.env` into the root of the project and add the access token to the variable called `API_TOKEN` (check the `.env-example` file in order to reproduce the content of .env)
6. Run

```sh
npm install
npm start
```

You should see the application running at http://localhost:8080
