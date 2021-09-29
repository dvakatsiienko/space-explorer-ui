/* Components */
import { LaunchTile } from './LaunchTile';

/* Instruments */
import * as gql from '../graphql';

export const CartItem: React.FC<CartItemProps> = props => {
    const launchQuery = gql.useLaunchQuery({
        variables: { id: props.launchId },
    });
    const { data, loading } = launchQuery;

    if (loading) return <p>Loading...</p>;
    if (!data) return <p>Not found</p>;

    return <LaunchTile launch = { data.launch } />;
};

/* Types */
interface CartItemProps {
    launchId: string;
}
