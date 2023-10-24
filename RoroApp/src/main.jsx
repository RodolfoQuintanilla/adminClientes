import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import { createBrowserRouter, RouterProvider } from 'react-router-dom' //1
import Layout from './components/Layout'
import NuevoCliente from './pages/NuevoCliente'
import Index,{loader as clietesLoader} from './pages/Index'

//2
const router = createBrowserRouter([
  {
    path: '/',
    element: <Layout />,
    children: [
      {
        index: true,
        element: <Index />,
        loader: clietesLoader
      },
      {
        path: '/cliente/nuevo',
        element: <NuevoCliente />,
      },
    ],
  },
])

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} /> {/* 3 */}
  </React.StrictMode>,
)
