'use client'

import React, { useContext, useEffect } from 'react'
import { ThemeContext } from '../context/theme-context'

const ThemeProvider = ({ children }) => {
  const { theme } = useContext(ThemeContext)
  const [mounted, setMounted] = React.useState(false)
  useEffect(() => {
    setMounted(true)
  }, [])
  if (mounted) {
    return <div className={theme}>{children}</div>
  }

  return <div className={theme}>{children}</div>
}

export default ThemeProvider
