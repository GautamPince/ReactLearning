import React, { useEffect } from 'react'

import './App.css'
import { ThemeProvider } from './contexts/theme'
import ThemeBtn from './components/ThemeBtn'
import Card from './components/Card'

function App() {
  const [themeMode, setThemeMode] = React.useState('light')
  const lightTheme = () => {
    setThemeMode('light')
  }
  const darkTheme = () => {
    setThemeMode('dark')
  }
  // actual change in theme 
  useEffect(() => {
    document.querySelector('html').classList.remove('dark', 'light')
    document.querySelector('html').classList.add(themeMode)
  }, [themeMode])

  return (
    <ThemeProvider value={{ themeMode, lightTheme, darkTheme }} >
      <div className='flex flex-wrap min-h-screen item-center'>
        <div className='w-full  p-4'>
          <div className='w-full max-w-sm mx-auto flex justify-end mb-4'>
            {            /* Theme Switcher or btn */}
            <ThemeBtn />
          </div>
          <div className='w-full max-w-sm mx-auto'>
            {/* Card */}
            <Card />
          </div>
        </div>

      </div>
    </ThemeProvider>
  )
}

export default App
