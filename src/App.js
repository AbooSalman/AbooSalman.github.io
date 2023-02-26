import React from 'react'
import { HashRouter } from 'react-router-dom'
import AppRoutes from './Routes'

const App = () => (
  <div className='min-h-screen bg-dark'>
    <div>
      <HashRouter>
        <AppRoutes />
      </HashRouter>
    </div>
  </div>
)

export default App