/* Components */
import { Loading, Header, LaunchTile } from '../components';

/* Instruments */
import * as gql from '../graphql';

export const Profile: React.FC = () => {
    const { data, loading, error } = gql.useUserProfileQuery({
        fetchPolicy: 'network-only',
    });

    if (loading) return <Loading />;
    if (error) return <p>ERROR: {error.message}</p>;
    if (!data) return <p>No data</p>;

    const tripsListJSX = data.userProfile?.trips.map(trip => {
        return (
            <LaunchTile key = { trip.id } launch = { trip.launch } trip = { trip } />
        );
    }) ?? [];

    return (
        <>
            <Header title = 'My Trips' />

            {tripsListJSX}
            {!tripsListJSX.length && <p>You haven't booked any trips</p>}
        </>
    );
};
