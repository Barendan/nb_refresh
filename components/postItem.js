// import Link from 'next/link';
import { useRouter } from 'next/navigation';
import { Card } from 'semantic-ui-react';
// import classes from './post-item.module.css';


const PostItem = (props) => {
  const { _id, title, createdAt, body, status } = props.post;
  const router = useRouter();
  const linkPath = `/${ _id }`;

  return (
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
  )
}

export default PostItem