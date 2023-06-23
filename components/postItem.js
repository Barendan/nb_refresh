import { useRouter } from 'next/navigation';
import { Card, Button } from 'semantic-ui-react';
// import classes from './post-item.module.css';


const PostItem = (props) => {
  const { _id, title, createdAt, body, status } = props.post;
  const router = useRouter();
  const linkPath = `/${ _id }`;

  const deletePost = async (postId) => {
    const response = await fetch(`/api/${postId}`, {
      method: 'DELETE',
    });
    // const data = await response.json();
    // console.log('deleted and what:', data)
    // refetch posts after a delete
  }

  // console.log('show da item baus:', _id, body)

  return (
    <>
    <Card 
      fluid
      onClick={() => router.push(linkPath)}
    >
      <Card.Content className="card-content">
        <Card.Header className="card-header">{title}</Card.Header>
        <Card.Meta>{new Date(createdAt).toLocaleString()}</Card.Meta>
        <Card.Description className="card-body">`{body.slice(0,200)}...`</Card.Description>
      </Card.Content>
      </Card>

      <Button size="huge" color="red" onClick={() => deletePost(_id)}> 
        Delete
      </Button>
    </>
  )
}

export default PostItem