import React from 'react'
import PropTypes from 'prop-types'
import { connect } from 'dva'
import {
  Steps,
  Button,
  Row,
  Form,
  Input,
  Select,
  Tooltip,
  Checkbox,
  DatePicker,
  Col,
  Icon,
} from 'antd'
import moment from 'moment'
import 'moment/locale/en-au'
import styles from './index.less'

moment.locale('en-AU')
const FormItem = Form.Item
const Step = Steps.Step
const Option = Select.Option
const { MonthPicker } = DatePicker

const ShopCart = () => {
  return (
    <div className={styles['order-review']}>
      <Row>
        <h1>Order Review</h1>
        <div>Description</div>
        <div className={styles['item-name']}>
          <strong>Safety Healthy Plan - Pro</strong>
        </div>
        <div>Term</div>
        <Select
          defaultValue="1"
          style={{ width: 120, marginBottom: 10 }}
          // onChange={handleChange}
        >
          <Option value="0.3">3 months</Option>
          <Option value="1">1 year</Option>
          <Option value="2">2 years</Option>
          <Option value="3">3 years</Option>
        </Select>

        <div>Price</div>
        <div className={styles['price-promo']}>
          $ <span>168.00 </span>
        </div>
      </Row>
      <Row>
        <div className={styles['total-price-content']}>
          <Row>
            <Col xs={24} sm={{ span: 6, offset: 13 }}>
              <span className="tooltip_tax">GST</span>
              <h2>Total Order</h2>
            </Col>
            <Col xs={24} sm={{ span: 4, offset: 1 }}>
              $<span>16.80</span>
              <h2>$184.80</h2>
            </Col>
          </Row>
        </div>
      </Row>
    </div>
  )
}

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
  function checkPassword () {}

  function checkConfirm () {}

  function handleSubmit () {}

  function handleConfirmBlur () {}

  const formItemLayout = {
    labelCol: {
      xs: { span: 24 },
      sm: { span: 8 },
    },
    wrapperCol: {
      xs: { span: 24 },
      sm: { span: 10, offset: -6 },
    },
  }

  const tailFormItemLayout = {
    wrapperCol: {
      xs: {
        span: 24,
        offset: 0,
      },
      sm: {
        span: 10,
        offset: 8,
      },
    },
  }

  const shortFormLayout = {
    labelCol: {
      xs: { span: 24 },
      sm: { span: 8 },
    },
    wrapperCol: {
      xs: {
        span: 24,
        offset: 0,
      },
      sm: { span: 5, offset: -6 },
    },
  }

  const prefixSelector = getFieldDecorator('prefix', {
    initialValue: '86',
  })(
    <Select style={{ width: 70 }}>
      <Option value="61">+61</Option>
    </Select>
  )

  const registerStep = (
    <div className={styles.form}>
      <Form onSubmit={handleSubmit}>
        <FormItem {...formItemLayout} label="E-mail">
          {getFieldDecorator('email', {
            rules: [
              {
                type: 'email',
                message: 'The input is not valid E-mail!',
              },
              {
                required: true,
                message: 'Please input your E-mail!',
              },
            ],
          })(<Input />)}
        </FormItem>
        <FormItem {...formItemLayout} label="Password">
          {getFieldDecorator('password', {
            rules: [
              {
                required: true,
                message: 'Please input your password!',
              },
              {
                validator: checkConfirm,
              },
            ],
          })(<Input type="password" />)}
        </FormItem>
        <FormItem {...formItemLayout} label="Confirm Password">
          {getFieldDecorator('confirm', {
            rules: [
              {
                required: true,
                message: 'Please confirm your password!',
              },
              {
                validator: checkPassword,
              },
            ],
          })(<Input type="password" onBlur={handleConfirmBlur} />)}
        </FormItem>
        <FormItem
          {...formItemLayout}
          label={
            <span>
              Nickname&nbsp;
              <Tooltip title="What do you want others to call you?">
                <Icon type="question-circle-o" />
              </Tooltip>
            </span>
          }
        >
          {getFieldDecorator('nickname', {
            rules: [
              {
                required: true,
                message: 'Please input your nickname!',
                whitespace: true,
              },
            ],
          })(<Input />)}
        </FormItem>
        <FormItem {...formItemLayout} label="Country" hasFeedback>
          {getFieldDecorator('select', {
            rules: [{ required: true, message: 'Please select your country!' }],
          })(
            <Select placeholder="Please select a country">
              <Option value="china">Australia</Option>
            </Select>
          )}
        </FormItem>
        <FormItem {...formItemLayout} label="Address">
          {getFieldDecorator('address', {
            rules: [
              {
                required: true,
                message: 'Please input your address',
              },
            ],
          })(<Input placeholder="Please input your address" />)}
        </FormItem>
        <FormItem {...formItemLayout} label="State" hasFeedback>
          {getFieldDecorator('select', {
            rules: [{ required: true, message: 'Please select your state!' }],
          })(
            <Select placeholder="Please select a state">
              <Option value="china">NSW</Option>
              <Option value="china">NT</Option>
              <Option value="china">SA</Option>
              <Option value="china">TAS</Option>
              <Option value="china">VIC</Option>
              <Option value="china">WA</Option>
            </Select>
          )}
        </FormItem>
        <FormItem {...formItemLayout} label="Phone Number">
          {getFieldDecorator('phone', {
            rules: [
              { required: true, message: 'Please input your phone number!' },
            ],
          })(<Input addonBefore={prefixSelector} style={{ width: '100%' }} />)}
        </FormItem>
        <FormItem
          {...formItemLayout}
          label="Captcha"
          extra="We must make sure that your are a human."
        >
          <Row gutter={8}>
            <Col span={12}>
              {getFieldDecorator('captcha', {
                rules: [
                  {
                    required: true,
                    message: 'Please input the captcha you got!',
                  },
                ],
              })(<Input />)}
            </Col>
            <Col span={12}>
              <Button>Get captcha</Button>
            </Col>
          </Row>
        </FormItem>
        <FormItem {...tailFormItemLayout}>
          {getFieldDecorator('agreement', {
            valuePropName: 'checked',
          })(
            <Checkbox>
              I have read the <a href="">agreement</a>
            </Checkbox>
          )}
        </FormItem>
        <FormItem {...tailFormItemLayout}>
          <Button type="primary" htmlType="submit">
            CONTINUE ORDER
          </Button>
        </FormItem>
      </Form>
    </div>
  )

  const paymentStep = (
    <Row>
      <Col xs={24} sm={12}>
        <ShopCart />
      </Col>
      <Col xs={24} sm={12}>
        <h1 className={styles['payment-title']}>Payment</h1>
        <div className={styles.form}>
          <Form onSubmit={handleSubmit}>
            <FormItem
              {...formItemLayout}
              label={<span>Card Number&nbsp;</span>}
            >
              {getFieldDecorator('card-number', {
                rules: [
                  {
                    required: true,
                    message: 'Please input your Card Number!',
                    whitespace: true,
                  },
                ],
              })(<Input />)}
            </FormItem>
            <FormItem label="Card Expiry" {...formItemLayout}>
              <Col span={11}>
                <FormItem>
                  <Select
                    defaultValue="2017"
                    // onChange={handleChange}
                  >
                    <Option value="2017">2017</Option>
                    <Option value="2018">2018</Option>
                    <Option value="2019">2018</Option>
                    <Option value="2020">2020</Option>
                  </Select>
                </FormItem>
              </Col>
              <Col span={2}>
                <span
                  style={{
                    display: 'inline-block',
                    width: '100%',
                    textAlign: 'center',
                  }}
                >
                  -
                </span>
              </Col>
              <Col span={11}>
                <FormItem>
                  <MonthPicker placeholder="Month" />
                </FormItem>
              </Col>
            </FormItem>
            <FormItem
              {...shortFormLayout}
              label={<span>Security Number&nbsp;</span>}
            >
              {getFieldDecorator('security-number', {
                rules: [
                  {
                    required: true,
                    message: 'Please input your Security Number!',
                    whitespace: true,
                  },
                ],
              })(<Input />)}
            </FormItem>
            <FormItem {...tailFormItemLayout}>
              <Button type="primary" htmlType="submit">
                PAY & ACTIVATE
              </Button>
            </FormItem>
          </Form>
        </div>
      </Col>
    </Row>
  )

  const steps = [
    {
      title: 'Register',
      content: registerStep,
      icon: 'user',
    },
    {
      title: 'Payment',
      content: paymentStep,
      icon: 'lock',
    },
    {
      title: 'Complete',
      content: 'Last-content',
      icon: 'smile-o',
    },
  ]

  return (
    <div className={styles.main}>
      <Steps current={0}>
        {steps.map(item => (
          <Step
            key={item.title}
            icon={<Icon type={item.icon} />}
            title={item.title}
          />
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
