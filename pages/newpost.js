import { useState } from 'react';
import { useRouter } from 'next/router';
import { Button, Form } from 'semantic-ui-react';

import { createPost } from './api/api-util';

const NewPost = () => {
  const [title, setTitle] = useState('');
  const [body, setBody] = useState('');
  const [status, setStatus] = useState(false);
  const router = useRouter();

  const handleSubmit = (e) => {
    e.preventDefault();
    const createdAt = new Date().toLocaleString();
    const post = { title, body, status, createdAt};
    
    createPost({
      variables: { 
        "title": post.title,
        "body": post.body,
        "status": post.status,
        "createdAt": post.createdAt
      }
    });

    router.push('/');
  }

  return (
    <div className="create">
      {/* { isLoading && <div>Loading...</div> } */}

      <p className="main-header">Add a New Post</p>
      <div className="form-container">
        <Form onSubmit={handleSubmit}>

          <Form.Field required>
            <label>Post Title</label>
            <input
              type="text"
              required
              placeholder='Enter a title'
              value={title}
              onChange={(e) => setTitle(e.target.value)}
            />
          </Form.Field>

          <Form.Field 
            label='Status' 
            control='select' 
            onChange={(e) => setStatus(!!e.target.value)}
          >
            <option value=''>Draft</option>
            <option value='true'>Publish</option>
          </Form.Field>

          <Form.TextArea
            required
            label='Post Content' 
            placeholder='Write your heart out...' 
            value={body}
            onChange={(e) => setBody(e.target.value)}
          />

          <Button size="large" onClick={() => router.back()}>Back</Button>
          <Button size="large" color="green" type="submit">Add Post</Button>
          {/* { loading && <Button disabled size="large" color="green" type="submit">Adding Post</Button>} */}
        </Form>
      </div>

    </div>
  );
}

export default NewPost;