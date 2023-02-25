import { About, Home } from 'pages'
import React from 'react'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'


const AppRoutes = () => {
    const router = createBrowserRouter([
        { path: "/", element: <Home /> },
        { path: "/about", element: <About /> },
    ])
    return (
        <RouterProvider router={router} />
    )
}

export default AppRoutes