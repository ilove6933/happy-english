import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
// import './index.css'  <-- 如果您沒有這個檔案，請確認這行是被刪除或註解掉的，不然也會報錯白畫面

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
)
