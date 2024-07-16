import './style.css'
import Header from './components/header'
import { ThemeContextProvider } from './context/theme-context'
import ThemeProvider from './providers/theme-provider'

export const metadata = {
  title: 'Frontend Mentor - REST Countries API with color theme switcher',
}

export default function CLayout({ children }) {
  return (
    <>
      <ThemeContextProvider>
        <ThemeProvider>
          <div className="min-h-screen bg-primary text-content">
            <Header />
            <main>{children}</main>
            <footer></footer>
          </div>
        </ThemeProvider>
      </ThemeContextProvider>
    </>
  )
}
