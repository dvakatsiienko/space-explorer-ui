/* Core */
import { useState } from 'react';
import styled, { css } from 'styled-components';
import { size } from 'polished';

/* Components */
import { Button } from './TripButton';

/* Instruments */
import space from '../assets/images/space.jpg';
import { ReactComponent as Logo } from '../assets/logo.svg';
import { ReactComponent as Curve } from '../assets/curve.svg';
import { ReactComponent as Rocket } from '../assets/rocket.svg';
import { COLORS, SPACING } from '../styles';

export const LoginForm: React.FC<LoginFormProps> = props => {
    const [ email, setEmail ] = useState('');

    const onChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        const _email = (event.target as HTMLInputElement).value;

        setEmail(_email);
    };

    const onSubmit = (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault();

        props.login({ variables: { email } });
    };

    return (
        <Container>
            <Header>
                <StyledCurve />
                <StyledLogo />
            </Header>

            <StyledRocket />
            <Heading>Space Explorer</Heading>
            <StyledForm onSubmit = { onSubmit }>
                <StyledInput
                    required
                    name = 'email'
                    placeholder = 'Email'
                    type = 'email'
                    onChange = { onChange }
                />
                <Button type = 'submit'>Log in</Button>
            </StyledForm>
        </Container>
    );
};

/* Styles */
const Container = styled('div')({
    display:            'flex',
    flexDirection:      'column',
    alignItems:         'center',
    flexGrow:           1,
    paddingBottom:      SPACING * 6,
    color:              'white',
    backgroundColor:    COLORS.primary,
    backgroundImage:    `url(${space})`,
    backgroundSize:     'cover',
    backgroundPosition: 'center',
});

const svgClassName = css({
    display: 'block',
    fill:    'currentColor',
});

const Header = styled('header')(
    {
        width:        '100%',
        marginBottom: SPACING * 5,
        padding:      SPACING * 2.5,
        position:     'relative',
    },
    svgClassName,
);

const StyledLogo = styled(Logo)(size(56), {
    display:  'block',
    margin:   '0 auto',
    position: 'relative',
});

const StyledCurve = styled(Curve)(size('100%'), {
    fill:     COLORS.primary,
    position: 'absolute',
    top:      0,
    left:     0,
});

const Heading = styled('h1')({
    margin: `${SPACING * 3}px 0 ${SPACING * 6}px`,
});

const StyledRocket = styled(Rocket)(
    {
        width: 250,
    },
    svgClassName,
);

const StyledForm = styled('form')({
    width:           '100%',
    maxWidth:        406,
    padding:         SPACING * 3.5,
    borderRadius:    3,
    boxShadow:       '6px 6px 1px rgba(0, 0, 0, 0.25)',
    color:           COLORS.text,
    backgroundColor: 'white',
});

const StyledInput = styled('input')({
    width:        '100%',
    marginBottom: SPACING * 2,
    padding:      `${SPACING * 1.25}px ${SPACING * 2.5}px`,
    border:       `1px solid ${COLORS.grey}`,
    fontSize:     16,
    outline:      'none',
    ':focus':     {
        borderColor: COLORS.primary,
    },
});

/* Types */
interface LoginFormProps {
    login: (a: { variables: any }) => void;
}
