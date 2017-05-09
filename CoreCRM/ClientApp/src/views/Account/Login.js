import React, { PropTypes } from 'react';
import { connect } from 'dva';
import { Form, Input, Checkbox, Button, Icon } from 'antd';
import styles from './Login.less';

const Login = (props) => {
  const { loading, dispatch } = props;
  const { getFieldDecorator, validateFieldsAndScroll } = props.form;

  function handleOk(e) {
    validateFieldsAndScroll((errors, values) => {
      if (errors) {
        e.preventDefault();
      } else {
        dispatch({ type: 'account/login', payload: values });
      }
    });
  }

  return (
    <div className={styles.form}>
      <div className={styles.logo}>
        <img alt={'logo'} src="https://t.alipayobjects.com/images/T1QUBfXo4fXXXXXXXX.png" />
        <span>CoreCRM</span>
      </div>
      <Form onSubmit={handleOk}>
        <Form.Item hasFeedback>
          {getFieldDecorator('Account', {
            rules: [
              {
                required: true,
                message: '请输入您的用户名或邮箱',
              },
            ],
          })(<Input prefix={<Icon type="user" style={{ fontSize: 13 }} />} size="large" placeholder="用户名/邮箱" />)}
        </Form.Item>
        <Form.Item hasFeedback>
          {getFieldDecorator('Password', {
            rules: [
              {
                required: true,
                message: '请输入密码',
              },
            ],
          })(<Input prefix={<Icon type="lock" style={{ fontSize: 13 }} />} size="large" type="password" placeholder="密码" />)}
        </Form.Item>
        <Form.Item>
          {getFieldDecorator('RememberThisWeek', {
            valuePropName: 'checked',
            initialValue: true,
          })(<Checkbox>本周不用登录</Checkbox>)}
          <Button type="primary" size="large" loading={loading} htmlType="submit">登录</Button>
        </Form.Item>
      </Form>
    </div>
  );
};

Login.propTypes = {
  form: PropTypes.object,
  loading: PropTypes.bool,
  dispatch: PropTypes.func,
};

export default connect(state => ({ loading: false }))(Form.create()(Login));
