import { useState, useEffect, useContext } from 'react';
import Head from 'next/head';
import { useRouter } from 'next/navigation';
import { AuthContext } from '../libs/authContext';
import PostList from '../components/postList';
import UserLogin from '../components/userLogin';
import { Container, Button, Dimmer, Loader, Message } from 'semantic-ui-react';


const HomePage = () => {
  const { user, logout } = useContext(AuthContext);
  const [ posts, setPosts ] = useState([]);
  const [ showLogin, setShowLogin ] = useState(false);
  const router = useRouter();

  useEffect(() => {
    loadPostHandler();
    console.log('started bra:', user)
  }, [])

  const loadPostHandler = () => {
    fetch('/api/posts')
    .then((res) => res.json())
    .then((data) => setPosts(data.posts))
  }

  return (
    <Container className="main-body">
      <Head>
        <title>Namblo</title>
        <meta 
          name="description"
          content="Thoughts alots"
        />
      </Head>

      <PostList posts={posts} user={ user } />
      <hr style={{marginTop: 30}} />

      { posts && user ? (
        <div>
          <hr/><br/>
          <Button
            color="red"
            size="huge"
            onClick={logout}
          > Logout </Button>
          <Button 
            primary
            size="huge" 
            onClick={() => router.push('/newpost') }
          >Post New Blog </Button>
        </div>
      ) : (
        <Button
          color="green"
          size="huge"
          style={{ marginTop: 20 }}
          onClick={() => setShowLogin(true)}
        > Login </Button>
      )}

      <UserLogin show={showLogin} onClose={() => setShowLogin(false)} />
    </Container>
  )
}

// export async function getStaticProps() {
//   const posts = await getAllPosts();

//   return {
//     props: {
//       posts: posts
//     },
//     revalidate: 1800
//   }
// }

export default HomePage;