import React from 'react'
import ReactDOM from 'react-dom/client'
import './styles/style.css'
import { RouterProvider } from 'react-router-dom'
import { router } from './Router'
import UserProvider from './UserProvider'

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <UserProvider>
      <RouterProvider router={router}></RouterProvider>
    </UserProvider>
  </React.StrictMode>,
)
