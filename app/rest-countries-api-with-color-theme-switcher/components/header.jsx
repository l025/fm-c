'use client'

import Link from 'next/link'
import ToggleThemeBtn from './toggle-theme-btn'

export default function Header() {
  return (
    <>
      <header className="w-screen shadow-md relative bg-secondary">
        <div className="container mx-auto">
          <div className="flex justify-between items-center px-5 py-6">
            <Link href={'/'} className="text-lg font-bold">
              Where in the world?
            </Link>

            <ToggleThemeBtn />
          </div>
        </div>
      </header>
    </>
  )
}
