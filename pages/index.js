import Head from 'next/head';

import Profile from '../components/Profile'

const Home = () => {
  return (
    <>
      <Head>
        <title>Create Next App</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div>
        <Profile />
      </div>
    </>
  )
}

export default Home;