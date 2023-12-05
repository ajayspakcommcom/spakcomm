import Head from 'next/head';
import Image from 'next/image';
import { Inter } from 'next/font/google';
import Header from '@/layout/header';
import SEO from '@/components/seo';
import Footer from '@/layout/footer';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Wrapper from '@/layout/wrapper';


const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
    <>
      <SEO pageTitle={''} description={''} keywords={''} author={''} />

      <Header />

      <Wrapper>
        <Container>
          <Row>
            <Col lg={6} className='left-verticla-wrapper'>
              <div className="hero-section">
                <div className="hero-content">
                  <h1>The Nexus of Authenticity & Innovation in Branding.</h1>
                  <button className="custom-btn">Discover »</button>
                </div>
              </div>
            </Col>
            <Col lg={6}>
              <div className='hero-img'>
                <Image src={require('../public/assets/img/home/1.png')} alt='' className='img-fluid' />
              </div>
            </Col>
          </Row>
        </Container>

        <Container>
          <div className="who-we-are">
            <h2>Who we are</h2>
            <p>Your creative partner, adept at devising tailored content strategies to amplify your business presence and connect meaningfully with your target audience.</p>
            <button className="custom-btn m-0">Our Story »</button>
          </div>
        </Container>

        <Container className='what-we-do-container'>
          <Row>
            <Col lg={6}>
              <div className="what-we-do">
                <h2>What we do</h2>
                <p>Discover Spakcomm’s fusion of creativity and strategy, where each service is a gateway to transformative brand narratives and authentic digital connections. Elevate your brand’s journey with us.</p>
                <button className="custom-btn m-0">See Our Expertise »</button>
              </div>
            </Col>
            <Col lg={6}>
              <div className="what-we-do-right">
                <table className='what-we-do-table'>
                  <tbody>
                    <tr>
                      <td><Image src={require('../public/assets/img/home/branding.png')} alt='Branding Solutions' /></td>
                      <td><b>Branding Solutions</b></td>
                    </tr>
                    <tr>
                      <td><Image src={require('../public/assets/img/home/digital-excellence.png')} alt='Digital Excellence' /></td>
                      <td><b>Digital Excellence</b></td>
                    </tr>
                    <tr>
                      <td><Image src={require('../public/assets/img/home/communication-design.png')} alt='Communication Design' /></td>
                      <td><b>Communication Design</b></td>
                    </tr>
                    <tr>
                      <td><Image src={require('../public/assets/img/home/consultancy-strategy.png')} alt='Consultancy & Strategy' /></td>
                      <td><b>Consultancy & Strategy</b></td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </Col>
          </Row>
        </Container>


        <Container className='what-we-do-container'>
          <Row>
            <Col>
              <h2>Recent projects</h2>
            </Col>
          </Row>
          <Row>
            <Col lg={3} className='my-col'><Image src={require('../public/assets/img/projects/1.png')} className='img-fluid' alt='project' /></Col>
            <Col lg={3} className='my-col'><Image src={require('../public/assets/img/projects/1.png')} className='img-fluid' alt='project' /></Col>
            <Col lg={3} className='my-col'><Image src={require('../public/assets/img/projects/1.png')} className='img-fluid' alt='project' /></Col>
            <Col lg={3} className='my-col'><Image src={require('../public/assets/img/projects/1.png')} className='img-fluid' alt='project' /></Col>
            <Col lg={3} className='my-col'><Image src={require('../public/assets/img/projects/1.png')} className='img-fluid' alt='project' /></Col>
            <Col lg={3} className='my-col'><Image src={require('../public/assets/img/projects/1.png')} className='img-fluid' alt='project' /></Col>
            <Col lg={3} className='my-col'><Image src={require('../public/assets/img/projects/1.png')} className='img-fluid' alt='project' /></Col>
            <Col lg={3} className='my-col'><Image src={require('../public/assets/img/projects/1.png')} className='img-fluid' alt='project' /></Col>
            <Col lg={3} className='my-col'><Image src={require('../public/assets/img/projects/1.png')} className='img-fluid' alt='project' /></Col>
            <Col lg={3} className='my-col'><Image src={require('../public/assets/img/projects/1.png')} className='img-fluid' alt='project' /></Col>
            <Col lg={3} className='my-col'><Image src={require('../public/assets/img/projects/1.png')} className='img-fluid' alt='project' /></Col>
            <Col lg={3} className='my-col'><Image src={require('../public/assets/img/projects/1.png')} className='img-fluid' alt='project' /></Col>
            <Col lg={3} className='my-col'><Image src={require('../public/assets/img/projects/1.png')} className='img-fluid' alt='project' /></Col>
            <Col lg={3} className='my-col'><Image src={require('../public/assets/img/projects/1.png')} className='img-fluid' alt='project' /></Col>
            <Col lg={3} className='my-col'><Image src={require('../public/assets/img/projects/1.png')} className='img-fluid' alt='project' /></Col>
            <Col lg={3} className='my-col'><Image src={require('../public/assets/img/projects/1.png')} className='img-fluid' alt='project' /></Col>
          </Row>
          <Row>
            <Col lg={3} className='my-col'>
              <button className="custom-btn">All Project »</button>
            </Col>
          </Row>
        </Container>


        <Container className='home-before-footer'>
          <Row>
            <Col lg={8}><strong>Visionary Craftsmen. Passionate Storytellers. Your Brand’s Best Friend. Bold Thinkers. Creative Allies. Design Virtuosos. Conceptual Wizards. Your Vibrant Collaborators.</strong></Col>
          </Row>
        </Container>

      </Wrapper>

      <Footer />


    </>
  )
}
