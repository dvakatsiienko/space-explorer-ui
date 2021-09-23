/* Core */
import { render } from 'react-dom';
import { BrowserRouter as Router } from 'react-router-dom';

/* Components */
import { Pages } from './pages';

/* Instruments */
import { ApolloProvider } from './lib/ApolloProvider';
import { GlobalStyle } from './styles';

render(
    <>
        <Router>
            <ApolloProvider>
                <Pages />
            </ApolloProvider>
        </Router>

        <GlobalStyle />
    </>,
    document.getElementById('root'),
);
