import React, { useState, useEffect } from 'react'
import ReactDOM from 'react-dom/client'

const App = () => {
  const [transactions, setTransactions] = useState([])

  // 从 json-server 获取数据
  useEffect(() => {
    fetch('http://localhost:5000/transactions')
      .then((res) => res.json())
      .then((data) => setTransactions(data))
  }, [])

  return (
    <div>
      <h1>记账记录</h1>
      <ul>
        {transactions.map((item) => (
          <li key={item.id}>
            {item.date}：{item.description}（
            {item.type === 'income' ? '收入' : '支出'} {item.amount}元）
          </li>
        ))}
      </ul>
    </div>
  )
}

const root = ReactDOM.createRoot(document.getElementById('root'))
root.render(<App />)
