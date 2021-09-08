/* Core */
import { useReactiveVar, Reference } from '@apollo/client';

/* Components */
import { Button } from '../components';

/* Instruments */
import * as gql from '../graphql';
import { cartItemsVar } from '../lib/cache';

const CancelTripButton: React.FC<ButtonProps> = ({ id }) => {
    const [mutate, { loading, error }] = gql.useCancelTripMutation({
        variables: { launchId: id },
        update(cache, response) {
            const cancelTrip = response.data?.cancelTrip;

            // Update the user's cached list of trips to remove the trip that
            // was just canceled.
            const launch = cancelTrip?.launches[0];

            cache.modify({
                id: cache.identify({
                    __typename: 'UserProfile',
                    id: localStorage.getItem('userId'),
                }),
                fields: {
                    trips(existingTrips: Reference[], { readField }) {
                        return existingTrips.filter(
                            tripRef => readField('id', tripRef) !== launch?.id,
                        );
                    },
                },
            });
        },
    });

    if (loading) return <p>Loading...</p>;
    if (error) return <p>An error occurred</p>;

    return (
        <div>
            <Button onClick={() => mutate()} data-testid={'action-button'}>
                Cancel This Trip
            </Button>
        </div>
    );
};

const ToggleTripButton: React.FC<ButtonProps> = ({ id }) => {
    const cartItems = useReactiveVar(cartItemsVar);
    const isInCart = id ? cartItems.includes(id) : false;

    return (
        <div>
            <Button
                onClick={() => {
                    if (id) {
                        cartItemsVar(
                            isInCart
                                ? cartItems.filter(itemId => itemId !== id)
                                : [...cartItems, id],
                        );
                    }
                }}
                data-testid={'action-button'}>
                {isInCart ? 'Remove from Cart' : 'Add to Cart'}
            </Button>
        </div>
    );
};

export const ActionButton: React.FC<ButtonProps> = props => {
    const { isBooked, id } = props;

    return isBooked ? (
        <CancelTripButton id={id} />
    ) : (
        <ToggleTripButton id={id} />
    );
};

/* Types */
interface ButtonProps {
    id: string;
    isBooked?: boolean;
}
