/* Core */
import { useApolloClient } from '@apollo/client';
import { useNavigate } from 'react-router-dom';
import styled from 'styled-components';

/* Instruments */
import { isLoggedInVar } from '../../lib/apollo';
import { menuItemClassName } from '../MenuItem';
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
        <StyledButton onClick = { logout }>
            <ExitIcon />
            Logout
        </StyledButton>
    );
};

/* Styles */
const StyledButton = styled('button')(
    {
        background: 'none',
        border:     'none',
        padding:    0,
    },
    menuItemClassName,
);
