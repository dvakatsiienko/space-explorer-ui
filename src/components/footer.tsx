/* Core */
import styled from 'react-emotion';

/* Components */
import { MenuItem } from './MenuItem';
import { LogoutButton } from '../containers';

import { ReactComponent as HomeIcon } from '../assets/icons/home.svg';
import { ReactComponent as CartIcon } from '../assets/icons/cart.svg';
import { ReactComponent as ProfileIcon } from '../assets/icons/profile.svg';
import { colors, unit } from '../styles';

export const Footer = () => {
    return (
        <Container>
            <InnerContainer>
                <MenuItem to="/launches">
                    <HomeIcon />
                    Home
                </MenuItem>

                <MenuItem to="/cart">
                    <CartIcon />
                    Cart
                </MenuItem>

                <MenuItem to="/profile">
                    <ProfileIcon />
                    Profile
                </MenuItem>

                <LogoutButton />
            </InnerContainer>
        </Container>
    );
};

/* Styles */
const Container = styled('footer')({
    flexShrink: 0,
    marginTop: 'auto',
    backgroundColor: 'white',
    color: colors.textSecondary,
    position: 'sticky',
    bottom: 0,
});

const InnerContainer = styled('div')({
    display: 'flex',
    alignItems: 'center',
    maxWidth: 460,
    padding: unit * 2.5,
    margin: '0 auto',
});
