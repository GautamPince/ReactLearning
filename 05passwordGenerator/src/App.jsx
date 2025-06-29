import { useState, useCallback, useEffect, useRef } from 'react'

import './App.css'

function App() {
  const [length, setLength] = useState(8)
  const [includeNumbers, setIncludeNumbers] = useState(false)
  const [includeSymbols, setIncludeSymbols] = useState(false)
  // const [includeUpperCase, setIncludeUpperCase] = useState(false)
  // const [includeLowerCase, setIncludeLowerCase] = useState(true)
  const [Password, setPassword] = useState('generatedPassword')

  // useRef(null); hook can be used for direct DOM manipulation if needed.
  const passwordRef = useRef(null);

  const generatePassword = useCallback(() => {
    let pass = ""
    let str = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ"
    if (includeNumbers) str += "0123456789"
    if (includeSymbols) str += "!@#$%^&*()_+[]{}|;:,.<>?/~`"

    for (let i = 1; i <= length; i++) {
      const char = Math.floor(Math.random() * str.length + 1)
      pass = str.charAt(char) + pass

    }
    setPassword(pass)
  }
    , [length, includeNumbers, includeSymbols, setPassword])

  // generatePassword();
  useEffect(() => {
    generatePassword();
  }, [length, includeNumbers, includeSymbols, generatePassword])

  const copyToClipbord = useCallback(() => {
    // if (passwordRef.current) {
    //   passwordRef.current.select();
    //   document.execCommand('copy');
    //   // alert('Password copied to clipboard!');
    // }
    passwordRef.current?.select();
    passwordRef.current?.setSelectionRange(0, 40);
    window.navigator.clipboard.writeText(Password)
      .then(() => {
        alert('Password copied to clipboard!');
      })
      .catch((err) => {
        console.error('Failed to copy: ', err);
      }
      );
  }, [Password]);

  return (
    <>
      <div className='w-full max-w-md mx-auto shdow-md rounded-lg px-4 py-3 my-8 text-orange-500 bg-gray-500 '>
        <h1 className='text-white text-center'>Password Generator</h1>
        <div className=' bg-gray-100 flex shadow rounded-lg overflow-hidden mb-4 my-4'>
          <input
            type="text"
            value={Password}
            className='outline-none w-full py-1 px-3'
            placeholder='Generated Password'
            readOnly
            ref={passwordRef}

          />
          <button onClick={copyToClipbord} className='bg-blue-700 text-white outline-none px-3 py-0.5 shrink-0'>COPY</button>
        </div>
        <div className='flex gap-2 mb-4 texr-sm gap-x-2 '>
          <div className='flex items-center gap-x-2'>
            <input type="range" name="changeLength" id="" min={6} max={100} className='cursor-pointer'
              onChange={(e) => { setLength(e.target.value) }} />
            <label htmlFor='changeLength'>Length: {length}</label>
          </div>
          <div className='flex items-center gap-x-1'>
            <input
              type="checkbox"
              defaultChecked={includeNumbers}
              id='numberInput'
              onChange={() => {
                setIncludeNumbers((prev) => !prev);
              }} />
            <label htmlFor="numberInput">Numbers</label>
          </div>
          <div className='flex items-center gap-x-1'>
            <input
              type="checkbox"
              defaultChecked={includeSymbols}
              id='symbolInput'
              onChange={() => {
                setIncludeSymbols((prev) => !prev);
              }} />
            <label htmlFor="symbolInput">Symbols</label>
          </div>
        </div>
      </div>
    </>
  )
}

export default App
