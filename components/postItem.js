import Link from 'next/link';
import { Card } from 'semantic-ui-react';
// import classes from './post-item.module.css';

const PostItem = (props) => {
  const { title, createdAt, body, _id } = props.post;
  const postSlug = _id.$oid;
  
  const linkPath = `/posts/${postSlug}`;
  // console.log('props:', _id.$oid)

  return (
    <Link href={linkPath}>
      <Card fluid>
        <Card.Content className="card-content">
          <Card.Header className="card-header">{title}</Card.Header>
          <Card.Meta>{new Date(createdAt).toLocaleString()}</Card.Meta>
          <Card.Description className="card-body">`{body.slice(0,200)}...`</Card.Description>
        </Card.Content>

      </Card>
    </Link>

  )
}

export default PostItem