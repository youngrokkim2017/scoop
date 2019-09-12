import React from 'react';

import NavBarContainer from './nav_bar/nav_bar_container';

import { AuthRoute } from '../util/route_util';

export const App = () => (
    <div>
        <h1>Scoop
        <NavBarContainer />
        </h1>

        <AuthRoute path="/login" component={LoginFormContainer} />
        <AuthRoute path="/signup" component={SignupFormContainer} />
    </div>
);