import {
  queryRuleFastMoney,
  saveRuleFastMoney,
  submitRuleFastMoney,
  queryBasicProfile,
  queryAdvancedProfile,
} from '../services/api';
import { message } from 'antd';

export default {
  namespace: 'profile',

  state: {
    basicGoods: [],
    advancedOperation1: [],
    advancedOperation2: [],
    advancedOperation3: [],
    data: {
      list: [],
      pagination: {},
    },
  },

  effects: {
    *fetchBasic(_, { call, put }) {
      const response = yield call(queryBasicProfile);
      yield put({
        type: 'save',
        payload: response,
      });
    },
    *fetchAdvanced(_, { call, put }) {
      const response = yield call(queryAdvancedProfile);
      yield put({
        type: 'save',
        payload: response,
      });
    },
    *fetchFastMoney({ payload }, { call, put }) {
      const response = yield call(queryRuleFastMoney, payload);
      yield put({
        type: 'save',
        payload: response,
      });
    },
    *saveFastMoney({ payload }, { call, put }) {
      const response = yield call(saveRuleFastMoney, payload);
      let alertMessage = response.message;
      '0' == message.code ? message.success('暂存成功') : message.error(alertMessage);
      yield put({
        type: 'save',
        payload: response,
      });
    },
    *submitFastMoney({ payload }, { call, put }) {
      const response = yield call(submitRuleFastMoney, payload);
      let alertMessage = response.message;
      '0' == message.code ? message.success('提交成功') : message.error(alertMessage);
      yield put({
        type: 'save',
        payload: response,
      });
    },
  },

  reducers: {
    save(state, { payload }) {
      return {
        ...state,
        ...payload,
      };
    },
  },
};
