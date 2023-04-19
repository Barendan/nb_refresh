import { useState } from 'react';
// import { useNavigate } from 'react-router-dom';
import { Card } from 'semantic-ui-react';

const PostList = ({ posts }) => {
  const [ sort, setSort ] = useState(false)
  // const navigate = useNavigate();

  console.log('posts', posts)
  
  const postCopy = posts?.map( item => { 
    return {...item, createdAt: new Date(item.createdAt)} 
  });

  const sortedPosts = sort ? 
    postCopy.sort((a, b) => Number(a.createdAt) - Number(b.createdAt))
  : postCopy.sort((a, b) => Number(b.createdAt) - Number(a.createdAt))

  if (posts) return (
    <Card.Group>

      { sortedPosts.map( post => {
        return true ? (
          <Card
            fluid
            key={post._id}
            // onClick={() => navigate(`/blogs/${post._id}`) }
          >
            <Card.Content className="card-content">
              <Card.Header className="card-header">{post.title}</Card.Header>
              <Card.Meta>{new Date(post.createdAt).toLocaleString()}</Card.Meta>
              <Card.Description className="card-body">`{post.body.slice(0,200)}...`</Card.Description>
            </Card.Content>
          </Card>
        ) : post.status && (
          <Card
            fluid
            key={blog._id}
            onClick={() => navigate(`/blogs/${post._id}`) }
          >
            <Card.Content className="card-content">
              <Card.Header className="card-header">{post.title}</Card.Header>
              <Card.Meta>{new Date(post.createdAt).toLocaleString()}</Card.Meta>
              <Card.Description className="card-body">`{post.body.slice(0,200)}...`</Card.Description>
            </Card.Content>
          </Card>
        )
      })}
      
    </Card.Group>
  )
};

export default PostList;