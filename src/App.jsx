import React, { useState } from 'react'
import { Route, Routes } from 'react-router-dom'

// ======= Pages =======
import LayoutCustoms from './layouts'
import HomePage from './pages/HomePage'

import "./styles/index.scss"
export default function App() {
  
  return (
    <Routes>
      <Route path="/" element={<LayoutCustoms />}>
        <Route index element={<HomePage />} />
      </Route>
    </Routes>
  )
}
