/* Core */
import styled from 'styled-components';
import { size } from 'polished';

/* Instruments */
import { SPACING, COLORS } from '../styles';
import dog1 from '../assets/images/dog-1.png';
import dog2 from '../assets/images/dog-2.png';
import dog3 from '../assets/images/dog-3.png';

export const Header: React.FC<HeaderProps> = props => {
    const { image, title } = props;
    const email = window.atob(localStorage.getItem('token') as string);
    const avatar = image || pickAvatarByEmail('test@email.com');

    return (
        <Container>
            <Image alt = 'Space dog' round = { !image } src = { avatar } />
            <div>
                <h2>{title}</h2>
                <Subheading>{email}</Subheading>
            </div>
        </Container>
    );
};

/* Styles */
const Container = styled('div')({
    display:      'flex',
    alignItems:   'center',
    marginBottom: SPACING * 4.5,
});

const Image = styled('img')(size(134), (props: { round: boolean }) => ({
    marginRight:  SPACING * 2.5,
    borderRadius: props.round ? '50%' : '0%',
}));

const Subheading = styled('h5')({
    marginTop: SPACING / 2,
    color:     COLORS.textSecondary,
});

/* Helpers */
const max = 25; // 25 letters in the alphabet
const offset = 97; // letter A's charcode is 97
const avatars = [ dog1, dog2, dog3 ];
const maxIndex = avatars.length - 1;

function pickAvatarByEmail(email: string) {
    const charCode = email.toLowerCase().charCodeAt(0) - offset;
    const percentile = Math.max(0, Math.min(max, charCode)) / max;

    return avatars[ Math.round(maxIndex * percentile) ];
}

/* Types */
interface HeaderProps {
    title: string;
    image?: string;
}
