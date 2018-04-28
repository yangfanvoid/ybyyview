import { stringify } from 'qs';
import request from '../utils/request';
//配置
const requestURL = 'http://10.11.32.144:8300/';

export async function queryProjectNotice() {
  return request('/api/project/notice');
}

export async function queryActivities() {
  return request('/api/activities');
}

export async function queryRule(params) {
  return request(`/api/rule?${stringify(params)}`);
}
//转快钱查询
export async function queryRuleFastMoney(params) {
  return request(requestURL + 'policy/fastMoney/getTempRecord', {
    method: 'POST',
    body: {
      ...params,
      method: 'post',
    },
  });
}
//转快钱暂存
export async function saveRuleFastMoney(params) {
  return request(requestURL + 'policy/fastMoney/saveToTemp', {
    method: 'POST',
    body: {
      ...params,
      method: 'post',
    },
  });
}
//转快钱提交
export async function submitRuleFastMoney(params) {
  return request(requestURL + 'policy/fastMoney/confirmByOne', {
    method: 'POST',
    body: {
      ...params,
      method: 'post',
    },
  });
}

export async function removeRule(params) {
  return request('/api/rule', {
    method: 'POST',
    body: {
      ...params,
      method: 'delete',
    },
  });
}

export async function addRule(params) {
  return request('/api/rule', {
    method: 'POST',
    body: {
      ...params,
      method: 'post',
    },
  });
}

export async function fakeSubmitForm(params) {
  return request(requestURL + 'policy/fastMoney/getTempRecord', {
    method: 'POST',
    body: params,
  });
}

export async function fakeChartData() {
  return request('/api/fake_chart_data');
}

export async function queryTags() {
  return request('/api/tags');
}

export async function queryBasicProfile() {
  return request('/api/profile/basic');
}

export async function queryAdvancedProfile() {
  return request('/api/profile/advanced');
}

export async function queryFakeList(params) {
  return request(`/api/fake_list?${stringify(params)}`);
}

export async function fakeAccountLogin(params) {
  return request('/api/login/account', {
    method: 'POST',
    body: params,
  });
}

export async function fakeRegister(params) {
  return request('/api/register', {
    method: 'POST',
    body: params,
  });
}

export async function queryNotices() {
  return request('/api/notices');
}
