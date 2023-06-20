import { useState } from 'react';
import { Card } from 'semantic-ui-react';
import PostItem from './postItem';

// import { connectDatabase, getAllDocuments } from '../pages/api/api-util';

const PostList = ({ posts }) => {
  const [ sort, setSort ] = useState(false);

  const postCopy = posts?.map( item => { 
    return {...item, createdAt: new Date(item.createdAt)} 
  });

  const sortedPosts = sort ? 
    postCopy.sort((a, b) => Number(a.createdAt) - Number(b.createdAt))
  : postCopy.sort((a, b) => Number(b.createdAt) - Number(a.createdAt))

  if (posts) return (
    <Card.Group>
      { sortedPosts.map( post => {
        return <PostItem post={post} key={post._id.$oid}/>
      })}
    </Card.Group>
  )
};

export default PostList;