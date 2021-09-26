/* Core */
import styled from 'styled-components';

/* Components */
import { cardClassName, getBackgroundImage } from './LaunchTile';

/* Instruments */
import * as gql from '../graphql';
import { SPACING } from '../styles';

export const LaunchDetail: React.FC<LaunchDetailProps> = props => {
    const { site, rocket } = props.launch;

    return (
        <Card
            style = {{
                backgroundImage: getBackgroundImage(props.launch.flightNumber),
            }}
        >
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
        height:       365,
        marginBottom: SPACING * 4,
    },
    cardClassName,
);

/* Types */
interface LaunchDetailProps {
    launch: gql.LaunchFragment;
}
