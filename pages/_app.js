import Head from 'next/head';

import { Container } from 'semantic-ui-react';
import 'semantic-ui-css/semantic.min.css'
import '@/styles/globals.css';

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