/* Core */
import styled from 'styled-components';
import { lighten } from 'polished';

/* Instruments */
import { SPACING, COLORS } from '../styles';

const height = 50;

export const Button = styled('button')({
    display: 'block',
    minWidth: 200,
    height,
    margin: '0 auto',
    padding: `0 ${SPACING * 4}px`,
    border: 'none',
    borderRadius: height / 2,
    fontFamily: 'inherit',
    fontSize: 18,
    lineHeight: `${height}px`,
    fontWeight: 700,
    color: 'white',
    textTransform: 'uppercase',
    backgroundColor: COLORS.accent,
    cursor: 'pointer',
    outline: 'none',
    ':hover': {
        backgroundColor: lighten(0.1, COLORS.accent),
    },
    ':active': {
        backgroundColor: lighten(0.2, COLORS.accent),
    },
});
