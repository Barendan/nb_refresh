import Head from 'next/head';
import { useState, useEffect } from 'react';
import { useRouter } from 'next/router';
import { Container, TextArea, Confirm, Button, Header, Form, Dimmer, Loader, Message } from 'semantic-ui-react';
// import { getPostById } from './api/api-util';


function PostDetailPage( {postId} ) {
  const [post, setPost] = useState('');
  const [id, setId] = useState('');
  const [title, setTitle] = useState('');
  const [body, setBody] = useState('');
  const [status, setStatus] = useState(false);
  const [editActive, setEditActive] = useState(false);
  const [open, setOpen] = useState(false);
  const router = useRouter();

  useEffect(() => {
    fetch(`/api/${postId}`)
    .then((res) => res.json())
    .then((data) => setPost(data))
    .catch((err) => console.log('error when fetching single post:', err));
  }, [])
  
  const handleDelete = async () => {
    const response = await fetch(`/api/${post._id}`, {
      method: 'DELETE',
    });
    const data = await response.json();
    console.log('deleted:', data._id, data.title);

    router.push('/');
    setOpen(false);
  }

  const handleUpdate = () => {
    setEditActive(true);
    setId(post?._id)
    setTitle(post?.title)
    setBody(post?.body)
    setStatus(post?.status)
  }

  const handleSubmit = async (e) => {
    e.preventDefault();
    const finalPost = { id, title, body, status };

    const response = await fetch(`/api/${post._id}`, {
      method: 'PUT',
      body: JSON.stringify(finalPost),
      headers: {
        'Content-Type': 'application/json'
      }
    });
    // const data = await response.json();
    // console.log('a submit done happened:', data)
    router.reload();
    setEditActive(false);
  }

  if (post) {
    return (
      <>
        <Head>
          <title>{post.title}</title>
          <meta name="description" content={post.excerpt} />
        </Head>
        
        <Container fluid className="">

        { editActive ? (
          <Container>
            <div className="form-container">
              <p className="sub-header">Edit your post</p>
              <Form onSubmit={handleSubmit}>

                <Form.Field>
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
                  defaultValue={status}
                  onChange={(e) => setStatus(!!e.target.value)}
                >
                  <option value=''>Draft</option>
                  <option value='true'>Publish</option>
                </Form.Field>

                <Form.TextArea 
                  label='Post Content' 
                  placeholder='Write your heart out...' 
                  value={body}
                  onChange={(e) => setBody(e.target.value)}
                />

                <Button size="huge" onClick={() => setEditActive(false)}>
                  Back
                </Button>

                <Button color="green" size="huge" type="submit">
                  Update Post
                </Button>

                {/* { loading && <Button disabled color="green" size="huge" type="submit">
                  Updating Post
                </Button> } */}

              </Form>
            </div>
          </Container>
        ) :
          <Container className="item-container">
            
            <Header size="huge" className="item-header">
              {post.title}
              <Header.Subheader>
                <i>{post.createdAt}</i>
              </Header.Subheader>
            </Header>

            <TextArea className="item-body" value={post.body}/>
                
            <Button size="huge" onClick={() => router.back()}>
              Back
            </Button>
            
            <Button size="huge" color="red" onClick={() => setOpen(true)}> 
              Delete
            </Button>

            <Button size="huge" color="green" onClick={() => handleUpdate()}>
              Edit
            </Button>

          </Container>
        }

        <Confirm
          open={open}
          content='Are you sure you want to delete this post?'
          cancelButton='Nevermind'
          confirmButton="Delete it"
          onCancel={() => setOpen(false)}
          onConfirm={handleDelete}
        />
        </Container>

      </>
    )
  }

  if (post === null) return (
    <Container>
      <h1>Post is not available at this time.</h1>
    </Container>
  )

  return (
    <Container>
      <h1>Loading post...</h1>
    </Container>
  )

}

// export async function getStaticProps(context) {
//   const { params } = context;
//   const { slug } = params;

//   const postData = await getPostById(slug);

//   return {
//     props: {
//       // post: postData ? postData : null
//     },
//     revalidate: 600
//   }
// }

// export async function getStaticPaths() {

//   return {
//     paths: [
//       { params: { slug: '6346e15e5410cdbca148fd3d' } },
//       { params: { slug: '633e56844cae3e28ad6d0697' } },
//       { params: { slug: '631e1ac0b2751dfe6dd9ab7e' } }
//     ],
//     // fallback: "blocking"
//     fallback: true
//   }
// }

export async function getServerSideProps(context) {
  const { params } = context;
  const postId = params.slug;

  return {
    props: { postId }
  }
}

export default PostDetailPage