import Head from 'next/head';
import { SessionProvider } from 'next-auth/react';
import { Container } from 'semantic-ui-react';
import 'semantic-ui-css/semantic.min.css'
import '@/styles/globals.css';

const Layout = ( props ) => {
  return (
    <Container fluid className="Home">
      <div className="main-header">
        Chemically <br/>Induced<br/> Dream 
      </div>
      <div className="main-body"> {props.children} </div>
    </Container>
  )
}

const App = ({ Component, pageProps: { session, ...pageProps } }) => (
  <SessionProvider session={ session }>
    <Layout>
      <Head>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>
      <Component {...pageProps} />
    </Layout>
  </SessionProvider>
)

export default App;