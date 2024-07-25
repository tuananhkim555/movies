import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './config/styles/font-family.css'
import './config/styles/modern-normalize.css'
import './config/styles/tailwind.css'
import './config/styles/main.css'

//Router
// eslint-disable-next-line no-unused-vars
//import   from 'react-router-dom' 
import {
  RouterProvider
} from "react-router-dom";
import { router } from './router/index.jsx'


ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router}>
    <App />
    </RouterProvider>
  </React.StrictMode>,
)
