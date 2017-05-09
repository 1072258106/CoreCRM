import React from 'react';
import {Router, Route, IndexRoute} from 'dva/router';
import Layout from '../../components/Layout';
import Index from './Index';

export default (
  <Route path="/" component={Layout}>
    <IndexRoute component={Index}/>
  </Route>
);


