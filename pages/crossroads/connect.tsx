import React from 'react';
import SEO from "@/components/seo";
import Wrapper from "@/layout/wrapper";
import Header from '@/layout/header';
import Footer from '@/layout/footer';
import OtherHeader from '@/components/other-header';
import { Col, Container, Row, Form, Button, FormGroup } from 'react-bootstrap';
import { useFormik } from 'formik';
import { connectSchema } from '@/validation/validationSchemas';

const apiEndpoint = `${process.env.NEXT_PUBLIC_API_URL}`;


const Index: React.FC = () => {

    const [loading, setLoading] = React.useState(false);



    const formik = useFormik({
        initialValues: {
            name: '',
            email: '',
            mobile: '',
            message: ''
        },
        validationSchema: connectSchema,
        onSubmit: async (values, { resetForm }) => {

            setLoading(true);

            const dataObj = { ...values, type: 'CREATE' }

            const postData = async () => {
                try {

                    const response = await fetch(apiEndpoint + 'connect', {
                        method: 'POST',
                        headers: {
                            'Content-Type': 'application/json',
                        },
                        body: JSON.stringify(dataObj),
                    });

                    if (!response.ok) {
                        throw new Error('Network response was not ok');
                    }

                    const data = await response.json();
                    setLoading(false);
                    resetForm();
                    console.log('Success:', data);
                } catch (error) {
                    console.error('Error:', error);
                    setLoading(false);
                }
            };

            await postData();

        }
    });

    return (
        <>
            <SEO pageTitle={'Connect'} description={'Description'} keywords={'Keywords'} author={'Author'} />
            <Header />
            <Wrapper>
                <OtherHeader img='origin.png' heading='Connect' paragraph='Forge new ventures; expand horizons' />
                <Container>
                    <p className='text-justify'>Spakcomm invites you to reach out and initiate collaboration, opening doors to a suite of bespoke services. This junction is where potential meets expertise, and where your ideas are set in motion with our dedicated team, ready to transform vision into reality.</p>
                </Container>

                <Container className='connect-wrapper'>
                    <Row>
                        <Col>

                            <h3 className='h3'>Hoping to hear from you soon.</h3>

                            <div className='connect-left-connect'>
                                <p>Spakcomm Solutions Pvt. Ltd.</p>
                                <p> Mumbai</p>
                                <p>+91 93240 47049</p>
                                <p>contact@spakcomm.com</p>
                            </div>
                        </Col>
                        <Col>

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

                                <FormGroup controlId="message" className='mb-15'>
                                    <Form.Control
                                        as="textarea" rows={6}
                                        type="text"
                                        name="message"
                                        placeholder='Message'
                                        value={formik.values.message}
                                        onChange={formik.handleChange}
                                        isInvalid={formik.touched.message && !!formik.errors.message}
                                        className='spak-input'
                                    />
                                    <Form.Control.Feedback type="invalid">{formik.errors.message}</Form.Control.Feedback>
                                </FormGroup>

                                <Button variant="primary" type="submit" className='spak-btn' disabled={loading ? true : false}>
                                    {loading ? 'Submitting...' : 'Submit'}
                                </Button>
                            </Form>

                        </Col>
                    </Row>
                </Container>

            </Wrapper>
            <Footer />
        </>
    );
};

export default Index;