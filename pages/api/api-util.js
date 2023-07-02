import { MongoClient } from 'mongodb';


async function connectDatabase() {
  const uri = process.env.local.MONGODB_URI;
  const client = await MongoClient.connect(uri);

  return client;
}

export async function getAllPosts() {
  const client = await connectDatabase();
  const db = client.db();
  
  const documents = await db
    .collection('posts')
    .find()
    .sort()
    .toArray();

  const standardizedPosts = documents && documents.map((post) => {
    return { ...post, _id: post._id.toString() }
  })

  return standardizedPosts;
}

export async function getPostById(id) {
  const allPosts = await getAllPosts();
  return allPosts.find((post) => post._id === id);
}

export async function createPost({ title, body, status, createdAt }) {
  const client = await connectDatabase();
  const db = client.db();

  const result = await db.collection('posts').insertOne({ title, body, status, createdAt })

  return result
}