/* Core */
import { RouteComponentProps } from '@reach/router';

/* Components */
import { Loading, Header, LaunchTile } from '../components';

/* Instruments */
import * as gql from '../graphql';

export const Profile: React.FC<ProfileProps> = () => {
    const { data, loading, error } = gql.useUserProfileQuery({
        fetchPolicy: 'network-only',
    });

    if (loading) return <Loading />;
    if (error) return <p>ERROR: {error.message}</p>;
    if (data === undefined) return <p>ERROR</p>;

    const tripsListJSX = data?.userProfile?.trips.map(launch => {
        return <LaunchTile key={launch?.id} launch={launch} />;
    }) ?? <p>You haven't booked any trips</p>;

    return (
        <>
            <Header>My Trips</Header>

            {tripsListJSX}
        </>
    );
};

interface ProfileProps extends RouteComponentProps {}
