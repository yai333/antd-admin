import React from 'react'
import PropTypes from 'prop-types'
import { connect } from 'dva'
import { Steps, Button, Row, Input, message, Icon, Col, Card } from 'antd'
import styles from './index.less'

const Mock = require('mockjs')

const Plans = ({ dispatch }) => {
  function gotoPlansPage (plan) {
    dispatch({ type: 'plans/gotSignupPage', payload: plan })
  }

  return (
    <div className={styles['main-body']}>
      <h1 className={styles['plans-h2-center']}>Safety Healthy Pricing</h1>
      <p className={styles['plans-body-center']}>
        {Mock.mock('@paragraph(1)')}
      </p>
      <Row type="flex" justify="center" className={styles['card-wrapper']}>
        <Col span={8}>
          <Card title="Basic" bordered={false} className={styles['plan-card']}>
            <div className={styles['plans-card-price-area']}>
              <span className={styles['plans-card-price-area-currency']}>
                $
              </span>
              <span className={styles['plans-card-price-area-amount']}>20</span>
              <span className={styles['plans-card-price-area-slash']}>/</span>
              <span className={styles['plans-card-price-area-term']}>
                month
              </span>
            </div>
            <p>{Mock.mock('@paragraph(2)')}</p>
            <div className={styles['plans-card-bottom-area']}>
              <a
                href="#"
                className={styles['plans-card-cta']}
                onClick={() => gotoPlansPage('basic')}
              >
                Get Basic
              </a>
            </div>
          </Card>
        </Col>
        <Col span={8}>
          <Card
            title="Pro"
            bordered={false}
            className={[styles['plan-card'], styles.pro]}
          >
            <div className={styles['plans-card-price-area']}>
              <span className={styles['plans-card-price-area-currency']}>
                $
              </span>
              <span className={styles['plans-card-price-area-amount']}>70</span>
              <span className={styles['plans-card-price-area-slash']}>/</span>
              <span className={styles['plans-card-price-area-term']}>
                month
              </span>
            </div>
            <p>{Mock.mock('@paragraph(2)')}</p>
            <div className={styles['plans-card-bottom-area']}>
              <a
                href="#"
                className={styles['plans-card-cta-pro']}
                onClick={() => gotoPlansPage('pro')}
              >
                Get Pro
              </a>
            </div>
          </Card>
        </Col>
        <Col span={8}>
          <Card
            title="Business"
            bordered={false}
            className={[styles['plan-card'], styles.business]}
          >
            <div className={styles['plans-card-price-area']}>
              <span className={styles['plans-card-price-area-currency']}>
                $
              </span>
              <span className={styles['plans-card-price-area-amount']}>
                200
              </span>
              <span className={styles['plans-card-price-area-slash']}>/</span>
              <span className={styles['plans-card-price-area-term']}>
                month
              </span>
            </div>
            <p>{Mock.mock('@paragraph(2)')}</p>
            <div className={styles['plans-card-bottom-area']}>
              <a
                href="#"
                className={[styles['plans-card-cta-business']]}
                onClick={() => gotoPlansPage('business')}
              >
                Get Business
              </a>
            </div>
          </Card>
        </Col>
      </Row>
    </div>
  )
}

Plans.propTypes = {
  dispatch: PropTypes.func,
}

export default connect()(Plans)
