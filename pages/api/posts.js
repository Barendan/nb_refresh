import { MongoClient } from 'mongodb';



const PostsHandler = async (req, res) => {
  // Connect to MongoDB with Creds
  let client;
  try {
    client = await MongoClient.connect("mongodb+srv://user238:dreamlast39@cluster0.mbphrki.mongodb.net/test");
  } 
  catch (err) {
    res.status(500).json({ message: 'Could not connect to database.' })
    // console.log('saveeeee', err)
    return;
  }

  const db = client.db("test");

  if (req.method === 'GET') {
    try {
      const result = await db.collection('posts').find({}).toArray();
      console.log('api result', result)
      return result;
    } 
    catch (err) {
      res.status(500).json({ message: 'Accessing posts failed!' })
      console.log('err',err)
      return;
    }
  }

  if (req.method === 'POST') {
    const { email, name, message } = req.body;
    
    if (!email || !email.includes('@') || !name || !name.trim() === '' || !message || message.trim() === '' ) {
      res.status(422).json({ message: 'Invalid input.' });
      return;
    }

    const newMessage = {
      email, name, message
    }

    // Add messages into DB collection
    try {
      const result = await db.collection('messages').insertOne(newMessage);
      newMessage.id = result.insertedId;
    } 
    catch (err) {
      res.status(500).json({ message: 'Storing message failed!' })
      return;
    }

    client.close();
    res.status(201).json({ message: 'Succesfully stored message!', message: newMessage })
  }


}

export default PostsHandler;