import Image from 'next/image';
import Header from '@/layout/header';
import SEO from '@/components/seo';
import Footer from '@/layout/footer';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Wrapper from '@/layout/wrapper';
import RecentProject from '@/components/recent-project';
import ClientTele from '@/components/client-tele';
import { GetServerSideProps } from 'next';
import { useRouter } from 'next/router';
import Head from 'next/head';
import dynamic from 'next/dynamic';

const CarouselComponent = dynamic(() => import('../components/carousel/index'));

interface SeoData {
  pageTitle: string;
  description: string;
  keywords: string;
  author: string;
}

const Home: React.FC<SeoData> = ({ pageTitle, description, keywords, author }) => {

  const router = useRouter();

  const navigationHandler = (path: string) => {
    router.push({
      pathname: `${path}`,
    });
  };


  return (
    <>

      <SEO pageTitle={pageTitle} description={description} keywords={keywords} author={author} />

      <Header />

      <Wrapper>
        <Container>
          <Row>
            <Col lg={6} className='left-verticla-wrapper'>
              <div className="hero-section">
                <div className="hero-content">
                  <h1>The Nexus of <br /> Authenticity & Innovation <br /> in Branding.</h1>
                </div>
              </div>
            </Col>
            <Col lg={6}>
              <div>
                <CarouselComponent />
              </div>
            </Col>
          </Row>
        </Container>

        <Container>
          <div className="who-we-are">
            <h2>Who we are</h2>
            <p>Your creative partner, adept at devising tailored content strategies to amplify your business presence and connect meaningfully with your target audience.</p>
            <button className="custom-btn m-0" onClick={() => navigationHandler('/saga/origin')}>Our Story »</button>
          </div>
        </Container>

        <Container className='what-we-do-container'>
          <Row>
            <Col lg={6}>
              <div className="what-we-do">
                <h2>What we do</h2>
                <p>Discover Spakcomm’s fusion of creativity and strategy, where each service is a gateway to transformative brand narratives and authentic digital connections. Elevate your brand’s journey with us.</p>
                <button className="custom-btn m-0" onClick={() => navigationHandler('/craftsmanship/experties')}>See Our Expertise »</button>
              </div>
            </Col>
            <Col lg={6} className='right-align'>
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

        <RecentProject />

        <div className='client-section'>
          <ClientTele />
        </div>

      </Wrapper>

      <Footer />


    </>
  )
}

export default Home;


export const getServerSideProps: GetServerSideProps<SeoData> = async ({ query, req, res, resolvedUrl, defaultLocale, draftMode, locale, locales, params, preview, previewData }) => {
  // Fetch SEO data from your API or database
  const seoData: SeoData = {
    pageTitle: 'Spak Communication Pvt Ltd',
    description: 'Desicription Index',
    keywords: 'Creative Agency, Digital Marketing, Website Design, Branding, Corporate Identity,',
    author: 'Shiv Kar',
  };

  // Return SEO data as props
  return {
    props: seoData,
  };
};
