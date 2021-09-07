/* Core */
import { RouteComponentProps } from '@reach/router';

/* Components */
import { Header, LaunchDetail, Loading } from '../components';
import { ActionButton } from '../containers';

/* Instruments */
import * as gql from '../graphql';

export const Launch: React.FC<LaunchProps> = props => {
    const { data, loading, error } = gql.useLaunchQuery({
        variables: { launchId: props.launchId ?? '' },
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

interface LaunchProps extends RouteComponentProps {
    launchId?: string;
}
