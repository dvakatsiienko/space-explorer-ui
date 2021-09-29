/* Core */
import { HttpLink } from '@apollo/client';

export const httpLink = new HttpLink({
    uri: process.env.REACT_APP_GQL_URL,
});
