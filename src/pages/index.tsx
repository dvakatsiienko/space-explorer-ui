/* Core */
import { Fragment } from 'react';
import { Router } from '@reach/router';

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

    if (!data?.isLoggedIn) {
        return <Login />;
    }

    return (
        <>
            <PageContainer>
                <Router primary={false} component={Fragment}>
                    <Launches path="/" />
                    <Launch path="launch/:launchId" />
                    <Cart path="cart" />
                    <Profile path="profile" />
                </Router>
            </PageContainer>
            <Footer />
        </>
    );
};
