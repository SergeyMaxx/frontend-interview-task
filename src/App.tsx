import './App.css'
import {Route, Routes, Navigate } from 'react-router-dom'
import Dashboard from './components/dashboard'
import TestProvider from './hooks/useTestContext'
import Finalize from './components/finalize'
import Results from './components/results'

function App() {
  return (
    <TestProvider>
      <Routes>
        <Route path="/" element={<Dashboard />} />
        <Route path="results/:testId" element={<Results />} />
        <Route path="finalize/:testId" element={<Finalize />} />
        <Route path="*" element={<Navigate to="/" replace />} />
      </Routes>
    </TestProvider>
  )
}

export default App