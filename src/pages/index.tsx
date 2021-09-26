/* Core */
import { useEffect } from 'react';
import {
    Routes,
    Route,
    Navigate,
    useNavigate,
    useLocation
} from 'react-router-dom';

/* Pages */
import { Login } from './Login';
import { Launch } from './Launch';
import { Launches } from './Launches';
import { Cart } from './Cart';
import { Profile } from './Profile';

/* Components */
import { Footer, PageContainer } from '../components';

/* Instruments */
import * as gql from '../graphql';

export const Pages: React.FC = () => {
    const { data } = gql.useIsUserLoggedInQuery();
    const navigate = useNavigate();
    const location = useLocation();

    useEffect(() => {
        if (location.pathname !== '/login') {
            navigate('/launches', { replace: true });
        }

        if (!data?.isLoggedIn && location.pathname !== '/login') {
            navigate('/login', { replace: true });
        } else if (data?.isLoggedIn && location.pathname === '/login') {
            navigate('/launches', { replace: true });
        } else if (
            (data?.isLoggedIn && location.pathname.startsWith('/launches'))
            || location.pathname.startsWith('/carts')
            || location.pathname.startsWith('/profile')
        ) {
            navigate('/launches', { replace: true });
        }
    }, []);

    return (
        <>
            <Routes>
                <Route element = { <PageContainer /> } path = '/'>
                    <Route element = { <Launches /> } path = 'launches' />
                    <Route element = { <Launch /> } path = 'launches/:launchId' />
                    <Route element = { <Cart /> } path = 'cart' />
                    <Route element = { <Profile /> } path = 'profile' />
                </Route>

                <Route element = { <Login /> } path = 'login' />

                <Route element = { <Navigate to = '/' /> } path = '*' />
            </Routes>

            {data?.isLoggedIn && <Footer />}
        </>
    );
};
