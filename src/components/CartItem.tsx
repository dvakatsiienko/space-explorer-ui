/* Components */
import { LaunchTile } from '../components';

/* Instruments */
import * as gql from '../graphql';

export const CartItem: React.FC<CartItemProps> = props => {
    const { data, loading, error } = gql.useLaunchQuery({
        variables: { id: props.launchId },
    });

    if (loading) return <p>Loading...</p>;
    if (error) return <p>ERROR: {error.message}</p>;
    if (!data) return <p>Not found</p>;

    return <LaunchTile launch={data?.launch} />;
};

/* Types */
interface CartItemProps {
    launchId: string;
}
