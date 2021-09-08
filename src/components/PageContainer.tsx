/* Core */
import styled from 'react-emotion';
import { Outlet } from 'react-router-dom';

/* Instruments */
import { unit, colors } from '../styles';

export const PageContainer: React.FC = props => {
    return (
        <>
            <Bar />

            <Container>
                <Outlet />
            </Container>
        </>
    );
};

/* Styles */
const Bar = styled('div')({
    flexShrink: 0,
    height: 12,
    backgroundColor: colors.primary,
});

const Container = styled('div')({
    display: 'flex',
    flexDirection: 'column',
    flexGrow: 1,
    width: '100%',
    maxWidth: 600,
    margin: '0 auto',
    padding: unit * 3,
    paddingBottom: unit * 5,
});
