import { isUrl } from '../utils/utils';

const menuData = [
  {
    name: '消息管理',
    icon: 'form',
    path: 'form',
    children: [
      {
        name: '消息读取页面',
        path: 'basic-form',
      },
      {
        name: '任务处理界面',
        path: 'step-form',
      },
    ],
  },
  {
    name: '投保管理',
    icon: 'form',
    path: 'InsuranceManage',
    children: [
      {
        name: '投保单查询',
        path: 'InsuranceList',
      },
      {
        name: '自建渠道的投保',
        path: 'step-form',
      },
    ],
  },
  {
    name: '续保管理',
    icon: 'form',
    path: 'form',
    children: [
      {
        name: '续保查询',
        path: 'basic-form',
      },
      {
        name: '续保情况汇总展示',
        path: 'step-form',
      },
    ],
  },
  {
    name: '保单注退管理',
    icon: 'form',
    path: 'form',
    children: [
      {
        name: '不涉及网银的退保退费',
        path: 'basic-form',
      },
      {
        name: '无退费退保（保单注销）',
        path: 'step-form',
      },
      {
        name: '犹豫期内的退费退保',
        authority: 'admin',
        path: 'advanced-form',
      },
    ],
  },
  {
    name: '请扣款管理',
    icon: 'form',
    path: 'form',
    children: [
      {
        name: '请扣款清单查询',
        path: 'basic-form',
      },
    ],
  },
  {
    name: '查询功能',
    icon: 'form',
    path: 'form',
    children: [
      {
        name: '保单信息查询',
        path: 'basic-form',
      },
      {
        name: '理赔信息查询',
        path: 'step-form',
      },
    ],
  },
  {
    name: '转块钱',
    icon: 'form',
    path: 'form',
    children: [
      {
        name: '转块钱',
        path: 'basic-form',
      },
    ],
  },
  {
    name: '报表功能',
    icon: 'form',
    path: 'form',
    children: [
      {
        name: '整体情况汇总',
        path: 'basic-form',
      },
      {
        name: '个性报表取数',
        path: 'step-form',
      },
      {
        name: '固定报表取数',
        authority: 'admin',
        path: 'advanced-form',
      },
      {
        name: '财务对账报表',
        authority: 'admin',
        path: 'advanced-form',
      },
    ],
  },
  {
    name: '快递管理',
    icon: 'form',
    path: 'form',
    children: [
      {
        name: '快递、回执单查询',
        path: 'basic-form',
      },
      {
        name: '快递费用管理查询',
        path: 'step-form',
      },
      {
        name: '回执单扫码入库',
        authority: 'admin',
        path: 'advanced-form',
      },
    ],
  },
  {
    name: '保单打印',
    icon: 'form',
    path: 'form',
    children: [
      {
        name: '保单打印查询',
        path: 'basic-form',
      },
    ],
  },
  {
    name: '用户信息批改',
    icon: 'form',
    path: 'form',
    children: [
      {
        name: '批改用户信息',
        path: 'basic-form',
      },
      {
        name: '用户信息批改审核界面',
        path: 'step-form',
      },
    ],
  },
  {
    name: '销售方案管理',
    icon: 'form',
    path: 'form',
    children: [
      {
        name: '添加销售方案',
        path: 'basic-form',
      },
    ],
  },
  {
    name: '自动任务的运行管理界面',
    icon: 'form',
    path: 'form',
    children: [
      {
        name: 'job管理',
        path: 'basic-form',
      },
      {
        name: '自动任务列表管理',
        path: 'step-form',
      },
      {
        name: 'job任务配置',
        authority: 'admin',
        path: 'advanced-form',
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
