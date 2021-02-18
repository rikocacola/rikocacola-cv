import Head from 'next/head';

import Profile from '../components/Profile/Profile';
import Skills from '../components/Skills/Skills'

const Home = () => {
  return (
    <>
      <Head>
        <title>Riko Chair | Frontend Developer</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div>
        <Profile />
        <Skills />
        <Profile />
      </div>
    </>
  )
}

export default Home;