/* Core */
import {
    ApolloProvider as NativeApolloProvider,
    ApolloClient,
    NormalizedCacheObject,
    gql,
    HttpLink,
    from,
} from '@apollo/client';
import { setContext } from '@apollo/client/link/context';
import { onError } from '@apollo/client/link/error';
import debug from 'debug';

/* Instruments */
import { cache } from './cache';
import { loggerLink } from './apollo-link-logger';

const logGql = debug('[GraphQL error]');

export const typeDefs = gql`
    extend type Query {
        isLoggedIn: Boolean!
        cartItems: [ID!]!
    }
`;

const errorLink = onError(net => {
    logGql('Operation:', net.operation);
    logGql('Response:', net.response);
    logGql(`Errors quantity: ${net.graphQLErrors?.length}`);

    if (net.graphQLErrors) {
        for (const error of net.graphQLErrors) {
            logGql(
                `Message: ${error.message}, Location: ${error.locations}, Path: ${error.path}`,
            );
        }
    }

    if (net.networkError) {
        logGql(`Network error: ${net.networkError}`);
    }
});
const httpLink = new HttpLink({
    uri: process.env.REACT_APP_GQL_URL,
});

const authLink = setContext((_, prevCtx) => {
    const token = localStorage.getItem('token') || '';

    const ctx = {
        headers: {
            ...prevCtx.headers,
            Authorization: token,
        },
    };

    return ctx;
});

const link = from([loggerLink, errorLink, authLink, httpLink]);

const client: ApolloClient<NormalizedCacheObject> = new ApolloClient({
    cache,
    typeDefs,
    link,
});

export const ApolloProvider: React.FC = props => {
    return (
        <NativeApolloProvider client={client}>
            {props.children}
        </NativeApolloProvider>
    );
};
