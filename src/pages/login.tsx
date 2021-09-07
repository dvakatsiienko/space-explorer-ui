/* Components */
import { LoginForm, Loading } from '../components';

/* Instruments */
import * as gql from '../graphql';
import { isLoggedInVar } from '../cache';

export const Login = () => {
    const [login, { loading, error }] = gql.useLoginMutation({
        onCompleted(response) {
            const { login } = response;

            if (login) {
                localStorage.setItem('token', login.token);
                localStorage.setItem('userId', login.id);
                isLoggedInVar(true);
            }
        },
    });

    if (loading) return <Loading />;
    if (error) return <p>An error occurred</p>;

    return <LoginForm login={login} />;
};
