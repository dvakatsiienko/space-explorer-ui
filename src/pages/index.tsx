/* Core */
import { useEffect } from 'react';
import {
    Routes,
    Route,
    Navigate,
    useNavigate,
    useLocation,
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
        if (!data?.isLoggedIn && location.pathname !== '/login') {
            navigate('/login', { replace: true });
        } else if (data?.isLoggedIn && location.pathname === '/login') {
            navigate('/launches', { replace: true });
        }
    }, []);

    return (
        <>
            <Routes>
                <Route path="/" element={<PageContainer />}>
                    <Route path="launches" element={<Launches />} />
                    <Route path="launches/:launchId" element={<Launch />} />
                    <Route path="cart" element={<Cart />} />
                    <Route path="profile" element={<Profile />} />
                </Route>

                <Route path="login" element={<Login />} />

                <Route path="*" element={<Navigate to="/" />} />
            </Routes>

            {data?.isLoggedIn && <Footer />}
        </>
    );
};
