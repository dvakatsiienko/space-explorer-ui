/* Core */
import { useParams } from 'react-router-dom';

/* Components */
import {
    Header, LaunchDetail, Loading, TripButton
} from '../components';

/* Instruments */
import * as gql from '../graphql';

export const Launch: React.FC = () => {
    const params = useParams();
    const { data, loading, error } = gql.useLaunchQuery({
        variables: { id: params.launchId },
    });
    const userProfileQuery = gql.useUserProfileQuery({
        fetchPolicy: 'network-only',
    });

    if (loading || userProfileQuery.loading) return <Loading />;
    if (error) return <p>ERROR: {error.message}</p>;
    if (!data || !userProfileQuery.data?.userProfile) return <p>Not found</p>;

    const tripId = userProfileQuery.data?.userProfile?.trips.find(
        _trip => _trip.launch.id === params.launchId,
    )?.id ?? '';

    return (
        <>
            <Header
                image = { data.launch?.mission?.missionPatch }
                title = { data.launch?.mission?.name }
            />

            <LaunchDetail launch = { data.launch } />

            <TripButton launch = { data.launch } tripId = { tripId } />
        </>
    );
};
