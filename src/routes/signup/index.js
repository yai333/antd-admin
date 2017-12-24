import React from 'react'
import PropTypes from 'prop-types'
import { connect } from 'dva'
import { Steps, Button, Row, Form, Input, message, Icon } from 'antd'
import styles from './index.less'

const FormItem = Form.Item
const Step = Steps.Step

const Signup = ({
  loading,
  dispatch,
  form: { getFieldDecorator, validateFieldsAndScroll },
}) => {
  function handleOk () {
    validateFieldsAndScroll((errors, values) => {
      if (errors) {
        return
      }
      dispatch({ type: 'login/login', payload: values })
    })
  }

  const firstStep = (
    <Row>
      <div>111</div>
    </Row>
  )

  const secondStep = (
    <div className={styles.form}>
      <form>
        <FormItem hasFeedback>
          {getFieldDecorator('username', {
            rules: [
              {
                required: true,
              },
            ],
          })(<Input size="large" onPressEnter={handleOk} placeholder="Username" />)}
        </FormItem>
        <FormItem hasFeedback>
          {getFieldDecorator('password', {
            rules: [
              {
                required: true,
              },
            ],
          })(
            <Input
              size="large"
              type="password"
              onPressEnter={handleOk}
              placeholder="Password"
            />
          )}
        </FormItem>
        <Row>
          <Button
            type="primary"
            size="large"
            onClick={handleOk}
            loading={loading.effects.login}
          >
            Sign in
          </Button>
        </Row>
      </form>
    </div>
  )

  const steps = [
    {
      title: 'Plan',
      content: firstStep,
      icon: 'bars',
    },
    {
      title: 'Profile',
      content: secondStep,
      icon: 'user',
    },
    {
      title: 'Pay',
      content: 'Last-content',
      icon: 'loading',
    },
    {
      title: 'Done',
      content: 'Last-content',
      icon: 'smile-o',
    },
  ]

  return (
    <div className={styles.main}>
      <Steps current={0} style={{ backgroundColor: 'transparent' }}>
        {steps.map(item => (
          <Step key={item.title} icon={<Icon type={item.icon} />} title={item.title} />
        ))}
      </Steps>
      <div className={styles.stepsContent}>{steps[0].content}</div>
    </div>
  )
}

Signup.propTypes = {
  form: PropTypes.object,
  dispatch: PropTypes.func,
  loading: PropTypes.object,
}

export default connect(({ loading }) => ({ loading }))(Form.create()(Signup))
