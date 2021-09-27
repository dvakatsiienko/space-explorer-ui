/* Core */
import { useReactiveVar, Reference } from '@apollo/client';
import styled from 'styled-components';
import { lighten } from 'polished';

/* Instruments */
import { SPACING, COLORS } from '../styles';

/* Instruments */
import * as gql from '../graphql';
import { cartItemsVar } from '../lib/typePolicies';

export const TripButton: React.FC<TripButtonProps> = props => {
    const { isBooked, id } = props.launch;

    const cartItems = useReactiveVar(cartItemsVar);
    const isInCart = id ? cartItems.includes(id) : false;

    const [ cancelTripMutation, { loading, error }] = gql.useCancelTripMutation({
        variables: { tripId: props.tripId },
        update(cache) {
            cache.modify({
                id: cache.identify({
                    __typename: 'UserProfile',
                    id:         localStorage.getItem('userId'),
                }),
                fields: {
                    trips(existingTrips: Reference[], { readField }) {
                        return existingTrips.filter(
                            tripRef => readField('id', tripRef) !== props.tripId,
                        );
                    },
                },
            });
        },
    });

    if (loading) return <p>Loading...</p>;
    if (error) return <p>An error occurred</p>;

    const toggleTripInCart = () => {
        cartItemsVar(
            isInCart
                ? cartItems.filter(itemId => itemId !== id)
                : [ ...cartItems, id ],
        );
    };

    return (
        <Button
            onClick = { isBooked ? () => cancelTripMutation() : toggleTripInCart }
        >
            {isBooked && 'Cancel Trip'}
            {!isBooked && isInCart && 'Remove from Cart'}
            {!isBooked && !isInCart && 'Add to Cart'}
        </Button>
    );
};

const height = 50;

/* Styles */
export const Button = styled('button')({
    display:         'block',
    minWidth:        200,
    height,
    margin:          '0 auto',
    padding:         `0 ${SPACING * 4}px`,
    border:          'none',
    borderRadius:    height / 2,
    fontFamily:      'inherit',
    fontSize:        18,
    lineHeight:      `${height}px`,
    fontWeight:      700,
    color:           'white',
    textTransform:   'uppercase',
    backgroundColor: COLORS.accent,
    cursor:          'pointer',
    outline:         'none',
    ':hover':        {
        backgroundColor: lighten(0.1, COLORS.accent),
    },
    ':active': {
        backgroundColor: lighten(0.2, COLORS.accent),
    },
});

/* Types */
interface TripButtonProps {
    launch: gql.LaunchFragment;
    tripId: string;
}
