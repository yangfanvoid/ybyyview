import React, { PureComponent } from 'react';
import { connect } from 'dva';
import {
  Form,
  Row,
  Col,
  Input,
  DatePicker,
  Select,
  Button,
  Card,
  InputNumber,
  Radio,
  Icon,
  Tooltip,
} from 'antd';
import PageHeaderLayout from '../../layouts/PageHeaderLayout';
import styles from './style.less';
import rule from '../../models/rule';
import { STATUS_CODES } from 'http';
import { message } from 'antd';
import { getRegularCheck } from '../../utils/utils';

const FormItem = Form.Item;
const { Option } = Select;
const { RangePicker } = DatePicker;
const { TextArea } = Input;
//alert(state);

//alert(JSON.stringify(rule.state));
//const { ruleFastMoney } = rule

@connect(({ profile }) => ({
  profile,
}))
@Form.create()
export default class FastmoneyCorrection extends PureComponent {
  componentDidMount() {}
  componentWillMount() {}
  handleSearch = e => {
    let cPlyNo = this.props.form.getFieldValue('cPlyNo');
    let regMessage = /^[A-Za-z0-9]{4,40}$/;
    regMessage.test(cPlyNo) ? message.info('查询中') : message.info('请输入正确保单号');

    let searchTerm = {
      cPlyNo: cPlyNo,
    };
    this.props.dispatch({
      type: 'profile/fetchFastMoney',
      payload: searchTerm,
    });
  };

  handleSubmit = e => {
    this.props.form.validateFieldsAndScroll((err, values) => {
      if (!err) {
        this.props.dispatch({
          type: 'profile/submitFastMoney',
          payload: values,
        });
      }
    });
  };

  handleSave = e => {
    this.props.form.validateFieldsAndScroll((err, values) => {
      if (!err) {
        this.props.dispatch({
          type: 'profile/saveFastMoney',
          payload: values,
        });
      }
    });
  };

