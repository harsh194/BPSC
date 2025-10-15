import React from 'react'
import { Loader2 } from 'lucide-react'
import { clsx } from 'clsx'

function LoadingSpinner({ size = 'medium', text, className }) {
  const sizeClasses = {
    small: 'w-4 h-4',
    medium: 'w-6 h-6',
    large: 'w-8 h-8'
  }

  return (
    <div className={clsx('flex flex-col items-center justify-center space-y-2', className)}>
      <Loader2 className={clsx('animate-spin text-primary-600', sizeClasses[size])} />
      {text && (
        <p className="text-sm text-secondary-600 text-center">{text}</p>
      )}
    </div>
  )
}

export default LoadingSpinner