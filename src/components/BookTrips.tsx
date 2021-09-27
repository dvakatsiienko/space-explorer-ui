/* Components */
import { Button } from '.';

/* Instruments */
import * as gql from '../graphql';
import { cartItemsVar } from '../lib/typePolicies';

export const BookTrips: React.FC<BookTripsProps> = props => {
    const [ bookTripsMutation, { data }] = gql.useBookTripsMutation({
        variables: { launchIds: props.cartItems },
        onCompleted() {
            cartItemsVar([]);
        },
    });

    return data && data.bookTrips && !data.bookTrips.success ? (
        <p>{data.bookTrips.message}</p>
    ) : (
        <Button onClick = { () => bookTripsMutation() }>Book All</Button>
    );
};

/* Types */
interface BookTripsProps {
    cartItems: string[];
}
