import React from 'react';
import { Switch, Route, Redirect } from 'react-router';

import Dashboard from '../dashboard/dashboard';
import BillingCycle from '../billingCycle/billingCycle';

export default porps => (
  <div className='content-wrapper'>
    <Switch>
      <Route exact path='/' component={Dashboard} />
      <Route path='/billingCycles' component={BillingCycle} />
      <Redirect from='*' to='/' />
    </Switch>
  </div>
);
