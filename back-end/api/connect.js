import { MongoClient } from 'mongodb';

const URI = process.env.MONGODB_URI;
if (!URI) {
	throw new Error('MONGODB_URI environment variable is not defined. Set it in your environment or in Vercel project settings.');
}

const client = new MongoClient(URI);

export const db = client.db(process.env.MONGODB_DB || 'spotifyAula');
// const songCollection = await db.collection('songs').find({}).toArray();

// console.log(songCollection);