/* Core */
import { ApolloClient, InMemoryCache, from } from '@apollo/client';
import logger from 'apollo-link-logger';

/* Instruments */
import { typeDefs } from './typeDefs';
import { typePolicies } from './typePolicies';
import { errorLink, authLink, httpLink } from './links';

const cache = new InMemoryCache({ typePolicies });
const link = from([ logger, errorLink, authLink, httpLink ]);

export const client = new ApolloClient({
    cache,
    typeDefs,
    link,
});
