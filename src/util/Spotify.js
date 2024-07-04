const client_id = "14929e4a509244d7b1513f92ff42cdbf";
const domain = process.env.REACT_APP_DOMAIN || "http://localhost:3000/";
let accessToken;
let expiresIn;

export const Spotify = {
  requestToken() {
    window.location = `https://accounts.spotify.com/authorize?response_type=token&client_id=${client_id}&scope=playlist-modify-public&redirect_uri=${domain}`;
  },

  getAccessToken() {
    if (accessToken) {
      return accessToken;
    }
    const accessTokenMatch = window.location.href.match(/access_token=([^&]*)/);
    const expiresInMatch = window.location.href.match(/expires_in=([0-9]*)/);
    if (accessTokenMatch && expiresInMatch) {
      accessToken = accessTokenMatch[1];
      expiresIn = Number(expiresInMatch[1]);
      window.setTimeout(() => (accessToken = ""), expiresIn * 1000);
      window.history.pushState("Access Token", null, "/");
      return accessToken;
    } else {
      window.location = `${domain}sign-in`;
    }
  },

  async search(word) {
    try {
      const headers = { Authorization: `Bearer ${Spotify.getAccessToken()}` };
      const endpoint = `https://api.spotify.com/v1/search?q=${word}&type=track&limit=15`;
      const response = await fetch(endpoint, { headers: headers });
      const jsonResponse = await response.json();
      if (jsonResponse) {
        return jsonResponse.tracks.items.map((item) => ({
          name: item.name,
          artist: item.artists[0].name,
          album: item.album.name,
          uri: item.uri,
          id: item.id,
        }));
      }
      return [];
    } catch (err) {
      console.log(err);
    }
  },

  async createPlaylist(name, uris) {
    try {
      const headers = { Authorization: `Bearer ${Spotify.getAccessToken()}` };
      const resUser = await fetch("https://api.spotify.com/v1/me?id", {
        headers: headers,
      });
      const jsonUser = await resUser.json();
      const userId = jsonUser.id;

      const resPlaylist = await fetch(
        `https://api.spotify.com/v1/users/${userId}/playlists`,
        {
          headers: headers,
          method: "POST",
          body: JSON.stringify({
            name: name,
          }),
        }
      );
      const jsonPlaylist = await resPlaylist.json();
      const playlistId = jsonPlaylist.id;
      const resAddTracks = await fetch(
        `https://api.spotify.com/v1/playlists/${playlistId}/tracks`,
        {
          headers: headers,
          method: "POST",
          body: JSON.stringify({
            uris: uris,
          }),
        }
      );
      return await resAddTracks.json();
    } catch (error) {
      console.log(error);
    }
  },

  async getPlaylists() {
    try {
      const headers = { Authorization: `Bearer ${Spotify.getAccessToken()}` };
      const response = await fetch("https://api.spotify.com/v1/me/playlists", {
        headers: headers,
      });

      if (response.status === 403) {
        alert("Sorry, but you do not have access to famsic!");
        window.location = `${domain}sign-in`;
      }

      const jsonResponse = await response.json();
      if (jsonResponse) {
        return jsonResponse.items?.map((item) => ({
          name: item.name,
          image: item.images
            ? item.images[0].url
            : `${process.env.PUBLIC_URL}img/album.png`,
          id: item.id,
        }));
      }
      return [];
    } catch (error) {
      console.log(error);
    }
  },

  async getPlaylistDetails(id) {
    try {
      const headers = { Authorization: `Bearer ${Spotify.getAccessToken()}` };
      const response = await fetch(
        `https://api.spotify.com/v1/playlists/${id}/tracks?limit=20&fields=items.track(name, album.name, artists.name)`,
        { headers: headers }
      );
      const jsonResponse = await response.json();
      if (jsonResponse) {
        return jsonResponse.items.map((item) => ({
          name: item.track.name,
          artist: item.track.artists[0].name,
          album: item.track.album.name,
        }));
      }
      return [];
    } catch (error) {
      console.log(error);
    }
  },
};
