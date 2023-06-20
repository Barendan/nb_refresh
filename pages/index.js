import Head from 'next/head';
import PostList from '../components/postList';
import { getAllPosts } from './api/api-util';

const HomePage = ( {posts} ) => {
  return (
    <>
      <Head>
        <title>Namblo</title>
        <meta 
          name="description"
          content="Thoughts alots"
        />
      </Head>

      <PostList posts={posts} />
      {/* Login Register Buttons */}
    </>
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