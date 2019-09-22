import React from 'react';
import NavBarContainer from './nav_bar/nav_bar_container';
// import BusinessIndexContainer from './business/business_index_container';
import { AuthRoute, ProtectedRoute } from '../util/route_util';
import BusinessFormContainer from './business_form/business_form_container';


export const App = () => (
    <div>
        <header>
            <h1>Scoop</h1>
            <NavBarContainer />
        </header>

        <AuthRoute path="/login" component={LoginFormContainer} />
        <AuthRoute path="/signup" component={SignupFormContainer} />
        <ProtectedRoute exact path="businesses/new" component="{BusinessFormContainer}" />
        <Route exact path="/" component={SearchContainer} />
    </div>
);