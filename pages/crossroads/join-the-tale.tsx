import React, { useState } from 'react';
import SEO from "@/components/seo";
import Wrapper from "@/layout/wrapper";
import Header from '@/layout/header';
import Footer from '@/layout/footer';
import OtherHeader from '@/components/other-header';
import { Col, Container, Row, Button, Modal, Form, FormGroup, CloseButton } from 'react-bootstrap';
import { useFormik } from 'formik';
import { joinTheTaleSchema } from '@/validation/validationSchemas';

const apiEndpoint = `${process.env.NEXT_PUBLIC_API_URL}`;

const Index: React.FC = () => {

    const [show, setShow] = useState<boolean>(false);

    const handleClose = () => setShow(false);
    const handleShow = () => {
        setShow(true);
        formik.resetForm();
    };



    const handleImageChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        if (e.target.files && e.target.files.length > 0) {
            formik.setFieldValue('file', e.target.files[0]);
        }
    };

    const formik = useFormik({
        initialValues: {
            name: '',
            email: '',
            mobile: '',
            file: ''
        },
        validationSchema: joinTheTaleSchema,
        onSubmit: async (values, { resetForm }) => {

            console.log(values);

            const formData = new FormData();

            formData.append('name', values.name);
            formData.append('email', values.email);
            formData.append('mobile', values.mobile);
            formData.append('image', values.file);

            const postData = async () => {
                try {

                    const response = await fetch(`${apiEndpoint}join-the-tale`, { method: 'POST', body: formData });

                    if (!response.ok) {
                        throw new Error('Network response was not ok');
                    }

                    const data = await response.json();
                    console.log('Success:', data);
                    handleClose();
                    resetForm();
                } catch (error) {
                    console.error('Error:', error);
                }
            };

            await postData();

        }
    });

    return (
        <>
            <SEO pageTitle={'Join The Tales'} description={'Description'} keywords={'Keywords'} author={'Author'} />
            <Header />
            <Wrapper>
                <OtherHeader img='origin.png' heading='Join The Tales' paragraph='The heart & purpose of Spakcomm' />
                <Container>
                    <p>“Join the Tale” offers a chance to weave your narrative into the fabric of Spakcomm’s evolving story. Here, opportunities abound for creative minds to contribute to our saga, helping to shape the future of our agency and the industry at large through innovation and shared vision.</p>
                </Container>

                <Container className='join-the-tale-wrapper'>
                    <Row>
                        <Col lg={6}>
                            <div className='join-item'>
                                Position:
                                <br />
                                Visualizer
                            </div>
                        </Col>
                        <Col lg={6}>
                            <div className='join-item'>
                                Experience Required:
                                <br />
                                1-4 yrs (Digital Agency Exp. needed)
                            </div>
                        </Col>
                    </Row>
                    <Row>
                        <Col lg={6}>
                            <div className='join-item'>
                                Location:
                                <br />
                                Malad (West)
                            </div>
                        </Col>
                        <Col lg={6}>
                            <div className='join-item'>
                                Software:
                                <br />
                                Photoshop, Illustrator, Coreldraw
                            </div>
                        </Col>
                    </Row>
                    <Row>
                        <Col lg={12}>
                            <div className='join-resposibility'>
                                <strong>Job Responsibilities:</strong>

                                <ul>
                                    <li>Ideate & conceptualize creative advertising ideas that are clear, persuasive, and original.</li>
                                    <li>Work to raise the bar on the quality of creative output for brands / deliver high quality creative work.</li>
                                    <li>Brainstorms ideas and concepts with other team members.</li>
                                    <li>Work in a close-knit creative partnership with the copywriter to generate workable concepts and ideas.</li>
                                    <li>Ensure creativity is brief and brand aligned.</li>
                                    <li>Demonstrate that creative ideas work in a multi-channel environment; actively pursue new media and digital solutions.</li>
                                    <li>Work on creative brief & show understanding & relevance to the target market.</li>
                                    <li>Should have understanding of Digital visualization.</li>
                                </ul>

                                <Button variant="primary" className='hr-btn' onClick={handleShow}>Apply Now</Button>
                            </div>
                        </Col>
                    </Row>
                </Container>

                <Container className='home-before-footer'>
                    <Row>
                        <Col lg={8}>
                            <strong>
                                Creative Visionaries. Expert Innovators. Artful Creators. Design Maestros. Trailblazing Artists. Fantasy Weavers. Conceptual Geniuses. Pioneer Craftsmen. Leading Inventors.
                            </strong>
                        </Col>
                    </Row>
                </Container>

            </Wrapper>
            <Footer />

            <Modal show={show} onHide={handleClose}>
                <Modal.Body>

                    <div className="close-modal">
                        <CloseButton onClick={handleClose} />
                    </div>

                    <Form onSubmit={formik.handleSubmit}>
                        <FormGroup controlId="name" className='mb-15'>
                            <Form.Control
                                type="text"
                                name="name"
                                placeholder='Name'
                                value={formik.values.name}
                                onChange={formik.handleChange}
                                isInvalid={formik.touched.name && !!formik.errors.name}
                                className='spak-input'
                            />
                            <Form.Control.Feedback type="invalid">{formik.errors.name}</Form.Control.Feedback>
                        </FormGroup>

                        <FormGroup controlId="email" className='mb-15'>
                            <Form.Control
                                type="email"
                                name="email"
                                placeholder='Email'
                                value={formik.values.email}
                                onChange={formik.handleChange}
                                isInvalid={formik.touched.email && !!formik.errors.email}
                                className='spak-input'
                            />
                            <Form.Control.Feedback type="invalid">{formik.errors.email}</Form.Control.Feedback>
                        </FormGroup>

                        <FormGroup controlId="mobile" className='mb-15'>
                            <Form.Control
                                type="text"
                                name="mobile"
                                placeholder='Mobile No'
                                value={formik.values.mobile}
                                onChange={formik.handleChange}
                                isInvalid={formik.touched.mobile && !!formik.errors.mobile}
                                className='spak-input'
                            />
                            <Form.Control.Feedback type="invalid">{formik.errors.mobile}</Form.Control.Feedback>
                        </FormGroup>

                        {/* <Form.Group controlId="fileUpload" className="mb-15">
                            <Form.Control type="file" name='file' accept="image/*" onChange={handleImageChange} value={formik.values.file} />
                            {formik.errors.file && formik.touched.file && (<div className="error-message">{formik.errors.file}</div>)}
                        </Form.Group> */}

                        <Form.Group controlId="fileUpload" className="mb-15">
                            <Form.Control
                                type="file"
                                name='file'
                                accept="image/*"
                                onChange={handleImageChange}
                                isInvalid={formik.touched.file && !!formik.errors.file}
                            />
                            <Form.Control.Feedback type="invalid">{formik.errors.file}</Form.Control.Feedback>
                        </Form.Group>

                        <Button variant="primary" type="submit" className='spak-btn'>Submit</Button>
                    </Form>

                </Modal.Body>
            </Modal>

        </>
    );
};

export default Index;