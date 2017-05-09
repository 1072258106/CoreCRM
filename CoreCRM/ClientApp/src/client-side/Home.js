import dva from 'dva';
import {hashHistory} from 'dva/router';
import '../views/Shared/Shared.css';

// 1. Initialize
const app = dva({
  history: hashHistory,
});

// 2. Plugins
// app.use({});

// 3. Model
app.model(require('../models/navigationBar'));

// 4. Router
app.router(require('../views/routerConfig').RouterConfig);

// 5. Start
app.start('#root');
