import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import Image from 'next/image';
import Link from 'next/link';
import { useRouter } from 'next/router';

const Header: React.FC = () => {

    const router = useRouter();

    const handleNavigation = (string: string) => {
        router.push(string);
    };



    return (
        <>

            <Navbar expand="lg" className="bg-body-tertiary">
                <Container>
                    <Image src={require('../public/assets/img/logo.png')} alt='Spakcomm Logo' onClick={() => handleNavigation('/')} className='pointer' />
                    <Navbar.Toggle aria-controls="navbarScroll" />
                    <Navbar.Collapse id="navbarScroll" className='right-nav'>
                        <Form className="d-flex">
                            <Nav className="me-auto my-2 my-lg-0" navbarScroll >

                                <NavDropdown title="Saga" id="navbarScrollingDropdown">
                                    <NavDropdown.Item><span onClick={() => handleNavigation('/saga/origin')}>Origin</span></NavDropdown.Item>
                                    <NavDropdown.Item><span onClick={() => handleNavigation('/saga/our-why')}>Our Why</span></NavDropdown.Item>
                                    <NavDropdown.Item><span onClick={() => handleNavigation('/saga/journey')}>Journey</span></NavDropdown.Item>
                                </NavDropdown>

                                <NavDropdown title="Craftsmanship" id="navbarScrollingDropdown">
                                    <NavDropdown.Item><span onClick={() => handleNavigation('/craftsmanship/canvas')}>Canvas</span></NavDropdown.Item>
                                    <NavDropdown.Item><span onClick={() => handleNavigation('/craftsmanship/digital-tales')}>Digital Tales</span></NavDropdown.Item>
                                    <NavDropdown.Item><span onClick={() => handleNavigation('/craftsmanship/experties')}>Experties</span></NavDropdown.Item>
                                </NavDropdown>

                                <NavDropdown title="Whispers" id="navbarScrollingDropdown">
                                    <NavDropdown.Item><span onClick={() => handleNavigation('/whispers/conversations')}>Conversations</span></NavDropdown.Item>
                                    <NavDropdown.Item><span onClick={() => handleNavigation('/whispers/voices')}>Voices</span></NavDropdown.Item>
                                </NavDropdown>

                                <NavDropdown title="Crossroads" id="navbarScrollingDropdown">
                                    <NavDropdown.Item><span onClick={() => handleNavigation('/crossroads/connect')}>Connect</span></NavDropdown.Item>
                                    <NavDropdown.Item><span onClick={() => handleNavigation('/crossroads/join-the-tale')}>Join The Table</span></NavDropdown.Item>
                                </NavDropdown>
                                {/* <Nav.Link href="#"> Contact Us</Nav.Link> */}
                            </Nav>

                        </Form>
                    </Navbar.Collapse>
                </Container >
            </Navbar >

        </>
    );
};

export default Header;