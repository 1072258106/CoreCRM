import React from 'react';
import { connect } from 'dva';
// import styles from './Index.css';

function View() {
  return (
    <div>客户管理/联系人详情</div>
  );
}

View.propTypes = {
};

export default connect()(View);
