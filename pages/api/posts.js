import { MongoClient } from 'mongodb';


const PostsHandler = async (req, res) => {
  let client;
  try {
    client = await MongoClient.connect("mongodb+srv://user238:twogrape@cluster0.mbphrki.mongodb.net/?retryWrites=true&w=majority");
  } 
  catch (err) {
    res.status(500).json({ message: 'Could not connect to database.' })
    console.log('no connection possible:', err)
    return;
  }
  const db = client.db("test");


  if (req.method === 'GET') {
    try {
      const result = await db
      .collection('posts')
      .find()
      .sort()
      .toArray();

      // console.log('api result:', result)
      res.status(201).json({ message: 'Success!', posts: result })
    } 
    catch (err) {
      res.status(500).json({ message: 'Accessing posts failed!' })
      console.log('err',err)
      return;
    }
  }

  if (req.method === 'POST') {
    const { title, body, status, createdAt } = req.body;
    const newPost = { title, body, status, createdAt }

    // Add messages into DB collection
    try {
      const result = await db.collection('posts').insertOne(newPost);
      newPost.id = result.insertedId;
    } 
    catch (err) {
      res.status(500).json({ message: 'Storing post failed!' })
      return;
    }

    client.close();
    res.status(201).json({ message: 'Succesfully stored post!', message: newPost })
  }

}

export default PostsHandler;