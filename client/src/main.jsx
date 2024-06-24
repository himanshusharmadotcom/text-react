import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { TextProvider } from './context/TextContext.jsx'
import {Provider} from 'react-redux'
import store from './redux/store.js'

ReactDOM.createRoot(document.getElementById('root')).render(
  <Provider store={store}>
    <TextProvider>
      <App />
    </TextProvider>
  </Provider>,
)
