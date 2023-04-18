import Head from 'next/head';

// import Hero from '../components/home-page/hero'
// import FeaturedPosts from '../components/home-page/featured-posts'
// import styles from '@/styles/Home.module.css';

const HomePage = (props) => {
  return (
    <>
      <Head>
        <title>Namblo</title>
        <meta 
          name="description"
          content="Thoughts and froughts"
        />
      </Head>
      {/* <Hero /> */}
      {/* <FeaturedPosts posts={props.posts} /> */}
    </>
  )
}

export default HomePage;