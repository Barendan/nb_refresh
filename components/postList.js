import { useState } from 'react';
import { Card } from 'semantic-ui-react';
import PostItem from './postItem';


const PostList = ({ posts, user }) => {
  const [ sort, setSort ] = useState(false);

  // console.log('*********************')
  // console.log('*********************')
  // console.log('*********************')
  // console.log('postlist props:',posts)

  const postCopy = posts?.map( item => { 
    return {...item, createdAt: new Date(item.createdAt)} 
  });

  const sortedPosts = sort ? 
    postCopy.sort((a, b) => Number(a.createdAt) - Number(b.createdAt))
  : postCopy.sort((a, b) => Number(b.createdAt) - Number(a.createdAt))

  if (posts) return (
    <Card.Group>
      { sortedPosts.map( post => {
        return user ? <PostItem post={post} key={post._id}/> : (
          post.status && <PostItem post={post} key={post._id}/>
        )
        // console.log('posty returns:', post)
        // return post.status && <PostItem post={post} key={post._id}/>
      })}
    </Card.Group>
  )
};

export default PostList;