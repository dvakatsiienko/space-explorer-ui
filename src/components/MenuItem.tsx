/* Core */
import styled, { css } from 'react-emotion';
import { Link } from 'react-router-dom';

/* Instruments */
import { colors, unit } from '../styles';

export const menuItemClassName = css({
    cursor: 'pointer',
    flexGrow: 1,
    width: 0,
    fontFamily: 'inherit',
    fontSize: 20,
    color: 'inherit',
    letterSpacing: 1.5,
    textTransform: 'uppercase',
    textAlign: 'center',
    svg: {
        display: 'block',
        width: 60,
        margin: `0 auto ${unit}px`,
        fill: colors.secondary,
    },
});

export const MenuItem = styled(Link)(menuItemClassName, {
    textDecoration: 'none',
});
