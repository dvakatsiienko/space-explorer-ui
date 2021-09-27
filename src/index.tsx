/* Core */
import { ApolloProvider } from '@apollo/client';
import { render } from 'react-dom';
import { BrowserRouter as Router } from 'react-router-dom';

/* Components */
import { Pages } from './pages';

/* Instruments */
import { client } from './lib/client';
import { GlobalStyle } from './styles';

render(
    <>
        <Router>
            <ApolloProvider client = { client }>
                <Pages />
            </ApolloProvider>
        </Router>

        <GlobalStyle />
    </>,
    document.getElementById('root'),
);
