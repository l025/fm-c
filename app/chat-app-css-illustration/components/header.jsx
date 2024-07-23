'use client'

import Image from 'next/image'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { useState } from 'react'

export default function Header() {
  const pathname = usePathname()

  const [isOpen, setIsOpen] = useState(false)

  const navs = [
    { no: '00', name: 'Home', href: '/space-tourism-website' },
    {
      no: '01',
      name: 'Destination',
      href: '/space-tourism-website/destination',
    },
    { no: '02', name: 'Crew', href: '/space-tourism-website/crew' },
    { no: '03', name: 'Technology', href: '/space-tourism-website/technology' },
  ]

  function handleNavPopup() {
    setIsOpen(!isOpen)
  }
  return (
    <>
      <header className="fixed flex left-0 top-6 md:top-0 xl:top-10 w-screen z-20">
        <div className="flex-1"></div>
        <div className="w-full xl:container mx-auto">
          <div className="flex items-center justify-center">
            <Link
              href={'/'}
              className="text-white min-w-24 md:min-w-32 flex justify-center items-center">
              <Image
                className="max-w-10 max-h-10 md:max-w-12 md:max-h-12"
                src="/space-tourism-website/assets/shared/logo.svg"
                alt="logo"
                width={48}
                height={48}
              />
            </Link>
            <div className="hidden xl:block flex-1 w-full h-[1px] ml-4 -mr-12 bg-white/20 relative z-10"></div>
            <nav className="hidden md:flex nav-text flex-1 w-full pl-16 pr-8 xl:pl-32 xl:pr-16  justify-end gap-12 uppercase backdrop-blur-2xl bg-white/5 text-white">
              {navs.map(nav => (
                <Link
                  key={nav.no}
                  href={nav.href}
                  className={
                    'flex gap-3 py-8 border-b-[3px] hover:border-white/50 transition-colors' +
                    (pathname === nav.href
                      ? ' border-white'
                      : ' border-transparent')
                  }>
                  <span
                    className={
                      'font-semibold ' +
                      (pathname === nav.href ? 'hidden xl:block' : '')
                    }>
                    {nav.no}
                  </span>
                  {nav.name}
                </Link>
              ))}
            </nav>

            <div className="md:hidden flex-1 flex justify-end items-center">
              <button onClick={handleNavPopup} className="px-6 py-2.5">
                <img
                  src={
                    '/space-tourism-website/assets/shared/icon-hamburger.svg'
                  }
                  alt="toggle menu"
                />
              </button>
            </div>
          </div>

          {/* Mobile Nav */}
          <div className="md:hidden w-full relative overflow-hidden">
            <div
              onClick={handleNavPopup}
              className={
                'fixed left-0 right-0 top-0 bottom-0 bg-black/10 backdrop-blur-xl opacity-30' +
                (isOpen ? ' block' : ' hidden')
              }></div>
            <div
              className={
                'fixed top-0 right-0 bottom-0 w-64 left-auto flex flex-col gap-12 pl-8 py-6 backdrop-blur-2xl bg-white/5 text-white transition-all ' +
                (isOpen ? ' translate-x-0' : ' translate-x-full')
              }>
              <button onClick={handleNavPopup} className="px-6 py-2.5 self-end">
                <img
                  src={'/space-tourism-website/assets/shared/icon-close.svg'}
                  alt="toggle menu"
                />
              </button>
              <nav className="flex flex-col nav-text flex-1 w-full justify-start gap-8 uppercase">
                {navs.map(nav => (
                  <Link
                    key={nav.no}
                    href={nav.href}
                    onClick={handleNavPopup}
                    className={
                      'flex gap-3 border-r-[3px] hover:border-white/50 transition-colors ' +
                      (pathname === nav.href
                        ? ' border-white'
                        : ' border-transparent')
                    }>
                    <span className="font-semibold">{nav.no}</span>
                    {nav.name}
                  </Link>
                ))}
              </nav>
            </div>
          </div>
        </div>
        <div className="flex-1 backdrop-blur-2xl bg-white/5"></div>
      </header>
    </>
  )
}
