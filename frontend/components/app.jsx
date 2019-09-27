import React from 'react';
import NavBarContainer from './nav_bar/nav_bar_container';
// import BusinessIndexContainer from './business/business_index_container';
import { AuthRoute, ProtectedRoute } from '../util/route_util';
import BusinessFormContainer from './business_form/business_form_container';
import BusinessIndexContainer from '../components/business/business_index_container';
import BusinessShowContainer from '../components/business/business_show_container';
import CreateReviewContainer from '../components/reviews/review_form/create_review';
import EditReviewContainer from '../components/reviews/review_form/edit_review';

export const App = () => (
    <div>
        {/* <header>
            <h1>Scoop</h1>
            <NavBarContainer />
        </header> */}

        <Swtich>
            <AuthRoute path="/login" component={LoginFormContainer} />
            <AuthRoute path="/signup" component={SignupFormContainer} />
            <ProtectedRoute exact path="businesses/new" component="{BusinessFormContainer}" />
            <Route exact path="/" component={SearchContainer} />
            <Route exact path="/businesses" component={BusinessIndexContainer} />
            <Route exact path="/businesses/:businessId" component={BusinessShowContainer} />
            <Route exact path="/businesses/:businessId/reviews" component={CreateReviewContainer} />
            <Route exact path="/businesses/:businessId/reviews/:id/edit" component={EditReviewContainer} />
        </Swtich>
    </div>
);