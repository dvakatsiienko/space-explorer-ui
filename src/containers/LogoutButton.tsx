/* Core */
import styled from 'react-emotion';
import { useApolloClient } from '@apollo/client';

/* Instruments */
import { isLoggedInVar } from '../lib/cache';
import { menuItemClassName } from '../components/MenuItem';
import { ReactComponent as ExitIcon } from '../assets/icons/exit.svg';

export const LogoutButton: React.FC = () => {
    const client = useApolloClient();

    const logout = () => {
        client.cache.evict({ fieldName: 'userProfile' });
        client.cache.gc();

        localStorage.removeItem('token');
        localStorage.removeItem('userId');

        isLoggedInVar(false);
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
