import { useRef, useState } from 'react'
import { Button, Flex, Form, Input, InputNumber, Select, Radio } from 'antd'
import { transactionFields } from '../../constants/fields'
import './index.less'
import { transactionApi } from '../../utils/transactions'
const { transactionTypeField, transactionCategoryField } = transactionFields
const { getAll } = transactionApi

const AddTransaction = () => {
  // 保存
  const layout = {
    labelCol: { span: 8 },
    wrapperCol: { span: 16 },
  }
  const validateMessages = {
    required: '${label} is required!',
    types: {
      email: '${label} is not a valid email!',
      number: '${label} is not a valid number!',
    },
    number: {
      range: '${label} must be between ${min} and ${max}',
    },
  }
  const onFinish = (values) => {
    console.log(values)
  }
  return (
    <div className="add-transaction">
      <Form
        {...layout}
        name="nest-messages"
        onFinish={onFinish}
        style={{ maxWidth: 600 }}
        validateMessages={validateMessages}
        initialValues={{
          type: transactionTypeField.defaultValue,
          classification: transactionCategoryField.defaultValue,
        }}
      >
        <Form.Item name="type" label="类型" rules={[{ required: true }]}>
          <Select placeholder="Please select a country">
            {transactionTypeField.options.map((item) => {
              return (
                <Select.Option key={item.value} value={item.value}>
                  {item.label}
                </Select.Option>
              )
            })}
          </Select>
        </Form.Item>
        <Form.Item
          name="classification"
          label="分类"
          rules={[{ type: 'classification' }]}
        >
          <Radio.Group block options={transactionCategoryField.options} />
        </Form.Item>
        <Form.Item
          name="money"
          label="金额"
          rules={[{ type: 'number', min: 0, max: 99 }]}
        >
          <InputNumber />
        </Form.Item>
        <Form.Item name="describe" label="描述">
          <Input.TextArea />
        </Form.Item>
        <Form.Item label={null}>
          <Button type="primary" htmlType="submit">
            保存
          </Button>
        </Form.Item>
      </Form>
    </div>
  )
}
export default AddTransaction
