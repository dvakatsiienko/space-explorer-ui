/* Core */
import { useNavigate } from 'react-router-dom';

/* Components */
import { LoginForm, Loading } from '../components';

/* Instruments */
import * as gql from '../graphql';
import { isLoggedInVar } from '../lib/cache';

export const Login = () => {
    const navigate = useNavigate();
    const [login, { loading, error }] = gql.useLoginMutation({
        onCompleted(response) {
            const { login } = response;

            if (login) {
                isLoggedInVar(true);
                navigate('/launches');
                localStorage.setItem('token', login.token);
                localStorage.setItem('userId', login.id);
            }
        },
    });

    if (loading) return <Loading />;
    if (error) return <p>An error occurred</p>;

    return <LoginForm login={login} />;
};
