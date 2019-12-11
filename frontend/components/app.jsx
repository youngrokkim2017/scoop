import React from 'react';
import NavBarContainer from './nav_bar/nav_bar_container';
// import BusinessIndexContainer from './business/business_index_container';
import { AuthRoute, ProtectedRoute } from '../util/route_util';
// import BusinessFormContainer from './business_form/business_form_container';
import BusinessIndexContainer from '../components/business/business_index_container';
import BusinessShowContainer from '../components/business/business_show_container';
import CreateReviewContainer from '../components/reviews/review_form/create_review';
import EditReviewContainer from '../components/reviews/review_form/edit_review';
import GreetingContainer from '../components/greeting/greeting_container';
import LoginFormContainer from '../components/session/login_form_container';
import SignupFormContainer from '../components/session/signup_form_container';
import { Switch, Route } from 'react-router-dom';
import SearchContainer from '../components/search/search_container';
import SearchIndexContainer from '../components/search/search_slice/search_index_container';
import UserProfileContainer from '../components/user/user_profile_container';

const App = () => (
    <div>
        {/* <header>
            <h1>Scoop</h1>
            <NavBarContainer />
        </header> */}

        <Switch>
            <AuthRoute path="/login" component={LoginFormContainer} />
            <AuthRoute path="/signup" component={SignupFormContainer} />
            <ProtectedRoute exact path="businesses/new" component="{BusinessFormContainer}" />
            <Route exact path="/businesses" component={BusinessIndexContainer} />
            <Route exact path="/businesses/:businessId" component={BusinessShowContainer} />
            <Route exact path="/businesses/:businessId/reviews" component={CreateReviewContainer} />
            <Route exact path="/businesses/:businessId/reviews/:id/edit" component={EditReviewContainer} />
            {/* <Route exact path="/search" component={SearchContainer} /> */}
            {/* <Route exact path="/businesses/search" component={SearchContainer} /> */}
            {/* <Route exact path="/businesses/search" component={BusinessIndexContainer} /> */}
            {/* <Route path="/search/:searchTerm" component={SearchContainer} /> */}
            <Route exact path="/" component={GreetingContainer} />
            <Route exact path="/user/:id" component={UserProfileContainer} />
        </Switch>
    </div>
);

export default App;