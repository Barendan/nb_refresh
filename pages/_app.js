import Head from 'next/head';

import { Container } from 'semantic-ui-react';
import '@/styles/globals.css';


// import Link from 'next/link';

// import classes from './index.css';

// const MainNavigation = () => {
//   return (
//     <header className={classes.header}>
//         <Link href="/">
//             <div className={classes.logo}>Namblog</div>
//         </Link>
//         <nav>
//             <ul>
//                 <li><Link href="/posts">Posts</Link></li>
//                 <li><Link href="/contact">Contact</Link></li>
//             </ul>
//         </nav>
//     </header>
//   )
// }

const Layout = ( props ) => {
  return (
    <Container fluid className="Home">
      <div className="main-header"> 
        Chemically Induced Dream 
      </div>
      <main> {props.children} </main>
    </Container>
  )
}

const App = ({ Component, pageProps }) => (
  <Layout>
    <Head>
      <meta name="viewport" content="width=device-width, initial-scale=1" />
    </Head>
    <Component {...pageProps} />
  </Layout>
)

export default App;