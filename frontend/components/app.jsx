import React from 'react';
import NavBarContainer from './nav_bar/nav_bar_container';
import BusinessIndexContainer from './business/business_index_container';
import { AuthRoute } from '../util/route_util';

export const App = () => (
    <div>
        <header>
            <h1>Scoop</h1>
            <NavBarContainer />
        </header>

        <AuthRoute path="/login" component={LoginFormContainer} />
        <AuthRoute path="/signup" component={SignupFormContainer} />
        <Route exact path="/" component={SearchContainer} />
    </div>
);