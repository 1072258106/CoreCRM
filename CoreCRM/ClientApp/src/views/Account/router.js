import React from 'react';
import {Router, Route, IndexRedirect} from 'dva/router';
// import Login from './Login';

export default (
  <Route path="login" getComponent={ (next, callback) => {
    require.ensure([], () => {
      // console.log(require('./Login'));
      callback(null, require('./Login'))
    }, 'Login');
  } }/>
);

