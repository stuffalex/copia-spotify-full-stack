//Fetch ou Axios
import axios from "axios";

const URL = typeof window !== 'undefined' && window.location.hostname === 'localhost' 
  ? "http://localhost:3000/api" 
  : "/api";

const responseArtists = await axios.get(`${URL}/artists`);
const responseSongs = await axios.get(`${URL}/songs`);

export const artistsArray = responseArtists.data;
export const songsArray = responseSongs.data;
