/* Components */
import { Button } from '../components';

/* Instruments */
import * as gql from '../graphql';
import { cartItemsVar } from '../cache';

export const BookTrips: React.FC<BookTripsProps> = props => {
    const [bookTrips, { data }] = gql.useBookTripsMutation({
        variables: { launchIds: props.cartItems },
        onCompleted() {
            cartItemsVar([]);
        },
    });

    return data && data.bookTrips && !data.bookTrips.success ? (
        <p data-testid="message">{data.bookTrips.message}</p>
    ) : (
        <Button onClick={() => bookTrips()} data-testid="book-button">
            Book All
        </Button>
    );
};

/* Types */
interface BookTripsProps {
    cartItems: string[];
}
