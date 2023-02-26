import { AnimatePresence } from 'framer-motion'
import { About, Home } from 'pages'
import React from 'react'
import { Routes, Route } from 'react-router-dom'


const AppRoutes = () => {
    return (
        <AnimatePresence mode="wait">
            <Routes>
                <Route path="/about" element={<About />} />
                <Route path="/" element={<Home />} />
            </Routes>
        </AnimatePresence>
    )
}

export default AppRoutes