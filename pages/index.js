import Head from 'next/head';

import Contact from '../components/Contact/Contact';
import Profile from '../components/Profile/Profile';
import Projects from '../components/Projects/Projects';
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
        <Projects />
        <Contact />
      </div>
    </>
  )
}

export default Home;