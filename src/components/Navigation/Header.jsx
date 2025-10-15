import React from 'react'
import { Menu, GraduationCap, RefreshCw } from 'lucide-react'
import { useBPSC } from '../../context/BPSCContext'

function Header() {
  const { state, toggleSidebar, refreshContent } = useBPSC()
  const { loading } = state

  const handleRefresh = async () => {
    await refreshContent()
  }

  return (
    <header className="bg-white border-b border-secondary-200 px-4 py-3 flex items-center justify-between shadow-sm">
      {/* Left side */}
      <div className="flex items-center space-x-4">
        {/* Mobile menu button */}
        <button
          onClick={toggleSidebar}
          className="p-2 rounded-lg hover:bg-secondary-100 lg:hidden transition-colors"
        >
          <Menu className="w-5 h-5 text-secondary-600" />
        </button>

        {/* Logo */}
        <div className="flex items-center space-x-2">
          <div className="bg-primary-600 p-2 rounded-lg">
            <GraduationCap className="w-6 h-6 text-white" />
          </div>
          <div className="hidden sm:block">
            <h1 className="text-xl font-bold text-secondary-800">
              BPSC Preparation Hub
            </h1>
            <p className="text-sm text-secondary-600">
              Bihar Public Service Commission
            </p>
          </div>
        </div>
      </div>

      {/* Right side */}
      <div className="flex items-center space-x-2">
        {/* Refresh button */}
        <button
          onClick={handleRefresh}
          disabled={loading}
          className="p-2 rounded-lg hover:bg-secondary-100 disabled:opacity-50 transition-colors"
          title="Refresh content"
        >
          <RefreshCw className={`w-5 h-5 text-secondary-600 ${loading ? 'animate-spin' : ''}`} />
        </button>

        {/* User info placeholder */}
        <div className="hidden md:flex items-center space-x-2 bg-secondary-100 rounded-lg px-3 py-2">
          <div className="w-8 h-8 bg-primary-600 rounded-full flex items-center justify-center">
            <span className="text-sm font-medium text-white">U</span>
          </div>
          <div className="text-sm">
            <p className="font-medium text-secondary-800">Student</p>
            <p className="text-secondary-600">BPSC Aspirant</p>
          </div>
        </div>
      </div>
    </header>
  )
}

export default Header