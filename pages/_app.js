import '../styles/globals.css'
import Head from 'next/head'

function MyApp({ Component, pageProps }) {
  const meta_title = 'Riko Chair | Frontend Developer'
  return (
    <>
      <Head>
        <title>{meta_title}</title>
      </Head>
      <Component {...pageProps} />
    </>
  )
}

export default MyApp
