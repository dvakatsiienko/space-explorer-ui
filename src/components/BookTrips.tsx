/* Components */
import { Button } from '.';

/* Instruments */
import * as gql from '../graphql';
import { cartItemsVar } from '../lib/cache';

export const BookTrips: React.FC<BookTripsProps> = props => {
    const [ bookTrips, { data }] = gql.useBookTripsMutation({
        variables: { launchIds: props.cartItems },
        onCompleted() {
            cartItemsVar([]);
        },
    });

    return data && data.bookTrips && !data.bookTrips.success ? (
        <p>{data.bookTrips.message}</p>
    ) : (
        <Button onClick = { () => bookTrips() }>Book All</Button>
    );
};

/* Types */
interface BookTripsProps {
    cartItems: string[];
}
