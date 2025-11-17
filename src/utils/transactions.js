import request from './request'

// 记账记录相关接口
export const transactionApi = {
  // 获取所有记录
  getAll: () => {
    return request.get('/transactions') //
  },

  // 获取单条记录（根据 ID）
  getById: (id) => {
    return request.get(`/transactions/${id}`)
  },

  // 添加新记录
  add: (data) => {
    return request.post('/transactions', data)
  },

  // 更新记录
  update: (id, data) => {
    return request.put(`/transactions/${id}`, data)
  },

  // 删除记录
  delete: (id) => {
    return request.delete(`/transactions/${id}`)
  },
}
