import Head from 'next/head';
import PostList from '../components/postList';


const HomePage = (props) => {
  const data = 'random shit';

  return (
    <>
      <Head>
        <title>Namblo</title>
        <meta 
          name="description"
          content="Thoughts alots"
        />
      </Head>
      {/* PostList */}
      {/* Login Register Buttons */}

      <PostList blogs={ data } />
    </>
  )
}

export default HomePage;