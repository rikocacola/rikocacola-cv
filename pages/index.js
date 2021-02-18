import Head from 'next/head';
import { Container, Col, Row } from 'react-bootstrap';

import Profile from '../components/Profile/Profile';
import Skills from '../components/Skills/Skills'

const Home = () => {
  return (
    <>
      <Head>
        <title>Riko Chair | Frontend Developer</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Container>
        <Row>
          <Col xs={8}>
            <Profile />
            <Skills />
          </Col>
        </Row>

      </Container>
    </>
  )
}

export default Home;