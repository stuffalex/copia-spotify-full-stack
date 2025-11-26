// Fetch or Axios
import axios from "axios";

const URL = typeof window !== 'undefined' && window.location.hostname === 'localhost'
  ? "http://localhost:3000/api"
  : "/api";

let artistsArray = [];
let songsArray = [];
let apiError = null;

try {
  const responseArtists = await axios.get(`${URL}/artists`);
  const responseSongs = await axios.get(`${URL}/songs`);
  artistsArray = responseArtists.data || [];
  songsArray = responseSongs.data || [];
} catch (err) {
  console.error('Error fetching API data:', err?.response?.data || err.message || err);
  apiError = err?.response?.data || { message: err.message || 'Unknown error' };
}

export { artistsArray, songsArray, apiError };
