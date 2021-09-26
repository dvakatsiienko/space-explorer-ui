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

    if (loading) return <Loading />;
    if (error) return <p>ERROR: {error.message}</p>;
    if (!data) return <p>Not found</p>;

    return (
        <>
            <Header
                image = { data.launch?.mission?.missionPatch }
                title = { data.launch?.mission?.name }
            />

            <LaunchDetail launch = { data.launch } />

            <TripButton launch = { data.launch } />
        </>
    );
};
