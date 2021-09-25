/* Core */
import { Link } from 'react-router-dom';
import styled, { css } from 'styled-components';

/* Instruments */
import * as gql from '../graphql';
import galaxy from '../assets/images/galaxy.jpg';
import iss from '../assets/images/iss.jpg';
import moon from '../assets/images/moon.jpg';
import { SPACING } from '../styles';

export const LaunchTile: React.FC<LaunchTileProps> = props => {
    return (
        <StyledLink
            to={`/launches/${props.launch.id}`}
            style={{
                backgroundImage: getBackgroundImage(props.index),
            }}>
            <h3>{props.launch.mission.name}</h3>
            <h5>{props.launch.rocket.name}</h5>
        </StyledLink>
    );
};

/* Styles */
export const cardClassName = css({
    padding: `${SPACING * 4}px ${SPACING * 5}px`,
    borderRadius: 7,
    color: 'white',
    backgroundSize: 'cover',
    backgroundPosition: 'center',
});

const padding = SPACING * 2;
const StyledLink = styled(Link)(
    {
        display: 'block',
        height: 193,
        marginTop: padding,
        textDecoration: 'none',
        ':not(:last-child)': {
            marginBottom: padding * 2,
        },
    },
    cardClassName,
);

/* Helpers */
const backgrounds = [galaxy, iss, moon];

export function getBackgroundImage(index?: number) {
    const idx = index ? index : Math.floor(Math.random() * 3);
    const bg = idx % backgrounds.length;

    return `url(${backgrounds[bg]})`;
}

/* Types */
interface LaunchTileProps {
    launch: gql.LaunchFragment;
    index?: number;
}
