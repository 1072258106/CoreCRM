/**
 * Created by chenchen on 2017/5/9.
 */
import {Router, Route, IndexRoute} from 'dva/router';
import homeRoute from './Home/router';
import LoginRoute from './Account/router';

export function RouterConfig({history}) {
  return (
    <Router history={history}>
      { homeRoute }
      { LoginRoute }
    </Router>
  );
}
