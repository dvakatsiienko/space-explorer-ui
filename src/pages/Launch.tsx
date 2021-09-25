/* Core */
import { useParams } from 'react-router-dom';

/* Components */
import { Header, LaunchDetail, Loading, ActionButton } from '../components';

/* Instruments */
import * as gql from '../graphql';

export const Launch: React.FC = () => {
    const params = useParams();
    const { data, loading, error } = gql.useLaunchQuery({
        variables: { launchId: params.launchId },
    });

    if (loading) return <Loading />;
    if (error) return <p>ERROR: {error.message}</p>;
    if (!data) return <p>Not found</p>;

    return (
        <>
            <Header image={data.launch?.mission?.missionPatch}>
                {data.launch?.mission?.name}
            </Header>

            <LaunchDetail {...data.launch} />

            <ActionButton {...data.launch} />
        </>
    );
};
