import { routerRedux } from 'dva/router'

export default {
  namespace: 'plans',

  state: {},
  reducers: {
    planSelected (state, { plan }) {
      return {
        ...state,
        signup: {
          plan,
        },
      }
    },
  },
  effects: {
    * gotSignupPage ({ payload }, { put }) {
      yield put({
        type: 'planSelected',
        plan: payload,
      })
      yield put(routerRedux.push('/signup'))
    },
  },
}
