import React from 'react'
import { createRoot } from 'react-dom'
import { RouterProvider } from 'react-router-dom'
import router from './router.jsx'

import './index.css'

createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router}/>
      {/* Your main app component goes here */}
      {/* For example: <App /> */}
   
  </React.StrictMode>
)
