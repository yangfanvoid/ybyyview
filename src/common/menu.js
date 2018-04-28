import { isUrl } from '../utils/utils';

const menuData = [
  {
    name: '消息管理',
    icon: 'message',
    path: 'message-manage',
    children: [
      {
        name: '消息读取页面',
        path: 'message-form',
      },
      {
        name: '任务处理界面',
        path: 'task-form',
      },
    ],
  },
  {
    name: '投保管理',
    icon: 'folder-open',
    path: 'apply-manage',
    children: [
      {
        name: '投保单查询',
        path: 'apply-list',
      },
      {
        name: '自建渠道投保',
        path: 'selfchannel-form',
      },
      {
        name: '自建渠道质检审核',
        path: 'selfchannel-audit',
      },
    ],
  },
  {
    name: '保单批改',
    icon: 'edit',
    path: 'correction',
    children: [
      {
        name: '保单注退批改',
        path: 'cancel-correction',
      },
      {
        name: '非犹豫期退保退费审核',
        path: 'cancel-audit',
      },
      {
        name: '客户信息批改',
        path: 'basic-correction',
      },
      {
        name: '客户信息批改审核',
        path: 'basic-audit',
      },
      {
        name: '取消续保批改',
        path: 'review-correction',
      },
      {
        name: '转快钱批改',
        path: 'fastmoney-correction',
      },
    ],
  },
  {
    name: '续保管理',
    icon: 'folder-add',
    path: 'renewal-manage',
    children: [
      {
        name: '续保查询',
        path: 'renewal-list',
      },
      {
        name: '续保情况汇总展示',
        path: 'renewal-display',
      },
    ],
  },
  {
    name: '请扣款管理',
    icon: 'pay-circle-o',
    path: 'finance-manage',
    children: [
      {
        name: '请扣款清单查询',
        path: 'finance-list',
      },
    ],
  },
  {
    name: '查询功能',
    icon: 'table',
    path: 'query-manage',
    children: [
      {
        name: '保单信息查询',
        path: 'policy-query',
      },
      {
        name: '保单详情页（x）',
        path: 'policy-list',
      },
      {
        name: '理赔信息查询',
        path: 'claim-form',
      },
    ],
  },
  {
    name: '报表功能',
    icon: 'line-chart',
    path: 'report-manage',
    children: [
      {
        name: '整体情况汇总',
        path: 'basic-report',
      },
      {
        name: '个性报表取数',
        path: 'free-report',
      },
      {
        name: '固定报表取数',
        authority: 'admin',
        path: 'absolute-report',
      },
      {
        name: '财务对账报表',
        path: 'finance-report',
      },
    ],
  },
  {
    name: '快递管理',
    icon: 'gift',
    path: 'express-manage',
    children: [
      {
        name: '快递、回执单查询',
        path: 'express-route',
      },
      {
        name: '快递费用管理查询',
        path: 'express-charge',
      },
      {
        name: '回执单扫码入库',
        authority: 'admin',
        path: 'receipt-scan',
      },
    ],
  },
  {
    name: '保单打印',
    icon: 'printer',
    path: 'policy-print',
    children: [
      {
        name: '保单打印查询',
        path: 'print-list',
      },
    ],
  },
  {
    name: '销售方案管理',
    icon: 'schedule',
    path: 'sales-plan',
    children: [
      {
        name: '添加销售方案',
        path: 'plan-add',
      },
    ],
  },
  {
    name: '自动任务管理',
    icon: 'like-o',
    path: 'quartz-manage',
    children: [
      {
        name: 'job管理',
        path: 'quartz-manage',
      },
      {
        name: '自动任务列表管理',
        path: 'quartz-list',
      },
      {
        name: 'job任务配置',
        authority: 'admin',
        path: 'quartz-assign',
      },
    ],
  },
  {
    name: 'dashboard',
    icon: 'dashboard',
    path: 'dashboard',
    children: [
      {
        name: '分析页',
        path: 'analysis',
      },
      {
        name: '监控页',
        path: 'monitor',
      },
      {
        name: '工作台',
        path: 'workplace',
        // hideInBreadcrumb: true,
        // hideInMenu: true,
      },
    ],
  },
  {
    name: '表单页',
    icon: 'form',
    path: 'form',
    children: [
      {
        name: '基础表单',
        path: 'basic-form',
      },
      {
        name: '分步表单',
        path: 'step-form',
      },
      {
        name: '高级表单',
        authority: 'admin',
        path: 'advanced-form',
      },
    ],
  },
  {
    name: '列表页',
    icon: 'table',
    path: 'list',
    children: [
      {
        name: '查询表格',
        path: 'table-list',
      },
      {
        name: '标准列表',
        path: 'basic-list',
      },
      {
        name: '卡片列表',
        path: 'card-list',
      },
      {
        name: '搜索列表',
        path: 'search',
        children: [
          {
            name: '搜索列表（文章）',
            path: 'articles',
          },
          {
            name: '搜索列表（项目）',
            path: 'projects',
          },
          {
            name: '搜索列表（应用）',
            path: 'applications',
          },
        ],
      },
    ],
  },
  {
    name: '详情页',
    icon: 'profile',
    path: 'profile',
    children: [
      {
        name: '基础详情页',
        path: 'basic',
      },
      {
        name: '高级详情页',
        path: 'advanced',
        authority: 'admin',
      },
    ],
  },
  {
    name: '结果页',
    icon: 'check-circle-o',
    path: 'result',
    children: [
      {
        name: '成功',
        path: 'success',
      },
      {
        name: '失败',
        path: 'fail',
      },
    ],
  },
  {
    name: '异常页',
    icon: 'warning',
    path: 'exception',
    children: [
      {
        name: '403',
        path: '403',
      },
      {
        name: '404',
        path: '404',
      },
      {
        name: '500',
        path: '500',
      },
      {
        name: '触发异常',
        path: 'trigger',
        hideInMenu: true,
      },
    ],
  },
  {
    name: '账户',
    icon: 'user',
    path: 'user',
    authority: 'guest',
    children: [
      {
        name: '登录',
        path: 'login',
      },
      {
        name: '注册',
        path: 'register',
      },
      {
        name: '注册结果',
        path: 'register-result',
      },
    ],
  },
];

function formatter(data, parentPath = '/', parentAuthority) {
  return data.map(item => {
    let { path } = item;
    if (!isUrl(path)) {
      path = parentPath + item.path;
    }
    const result = {
      ...item,
      path,
      authority: item.authority || parentAuthority,
    };
    if (item.children) {
      result.children = formatter(item.children, `${parentPath}${item.path}/`, item.authority);
    }
    return result;
  });
}

export const getMenuData = () => formatter(menuData);
