import React from 'react';
import {Router, Route, IndexRedirect} from 'dva/router';
import Login from './Login';

export default (
  <Route path="login" component={Login}/>
);

