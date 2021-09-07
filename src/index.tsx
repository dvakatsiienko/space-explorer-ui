/* Core */
import {
    ApolloClient,
    NormalizedCacheObject,
    ApolloProvider,
    gql,
} from '@apollo/client';
import { render } from 'react-dom';

/* Components */
import { Pages } from './pages';

/* Instruments */
import { cache } from './cache';
import injectStyles from './styles';

export const typeDefs = gql`
    extend type Query {
        isLoggedIn: Boolean!
        cartItems: [ID!]!
    }
`;

const client: ApolloClient<NormalizedCacheObject> = new ApolloClient({
    cache,
    typeDefs,
    uri: 'http://localhost:4000/graphql',
    headers: {
        authorization: localStorage.getItem('token') || '',
    },
});

injectStyles();

render(
    <ApolloProvider client={client}>
        <Pages />
    </ApolloProvider>,
    document.getElementById('root'),
);
