'use client'

import { useContext } from 'react'
import { ThemeContext } from '../context/theme-context'
import { Moon, Sun } from '@geist-ui/icons'

const ToggleThemeBtn = () => {
  const { toggle, theme } = useContext(ThemeContext)

  if (theme === 'dark')
    return (
      <button className="flex gap-2" onClick={toggle}>
        <Moon />
        <span>Dark Mode</span>
      </button>
    )

  return (
    <button className="flex gap-2" onClick={toggle}>
      <Sun />
      <span>Dark Mode</span>
    </button>
  )
}

export default ToggleThemeBtn
