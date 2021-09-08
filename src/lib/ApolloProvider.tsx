/* Core */
import {
    ApolloProvider as NativeApolloProvider,
    ApolloClient,
    NormalizedCacheObject,
    gql,
} from '@apollo/client';

/* Instruments */
import { cache } from './cache';

export const typeDefs = gql`
    extend type Query {
        isLoggedIn: Boolean!
        cartItems: [ID!]!
    }
`;

const client: ApolloClient<NormalizedCacheObject> = new ApolloClient({
    cache,
    typeDefs,
    uri: process.env.REACT_APP_GQL_URL,
    headers: {
        authorization: localStorage.getItem('token') || '',
    },
});

export const ApolloProvider: React.FC = props => {
    return (
        <NativeApolloProvider client={client}>
            {props.children}
        </NativeApolloProvider>
    );
};
