import Head from 'next/head';
import { useRouter } from 'next/navigation';
import PostList from '../components/postList';
import { getAllPosts } from './api/api-util';

import { Container, Button, Dimmer, Loader, Message } from 'semantic-ui-react';

const HomePage = ( {posts} ) => {
  const router = useRouter();

  return (
    <Container className="Home">
      <Head>
        <title>Namblo</title>
        <meta 
          name="description"
          content="Thoughts alots"
        />
      </Head>

      <PostList posts={posts} />
      <hr style={{marginTop: 30}} />

      <div>
        <hr/><br/>
        {/* <Button
          color="red"
          size="huge"
          onClick={onLogout}
        > Logout </Button> */}
        <Button 
          primary
          size="huge" 
          onClick={() => router.push('/newpost') }
        >Post New Blog </Button>
      </div>


    </Container>
  )
}

export async function getStaticProps() {
  const posts = await getAllPosts();

  return {
    props: {
      posts: posts
    },
    revalidate: 1800
  }
}


export default HomePage;