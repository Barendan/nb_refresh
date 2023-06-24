import { ObjectId } from 'mongodb';
import { ConnectDatabase } from './posts';

export default async function getPostHandler(req, res) {
  const db = await ConnectDatabase();
  const posts = await db
    .collection('posts')
    .find()
    .toArray();

  const { postid } = req.query;
  const post = posts.find( (post) => post._id.toString() === postid );

  if ( req.method === 'GET' ) {
    res.status(200).json(post);
  } else if ( req.method === 'DELETE' ) {
    await db.collection('posts').deleteOne( { _id: new ObjectId(postid) } )
    res.status(200).json(post);
  } else if ( req.method === 'PUT') {
    const { id, title, body, status, ...rest } = req.body;  
    await db.collection('posts').updateOne( { _id: new ObjectId(postid) }, {
       $set: { id, title, body, status }
    });

    // console.log('put it down', id, title)
    res.status(200).json();
  }
}

