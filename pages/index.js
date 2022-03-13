import { useRef } from 'react'

// import Layout from '../components/Layout'
import Profile from '../components/Profile/Profile';
import Skills from '../components/Skills/Skills';
import Projects from '../components/Projects/Projects';
import Header from '../components/Header/Header';
import Footer from '../components/Footer/Footer';
import Hello from '../components/Hello/Hello';

const Home = () => {
  const meta_title = 'Riko Chair | Frontend Developer'
  // const profileRef = useRef(null);
  // const skillRef = useRef(null);
  // const projectRef = useRef(null);
  // const 
  return (
    <>
      <Header/>
      <section id="">
        <Hello/>
      </section>
      <section id="profile">
        <Profile/>
      </section>
      <section id="skills">
        <Skills/>
      </section>
      <section id="projects">
        <Projects/>
      </section>
      <Footer />
    </>
  )
}

export default Home;