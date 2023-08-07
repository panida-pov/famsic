const client_id = "14929e4a509244d7b1513f92ff42cdbf";
const redirect_uri = 'http://localhost:3000/';
let accessToken;
let expiresIn;

export const Spotify = {
  getAccessToken() {
    try {
      if (accessToken) {
        return accessToken;
      }
  
      let accessUrl = 'https://accounts.spotify.com/authorize';
      accessUrl += '?response_type=token';
      accessUrl += '&client_id=' + client_id;
      accessUrl += '&scope=' + 'playlist-modify-public';
      accessUrl += '&redirect_uri=' + redirect_uri;
    
      const accessTokenMatch = window.location.href.match(/access_token=([^&]*)/);
      const expiresInMatch = window.location.href.match(/expires_in=([0-9]*)/);
  
      if (accessTokenMatch && expiresInMatch) {
        accessToken = accessTokenMatch[1];
        expiresIn = Number(expiresInMatch[1]);
        window.setTimeout(() => accessToken = '', expiresIn*1000);
        window.history.pushState('Access Token', null, '/');
        return accessToken;
      } else {
        window.location = accessUrl;
      }
    } catch (error) {
      console.log(error);
    }
  }, 
  
  search(word) {
    const token = Spotify.getAccessToken();
    const endpoint = `https://api.spotify.com/v1/search?q=${word}&type=track&limit=15`;

    return fetch(endpoint, {
      headers: {
        Authorization: `Bearer ${token}`
      }
    })
    .then(response => {
      if(response.ok) {
        return response.json();
      }
    }, error => console.log(error))
    .then(jsonResponse => {
      if(jsonResponse) {
        return jsonResponse.tracks.items.map(item => ({
          name: item.name,
          artist: item.artists[0].name,
          album: item.album.name,
          uri: item.uri,
          id: item.id
        }))
      }
      return [];
    })
  },

  createPlaylist(name, uris)  {
    try {
      const token = Spotify.getAccessToken();
      const headers = {
        Authorization: `Bearer ${token}`
      }

      return fetch("https://api.spotify.com/v1/me?id", {
        headers: headers
      })
      .then(response => {
        if(response.ok) {
          return response.json();
        }
      })
      .then(jsonResponse => {
        return fetch(`https://api.spotify.com/v1/users/${jsonResponse.id}/playlists`, {
          headers: headers,
          method: 'POST',
          body: JSON.stringify({
            name: name
          })
        })
      })
      .then(response => {
        if(response.ok) {
          return response.json();
        }
      })
      .then(jsonResponse => {
        return fetch(`https://api.spotify.com/v1/playlists/${jsonResponse.id}/tracks`, {
          headers: headers,
          method: 'POST',
          body: JSON.stringify({
            uris: uris
          })
        })
        .then(response => {
          console.log(response);
        });
      });
    } catch(error) {
      console.log(error);
    }
  },

  getPlaylists() {
    try {
      const token = Spotify.getAccessToken();
      const headers = {
        Authorization: `Bearer ${token}`
      }

      return fetch("https://api.spotify.com/v1/me/playlists", {
        headers: headers
      })
      .then(response => {
        if(response.ok) {
          return response.json();
        }
      }, error => console.log(error))
      .then(jsonResponse => {
        if(jsonResponse) {
          return jsonResponse.items.map(item => ({
              name: item.name,
              image: item.images[0].url
            }));
        }
        return [];
      });
    } catch(error) {
      console.log(error);
    }
  },

  getPlaylistDetails(id) {
    try {
      const token = Spotify.getAccessToken();
      const headers = {
        Authorization: `Bearer ${token}`
      }

      return fetch(`https://api.spotify.com/v1/playlists/${id}/tracks`, {
        headers: headers
      })
      .then(response => {
        if(response.ok) {
          return response.json();
        }
      }, error => console.log(error))
      .then(jsonResponse => {
        if(jsonResponse) {
          return jsonResponse.items.map(item => ({
              name: track.name,
              artist: track.artists[0].name,
              album: track.album.name
            }));
        }
        return [];
      });
    } catch(error) {
      console.log(error);
    }
  }
};