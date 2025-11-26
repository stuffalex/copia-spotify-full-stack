const { MongoClient } = require('mongodb');

const MONGODB_URI = process.env.MONGODB_URI || 'mongodb+srv://alexyavianaa:VhyGwQ4TvVNweXPQ@cluster0.m6cyi.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0';
const DB_NAME = process.env.MONGODB_DB || 'spotifyAula';

let cachedClient = global._mongoClient;

if (!cachedClient) {
  cachedClient = new MongoClient(MONGODB_URI);
  global._mongoClient = cachedClient;
}

module.exports = async function (req, res) {
  if (req.method !== 'GET') {
    res.setHeader('Allow', 'GET');
    return res.status(405).json({ error: 'Method Not Allowed' });
  }

  try {
    await cachedClient.connect();
    const db = cachedClient.db(DB_NAME);
    const artists = await db.collection('artists').find({}).toArray();
    return res.status(200).json(artists);
  } catch (err) {
    console.error('artists function error:', err);
    return res.status(500).json({ error: 'Internal Server Error' });
  }
};
