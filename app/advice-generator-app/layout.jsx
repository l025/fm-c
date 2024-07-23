import './style.css'

export const metadata = {
  title: 'Frontend Mentor - Advice generator app',
}

export default function CLayout({ children }) {
  return (
    <>
      <div className="min-h-screen flex items-center justify-center">
        <main>{children}</main>
      </div>
    </>
  )
}
