import { useRef, useState } from 'react'
import { transactionFields } from '../../constants/fields'
import './index.less'
import { transactionApi } from '../../utils/transactions'
const { transactionTypeField, transactionCategoryField } = transactionFields
const { getAll } = transactionApi

const AddTransaction = () => {
  const [type, setType] = useState(transactionTypeField.defaultValue)
  const [classification, setClassification] = useState(
    transactionTypeField.defaultValue
  )
  const [money, setMoney] = useState('')
  const [describe, setDescribe] = useState('')
  const formRef = useRef('')

  // 类型
  const changeType = (e) => {
    setType(e.target.value)
  }

  // 金额
  const changeMoney = (e) => {
    setMoney(e.target.value)
  }

  // 描述
  const changeDescribe = (e) => {
    setDescribe(e.target.value)
  }

  // 分类
  const changeClassification = (e) => {
    setClassification(e.target.value)
  }

  // 表单验证函数
  const validateForm = () => {
    let isValid = true

    return isValid
  }

  // 保存
  const handleSubmit = async (event) => {
    event.preventDefault()
    // 2. 验证表单数据
    const isValid = validateForm()
    if (!isValid) return
    // 3. 收集表单数据
    const formData = new FormData(formRef.current)
    // 2. 转换 FormData 为普通对象（便于后续使用）
    const formValues = {}
    formData.forEach((value, key) => {
      if (formValues[key]) {
        formValues[key] = Array.isArray(formValues[key])
          ? [...formValues[key], value]
          : [formValues[key], value]
      } else {
        formValues[key] = value
      }
    })
    // 3. 打印/使用表单数据（实际项目可用于接口提交）
    console.log('表单所有数据：', formValues)
    const aa = await getAll()
    console.log(9999, aa)
  }
  return (
    <div className="add-transaction">
      <form ref={formRef} id="myForm" onSubmit={handleSubmit}>
        <div>
          <label>类型：</label>
          <select name="type" value={type} onChange={changeType}>
            {transactionTypeField.options.map((item) => {
              return (
                <option key={item.value} value={item.value}>
                  {item.label}
                </option>
              )
            })}
          </select>
        </div>
        <div>
          <label>金额：</label>
          <input
            placeholder="请输入金额"
            type="number"
            name="money"
            value={money}
            onChange={changeMoney}
          />
        </div>
        <div>
          <label>分类：</label>
          <select
            name="classification"
            value={classification}
            onChange={changeClassification}
          >
            {transactionCategoryField.options.map((item) => {
              return (
                <option key={item.value} value={item.value}>
                  {item.label}
                </option>
              )
            })}
          </select>
        </div>
        <div>
          <label>描述：</label>
          <input
            name="describe"
            placeholder="请输入描述"
            value={describe}
            onChange={changeDescribe}
            type="text"
          />
        </div>
        <button type="submit">保存</button>
      </form>
    </div>
  )
}
export default AddTransaction
