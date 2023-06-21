import Head from 'next/head';
import { useRouter } from 'next/router';
import { Container, TextArea, Confirm, Button, Header, Form, Dimmer, Loader, Message } from 'semantic-ui-react';
import { getPostById } from './api/api-util';


function PostDetailPage({post}) {
  const router = useRouter();

  if (post) {
    return (
      <>
        {/* {console.log('show slug post:', post)} */}
        <Head>
          <title>{post.title}</title>
          <meta name="description" content={post.excerpt} />
        </Head>
        
        <Container fluid className="Home">
          
          <Container className="item-container">
              <Header size="huge" className="item-header">
                  {post.title}
                  <Header.Subheader>
                      <i>{post.createdAt}</i>
                  </Header.Subheader>
              </Header>
              <TextArea className="item-body" value={post.body}/>
          </Container>

          <Button size="huge" onClick={() => router.back()}>
              Back
          </Button>

          {/* <Confirm
              open={open}
              content='Are you sure you want to delete this post?'
              cancelButton='Nevermind'
              confirmButton="Delete it"
              onCancel={() => setOpen(false)}
              onConfirm={handleDelete}
          /> */}
        </Container>

      </>
    )
  }

  return <p>Loading...</p>
}

export async function getStaticProps(context) {
  const { params } = context;
  const { slug } = params;

  const postData = await getPostById(slug);
  // console.log('post data:', postData)
  return {
    props: {
      post: postData
    },
    revalidate: 600
  }
}

export async function getStaticPaths() {

  return {
    paths: [
      { params: { slug: '6346e15e5410cdbca148fd3d' } },
      { params: { slug: '633e56844cae3e28ad6d0697' } },
      { params: { slug: '631e1ac0b2751dfe6dd9ab7e' } }
    ],
    // fallback: "blocking"
    fallback: true
  }
}

export default PostDetailPage