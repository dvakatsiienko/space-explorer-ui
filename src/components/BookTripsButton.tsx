/* Components */
import { Button } from '.';

/* Instruments */
import * as gql from '../graphql';
import { cartItemsVar } from '../lib/typePolicies';

export const BookTripsButton: React.FC<BookTripsButtonProps> = props => {
    const [ bookTripsMutation, { data }] = gql.useBookTripsMutation({
        variables: { launchIds: props.cartItems },
        onCompleted() {
            cartItemsVar([]);
        },
    });

    if (data?.bookTrips.length) {
        return <p>Trips booked.</p>;
    }

    return <Button onClick = { () => bookTripsMutation() }>Book All</Button>;
};

/* Types */
interface BookTripsButtonProps {
    cartItems: string[];
}