  render() {
    //console.log(JSON.stringify(this.props));
    const { profile: { data } } = this.props;
    const { getFieldDecorator, getFieldValue } = this.props.form;
    const policyProfile = null == data ? undefined : data.list[0];
    const formItemLayout = {
      labelCol: {
        xs: { span: 12 },
        sm: { span: 7 },
      },
      wrapperCol: {
        xs: { span: 12 },
        sm: { span: 12 },
        md: { span: 10 },
      },
    };

    const submitFormLayout = {
      wrapperCol: {
        xs: { span: 24, offset: 0 },
        sm: { span: 10, offset: 7 },
      },
    };

    return (
      <PageHeaderLayout title="转快钱批改">
        <Card bordered={false}>
          <Form hideRequiredMark style={{ marginTop: 8 }}>
            <div className={styles.information}>
              <FormItem {...formItemLayout} label="保单号">
                {getFieldDecorator('cPlyNo')(<Input style={{ width: '70%' }} placeholder="" />)}
                <Button type="primary" style={{ marginLeft: 8 }} onClick={this.handleSearch}>
                  查询
                </Button>
              </FormItem>
            </div>
            <div className={styles.searchListItem}>
              <FormItem
                {...formItemLayout}
                label={
                  <span>
                    保单号
                    <em className={styles.optional}>
                      <Tooltip title="点击跳转至保单详情页">
                        <a target="_blank" href="www.baidu.com">
                          （详情）
                          <Icon type="info-circle-o" style={{ marginRight: 4 }} />
                        </a>
                      </Tooltip>
                    </em>
                  </span>
                }
              >
                <Input
                  style={{ width: '100%' }}
                  readOnly="true"
                  placeholder=""
                  value={undefined === policyProfile ? '' : policyProfile.cPlyNo}
                />
              </FormItem>
              <FormItem {...formItemLayout} label="投保单号">
                <Input
                  style={{ width: '100%' }}
                  readOnly="true"
                  placeholder=""
                  value={undefined === policyProfile ? '' : policyProfile.cPlyAppNo}
                />
              </FormItem>
              <FormItem {...formItemLayout} label="被保人姓名">
                <Input
                  style={{ width: '100%' }}
                  readOnly="true"
                  placeholder=""
                  value={undefined === policyProfile ? '' : policyProfile.thirdAppName}
                />
              </FormItem>
              <FormItem {...formItemLayout} label="银行渠道">
                <Input
                  style={{ width: '100%' }}
                  readOnly="true"
                  placeholder=""
                  value={undefined === policyProfile ? '' : policyProfile.oldEnterpCode}
                />
              </FormItem>
            </div>
            <div className={styles.searchListItem}>
              <FormItem {...formItemLayout} label="第三方扣款所属城市">
                {getFieldDecorator('thirdPayCity')(
                  <Input style={{ width: '100%' }} placeholder="" />
                )}
              </FormItem>
              <FormItem {...formItemLayout} label="第三方扣款开户行名称">
                {getFieldDecorator('newEnterpCode')(
                  <Select placeholder="请选择" style={{ width: '100%' }}>
                    <Option value="95568">民生银行</Option>
                    <Option value="95555">招商银行</Option>
                    <Option value="95558">中信银行</Option>
                    <Option value="95533">建设银行</Option>
                  </Select>
                )}
              </FormItem>
              <FormItem {...formItemLayout} label="第三方扣款银行名称">
                {getFieldDecorator('thirdBank', {
                  rules: [{ required: true, message: '请选择扣款银行' }],
                })(<Input style={{ width: '100%' }} placeholder="" />)}
              </FormItem>
              <FormItem {...formItemLayout} label="第三方扣款账号有效期">
                {getFieldDecorator('thirdCardDate', getRegularCheck('validity'))(
                  <Input style={{ width: '100%' }} placeholder="" />
                )}
              </FormItem>
              <FormItem {...formItemLayout} label="第三方扣款账号">
                {getFieldDecorator('thirdCardId', getRegularCheck('cardId'))(
                  <Input style={{ width: '100%' }} placeholder="" />
                )}
              </FormItem>
              <FormItem {...formItemLayout} label="第三方扣款账号姓名">
                {getFieldDecorator('thirdAppName')(
                  <Input style={{ width: '100%' }} placeholder="" />
                )}
              </FormItem>
              <FormItem {...formItemLayout} label="第三方扣款账户类型">
                {getFieldDecorator('thirdCardType')(
                  <Select placeholder="请选择" style={{ width: '100%' }}>
                    <Option value="借记卡" checked>
                      借记卡
                    </Option>
                    <Option value="贷记卡">贷记卡</Option>
                    <Option value="存折">存折</Option>
                  </Select>
                )}
              </FormItem>
              <FormItem {...formItemLayout} label="第三方扣款客户证件类型">
                {getFieldDecorator('thirdCertType')(
                  <Select placeholder="请选择" style={{ width: '100%' }}>
                    <Option value="居民身份证">居民身份证</Option>
                    <Option value="临时身份证">临时身份证</Option>
                    <Option value="居民户口簿">居民户口簿</Option>
                    <Option value="军官证">军官证</Option>
                    <Option value="警官证">警官证</Option>
                    <Option value="士兵证">士兵证</Option>
                    <Option value="港澳居民来往内地通行证（回乡证）">
                      港澳居民来往内地通行证（回乡证）
                    </Option>
                    <Option value="台湾居民来往大陆通行证（暂归入回乡证）">
                      台湾居民来往大陆通行证（暂归入回乡证）
                    </Option>
                    <Option value="护照">护照</Option>
                    <Option value="机动车驾驶证">机动车驾驶证</Option>
                    <Option value="其他">其他</Option>
                  </Select>
                )}
              </FormItem>
              <FormItem {...formItemLayout} label="扣款客户证件号码">
                {getFieldDecorator('thirdCertNo', getRegularCheck('certNo'))(
                  <Input style={{ width: '100%' }} placeholder="" />
                )}
              </FormItem>
              {getFieldDecorator('type')(<Input style={{ display: 'none' }} placeholder="" />)}
            </div>
            <FormItem {...submitFormLayout} style={{ marginTop: 32 }}>
              <Button type="primary" onClick={this.handleSubmit}>
                提交
              </Button>
              <Button style={{ marginLeft: 8 }} onClick={this.handleSave}>
                暂存
              </Button>
            </FormItem>
          </Form>
        </Card>
      </PageHeaderLayout>
    );
  }
}
