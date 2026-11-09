import { MongoClient } from 'mongodb';

const uri = process.env.MONGODB_URI;
const dbName = process.env.MONGODB_DB_NAME;

if (!uri) {
  throw new Error('Missing MONGODB_URI environment variable');
}

if (!dbName) {
  throw new Error('Missing MONGODB_DB_NAME environment variable');
}

let clientPromise;

if (!global._mongoClientPromise) {
  const client = new MongoClient(uri);
  global._mongoClientPromise = client.connect();
}

clientPromise = global._mongoClientPromise;

export default async function getDatabase() {
  const connectedClient = await clientPromise;
  return connectedClient.db(dbName);
}