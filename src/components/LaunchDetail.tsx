/* Core */
import styled from 'react-emotion';

/* Components */
import { cardClassName, getBackgroundImage } from './LaunchTile';

/* Instruments */
import { unit } from '../styles';

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
const Card = styled('div')(cardClassName, {
    height: 365,
    marginBottom: unit * 4,
});
