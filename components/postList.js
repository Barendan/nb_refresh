import { useState } from 'react';
import Link from 'next/link';
import { Card } from 'semantic-ui-react';

const PostList = ({ posts }) => {
  const [ sort, setSort ] = useState(false)
  
  const postCopy = posts?.map( item => { 
    return {...item, createdAt: new Date(item.createdAt)} 
  });

  const sortedPosts = sort ? 
    postCopy.sort((a, b) => Number(a.createdAt) - Number(b.createdAt))
  : postCopy.sort((a, b) => Number(b.createdAt) - Number(a.createdAt))

  if (posts) return (
    <Card.Group>

      { sortedPosts.map( post => {
        let postPath = `/blogs/${post._id}`;

        console.log("id", postPath)

        return true ? (
          // <Link href={postPath} legacyBehavior>
          <Link href={{ pathname: '/blogs/[postSlug]', query: { postSlug: post._id } }} as={postPath}>
            {/* <a> */}

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
          {/* </a> */}
          </Link>
        ) : post.status && (
          <Link href={postPath} legacyBehavior>
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
          </Link>
        )
      })}
      
    </Card.Group>
  )
};

export default PostList;