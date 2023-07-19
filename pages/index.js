import Profile from '../components/Profile/Profile';
import Skills from '../components/Skills/Skills';
import Projects from '../components/Projects/Projects';
import Header from '../components/Header/Header';
import Footer from '../components/Footer/Footer';
import Hello from '../components/Hello/Hello';
import Experience from '../components/Experience/Experience';

const Home = () => {
  const meta_title = 'Riko Chair | Frontend Developer'
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
      <section id="experiences">
        <Experience/>
      </section>
      <Footer />
    </>
  )
}

export default Home;