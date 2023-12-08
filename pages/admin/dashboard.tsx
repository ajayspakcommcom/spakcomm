import Header from '@/components/admin/header';
import * as React from 'react';
import { useSelector } from 'react-redux';
import { RootState } from '@/redux/store';
import { useRouter } from 'next/router';

export default function Index() {

    const data = useSelector((state: RootState) => state.authAdmin);
    const router = useRouter();

    if (!data.token || !(window.localStorage.getItem('jwtToken'))) {
        router.push('/admin/login');
        return false;
    }

    if (data.token || window.localStorage.getItem('jwtToken')) {
        return (
            <>
                <Header />
                <h1>Dashboard</h1>
            </>
        );
    }

}