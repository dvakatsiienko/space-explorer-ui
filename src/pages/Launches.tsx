/* Core */
import { useState } from 'react';

/* Components */
import { Header, LaunchTile, Loading, Button } from '../components';

/* Instruments */
import * as gql from '../graphql';

export const Launches: React.FC = () => {
    const { data, loading, error, fetchMore } = gql.useLaunchesQuery();
    const [isLoadingMore, setIsLoadingMore] = useState(false);

    if (loading) return <Loading />;
    if (error) return <pre>{JSON.stringify(error, null, 4)}</pre>;
    if (!data) return <p>Not found</p>;

    const launchesListJSX = data?.launches.list.map(launch => {
        return <LaunchTile key={launch.id} launch={launch} />;
    });

    const fetchMoreLaunches = async () => {
        setIsLoadingMore(true);

        await fetchMore({ variables: { after: data.launches.cursor } });

        setIsLoadingMore(false);
    };

    return (
        <>
            <Header />

            {launchesListJSX}

            {data.launches?.hasMore &&
                (isLoadingMore ? (
                    <Loading />
                ) : (
                    <Button onClick={fetchMoreLaunches}>Load More</Button>
                ))}
        </>
    );
};
