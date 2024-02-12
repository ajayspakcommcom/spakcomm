import Wrapper from '@/layout/wrapper';
import React from 'react';
import { Button, Card } from 'react-bootstrap';
import style from './error.module.css';
import { useRouter } from 'next/router';


interface ErrorComponentProps {
    statusCode: number;
}

const ErrorComponent: React.FC<ErrorComponentProps> = ({ statusCode }) => {

    const router = useRouter();

    const navigationHandler = () => {
        router.push('/');
    };

    return (
        <div className={style['error-component']}>
            <Card>
                <Card.Body>
                    <Card.Title><h1>{statusCode} - Page Not Found</h1></Card.Title>
                    <Card.Text>
                        <div>
                            <p>The page you are looking for does not exist.</p>
                            <p>Please return to the Home Page.</p>
                        </div>
                        <Button variant="primary" onClick={navigationHandler}>Go Home</Button>
                    </Card.Text>
                </Card.Body>
            </Card>
        </div>
    );
};

export default React.memo(ErrorComponent);
