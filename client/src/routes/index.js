import React from 'react';

import { Switch, BrowserRouter as Router } from 'react-router-dom';
import Route from 'react-router-dom/Route';
import HomePage from '../pages/HomePage';
import AuthorPage from '../pages/AuthorPage';

function Routes(props) {
    return (
        <Router>
            <Switch>
                <Route key="home" path="/" exact render={() => <HomePage />} />
                <Route key="author" path="/author" exact render={() => <AuthorPage />} />
                <Route key="nopage" render={() => <div>404 Page</div>} />
            </Switch>
        </Router>
    );
}

export default Routes;
