/* Core */
import { RouteComponentProps } from '@reach/router';

/* Components */
import { Header, Loading } from '../components';
import { CartItem, BookTrips } from '../containers';

/* Instruments */
import * as gql from '../graphql';

export const Cart: React.FC<CartProps> = () => {
    const { data, loading, error } = gql.useGetCartItemsQuery();

    if (loading) return <Loading />;
    if (error) return <p>ERROR: {error.message}</p>;

    return (
        <>
            <Header>My Cart</Header>
            {data?.cartItems.length === 0 ? (
                <p data-testid="empty-message">No items in your cart</p>
            ) : (
                <>
                    {data?.cartItems.map((launchId: any) => (
                        <CartItem key={launchId} launchId={launchId} />
                    ))}
                    <BookTrips cartItems={data?.cartItems ?? []} />
                </>
            )}
        </>
    );
};

/* Types */
interface CartProps extends RouteComponentProps {}
