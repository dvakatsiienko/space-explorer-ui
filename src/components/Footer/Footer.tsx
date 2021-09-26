/* Core */
import styled from 'styled-components';

/* Components */
import { MenuItem } from '../MenuItem';
import { LogoutButton } from './LogoutButton';

/* Instruments */
import { ReactComponent as HomeIcon } from '../../assets/icons/home.svg';
import { ReactComponent as CartIcon } from '../../assets/icons/cart.svg';
import { ReactComponent as ProfileIcon } from '../../assets/icons/profile.svg';
import { COLORS, SPACING } from '../../styles';

export const Footer = () => {
    return (
        <Container>
            <InnerContainer>
                <MenuItem to = '/launches'>
                    <HomeIcon />
                    Home
                </MenuItem>

                <MenuItem to = '/cart'>
                    <CartIcon />
                    Cart
                </MenuItem>

                <MenuItem to = '/profile'>
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
    flexShrink:      0,
    marginTop:       'auto',
    backgroundColor: 'white',
    color:           COLORS.textSecondary,
    position:        'sticky',
    bottom:          0,
});

const InnerContainer = styled('div')({
    display:    'flex',
    alignItems: 'center',
    maxWidth:   460,
    padding:    SPACING * 2.5,
    margin:     '0 auto',
});
