import React from 'react';
import { connect } from 'dva';
// import styles from './Index.css';

function Statistics() {
  return (
    <div>客户管理/客户统计</div>
  );
}

Statistics.propTypes = {
};

export default connect()(Statistics);
