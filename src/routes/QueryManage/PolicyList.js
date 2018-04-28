import React, { PureComponent } from 'react';
import {
  Card,
  Button,
  Form,
  Icon,
  Col,
  Row,
  DatePicker,
  TimePicker,
  Input,
  Select,
  Popover,
} from 'antd';
import { connect } from 'dva';
import FooterToolbar from 'components/FooterToolbar';
import PageHeaderLayout from '../../layouts/PageHeaderLayout';

import TableForm from './TableForm';
import styles from './style.less';

const { Option } = Select;
const { RangePicker } = DatePicker;

const dtoPolicyList = {
  insrncBirth: '被保险人出生日期',
  insrncAddress: '被保险人地址',
  insrncMobile: '被保险人手提电话号码',
  insrncName: '被保险人姓名',
  insrncSex: '被保险人性别',
  insrncPostCode: '被保险人邮编',
  insrncCardId: '被保险人证件号码',
  insrncCardType: '被保险人证件类型',
  insrncJobType: '被保险人职业/工种',
  insrncAddr: '被保险人在职公司名称',
  insrncDayTel: '被保险人日间电话',
  prodNo: '产品代码',
  teleLeadCode: '电话销售代表编号',
  teleLeadName: '电话销售代表姓名',
  tms: '分期付款次数(判断记录数)',
  payWay: '缴费方式',
  postAddress: '客户要求投递地址',
  benfType: '受益方式',
  benfClntNmeB: '受益人姓名',
  insrncreLation: '受益人与被保险人的关系',
  prm: '所交保费',
  appBirth: '投保人出生年月',
  signDatetime: '签单日期',
  applyCertfCde: '投保人身份证号',
  applyCertfCls: '投保人证件类型',
  applyClntNmeA: '投保人姓名',
  applyZipCde: '投保人邮编',
  applyClntAddr: '投保人地址',
  applyMobile: '投保人手机号码',
  applyClntMrk: '投保人客户类型',
  applyJobType: '投保人职业分类',
  applyTel: '投保人家庭电话',
  applyMail: '投保人Email',
  applySex: '投保人性别',
  applyContact: '投保人联系人',
  applyLegal: '投保人法定代表人',
  creditCardsDate: '信用卡发卡日期',
  creditCardsType: '信用卡种类',
  cPlyAppNo: '投保单号',
  productPlan: '产品计划',
  applyNumber: '投保份数',
  transationCode: '原订单号',
  tInsrncBgnTm: '保险期间保险起期',
  tInsrncTm: '保险期间',
  tInsrncEndTm: '保险期间保险止期',
  payKind: '缴别',
  nGetPrm: '每期保费',
  cardId: '信用卡卡号',
  tsrCode: 'TSR编号',
  tsrName: '姓名',
  tsrTeam: '所属小组',
  appDate: '投保申请日期',
  cRelationI: '被保人与投保人关系',
  cAppprofType: '被保人职业',
  cMobileNoI: '被保人手机号码',
  cTelI: '被保人家庭电话',
  cMailI: '被保人电子邮件',
  cPlyNo: '保单号',
  nBenfPropB: '受益比例',
  cPlyNoOld: '原始保单号',
  renewalTime: '续保次数',
  oldEnterpCode: '订单渠道',
  prodCName: '产品名称',
  ifonline: '线上线下标志',
  cElcFlag: '电子纸质标志',
  thirdPayCity: '第三方扣款所属城市',
  thirdbank: '第三方扣款银行编码',
  thirdBank: '第三方扣款银行名称',
  thirdBranchBank: '第三方扣款开户行名称',
  thirdcardid: '第三方扣款账号',
  thirdCardDate: '第三方扣款账号有效期',
  thirdAppName: '第三方扣款账户姓名',
  thirdCardType: '第三方扣款账户类型',
  thirdcardtypeDesc: '第三方扣款账户类型描述',
  thirdcerttype: '第三方扣款客户证件类型',
  thirdcerttypeDesc: '第三方扣款客户证件类型描述',
  thirdcertno: '第三方扣款客户证件号码',
  thirdflag: '第三方扣款标志',
  thirdcallresult: '第三方支付回访结果',
  actId: '活动号',
  status: '状态',
};
//console.table(dtoPolicyList);

