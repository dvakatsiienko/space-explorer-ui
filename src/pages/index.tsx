/* Core */
import { useEffect } from 'react';
import {
    Routes,
    Route,
    Outlet,
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
            navigate('/login', {
                replace: true,
            });
        }
    }, [data?.isLoggedIn, location.pathname, navigate]);

    return (
        <>
            <PageContainer>
                <Routes>
                    <Route path="/" element={<Outlet />}>
                        <Route path="launches" element={<Launches />}>
                            <Route path=":launchId" element={<Launch />} />
                        </Route>
                        <Route path="cart" element={<Cart />} />
                        <Route path="profile" element={<Profile />} />

                        <Route path="login" element={<Login />} />
                    </Route>
                </Routes>
            </PageContainer>

            {data?.isLoggedIn && <Footer />}
        </>
    );
};
