import { NextPage, NextPageContext } from 'next';
import dynamic from 'next/dynamic';
const ErrorComponent = dynamic(() => import('@/components/error/index'), { loading: () => <div>Loading...</div> });
const Wrapper = dynamic(() => import('@/layout/wrapper'), { loading: () => <div>Loading...</div> });
const Header = dynamic(() => import('@/layout/header'), { loading: () => <div>Loading...</div> });
const Footer = dynamic(() => import('@/layout/footer'), { loading: () => <div>Loading...</div> });

interface ErrorPageProps {
    statusCode: number;
}

const ErrorPage: NextPage<ErrorPageProps> = ({ statusCode }) => {


    return (
        <>
            <Header />
            <Wrapper>
                <ErrorComponent statusCode={statusCode} />
            </Wrapper>
            <Footer />
        </>
    )
};

ErrorPage.getInitialProps = ({ res, err }: NextPageContext): ErrorPageProps => {
    const statusCode = res ? res.statusCode : err ? err.statusCode! : 404;
    return { statusCode };
};

export default ErrorPage;
