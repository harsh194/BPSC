import React from 'react'
import Header from '../Navigation/Header'
import Sidebar from '../Navigation/Sidebar'
import { useBPSC } from '../../context/BPSCContext'

function Layout({ children }) {
  const { state, setSidebarOpen } = useBPSC()
  const { sidebarOpen } = state

  return (
    <div className="min-h-screen bg-secondary-50 flex">
      {/* Sidebar */}
      <Sidebar />
      
      {/* Mobile backdrop */}
      {sidebarOpen && (
        <div 
          className="fixed inset-0 z-20 bg-black bg-opacity-50 lg:hidden"
          onClick={() => setSidebarOpen(false)}
        />
      )}

      {/* Main content area */}
      <div className="flex-1 flex flex-col min-w-0">
        <Header />
        <main className="flex-1 overflow-auto">
          {children}
        </main>
      </div>
    </div>
  )
}

export default Layout