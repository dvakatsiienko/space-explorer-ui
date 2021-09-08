/* Core */
import { render } from 'react-dom';
import { BrowserRouter as Router } from 'react-router-dom';

/* Components */
import { Pages } from './pages';

/* Instruments */
import { ApolloProvider } from './lib/ApolloProvider';
import { injectStyles } from './styles';

injectStyles();

render(
    <Router>
        <ApolloProvider>
            <Pages />
        </ApolloProvider>
    </Router>,
    document.getElementById('root'),
);
