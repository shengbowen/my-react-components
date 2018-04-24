import React, { Component } from 'react';

import { Select, Form, Icon, Input, Button } from 'antd';

import { actions } from '../actions/data';
import store from '../store';

const Option = Select.Option;
const FormItem = Form.Item;

function hasErrors(fieldsError) {
  return Object.keys(fieldsError).some(field => fieldsError[field]);
}

class AddForm extends Component {
  constructor(props) {
    super(props);

    this.state = {
      selectedCity: this.props.data[0].value,
    };
  }

  componentDidMount() {
    // To disabled submit button at the beginning.
    this.props.form.validateFields();
    console.log(this.props.form);
  }

  handleSubmit = (e) => {
    e.preventDefault();

    this.props.form.validateFields((err, values) => {
      if (!err) {
        // const { dispatch } = this.props;
        // debugger;
        store.dispatch(actions.addChild(this.state.selectedCity, values.value, values.label));
      }
    });
  }

  handleChange = (value) => {
    this.setState({
      selectedCity: value
    })
  }

  render() {
    const { getFieldDecorator, getFieldsError, getFieldError, isFieldTouched } = this.props.form;
    const options = this.props.data;
    // Only show error after a field is touched.
    const valueError = isFieldTouched('value') && getFieldError('value');
    const labelError = isFieldTouched('label') && getFieldError('label');
    return (
      <Form layout="inline" onSubmit={this.handleSubmit}>
        <FormItem >
          <Select defaultValue={this.state.selectedCity} style={{ width: 120 }} onChange={this.handleChange}>
            {
              options.map(item => {
                return (
                  <Option value={ item.value } key={ item.value }>{ item.label }</Option>
                )
              })
            }
          </Select>
        </FormItem>
        <FormItem
          validateStatus={valueError ? 'error' : ''}
          help={valueError || ''}
        >
          {getFieldDecorator('value', {
            rules: [{ required: true, message: '请输入value' }],
          })(
            <Input prefix={<Icon type="user" style={{ color: 'rgba(0,0,0,.25)' }} />} placeholder="Value" />
          )}
        </FormItem>
        <FormItem
          validateStatus={labelError ? 'error' : ''}
          help={labelError || ''}
        >
          {getFieldDecorator('label', {
            rules: [{ required: true, message: '请输入label' }],
          })(
            <Input prefix={<Icon type="lock" style={{ color: 'rgba(0,0,0,.25)' }} />} placeholder="Label" />
          )}
        </FormItem>
        <FormItem>
          <Button
            type="primary"
            htmlType="submit"
            disabled={hasErrors(getFieldsError())}
          >
            Add
          </Button>
        </FormItem>
      </Form>
    );
  }
}

const WrappedAddForm = Form.create({})(AddForm);

// const mapStateToProps = (state) => {
//   return {
//     ...state.data
//   }
// };

// export default connect(mapStateToProps)(Demo);

export default WrappedAddForm;