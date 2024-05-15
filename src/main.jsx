import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { BrowserRouter } from 'react-router-dom'
import { ThemeProvider } from '@emotion/react'
import { createTheme } from '@mui/material'
import store from './app/store.js'
import { Provider } from 'react-redux'
const defaultTheme = createTheme();
ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
     <Provider store={store}>
    <ThemeProvider theme={defaultTheme}>
    <BrowserRouter>
    <App />
    </BrowserRouter>
    </ThemeProvider>
    </Provider>
  </React.StrictMode>,
)
