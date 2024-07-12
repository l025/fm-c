import Link from 'next/link'
import './style.css'
import Header from './components/header'

export const metadata = {
  title: 'Frontend Mentor - Space tourism website',
}

export default function CLayout({ children }) {
  return (
    <>
      <div className="bg-primary text-white">
        <Header />
        <main>{children}</main>
        <footer></footer>
      </div>
    </>
  )
}
