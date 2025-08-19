'use client'

import React, { createContext, useContext, useState, useEffect, ReactNode } from 'react'

export type Version = 'original' | 'combined'

interface VersionContextType {
  version: Version
  setVersion: (version: Version) => void
  toggleVersion: () => void
}

const VersionContext = createContext<VersionContextType | undefined>(undefined)

interface VersionProviderProps {
  children: ReactNode
}

export const VersionProvider: React.FC<VersionProviderProps> = ({ children }) => {
  const [version, setVersionState] = useState<Version>('original')

  useEffect(() => {
    const savedVersion = localStorage.getItem('homepage-version') as Version
    if (savedVersion && (savedVersion === 'original' || savedVersion === 'combined')) {
      setVersionState(savedVersion)
    }
  }, [])

  useEffect(() => {
    localStorage.setItem('homepage-version', version)
  }, [version])

  const setVersion = (newVersion: Version) => {
    setVersionState(newVersion)
  }

  const toggleVersion = () => {
    setVersionState(prev => prev === 'original' ? 'combined' : 'original')
  }

  return (
    <VersionContext.Provider value={{ version, setVersion, toggleVersion }}>
      {children}
    </VersionContext.Provider>
  )
}

export const useVersion = (): VersionContextType => {
  const context = useContext(VersionContext)
  if (context === undefined) {
    throw new Error('useVersion must be used within a VersionProvider')
  }
  return context
}
