/* Core */
import styled from 'styled-components';

/* Components */
import { cardClassName, getBackgroundImage } from './LaunchTile';

/* Instruments */
import { SPACING } from '../styles';

export const LaunchDetail: React.FC<any> = props => {
    const { id, site, rocket } = props;

    return (
        <Card
            style={{
                backgroundImage: getBackgroundImage(id as string),
            }}>
            <h3>
                {rocket.name} ({rocket.type})
            </h3>
            <h5>{site}</h5>
        </Card>
    );
};

/* Styles */
const Card = styled('div')(
    {
        height: 365,
        marginBottom: SPACING * 4,
    },
    cardClassName,
);
