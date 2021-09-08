/* Core */
import styled from 'react-emotion';
import { useNavigate } from 'react-router-dom';
import { useApolloClient } from '@apollo/client';

/* Instruments */
import { isLoggedInVar } from '../../lib/cache';
import { menuItemClassName } from '../../components/MenuItem';
import { ReactComponent as ExitIcon } from '../../assets/icons/exit.svg';

export const LogoutButton: React.FC = () => {
    const client = useApolloClient();
    const navigate = useNavigate();

    const logout = () => {
        client.cache.evict({ fieldName: 'userProfile' });
        client.cache.gc();

        localStorage.removeItem('token');
        localStorage.removeItem('userId');

        isLoggedInVar(false);
        navigate('/login');
    };

    return (
        <StyledButton data-testid="logout-button" onClick={logout}>
            <ExitIcon />
            Logout
        </StyledButton>
    );
};

/* Styles */
const StyledButton = styled('button')(menuItemClassName, {
    background: 'none',
    border: 'none',
    padding: 0,
});