const tableData = [
  {
    key: '1',
    workId: '00001',
    name: 'John Brown',
    department: 'New York No. 1 Lake Park',
  },
  {
    key: '2',
    workId: '00002',
    name: 'Jim Green',
    department: 'London No. 1 Lake Park',
  },
  {
    key: '3',
    workId: '00003',
    name: 'Joe Black',
    department: 'Sidney No. 1 Lake Park',
  },
];

class PolicyList extends PureComponent {
  state = {
    width: '100%',
  };
  componentDidMount() {
    window.addEventListener('resize', this.resizeFooterToolbar);
  }
  componentWillUnmount() {
    window.removeEventListener('resize', this.resizeFooterToolbar);
  }
  resizeFooterToolbar = () => {
    const sider = document.querySelectorAll('.ant-layout-sider')[0];
    const width = `calc(100% - ${sider.style.width})`;
    if (this.state.width !== width) {
      this.setState({ width });
    }
  };
  render() {
    const tabList = [
      {
        key: 'policyInfo',
        tab: '保单基本信息',
      },
      {
        key: 'applyInfo',
        tab: '投保人基本信息',
      },
      {
        key: 'insrncInfo',
        tab: '被保人基本信息',
      },
      {
        key: 'beneTsr',
        tab: '受益人与TSR基本信息',
      },
      {
        key: 'payInfo',
        tab: '请扣款信息',
      },
      {
        key: 'express',
        tab: '快递信息',
      },
      {
        key: 'imageReceipt',
        tab: '回执影像信息',
      },
      {
        key: 'imagePolicy',
        tab: '保单影像信息',
      },
      {
        key: 'revisit',
        tab: '回访信息',
      },
      {
        key: 'present',
        tab: '赠险信息',
      },
      {
        key: 'integralInfo',
        tab: '赠送积分',
      },
      {
        key: 'printInfo',
        tab: '打印信息',
      },
      {
        key: 'shortMessage',
        tab: '短信信息',
      },
      {
        key: 'PolicyLog',
        tab: '保单操作日志',
      },
      {
        key: 'correction',
        tab: '保单批改信息',
      },
      {
        key: 'cardInfo',
        tab: '第三方卡号信息',
      },
    ];
    const { form, dispatch, submitting } = this.props;
    const { getFieldDecorator, validateFieldsAndScroll, getFieldsError } = form;
    const validate = () => {
      validateFieldsAndScroll((error, values) => {
        if (!error) {
          // submit the values
          dispatch({
            type: 'form/submitPolicyList',
            payload: values,
          });
        }
      });
    };
    const errors = getFieldsError();
    const getErrorInfo = () => {
      const errorCount = Object.keys(errors).filter(key => errors[key]).length;
      if (!errors || errorCount === 0) {
        return null;
      }
      const scrollToField = fieldKey => {
        const labelNode = document.querySelector(`label[for="${fieldKey}"]`);
        if (labelNode) {
          labelNode.scrollIntoView(true);
        }
      };
      const errorList = Object.keys(errors).map(key => {
        if (!errors[key]) {
          return null;
        }
        return (
          <li key={key} className={styles.errorListItem} onClick={() => scrollToField(key)}>
            <Icon type="cross-circle-o" className={styles.errorIcon} />
            <div className={styles.errorMessage}>{errors[key][0]}</div>
            <div className={styles.errorField}>{fieldLabels[key]}</div>
          </li>
        );
      });
      return (
        <span className={styles.errorIcon}>
          <Popover
            title="表单校验信息"
            content={errorList}
            overlayClassName={styles.errorPopover}
            trigger="click"
            getPopupContainer={trigger => trigger.parentNode}
          >
            <Icon type="exclamation-circle" />
          </Popover>
          {errorCount}
        </span>
      );
    };

    return (
      <PageHeaderLayout title="保单详情" wrapperClassName={styles.policyList} tabList={tabList}>
        <Card title="保单基本信息" className={styles.card} bordered={false}>
          <Form layout="vertical" hideRequiredMark>
            <Row gutter={16}>
              <Col lg={6} md={12} sm={24}>
                <Form.Item label={dtoPolicyList.cPlyNo}>
                  {getFieldDecorator('name', {
                    rules: [{ required: true, message: '' }],
                  })(<Input />)}
                </Form.Item>
              </Col>
              <Col xl={{ span: 6, offset: 2 }} lg={{ span: 8 }} md={{ span: 12 }} sm={24}>
                <Form.Item label={dtoPolicyList.cPlyNoOld}>
                  {getFieldDecorator('url', {
                    rules: [{ required: true, message: '请选择' }],
                  })(<Input />)}
                </Form.Item>
              </Col>
              <Col xl={{ span: 8, offset: 2 }} lg={{ span: 10 }} md={{ span: 24 }} sm={24}>
                <Form.Item label={dtoPolicyList.cPlyAppNo}>
                  {getFieldDecorator('owner', {})(<Input />)}
                </Form.Item>
              </Col>
            </Row>
            <Row gutter={16}>
              <Col lg={6} md={12} sm={24}>
                <Form.Item label={dtoPolicyList.prodCName}>
                  {getFieldDecorator('approver', {})(<Input />)}
                </Form.Item>
              </Col>
              <Col xl={{ span: 6, offset: 2 }} lg={{ span: 8 }} md={{ span: 12 }} sm={24}>
                <Form.Item label={dtoPolicyList.productPlan}>
                  {getFieldDecorator('dateRange', {})(<Input />)}
                </Form.Item>
              </Col>
              <Col xl={{ span: 8, offset: 2 }} lg={{ span: 10 }} md={{ span: 24 }} sm={24}>
                <Form.Item label={dtoPolicyList.transationCode}>
                  {getFieldDecorator('type', {})(<Input />)}
                </Form.Item>
              </Col>
            </Row>
            <Row gutter={16}>
              <Col lg={6} md={12} sm={24}>
                <Form.Item label={dtoPolicyList.payKind}>
                  {getFieldDecorator('name', {
                    rules: [{ required: true, message: '' }],
                  })(<Input />)}
                </Form.Item>
              </Col>
              <Col xl={{ span: 6, offset: 2 }} lg={{ span: 8 }} md={{ span: 12 }} sm={24}>
                <Form.Item label={dtoPolicyList.nGetPrm}>
                  {getFieldDecorator('name', {
                    rules: [{ required: true, message: '' }],
                  })(<Input />)}
                </Form.Item>
              </Col>
              <Col xl={{ span: 8, offset: 2 }} lg={{ span: 10 }} md={{ span: 24 }} sm={24}>
                <Form.Item label={dtoPolicyList.tInsrncTm}>
                  {getFieldDecorator('dateRange', {})(
                    <RangePicker placeholder={['开始日期', '结束日期']} style={{ width: '100%' }} />
                  )}
                </Form.Item>
              </Col>
            </Row>
            <Row gutter={16}>
              <Col lg={6} md={12} sm={24}>
                <Form.Item label={dtoPolicyList.cardId}>
                  {getFieldDecorator('name', {
                    rules: [{ required: true, message: '' }],
                  })(<Input />)}
                </Form.Item>
              </Col>
              <Col xl={{ span: 6, offset: 2 }} lg={{ span: 8 }} md={{ span: 12 }} sm={24}>
                <Form.Item label={dtoPolicyList.cElcFlag}>
                  {getFieldDecorator('name', {
                    rules: [{ required: true, message: '' }],
                  })(<Input />)}
                </Form.Item>
              </Col>
              <Col xl={{ span: 8, offset: 2 }} lg={{ span: 10 }} md={{ span: 24 }} sm={24}>
                <Form.Item label={dtoPolicyList.ifonline}>
                  {getFieldDecorator('name', {
                    rules: [{ required: true, message: '' }],
                  })(<Input />)}
                </Form.Item>
              </Col>
            </Row>
            <Row>
              <Col lg={24} md={12} sm={24}>
                <Form.Item label={dtoPolicyList.postAddress}>
                  {getFieldDecorator('name', {
                    rules: [{ required: true, message: '' }],
                  })(<Input />)}
                </Form.Item>
              </Col>
            </Row>
          </Form>
        </Card>
        <FooterToolbar style={{ width: this.state.width }}>
          {getErrorInfo()}
          <Button type="primary" onClick={validate} loading={submitting}>
            提交
          </Button>
        </FooterToolbar>
      </PageHeaderLayout>
    );
  }
}

export default connect(({ global, loading }) => ({
  collapsed: global.collapsed,
  submitting: loading.effects['form/submitPolicyList'],
}))(Form.create()(PolicyList));
