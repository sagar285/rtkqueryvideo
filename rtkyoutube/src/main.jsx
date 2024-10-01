import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import {ApiProvider} from "@reduxjs/toolkit/query/react"
import { userApi } from '../rtk/Api.js'
import { Provider } from 'react-redux'
import { store } from '../rtk/store.js'

createRoot(document.getElementById('root')).render(
  <StrictMode>
  
  <Provider store={store}>
    <App />
  </Provider>

  </StrictMode>,
)
