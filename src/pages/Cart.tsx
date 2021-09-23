/* Components */
import { Header, Loading, CartItem, BookTrips } from '../components';

/* Instruments */
import * as gql from '../graphql';

export const Cart: React.FC = () => {
    const { data, loading, error } = gql.useGetCartItemsQuery();

    if (loading) return <Loading />;
    if (error) return <p>ERROR: {error.message}</p>;

    return (
        <>
            <Header>My Cart</Header>

            {data?.cartItems?.length === 0 ? (
                <p>No items in your cart</p>
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
